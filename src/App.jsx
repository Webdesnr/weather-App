import http from "./services/httpservices";
import { useEffect, useState } from "react";
import HorizontalCard from "./components/HorizontalCard";
import VerticalCard from "./components/VerticalCard";
import Loading from "./components/Loading/Index";
import Search from "./components/Search";
import dayName from "./util/convertDateToDayName";

function App() {
  const [wheatherLocation, setLocation] = useState({});
  const [current, setCurrent] = useState({});
  const [forecasts, setForecast] = useState([]);
  const [city, setCity] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState({});

  useEffect(() => {
    http
      .get("", {
        signal: AbortSignal.timeout(4000),
        params: {
          q: city || "chennai",
          days: 5,
        },
      })
      .then(({ data }) => {
        if (data !== {}) {
          setLoading(false);
          setError({});
        }
        setLocation(data.location);
        setCurrent(data.current);
        setForecast(data.forecast.forecastday);
      })
      .catch((err) => {
        if (err.response?.status === 400) setError({ message: "INVALID CITY" });
      });
  }, [city]);

  const tempature = `Tempature: ${current?.temp_c}\u00B0C`;

  return (
    <div className="container-fluid">
      <div className="container w-75 m-auto py-5">
        <Search onSearch={(e) => setCity(e)} />
        {error.message && <p className="text-warning">{error.message}</p>}
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <HorizontalCard
              img={current.condition?.icon}
              title={wheatherLocation?.name}
              day={"Today"}
              temp_c={tempature}
              description={current.condition?.text}
            />
            <div className="d-flex justify-content-evenly">
              {forecasts
                .filter(
                  (forecast) =>
                    forecast.date !==
                    wheatherLocation["localtime"].substring(
                      0,
                      wheatherLocation["localtime"].indexOf(" "),
                    ),
                )
                .map((forecast) => {
                  const condition = forecast.day?.condition;
                  return (
                    <VerticalCard
                      key={forecast["date"]}
                      img={condition.icon}
                      day={dayName(forecast["date"])}
                      description={condition["text"]}
                    />
                  );
                })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

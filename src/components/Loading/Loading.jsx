import img from "../../assets/images/sun_1102121.png";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className="text-center mt-5">
      <img
        src={img}
        alt="loadingImage"
        className={[styles["rotate"], "img-fluid col-2 "].join(" ")}
      />
    </div>
  );
}

export default Loading;

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function dayName(day) {
  const date = new Date(day).getDay();
  return weekday[date];
}

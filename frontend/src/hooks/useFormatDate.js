export default function useFormatDate(dt) {
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = new Date(dt);
  date = date.toLocaleDateString("en-IN", options);

  return { date };
}

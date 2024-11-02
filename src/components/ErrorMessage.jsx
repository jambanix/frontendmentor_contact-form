
export const ErrorMessage = ({ message }) => {

  const isActive = message ? true : false;
  const msgText = message ? message : "";

  return (
    <p className={`text-sm transition-all ${isActive ? "opacity-100 visible text-red" : "opacity-0 hidden"}`}>{msgText}</p>
  )
}
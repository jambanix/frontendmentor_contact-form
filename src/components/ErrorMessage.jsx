
export const ErrorMessage = ({ message }) => {

  const isActive = message !== undefined;

  return (
    <p className={`text-sm transition-opacity text-red ${isActive ? "opacity-100 visible" : "opacity-0 invisible"}`}>{message}</p>
  )
}
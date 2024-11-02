import iconSuccess from "../assets/images/icon-success-check.svg"

export const Modal = ({ visible }) => {

  const style = visible ? "top-4 opacity-100" : "-top-20 opacity-0"

  return (
    <div className={`w-[90%] max-w-[498px] bg-grey-900 text-white rounded-lg flex flex-col gap-2 absolute p-4 left-1/2 -translate-x-1/2 transition-all ${style}`}>
      <div className="flex gap-2">
        <img src={iconSuccess} alt="success icon" className="h-6 w-6"/>
        <h4 className="text-white text-md font-bold">Message sent!</h4>
      </div>
      <p className="text-white">Thanks for completing the form. We will be in touch soon!</p>
    </div>
  )
}
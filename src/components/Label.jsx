
export const Label = ({ children }, props) => {
  return (
    <div className="flex gap-1">
      <label {...props}>{children}</label>
      <p className="text-sm text-green-600 self-start">*</p>
    </div>
  )
}
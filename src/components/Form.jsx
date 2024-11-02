import { useForm } from "react-hook-form"
import { Input } from "./Input";
import { Radio } from "./Radio";
import { TextArea } from "./TextArea";
import { Checkbox } from "./Checkbox";

export const Form = () => {

  const {register} = useForm();

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 bg-white p-4 gap-4 rounded-md">
      <h3 className="text-2xl font-semibold mb-4">Contact us</h3>
      <Input {...register("forename")} label="First Name" className="md:col-start-1"/>
      <Input {...register("surname")} label="Last Name" className="md:col-start-2"/>
      <Input {...register("email")} type="email" label="Email Address" className="col-span-2"/>
      <div className="flex flex-col md:flex-row">
        <label>Query Type</label>
        <div className="flex flex-col md:flex-row md:col-span-2">
          <Radio name="genenq" {...register("enquiry")} value="general" />
          <Radio name="supend" {...register("enquiry")} value="support" />
        </div>
      </div>
      <TextArea name="message" {...register("message")} label="Message" className="md:col-span-2"/>
      <Checkbox name="terms" label="I consent to being contacted by the team" {...register("terms")} className="md:col-span-2"/>
      <button type="submit" className="rounded-md bg-green-600 text-white hover:bg-grey-900 md:col-span-2 h-8">Submit</button>
    </form>
  )
}
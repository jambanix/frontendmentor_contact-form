import { useForm } from "react-hook-form"
import { Input } from "./Input";
import { Radio } from "./Radio";
import { TextArea } from "./TextArea";
import { Checkbox } from "./Checkbox";
import { Label } from "./Label";

const defaultValues = {
  "forename": "",
  "surname": "",
  "email": "",
  "enquiry": "general",
  "message": "",
  "terms": false
};

export const Form = () => {

  const {register, handleSubmit, setValue, getValues, watch} = useForm({
    defaultValues: {...defaultValues}
  });

  const radioOption = watch("enquiry");

  const submit = (formData) => {
    console.log(formData);
  }

  const handleAgreeButtonSelect = () => {
    const isSelected = getValues().terms === true;
    setValue("terms", !isSelected);
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="grid grid-cols-1 md:grid-cols-2 bg-white p-6 gap-4 rounded-md w-full max-w-[736px]">

      {/* Text fields */}
      <h3 className="text-2xl font-semibold mb-2">Contact us</h3>
      <Input {...register("forename")} label="First Name" className="md:col-start-1"/>
      <Input {...register("surname")} label="Last Name" className="md:col-start-2"/>
      <Input {...register("email")} type="email" label="Email Address" className="md:col-span-2"/>

      {/* Radio buttons */}
      <div className="flex flex-col col-start-1 md:col-span-2 gap-2">
        <Label>Query type</Label>
        <div className="flex flex-col md:flex-row md:col-span-2 md:justify-between md:w-full gap-4">
          <Radio currentOption={radioOption} onSelect={setValue} name="genenq" {...register("enquiry")} value="general" label="General Enquiry" className="flex-grow"/>
          <Radio currentOption={radioOption} onSelect={setValue} name="supenq" {...register("enquiry")} value="support" label="Support Request" className="flex-grow"/>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:col-span-2">
        {/* Text area */}
        <TextArea name="message" {...register("message")} label="Message" className="md:col-span-2"/>

        {/* Checkbox */}
        <Checkbox onSelect={handleAgreeButtonSelect} name="terms" label="I consent to being contacted by the team" {...register("terms")} className="md:col-span-2" />

        {/* Submit */}
        <button type="submit" className="rounded-md bg-green-600 text-white hover:bg-grey-900 md:col-span-2 h-14 font-bold text-xl">Submit</button>
      </div>
    </form>
  )
}
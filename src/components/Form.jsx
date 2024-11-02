import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { Radio } from "./Radio";
import { TextArea } from "./TextArea";
import { Checkbox } from "./Checkbox";
import { Label } from "./Label";
import { ErrorMessage } from "./ErrorMessage";
import { Modal } from "./Modal";
import { useEffect, useState } from "react";

const defaultValues = {
  forename: "",
  surname: "",
  email: "",
  enquiry: "general",
  message: "",
  terms: false,
};

// Email regex from https://stackoverflow.com/questions/63000638/form-pattern-validation-with-react-hook-form

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { ...defaultValues },
  });

  const radioOption = watch("enquiry");
  const [showModal, setShowModal] = useState(false);

  const submit = (formData) => {
    reset();
    setShowModal(prev => true);
  }

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setShowModal((prev) => false);
      }, 3000);
    }
  }, [showModal]);

  const handleAgreeButtonSelect = () => {
    const isSelected = getValues().terms === true;
    setValue("terms", !isSelected);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(submit)}
      className="grid grid-cols-1 md:grid-cols-2 bg-white p-6 gap-4 rounded-md w-full max-w-[736px] relative overflow-hidden"
    >
      {/* Modal */}
      <Modal visible={showModal} />

      {/* Text fields */}
      <h3 className="text-3xl font-semibold mb-2 text-grey-900">Contact Us</h3>
      <Input
        error={errors.forename}
        {...register("forename", {
          required: { value: true, message: "This field is required" },
        })}
        label="First Name"
        className="md:col-start-1"
      />
      <Input
        error={errors.surname}
        {...register("surname", {
          required: { value: true, message: "This field is required" },
        })}
        label="Last Name"
        className="md:col-start-2"
      />
      <Input
        error={errors.email}
        {...register("email", {
          required: { value: true, message: "This field is required" },
          pattern: {
            value: emailRegex,
            message: "Please enter a valid email address",
          },
        })}
        type="email"
        label="Email Address"
        className="md:col-span-2"
      />

      {/* Radio buttons */}
      <div className="flex flex-col col-start-1 md:col-span-2 gap-2">
        <Label>Query type</Label>
        <div className="flex flex-col md:flex-row md:col-span-2 md:justify-between md:w-full gap-4">
          <Radio
            currentOption={radioOption}
            onSelect={setValue}
            name="genenq"
            {...register("enquiry")}
            value="general"
            label="General Enquiry"
            className="flex-grow"
          />
          <Radio
            currentOption={radioOption}
            onSelect={setValue}
            name="supenq"
            {...register("enquiry")}
            value="support"
            label="Support Request"
            className="flex-grow"
          />
          <ErrorMessage message={errors?.enquiry?.message} />
        </div>
      </div>

      <div className="flex flex-col gap-8 md:col-span-2">
        {/* Text area */}
        <TextArea
          error={errors.message}
          name="message"
          {...register("message", {
            required: { value: true, message: "This field is required" },
          })}
          label="Message"
          className="md:col-span-2"
        />

        {/* Checkbox */}
        <Checkbox
          error={errors.terms}
          onSelect={handleAgreeButtonSelect}
          name="terms"
          label="I consent to being contacted by the team"
          {...register("terms", {
            required: {
              value: true,
              message: "To submit this form, please consent to being contacted",
            },
          })}
          className="md:col-span-2"
        />

        {/* Submit */}
        <button
          type="submit"
          className="rounded-md bg-green-600 text-white hover:bg-grey-900 md:col-span-2 h-14 font-bold text-xl"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

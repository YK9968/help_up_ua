import { ErrorMessage, Field } from "formik";
import { FC } from "react";
import Calendar from "../Calendar/Calendar";

interface IRenderFieldProps {
  name: string;
  placeholder: string;
  type: "text" | "File" | "select" | "date";
  options?: string[];
}

const RenderField: FC<IRenderFieldProps> = ({
  name,
  placeholder,
  type,
  options,
}) => {
  if (type === "date") {
    return <Calendar placeholder={placeholder} name={name} />;
  }

  return (
    <div className="relative">
      {type === "select" ? (
        <Field
          as="select"
          name={name}
          className="bg-transparent appearance-auto  border py-4 pl-4 w-addOppFormInputWidth mb-4 rounded-2xl "
        >
          <option className="bg-borderColor" value="" disabled>
            {placeholder}
          </option>
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option.replace(/_/g, " ").toUpperCase()}
            </option>
          ))}
        </Field>
      ) : (
        <Field
          className={
            name === "description"
              ? "bg-borderColor border py-4 pl-4 w-addOppFormInputWidth h-descriptionFormInputHeight mb-4 rounded-2xl"
              : "bg-borderColor border py-4 pl-4 w-addOppFormInputWidth h-registerFormInputHeight mb-4 rounded-2xl"
          }
          type={type}
          name={name}
          placeholder={placeholder}
        />
      )}
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-base opacity-70  absolute right-5 top-4"
      />
    </div>
  );
};

export default RenderField;

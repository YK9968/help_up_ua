import { ErrorMessage, Field } from "formik";
import { FC } from "react";

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
  return (
    <div className="relative">
      {type === "select" ? (
        <Field
          as="select"
          name={name}
          className="bg-borderColor border py-4 pl-4 w-registerFormInputWidth mb-4 rounded-2xl"
        >
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option.replace(/_/g, " ").toUpperCase()}
            </option>
          ))}
        </Field>
      ) : (
        <Field
          className="bg-borderColor border py-4 pl-4 w-registerFormInputWidth mb-4 rounded-2xl"
          type={type}
          name={name}
          placeholder={placeholder}
        />
      )}
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-base opacity-70  absolute right-4 top-4"
      />
    </div>
  );
};

export default RenderField;

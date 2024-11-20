import { ErrorMessage, Field } from "formik";
import { FC } from "react";

interface IRenderFieldProps {
  name: string;
  placeholder: string;
  type: "text" | "File";
}

const RenderField: FC<IRenderFieldProps> = ({ name, placeholder, type }) => {
  return (
    <div className="relative">
      <Field
        className="bg-borderColor border py-4 pl-4 w-registerFormInputWidth mb-4 rounded-2xl "
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-base opacity-70  absolute right-4 top-4"
      />
    </div>
  );
};

export default RenderField;

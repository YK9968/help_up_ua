import { ErrorMessage, Field } from "formik";
import { FC } from "react";
import Calendar from "../Calendar/Calendar";

interface IRenderFieldProps {
  name: string;
  placeholder: string;
  type: "text" | "File" | "select" | "date";
  options?: string[];
  setFieldValue?: (field: string, value: any) => void; // Додаємо setFieldValue для типу File
}

const RenderField: FC<IRenderFieldProps> = ({
  name,
  placeholder,
  type,
  options,
  setFieldValue,
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
          className="bg-transparent appearance-auto border py-4 pl-4 w-addOppFormInputWidth mb-4 rounded-2xl"
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
      ) : type === "File" ? (
        <div className="relative">
          <label className="flex items-center justify-center py-3 px-6 bg-blue-500 text-white rounded-xl cursor-pointer hover:bg-blue-600 transition-all">
            {placeholder}
            <input
              accept="image/*, image/jpeg, image/png, image/webp, image/gif"
              type="file"
              name={name}
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={(event) => {
                const file = event.currentTarget.files?.[0];
                if (file && setFieldValue) {
                  setFieldValue(name, file); // Використовуємо setFieldValue
                }
              }}
            />
          </label>
          <ErrorMessage
            name={name}
            component="div"
            className="text-red-500 text-base opacity-70 absolute right-5 top-4"
          />
        </div>
      ) : name === "description" ? (
        <div className="relative">
          <Field
            as="textarea"
            className="resize-none bg-borderColor border p-4 w-addOppFormInputWidth h-descriptionFormInputHeight rounded-2xl custom-scrollbar"
            name={name}
            placeholder={placeholder}
          />
          <ErrorMessage
            name={name}
            component="div"
            className="text-red-500 text-base opacity-70 absolute right-5 top-4"
          />
        </div>
      ) : (
        <div className="relative">
          <Field
            className="bg-borderColor border p-4 w-addOppFormInputWidth h-registerFormInputHeight mb-4 rounded-2xl"
            type={type}
            name={name}
            placeholder={placeholder}
          />
          <ErrorMessage
            name={name}
            component="div"
            className="text-red-500 text-base opacity-70 absolute right-5 top-4"
          />
        </div>
      )}
    </div>
  );
};

export default RenderField;

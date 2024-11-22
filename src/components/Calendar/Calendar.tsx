import { ErrorMessage, useField } from "formik";
import { FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ICalendarProps {
  name: string;
  placeholder: string;
}
const Calendar: FC<ICalendarProps> = ({ name, placeholder }) => {
  const [field, , helpers] = useField(name);

  return (
    <div className="relative">
      <DatePicker
        selected={field.value ? new Date(field.value) : null}
        dateFormat="yyyy/MM/dd"
        onChange={(date: Date | null) => {
          const formattedDate = date ? date.toISOString().split("T")[0] : "";
          helpers.setValue(formattedDate);
        }}
        minDate={new Date()}
        placeholderText={placeholder}
        className="bg-borderColor border py-4 pl-4 w-addOppFormInputWidth mb-4 rounded-2xl"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-base opacity-70  absolute right-4 top-4"
      />
    </div>
  );
};

export default Calendar;

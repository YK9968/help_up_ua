import { FC } from "react";
import { getClassNameForBtn } from "../../utils/getClassNameForBtn";

interface IButtonProps {
  props: string;
}

const Button: FC<IButtonProps> = ({ props }) => {
  return (
    <div>
      <button className={getClassNameForBtn(props)}>{props}</button>
    </div>
  );
};

export default Button;

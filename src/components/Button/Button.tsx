import { FC } from "react";
import { getClassNameForBtn } from "../../utils/getClassNameForBtn";

interface IButtonProps {
  props: string;
}

const Button: FC<IButtonProps> = ({ props }) => {
  return <button className={getClassNameForBtn(props)}>{props}</button>;
};

export default Button;

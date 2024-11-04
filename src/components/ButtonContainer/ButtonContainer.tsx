import Button from "../Button/Button";

const ButtonContainer = () => {
  return (
    <div className="flex gap-2">
      <Button props="Login" />
      <Button props="Registration" />
    </div>
  );
};

export default ButtonContainer;

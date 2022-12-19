import TypographyProps from "interfaces/typography-props";

const baseClasses = "";

const varients = {
  primary: "text-white",
  secondary: "text-black",
  danger: "text-red",
  text: "text-white",
};

const sizes = {
  small: "",
  medium: "",
  large: "",
};

const P = ({
  varient = "primary",
  size = "small",
  ...rest
}: TypographyProps) => {
  return (
    <p
      {...rest}
      className={`${baseClasses} ${varients[varient]} ${sizes[size]}`}
    />
  );
};

export default P;

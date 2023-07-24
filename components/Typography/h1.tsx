import TypographyProps from "interfaces/typography-props";

const baseClasses = "text-3xl md:text-5xl";

const varients = {
  primary: "text-primaryPurple",
  secondary: "text-white",
};

const H1 = ({
  varient = "primary",
  additionalClass = "",
  ...rest
}: TypographyProps) => {
  return (
    <h1 {...rest} className={`${baseClasses} ${varients} ${additionalClass}`} />
  );
};

export default H1;

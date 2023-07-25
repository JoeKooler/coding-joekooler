import TypographyProps from 'interfaces/typography-props';

const baseClasses = 'text-2xl md:text-4xl';

const variants = {
  primary: 'text-primaryPurple',
  secondary: 'text-white',
};

const H2 = ({
  variant = 'primary',
  additionalClass = '',
  children,
  ...rest
}: TypographyProps) => {
  return (
    <h1 {...rest} className={`${baseClasses} ${variants} ${additionalClass}`}>
      {children}
    </h1>
  );
};

export default H2;

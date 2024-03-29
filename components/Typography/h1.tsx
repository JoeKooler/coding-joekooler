import TypographyProps from 'interfaces/typography-props';

const baseClasses = 'text-3xl md:text-5xl';

const variants = {
  primary: 'text-primaryPurple',
  secondary: 'text-white',
};

const H1 = ({
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

export default H1;

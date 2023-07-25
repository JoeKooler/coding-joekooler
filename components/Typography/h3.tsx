import TypographyProps from 'interfaces/typography-props';

const baseClasses = 'text-md md:text-2xl';

const variants = {
  primary: 'text-primaryPurple',
  secondary: 'text-white',
};

const H3 = ({
  variant = 'primary',
  additionalClass = '',
  children,
  ...rest
}: TypographyProps) => {
  return (
    <h3 {...rest} className={`${baseClasses} ${variants} ${additionalClass}`}>
      {children}
    </h3>
  );
};

export default H3;

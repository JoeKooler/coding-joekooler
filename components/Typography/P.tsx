import TypographyProps from 'interfaces/typography-props';

const baseClasses = '';

const variants = {
  primary: 'text-white',
  secondary: 'text-black',
  danger: 'text-red',
  text: 'text-white',
};

const sizes = {
  small: '',
  medium: '',
  large: '',
};

const P = ({
  variant = 'primary',
  size = 'small',
  additionalClass = '',
  children,
  ...rest
}: TypographyProps) => {
  return (
    <p
      {...rest}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </p>
  );
};

export default P;

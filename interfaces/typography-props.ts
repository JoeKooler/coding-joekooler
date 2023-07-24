export default interface TypographyProps {
  variant: 'primary' | 'secondary' | 'danger' | 'text';
  size?: 'small' | 'medium' | 'large';
  additionalClass: string;
  children: React.ReactNode;
}

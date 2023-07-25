import Navbar from './navbar';
import Footer from './footer';
import { LayoutOptions } from 'interfaces/layout-options';

interface Props {
  navBarOptions?: LayoutOptions;
  children?: JSX.Element;
}

export default function Layout({
  children,
  navBarOptions = { displayType: 'Solid' },
}: Props) {
  return (
    <>
      <Navbar options={navBarOptions} />
      <>{children}</>
      <Footer />
    </>
  );
}

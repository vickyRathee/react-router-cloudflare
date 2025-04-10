import { Welcome } from '../welcome/welcome';
import { useLoaderDataContext } from '../loader';
import { useLocation } from 'react-router';

export default function Home() {
  const { data } = useLoaderDataContext();
  const { pathname } = useLocation();

  const page = data.find((x: any) => x.path === pathname);
  return <Welcome message={page.heading} />;
}

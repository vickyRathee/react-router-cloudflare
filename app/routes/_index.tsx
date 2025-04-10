import { Welcome } from '../welcome/welcome';
import { useLoaderDataContext } from '../loader';

export default function Home() {
  const { data } = useLoaderDataContext();

  return <Welcome message={'Welcome to home page'} />;
}

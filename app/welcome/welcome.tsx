import { Link } from 'react-router';
import logoDark from './logo-dark.svg';
import logoLight from './logo-light.svg';

export function Welcome({ message }: { message: string }) {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <h1>{message}</h1>

            <ul>
              {pages.map((page) => (
                <li key={page.path} className="self-stretch p-3 leading-normal">
                  <Link to={page.path} className='underline text-blue-600'>{page.heading}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}

const pages = [
  {
    path: '/about',
    heading: 'This is the About page',
  },
  {
    path: '/contact',
    heading: 'This is the Contact page',
  },
  {
    path: '/services',
    heading: 'This is the Services page',
  },
];

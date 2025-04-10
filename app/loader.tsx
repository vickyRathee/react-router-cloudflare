import { createContext, useContext, type ReactNode } from 'react';

const LoaderDataContext = createContext<any | null>(null);

interface LoaderDataProviderProps {
  loaderData: any;
  children: ReactNode;
}

export function LoaderDataProvider({
  children,
  loaderData,
}: LoaderDataProviderProps) {
  return (
    <LoaderDataContext.Provider value={loaderData}>
      {children}
    </LoaderDataContext.Provider>
  );
}

export function useLoaderDataContext() {
  const context = useContext(LoaderDataContext);
  if (!context) {
    throw new Error(
      'useLoaderDataContext must be used within a LoaderDataProvider'
    );
  }
  return context;
}

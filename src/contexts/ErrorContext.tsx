// src/contexts/ErrorContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface ErrorContextProps {
  error: string | null;
  setError: (error: string | null) => void;
}

export const ErrorContext = createContext<ErrorContextProps>({
  error: null,
  setError: () => {},
});

export const ErrorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [error, setError] = useState<string | null>(null);

  return <ErrorContext.Provider value={{ error, setError }}>{children}</ErrorContext.Provider>;
};
import React from 'react';

// Mock implementation of BrowserRouter
export const BrowserRouter = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock for Routes component
export const Routes = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock for Route component
export const Route = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock for Navigate component
export const Navigate = ({ to }: { to: string }) => {
  return <div data-testid="navigate" data-to={to} />;
};

// Mock for Link component
export const Link = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return <a href={to}>{children}</a>;
};

// Mock for useParams hook
export const useParams = jest.fn().mockReturnValue({});

// Mock for useNavigate hook
export const useNavigate = jest.fn().mockReturnValue(jest.fn());

// Mock for useLocation hook
export const useLocation = jest.fn().mockReturnValue({
  pathname: '/',
  search: '',
  hash: '',
  state: null,
  key: 'default',
});

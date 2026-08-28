import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface RouterContextType {
  pathname: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

const normalizePath = (path: string): string => {
  // If hash routing is used (e.g. #/projetos or #projetos), extract clean path
  if (path.includes('#')) {
    const hashPart = path.split('#')[1] || '';
    const clean = hashPart.startsWith('/') ? hashPart : `/${hashPart}`;
    return clean || '/';
  }
  return path || '/';
};

const getCurrentPath = (): string => {
  if (typeof window === 'undefined') return '/';
  
  if (window.location.hash) {
    return normalizePath(window.location.hash);
  }
  return window.location.pathname || '/';
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pathname, setPathname] = useState<string>(getCurrentPath);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(getCurrentPath());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = useCallback((to: string) => {
    const cleanTo = to.startsWith('/') ? to : `/${to}`;
    
    // Update browser URL history without reload
    try {
      window.history.pushState({}, '', cleanTo);
    } catch {
      window.location.hash = cleanTo;
    }
    
    setPathname(cleanTo);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <RouterContext.Provider value={{ pathname, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

export const useLocation = () => {
  const { pathname } = useRouter();
  return { pathname };
};

export const useNavigate = () => {
  const { navigate } = useRouter();
  return navigate;
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ to, children, className, onClick, ...props }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && !props.target && e.button === 0) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};

interface NavLinkProps extends Omit<LinkProps, 'className' | 'children'> {
  className?: string | ((props: { isActive: boolean }) => string);
  children?: React.ReactNode | ((props: { isActive: boolean }) => React.ReactNode);
}

export const NavLink: React.FC<NavLinkProps> = ({ to, children, className, onClick, ...props }) => {
  const { pathname, navigate } = useRouter();
  const cleanTo = to.startsWith('/') ? to : `/${to}`;
  const isActive = pathname === cleanTo || (cleanTo !== '/' && pathname.startsWith(cleanTo));

  const computedClassName = typeof className === 'function' ? className({ isActive }) : className;
  const computedChildren = typeof children === 'function' ? children({ isActive }) : children;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && !props.target && e.button === 0) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a href={to} onClick={handleClick} className={computedClassName} {...props}>
      {computedChildren}
    </a>
  );
};

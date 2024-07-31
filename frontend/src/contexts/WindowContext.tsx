import { createContext, useContext, useEffect, useState } from "react";

export type WindowContextType = {
  windowWidth: number;
};

export const WindowContext = createContext<WindowContextType>({
  windowWidth: 0,
});

type WindowProviderProps = {
  children: React.ReactNode;
};

export const WindowProvider = ({ children }: WindowProviderProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <WindowContext.Provider value={{ windowWidth }}>
      {children}
    </WindowContext.Provider>
  );
};

export const useWindow = () => {
  return useContext(WindowContext);
};

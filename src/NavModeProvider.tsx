import { createContext, useState } from "react";

export const NavModeContext = createContext({
  isDark: false,
  setIsDark: (val: boolean) => {},
});

export const NavModeProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <NavModeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </NavModeContext.Provider>
  );
};

import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

interface AppContextProps {
  toggleTheme?: () => void;
}

const appContextDefaultValues: AppContextProps = {
  toggleTheme: () => {},
};

const AppContext = React.createContext<AppContextProps>(
  appContextDefaultValues
);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState<boolean>(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  React.useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (isDarkTheme) {
      htmlElement?.classList.add("dark");
    } else {
      htmlElement?.classList.remove("dark");
    }
    window.localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  // set theme saved in local storage
  React.useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDarkTheme(true);
    } else {
      setIsDarkTheme(false);
    }
  }, []);

  return (
    <AppContext.Provider value={{ toggleTheme }}>
      <div
        style={{
          width: 20,
          position: "absolute",
          top: 20,
          right: 20,
          cursor: "pointer",
        }}
        className=" w-16 absolute  rounded-full items-center justify-center flex p-2"
      >
        {!isDarkTheme ? (
          <SunIcon className="w-11 dark:text-white" onClick={toggleTheme} />
        ) : (
          <MoonIcon className="w-11 dark:text-white" onClick={toggleTheme} />
        )}
      </div>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

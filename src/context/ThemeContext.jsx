import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ThemeContext = createContext();

function ThemeContextProvider({children}) {
    const [theme, setTheme] = useLocalStorage("ThemeDark", false);
    const [darkChecked, setDarkChecked] = useLocalStorage("SwitchActive", theme);

    return(
        <ThemeContext.Provider value={{theme, setTheme, darkChecked, setDarkChecked}}>
            {children}
        </ThemeContext.Provider>
    );
}

const useThemeContext = () => {
    const context = useContext(ThemeContext);
    return context;
}

export { ThemeContext, ThemeContextProvider, useThemeContext };
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState(false);
    const [darkChecked, setDarkChecked] = useState(false);

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
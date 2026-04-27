'use client'
import {useState, useEffect, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({children}:{children:React.ReactNode}){
    const [theme, setTheme] = useState<Theme>("light")

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme]);

    function toggleTheme(){
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const context = useContext(ThemeContext);
    if (!context) throw new Error("usetheme must be used inside the ThemeProvider ");
    return context;
}
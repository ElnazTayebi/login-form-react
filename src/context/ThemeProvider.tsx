import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const toggleTheme = () => {
        setTheme ((prev) => (prev === "light" ? "dark" : "light"))
    };

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])
return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
)

};

export default ThemeProvider;

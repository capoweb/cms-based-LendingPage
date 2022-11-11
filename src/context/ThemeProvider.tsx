import React, { ReactNode, useContext, useEffect, useState } from "react";
import { changeVariables } from '../services/changeVariables';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_NEUTRAL = 'neutral';

interface ThemeContextType {
    theme: string| null;
    change: (name:string)=>void;
}

const ThemeContext = React.createContext<ThemeContextType | null>(null);
 
export const ThemeProvider: React.FC<{children: ReactNode}> = ({ children, ...props }) =>{
    const [theme, setTheme] = useLocalStorage<string|null>('theme',THEME_NEUTRAL);

    const change = (name:string) => {
        setTheme(name)
        changeVariables(name)
    }
    useEffect(()=>{
        changeVariables(theme)
    },[theme])
    return(
        <ThemeContext.Provider 
        value={{
            theme: theme,
            change
        }}
        {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

export const useTheme = () =>{
    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return themeContext;
}
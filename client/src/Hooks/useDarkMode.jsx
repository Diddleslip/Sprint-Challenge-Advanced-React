import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {  
    const [values, setValues] = useLocalStorage("dark-mode", false); // if you switch this to true, it will be dark mode when you reload
    const body = document.querySelector("body");

    useEffect(() => {
        values ? body.classList.add("dark-mode") : body.classList.remove("dark-mode");
    });

    return [values, setValues];
}

import { useState, useEffect, createContext, useContext } from 'react';
import { Moon } from 'lucide-react';
import PropTypes from 'prop-types'; // Import PropTypes
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const ThemeToggler = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <Moon strokeWidth={1.3} />
                <h1>Night Mode</h1>
            </div>
            <input
                type="checkbox"
                className="toggle toggle-sm toggle-info"
                checked={theme === 'dark'}
                onChange={toggleTheme}
            />
        </div>
    );
};


// PropTypes validation 
ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


export default ThemeToggler;

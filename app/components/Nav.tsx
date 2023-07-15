import { pageSlice, useDispatch } from "@/lib/redux";
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface NavProps {
    theme: string;
}

export const Nav = ({ theme }: NavProps) => {

    const dispatch = useDispatch();

    const toggleTheme = (newTheme: string) => {
        localStorage.setItem('theme', newTheme)
        dispatch(pageSlice.actions.setPageTheme(newTheme));
    }

    return (
        <nav className="navbar white-bg">
            <div className="container">
                <div className="space-between">
                    <div className="page-title text-lg bold-text">Where in the world?</div>
                    <div className="theme-selector">
                        <button
                            onClick={() => toggleTheme(theme === 'Light' ? 'Dark' : 'Light')}
                            className="theme-selector-btn">
                            <FontAwesomeIcon icon={faMoon} width={16} height={16} />{" "}
                            {theme === 'Light' ? 'Dark' : 'Light'} Mode
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
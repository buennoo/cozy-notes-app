import '../styles/Header.css';
import { MdSunny } from "react-icons/md";

const Header = ({turnDarkMode, headerDarkMode}) => {
    return (
        <div className={`header-container ${headerDarkMode ? 'dark-mode' : ''}`}>
            <div id="title">cozy-notes</div>
            <MdSunny size="1em" id="mode-icon" onClick={ () => {
                    turnDarkMode((darkMode) => !darkMode);   
                }
            }/>
        </div>
    );
}

export default Header;

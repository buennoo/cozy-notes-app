import '../styles/Header.css';
import { MdSunny } from "react-icons/md";

const Header = ({turnDarkMode}) => {
    return (
        <div className="header-container">
            <div id="title">cozy-notes</div>
            <MdSunny size="1em" id="mode-icon" onClick={ () => {
                    turnDarkMode((darkMode) => !darkMode);   
                }
            }/>
        </div>
    );
}

export default Header;

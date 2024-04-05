import '../styles/Header.css';
import { MdSunny } from "react-icons/md";

const Header = () => {
    return (
        <div className="header-container">
            <div id="title">cozy-notes</div>
            <MdSunny size="1em" id="mode-icon"/>
        </div>
    );
}

export default Header;

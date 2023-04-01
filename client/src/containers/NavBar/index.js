import NavBarLogo from './NavBarLogo';
import NavBarOptions from './NavBarOptions';
import NavBarProfile from './NavBarProfile';

import styles from './header.module.css';

const Header = () => {
    return (
        <div className= {styles.navBar} >
            <NavBarLogo />
            <NavBarOptions />
            <NavBarProfile />
        </div>
    );
};

export default Header;
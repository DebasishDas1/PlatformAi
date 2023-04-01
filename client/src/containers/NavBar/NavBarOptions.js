import styles from './header.module.css'

const NavBarOptions = () => {
    const options = [
        { title: 'About', to: ''},
        { title: 'Services', to: ''},
        { title: 'Blog', to: ''},
        { title: 'Contact', to: ''},
    ];

    return (
        <div className= {styles.navBar__option__contanner} >
            {
                options.map( opton => 
                    <div className= {styles.navBar__option} >
                        {opton.title}
                    </div>
                )
            }
        </div>
    );
};

export default NavBarOptions;
import { NavLink } from 'react-router-dom';

import styles from './home.module.css';

const AiTool = ( { tool } ) => {
    const { title, link, description} = tool;

    const updateDescription = (description) => {
        const string_length = 150

        return description.length > string_length ? 
            description.substr(0, string_length) + ' ...' : 
            description;
    };

    return (
        <NavLink to={link} className={styles.home__aiTools} >
            <div className={styles.home__aiTools__title} >
                {title}
            </div>
            <div className={styles.home__aiTools_description} >
                { description && updateDescription(description)  }
            </div>
        </NavLink>
    );
};

export default AiTool;
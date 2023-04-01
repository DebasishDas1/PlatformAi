import HomeBoard from './HomeBoard';
import AiTool from './AiTool';
import toolsList from './toolsList';

import styles from './home.module.css';

const Home = () => {
    return (
        <div className={styles.home} >
            <h1> Maximize Your Potential with : </h1>
            <div className={styles.home__title} > PlatformAi </div>
            <HomeBoard />
            <div className={styles.home__aiTools__container} >
                { toolsList.map( (tool) => <AiTool tool = {tool}/>) }
            </div>
        </div>
    );
};

export default Home;
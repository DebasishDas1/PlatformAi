import Header from './containers/NavBar';
import Home from './pages/Home';
import ChatGPT from './pages/ChatGPT';

import { Routes, Route } from "react-router-dom";

import styles from './app.module.css';

const App = () => {
    return (
        <div className={styles.app} >
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chatGPT" element={<ChatGPT />} />
            </Routes>
        </div>
    );
};

export default App;
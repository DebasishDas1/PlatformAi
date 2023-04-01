import styles from './chatGPT.module.css'

const ChatGPT = () => {
    return (
        <div className = {styles.chatGPT__container} >
            <div className = {styles.chatGPT__box} >
                <div className = {styles.chatGPT__box__title} >
                    ChatGPT 
                </div>
            </div>
        </div>
    ); 
}

export default ChatGPT;
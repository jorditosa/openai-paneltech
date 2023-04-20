import styles from './ChatMessage.module.css'

function ChatMessage({message}) {

  return (
    <div className={`${styles.ChatMessage} ${message.user} === "gpt" && ${styles.chatGPT}`}>
        <div className={`${styles.ChatMessageCenter}`}>
            <div className={message.user === "gpt" ? `${styles.messageGPT}` : `${styles.message}`}>
                {message.message}
            </div>
        </div>
    </div>
  )
}

export default ChatMessage
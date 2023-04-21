import { useState } from 'react';
import styles from './ChatMessage.module.css';
import SyncLoader from "react-spinners/SyncLoader";


function ChatMessage({ message }) {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 2000);

  return (
    <div className={`${styles.ChatMessage} ${message.user === 'gpt' && styles.chatGPT}`}>
      {isLoading && message.user !== 'user' ? (
        <div className={styles.spinner}>
          <SyncLoader color="#ffffff" size={20} />
        </div>
      ) : (
        <div className={`${styles.ChatMessageCenter}`}>
          <div className={message.user === 'gpt' ? `${styles.messageGPT}` : `${styles.message}`}>
            {message.message}
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatMessage;

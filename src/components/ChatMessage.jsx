import { useState } from 'react';
import styles from './ChatMessage.module.css';
import SyncLoader from "react-spinners/SyncLoader";


function ChatMessage({ message }) {
  const [isLoading, setIsLoading] = useState(true);

  // Simulamos una llamada fetch con un timeout de 2 segundos
  setTimeout(() => setIsLoading(false), 2000);

  return (
    <div className={`${styles.ChatMessage} ${message.user === 'gpt' && styles.chatGPT}`}>
      {isLoading ? (
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

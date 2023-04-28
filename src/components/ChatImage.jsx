import {useState} from "react";
import styles from "./ChatImage.module.css";
import SyncLoader from "react-spinners/SyncLoader";

function ChatImage({image}) {

  console.log(image)
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 2000);

  return (
    <div className={`${styles.ChatMessage} ${image.user === 'gpt' && styles.chatGPT}`}>
      {isLoading && image.user !== 'user' ? (
        <div className={styles.spinner}>
          <SyncLoader color="#ffffff" size={20} />
        </div>
      ) : (
        <div>
          <div className={`${styles.chatImageCenter} ${image.user === 'gpt' ? styles.messageGPT : styles.message}`}>
            {
              image.message.includes('https') ? (<img src={image.message} alt="" />) : (<p>{image.message}</p>)
            }
            
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatImage;

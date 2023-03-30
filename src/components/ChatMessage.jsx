import React from 'react'
import { FaUser, FaSpinner } from 'react-icons/fa'
import LoadingEffect from './LoadingEffect'

function ChatMessage({message, loading, chatlog}) {

  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
        <div className="chat-message-center">
            <div className={`avatar ${message.user === "gpt" && "avatar-gpt"}`}>
                {message.user === "gpt" ? <FaSpinner style={{ fill: 'white' }} size={30}/> : <FaUser size={30} />}
            </div>
            <div className="message">
              {message.user === "gpt" && message.id === chatlog.length && loading ? (
                <LoadingEffect />
              ) : (
                message.message
              )}
            </div>
        </div>
    </div>
  )
}

export default ChatMessage
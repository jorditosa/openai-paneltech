import { useState } from 'react'
import { Configuration, OpenAIApi } from "openai";
import ChatMessage from './components/ChatMessage'
import { FaPaperPlane, FaImage } from 'react-icons/fa'
import Aside from './components/Aside'

function App() {

  const [input, setInput] = useState('');
  const [chatlog, setChatlog] = useState([{
    user: 'gpt',
    message: 'Hola soc la Techi, i soc la teva assistent virtual. Com et puc ajudar?',
    id: 1,
  },
]);


  async function handleSubmit(e) {
    e.preventDefault();
    let chatLogNew = [...chatlog, { user: 'user', message: `${input}`, id: chatlog.length}];
    setInput('');
    setChatlog(chatLogNew);

    const openai = new OpenAIApi(new Configuration({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    }));

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-0301",
      temperature: 0.5,
      max_tokens: 100,
      messages: [{ role: "user", content: `${input}` }],
  })
    
    const message = response.data.choices[0].message.content;
    setChatlog([...chatLogNew, { user: 'gpt', message: `${message}`, id: chatlog.length }]);

    // Checking response
    console.log(response)

  }

  return (
    <div className="App">
      <Aside chatlog={chatlog} />

      <section className='chatbox'>
        <div className="chat-log">
          {chatlog.map((message, index) => {
              return <ChatMessage key={index} message={message} chatlog={chatlog} />
            }
          )}
        </div>

        <div className="chat-input-holder">
          <form
          onSubmit={handleSubmit}
          >
            <input 
            rows="1"
            className='chat-input-textarea'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escriu aquí..."
            >
            </input>
            <button type="submit" className="chat-input-btnSend">
              <FaPaperPlane size={30} />
            </button>
            <span disabled className='chat-input-btnImage'>
              <FaImage size={30} />
            </span>
          </form>
        </div>
      </section>
    </div>
  )
}

export default App

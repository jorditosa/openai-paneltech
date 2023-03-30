import { useState } from 'react'
import { Configuration, OpenAIApi } from "openai";
import ChatMessage from './components/ChatMessage'
import Logo from './assets/logo-white.svg'
import { FaPlus, FaPaperPlane } from 'react-icons/fa'
import LoadingEffect from './components/LoadingEffect'

function App() {

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatlog, setChatlog] = useState([{
    user: 'gpt',
    message: 'Hola soc la Techi, la asistent virtual de Panel Tech, com et puc ajudar?',
    id: 1,
  },]);

  // clear chats
  function clearChat() {
    setChatlog([]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let chatLogNew = [...chatlog, { user: 'user', message: `${input}`, id: chatlog.length}];
    setInput('');
    setChatlog(chatLogNew);
    setLoading(true);

    const messages = chatLogNew.map((message) => message.message).join('\n');

    const openai = new OpenAIApi(new Configuration({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      header: {
        'OpenAI-Organization': 'org-7nbfQ5qrHMHC9nl91q5my59o',
      }
    }));

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0.5,
      messages: [{ role: "user", content: `${input}` }],
  })
    
    const message = response.data.choices[0].message.content;
    setChatlog([...chatLogNew, { user: 'gpt', message: `${message}`, id: chatlog.length }]);

    setLoading(false);
  }

  return (
    <div className="App">
      <aside className="sidemenu">
        <img className='logo' src={Logo} alt="logo" />

        <div className="side-menu-button" onClick={clearChat}>
          <span>
            <FaPlus size={15} />
          </span>
          Nou xat
        </div>

        <p className='rights'>
          Developed by Fridev SL &copy; 2023. V. 1.0.2
        </p>
      </aside>

      <section className='chatbox'>
        <div className="chat-log">
          {chatlog.map((message, index) => {
              return <ChatMessage key={index} message={message} loading={loading} chatlog={chatlog} />
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
            />
            <button type="submit" className="chat-input-btn">
              <FaPaperPlane size={20} />
            </button>
            <p className='chat-input-copy'>Tots els drets reservats a Netquest Soluciones Tecnologicas SL &copy;.</p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default App

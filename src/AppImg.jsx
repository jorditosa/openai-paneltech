import { useState } from 'react'
import { Configuration, OpenAIApi } from "openai";
import ChatImage from './components/ChatImage'
import { FaPaperPlane } from 'react-icons/fa'
import Aside from './components/Aside'

function AppChat() {

  const [input, setInput] = useState('');
  const [chatlog, setChatlog] = useState([{
    user: 'gpt',
    message: 'Hola! Vols una bonica imatge?',
    id: 1
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

    const response = await openai.createImage({
      prompt: `${input}`,
      n: 1,
      size: "512x512",
  })
    
    const image = response.data.data[0].url;
    setChatlog([...chatLogNew, { user: 'gpt', message: `${image}`, id: chatlog.length }]);

    // Checking response
    console.log(image)

  }

  return (
    <div className="App">
      <Aside chatlog={chatlog} />

      <section className='chatboxImage'>
        <div className="chat-log">
          {chatlog.map((image, index) => {
              return <ChatImage key={index} image={image} chatlog={chatlog} />
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
          </form>
        </div>
      </section>
    </div>
  )
}

export default AppChat

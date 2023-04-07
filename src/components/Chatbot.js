

import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const apiKey = "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"; // replace with your own API key
  const apikey2 = "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";
  const handleInput = async () => {
    const url = 'https://api.openai.com/v1/completions';
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` };

    const data = {
      prompt: input,
      model: 'text-davinci-002',
      temperature: 0, 
      n: 1,
      max_tokens: 100
    };

    try {
      const res = await axios.post(url, data, { headers });
      console.log(res);
      setResponse(res.data.choices[0].text);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleInput}>Send</button>
      <p>{response}</p>
    </div>
  );
};

export default Chatbot;




/*
import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [chatLog, setChatLog] = useState([]);

  const apiKey = "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"; // replace with your own API key
  const apikey2 = "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";

  const handleChatCompletion = async (text) => {
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/ada/completions', {
        prompt: `User: ${text}\nAI:`,
        max_tokens: 50,
        n: 1,
        stop: '\n',
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apikey2}`,
        },
      });
      
      const aiText = response.data.choices[0].text.trim();
      setChatLog([...chatLog, { user: text, ai: aiText }]);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    const text = e.target.message.value;
    setChatLog([...chatLog, { user: text, ai: '' }]);
    handleChatCompletion(text);
    e.target.reset();
  }

  return (
    <div>
      <div style={{ height: '400px', overflowY: 'scroll' }}>
        {chatLog.map((chat, index) => (
          <div key={index}>
            <p>User: {chat.user}</p>
            <p>AI: {chat.ai}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input type="text" name="message" placeholder="Type your message here" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chatbot;


*/
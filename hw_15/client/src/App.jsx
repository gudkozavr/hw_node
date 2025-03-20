import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io("http://localhost:3333");

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("message", (data) => {
      setChat((prev) => [...prev, data]);
    })
    return () => {
      socket.off("message");
    }
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) {
      console.log("empty message");
    } else {
      socket.emit("message", message);
      setMessage("");
    }
  }

  return (
    <>
      <div>{chat.map((msg, i) => {
        return <div key={i}>{msg}</div>
      })}</div>
      <form onSubmit={sendMessage}>
        <input type="text" placeholder='enter your msg' value={message} onChange={e => setMessage(e.target.value)} />
        <button type='submit'>submit</button>
      </form>
    </>
  )
}

export default App

import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './Chat.css'
import ChatHeader from './ChatHeader'
import { selectChannelName, selectChannelId } from './features/appSlice'
import db from './firebaseApp'
import Message from './Message'
import firebase from 'firebase/compat/app'
import { selectUser } from './features/userSlice'

function Chat() {

    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        
        if (channelId) {
            db.collection("channels")
              .doc(channelId)
              .collection("messages")
              .orderBy("timestamp", "desc")
              .onSnapshot((snapshot) =>
                setMessages(snapshot.docs.map((doc) => doc.data()))
              );
          }
        }, [channelId]);


        const sendMessage = (e) => {
            e.preventDefault();
        
            db.collection("channels").doc(channelId).collection("messages").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              message: input,
              user: user,
            });
        
            setInput("");
          };


    return (
        <div className='chat'>
            <ChatHeader channelName={channelName}/>

            <div className="chat_messages">
                {messages.map((message) => (
                    <Message 
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}
                    />
                    
                ))}
            </div>

            <div className="chat_input">
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} disabled={!channelId} placeholder={`Message #${channelName}`} />
                    <button className='chat_inputButton' type="submit" disabled={!channelId} onClick={sendMessage}>
                        Send Message
                    </button>
                </form>

                <div className='chat_inputIcons'>
                    <EmojiEmotions fontSize="large" />
                </div>

            </div>
        </div>
    )
}

export default Chat

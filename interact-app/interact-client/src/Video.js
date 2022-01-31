import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './Video.css'
import VideoHeader from './VideoHeader'
import { selectChannelName, selectChannelId } from './features/appSlice'
import db from './firebaseApp'
import Message from './Message'
import firebase from 'firebase/compat/app'
import { selectUser } from './features/userSlice'

function Video() {


    return (
        <div className='chat'>


        </div>
    )
}

export default Video

import { EditLocationRounded, HelpRounded, Notifications, PeopleAltRounded, SearchRounded, SendRounded } from '@material-ui/icons'
import React from 'react'
import './ChatHeader.css'

function ChatHeader( { channelName }) {
    return (
        <div className='chatHeader'>
            <div className='chatHeader_left'>
                <h3><span className='chatHeader_hash'>
                    #
                    </span>
                    {channelName}
                </h3>
            </div>

            <div className='chatHeader_right'>
                <Notifications />

                <div className='chatHeader_search'>
                    <input placeholder='Search' />
                    <SearchRounded />
                </div>
            </div>
        </div>
    )
}

export default ChatHeader

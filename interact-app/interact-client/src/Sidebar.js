import React, {useState, useEffect} from 'react';
import './Sidebar.css';
import { Call, ExpandMore, Headset, InfoOutlined, Mic, Settings, SignalCellularAlt } from '@material-ui/icons';
import { Add } from '@material-ui/icons';
import SidebarChannel from './SidebarChannel'
import { Avatar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectHomepage, selectUser } from './features/userSlice';
import db, { auth } from './firebaseApp';
import {homepage} from './features/userSlice'; 
// import prompt from 'electron-prompt';


function Sidebar() {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const home = useSelector(selectHomepage);
    const [channels, setChannels] = useState([]);
    // const [homepage, setHomepage] = useState(true);
    const smalltalk = require('smalltalk');

    
    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data(),
            })))
        ))
    }, [])

    const handleAddChannel = () => {
     smalltalk.prompt('Create channel', 'Channel name:', 'Awesome channel')
    .then((value) => {
        db.collection('channels').add({
            channelName: value,
        });
    })
    .catch(() => {
        console.log('cancel');
    });

    }

    return (
        <>
        <div className='sidebar_servers'>
                <div className='sidebar_homepage' onClick={() => dispatch(homepage({
                    homepage: true,
                }))}>
                    HOME
                </div>
                <div className='sidebar_serverList' onClick={() => dispatch(homepage({
                    homepage: false,
                }))}>
                    SERVER
                </div>

            </div>
        {home ? (
            <div>
            </div>
        
        ) : (

        <div className='sidebar'>
            <div className="sidebar_top">
                <h3>Interact!</h3>
                <ExpandMore />
            </div>

            

            <div className='sidebar_channels'>
                <div className="sidebar_channelsHeader">

                    <div className="sidebar_header">

                        <ExpandMore />
                        <h4>Channels</h4>
                    </div>

                    <div className='sidebar_addChannel'>
                        <Add onClick={handleAddChannel} />
                    </div>

                </div>

                <div className='sidebar_channelsList'>

                    {channels.map(({id, channel}) => (
                    <SidebarChannel key={id} id={id} channelName={channel.channelName}/>
                    ))}

                </div>
            </div>


            <div className='sidebar_profile' >
            <Avatar  src={user.photo} onClick={() => auth.signOut()}/>
                <div className='sidebar_profileInfo'>
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0,4)}</p>
                </div>

                <div className='sidebar_profileIcons'>
                    <Mic />
                    <Headset />
                    <Settings />
                </div>
            </div>
        </div>
        )}
        </>
    )
}

export default Sidebar

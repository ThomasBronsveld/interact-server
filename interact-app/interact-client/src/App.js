import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { selectUser, selectHomepage} from './features/userSlice';
import Login from './Login';
import { auth } from './firebaseApp';
import {login, logout} from './features/userSlice'; 
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import VideoPlayer from './components/Videoplayer';
import Notifications from './components/Notifications';
import Options from './components/Options';


const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));
function App() {
  const classes = useStyles();
  const home = useSelector(selectHomepage);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const homepage = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {

    console.log(authUser)
    if (authUser) {
      dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        })
        
      );
      } else {
        dispatch(logout())
      }
    });
  }, [dispatch]);

  return (

    <div className="app">
      {user ? (
        <>
        <Sidebar />

        {!home ? (
          <>
          <Chat /> </>
        ) : (
          <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position='static' color="inherit">
                <Typography variant="h2" align="center">
                    Video Chat
                </Typography>
                </AppBar>
                <VideoPlayer />
                <Options>
                    <Notifications/>
                </Options>
        </div>
        )}
        
        </>

      ) : (
        <Login />
      )
    }
    </div>
  );
}

export default App;

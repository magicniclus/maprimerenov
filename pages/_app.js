import '../styles/globals.css';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from "../redux/store"
import { authenticateUser } from '../api/Auth';
import { currentUser, switchConnect } from '../redux/action';


function MyApp({ Component, pageProps }) {

    useEffect(()=>{
        const tagManagerArgs = {
            gtmId:"GTM-PHVP55Z"
        }
        
        TagManager.initialize(tagManagerArgs)
    }, [])

    useEffect(()=>{
        authenticateUser().then(user=>{
            store.dispatch(switchConnect(true))
            store.dispatch(currentUser(user))
        }).catch(err=>{
            switchConnect(false)
        })
    }, [])

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp

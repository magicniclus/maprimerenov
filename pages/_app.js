import '../styles/globals.css';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from "../redux/store"


function MyApp({ Component, pageProps }) {
    
    useEffect(()=>{
        const tagManagerArgs = {
            gtmId:"GTM-PHVP55Z"
        }
        
        TagManager.initialize(tagManagerArgs)
    }, [])

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp

import '../styles/globals.css';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {
    
    useEffect(()=>{
        const tagManagerArgs = {
            gtmId:"GTM-PHVP55Z"
        }
        
        TagManager.initialize(tagManagerArgs)
    }, [])

    return (
            <Component {...pageProps} />
    )
}

export default MyApp

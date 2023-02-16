
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import Web3 from 'web3';

import { createContext, useContext,useState } from 'react'
const AppContext=createContext(null);

export {AppContext}

function AppContextProvider(props){

 const connector = useWalletConnect();

  

  const [provider,setprovider]=useState("null")  


const [btmtab,setbtmtab]=useState({bottom:-200})    


const value={
   
    btmtab,
    setbtmtab,
    provider,
    setprovider
}

return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>




};

export default AppContextProvider
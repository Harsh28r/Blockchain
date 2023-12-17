// Web3Context.js
import React, { createContext, useContext, useState } from 'react';

const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(/* Your web3 instance here */);

  return (
    <Web3Context.Provider value={{ web3 }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => {
  return useContext(Web3Context);
};

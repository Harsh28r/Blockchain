import React, { useEffect } from 'react';

const metaMask = () => {
  useEffect(() => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
      // MetaMask is installed
      const openMetaMask = async () => {
        try {
          // Request access to the user's MetaMask account
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          console.log('MetaMask connected with account:', accounts[0]);
        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
        }
      };

      // Trigger MetaMask connection
      openMetaMask();
    } else {
      // MetaMask is not installed
      console.error('MetaMask is not installed.');
    }
  }, []);

  return (
    <div>
      {/* Your React application content */}
    </div>
  );
};

export default metaMask;

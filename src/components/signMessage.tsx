'use client';

import React from 'react';
import { useSignMessage } from 'wagmi';

function SignMessage() {
  const { signMessage, data: signMessageData } = useSignMessage();
  console.log("🚀 ~ SignMessage ~ signMessageData:", signMessageData)

  const handleSignMessage = async () => {
    try {
      const signature = signMessage({ message: 'hello world' });
      console.log('Signed message:', signature);
    } catch (error) {
      console.error('Error signing message:', error);
    }
  };

  return (
    <button
      className='bg-[blue] text-white rounded-xl px-[1rem] py-[0.5rem] font-semibold ml-[1rem]'
      onClick={handleSignMessage}
    >
      Sign message
    </button>
  );
}

export default SignMessage;

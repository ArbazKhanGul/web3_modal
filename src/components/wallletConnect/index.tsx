'use client';
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useWalletInfo } from '@web3modal/wagmi/react'
import { useAccount, useDisconnect } from 'wagmi'
import { useWeb3ModalState } from '@web3modal/wagmi/react'

export default function ConnectButton() {

    // 4. Use modal hook
    const { walletInfo } = useWalletInfo()
    const { address, isConnecting, isDisconnected ,isConnected, chainId} = useAccount()


    const { open: walletStatus, selectedNetworkId } = useWeb3ModalState()
    console.log("🚀 ~ ConnectButton ~ selectedNetworkId:", selectedNetworkId)

    const { disconnect } = useDisconnect()

    //   if (isConnecting) return <div>Connecting…</div>
    //   if (isDisconnected) return <div>Disconnected</div>
    //   return <div>{address}</div>


    const { open, close } = useWeb3Modal()

    return (
        <>

          { chainId != 97 && <div className='w-full px-[1rem] py-[1rem] text-[1.5rem] font-bold text-white bg-[red]'>Please connect to binance Testnet</div>}

            <div className='mt-[1rem] space-x-[1rem] mx-[1rem]'>

                {!address ? <button onClick={() => open()} className='bg-[blue] text-white rounded-xl px-[1rem] py-[0.5rem] font-semibold'>Connect Wallet</button>
                    : <button onClick={() => disconnect()} className='bg-[blue] text-white rounded-xl px-[1rem] py-[0.5rem] font-semibold'>Disconnect Wallet</button>}
                <button onClick={() => open({ view: 'Networks' })} className='bg-[blue] text-white rounded-xl px-[1rem] py-[0.5rem] font-semibold'>Change Network</button>

            </div>
        </>
    )
}
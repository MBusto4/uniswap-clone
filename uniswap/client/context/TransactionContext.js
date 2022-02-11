
import React, { useEffect, useState } from 'react'
// import { contractABI, contractAddress } from '../lib/constants'
// import { ethers } from 'ethers'
// import { client } from '../lib/sanityClient'
import { useRouter } from 'next/router'

export const TransactionContext = React.createContext()

let eth

if (typeof window !== 'undefined') {
    eth = window.ethereum
}

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState()
    // const [isLoading, setIsLoading] = useState(false)
    // const router = useRouter()
    // const [formData, setFormData] = useState({
    //     addressTo: '',
    //     amount: '',
    // })


    const connectWallet = async (metamask = eth) => {
        try {
            if (!metamask) return alert('Please install metamask ')
            const accounts = await metamask.request({ method: 'eth_requestAccounts' })
            setCurrentAccount(accounts[0])
        } catch (error) {
            console.error(error)
            throw new Error('No ethereum object.')
        }
    }
    const checkIfWalletIsConnected = async (metamask = eth) => {
        try {
            if (!metamask) return alert('Please install metamask ')

            const accounts = await metamask.request({ method: 'eth_accounts' })

            if (accounts.length) {
                setCurrentAccount(accounts[0])
            }
        } catch (error) {
            console.error(error)
            throw new Error('No ethereum object.')
        }
    }
    return (
        <TransactionContext.Provider
            value={{
                connectWallet,
                currentAccount,
                // formData,
                // setFormData,
                // handleChange,
                // sendTransaction,
                // isLoading,
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}
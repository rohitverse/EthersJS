const {ethers}= require("ethers");

const provider= new ethers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/HqgmdMFDhyZadihe-K0LAA965fJcfYYN`);

const queryBlockchain=async()=>{
    const block= await provider.getBlockNumber();
    console.log(`Block Number : ${block}`)
    const balance=await provider.getBalance("0x008b3b2F992C0E14eDaa6E2c662Bec549CAA8df1");
    console.log(`Balance of Account : ${balance}`)
}
queryBlockchain();
//0x008b3b2F992C0E14eDaa6E2c662Bec549CAA8df1

const {ethers}= require("ethers");

const provider= new ethers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/HqgmdMFDhyZadihe-K0LAA965fJcfYYN`);

const queryBlockchain=async()=>{
    const block= await provider.getBlockNumber();
    console.log(`Block Number : ${block}`)
    const balance=await provider.getBalance("0x008b3b2F992C0E14eDaa6E2c662Bec549CAA8df1");
    const balanceInEther=ethers.formatEther(balance);
    // const y=ethers.parseEther(balance);
    console.log(`Balance of Account : ${balanceInEther}`)
}
queryBlockchain();
//0x008b3b2F992C0E14eDaa6E2c662Bec549CAA8df1

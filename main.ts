import Blockchain from "./Models/Blockchain";
import Block from "./Models/Block";

// Create a new Blockchain
let GCoin = new Blockchain();

// add some transactions to the blockchain
GCoin.addBlock(new Block({ amount : 10 }));
GCoin.addBlock(new Block({ amount : 10 }));

// printout the blockchain before manipulate the data.
console.log('________________VALID-BLOCKCHAIN________________');
console.log(JSON.stringify(GCoin.chain, null, 4));
console.log("Is Valid:", GCoin.validateChain());

// Try to manipulate the block chain data
GCoin.chain[1].data = { amount : 1000};
GCoin.chain[1].hash = GCoin.chain[1].calcHash();

// printout the blockchain after manipulate the data.
console.log('________________MANIPULATED-BLOCKCHAIN________________');
console.log(JSON.stringify(GCoin.chain, null, 4));
console.log("Is Valid:", GCoin.validateChain());
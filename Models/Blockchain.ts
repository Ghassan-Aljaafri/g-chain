import Block from './Block';

export default class Blockchain {
    public chain: Block[] = [];

    constructor() {
        this.chain.push(new Block({amount : 0}));
    }

    getLastBlock(): Block {
        return this.chain[this.chain.length - 1];
    }

    addBlock(block: Block): void {
        let lastBlock = this.getLastBlock();
        block.setPrevHash(lastBlock.hash);
        this.chain.push(block);
    }

    validateChain(): boolean {
        for (let i = 1; i < this.chain.length; i++) {
            let currentBlock = this.chain[i];
            let prevBlock = this.chain[i - 1];
            
            if (currentBlock.hash !== currentBlock.calcHash()) {
                console.warn(`Invalid block ${currentBlock.getIndex()} hash:  ${currentBlock.hash} !== ${currentBlock.calcHash()}`);
                return false;
            }
            
            if (currentBlock.prevHash !== prevBlock.hash) {
                console.warn(`Invalid block connection ${currentBlock.getIndex()} AND ${prevBlock.getIndex()}`);
                return false;
            }
        }

        return true;
    }
}
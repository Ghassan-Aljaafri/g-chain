import * as crypto from 'crypto-js';

export default class Block {
    private static currentIndex: number = 0;
    private index: number;
    public data: object;
    private timestamp: Date;
    public prevHash: string;
    public hash: string = '';

    constructor(data: object, prevHash: string = '') {
        this.data = data;
        this.prevHash = prevHash;

        // calculated values
        this.index = ++Block.currentIndex;
        this.timestamp = new Date();
        this.hash = this.calcHash();
    }

    public calcHash() {
        let hash = crypto.SHA256(this.index + JSON.stringify(this.data) + this.timestamp + this.prevHash).toString();
        return hash;
    }

    public setPrevHash(prevHash: string) {
        this.prevHash = prevHash;
        this.hash = this.calcHash();
        return this;
    }
    public getIndex(): number {
        return this.index;
    }
}
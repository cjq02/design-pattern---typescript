import { LinkedList } from "typescript-collections";
import DesignPattern from "./DesignPattern";
import IPatternIterator from "./IPatternIterator";

export default class PatternIteratorImpl implements IPatternIterator {
    
    public patternList: LinkedList<DesignPattern>;
    private position: number = 0;
    private designPattern: DesignPattern;

    constructor(patternList: LinkedList<DesignPattern>) {
        this.patternList = patternList;
    }
    
    nextPattern(): DesignPattern {
        console.log(`Returning pattern at Position: ${this.position}`);

        this.designPattern = this.patternList.elementAtIndex(this.position);
        this.position++;

        return this.designPattern;
    }

    isLastPattern(): boolean {
        return this.position >= this.patternList.size();
    }

    

}
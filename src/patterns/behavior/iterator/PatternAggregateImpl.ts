import PatternAggregate from "./IPatternAggregate";
import DesignPattern from "./DesignPattern";
import PatternIterator from "./IPatternIterator";
import { LinkedList } from "typescript-collections";
import PatternIteratorImpl from "./PatternIteratorImpl";

export default class PatternAggregateImpl implements PatternAggregate {
    
    private patternList: LinkedList<DesignPattern>;

    constructor() {
        this.patternList = new LinkedList<DesignPattern>();
    }

    addPattern(designPattern: DesignPattern): void {
        this.patternList.add(designPattern);
    }    
    
    removePattern(designPattern: DesignPattern): void {
        this.patternList.remove(designPattern);
    }
    getPatternIterator(): PatternIterator {
        return new PatternIteratorImpl(this.patternList);
    }



    
}
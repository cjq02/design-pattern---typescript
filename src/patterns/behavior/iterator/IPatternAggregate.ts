import DesignPattern from "./DesignPattern";
import PatternIterator from "./IPatternIterator";

export default interface IPatternAggregate {

    addPattern(designPattern: DesignPattern): void;

    removePattern(designPattern: DesignPattern): void;

    getPatternIterator(): PatternIterator;

}
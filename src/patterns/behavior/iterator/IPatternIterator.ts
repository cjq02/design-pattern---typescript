import DesignPattern from "./DesignPattern";

export default interface IPatternIterator {

    nextPattern(): DesignPattern;

    isLastPattern(): boolean;

}
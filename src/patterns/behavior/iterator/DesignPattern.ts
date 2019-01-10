export default class DesignPattern {

    private patternType: string;
    private patternName: string;

    constructor(patternType: string, patternName: string) {
        this.patternType = patternType;
        this.patternName = patternName;
    }

    public getPatternType(): string {
        return this.patternType
    }

    public getPatternName(): string {
        return this.patternName
    }

}
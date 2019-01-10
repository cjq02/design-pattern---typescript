require('module-alias/register');
import DesignPattern from "@patterns/behavior/iterator/DesignPattern";
import PatternAggregateImpl from "@patterns/behavior/iterator/PatternAggregateImpl";
import IPatternAggregate from "src/patterns/behavior/iterator/IPatternAggregate";
import IPatternIterator from "src/patterns/behavior/iterator/IPatternIterator";

class ApplicationIterator {

    public static main(): void {
        let factoryMethod: DesignPattern = new DesignPattern("Creational", "Factory Method");
        let abstractFactory: DesignPattern = new DesignPattern("Creational", "Abstract Factory");
        let adapter: DesignPattern = new DesignPattern("Structural", "Adapter");
        let bridge: DesignPattern = new DesignPattern("Structural", "Bridge");
        let chainOfResponsibility: DesignPattern = new DesignPattern("Behavioral", "Chain of Responsibility");
        let iterator: DesignPattern = new DesignPattern("Behavioral", "Iterator");

        let patternAggregate: IPatternAggregate = new PatternAggregateImpl();
        patternAggregate.addPattern(factoryMethod);
        patternAggregate.addPattern(abstractFactory);
        patternAggregate.addPattern(adapter);
        patternAggregate.addPattern(bridge);
        patternAggregate.addPattern(chainOfResponsibility);
        patternAggregate.addPattern(iterator);

        console.log(`----- Pattern List -----`);
        this.printPattern(patternAggregate);

        patternAggregate.removePattern(factoryMethod);
        patternAggregate.removePattern(adapter);
        patternAggregate.removePattern(chainOfResponsibility);

        console.log(`----- Pattern list after removal operation -----`);
        this.printPattern(patternAggregate);

    }

    static printPattern(patternAggregate: IPatternAggregate): void {
        let patternIterator: IPatternIterator = patternAggregate.getPatternIterator();

        while(!patternIterator.isLastPattern()) {
            let designPattern: DesignPattern = patternIterator.nextPattern();
            console.log(`${designPattern.getPatternType()} : ${designPattern.getPatternName()}`);
        }
    }
  
  }
         
  ApplicationIterator.main();
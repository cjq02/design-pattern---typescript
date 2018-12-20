class ReportGeneratorImpl implements IReportGenerator {

    constructor() {
        console.log("ReportGeneratorImpl instance created");
    }
    
    displayReportTemplate(reportFormat: string, reportEntries: number): void {
        
    }    
    
    generateComplexReport(reportFormat: string, reportEntries: number): void {
        console.log("ReportGeneratorImpl: Generating complex report in "+reportFormat+" format with "+ reportEntries+" entries");
    }

    generateSensitiveReport(): void {
        console.log("ReportGeneratorImpl: Generating sensitive report");
    }
}

export default ReportGeneratorImpl;
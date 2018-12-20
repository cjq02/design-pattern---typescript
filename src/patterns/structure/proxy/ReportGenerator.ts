interface IReportGenerator {
    displayReportTemplate(reportFormat: string, reportEntries: number): void;

    generateComplexReport(reportFormat: string, reportEntries: number): void;

    generateSensitiveReport(): void;
}
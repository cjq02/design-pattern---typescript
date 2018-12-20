import Role from './Role'
import RoleEnum from './RoleEnum';
import ReportGeneratorImpl from './ReportGeneratorImpl';

class ReportGeneratorImplProxy implements IReportGenerator {

    private reportGeneratorImpl!: IReportGenerator;
    private accessRole: Role;

    public constructor(accessRole: Role) {
        this.accessRole = accessRole;
    }

    displayReportTemplate(reportFormat: string, reportEntries: number): void {
        console.log("ReportGeneratorImplProxy: Displaying blank report template in " + reportFormat + " format with " + reportEntries + " entries");
    }

    generateComplexReport(reportFormat: string, reportEntries: number): void {
        if (this.reportGeneratorImpl == null) {
            this.reportGeneratorImpl = new ReportGeneratorImpl();
            this.reportGeneratorImpl.generateComplexReport(reportFormat, reportEntries)
        }
    }

    generateSensitiveReport(): void {
        if (this.accessRole.getRole() === RoleEnum.MANAGER) {
            if (this.reportGeneratorImpl == null) {
                this.reportGeneratorImpl = new ReportGeneratorImpl();
            }
            this.reportGeneratorImpl.generateSensitiveReport();

            return;
        }

        console.log("You are not authorized to access sensitive reports.");
    }


}

export default ReportGeneratorImplProxy;
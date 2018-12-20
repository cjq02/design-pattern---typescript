require('module-alias/register')

import Role from '@patterns/structure/proxy/Role';
import ReportGeneratorImplProxy from '@patterns/structure/proxy/ReportGeneratorImplProxy';
import RoleEnum from '@patterns/structure/proxy/RoleEnum';

class ApplicationProxy {

    public static main(): void {
        let accessRole: Role = new Role();
        accessRole.setRole(RoleEnum.MANAGER);

        let proxy: IReportGenerator = new ReportGeneratorImplProxy(accessRole);

        proxy.displayReportTemplate("pdf", 200);
        proxy.generateComplexReport("web", 399);
        proxy.generateSensitiveReport();
    }
}

ApplicationProxy.main();
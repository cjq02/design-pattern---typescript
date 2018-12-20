import RoleEnum from "./RoleEnum";

class Role {

    private role!: RoleEnum;

    public getRole(): RoleEnum {
        return this.role;
    }

    public setRole(role: RoleEnum): void {
        this.role = role;
    }
}

export default Role;
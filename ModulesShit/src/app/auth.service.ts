

export class Auth{

     checkAuthorization(UserRole:string, ComponentPermissionLevel: number) {

        const returnPromise = new Promise((resolve,reject)=> {

            setTimeout(() => {
                resolve(this.isAllowed(UserRole, ComponentPermissionLevel));
            }, 2000);
        })

return returnPromise;
    }

    private isAllowed(UserRole:string,ComponentPermissionLevel:number): boolean{

        let RoleObject: Role = this.isValidRoleName(UserRole)
            console.log(RoleObject)
        console.log(ComponentPermissionLevel)
       if(RoleObject!=null)
        {
            return RoleObject.PermissionLevel >= ComponentPermissionLevel
        }
        else//fake role request 
            {
                console.log("unauthorized access caught.");
    return false;
            }
    }
    
    private isValidRoleName(Role:string): Role{
        let retObj:Role=null;
        this.UserRoles.forEach(role => {
            if(role.RoleName==Role)
                {
                   retObj= role;
                }
        });
        return retObj;
    }

    UserRoles: Role[]=[
{
    RoleName: 'Admin',
    PermissionLevel: 7
},{
    RoleName: 'Manager',
    PermissionLevel: 4
},{
    RoleName: 'DataEntry',
    PermissionLevel: 1
}
    ];

}

class Role{
    RoleName: string;
    PermissionLevel: number;
}

export class PermissionsService{

Permissions:{Component:string,PermissionLevel:number}[] = [
    {
        Component: "happComp",
        PermissionLevel: 1
    },
    {
        Component: "RecepiesComp",
        PermissionLevel: 7
    },
    {   
        Component: "ShoppingComp",
        PermissionLevel: 3
    }
]

isAccessible(ComponentName:string, UserPermissionsLevel: number): boolean{
    return this.Permissions.some((permissionRule)=>{
        return permissionRule.Component == ComponentName && permissionRule.PermissionLevel <= UserPermissionsLevel
    });
}
}
type User = {
    loginId: string;
    password: string;
    isActive : boolean;
    isAdmin : boolean;
}

type UserReadonly = {
    readonly loginId : string;
    readonly password: string;
    readonly isActive : boolean;
    readonly isAdmin : boolean;
}

type ReadonlyTypeMapper<T> = {
    readonly [P in keyof T] : T[P];
};

type UserReadonlyMapped = ReadonlyTypeMapper<User>;

export function UseTypeMapper(){
    let user : UserReadonlyMapped = {loginId: "Yawar", isActive : true, isAdmin: false, password: "pakistan"};
    //user.isActive = false;
}

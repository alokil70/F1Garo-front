export interface IUser {
    email: string | null;
    displayName: string | null;
    token: string | null;
    username: string | null;
}

export interface IUserAuth {
    user: {
        code: string;
        password?: string;
    };
}

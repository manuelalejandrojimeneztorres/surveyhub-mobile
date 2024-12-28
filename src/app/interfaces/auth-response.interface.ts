export interface AuthResponseInterface {
    user: {
        id: number;
        loginName: string;
        emailAddress: string;
        phoneNumber: string;
        passwordHash: string;
        tokenVersion: number;
    };
    access_token: string;
}

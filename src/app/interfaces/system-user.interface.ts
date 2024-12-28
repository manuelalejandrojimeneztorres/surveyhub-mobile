export interface SystemUserInterface {
    id?: number;
    loginName: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    passwordHash: string;
    status: string;
    tokenVersion: number;
    profilePicture?: string;
    lastLoginAt?: Date;
    lastPasswordChangeAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ResponseInterface {
    id?: number;
    surveyId: number;
    systemUserId: number;
    beginDate: Date;
    endDate?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface SurveyInterface {
    id?: number;
    name: string;
    description: string;
    startDate: Date;
    endDate?: Date;
    minResponses?: number;
    maxResponses?: number;
    surveyStatusId: number;
    createdAt?: Date;
    updatedAt?: Date;
}

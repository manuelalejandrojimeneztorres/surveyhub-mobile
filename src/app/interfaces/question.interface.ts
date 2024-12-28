export interface QuestionInterface {
    id?: number;
    surveyId: number;
    questionTypeId: number;
    order: number;
    text: string;
    isMandatory: string;
    createdAt?: Date;
    updatedAt?: Date;
}

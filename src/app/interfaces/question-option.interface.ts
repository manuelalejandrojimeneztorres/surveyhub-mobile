export interface QuestionOptionInterface {
    id?: number;
    questionId: number;
    order: number;
    value: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface AnswerInterface {
    id?: number;
    questionId: number;
    responseId: number;
    answer?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

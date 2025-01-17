export interface AnswerOptionInterface {
    id?: number;
    answerId: number; // NULL ? NOT NULL
    questionOptionId: number;
    createdAt?: Date;
    updatedAt?: Date;
}

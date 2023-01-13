import {useMemo} from "react";
import { InferType, number, object, string } from 'yup';
export const feedbackFormSchema = () =>
    object({
        name: string().required('Name is required!').min(2, 'Must be at least 2 characters'),
        email: string().required('Email is required!').email('Must be valid a email address!'),
        rating: number().required('Rating is required').min(1, '1 is minimum!').max(5, '5 is maximum!').typeError('Must be a number between 1 and 5'),
        comment: string().notRequired()
    });
export const UseFeedbackFormSchema = (): ReturnType<typeof feedbackFormSchema> => {
    const schema = useMemo( () => feedbackFormSchema(), []);

    return schema;
};

export type FeedbackFormFields = InferType<ReturnType<typeof feedbackFormSchema>>;
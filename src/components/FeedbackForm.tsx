import React from 'react';
import styled from "styled-components";
import { yupResolver } from '@hookform/resolvers/yup';
import {FeedbackFormFields, UseFeedbackFormSchema} from "./form_data/FeedbackFormData";
import {useForm} from "react-hook-form";
import {submitFormType} from "./form_data/types";

export const FeedbackForm = () => {
    const schema = UseFeedbackFormSchema();

    const {
        register,
        formState: { isValid, errors },
        handleSubmit
    } = useForm<FeedbackFormFields>({
        resolver: yupResolver(schema),
        mode: 'all',
    });

    const handleSubmitForm: submitFormType<FeedbackFormFields> = async (
        data
    ): Promise<void> => {
        console.log('data', data)
    };

    return (
        <>
            <div className="mb-3">
                <form >
                    <InputGroup>
                        <label htmlFor="name" className="form-label">Name *</label>
                        <Input {...register('name')} type="text" className="form-control" id="name" placeholder="John"/>
                        {errors.name && <InvalidInput>{errors.name.message}</InvalidInput>}
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor="email" className="form-label">Email address *</label>
                        <Input {...register('email')} type="email" className="form-control" id="email" placeholder="name@example.com"/>
                        {errors.email && <InvalidInput>{errors.email.message}</InvalidInput>}
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor="rating" className="form-label">Rating * (1-5)</label>
                        <Input {...register('rating')} type="number" className="form-control" id="rating" min="1" max="5" defaultValue="1" />
                        {errors.rating && <InvalidInput>{errors.rating.message}</InvalidInput>}
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Comments</label>
                        <textarea {...register('comment')} className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                        {errors.comment && <InvalidInput>{errors.comment.message}</InvalidInput>}
                    </InputGroup>

                    <Button type="button" className="btn btn-success" onClick={ handleSubmit(handleSubmitForm) } >
                        Export to JSON
                    </Button>
                </form>

            </div>
        </>
    );
}

const InputGroup = styled.div`
  margin-bottom: 25px;
`;

const Input = styled.input`
  min-width: 350px;
  &:focus {
    outline: 0;
    box-shadow: none;
  }
`;

const Button = styled.button`
  min-width: 350px;
  &:focus {
    outline: 0;
    box-shadow: none;
  }
`;

const InvalidInput = styled.small`
  color: red;
  margin-top: 20px;
`;

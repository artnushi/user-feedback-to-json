import React from 'react';
import styled from "styled-components";
import {yupResolver} from '@hookform/resolvers/yup';
import {FeedbackFormFields, UseFeedbackFormSchema} from "./form_data/FeedbackFormData";
import {useForm} from "react-hook-form";
import {submitFormType} from "./form_data/types";

export const FeedbackForm = () => {
    const schema = UseFeedbackFormSchema();

    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset
    } = useForm<FeedbackFormFields>({
        resolver: yupResolver(schema),
        mode: 'all',
    });

    const handleSubmitForm: submitFormType<FeedbackFormFields> = async (
        data
    ): Promise<void> => {
        exportToJson(data);
    };

    const exportToJson = (data: object) => {
        // Set default file name
        const fileName = "feedback_form";

        // Convert string to json format
        const formattedData = JSON.stringify(data, null, 2);

        // Create new block instance and set type what to export
        const blob = new Blob([formattedData], {type: "application/json"});

        const href = URL.createObjectURL(blob);

        // Type needed to create for exporting to file ex: Link
        const createdLink = document.createElement("a");

        createdLink.setAttribute('href', href);
        createdLink.setAttribute('download', `${fileName}.json`)

        document.body.appendChild(createdLink);
        createdLink.click();
        reset();
    }

    return (
        <>
            <div className="mb-3">
                <form>
                    <div className="row">
                        <div className="col-12">
                            <InputGroup>
                                <label htmlFor="name" className="form-label">Name *</label>
                                <Input {...register('name')} type="text" className="form-control" id="name"/>
                                {errors.name && <InvalidInput>{errors.name.message}</InvalidInput>}
                            </InputGroup>
                        </div>

                        <div className="col-12 col-md-10">
                            <InputGroup>
                                <label htmlFor="email" className="form-label">Email address *</label>
                                <Input {...register('email')} type="email" className="form-control" id="email"/>
                                {errors.email && <InvalidInput>{errors.email.message}</InvalidInput>}
                            </InputGroup>
                        </div>

                        <div className="col-12 col-md-2">
                            <InputGroup>
                                <label htmlFor="rating" className="form-label">Rating (1-5) * </label>
                                <Input {...register('rating')} type="number" className="form-control" id="rating" min="1"
                                       max="5" defaultValue="1"/>
                                {errors.rating && <InvalidInput>{errors.rating.message}</InvalidInput>}
                            </InputGroup>
                        </div>

                        <div className="col-12">
                            <InputGroup>
                                <label htmlFor="comment" className="form-label">Comments</label>
                                <textarea {...register('comment')} className="form-control" id="comment" rows={3}></textarea>
                                {errors.comment && <InvalidInput>{errors.comment.message}</InvalidInput>}
                            </InputGroup>
                        </div>

                        <div className="col-12">
                            <Button type="button" disabled={!isValid} className="btn btn-success w-100"
                                    onClick={handleSubmit(handleSubmitForm)}>
                                Export to JSON
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

const InputGroup = styled.div`
  margin-bottom: 25px;
`;

const Input = styled.input`
  &:focus {
    outline: 0;
    box-shadow: none;
  }
`;

const Button = styled.button`
  &:focus {
    outline: 0;
    box-shadow: none;
  }
`;

const InvalidInput = styled.small`
  color: red;
  margin-top: 20px;
`;

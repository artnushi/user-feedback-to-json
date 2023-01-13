import React from 'react';
import styled from "styled-components";

export const FeedbackForm = () => {
    return (
        <>
            <div className="mb-3">
                <InputGroup>
                    <label htmlFor="name" className="form-label">Name *</label>
                    <Input type="text" className="form-control" id="name" placeholder="John"/>
                </InputGroup>

                <InputGroup>
                    <label htmlFor="email" className="form-label">Email address *</label>
                    <Input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                </InputGroup>

                <InputGroup>
                    <label htmlFor="rating" className="form-label">Rating * (1-5)</label>
                    <Input type="number" className="form-control" id="rating" min="1" max="5" defaultValue="1" placeholder="name@example.com"/>
                </InputGroup>

                <InputGroup>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Comments</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                </InputGroup>

                <Button type="button" className="btn btn-success">
                    Export to JSON
                </Button>

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

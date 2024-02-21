/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";

export interface props {
  options: string[];
  addOption: (option: string) => void;
  removeOption: (option: string) => void;
}

const Options = ({ options, addOption, removeOption }: props) => {
  const [optionText, setOptionText] = useState("");

  return (
    <>
      <Form.Group className="mb-3 d-flex align-items-center">
        <Form.Control
          type="text"
          className="me-2"
          size="sm"
          placeholder={`Add option: ${options.length + 1}`}
          value={optionText}
          onChange={(e) => setOptionText(e.target.value)}
        />
        <Button
          disabled={!optionText.length}
          variant="secondary"
          size="sm"
          onClick={() => {
            addOption(optionText);
            setOptionText("");
          }}
        >
          +
        </Button>
      </Form.Group>
      Added Options:
      <ListGroup className="mb-3 addedOptionsInModal">
        {options.map((option: any) => (
          <ListGroup.Item key={option} className="height-md py-1">
            {option}
            <span className="float-end">
              <Button
                className="height-sm px-2"
                variant="danger"
                size="sm"
                onClick={() => removeOption(option)}
              >
                -
              </Button>
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Options;

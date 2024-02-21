/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addElement } from "../../slices/formElements";
import { randomId } from "../../utils/randomIdGenerator";
import { AvailableInputs } from "../../utils/formElements";
import { addDetails } from "../../slices/formDetails";

const TextArea = () => {
  const dispatch = useDispatch();

  const [inputObject, setInputObject] = useState({
    label: "",
    required: false,
    maxLength: "10000",
  });

  const handleChange = (e: any) => {
    setInputObject((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value.toString(),
      };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const id = randomId();
    dispatch(
      addElement({
        id,
        type: AvailableInputs.TEXT_AREA,
        label: inputObject.label,
        required: inputObject.required,
        maxLength: inputObject.maxLength,
      })
    );
    dispatch(
      addDetails({
        id,
        label: inputObject.label.replace(" ", "-"),
        value: "",
        required: inputObject.required,
      })
    );
    setInputObject({
      label: "",
      required: false,
      maxLength: "10000",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Input label</Form.Label>
        <Form.Control
          type="text"
          name="label"
          required
          placeholder="Add the text area 'Label'"
          value={inputObject.label}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Max length</Form.Label>
        <Form.Control
          name="maxLength"
          type="number"
          placeholder="Add a max length (Defaults to 10000)"
          value={inputObject.maxLength}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Check
        type="checkbox"
        label="Required?"
        className="mb-3"
        checked={inputObject.required}
        onChange={(e) =>
          setInputObject((prevValue) => {
            return {
              ...prevValue,
              required: e.target.checked,
            };
          })
        }
      />
      <Button
        disabled={!inputObject.label.length}
        variant="success"
        type="submit"
      >
        Add
      </Button>
    </Form>
  );
};

export default TextArea;

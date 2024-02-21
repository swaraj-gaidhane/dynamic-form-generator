/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addElement } from "../../slices/formElements";
import { randomId } from "../../utils/randomIdGenerator";
import {
  AvailableInputs,
  AvailableNormalInputs,
} from "../../utils/formElements";
import { addDetails } from "../../slices/formDetails";

const NormalInput = () => {
  const dispatch = useDispatch();

  const [inputObject, setInputObject] = useState({
    label: "",
    type: AvailableNormalInputs.TEXT,
    required: false,
    maxLength: "100",
  });

  const handleChange = (e: any) => {
    setInputObject((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const id = randomId();
    dispatch(
      addElement({
        id,
        type: AvailableInputs.NORMAL_INPUT,
        inputType: inputObject.type,
        label: inputObject.label,
        required: inputObject.required,
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
      type: AvailableNormalInputs.TEXT,
      required: false,
      maxLength: "100",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Input label</Form.Label>
        <Form.Control
          type="text"
          required
          placeholder="Add the input 'Label'"
          value={inputObject.label}
          name="label"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Input type</Form.Label>
        <Form.Select
          value={inputObject.type}
          name="type"
          onChange={handleChange}
        >
          {Object.values(AvailableNormalInputs).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Max length</Form.Label>
        <Form.Control
          name="maxLength"
          type="number"
          placeholder="Add a max length (Defaults to 100)"
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

export default NormalInput;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addElement } from "../../slices/formElements";
import { randomId } from "../../utils/randomIdGenerator";
import { AvailableInputs } from "../../utils/formElements";
import Options from "./Options";
import { addDetails } from "../../slices/formDetails";

export interface initialState {
  label: string;
  required: boolean;
  options: string[];
}

const Dropdown = () => {
  const dispatch = useDispatch();

  const [inputObject, setInputObject] = useState<initialState>({
    label: "",
    required: false,
    options: [],
  });

  const handleChange = (e: any) => {
    setInputObject((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value.toString(),
      };
    });
  };

  const addOption = (option: string) => {
    setInputObject((prevValue) => {
      return {
        ...prevValue,
        options: [...prevValue.options, option],
      };
    });
  };

  const removeOption = (option: string) => {
    setInputObject((prevValue) => {
      return {
        ...prevValue,
        options: prevValue.options.filter((opt) => opt !== option),
      };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const id = randomId()
    dispatch(
      addElement({
        id,
        type: AvailableInputs.DROPDOWN,
        label: inputObject.label,
        required: inputObject.required,
        options: inputObject.options,
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
      options: [],
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
          placeholder="Add the dropdown 'Label'"
          value={inputObject.label}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Label>Add options</Form.Label>
      <Options
        options={inputObject.options}
        addOption={addOption}
        removeOption={removeOption}
      />
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
        disabled={!inputObject.label.length || inputObject.options.length < 1}
        variant="success"
        type="submit"
      >
        Add
      </Button>
    </Form>
  );
};

export default Dropdown;

import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateDetails } from "../../slices/formDetails";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Input = ({ element }: any) => {
  const dispatch = useDispatch();
  const details = useSelector((state: any) => state.details);

  const inputKey = element.label.toLowerCase().replace(" ", "-");
  const inputControl = details.find((detail: any) => detail.id === element.id);

  const handleChange = (e: any) => {
    e.preventDefault();
    dispatch(
      updateDetails({
        id: inputControl?.id,
        value: e.target.value,
      })
    );
  };

  return (
    <Form.Group className="mb-1">
      <Form.Label className={`fw-bold ${inputControl?.hasError && "error"}`}>
        {element.label}:
      </Form.Label>
      <Form.Control
        name={inputKey}
        type={element.inputType}
        value={inputControl?.value}
        onChange={handleChange}
        placeholder="Add value here"
        required={inputControl?.required}
        maxLength={element.maxLength}
      />
    </Form.Group>
  );
};

export default Input;

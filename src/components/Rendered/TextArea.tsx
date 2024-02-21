import { Form } from "react-bootstrap";
import { updateDetails } from "../../slices/formDetails";
import { useDispatch, useSelector } from "react-redux";

/* eslint-disable @typescript-eslint/no-explicit-any */
const TextArea = ({ element }: any) => {
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
        as="textarea"
        onChange={handleChange}
        name={inputKey}
        placeholder="Add text area value here"
        required={element.required}
        maxLength={element.maxLength}
      />
    </Form.Group>
  );
};

export default TextArea;

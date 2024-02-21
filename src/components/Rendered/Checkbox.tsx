import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateDetails } from "../../slices/formDetails";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Checkbox = ({ element }: any) => {
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
      <div className="d-flex gap-3">
        {element.options.map((opt: any) => (
          <Form.Check
            key={opt}
            onChange={handleChange}
            checked={inputControl.value === opt}
            type={element.type}
            name={inputKey}
            label={opt}
            value={opt}
            id={`${inputKey}-${opt}`}
          />
        ))}
      </div>
    </Form.Group>
  );
};

export default Checkbox;

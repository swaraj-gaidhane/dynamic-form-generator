/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { AvailableInputs } from "../utils/formElements";
import { Checkbox, Dropdown, Input, Radio, TextArea } from "./Rendered";
import { Button, Form } from "react-bootstrap";
import { removeDetail, resetDetails } from "../slices/formDetails";
import { deleteElement } from "../slices/formElements";

const FormLayout = () => {
  const { elements, details } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const hasErrors = details.some((detail: any) => detail.hasError);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(resetDetails());
  };

  const removeElement = (id: number) => {
    dispatch(deleteElement(id));
    dispatch(removeDetail(id));
  };

  return (
    <>
      {elements.length > 0 ? (
        <>
          <h5>Please add details in below form</h5>
          <hr />

          <Form onSubmit={handleSubmit}>
            {elements.map((element: any) => (
              <div className="position-relative" key={element.id}>
                {element.type === AvailableInputs.NORMAL_INPUT && (
                  <Input element={element} />
                )}
                {element.type === AvailableInputs.TEXT_AREA && (
                  <TextArea element={element} />
                )}
                {element.type === AvailableInputs.DROPDOWN && (
                  <Dropdown element={element} />
                )}
                {element.type === AvailableInputs.RADIO_INPUT && (
                  <Radio element={element} />
                )}
                {element.type === AvailableInputs.CHECKBOX && (
                  <Checkbox element={element} />
                )}
                <Button
                  variant="danger"
                  className="mb-2 deleteButton"
                  size="sm"
                  onClick={() => removeElement(element.id)}
                >
                  x
                </Button>
              </div>
            ))}

            <Button
              type="submit"
              disabled={hasErrors}
              variant="primary"
              size="lg"
            >
              Submit
            </Button>
          </Form>
        </>
      ) : (
        <p>Nothing to render! Add some inputs</p>
      )}
    </>
  );
};

export default FormLayout;

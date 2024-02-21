/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addElement } from "../slices/formElements";
import { addDetails } from "../slices/formDetails";

const ImportForm = () => {
  const dispatch = useDispatch();

  const importForm = () => {
    if (localStorage.getItem("dynamic_form_elements")) {
      const elements = JSON.parse(
        localStorage.getItem("dynamic_form_elements") as any
      );
      elements.forEach((element: any) => {
        dispatch(addElement(element));
        dispatch(
          addDetails({
            id: element.id,
            label: element.label.replace(" ", "-"),
            value: "",
            required: element.required,
          })
        );
      });
    }
  };

  return (
    <Button variant="success" onClick={importForm}>
      Import form
    </Button>
  );
};

export default ImportForm;

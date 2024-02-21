/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetElements } from "../slices/formElements";
import { clearDetails } from "../slices/formDetails";

const ExportForm = () => {
  const dispatch = useDispatch();
  const elements = useSelector((state: any) => state.elements);

  const exportForm = () => {
    localStorage.setItem("dynamic_form_elements", JSON.stringify(elements));
    dispatch(resetElements());
    dispatch(clearDetails());
  };

  return (
    <Button variant="warning" onClick={exportForm}>
      Export form
    </Button>
  );
};

export default ExportForm;

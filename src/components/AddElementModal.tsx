import { useState } from "react";
import { AvailableInputs } from "../utils/formElements";
import { Checkbox, Dropdown, NormalInput, RadioInput, TextArea } from "./Form";
import { Button, Modal } from "react-bootstrap";

const AddElementModal = () => {
  const [showAddElementModal, setShowAddElementModal] = useState(false);
  const [currentInput, setCurrentInput] = useState(
    AvailableInputs.NORMAL_INPUT
  );

  const onDismiss = () => {
    setShowAddElementModal(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowAddElementModal(true)}>
        Add element
      </Button>
      <Modal show={showAddElementModal} onHide={onDismiss}>
        <Modal.Header closeButton>
          <Modal.Title>Add element</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="element_type">Choose element type: </label>
          <select
            id="element_type"
            value={currentInput}
            className="form-select my-2"
            onChange={(e) => setCurrentInput(e.target.value as AvailableInputs)}
          >
            {Object.values(AvailableInputs).map((input) => (
              <option key={input} value={input}>
                {input}
              </option>
            ))}
          </select>
          <hr />

          {currentInput === AvailableInputs.NORMAL_INPUT ? (
            <NormalInput />
          ) : null}
          {currentInput === AvailableInputs.RADIO_INPUT ? <RadioInput /> : null}
          {currentInput === AvailableInputs.TEXT_AREA ? <TextArea /> : null}
          {currentInput === AvailableInputs.CHECKBOX ? <Checkbox /> : null}
          {currentInput === AvailableInputs.DROPDOWN ? <Dropdown /> : null}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddElementModal;

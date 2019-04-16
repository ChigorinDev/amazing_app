import React from 'react';
import { Modal, Button } from "react-bootstrap";
import AddAffairForm from './AddAffairForm';

class AddAffairModal extends React.Component {
  render() {
    // console.log({...this.props});
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Add your new amazing affair
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddAffairForm addAffair={this.props.addAffair}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

    );
  }
}

export default AddAffairModal;
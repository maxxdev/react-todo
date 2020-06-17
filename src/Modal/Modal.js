import React from "react";
import './Modal.css'

export default class Modal extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({isOpen: true})}>Open modal</button>
        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h1>Title</h1>
              <p>Im modal body</p>
              <button onClick={() => this.setState({isOpen: false})}> close modal</button>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}
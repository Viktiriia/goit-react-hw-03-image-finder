import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  // додаю слуховувача подій
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
// видаляю слуховувача подій
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  // перевірка клавіші «Escape»
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.handleClose();
    }
  };
  handleClose = () => {
    this.props.handleClose();
  };
  // клік за межами модалки
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.handleClose(); 
    }
  };

  render() {
    return createPortal(
      <ModalOverlay onClick={this.handleBackdropClick}>
        <ModalContent>{this.props.children}</ModalContent>
      </ModalOverlay>,
      modalRoot
    );
  }
}


export default Modal;


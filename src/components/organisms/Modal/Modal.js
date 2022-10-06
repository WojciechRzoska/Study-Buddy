import Button from 'components/atoms/Button/Button';
import React from 'react';
import styles from './Modal.module.scss';
import ReactModal from 'react-modal';

const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <ReactModal
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={handleClose}
      overlayClassName={styles.overlay}
      className={styles.wrapper}
    >
      {children}
      <Button onClick={handleClose}>close</Button>
    </ReactModal>
  );
};

export default Modal;

import React, { Component } from 'react';
import s from './Backdrop.module.css';

export default class Backdrop extends Component {
  componentDidMount() {
    console.log('ComponentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handlebackdropClick = e => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div className={s.backdrop} onClick={this.handlebackdropClick}>
        <div className={s.modal}>{this.props.children}</div>
      </div>
    );
  }
}

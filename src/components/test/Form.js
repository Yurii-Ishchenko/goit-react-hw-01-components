import React, { Component } from 'react';
import shotrId from 'shortid';

export default class From extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };
  nameInputId = shotrId.generate();
  tagInputId = shotrId.generate();
  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', tag: '' });
  };
  handleLicenceChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({ licence: e.currentTarget.checked });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Имя
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          ></input>
        </label>
        <label htmlFor={this.tagInputId}>
          Прозвище
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.tagInputId}
          ></input>
        </label>

        <p>Ваш уровень</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            checked={this.state.experience === 'junior'}
            onChange={this.handleChange}
          />{' '}
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            checked={this.state.experience === 'middle'}
            onChange={this.handleChange}
          />{' '}
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            checked={this.state.experience === 'senior'}
            onChange={this.handleChange}
          />{' '}
          Senior
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name=""
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />{' '}
          Согласен с условиями
        </label>
        <button type="submit" disabled={!this.state.licence}>
          Отправить
        </button>
      </form>
    );
  }
}

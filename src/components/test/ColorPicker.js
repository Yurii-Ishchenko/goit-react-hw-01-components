import React, { Component } from 'react';
import s from './ColorPicker.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(s);

export default class ColorPiker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  makeOptionClassNames = index => {
    const cls = cx({
      option: true,
      active: index === this.state.activeOptionIdx,
    });
    console.log(cls);
    return cls;
    // const optionClasess = [s.option];
    // if (index === this.state.activeOptionIdx) {
    //   optionClasess.push(s.active);
    // }
    // return optionClasess.join(' ');
  };
  setActiveIndex = index => {
    this.setState({ activeOptionIdx: index });
  };
  render() {
    const { options } = this.props;
    const { activeOptionIdx } = this.state;
    const { label } = options[activeOptionIdx];

    return (
      <div className={s.container}>
        <h2 className={s.title}>Color Piker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassNames(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => {
                this.setActiveIndex(index);
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

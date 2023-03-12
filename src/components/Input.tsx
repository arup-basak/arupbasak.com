import React, { Component } from 'react';

interface InputProps {
  id: string,
  placeholder: string,
  type?: "text" | "email",
  value: string
}

interface InputState {
  value: string
}

class Input extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const { id, placeholder, type } = this.props;
    const { value } = this.state;

    return (
      <div className="w-50 relative group my-10">
        <input
          type={type}
          id={id}
          className={`h-10 p-8 peer bg-gray-100 outline-none w-full`}
          value={value}
          required
          onChange={this.handleChange}
        />
        <label
          htmlFor={id}
          className={`select-none transform transition-all absolute top-0 left-0 h-full flex items-center pl-5 text-2xl 
                      group-focus-within:text-lg peer-valid:text-lg group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full 
                      peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0`}>
          {placeholder}
        </label>
      </div>
    );
  }
}

export default Input;


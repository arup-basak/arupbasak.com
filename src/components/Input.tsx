import React, { useState } from 'react';

interface InputProps {
  id: string,
  placeholder?: string | "";
  type?: "text" | "email";
  value?: string | "";
  onChange?: (value: string) => void;
}

const Input = (props: InputProps) => {
  const [value, setValue] = useState(props.value);

  return (
    <>
      <div className="w-50 relative group my-10">
        <input
          type={props.type}
          id={props.id}
          className={`h-10 mobile:p-6 mobile:text-xl desktop:p-8 peer bg-gray-100 outline-none w-full`}
          value={value}
          required
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setValue(event.target.value);
              if (props.onChange) {
                props.onChange(event.target.value);
              }
            }
          }
        />
        <label
          htmlFor={props.id}
          className={`select-none transform transition-all absolute top-0 left-0 h-full flex items-center pl-5 text-2xl 
                    group-focus-within:text-lg peer-valid:text-lg group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full 
                    peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0`}>
          {props.placeholder}
        </label>
      </div>
    </>
  );
}

export default Input;

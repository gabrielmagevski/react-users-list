import React, { InputHTMLAttributes } from 'react';
import { CustomCheckbox } from './styles';

export type TypeCheckBoxCustom = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}

export function CheckBoxCustom({ label, ...props }: TypeCheckBoxCustom) {
  return (
    <>
      <CustomCheckbox>
        <input id="check" type="checkbox" {...props} />
        <label htmlFor="check">{label}</label>
      </CustomCheckbox>
    </>
  )
}

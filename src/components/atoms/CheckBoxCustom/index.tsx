import React from 'react';
import { TypeCheckBoxCustom } from '../../../@types';
import { CustomCheckbox } from './styles';

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

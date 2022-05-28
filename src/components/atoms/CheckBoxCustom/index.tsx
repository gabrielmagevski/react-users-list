import React from 'react';
import { TypeCheckBoxCustom } from '../../../@types';
import { CustomCheckbox } from './styles';

export function CheckBoxCustom({ label }: TypeCheckBoxCustom) {
  return (
    <>
      <CustomCheckbox>
        <input id="check" type="checkbox" />
        <label htmlFor="check">{label}</label>
      </CustomCheckbox>
    </>
  )
}

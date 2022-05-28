import React from 'react';
import { CustomCheckbox   } from './styles';

export function CheckBoxCustom() {
  return (
    <>
      <CustomCheckbox>
        <input id="Adults" type="checkbox" />
        <label htmlFor="Adults">Adults</label>
      </CustomCheckbox>
    </>
  )
}

import styled from "styled-components";

export const CustomCheckbox = styled.div`
  input {
   display: none;
  }
  input + label:before {
    content: '';
    width: 18px;
    height: 18px;
    border-radius: 4px;
    background-color: white;
    border: 1px solid gray;
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    margin-bottom: 3px;
    
  }

  input:checked + label:before {
    background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");
    background-color: #0099FF;
    background-position: center;
    border: none;
    padding: 1px;
  }
`;
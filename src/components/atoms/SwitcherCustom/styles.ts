import styled from "styled-components";

export const CustomSwitcher = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;

  input[type="checkbox"] {
    position: relative;
    width: 80px;
    height: 40px;
    -webkit-appearance: none;
    background: #c6c6c6;
    outline: none;
    border-radius: 20px;
    box-shadow: inset 0 0 5px rgba(0,0,0,.2);
  }
  input:checked[type="checkbox"] {
    background-color: #03a9f4;
  }
  input[type="checkbox"]:before {
   content: '';
   position: absolute;
   width: 40px;
   height: 40px;
   border-radius: 20px;
   top: 0;
   left: 0;
   background: #fff;
   transform: scale(1.1);
   box-shadow: 0 2px 5px rgba(0,0,0, .2);
   transition: .5s;
  }

  input:checked[type="checkbox"]:before {
    left: 40px;
  }

  input + label:before {
    content: '';
    margin-right: 10px;
  }
`;
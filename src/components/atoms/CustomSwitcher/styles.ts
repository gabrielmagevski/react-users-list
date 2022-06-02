import styled from "styled-components";

export const Switcher = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;

  input[type="checkbox"] {
    position: relative;
    width: 60px;
    height: 35px;
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
   width: 25px;
   height: 25px;
   margin-top: 5px;
   border-radius: 20px;
   top: 0;
   left: 0;
   background: #fff;
   transform: scale(1.1);
   box-shadow: 0 2px 5px rgba(0,0,0, .2);
   transition: .5s;
   left: 5px;  
  }

  input:checked[type="checkbox"]:before {
    left: 30px;
  }

  input + label:before {
    content: '';
    margin-right: 15px;
  }
`;
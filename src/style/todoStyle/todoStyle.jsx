import { createGlobalStyle } from 'styled-components';

const TodoStyle = createGlobalStyle`
* {
    box-sizing: content-box;
}

body {
  background: #f6f5f7;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  height: 100%;
  margin: 90px;
}

`;

export default TodoStyle;

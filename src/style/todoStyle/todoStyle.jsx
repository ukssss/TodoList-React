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
  height: 100vh;
  margin: -20px 0 50px;
}

`;

export default TodoStyle;

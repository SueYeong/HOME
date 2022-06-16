import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  color: "white",
  fontSize: "50px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }
`;

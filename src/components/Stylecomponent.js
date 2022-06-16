import styled from "styled-components";
import { mainStyle } from "../styles/GlobalStyled";

const Div = styled.div`
  width: 100wh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Con_wrap = styled.div`
  width: 1400px;
  height: 500px;
  display: flex;
  justify-content: space-between;
`;

const Wrap = styled.div`
  display: flex;
  width: 400px;
  height: 700px;
  flex-direction: column;
  color: ${mainStyle.color};
`;

const Box = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
`;
export const Stylecomponent = ({ Styledata }) => {
  return (
    <Div>
      <Con_wrap>
        {Styledata.map((con) => (
          <Wrap>
            <img
              src={con.img}
              style={{
                width: "100%",
                height: "200px",
              }}
            />
            <Box>
              <h3
                style={{
                  fontSize: "25px",
                  marginLeft: "20px",
                }}
              >
                {con.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  widows: "100px",
                  height: "100px",
                  marginLeft: "20px",
                }}
              >
                {con.explain}
              </p>
            </Box>
          </Wrap>
        ))}
      </Con_wrap>
    </Div>
  );
};

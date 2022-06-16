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
  height: 400px;
  display: flex;
  justify-content: space-between;
`;

const Wrap = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  color: ${mainStyle.color};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
`;

const Box = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
`;
export const Stylecomponent = ({ Styledata }) => {
  return (
    <Div>
      <Con_wrap>
        {Styledata.map((con) => (
          <a
            href={con.url}
            style={{
              textDecoration: "none",
            }}
          >
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
                    fontSize: "12px",
                    height: "100px",
                    marginLeft: "20px",
                  }}
                >
                  {con.explain}
                </p>
              </Box>
            </Wrap>
          </a>
        ))}
      </Con_wrap>
    </Div>
  );
};

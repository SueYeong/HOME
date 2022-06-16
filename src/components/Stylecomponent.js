import styled from "styled-components";

const Con_wrap = styled.div`
  display: flex;
`;

export const Stylecomponent = ({ Styledata }) => {
  return (
    <Con_wrap>
      {Styledata.map((con) => (
        <wrap>
          <img src={con.img} />
          <h3>{con.title}</h3>
          <p>{con.explain}</p>
        </wrap>
      ))}
    </Con_wrap>
  );
};

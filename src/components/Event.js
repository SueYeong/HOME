import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  background: url(https://www.grid-paint.com/images/png/5099824051388416.png)
    no-repeat center/ cover;
`;

const Box = styled.div`
  width: 65px;
  height: 65px;
  position: relative;
  top: ${(props) => props.updownmove}px;
  left: ${(props) => props.move}px;
  background: url(https://www.pngmart.com/files/19/Ms-Pacman-Game-PNG-Image.png)
    no-repeat center / cover;
`;

const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  button {
    width: 100px;
    height: 100px;
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    font-size: 25px;
    background-color: gold;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  button:hover {
    font-size: 50px;
  }
`;

const BottomBtn = styled.div`
  display: flex;
`;

export const Event = () => {
  const [click, setClick] = useState(0);
  const [updownclick, setUpDownClick] = useState(100);

  const handleLeftClick = () => {
    setClick(click - 20);
  };
  const handleRightClick = () => {
    setClick(click + 20);
  };
  const handleUpClick = () => {
    setUpDownClick(updownclick - 20);
  };

  const handleDownClick = () => {
    setUpDownClick(updownclick + 20);
  };

  return (
    <div>
      <Wrap>
        <Box move={click} updownmove={updownclick} />
      </Wrap>
      <BtnWrap>
        <button onClick={handleUpClick}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <BottomBtn>
          <button onClick={handleLeftClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button onClick={handleDownClick}>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
          <button onClick={handleRightClick}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </BottomBtn>
      </BtnWrap>
    </div>
  );
};

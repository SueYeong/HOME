import { Event } from "./components/Event";
import { Stylecomponent } from "./components/Stylecomponent";
import { StyleComponentDb } from "./db";
import { GlobalStyled } from "./styles/GlobalStyled";

const App = () => {
  return (
    <>
      <GlobalStyled />
      {/* <Stylecomponent Styledata={StyleComponentDb} /> */}
      <Event />
    </>
  );
};

export default App;

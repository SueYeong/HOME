import { Stylecomponent } from "./components/Stylecomponent";
import { StyleComponentDb } from "./db";

const App = () => {
  return (
    <div>
      <Stylecomponent Styledata={StyleComponentDb} />
    </div>
  );
};

export default App;

import DisplayMsg from "./components/display-msg/DisplayMsg";
import Button from "./components/button/Button";
import FlexBox from "./components/flex-box/FlexBox";

function App() {
  return (
    <div>
      <FlexBox>
        <DisplayMsg theme={"dark"} message="Hello World!" />
        <DisplayMsg theme={"light"} message="Hello Earth!" />
        <DisplayMsg theme={"light"} message="Hello Mars!" />
      </FlexBox>
    </div>
  );
}

export default App;

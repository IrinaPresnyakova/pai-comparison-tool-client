import Button from "./components/Button";
import { InputDefault } from "./components/InputDefault";
import { Output } from "./components/Output";

import "./styles/styles.css";

const App = () => {
  return (
    <main className="container mx-auto">
      <h2 className="text-2xl">Private AI Comparison Tool</h2>
      {/* <Button>Click Me</Button> */}
      <InputDefault />
      <Output />
      <Output />
    </main>
  );
};

export default App;

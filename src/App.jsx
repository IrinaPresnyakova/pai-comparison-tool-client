import Button from "./components/Button";
import Form from "./components/Form";

import "./styles/styles.css";

const App = () => {
  return (
    <main className="container mx-auto">
      <h2 className="text-2xl">Private AI Comparison Tool</h2>
      {/* <Button>Click Me</Button> */}
      <Form />
    </main>
  );
};

export default App;

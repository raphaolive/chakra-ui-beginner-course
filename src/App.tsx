// https://www.figma.com/file/2UvLO274B9TNdsChCIC0hi/Pricing-UI?type=design&node-id=0-1&mode=design&t=WY180TIymF5kWjtG-0

import "./App.css";
import Header from "./components/Header";
import { Pricing } from "./components/Pricing";
import { Features } from "./components/Features";

function App() {
  return (
    <>
      <Header />
      <Pricing />
      <Features />
    </>
  );
}

export default App;

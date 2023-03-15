import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Card from "./components/card";
import data from "../src/helper/data";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="main">
        {data.map((item) => (
          <Card
            key={item.key}
            title={item.title}
            desc={item.desc}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

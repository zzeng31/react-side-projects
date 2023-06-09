import "./App.css";
import { pizzaData } from "./data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import "./index.css";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu pizzaData={pizzaData} />
      <Footer />
    </div>
  );
}

export default App;

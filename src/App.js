import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/home/Home";
import { Cart } from "./components/cart/Card";
import { CartProvider } from "react-use-cart";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;

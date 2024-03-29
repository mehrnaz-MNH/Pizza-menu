import pizzaData from "./data";
import "./styles.css";

function Pizza({ props }) {
  return (
    <li key={props.name} className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.photoName} />
      <div>
        <p>{props.name}</p>
        <p>{props.ingredients}</p>
        {props.soldOut ? <p>Sold Out</p> : <p>{props.price}</p>}
      </div>
    </li>
  );
}

function App() {
  return (
    <div className="main">
      <header className="header">
        <h1 className="title">FAST REACT PIZZA CO.</h1>
      </header>
      <div className="menu">
        <h2 className="buffer">OUR MENU</h2>
        <p className="intro">
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza key={pizza.name} props={pizza} />
          ))}
        </ul>
      </div>
      <footer className="footer">
        <div className="order">
          <p>We're happy to welcome you between 12:00 and 22:00.</p>
          <button class="btn">order now</button>
        </div>
      </footer>
    </div>
  );
}

export default App;

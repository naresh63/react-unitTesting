import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <div>
        <label
          htmlFor="transferFunds_from"
          className="ant-form-item-required"
          title="From"
        >
          From
        </label>
        <input
          id="transferFunds_from"
          type="radio"
          className="ant-radio-button-input"
          value=""
        />

        <label
          htmlFor="transferFunds_to"
          className="ant-form-item-required"
          title="To"
        >
          To
        </label>
        <input
          id="transferFunds_to"
          type="radio"
          className="ant-radio-button-input"
          value=""
        />
      </div>

      <div>
        <label htmlFor="fname">First name: </label>
        <input type="text" id="fname" name="fname" />
        <label htmlFor="lname">Last name: </label>
        <input type="text" id="lname" name="lname" />
      </div>
      <Form/>
    </div>
  );
}

export default App;

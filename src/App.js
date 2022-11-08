import React from "react";
import { useState, createContext, useContext} from "react";
import ReactDOM from "react-dom/client";
import './App.css';

function App() {
  const UserContext = createContext();
  function fun1() {
    const [user, setUser] = useState("Hello Anto");

      return (
        <UserContext.Provider value = {user}>
          <h1>{`Hello ${user}!`}</h1>
          <fun2 />
        </UserContext.Provider>
      );
  }

  function fun2() {
    return (
      <>
        <h1>Function 1</h1>
        <fun3 />
      </>
    );
  }

  function fun3() {
    return (
      <>
        <h1>Function 2</h1>
        <fun4 />
      </>
    );
  }

  function func4() {
    return (
      <>
        <h2>Function 3</h2>
        <fun5 />
      </>
    );
  }

  function fun5 () {
    const user = useContext(UserContext);

    return (
      <>
        <h3>Function 4</h3>
        <h4>{`Welcome ${user}`}</h4>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<fun1 />);


export default App;

// Hook
const { useState } = React;

// Create function
function App() {
  // Create states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactno, setContactno] = useState("");

  // Signup Function
  const signup = () => {
    // Data Fetching
    fetch("http://localhost:4000/signup", {
      method: "POST", // POST - Data add or create
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name, contactno }), // Normal data convert into JSON - Stringify
    })
      .then((res) => res.json())
      .then((data) => alert(data.message));
  };
  const login = () => {
    // Data Fetching
    fetch("http://localhost:4000/login", {
      method: "POST", // POST - Data add or create
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name, contactno }), // Normal data convert into JSON - Stringify
    })
      .then((res) => res.json())
      .then((data) => alert(data.message));
  };

  //   Create UI

  return(
    React.createElement(
    "div",
    { className: "container" },
    React.createElement("h1", null, "Auth App"),
    React.createElement("input", {
      placeholder: "Enter Your Name",
      onChange: (e) => setName(e.target.value),
    }),
    React.createElement("input", {
      placeholder: "Enter Your Email",
      onChange: (e) => setEmail(e.target.value),
    }),
    React.createElement("input", {
      placeholder: "Enter Your Contact No",
      onChange: (e) => setContactno(e.target.value),
    }),
    React.createElement("input", {
      placeholder: "Password",
      onChange: (e) => setPassword(e.target.value),
    }),
    React.createElement("button", { onClick: signup }, "Signup"),
    React.createElement("button", { onClick: login }, "Login"),
  )
 ) 
}

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(App),
);

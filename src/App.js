import './App.css';
import {useState} from "react";

function App() {
  const [name, setname]= useState("");
  const [city, setcity]= useState("");
  const [email, setemail]= useState("");
  const [message, setMessage] = useState("");

  let handleSubmit=async (e) => {
    e.preventDefault();
    try{
      let res = await fetch("https://httpbin.org/post", {
      method: "POST",
      body: JSON.stringify({
      name: name,
      email: email,
    }),
});
let resJson = await res.json();
  if (res.status === 200) {
  setname("");
  setcity("");
  setMessage("User created successfully");
  } else {
  setMessage("Some error occured");
   }} catch (err) {
      console.log(err);
    }
  };

  return (
    
    <div className="App">
      
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder="Name"
          onChange={(e) => setname(e.target.value)}
        />
      <input type="email" value={email} placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
        />
        <input type="text" value={city}
          placeholder="City" onChange={(e) => setcity(e.target.value)}
        />
<button type="submit">Create</button>
<div className="message">{message ? <p>{message}</p> : null}</div>
</form></div>
  );
}
export default App;
    

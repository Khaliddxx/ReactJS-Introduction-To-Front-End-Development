import "./App.css";
import Profile from "./profile/profile";
import Image from "./profile/image";

function App() {
  return (
    <div className="App">
      <Profile handleName={() => alert("Khalid A. Mohamed")}>
        <Image></Image>
      </Profile>
    </div>
  );
}

export default App;

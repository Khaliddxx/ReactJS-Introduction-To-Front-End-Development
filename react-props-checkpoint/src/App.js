import Profile from "./profile";
import Image from "./profile/Image";

function App() {
    return (
        <Profile handleName={() => alert("Mostafa")}>
            <Image />
        </Profile>
    );
}

export default App;

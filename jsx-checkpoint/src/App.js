import "./App.css";
import srcImage from "./man-modified.png";

function App() {
    return (
        <>
            <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
                <h1 className="title red">Your name here</h1>
                <br />
                <img src={srcImage} width="100" alt="profile" />
                <br />
                <img src="/man.png" width="100" alt="profile" />
            </div>
            <video width="320" height="240" controls>
                <source
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                />
            </video>
        </>
    );
}

export default App;

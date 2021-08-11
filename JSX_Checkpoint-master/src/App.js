import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import imageInSrc from "./imageInSrc.jpg";

function App() {
  return (
    <>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>

      {/* <div className="skeleton" > */}
        <h1 className="title red">Khalid A. Mohamed</h1>
        <a className="twt" href="https://twitter.com/khalidxah">Twitter Account</a>

        <br />

        <img className="imginsrc" src={imageInSrc} />


        <img className="imginpublic" src="/imageInPublic.jpg" />
      </div>

      <video className='vid' width="320" height="240" controls>
        <source src="/myVideo.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default App;

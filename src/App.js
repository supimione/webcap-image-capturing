import React from "react";
import Webcam from "react-webcam";
import "./app.css";

const App = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <div className="main-container">
      <div className="camera-section">
        <h1>Capture the Picture!</h1>
        <Webcam
          height={200}
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
        <br />
        <button onClick={capture} className="button">
          Capture photo
        </button>
      </div>

      <div className="camera-section">
        {imgSrc && <img src={imgSrc} alt="" />}
      </div>
    </div>
  );
};

export default App;

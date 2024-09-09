import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 540,
  facingMode: "environment"
};

const CameraComponent = ({ onCapture }) => {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
    if (onCapture) {
      onCapture(imageSrc);
    }
  };

  return (
    <div>
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        mirrored={true}
      />
      <button onClick={capturePhoto}>Capture</button>
      {url && (
        <div>
          <img src={url} alt="Screenshot" style={{ width: '100%', height: 'auto' }} />
        </div>
      )}
    </div>
  );
};

export default CameraComponent;

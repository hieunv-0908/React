import React, { useState } from "react";

const App = () => {
  const originalUrl =
    "https://res.cloudinary.com/demo/image/upload/v1696012345/sample.jpg";
  const thumbnailUrl =
    "https://res.cloudinary.com/demo/image/upload/w_200,h_200,c_fill/v1696012345/sample.jpg";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img
        src={thumbnailUrl}
        alt="Thumbnail"
        onClick={() => setIsOpen(true)}
        style={{
          cursor: "pointer",
          border: "2px solid #ccc",
          borderRadius: "8px",
        }}
      />

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setIsOpen(false)}
        >
          <img
            src={originalUrl}
            alt="Original"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              border: "3px solid white",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default App;

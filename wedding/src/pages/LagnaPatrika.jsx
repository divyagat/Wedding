import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

const LagnaPatrika = () => {
  const [formData, setFormData] = useState({
    ganeshaText: "|| श्री गणेशाय नमः ||",
    invitationTitle: "|| शुभ विवाह ||",
    brideName: "",
    groomName: "",
    brideParents: "",
    groomParents: "",
    weddingDate: "",
    weddingTime: "",
    weddingVenue: "",
    invitationBy: "",
    couplePhoto: null,
  });

  const previewRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevData) => ({ ...prevData, couplePhoto: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadImage = async () => {
    const element = previewRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = data;
    link.download = "LagnaPatrika.png";
    link.click();
  };

  return (
    <div className="lagna-patrika">
      <h1>Lagna Patrika Format</h1>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label>Ganesha Text:</label>
            <input
              type="text"
              name="ganeshaText"
              value={formData.ganeshaText}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Invitation Title:</label>
            <input
              type="text"
              name="invitationTitle"
              value={formData.invitationTitle}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Bride's Name:</label>
            <input
              type="text"
              name="brideName"
              value={formData.brideName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Groom's Name:</label>
            <input
              type="text"
              name="groomName"
              value={formData.groomName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Bride's Parents:</label>
            <input
              type="text"
              name="brideParents"
              value={formData.brideParents}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Groom's Parents:</label>
            <input
              type="text"
              name="groomParents"
              value={formData.groomParents}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Wedding Date:</label>
            <input
              type="date"
              name="weddingDate"
              value={formData.weddingDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Wedding Time:</label>
            <input
              type="text"
              name="weddingTime"
              value={formData.weddingTime}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Wedding Venue:</label>
            <textarea
              name="weddingVenue"
              value={formData.weddingVenue}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Invitation By:</label>
            <input
              type="text"
              name="invitationBy"
              value={formData.invitationBy}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Couple Photo:</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
        </form>
      </div>

      <div className="preview-container">
        <div
          className="preview"
          ref={previewRef}
          style={{
            backgroundColor: "#f9f0f0",
            border: "10px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
            fontFamily: "'Times New Roman', serif",
            maxWidth: "600px",
            margin: "auto",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: "url('path-to-watermark-image.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              opacity: 0.1,
              zIndex: 0,
            }}
          ></div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ color: "#d9534f" }}>{formData.ganeshaText}</h2>
            <h3 style={{ color: "#5bc0de", margin: "10px 0" }}>{formData.invitationTitle}</h3>
            <p><strong>Bride:</strong> {formData.brideName}</p>
            <p><strong>Groom:</strong> {formData.groomName}</p>
            <p><strong>Bride's Parents:</strong> {formData.brideParents}</p>
            <p><strong>Groom's Parents:</strong> {formData.groomParents}</p>
            <p><strong>Date:</strong> {formData.weddingDate}</p>
            <p><strong>Time:</strong> {formData.weddingTime}</p>
            <p><strong>Venue:</strong> {formData.weddingVenue}</p>
            <p><strong>Invitation By:</strong> {formData.invitationBy}</p>
            {formData.couplePhoto && (
              <img
                src={formData.couplePhoto}
                alt="Couple"
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "cover",
                  marginTop: "20px",
                }}
              />
            )}
          </div>
        </div>
        <button
          onClick={downloadImage}
          style={{
            display: "block",
            margin: "20px auto",
            padding: "10px 20px",
            backgroundColor: "#5cb85c",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Download Invitation
        </button>
      </div>
    </div>
  );
};

export default LagnaPatrika;

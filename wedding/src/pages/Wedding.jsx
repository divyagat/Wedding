import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import html2canvas from "html2canvas";

const Wedding = () => {
  const [invitations, setInvitations] = useState([]);
  const invitationRefs = useRef([]);

  // Fetch data from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get-style")
      .then((response) => {
        setInvitations(response.data);
        invitationRefs.current = response.data.map(() => React.createRef());
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Handle text changes
  const handleTextChange = (index, field, value) => {
    const updatedInvitations = [...invitations];
    updatedInvitations[index][field] = value;
    setInvitations(updatedInvitations);
  };

  // Save as Image function
  const saveAsImage = (index) => {
    const element = invitationRefs.current[index].current;
    if (!element) return;

    html2canvas(element, { scale: 2 }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `wedding_invitation_${index + 1}.png`;
      link.click();
    });
  };

  return (
    <div className="App">
      <h1 className="py-5">Wedding Invitations</h1>
      {invitations.length === 0 ? (
        <p>No invitations found.</p>
      ) : (
        invitations.map((invite, index) => (
          <div
            key={index}
            ref={invitationRefs.current[index]}
            className="preview"
            style={{
              backgroundImage: invite.backgroundImage
                ? `url(${invite.backgroundImage})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
            }}
          >
            {/* Title */}
            <h2
              contentEditable
              onBlur={(e) => handleTextChange(index, "title", e.target.innerText)}
              style={{
                color: invite.textStyles.title.color,
                fontSize: invite.textStyles.title.fontSize + "px",
                transform: `rotate(${invite.textStyles.title.rotation}deg) scale(${invite.textStyles.title.zoom / 100})`,
                textAlign: invite.textStyles.title.alignment,
                margin: `${invite.textStyles.title.margin.top}px ${invite.textStyles.title.margin.right}px ${invite.textStyles.title.margin.bottom}px ${invite.textStyles.title.margin.left}px`,
              }}
            >
              {invite.title}
            </h2>

            {/* Couple Photo */}
            {invite.couplePhoto && (
              <div style={{ textAlign: "center", margin: "20px 0" }}>
                <img
                  src={invite.couplePhoto}
                  alt="Couple"
                  style={{
                    width: "300px",
                    height: "auto",
                    borderRadius: "50%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </div>
            )}

            {/* Couple Details */}
            <div className="couple-details" style={{ display: "flex", justifyContent: "space-between" }}>
              {/* Groom */}
              <div>
                <h3
                  contentEditable
                  onBlur={(e) => handleTextChange(index, "boyName", e.target.innerText)}
                  style={{
                    color: invite.textStyles.boyName.color,
                    fontSize: invite.textStyles.boyName.fontSize + "px",
                    transform: `rotate(${invite.textStyles.boyName.rotation}deg) scale(${invite.textStyles.boyName.zoom / 100})`,
                    textAlign: invite.textStyles.boyName.alignment,
                    margin: `${invite.textStyles.boyName.margin.top}px ${invite.textStyles.boyName.margin.right}px ${invite.textStyles.boyName.margin.bottom}px ${invite.textStyles.boyName.margin.left}px`,
                  }}
                >
                  {invite.boyName}
                </h3>
                <p
                  contentEditable
                  onBlur={(e) => handleTextChange(index, "boyDetails", e.target.innerText)}
                  style={{
                    color: invite.textStyles.boyDetails.color,
                    fontSize: invite.textStyles.boyDetails.fontSize + "px",
                    transform: `rotate(${invite.textStyles.boyDetails.rotation}deg) scale(${invite.textStyles.boyDetails.zoom / 100})`,
                    textAlign: invite.textStyles.boyDetails.alignment,
                    margin: `${invite.textStyles.boyDetails.margin.top}px ${invite.textStyles.boyDetails.margin.right}px ${invite.textStyles.boyDetails.margin.bottom}px ${invite.textStyles.boyDetails.margin.left}px`,
                  }}
                >
                  {invite.boyDetails}
                </p>
              </div>

              {/* Bride */}
              <div>
                <h3
                  contentEditable
                  onBlur={(e) => handleTextChange(index, "girlName", e.target.innerText)}
                  style={{
                    color: invite.textStyles.girlName.color,
                    fontSize: invite.textStyles.girlName.fontSize + "px",
                    transform: `rotate(${invite.textStyles.girlName.rotation}deg) scale(${invite.textStyles.girlName.zoom / 100})`,
                    textAlign: invite.textStyles.girlName.alignment,
                    margin: `${invite.textStyles.girlName.margin.top}px ${invite.textStyles.girlName.margin.right}px ${invite.textStyles.girlName.margin.bottom}px ${invite.textStyles.girlName.margin.left}px`,
                  }}
                >
                  {invite.girlName}
                </h3>
                <p
                  contentEditable
                  onBlur={(e) => handleTextChange(index, "girlDetails", e.target.innerText)}
                  style={{
                    color: invite.textStyles.girlDetails.color,
                    fontSize: invite.textStyles.girlDetails.fontSize + "px",
                    transform: `rotate(${invite.textStyles.girlDetails.rotation}deg) scale(${invite.textStyles.girlDetails.zoom / 100})`,
                    textAlign: invite.textStyles.girlDetails.alignment,
                    margin: `${invite.textStyles.girlDetails.margin.top}px ${invite.textStyles.girlDetails.margin.right}px ${invite.textStyles.girlDetails.margin.bottom}px ${invite.textStyles.girlDetails.margin.left}px`,
                  }}
                >
                  {invite.girlDetails}
                </p>
              </div>
            </div>

            {/* Haldi Ceremony */}
            <div style={{ textAlign: "center" }}>
              <h3
                contentEditable
                onBlur={(e) => handleTextChange(index, "haldiCeremony", e.target.innerText)}
                style={{
                  color: invite.textStyles.haldiCeremony.color,
                  fontSize: invite.textStyles.haldiCeremony.fontSize + "px",
                  transform: `rotate(${invite.textStyles.haldiCeremony.rotation}deg) scale(${invite.textStyles.haldiCeremony.zoom / 100})`,
                  textAlign: invite.textStyles.haldiCeremony.alignment,
                  margin: `${invite.textStyles.haldiCeremony.margin.top}px ${invite.textStyles.haldiCeremony.margin.right}px ${invite.textStyles.haldiCeremony.margin.bottom}px ${invite.textStyles.haldiCeremony.margin.left}px`,
                }}
              >
                {invite.haldiCeremony}
              </h3>
            </div>

            {/* Save as Image Button */}
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <button
                onClick={() => saveAsImage(index)}
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Save as Image
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Wedding;

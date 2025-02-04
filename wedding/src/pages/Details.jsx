import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";
import "bootstrap/dist/css/bootstrap.min.css";

const Details = () => {
  const [invitations, setInvitations] = useState([]);
  const invitationRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get-style")
      .then((response) => {
        setInvitations(response.data);
        invitationRefs.current = response.data.map(() => React.createRef());
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleTextChange = (index, field, value) => {
    const updatedInvitations = [...invitations];
    updatedInvitations[index][field] = value;
    setInvitations(updatedInvitations);
  };

  const saveAsImage = (index) => {
    const element = invitationRefs.current[index]?.current;
    if (!element) return;

    html2canvas(element, { scale: 2 }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `wedding_invitation_${index + 1}.png`;
      link.click();
    });
  };

  return (
    <div className="container my-5">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>⬅ Back</button>
      <h1 className="py-5 text-center">Wedding Invitations</h1>
      
      {invitations.length === 0 ? (
        <p className="text-center">No invitations found.</p>
      ) : (
        invitations.map((invite, index) => (
          <div
            key={index}
            ref={invitationRefs.current[index]}
            className="preview p-4 mb-4 rounded shadow"
            style={{
              backgroundImage: invite.backgroundImage ? `url(${invite.backgroundImage})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "80vh",
            }}
          >
            <h2
              contentEditable
              onBlur={(e) => handleTextChange(index, "title", e.target.innerText)}
              style={{
                color: invite.textStyles?.title?.color || "#000",
                fontSize: invite.textStyles?.title?.fontSize ? `${invite.textStyles.title.fontSize}px` : "24px",
                textAlign: invite.textStyles?.title?.alignment || "center",
              }}
            >
              {invite.title}
            </h2>

            {invite.couplePhoto && (
              <div className="text-center my-4">
                <img
                  src={invite.couplePhoto}
                  alt="Couple"
                  className="rounded-circle shadow"
                  style={{ width: "200px", height: "200px", objectFit: "cover" }}
                />
              </div>
            )}

            <div className="d-flex justify-content-between">
              <div>
                <h3
                  contentEditable
                  onBlur={(e) => handleTextChange(index, "boyName", e.target.innerText)}
                  style={{ color: invite.textStyles?.boyName?.color || "#000" }}
                >
                  {invite.boyName}
                </h3>
                <p
                  contentEditable
                  onBlur={(e) => handleTextChange(index, "boyDetails", e.target.innerText)}
                >
                  {invite.boyDetails}
                </p>
              </div>

              <div>
                <h3
                  contentEditable
                  onBlur={(e) => handleTextChange(index, "girlName", e.target.innerText)}
                  style={{ color: invite.textStyles?.girlName?.color || "#000" }}
                >
                  {invite.girlName}
                </h3>
                <p
                  contentEditable
                  onBlur={(e) => handleTextChange(index, "girlDetails", e.target.innerText)}
                >
                  {invite.girlDetails}
                </p>
              </div>
            </div>

            <h3
              className="text-center mt-4"
              contentEditable
              onBlur={(e) => handleTextChange(index, "haldiCeremony", e.target.innerText)}
            >
              {invite.haldiCeremony}
            </h3>

            <div className="text-center mt-4">
              <button className="btn btn-primary" onClick={() => saveAsImage(index)}>
                Save as Image
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Details;

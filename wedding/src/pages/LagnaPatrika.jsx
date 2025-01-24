import React, { useState } from "react";
import { saveAs } from "file-saver";

const LagnaPatrika = () => {
  const [formData, setFormData] = useState({
    title: "",
    shloka: "",
    boyName: "",
    boyDetails: "",
    girlName: "",
    girlDetails: "",
    sakharpudaCeremony: "",
    haldiCeremony: "",
    couplePhoto: null,
    darshanaAbhivashi: "",
    guestHouseName: "",
    sender: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "couplePhoto") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDownload = () => {
    const data = JSON.stringify(formData, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    saveAs(blob, "wedding_invite.json");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!"); // You can add form submission logic here
  };

  return (
    <div>
      <h1>Wedding Invitation Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />

        <label>Shloka:</label>
        <textarea
          name="shloka"
          value={formData.shloka}
          onChange={handleChange}
        />
        <br />

        <label>Boy Name:</label>
        <input
          type="text"
          name="boyName"
          value={formData.boyName}
          onChange={handleChange}
        />
        <br />

        <label>Boy Details:</label>
        <textarea
          name="boyDetails"
          value={formData.boyDetails}
          onChange={handleChange}
        />
        <br />

        <label>Girl Name:</label>
        <input
          type="text"
          name="girlName"
          value={formData.girlName}
          onChange={handleChange}
        />
        <br />

        <label>Girl Details:</label>
        <textarea
          name="girlDetails"
          value={formData.girlDetails}
          onChange={handleChange}
        />
        <br />

        <label>Sakharpuda Ceremony:</label>
        <input
          type="text"
          name="sakharpudaCeremony"
          value={formData.sakharpudaCeremony}
          onChange={handleChange}
        />
        <br />

        <label>Haldi Ceremony:</label>
        <input
          type="text"
          name="haldiCeremony"
          value={formData.haldiCeremony}
          onChange={handleChange}
        />
        <br />

        <label>Couple Photo:</label>
        <input
          type="file"
          name="couplePhoto"
          onChange={handleChange}
        />
        <br />

        <label>Darshana Abhivashi:</label>
        <textarea
          name="darshanaAbhivashi"
          value={formData.darshanaAbhivashi}
          onChange={handleChange}
        />
        <br />

        <label>Guest House Name:</label>
        <input
          type="text"
          name="guestHouseName"
          value={formData.guestHouseName}
          onChange={handleChange}
        />
        <br />

        <label>Sender:</label>
        <textarea
          name="sender"
          value={formData.sender}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Preview</button>
      </form>

      <button onClick={handleDownload}>Download Form Data</button>

      <div>
        <h2>Preview</h2>
        <p><strong>Title:</strong> {formData.title}</p>
        <p><strong>Shloka:</strong> {formData.shloka}</p>
        <p><strong>Boy Name:</strong> {formData.boyName}</p>
        <p><strong>Boy Details:</strong> {formData.boyDetails}</p>
        <p><strong>Girl Name:</strong> {formData.girlName}</p>
        <p><strong>Girl Details:</strong> {formData.girlDetails}</p>
        <p><strong>Sakharpuda Ceremony:</strong> {formData.sakharpudaCeremony}</p>
        <p><strong>Haldi Ceremony:</strong> {formData.haldiCeremony}</p>
        <p><strong>Couple Photo:</strong> {formData.couplePhoto ? formData.couplePhoto.name : "No photo uploaded"}</p>
        <p><strong>Darshana Abhivashi:</strong> {formData.darshanaAbhivashi}</p>
        <p><strong>Guest House Name:</strong> {formData.guestHouseName}</p>
        <p><strong>Sender:</strong> {formData.sender}</p>
      </div>
    </div>
  );
};

export default LagnaPatrika;

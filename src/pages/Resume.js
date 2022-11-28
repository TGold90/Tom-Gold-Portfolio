import React from "react";

export default function Resume() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("tg-resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "tg-resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <center className='project-card gold-glow'>
        <h1>Welcome to Geeks for Geeks</h1>
        <h3>Click on below button to download PDF file</h3>
        <button onClick={onButtonClick}>Download PDF</button>
      </center>
    </>
  );
}

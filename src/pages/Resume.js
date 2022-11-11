import React from "react";

const Resume = () => {
  const onButtonClick = () => {
    fetch("tg-resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const pdfLoc = window.URL.createObjectURL(blob);
        let pdfLink = document.createElement("a");
        pdfLink.href = pdfLoc;
        pdfLink.download = "tg-resume.pdf";
        pdfLink.click();
      });
    });
  };
  return (
    <>
      <div className='flex justify-center'>
        <center className='text-white m-20 border-2 w-1/5 items-center'>
          <button className='button-link' onClick={onButtonClick}>
            Download Resume (PDF)
          </button>
        </center>
      </div>
    </>
  );
};

export default Resume;

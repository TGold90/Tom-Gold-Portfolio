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
        alink.download = "tg-resume-2022.pdf";
        alink.click();
      });
    });
  };
  return (
    <section className='content items-center justify-center'>
      <center className='project-card mt-10'>
        <h1 className='text-white page-title'>RESUME</h1>
        <div className='m-5'>
          <button className='gold-glow' onClick={onButtonClick}>
            Download PDF
          </button>
        </div>
        <div>
          <a
            href='https://docs.google.com/document/d/1ii9swZs3QM0C_ZNiHQAQ_EWRqBr3V0hJeN3cDmSl3Oc/edit'
            target='_blank'
            className='gold-glow'
          >
            View Online
          </a>
        </div>
      </center>
    </section>
  );
}

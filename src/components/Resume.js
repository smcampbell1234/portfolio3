import React, {useState} from 'react'
import ReactMarkdown from 'react-markdown';
import { Document, Page } from 'react-pdf';

// let resumePDF = 'https://drive.google.com/file/d/1o7r9Fb8TCu_zabL9YyKNLiSkWyVK1EuF/view?usp=sharing';
let resumePDF = 'https://drive.google.com/uc?export=view&id=1o7r9Fb8TCu_zabL9YyKNLiSkWyVK1EuF'
const Resume = (props) => {
  const { scrollY,handlePosition} = props;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
  }
  return (
    <React.Fragment>
      <div id="resume" className="section-header-wrapper" style={{display:"none"}}>
        <div className="section-header">Resume</div>
        <div className="section-subheader">Experience, Skills, Education</div>
      </div>
      <div className="resume-section-wrapper">
        {/*<article className="result">*/}
        {/*  <ReactMarkdown>*/}
        {/*    {myMarkdown}*/}
        {/*  </ReactMarkdown>*/}
        {/*</article>*/}

        <article>
          {/*<Document*/}
          {/*  file=''*/}
          {/*  // onLoadSuccess={onDocumentLoadSuccess}*/}
          {/*>*/}
          {/*  /!*<Page pageNumber={pageNumber} />*!/*/}
          {/*</Document>*/}
          {/*<p>*/}
          {/*  Page {pageNumber} of {numPages}*/}
          {/*</p>*/}


          <imb src={resumePDF} />
        </article>
      </div>
    </React.Fragment>
  )
}

export default Resume;
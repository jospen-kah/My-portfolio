// components/ResumePreview.jsx
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure PDF.js worker
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const ResumePreview = () => {
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const resumeUrl = '/KAH JOSPEN NGUM CV.pdf'; // Path to your resume PDF in the public folder

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'KAH JOSPEN CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="text-center mb-6">
        <button 
          className="bg-[#0D4B6E] text-white px-4 py-2 rounded-full font-bold hover:bg-[#083554] transition-colors duration-300"
          onClick={handleDownload}
        >
          Download Resume
        </button>
      </div>
      
      <div className="border border-blue-500 rounded-md overflow-hidden shadow-md">
        {loading && (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0D4B6E]"></div>
          </div>
        )}
        
        <Document
          file={resumeUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className="w-full"
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page 
              key={`page_${index + 1}`} 
              pageNumber={index + 1} 
              className={index < numPages - 1 ? "mb-4" : ""}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={window.innerWidth > 768 ? 800 : window.innerWidth - 64}
            />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default ResumePreview;
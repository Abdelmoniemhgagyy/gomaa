import React from "react";
import clipboardCopy from "clipboard-copy";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toastStyles.css'
function CopyIcons({ copiedText }) {

  const handelToastify =()=>{
    toast.success("تم النسخ ");
    console.log("Success")
  }
  return (
    <>
    <div
      className={`copy-container `}
      onClick={() => {
        clipboardCopy(copiedText);
      }}
    >
        <i className="bi bi-copy  " onClick={handelToastify}></i>
    </div>
    
    </>
  );
}

export default CopyIcons;

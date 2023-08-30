"use client"
import { useEffect, useState } from "react";

export default function Home() {

  const [dialogVisible, setDialogVisible] = useState(false);

  const openDialog = () => {
    setDialogVisible(true);
  };

  const closeDialog = () => {
    setDialogVisible(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === 'dialog') {
      closeDialog();
    }
  };

  return (
    <div  onClick={handleOutsideClick} className="flex items-center justify-center  bg-gray-200">
      <button onClick={openDialog} className="px-4 py-2 bg-blue-500 text-white rounded">
        Show Dialog
      </button>
      {dialogVisible && (
        <div id="dialog" className="border-4 border-black absolute inset-0 flex items-center justify-center"
        >
          <div className="bg-white rounded p-4">
            <p>This is the dialog box content.</p>
          </div>
        </div>
      )}
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clicking outside the dialog box. Tailwind CSS classes are used for styling the components.

      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clicking outside the dialog box. Tailwind CSS classes are used for styling the components.
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clicking outside the dialog box. Tailwind CSS classes are used for styling the components.
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clicking outside the dialog box. Tailwind CSS classes are used for styling the components.
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clicking outside the dialog box. Tailwind CSS classes are used for styling the components.
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clicking outside the dialog box. Tailwind CSS classes are used for styling the components.
      In this 
      
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clicking outside the dialog box. Tailwind CSS classes are used for styling the components.
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clicking outside the dialog box. Tailwind CSS classes are used for styling the components.
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clicking outside the dialog box. Tailwind CSS classes are used for styling the components.
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clicking outside the dialog box. Tailwind CSS classes are used for styling the components.
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clickin
      
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clicking outside the dialog box. Tailwind CSS classes are used for styling the components.
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clicking outside the dialog box. Tailwind CSS classes are used for styling the components.
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clicking outside the dialog box. Tailwind CSS classes are used for styling the components.
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clicking outside the dialog box. Tailwind CSS classes are used for styling the components.
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clickin
      
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clicking outside the dialog box. Tailwind CSS classes are used for styling the components.
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clicking outside the dialog box. Tailwind CSS classes are used for styling the components.
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clicking outside the dialog box. Tailwind CSS classes are used for styling the components.
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clicking outside the dialog box. Tailwind CSS classes are used for styling the components.
      In this version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clickin
      version, I've removed the close button from the main dialog box content and added it back at the bottom of the content. The behavior remains the same; you can click the "Show Dialog" button to open the dialog and close it by clicking the "Close" button or clicking outside the dialog box. Tailwind CSS classes are used for styling the components.
    </div>
    
  );
}


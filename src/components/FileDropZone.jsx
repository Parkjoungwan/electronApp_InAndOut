import { useState } from "react";
import { FileDropZoneOff } from "../appStyled";

const FileDropZone = ({ onFileSelected }) => {
  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFileSelected(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  return (
    <FileDropZoneOff
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{ border: dragOver ? "2px solid blue" : "2px dashed gray" }}
    >
      파일을 여기에 드래그하거나 클릭하여 선택하세요.
    </FileDropZoneOff>
  );
};

export default FileDropZone;

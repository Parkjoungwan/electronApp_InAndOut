import React, { useEffect, useState } from "react";
import "./App.css";
import { SEND_MAIN_PING } from "./constants";
import {
  AppContainer,
  CalculateButton,
  DownloadButton,
  FileDropZoneOn,
  FileInputContainer,
  ResultContainer,
} from "./appStyled";
import FileDropZone from "./components/FileDropZone";
const { ipcRenderer } = window.require("electron");

function App() {
  const [file, setFile] = useState(null);
  const [workHoursData, setWorkHoursData] = useState(null);

  useEffect(() => {
    if (file != null) ipcRenderer.send("validate-file", file.path);
  }, file);
  ipcRenderer.on("validation-result", (event, isValid) => {
    if (isValid) {
    } else {
    }
  });

  const handleCalculateWorkHours = () => {
    // 근무시간 계산 로직을 실행하고 결과를 상태에 저장합니다
    // 예시로, setWorkHoursData()를 호출하여 상태를 업데이트합니다
  };

  const handleDownload = () => {
    // 계산된 근무시간 데이터로 CSV 파일을 생성하고 다운로드 로직을 구현합니다
  };

  // const sendMail = () => {
  //   ipcRenderer.send(SEND_MAIN_PING, "send");
  // };
  // ipcRenderer.on("test", (event, arg) => {
  //   console.log(arg);
  // });
  return (
    <AppContainer>
      <FileInputContainer>
        {file ? (
          <FileDropZoneOn>{file.name}</FileDropZoneOn>
        ) : (
          <FileDropZone onFileSelected={setFile}>
            파일을 여기에 드래그하거나 클릭하여 선택하세요.
          </FileDropZone>
        )}
        <CalculateButton onClick={handleCalculateWorkHours}>
          근무시간 계산
        </CalculateButton>
      </FileInputContainer>
      <ResultContainer>
        {workHoursData ? (
          <>
            <div>계산된 근무시간 CSV 파일</div>
            <DownloadButton onClick={handleDownload}>다운로드</DownloadButton>
          </>
        ) : (
          <div>결과가 여기에 표시됩니다</div>
        )}
      </ResultContainer>
    </AppContainer>
  );
}

export default App;

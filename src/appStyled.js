import styled from 'styled-components';

// 전체 앱 컨테이너 스타일
export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 800px;
  height: 600px;
  border: 1px solid #e1e1e1; // 경계선 추가
  background-color: #f9f9f9; // 배경 색 변경
`;

// 왼쪽 파일 입력 영역 스타일
export const FileInputContainer = styled.div`
  flex: 1;
  border-right: 1px solid #e1e1e1; // 오른쪽 경계선 추가
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // 버튼을 아래쪽으로
`;

// 파일 드랍존 스타일
export const FileDropZoneOff = styled.div`
  flex-grow: 1; // 버튼 아래로
  border: 2px dashed #cccccc;
  border-radius: 8px;
  margin-bottom: 20px; // 아래쪽 여백 추가
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  &:hover {
    border-color: #888888; // 호버 색 변경
  }
`;

export const FileDropZoneOn = styled.div`
  flex-grow: 1; // 버튼 아래로
  border: 2px dashed #cccccc;
  border-radius: 8px;
  margin-bottom: 20px; // 아래쪽 여백 추가
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #000;
  cursor: pointer;
  &:hover {
    border-color: #888888; // 호버 색 변경
  }
`;

// '계산하기' 버튼 스타일
export const CalculateButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #005fcc; // 버튼 색 변경
  color: white;
  font-weight: bold; // 글씨 굵게
  cursor: pointer;
  &:hover {
    background-color: #004cac; // 호버 색 변경
  }
`;

// 오른쪽 결과 표시 영역 스타일
export const ResultContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; // 중앙 정렬
  justify-content: center; // 중앙 정렬
`;

// 결과 표시 및 다운로드 버튼 스타일
export const DownloadButton = styled.button`
  padding: 10px 15px;
  margin-top: 20px; // 위쪽 여백 추가
  border: none;
  border-radius: 4px;
  background-color: #28a745; // 버튼 색 변경
  color: white;
  font-weight: bold; // 글씨 굵게
  cursor: pointer;
  &:hover {
    background-color: #218838; // 호버 색 변경
  }
`;

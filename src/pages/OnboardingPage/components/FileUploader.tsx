import { styled } from "@mui/material";
import React from "react";
import { Color } from "../../../utils/token";
import { FileUploader as Uploader } from "react-drag-drop-files";
import FilePreviewer from "./FilePreviewer";


type FileUploaderProps = {
  onChange?: (file: File) => void;
  placeHolder: () => React.ReactNode;
  types?: string[];
  file?: File;
};

const FileUploader: React.FC<FileUploaderProps> = ({ placeHolder, onChange, types, file }) => {

  const Container = styled("div")({
    backgroundColor: Color.keoni.background,
    border: `2px dashed ${Color.keoni.primarya5}`,
    borderRadius: '8px',
    padding: '1.25rem',
  });

  const onFileChange = (file: File) => {
    onChange && onChange(file);
  };

  return (
    <Container>
      {!file && (
        <Uploader handleChange={onFileChange}>
          {placeHolder()}
        </Uploader>
      )}
      {file && (
        <Uploader types={types} handleChange={onFileChange}>
          <FilePreviewer file={file} />
        </Uploader>
      )}
    </Container>
  );
};

export default FileUploader;
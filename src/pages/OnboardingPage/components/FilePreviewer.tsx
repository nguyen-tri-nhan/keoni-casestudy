import { Button, styled, Typography } from "@mui/material";
import { useCallback } from "react";
import CachedIcon from '@mui/icons-material/Cached';
import PDFIcon from '../../../assets/pdf_icon.svg?react';

type FilePreviewerProps = {
  file: File;
};

enum FileType {
  SVG = "image/svg+xml",
  PNG = "image/png",
  JPG = "image/jpeg",
  PDF = "application/pdf",
}

const FilePreviewer: React.FC<FilePreviewerProps> = ({ file }) => {

  const Image = styled("img")({
    width: "7.1875rem",
    height: "7.1875rem",
  });

  const Container = styled("div")({
    display: "flex",
    alignItems: "center",
  });

  const FileProperty = styled("div")({
    marginLeft: "1rem",
    alignSelf: "flex-start",
  });

  const isImage = useCallback((file: File) => {
    console.log(file.type);
    return file.type === FileType.SVG || file.type === FileType.PNG || file.type === FileType.JPG;
  }, []);

  return (
    <Container>
      <div>
        {
          isImage(file) ?
            (<Image src={URL.createObjectURL(file)} alt="preview" />) :
            (<PDFIcon />)
        }
      </div>
      <FileProperty>
        <Typography variant="h3">
          {file.name}
        </Typography>
        <div>
          <Button disableRipple disableFocusRipple variant="outlined" color="primary" size="small" startIcon={<CachedIcon />}>
            Change File
          </Button>
        </div>
      </FileProperty>
    </Container>
  );
};

export default FilePreviewer;
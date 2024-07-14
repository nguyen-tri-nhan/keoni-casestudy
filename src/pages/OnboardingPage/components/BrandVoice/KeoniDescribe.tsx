import { Button, styled, Typography } from "@mui/material";
import TitleInfo from "../TitleInfo";
import UrlInput from "../UrlInput";
import { useCallback, useMemo, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import FileUploader from "../FileUploader";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import GPTPreviewer from "../GPTPreviewer";
import { loremIpsum } from "lorem-ipsum";


const KeoniDescribe: React.FC = () => {

  const Container = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
  });
  const ButtonContainer = styled("div")({
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: "1.5625rem",
  });

  const StyledTextButton = styled(Button)({
    padding: '0 0.25rem',
  });

  const [urlCount, setUrlCount] = useState(1);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [text, setText] = useState<string | undefined>(undefined);
  const [url, setUrl] = useState<string | undefined>();

  const renderUrlInput = useMemo(() => Array.from({ length: urlCount }, (_, i) => (
    <UrlInput
      key={i}
      placeholder="Input URL"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)} />
  )), [urlCount]);

  const onAddUrl = useCallback(() => {
    if (urlCount < 3) {
      setUrlCount((prev) => prev + 1);
    }
  }, [urlCount]);

  const renderPlaceHolder = useCallback(() => {
    return (
      <Container>
        <DescriptionOutlinedIcon color="disabled" />
        <Typography variant="subtitle2">
          Drag & Drop or
          <StyledTextButton color="primary" disableRipple>
            Choose file
          </StyledTextButton>
          to upload
        </Typography>
        <Typography variant="subtitle2">
          .doc, .docx, .html, .md, .pdf, .pptx or .txt
        </Typography>
      </Container>
    )
  }, [Container, StyledTextButton])

  const onGenerate = useCallback(() => {
    if (file && url) {
      setTimeout(() => {
        const randomText = loremIpsum({ count: 1, units: 'paragraphs', random: Math.random });
        setText(randomText);
      }, 1500);
    } else {
      alert("Please fill out all the fields");
    }
  }, [file, url]);

  const renderGPTPlaceHolder = useCallback(() => {
    return (
      <Container>
        <AutoAwesomeOutlinedIcon />
        <Typography variant="subtitle2">
          Fill out all the fields, and we'll craft the perfect brand voice for you!
        </Typography>
        <StyledTextButton color="primary" disableRipple onClick={onGenerate}>
          Generate now
        </StyledTextButton>
      </Container>
    )
  }, [Container, StyledTextButton, onGenerate]);

  return (
    <div>
      <Typography variant="h3">
        Company website URLs:
        <TitleInfo text="You can  input up to 3 URLs as reference" />
      </Typography>
      {renderUrlInput}
      <ButtonContainer>
        <Button startIcon={<AddIcon />} onClick={onAddUrl}>
          Add more URLs
        </Button>
      </ButtonContainer>
      <Typography variant="h3">
        Business references
      </Typography>
      <FileUploader file={file} placeHolder={renderPlaceHolder} onChange={setFile} />
      <Typography
        sx={{
          marginTop: '1.5rem',
        }}
        variant="h3"
      >
        Preview Keoni’s Brand Voice Suggestion
      </Typography>
      <GPTPreviewer
        text={text}
        placeholder={renderGPTPlaceHolder}
        onRegenerate={onGenerate}
      />
    </div>
  );
};

export default KeoniDescribe;
import { Button, styled } from "@mui/material";
import { Color } from "../../../utils/token";
import CachedIcon from '@mui/icons-material/Cached';

type GPTPreviewerProps = {
  placeholder: () => React.ReactNode;
  text?: string;
  onRegenerate?: () => void;
};

const GPTPreviewer: React.FC<GPTPreviewerProps> = ({ placeholder, text, onRegenerate }) => {

  const Container = styled("div")({
    backgroundColor: Color.keoni.background,
    border: `2px dashed ${Color.keoni.primarya5}`,
    borderRadius: '8px',
    padding: '1.25rem',
  });

  const ButtonContainer = styled("div")({
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: "1.5625rem",
  });

  return (
    <Container>
      {text
        ? (
          <>
            { text }
            <ButtonContainer>
              <Button disableRipple startIcon={<CachedIcon />} variant="outlined" onClick={onRegenerate}>
                Regenerate
              </Button>
            </ButtonContainer>
          </>
        )
        : placeholder()
      }

    </Container>
  )
};

export default GPTPreviewer;
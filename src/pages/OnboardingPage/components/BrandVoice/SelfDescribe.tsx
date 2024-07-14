import { Button, styled, Typography } from "@mui/material";
import Input from "../Input";
import GPTPreviewer from "../GPTPreviewer";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { useCallback, useRef, useState } from "react";
import { loremIpsum } from "lorem-ipsum";

const SelfDescribe: React.FC = () => {

  const StyledInput = styled(Input)({
    textarea: {
      alignSelf: 'flex-start'
    }
  });

  const Container = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
  });

  const StyledTextButton = styled(Button)({
    padding: '0 0.25rem',
  });

  const describe = useRef<string | undefined>(undefined);

  const [text, setText] = useState<string | undefined>(undefined);


  const onGenerate = useCallback(() => {
    if (describe.current) {
      setTimeout(() => {
        const randomText = loremIpsum({ count: 1, units: 'paragraphs', random: Math.random });
        setText(randomText);
      }, 1500);
    } else {
      alert("Please fill out all the fields");
    }
  }, []);

  const renderGPTPlaceHolder = useCallback(() => {
    return (
      <Container>
        <AutoAwesomeOutlinedIcon />
        <Typography variant="subtitle2">
          Alternatively, we can
          <StyledTextButton color="primary" disableRipple onClick={onGenerate}>
            Generate
          </StyledTextButton>
          a brand voice for you.
        </Typography>
      </Container>
    )
  }, [Container, StyledTextButton, onGenerate]);

  return (
    <div>
      <Typography variant="h3">
        Description of Brand Voice
      </Typography>
      <StyledInput
        multiline
        maxRows={3}
        placeholder="Enter your brand voice's description"
        sx={{
          height: '4rem',
        }}
        onChange={(e) => { describe.current = e.target.value }}
      />
      <Typography
        sx={{
          marginTop: '1.25rem',
        }}
        variant="h3"
      >
        Generate sample output
      </Typography>
      <GPTPreviewer
        text={text}
        placeholder={renderGPTPlaceHolder}
        onRegenerate={onGenerate}
      />
    </div>
  )
};

export default SelfDescribe;
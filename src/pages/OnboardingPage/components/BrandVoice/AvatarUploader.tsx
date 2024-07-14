import { styled, Typography } from "@mui/material";
import FileUploader from "../FileUploader";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { Color } from "../../../../utils/token";
import { useAppSlice } from "../../../../slice";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { selectSelectedAvatar } from "../../../../slice/selectors";

const acceptedFileTypes = ["png", "jpeg", "svg"];

const AvatarUploader: React.FC = () => {
  const [file, setFile] = useState<File | undefined>(undefined);
  const selectedAvatar = useSelector(selectSelectedAvatar);

  useEffect(() => {
    if (selectedAvatar !== file?.name) {
      setFile(undefined);
    }
  }, [selectedAvatar, file]);

  const dispatch = useDispatch();
  const { actions } = useAppSlice();

  const Icon = styled(AddCircleOutlineRoundedIcon)({
    color: Color.keoni.primary,
  });

  const Container = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
  });

  const renderPlaceHolder = () => {
    return (
      <Container>
        <Icon fontSize="large" />
        <Typography variant="caption">
          Upload custom avatar
        </Typography>
        <Typography variant="subtitle2">
          Minimum image size: 200 x 200 px.
        </Typography>
        <Typography variant="subtitle2">
          Maximum file size: 1 MB
        </Typography>
      </Container>
    )
  };

  const onAvatarUpload = useCallback((file: File) => {
    setFile(file);
    dispatch(actions.setSelectedAvatar(file.name));
  }, [dispatch, actions]);

  return (
    <FileUploader
      placeHolder={renderPlaceHolder}
      types={acceptedFileTypes}
      onChange={onAvatarUpload}
      file={file}
    />
  );
};

export default AvatarUploader;
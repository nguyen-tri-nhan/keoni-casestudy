import { ImageListItem, styled } from "@mui/material";
import { Color } from "../../../../utils/token";
import CustomCheckCircleIcon from "../CustomCircleCheck";
import { useDispatch, useSelector } from "react-redux";
import { useAppSlice } from "../../../../slice";
import { selectSelectedAvatar } from "../../../../slice/selectors";
import { useMemo } from "react";

type AvatarOptionProps = {
  Avatar: React.FC<React.SVGProps<SVGSVGElement>>;
  value: string;
};
const AvatarOption: React.FC<AvatarOptionProps> = ({ Avatar, value }) => {
  const selectedAvatar = useSelector(selectSelectedAvatar);
  const selected = useMemo(() => selectedAvatar === value, [selectedAvatar, value]);
  const Container = styled(ImageListItem)(({
    border: `1px solid ${selected ? Color.keoni.primary : "transparent"}`,
    borderRadius: '4px',
    cursor: 'pointer',
    width: '72px',
    height: '72px',
  }));

  const StyledAvatar = styled(Avatar)(({
    borderRadius: '4px',
  }));

  const CheckCircle = styled(CustomCheckCircleIcon)(({
    position: 'absolute',
    top: 0,
    right: 0,
    color: Color.keoni.primary,
  }));

  const dispatch = useDispatch();
  const { actions } = useAppSlice();


  const handleOnClick = () => {
    dispatch(actions.setSelectedAvatar(value));
  };


  return (
    <Container onClick={handleOnClick}>
      <StyledAvatar width="70px" height="70px" />
      {selected && (
        <CheckCircle />
      )}
    </Container>
  );
};

export default AvatarOption;

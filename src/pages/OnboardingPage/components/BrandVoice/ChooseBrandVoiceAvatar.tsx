/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import Layer1 from '../../../../assets/Layer_1-6.svg?react';
import Layer2 from '../../../../assets/Layer_1-7.svg?react';
import Layer3 from '../../../../assets/Layer_1-9.svg?react';
import Layer4 from '../../../../assets/Layer_1-8.svg?react';
import Layer5 from '../../../../assets/Layer_1-4.svg?react';
import Layer6 from '../../../../assets/Layer_1-2.svg?react';
import { Grid, ImageList, styled } from "@mui/material";
import AvatarOption from "./AvatarOption";

const avatars = [
  {
    value: 'Layer1',
    Component: Layer1,
  },
  {
    value: 'Layer2',
    Component: Layer2,
  },
  {
    value: 'Layer3',
    Component: Layer3,
  },
  {
    value: 'Layer4',
    Component: Layer4,
  },
  {
    value: 'Layer5',
    Component: Layer5,
  },
  {
    value: 'Layer6',
    Component: Layer6,
  },
];

const StyledImageList = styled(ImageList)(({
  overflow: 'hidden',
  margin: "1rem 0",
}));

const ChooseBrandVoiceAvatar: React.FC = () => {
  return (
    <Grid container>
      <Grid item sm={12} md={6}>
        <StyledImageList cols={3} gap={4}>
          {avatars.map(({Component, value}, index) => (
            <AvatarOption value={value} key={index} Avatar={Component} />
          ))}
        </StyledImageList>
      </Grid>
    </Grid>
  );
};

export default ChooseBrandVoiceAvatar;

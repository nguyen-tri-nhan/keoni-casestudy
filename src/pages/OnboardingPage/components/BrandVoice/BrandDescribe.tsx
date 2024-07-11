import { Radio, RadioProps, styled } from "@mui/material";
import React from "react";

type BrandDescribeProps = RadioProps & {
  value: string;
  label: string;
}

const Container = styled("div")({

});

const BrandDescribe: React.FC<BrandDescribeProps> = ({ value, label, ...props }) => {
  return (
    <Container>
      <Radio value={value} {...props} />
      {label}
    </Container>
  )
};

export default BrandDescribe;
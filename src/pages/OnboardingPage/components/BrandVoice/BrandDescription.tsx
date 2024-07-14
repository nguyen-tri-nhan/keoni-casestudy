import { Radio as MUIRadio, RadioProps, styled } from "@mui/material";
import React from "react";
import { Color } from "../../../../utils/token";

type BrandDescribeProps = RadioProps & {
  value: string;
  label: string;
}



const BrandDescription: React.FC<BrandDescribeProps> = ({ value, label, checked, ...props }) => {
  const Container = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    border: "0.5px solid ",
    borderRadius: "8px",
    borderColor: checked ? Color.keoni.primary : Color.grayScale[20],
    backgroundColor: Color.grayScale[15],
    padding: "10px",
    ":not(:last-child)": {
      marginRight: "10px",
    },
    maxWidth: "9vw",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "30vw",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "100vw",
    },
  }));

  const Label = styled("div")({
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.25rem",
    color: Color.grayScale[60],
  });

  const Radio = styled(MUIRadio)({
    "&.Mui-checked": {
      color: Color.keoni.primary,
    },
  });

  return (
    <Container>
      <Radio value={value} checked={checked} {...props} />
      <Label>
        {label}
      </Label>
    </Container>
  )
};

export default BrandDescription;
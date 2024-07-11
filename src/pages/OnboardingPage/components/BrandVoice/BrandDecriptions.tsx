import { styled } from "@mui/material";
import React, { memo, useCallback } from "react";
import { BrandDescriptions, BrandDescriptionValue } from "../../../../utils/constant";
import BrandDescription from "./BrandDescription";
import { useDispatch, useSelector } from "react-redux";
import { selectBrandDescription } from "../../../../slice/selectors";
import { useAppSlice } from "../../../../slice";

const BrandDescriptionsPrivate: React.FC = () => {
  const brandDescription = useSelector(selectBrandDescription);
  const { actions } = useAppSlice();
  const dispatch = useDispatch();

  const onBrandDescribeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.setBrandDescription(e.target.value as BrandDescriptionValue));
  }, [actions, dispatch]);
  return (
    <BrandDescriptionsContainer>
      {Object.values(BrandDescriptions).map(({ value, label }) => {
        return (
          <BrandDescription
            checked={brandDescription === value}
            key={value}
            value={value}
            label={label}
            onChange={onBrandDescribeChange}
          />
        )
      })}
    </BrandDescriptionsContainer>
  )
};

const BrandDescriptionsComponent = memo(BrandDescriptionsPrivate);

export default BrandDescriptionsComponent;

const BrandDescriptionsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
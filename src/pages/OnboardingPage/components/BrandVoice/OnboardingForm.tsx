import { styled, Typography } from "@mui/material";
import TitleInfo from "../TitleInfo";
import BrandDescribe from "./BrandDescribe";
import { BrandDescriptions, BrandDescriptionValue } from "../../../../utils/constant";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBrandDescription } from "../../../../slice/selectors";
import { useAppSlice } from "../../../../slice";

const OnboardingForm: React.FC = () => {

  const brandDescription = useSelector(selectBrandDescription);
  const { actions } = useAppSlice();
  const dispatch = useDispatch();

  const onBrandDescribeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.setBrandDescription(e.target.value as BrandDescriptionValue));
  }, [actions, dispatch]);

  const renderBrandDescriptionOptions = useMemo(() => {
    return (
      <BrandDescriptionsContainer>
        {Object.values(BrandDescriptions).map(({ value, label }) => {
          return (
            <BrandDescribe
              checked={brandDescription === value}
              key={value}
              value={value}
              label={label}
              onChange={onBrandDescribeChange}
            />
          )
        })}
      </BrandDescriptionsContainer>
    );
  }, [brandDescription, onBrandDescribeChange]);

  return (
    <form>
      <Typography variant="h3">
        Which describe you?
      </Typography>
      {renderBrandDescriptionOptions}
    </form>
  );
};

export default OnboardingForm;

const BrandDescriptionsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
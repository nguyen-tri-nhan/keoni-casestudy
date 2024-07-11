import { styled, Typography } from "@mui/material";
import TitleInfo from "../TitleInfo";
import BrandDescribe from "./BrandDescribe";
import { BrandDescriptions, BrandDescriptionValue } from "../../../../utils/constant";
import { useCallback, useEffect, useMemo, useState } from "react";

const OnboardingForm: React.FC = () => {

  const [brandDescription, setBrandDescription] = useState<BrandDescriptionValue>(BrandDescriptionValue.KEONI_DESCRIBE);

  const onBrandDescribeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBrandDescription(e.target.value as BrandDescriptionValue);
  }, []);

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

  useEffect(() => {
    console.log("Brand Description: ", brandDescription);
  }, [brandDescription]);


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

const BrandDescriptionsContainer = styled("div")({
  display: "flex",
});
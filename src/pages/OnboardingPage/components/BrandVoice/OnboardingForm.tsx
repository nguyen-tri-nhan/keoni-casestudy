import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectBrandDescription } from "../../../../slice/selectors";
import BrandDescriptionsComponent from "./BrandDecriptions";
import { BrandDescriptionValue } from "../../../../utils/constant";
import KeoniDescribe from "./KeoniDescribe";
import QuickStart from "./QuickStart";
import SelfDescribe from "./SelfDescribe";
import BrandVoiceName from "./BrandVoiceName";

const brandDescriptionContent = {
  [BrandDescriptionValue.QUICK_START]: <QuickStart />,
  [BrandDescriptionValue.SELF_DESCRIBE]: <SelfDescribe />,
  [BrandDescriptionValue.KEONI_DESCRIBE]: <KeoniDescribe />,
};

const OnboardingForm: React.FC = () => {

  const brandDescription = useSelector(selectBrandDescription);

  return (
    <form>
      <Typography variant="h3">
        Which describe you?
      </Typography>
      <BrandDescriptionsComponent />
      {brandDescriptionContent[brandDescription]}
      {brandDescription !== BrandDescriptionValue.QUICK_START && (
        <BrandVoiceName />
      )}
    </form>
  );
};

export default OnboardingForm;

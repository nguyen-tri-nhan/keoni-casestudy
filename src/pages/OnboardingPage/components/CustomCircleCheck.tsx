import { createSvgIcon } from '@mui/material/utils';

const CustomCheckCircleIcon = createSvgIcon(
  <>
    <circle cx="12" cy="12" r="10" fill="white" />
    <path
      d="M10 16.2L5.5 11.7l1.4-1.4L10 13.4l7.1-7.1 1.4 1.4L10 16.2z"
      fill="currentColor"
    />
  </>,
  'CustomCheckCircleIcon'
);

export default CustomCheckCircleIcon;

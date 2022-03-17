import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function IconCheckboxes() {
  return (
    <div>
      <Checkbox {...label}
       icon={<PanoramaFishEyeIcon/>} 
       checkedIcon={<RadioButtonCheckedIcon/>} />
    </div>
  );
}

import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { StyledCardTitle, StyledCardWrapper } from './StyledCardComponent';

const CardComponent = (): React.ReactElement => {
  return (
    <StyledCardWrapper>
      <CardContent>
        <StyledCardTitle gutterBottom>Word of the Day</StyledCardTitle>
        <Typography variant="body2">well meaning and kindly.</Typography>
      </CardContent>
    </StyledCardWrapper>
  );
};

export default CardComponent;

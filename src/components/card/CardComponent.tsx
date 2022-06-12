import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { StyledCardWrapper } from './StyledCardComponent';

interface CardState {
  content: string;
}

const CardComponent = ({ content }: CardState): React.ReactElement => {
  return (
    <StyledCardWrapper>
      <CardContent>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
    </StyledCardWrapper>
  );
};

export default CardComponent;

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export const StyledCardWrapper = styled(Card)(({ theme }) => ({
  display: 'inline-block',
}));

export const StyledCardTitle = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: theme.palette.text.secondary,
}));

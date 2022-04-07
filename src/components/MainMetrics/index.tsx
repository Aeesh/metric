import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { StyledMainMetrics, Header } from './style'

import ResolutionTabs from '../ResolutionTabs';
import StatsBlock from '../StatsBlock';
import StackedBars from '../StackedBars';

const Tabs = () => {
  return (
    <StyledMainMetrics>
      <Header> Main metrics </Header>
      <ResolutionTabs />
      <StatsBlock />
      <StackedBars />
    </StyledMainMetrics>
  )
}

export default Tabs;
'use client'

import { Container, Grid, Typography } from '@mui/material'
import VerticalCarousel from '../../../components/VerticalCarousel';
import LearningBehindClassroom from '../../../components/LearningBeyondClassroom'

export default function LearningSupportPage() {
  return (
    <>
     <Container maxWidth="lg" sx={{ mt: 4 }} style={{backgroundColor: '#4D87CD'}}>
      <Grid container spacing={4} alignItems="center">

        <Grid size={{ xs: 6, md: 3 }}>
          <VerticalCarousel />
        </Grid>

        <Grid size={{ xs: 6, md: 5 }}>
          <Typography variant="h4">
            Learning Support and Inclusion
          </Typography>
        </Grid>

      </Grid>
    </Container>
    <Container maxWidth="lg" sx={{mt:4}} style={{backgroundColor:'#FFF'}}>
      <Typography variant='h3'>
         Learning Beyond the Classroom
      </Typography>
      <Grid container spacing={4} alignItems="center">
       <Grid size={{xs:6, md:8}}>
        <LearningBehindClassroom />
       </Grid>
      </Grid>
    </Container>
    </>
    
  );
}

import { Box, Container, Grid } from '@mui/material'
import { v4 as uuidv4 } from "uuid";
import Singlereview from './Singlereview';

const reviews = [
  {
    id: uuidv4(),
    name: "Richard Ford",
    image: "/images/clients/client-1.png",
    review: "Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-tableAd vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table",
    star: 5,
  },
  {
    id: uuidv4(),
    name: "Richard Ford",
    image: "/images/clients/client-1.png",
    review: "Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-tableAd vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table",
    star: 5,
  },
]

const HowWeWork = () => {
  return (
    <section className='py-10 bg-gray-200'>
      <Container fixed>
        <div>
          <h4 className='text-xl font-semibold mx-auto text-center py-1 rounded-full text-white bg-primary w-48'>How We Work</h4>
          <h1 className='uppercase text-primary text-center mt-3 text-2xl'>Patient Reviews</h1>
          <Box component="hr" className="mb-5 mt-2 w-20 mx-auto h-1 bg-primary" />
        </div>
        <Grid container spacing={4}>
        {reviews.map((review) => (
            <Grid item xs={12} md={6} key={review.id}>
              <Box sx={{ml:4}}>
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Singlereview {...review} />
              </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default HowWeWork
import { Box, CardMedia, Grid, Typography } from '@mui/material'


const NoFavorites = () => {
  return (
    
<Box display={'flex'} justifyContent={'center'}>
      <Grid  textAlign={'center'}>



<Typography variant="h4" color="inherit"> No Hay Favoritos</Typography>


<CardMedia component='img' title="Pokemon"  image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"   />

</Grid>



    </Box>


      


  )
}

export default NoFavorites

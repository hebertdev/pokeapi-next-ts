
import { Box, Card, CardActionArea, CardMedia, CssBaseline, Grid, ThemeProvider, Typography } from '@mui/material'


import Layout from '../../components/layouts/Layout'
import NoFavorites from '../../components/ui/NoFavorites'
import { darkTheme } from '../../themes/darktheme'
import { useEffect, useState } from 'react';
import { localFavorites } from '../../utils';
import FavoritesPokemons from '../../components/pokemon/FavoritesPokemons';



const FavoitesPages = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])




  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())


  }, [])
  
  return (

   

    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>




    <Layout title='Pagina de favoritos'>


    
      {
        favoritePokemons.length === 0 ? (<NoFavorites/>) :
        (
        <FavoritesPokemons pokemons={favoritePokemons}/>
        )
      }
      

 

 

      
    </Layout>
    </ThemeProvider>
  )
}

export default FavoitesPages

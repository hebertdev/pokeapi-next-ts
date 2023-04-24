import { Card, CardActionArea, CardMedia, Grid } from "@mui/material"
import { FC } from "react"
import FavoiteCadPokemon from "./FavoiteCadPokemon"


interface Props {
    pokemons : number[]
}

const FavoritesPokemons:FC <Props> = ({pokemons}) => {
  return (




    <Grid container gap={2}justifyContent={'flex-start'} paddingTop={'10px'}>
    {
      pokemons.map(id =>(
        
        <FavoiteCadPokemon key={id} pokemonId={id}/>
      ))
    
    

      }
  </Grid>
       
  )
}

export default FavoritesPokemons

import { NextPage } from "next";
import { useEffect, useState } from 'react';
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "../themes";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../components/layouts/Layout";
import { GetStaticProps } from "next";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { Grid } from "@mui/material";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

const Pokemos: NextPage<Props> = ({ pokemons }) => {
  const [isData , setIsData] = useState(false)

  useEffect(()=>{
    if(pokemons){
      setIsData(true)
    }
  },[pokemons])
  
  return (
    <>
      {isData && (
        <AllPokemons pokemons={pokemons} />
      )}
    </>
  );
};

interface AllPokemonsProps {
  pokemons: SmallPokemon[];
}

const AllPokemons: React.FC<AllPokemonsProps> = ({pokemons}) => {
  return(
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout title="Listado de pokemons">
        <Grid container gap={2}>
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Grid>
      </Layout>
    </ThemeProvider>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=450");

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default Pokemos;
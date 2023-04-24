import { Grid, Card, CardActionArea, CardMedia } from "@mui/material";
import { FC } from "react";
import { useRouter } from "next/router";

interface Props {
  pokemonId: number;
}

const FavoiteCadPokemon: FC<Props> = ({ pokemonId }) => {
  const router = useRouter();

  const onFavoriteClick = () => {
    router.push(`/poke/${pokemonId}`);
  };

  return (
    <Grid item xs={6} sm={3} md={2} xl={1} key={pokemonId}>
      <Card sx={{ maxWidth: 345 }} onClick={onFavoriteClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            width={"100%"}
            height="180"
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
            alt="Pokemones"
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default FavoiteCadPokemon;

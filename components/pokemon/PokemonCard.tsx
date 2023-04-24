import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces/pokemon-list";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/poke/${pokemon.id}`);
  };

  return (
    <Grid item xs={6} sm={4} md={1.5} xl={1}>
      <Card onClick={onClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={pokemon.img}
            alt={pokemon.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              # {pokemon.id} {pokemon.name}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
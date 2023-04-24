import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../../components/layouts/Layout";
import { darkTheme } from "../../themes";
import { NextPage, GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import { pokeApi } from "../../api";
import { Pokemon } from "../../interfaces";
import {
  Card,
  Grid,
  CardMedia,
  Typography,
  CardContent,
  Button,
  Container,
} from "@mui/material";
import Image from "next/image";
import { localFavorites } from "../../utils";
import { useState } from "react";
import confetti from "canvas-confetti";

interface Props {
  pokemon: Pokemon;
}

const PoKemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.existinFavorites(pokemon.id)
  );

  const onToggleFavorites = () => {
    localFavorites.toggleFavorites(pokemon.id);

    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 0.44,
        y: 0.1,
      },
    });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout title={pokemon.name}>
        <Grid container spacing={2} height="100vh" width="100vh">
          <Grid item sm={4}>
            <Card sx={{ padding: "60px" }}>
              <CardMedia
                component="img"
                width="100vh"
                image={pokemon.sprites.other?.dream_world.front_default}
                alt={pokemon.name}
              />
            </Card>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Card>
              <CardContent
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography
                  gutterBottom
                  variant="h2"
                  textTransform="capitalize"
                  component="div"
                >
                  {pokemon.name}
                </Typography>

                <Button color="secondary" onClick={onToggleFavorites}>
                  {isInFavorites ? "En Favoritos" : "Guardar en Favoritos"}
                </Button>

                <Typography variant="body2" color="text.secondary"></Typography>
              </CardContent>

              <CardContent>
                <Typography
                  variant="h4"
                  color="whitesmoke
            "
                >
                  Spitets:
                </Typography>

                <Container maxWidth="lg">
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />

                  <Image
                    src={pokemon.sprites.back_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />

                  <Image
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />

                  <Image
                    src={pokemon.sprites.back_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                </Container>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </ThemeProvider>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon450 = [...Array(450)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemon450.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PoKemonPage;

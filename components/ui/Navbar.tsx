import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@mui/material";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>

          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="icono de la app"
            width={70}
            height={70}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NextLink href="/pokemons" passHref>
              <Link>
                <Typography variant="subtitle1" color="inherit"></Typography>
                Pokemon Api 2.0
              </Link>
            </NextLink>
          </Typography>

          <NextLink href="/favorites" passHref>
            <Link>
              <Button color="inherit">Favoritos</Button>
            </Link>
          </NextLink>

          <NextLink href="/" passHref>
            <Link>
              <Button color="inherit">Salir</Button>
            </Link>
          </NextLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

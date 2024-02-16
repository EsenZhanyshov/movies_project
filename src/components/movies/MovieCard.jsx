import React, { useState, useEffect } from "react";
import { useMovies } from "../context/MovieContextProvider";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { AddReaction } from "@mui/icons-material";
import Detail from "./Detail";
import { useAuth } from "../context/AuthContextProvider";
import { ADMIN } from "../../helpers/const";

const MovieCard = ({ elem }) => {
  const { user } = useAuth();
  const { deleteMovie } = useMovies();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorite = localStorage.getItem(`favorite_${elem.id}`);
    if (storedFavorite === "true") {
      setIsFavorite(true);
    }
  }, [elem.id]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    localStorage.setItem(`favorite_${elem.id}`, !isFavorite);
  };

  return (
    <Card
      sx={{
        height: 600,
        boxShadow: "none",
        margin: "2%",
        width: { md: "30vw", lg: "19vw" },
        gridColumn: "span 1",
      }}
    >
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          component="img"
          image={elem.image}
          alt={elem.title}
          sx={{ height: 400, borderRadius: 4 }}
        />
      </CardActionArea>
      <CardContent sx={{ padding: "20px 5px 0px 5px" }}>
        <Typography variant="h5" fontSize="24" fontWeight={700} component="div">
          {elem.title}
        </Typography>
        <Typography variant="h5" fontSize="14" fontWeight={400} component="div">
          {elem.category}
        </Typography>
        {user.email === ADMIN ? (
          <></>
        ) : (
          <Button
            color="primary"
            variant={isFavorite ? "contained" : "outlined"}
            size="medium"
            onClick={handleToggleFavorite}
          >
            В избранное
          </Button>
        )}

        {!open && (
          <>
            {elem.price > 0 ? (
              <>
                <Button
                  onClick={() => navigate()}
                  color="primary"
                  variant="outlined"
                  size="medium"
                >
                  купить за {elem.price} сом
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => navigate()}
                  color="primary"
                  variant="outlined"
                  size="medium"
                >
                  Смотреть бесплано
                </Button>
              </>
            )}

            {user.email === ADMIN ? (
              <>
                <Button
                  onClick={() => navigate(`/edit/${elem.id}`)}
                  color="primary"
                  variant="outlined"
                  size="medium"
                >
                  Редактировать
                </Button>
                <Button
                  onClick={() => deleteMovie(elem.id)}
                  color="secondary"
                  variant="outlined"
                  size="medium"
                >
                  Удалить
                </Button>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </CardContent>
      <Detail open={open} handleClose={handleClose} elem={elem} />
    </Card>
  );
};

export default MovieCard;

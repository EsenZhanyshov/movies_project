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
        height: "100%", // Мы устанавливаем высоту карточки на 100% контейнера, чтобы она занимала всю доступную область
        boxShadow: "none",
        margin: "2%",
        width: { md: "30vw", lg: "19vw" },
        gridColumn: "span 1",
        display: "flex", // Добавляем отображение карточки как flex container
        flexDirection: "column", // Устанавливаем направление flex на колонку
        justifyContent: "space-between", // Располагаем элементы внутри карточки по вертикали
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
        <div style={{ flex: "1 1 auto" }}> {/* Создаем блок, который будет занимать оставшееся пространство */}
          <Typography variant="h5" fontSize="24" fontWeight={700} component="div">
            {elem.title}
          </Typography>
          <Typography variant="h5" fontSize="14" fontWeight={400} component="div">
            {elem.category}
          </Typography>
          <Button color="primary" variant="outlined" size="medium" sx={{ mt: 1 }}> {/* Добавляем margin-top для отступа кнопки */}
            В избранное
          </Button>
          {!open && (
            <>
              <Typography color="black" fontSize="15px" fontWeight={700} sx={{ mt: 1 }}> {/* Добавляем margin-top */}
                {elem.price} сом
              </Typography>
              {user.email === ADMIN ? (
                <div>
                  <Button
                    onClick={() => navigate(`/edit/${elem.id}`)}
                    color="primary"
                    variant="outlined"
                    size="medium"
                    sx={{ mr: 1, mt: 1 }} // Добавляем margin-right и margin-top
                  >
                    Редактировать
                  </Button>
                  <Button
                    onClick={() => deleteMovie(elem.id)}
                    color="secondary"
                    variant="outlined"
                    size="medium"
                    sx={{ mt: 1 }} // Добавляем margin-top
                  >
                    Удалить
                  </Button>
                </div>
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      </CardContent>
      <Detail open={open} handleClose={handleClose} elem={elem} />
    </Card>
  );
};

export default MovieCard;

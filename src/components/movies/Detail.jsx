import { Box, Button, Modal } from "@mui/material";
import React from "react";

const Detail = (props) => {
  const style = {
    position: "absolute",
    top: "15%",
    left: "30%",
    width: 700,
    display: "flex",
    border: "2px solid black",
    boxShadow: 24,
    bgcolor: "background.paper",
    p: 4,
  };
  const { elem, open, handleClose } = props;
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={handleClose}
    >
      <Box sx={style}>
        <div>
          {/* Используем тег <video> для отображения видео */}
          <video width={300} controls>
            <source src={elem.video} type="video/mp4" />
            Ваш браузер не поддерживает видео в формате mp4.
          </video>
        </div>
        <div style={{ marginLeft: 20 }}>
          <h1>{elem.title}</h1>
          <p>{elem.description}</p>
          <p style={{ fontWeight: "bold" }}>{elem.price} сом</p>
          <div style={{ marginTop: 20 }}>
            <Button>Купить за {elem.price} сом</Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default Detail;

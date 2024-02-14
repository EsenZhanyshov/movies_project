import React, { useState } from "react";
import AddMovie from "../components/movies/AddMovie";
import { Button } from "@mui/material";
import AddCategory from "../components/movies/AddCategory";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Add Category
      </Button>
      <AddMovie />
      <AddCategory open={open} handleClose={handleClose} />
    </div>
  );
};

export default AdminPage;

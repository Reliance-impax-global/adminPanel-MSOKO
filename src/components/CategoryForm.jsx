import React, { useState } from "react";
import { TextField, FormControl, Select, MenuItem } from "@mui/material";

const CategoryForm = ({ onClose }) => {
  const [categoryName, setCategoryName] = useState("");
  const [parentCategory, setParentCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to save the category
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Category Name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <FormControl fullWidth required margin="normal">
        <Select
          value={parentCategory}
          onChange={(e) => setParentCategory(e.target.value)}
          displayEmpty
          inputProps={{ "aria-label": "Parent Category" }}
        >
          <MenuItem value="" disabled>
            Select Parent Category
          </MenuItem>
          {/* List of parent categories */}
        </Select>
      </FormControl>
      <TextField
        label="Description"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
      />
    </form>
  );
};

export default CategoryForm;

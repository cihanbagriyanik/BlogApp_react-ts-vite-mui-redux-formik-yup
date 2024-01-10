import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const NewBlog = () => {
  return (
    <Box
      sx={{
        width: "50%",
        margin: " 3rem auto",
        border: "1px solid white",
        boxShadow: " 20px 12px 12px 12px #599ee3dc",
        padding: "1.5rem",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        component="form"
        // onSubmit={handleSubmit}
      >
        <Typography>New Blog</Typography>
        <TextField
          label="Title"
          id="title"
          name="title"
          type="text"
          variant="outlined"
          // value={info?.quantity}
          // onChange={handleChange}
          required
        />
        <TextField
          label="Image URL"
          id="ImageUrl"
          name="ImageUrl"
          type="text"
          variant="outlined"
          // value={info?.quantity}
          // onChange={handleChange}
          required
        />

        <FormControl>
          <InputLabel id="category" required>
            Category
          </InputLabel>
          <Select
            label="Category"
            id="category"
            labelId="demo-simple-select-helper-label"
            type="text"

            // value={age}
            // onChange={handleChange}
          >
            <MenuItem>Please choose...</MenuItem>
            {<MenuItem value={10}>Ten</MenuItem>}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="select">Please choose...</InputLabel>
          <TextField
            id="select"
            select
            label="Select"
            defaultValue="Please choose..."
            type="text"
            required
            // onChange={handleChange}
          >
            <MenuItem defaultChecked>Please choose...</MenuItem>
            <MenuItem value={"draft"}>Draft</MenuItem>
            <MenuItem value={"Published"}>Published</MenuItem>
            {/* {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
          </TextField>
        </FormControl>

        <TextField
          id="outlined-textarea"
          label="Content"
          placeholder="Content"
          multiline
          required
          rows={3.5}
        />
        <Button type="submit" variant="contained" size="large">
          New Blog
        </Button>
      </Box>
    </Box>
  );
};

export default NewBlog;

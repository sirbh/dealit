import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Grid, InputAdornment, TextField, TextFieldProps, Toolbar, Typography, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import "./App.css";

const SearchField = styled(TextField)<TextFieldProps>({
  '& .MuiOutlinedInput-root': {
    backgroundColor: "white",
  },
  width: "50%",
});


function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}>
          <Typography variant="h4" component="div" sx={{
            position: "absolute",
            left: "30px",
          }}>
            Deal-it
          </Typography>
          <SearchField
            size="small"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              placeholder: "Search for products",
            }}
          />
        </Toolbar>
      </AppBar>
      <Box>
        <Grid container spacing={2}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <Grid item xs={12} md={3} key={item}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://fastly.picsum.photos/id/494/200/200.jpg?hmac=U0wPc_GayOgCTqCyWzhy9Cc_mj8wZEPjLdqILTEl4AM"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </>
  );
}

export default App;

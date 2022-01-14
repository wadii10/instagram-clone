import {
  Avatar,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import "./App.css";
import HomeIconn from "./Components/HomeIconn";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { StoryInsta } from "./Components/StoryInsta";
import { SuggFooter } from "./Components/SuggFooter";
import { ListPost } from "./Components/ListPost";
import ListSugg from "./Components/ListSugg";

function App() {
  const dataPost = [
    {
      username: "wadii",
      caption: "hello",
      imageUrl: "/images/téléchargement (1).jpg",
      comment:"very nice"
    },
    {
      username: "Crist",
      caption: "hey",
      imageUrl: "/images/téléchargement (2).jpg",
      comment:""
    },
    {
      username: "Sun",
      caption: "nice post",
      imageUrl: "/images/téléchargement (3).jpg",
      comment:""
    },
    {
      username: "Crist",
      caption: "hey",
      imageUrl: "/images/téléchargement (4).jpg",
      comment:"cute"
    }
  ];

  // const dataSugg = [
  //   {
  //     usernameSugg:"Nejahyengui",
  //     srcImage:"/images/avatar1.webp"
  //   },
  //   {
  //     usernameSugg:"oussemaWess",
  //     srcImage:"/images/avatar2.jpg"
  //   },
  //   {
  //     usernameSugg:"salma",
  //     srcImage:"/images/avatar3.webp"
  //   }
  // ];

  return (
    <div className="App">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
          className="app__headerImage"
        />
        <div className="serchh">
          <TextField
            className="search__formText"
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            placeholder="Rechercher"
          />
        </div>

        <div className="icons__header">
          <div className="home__header">
            <IconButton>
              <HomeIconn />
            </IconButton>
          </div>
          <div className="message__header">
            <IconButton>
              <SendIcon />
            </IconButton>
          </div>
          <div className="add__header">
            <IconButton>
              <i className="fal fa-plus-square"></i>
            </IconButton>
          </div>
          <div className="like__header">
            <IconButton>
              <i className="fas fa-heart"></i>
            </IconButton>
          </div>
          <div className="explore__header">
            <IconButton>
              <i className="fas fa-bomb"></i>
            </IconButton>
          </div>
          <div className="avatar__header">
            <Avatar alt="Wadii" src="/static/images/avatar/1.jpg" 
            sx={{ width: 24, height: 24 }} />
          </div>
        </div>
      </div>

      <div className="sugg__app">

        <SuggFooter />

      </div>

      <div className="story__post">
        <StoryInsta />
      </div>

      <div className="app__posts">
      
        <ListPost listPost = {dataPost} />
      
      </div>
    </div>
  );
}

export default App;

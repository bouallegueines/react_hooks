import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import MovieList from './components/MovieList';

import { useState } from 'react';
import FilterCard from './components/Filter';
import AddMovie from './components/AddCard';

function App() {
 const [film, setFilm] = useState([
  {
    title: "Predestination",
    src: "https://m.media-amazon.com/images/M/MV5BMTAzODc3NjU1NzNeQTJeQWpwZ15BbWU4MDk5NTQ4NTMx._V1_FMjpg_UX1000_.jpg",
    rating: "4" ,
    year:2014,
    description:
      "For his final assignment, a top temporal agent must pursue the one criminal that has eluded him throughout time. The chase turns into a unique, surprising and mind-bending exploration of love, fate, identity and time travel taboos.",
  },
  {
    title: " Me Before You",
    src: "https://fr.web.img6.acsta.net/pictures/16/05/02/17/27/063880.jpg",
    rating: "5",
    year: 2016,
    description:
      "A girl in a small town forms an unlikely bond with a recently-paralyzed man she's taking care of.",
  },
  {
    title: "Léon",
    src: "https://fr.web.img2.acsta.net/pictures/14/08/21/14/15/233032.jpg",
    rating: "4" ,
    year:1994,
    description:
      "Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
  },
  {
    title: " TAWA'AM ROUHI /تـوأم روحي",
    src: "https://www.themoviedb.org/t/p/w500/fg2TWwpmOiwSAnJp84AU30Httv7.jpg",
    rating: "3",
    year: 2021,
    description:
      "تدور الأحداث في إطار رومانسي كوميدي حول قصة حب قوية بين رجل وامرأة، حيث تواجههما العديد من المشاكل والعقبات التي تجعل من حبهم شيء مستحيل تحقيقه على أرض الواقع",
  },
  {
    title: "the jacket",
    src: "https://fr.web.img4.acsta.net/medias/nmedia/18/35/54/24/18427608.jpg",
    rating: "4" ,
    year:2005,
    description:
    "A Gulf war veteran is wrongly sent to a mental institution for insane criminals, where he becomes the object of a doctor's experiments, and his life is completely affected by them."

      },

  
  {
    title: "The GodFather",
    src: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: "5" ,
    year:1972,
    description:
      "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
  },
  {
    title: "Vénom",
    src: "https://media.senscritique.com/media/000018071183/source_big/Venom.jpg",
    rating: "2" ,
    year:2018,
    description:
      "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
  },
  {
    title: " The Map of Tiny Perfect Things",
    src: "https://www.vitalthrills.com/wp-content/uploads/2021/01/perfectthingsposter.jpg.webp",
    rating: "3",
    year: 2021,
    description:
      "Two teens who live the same day repeatedly, enabling them to create the titular map.",
  },
 

]);
         
           const [textT, setTextT] = useState("");
           const [rateR, setRateR] = useState("");
           const [movieListData, setMovieListData] = useState(film);
           const getMoviesListData=(input)=>{
             setMovieListData([...movieListData ,input]);
  }
      
     

  return (
    <div className="body">
       
     <Navigation/>
     <FilterCard
        rateR={rateR}
        setTextT={setTextT}
        setRateR={setRateR}
      ></FilterCard>
      <div className="addMovie">
     <AddMovie getMoviesListData={getMoviesListData}/>
     </div>
    
     <MovieList
        film={film}
        textT={textT}
        rateR={rateR}
        setFilm={setFilm}
      ></MovieList>
         </div>
  );
}

export default App;

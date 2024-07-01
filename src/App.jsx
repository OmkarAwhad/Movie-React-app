import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Loading from "./components/Loading"
import Trending from "./components/Trending"
import Popular from "./components/Popular"
import Movies from "./components/Movies"
import TVshows from "./components/TVshows"
import Peoples from "./components/Peoples"
import AboutMovieDB from "./components/AboutMovieDB "
import ContactUs from "./components/ContactUs"
import Moviedetails from "./components/Moviedetails"
import Tvdetails from "./components/Tvdetails"
import Persondetails from "./components/Persondetails"
import Trailer from "./components/partials/Trailer"
import Notfound from "./components/Notfound"

function App() {

  return (
    <div className="w-full bg-[#1F1E24] text-white">
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/trending" element={<Trending/>} />
        <Route path="/popular" element={<Popular/>} />
        <Route path="/movie" element={<Movies/>} />
        <Route path="/movie/details/:id" element={<Moviedetails/>} >
          <Route path="/movie/details/:id/trailer" element={<Trailer/>} />
        </Route>
        <Route path="/tv" element={<TVshows/>} />
        <Route path="/tv/details/:id" element={<Tvdetails/>} >
          <Route path="/tv/details/:id/trailer" element={<Trailer/>} />
        </Route>
        <Route path="/person" element={<Peoples/>} />
        <Route path="/person/details/:id" element={<Persondetails/>} />
        <Route path="/about" element={<AboutMovieDB/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </div>
  )
}

export default App

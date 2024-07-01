import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie, removemovie } from "./redux/actions/movieActions";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";

function Moviedetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const  {info}  = useSelector((state) => state.movie);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncloadmovie(id));

    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  return info && info.detail ? (
    <div className="w-full ">
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
          backgroundPosition: "center",
          backgroundRepeat: "none",
          backgroundSize: "cover",
        }}
        className="w-full h-[150vh] flex flex-col relative"
      >
        <nav className="h-[10vh] flex items-center gap-20 pl-20 text-2xl font-black text-zinc-100">
          <Link onClick={() => navigate(-1)}>
            <i className="ri-arrow-left-line"></i>
          </Link>
          <Link to='/'>
            <i className="ri-home-4-fill"></i>
          </Link>
          <a
            href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
            target="_blank"
          >
            imdb
          </a>
          <a
            href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            target="_blank"
          >
            <i className="ri-earth-fill"></i>
          </a>
        </nav>

        <div className=" flex">

          <img
            src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`}
            alt=""
            className="h-[40vh] w-[15vw] ml-32 mt-16 object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]"
          />

          <div className="pl-[5%]">
            <h1 className="text-5xl font-black">{info.detail.title || info.detail.name || info.detail.original_name || info.detail.original_title} <small className="text-xl">({(info.detail.release_date).split('-')[0]})</small></h1>

            <div className="flex gap-4 items-center">
              <div className='font-bold text-lg m-2 bg-yellow-500 h-[50px] w-[50px] flex items-center justify-center rounded-full '>
                    {(info.detail.vote_average * 10).toFixed()}
                    <sup>%</sup>
              </div>
              <p className=" text-xl font-black break-words w-[5vw]">User Score</p>
              <p>{info.detail.release_date}</p>
              <p className="flex ">
                {
                  info.detail.genres.map((genre,index) => {
                    return <p key={index}>{(genre.name)}</p>
                  })
                }
              </p>
              <p>{info.detail.runtime}min</p>
            </div>

            <h1 className="font-semibold text-lg"><i>{info.detail.tagline}</i></h1>

            <h1 className="text-lg font-bold">Overview</h1>
            <p className=" max-w-[70vw] px-[2%]">{info.detail.overview}</p>

            <p className="text-lg font-bold">Translated In</p>
            <p className="px-[2%] mb-5 max-w-[70vw]">
              {(info.translations).join(' , ')}
            </p>

            <Link to={`/movie/details/${id}/trailer`} className="px-5 py-2 bg-[#6556CD] font-bold rounded-md"><i className="ri-arrow-right-s-fill text-xl mr-2"></i>Play Trailer</Link>
          </div>

        </div>

        <div className="flex flex-col gap-3 pl-[7%] py-[3%]">
          {info.watchproviders && info.watchproviders.buy && (
            <div className="flex items-center">
              <h1 className="font-medium w-[12vh]">Buy</h1>
              {info.watchproviders.buy.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                    className="h-[5vh] w-[5vh] mr-3 rounded-md"
                    alt=""
                  />
                );
              })}
            </div>
          )}
          {info.watchproviders && info.watchproviders.flatrate && (
            <div className="flex items-center">
              <h1 className="font-medium w-[12vh]">Flatrate</h1>
              {info.watchproviders.flatrate.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                    className="h-[5vh] w-[5vh] mr-3 rounded-md"
                    alt=""
                  />
                );
              })}
            </div>
          )}
          {info.watchproviders && info.watchproviders.rent && (
            <div className="flex items-center">
              <h1 className="font-medium w-[12vh]">Rent</h1>
              {info.watchproviders.rent.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                    className="h-[5vh] w-[5vh] mr-3 rounded-md"
                    alt=""
                  />
                );
              })}
            </div>
          )}
        </div>


        <div className="w-[90%] mx-auto">
          <hr className="my-4 bg-zinc-400 h-[1px]"/>
          <p className="px-[4%] text-lg font-semibold">Recommendations and Similar stuff</p>
          <HorizontalCards data={info.recommendations.length>0 ? info.recommendations : info.similar} />
        </div>
      </div>
      <Outlet/>
    </div>


  ) : (
    <Loading />
  );
}

export default Moviedetails;

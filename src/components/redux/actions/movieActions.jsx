import axios from "../../../utils/axios";
import {loadmovie} from '../slices/movieSlice'
export {removemovie} from '../slices/movieSlice'

export const asyncloadmovie = (id) => async (dispatch,getState) => {
     try {
          const detail = await axios.get(`/movie/${id}`)
          const externalid = await axios.get(`/movie/${id}/external_ids`)
          const recommendations = await axios.get(`/movie/${id}/recommendations`)
          const similar = await axios.get(`/movie/${id}/similar`)
          const videos = await axios.get(`/movie/${id}/videos`)
          const watchproviders = await axios.get(`/movie/${id}/watch/providers`)
          const translations = await axios.get(`/movie/${id}/translations`)

          const theultimatedata = {
               detail : detail.data,
               externalid : externalid.data,
               recommendations : recommendations.data.results,
               similar : similar.data.results,
               translations:translations.data.translations.map(t => t.english_name),
               videos : videos.data.results.find((m) => m.type === 'Trailer'),
               watchproviders : watchproviders.data.results.IN,
          }

          dispatch(loadmovie(theultimatedata))
          console.log(theultimatedata)
     } catch (error) {
          console.log(error)
     }
}
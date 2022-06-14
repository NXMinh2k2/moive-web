import axios from "axios";
import * as Types from '../types'

const API_KEY = 'dc1288274ea741a6a9756dc324a09fd5'
const BASE_URL = 'https://api.themoviedb.org/3'

export const getNetflixOriginals = () => async (dispatch) => {
    try {
      const result = await axios.get(
        `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
      );
      dispatch({ type: Types.GET_NETFLIX_ORIGINALS, payload: result.data.results });
    } catch (error) {
      console.log("Get Netflix Originals error: ", error);
    }
  };
  
  export const getTrendingMovies = () => {
    return async (dispatch) => {
      try {
        const result = await axios.get(
          `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
        )
        dispatch({ type: Types.GET_TRENDING_MOVIES, payload: result.data.results })
      } catch (error) {
        console.log("Get Trending movies error: ", error);
      }
    }
  }
  
  export const getTopRatedMovies = () => {
    return async (dispatch) => {
      try {
        const result = await axios.get(
          `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
        )
        dispatch({ type: Types.GET_TOP_RATED_MOVIES, payload: result.data.results })
      } catch (error) {
        console.log("Get Top rate movies error: ", error);
      }
    }
  }
  
  export const getActionMovies = () => {
    return async (dispatch) => {
      try {
        const result = await axios.get(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
        )
  
        dispatch({ type: Types.GET_ACTION_MOVIES, payload: result.data.results })
      } catch (error) {
        console.log("Get Action movies error: ", error);
      }
    }
  }
  
  export const getComedyMovies = () => {
    return async (dispatch) => {
      try {
        const result = await axios.get(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
        )
  
        dispatch({ type: Types.GET_COMEDY_MOVIES, payload: result.data.results })
      } catch (error) {
        console.log("Get Comedy Movies error: ", error);
      }
    }
  }
  
  export const getHorrorMovies = () => {
    return async (dispatch) => {
      try {
        const result = await axios.get(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
        )
        dispatch({ type: Types.GET_HORROR_MOVIES, payload: result.data.results })
      } catch (error) {
        console.log("Get Horror Movies error: ", error);
      }
    }
  }
  
  export const getRomanceMovies = () => {
    return async (dispatch) => {
      try {
        const result = await axios.get(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
        )
        dispatch({ type: Types.GET_ROMANCE_MOVIES, payload: result.data.results })
      } catch (error) {
        console.log("Get Romance Movies error: ", error);
      }
    }
  }
  
  export const getDocumentariesMovies = () => {
    return async (dispatch) => {
      try {
        const result = await axios.get(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
        )
        dispatch({ type: Types.GET_DOCUMENTARIES_MOVIES, payload: result.data.results })
      } catch (error) {
        console.log("Get Documentaries error: ", error);
      }
    }
  }
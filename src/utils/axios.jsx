import axios from "axios";

const instance = axios.create({
     baseURL:"https://api.themoviedb.org/3/",
     headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGUzOGFkNTBiYTZmMDllN2RkYjBiODU4ZmViNzUwMiIsIm5iZiI6MTcxOTY1MjE5OC44NzEwMjksInN1YiI6IjY2N2ZjZDNhNTQyZjgyNzI4ZWFjMTc2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kV0vAl7WYmOY2Twy9hfpR9PKamXMbkhUKp93c2jg-GA'
        }
});

export default instance
import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

function Search() {
  const query = new URLSearchParams(useLocation().search);
  const searchQuery = query.get("query");

  console.log("searchQuery ", searchQuery);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjQxMWVlNzkzNzNhYmU3OWRiNGRiYTNmZjkzYTJkZCIsIm5iZiI6MTcyMzgxNzI2OS4zMDI5Niwic3ViIjoiNjY1MDE5MjViYzIyOGJlYjkyMDY4NTdlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ojfuxR6gKJw-eRX748azY3Dqomeu2Rk7ME0SbaHFyCQ",
          accept: "application/json",
        },
      })
      .then((resp) => console.log(resp.data.results));
  }, [searchQuery]);

  return <div>Search</div>;
}

export default Search;

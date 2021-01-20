import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FavoritesNav from "../../components/FavoriteNav/FavoritesNav";
import GlobalStats from "../../components/GlobalStats/GlobalStats";

import { fetchFavoriteStats } from "../../store/favoriteStats/actions";
import { selectFavoriteStats } from "../../store/favoriteStats/selectors";

export default function Stats() {
  const channels = useSelector(selectFavoriteStats);
  const [selectedFavorite, setSelectedFavorite] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteStats());
  }, [dispatch]);

  useEffect(() => {
    setSelectedFavorite(channels[0]);
  }, [channels]);

  console.log("channels from selectors", channels);

  return (
    <div>
      <FavoritesNav channels={channels} selectChannel={setSelectedFavorite} />
      <GlobalStats channel={selectedFavorite} />
    </div>
  );
}

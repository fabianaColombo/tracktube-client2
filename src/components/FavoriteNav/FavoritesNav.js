import React from "react";
import "./FavoriteNav.scss";

export default function FavoritesNav(props) {
  return (
    <div className="favorite-nav-container">
      {props.channels.map((channel) => {
        console.log("props channel", props.channel);
        return (
          <div
            key={channel.youtubeId}
            onClick={() => props.selectChannel(channel)}
            className="favorite-nav-card"
          >
            <h4>{channel.name}</h4>
          </div>
        );
      })}
    </div>
  );
}

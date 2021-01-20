import React from "react";
import "./FavoriteNav.css";

export default function FavoritesNav(props) {
  return props.channels.map((channel) => {
    console.log("props channel", props.channel);
    return (
      <div key={channel.youtubeId} className="d-inline-flex p-5 m-2">
        <div
          onClick={() => props.selectChannel(channel)}
          className="card shadow-sm mb-4 border"
        >
          <div className="card-body pb-0 text-center ">
            <h4 className="card-title mb-3">{channel.name}</h4>
            <p className="card-subtitle mb-3 text-primary">
              <a href="https://www.youtube.com/channel/">Visit on YouTube</a>
            </p>
          </div>
        </div>
      </div>
    );
  });
}

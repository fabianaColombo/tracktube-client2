import React from "react";

export default function FavoritesNav(props) {
  return props.channels.map((channel) => {
    return (
      <div key={channel.youtubeId} onClick={() => props.selectChannel(channel)}>
        <button>{channel.name}</button>
      </div>
    );
  });
}

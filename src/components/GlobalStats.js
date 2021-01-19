import React from "react";

export default function GlobalStats(props) {
  const channel = props.channel;
  if (!channel) {
    return "Loading...";
  }
  return (
    <div>
      <p>{channel.name}</p>
    </div>
  );
}

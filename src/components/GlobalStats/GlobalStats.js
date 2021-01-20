import React from "react";
import "./GlobalStats.scss";

export default function GlobalStats(props) {
  const channel = props.channel;

  if (!channel) {
    return (
      <div className="statsChannelTitle">
        <div>
          <h2>We are trying to fetch your favorite channels...</h2>
          <p>
            If you haven't saved any channels in the Compare and Explore page,
            go back and save your favorite channels, this way we can display
            their stats here.
          </p>
        </div>
      </div>
    );
  }

  const averageViewsPerVideo = parseInt(
    channel.totalViews / channel.videoUploads
  );

  const averageViewsPerSubscriber = parseInt(
    channel.totalViews / channel.subscriberCount
  );

  const today = new Date();
  const dateCreated = Date.parse(channel.created);
  const daysFromToday = (today - dateCreated) / (1000 * 3600 * 24);

  const averageAccountGrowthPerDay = parseInt(
    channel.subscriberCount / daysFromToday
  );
  //console.log(averageAccountGrowthPerDay);

  function numberFormater(num) {
    if (num > 999 && num < 1000000) {
      return Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K";
    } else if (num > 999999 && num < 1000000000) {
      return Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + "M";
    } else if (num > 999999999) {
      return Math.sign(num) * (Math.abs(num) / 1000000000).toFixed(1) + "B";
    } else {
      return num;
    }
  }
  console.log(numberFormater(channel.subscriberCount));

  return (
    <div>
      <div className="title">
        <h2>
          <a
            target="_blank"
            href={`https://www.youtube.com/channel/${channel.youtubeId}`}
          >
            {channel.name}
          </a>
        </h2>
        <p>
          Published At: <strong>{channel.created}</strong>
        </p>
      </div>

      <div className="stats-conatiner">
        <div className="rounded-circle">
          <h3>{numberFormater(channel.country)}</h3>
          <p>Country</p>
        </div>
        <div className="rounded-circle">
          <h3>{numberFormater(channel.subscriberCount)}</h3>
          <p>Subscribers</p>
        </div>
        <div className="rounded-circle">
          <h3>{numberFormater(channel.totalViews)}</h3>
          <p>Views</p>
        </div>
        <div className="rounded-circle">
          <h3>{channel.videoUploads}</h3>
          <p>Videos</p>
        </div>
      </div>

      <div className="average-container">
        <div className="average-box">
          <h3>{numberFormater(averageViewsPerVideo)}</h3>
          <p>Average Views Per Video</p>
        </div>
        <div className="average-box">
          <h3>{numberFormater(averageViewsPerSubscriber)}</h3>
          <p>Average Views Per Subscriber</p>
        </div>
        <div className="average-box">
          <h3>{numberFormater(averageAccountGrowthPerDay)}</h3>
          <p>Average Account Growth Per Day</p>
        </div>
      </div>
    </div>
  );
}

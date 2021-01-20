import React from "react";
import "./GlobalStats.css";

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

  const averageViewsPerVideo = channel.totalViews / channel.videoUploads;

  const averageViewsPerSubscriber =
    channel.totalViews / channel.subscriberCount;

  const today = new Date();
  const dateCreated = Date.parse(channel.created);
  const daysFromToday = (today - dateCreated) / (1000 * 3600 * 24);

  const averageAccountGrowthPerDay = channel.subscriberCount / daysFromToday;
  //console.log(averageAccountGrowthPerDay);

  return (
    <div>
      <div className="statsChannelTitle">
        <div>
          <h2>{channel.name}</h2>
          <p>
            Published At: <strong>{channel.created}</strong>
          </p>
        </div>
      </div>
      <div>
        <div className="globalStats"></div>
        <div>
          <h3>{channel.country}</h3>
          <p>Country</p>
        </div>
        <div>
          <h3>{channel.subscriberCount}</h3>
          <p>Subscribers</p>
        </div>
        <div>
          <h3>{channel.totalViews}</h3>
          <p>Total Views</p>
        </div>
        <div>
          <h3>{channel.videoUploads}</h3>
          <p>Total Videos</p>
        </div>

        <div>
          <div>
            <h3>{averageViewsPerVideo}</h3>
            <p>Average Views Per Video</p>
          </div>
          <div>
            <h3>{averageViewsPerSubscriber}</h3>
            <p>Average Views Per Subscriber</p>
          </div>
          <div>
            <h3>{averageAccountGrowthPerDay}</h3>
            <p>Average Account Growth Per Day</p>
          </div>
        </div>
      </div>
    </div>
  );
}

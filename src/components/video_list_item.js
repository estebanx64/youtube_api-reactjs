import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <div className="card mb-3">
      <a onClick={() => onVideoSelect(video)}>
        <img className="card-img-top img-fluid w-100" src={imageUrl} />
      </a>
      <div className="card-body">
        <h6 className="card-title mb-1">
          <p>{video.snippet.title}</p>
        </h6>
      </div>
    </div>
  );
};

export default VideoListItem;
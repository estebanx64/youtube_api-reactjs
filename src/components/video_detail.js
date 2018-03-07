import React from 'react';

const VideoDetail = ({video}) => {
if (!video) {
  return <div>Loading...</div>;
}

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
    <div className="mb-0 mt-4">
      <i className="fa fa-search"> Busqueda</i>
    </div>
    <hr className="mt-2" />
    <div className="card-columns">
      <div className="card mb-3">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="card-body">
          <h6 className="card-title mb-1">{video.snippet.title}</h6>
          <p className="card-text small">{video.snippet.description}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VideoDetail;
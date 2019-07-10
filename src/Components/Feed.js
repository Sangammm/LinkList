import React from "react";

const Feed = ({ feed }) => {
  return true ? (
    <div>Data</div>
  ) : (
    <div>
      {feed.map(obj => {
        return (
          <React.Fragment>
            <h4>{obj.description}</h4>
            <h6>PostedBy:{obj.postedBy.name}</h6>
            <a href={obj.url}>Goto-Link</a>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Feed;

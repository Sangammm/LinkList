import React, { useEffect } from "react";
import Likebutton from "./Likebutton";
const Feed = props => {
  const { feed } = props;

  return (
    <div>
      {feed.map(obj => {
        return (
          <React.Fragment>
            <h4>{obj.description} </h4>
            <a href={obj.url} target="_blank">
              {obj.url}
            </a>
            <h5>
              <span style={{ color: "green" }}>
                PostedBy:{obj.postedBy.name}
              </span>
            </h5>
            <div>
              <Likebutton id={obj.id} {...obj} />
              {obj.votes.length > 0 && (
                <span style={{ color: "#009688" }}>Liked By </span>
              )}
              {obj.votes.map(obj1 => {
                return <span> - {obj1.user.name} </span>;
              })}
            </div>
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Feed;

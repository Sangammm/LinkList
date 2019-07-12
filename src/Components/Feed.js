import React, { useEffect, useState } from "react";
import Likebutton from "./Likebutton";

const Feed = props => {
  const { feed } = props;
  const [filter, setfilter] = useState();
  console.log(feed);
  let maliks = [];
  let list = [];
  for (const obj of feed) {
    if (!maliks.includes(obj.postedBy.id)) {
      maliks.push(obj.postedBy.id);
      list.push(obj.postedBy.name);
    }
  }
  useEffect(() => {
    console.log(filter);
  }, [filter]);
  let templist = feed.filter(obj => {
    if (filter) {
      return obj.postedBy.id === filter;
    } else {
      return true;
    }
  });
  return (
    <div>
      filter by user
      <select
        onChange={e => {
          if (e.target.value === "no") {
            setfilter(null);
          } else {
            setfilter(e.target.value);
          }
        }}
      >
        <option value="no">No-Filter</option>
        {list.map((e, i) => {
          return (
            <option key={i} value={maliks[i]}>
              {e}
            </option>
          );
        })}
      </select>
      {templist.map(obj => (
        <div key={obj.id}>
          <h4>{obj.description} </h4>
          <a href={obj.url} target="_blank">
            {obj.url}
          </a>
          <h5>
            <span style={{ color: "green" }}>PostedBy:{obj.postedBy.name}</span>
          </h5>
          <div>
            <Likebutton id={obj.id} {...obj} />
            {obj.votes.length > 0 && (
              <span style={{ color: "#009688" }}>Liked By </span>
            )}
            {obj.votes.map((obj1, i) => {
              return <span key={i}> - {obj1.user.name} </span>;
            })}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Feed;

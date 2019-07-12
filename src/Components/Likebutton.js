import React, { useEffect, useState } from "react";
import { clientProvider } from "./Wrappers/Wrapper";
import { Mutation } from "react-apollo";
import { GETLOCALID, VOTE, FEED } from "../Apollo/gql";
import { Loader } from "./Wrappers/Wrapper";
const Likebutton = props => {
  const [userid, setuserid] = useState("");
  //console.log(props);
  useEffect(() => {
    let userid1 = props.client.readQuery({
      query: GETLOCALID
    });
    setuserid(userid1);
  }, []);

  const check = () => {
    let r = false;
    props.votes.map(e => {
      if (e.user.id === userid.id) {
        r = true;
      }
    });
    return r;
  };

  return (
    <Mutation mutation={VOTE} awaitRefetchQueries={true}>
      {(vote, { data, loading, error }) => {
        return error ? (
          "Error......"
        ) : loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            {!check() ? (
              <button
                onClick={() => {
                  vote({
                    variables: {
                      linkId: props.id
                    },
                    refetchQueries: [
                      {
                        query: FEED
                      }
                    ]
                  });
                }}
              >
                Like
              </button>
            ) : (
              "Likedbyyou "
            )}
          </React.Fragment>
        );
      }}
    </Mutation>
  );
};

export default clientProvider(Likebutton);

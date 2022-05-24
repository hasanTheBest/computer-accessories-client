import React from "react";
import { useOutletContext } from "react-router-dom";
import UpdateProfile from "./MyProfile/UpdateProfile";
import ProfileInfo from "./MyProfile/ProfileInfo";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading";
import Error from "../../Components/Error";

const MyProfile = () => {
  const user = useOutletContext();
  const {
    isError,
    isLoading,
    refetch,
    error: queryErr,
    data: queryData,
  } = useQuery("getUserByEmail", () => axios.get("user?user=" + user.email));

  // React query state
  if (isError) {
    return <Error msg={queryErr.message} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  const { photoURL, displayName, email } = user;
  const { designation } = queryData.data;

  return (
    <div>
      <div class="flex flex-col md:flex-row justify-center items-center gap-8 xl:gap-16">
        <div>
          {photoURL ? (
            <img class="mask mask-hexagon" src={photoURL} alt={displayName} />
          ) : (
            <div className="mask mask-hexagon w-24 h-24 bg-accent-focus flex items-center justify-center text-5xl font-bold">
              {displayName.slice(0, 1)}
            </div>
          )}
        </div>
        <div>
          <h1 class="text-2xl font-bold">{displayName}</h1>
          <h6 class="font-bold">{designation ? designation : email}</h6>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 xl:gap-16">
        <ProfileInfo userInfo={queryData.data} />
        <UpdateProfile
          user={user}
          userInfo={queryData.data}
          refetch={refetch}
        />
      </div>
    </div>
  );
};

export default MyProfile;

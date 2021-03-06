import React from "react";

const ProfileInfo = ({ userInfo }) => {
  return (
    <div className="card bg-base-100 shadow w-full lg:w-1/2 self-start">
      <div className="card-body w-full">
        <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
        <p>{userInfo.description}</p>

        <div className="overflow-x-auto">
          <table className="table w-full table-compact">
            <tbody>
              {Object.entries(userInfo).map(([key, value]) => {
                if (key === "description" || key === "_id") {
                  return null;
                } else {
                  return (
                    <tr key={key}>
                      <th className="uppercase">{key}</th>
                      <td>{value}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

import React, { useEffect, useState } from "react";
import { getRequest } from "../Services/ApiService";

const ProfilePic = () => {
  const moduleBase = "Company";
  const [profiles, setProfiles] = useState([]);

  const getData = async () => {
    console.log("hfhmgh");
    const res = await getRequest(`${moduleBase}/get`, profiles);
    console.log(res);
    setProfiles(res);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {profiles.length > 0 && (
        <ul>
          {profiles.map((profile) => (
            <li key={profile.id}>{profiles.ownerName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfilePic;

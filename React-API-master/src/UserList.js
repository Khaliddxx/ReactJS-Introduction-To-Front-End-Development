import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <ul style={{ listStyleType: "none" }}>
          <li>
            <strong>User ID: {user.id}</strong>
            <div>
              <li>Name: {user.name}</li>
              <li>User Name: {user.username}</li>
              <li>Email: {user.email}</li>
              <li>
                Address: {user.address.street}, {user.address.suite},{" "}
                {user.address.city}, {user.address.zipcode}
                <li>
                  geo: {user.address.geo.lat} {user.address.geo.lng}
                </li>
              </li>
              <li>Phone: {user.phone}</li>
              <li>Website: {user.website}</li>
              <li>
                Company
                <li>Name: {user.company.name}</li>
                <li>Slogan: {user.company.catchPhrase}</li>
                <li>Bs: {user.company.bs}</li>
              </li>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default UserList;

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { fetchProfile } from "#root/src/actions/profile";
import {
  UserProfile,
  UserInformation,
} from "../../src/components/profile/Profile.styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { gql } from "@apollo/client";
import client from "#root/pages/api/graphql/client";
import query from "#root/pages/api/graphql/user";
import cookie from "js-cookie";
import { stringifyForDisplay } from "@apollo/client/utilities";

const Profile = ({ ...props }) => {
  const { user, cookies } = props;
  console.log("My props");

  const makeUserProfile = () => {
    const { username, bio, phoneNumber, profession, createdDate } = user;
    return (
      <>
        <p>Username:</p>
        <p>{username}</p>
        <p>profile:</p>
        <p>{bio}</p>
        <p>Phone Number:</p>
        <p>{phoneNumber}</p>
        <p>Profession:</p>
        <p>{profession}</p>
        <p>Created Date:</p>
        <p>{createdDate}</p>
      </>
    );
  };

  const makeEmptyUserProfile = () => {
    return (
      <>
        <p>
          {" "}
          You have not logged in as a user, so you cannot view any information
        </p>
      </>
    );
  };

  const fetchData = async (url) => {
    const data = await axios({
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ token: "ABCD" }),
    });
    console.log(data);
  };

  const cookieSettingTest = () => {
    return (
      <>
        <button
          type="button"
          onClick={() => {
            fetchData("/api/profile/login");
            //cookie.set("name", "Billy", { expires: 1 / 24 });
          }}
        >
          Set name
        </button>
        <button
          type="button"
          onClick={() => {
            fetchData("/api/profile/logout");
            //cookie.remove("name", "Billy", { expires: 1 / 24 });
          }}
        >
          Remove name
        </button>
      </>
    );
  };

  return (
    <UserProfile>
      <h1>My Profile</h1>
      <UserInformation>
        {user !== null && typeof cookies.token !== "undefined"
          ? makeUserProfile()
          : makeEmptyUserProfile()}
      </UserInformation>
      {cookieSettingTest()}
    </UserProfile>
  );
};

export async function getServerSideProps({ req, res }) {
  const { data } = await client.query({
    query,
    variables: {
      id: "614ecc6925cf94ee83bb184d",
    },
  });

  return {
    props: {
      user: data.getUser,
      cookies: req.cookies,
    },
  };
}

export default Profile;

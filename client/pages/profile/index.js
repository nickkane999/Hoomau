import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { fetchProfile } from "../../src/actions/profile";
import {
  UserProfile,
  UserInformation,
} from "../../src/components/profile/Profile.styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery, gql } from "@apollo/client";
import client from "./testclient";
import query from "./testquery";

const Profile = ({ user }) => {
  console.log("My props");
  console.log(user);

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

  return (
    <UserProfile>
      <h1>My Profile</h1>
      <UserInformation>
        {user !== null ? makeUserProfile() : {}``}
      </UserInformation>
      <p>Add my profile here</p>
    </UserProfile>
  );
};

export async function getStaticProps() {
  const { data } = await useQuery({
    query,
    variables: {
      id: "614ecc6925cf94ee83bb184d",
    },
  });

  return {
    props: {
      user: data.getUser,
    },
  };
}

export default Profile;

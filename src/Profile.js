import React from "react";
import { useParams } from "react-router-dom";

const data = {
  hyoyeon: {
    name: "이효연",
    description: "hyhyhy 디스크립션 ",
  },
  lili: {
    name: "lilico",
    description: "lliillii;ilili",
  },
};

const Profile = () => {
  const { user } = useParams();
  console.log("유저네임", user);

  // const { user } = match.params.user;   에러 남
  const pp = data[user];

  console.log("pp:", pp);
  console.log("data:", data);

  if (!pp) {
    return <>존재 하지 않는 사용자.....</>;
  }
  return (
    <>
      <h3>{user}</h3>
      <p>{pp.name}</p>
      <p>{pp.description}</p>

      {/* <Outlet /> */}
      {/* 이렇게 하면 중첩된 UI로 레이아웃을 쉽게 렌더링할 수 있습니다. */}
    </>
  );
};

export default Profile;

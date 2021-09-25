import axios from "axios";

axios
  .post(
    "http://localhost:7000/graphql",
    {
      query: `mutation CreateUserMutation($user: UserInput!) {
      createUser(user: $user) {
        id
        username
        bio
        phoneNumber
        profession
        createdDate
      }
    }`,
      variables: {
        user: {
          username: "testadd2",
          bio: "I was added in a script",
          phoneNumber: "9999999999",
          profession: "Test profession",
        },
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  .then((data) => {
    console.log(data);
    res.send(data);
  })
  .catch((error) => {
    console.log(error);
  });

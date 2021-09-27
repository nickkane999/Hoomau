import axios from "axios";
import query from "../graphql/queries/sample";

// Temporary process until you do login part
export const loginUser = () => {
  //const result = await testFetchResults();
  // const result = await fetchUser();
  const id = "614ecc6925cf94ee83bb184d";
  return id;
};

/*
const testFetchResults = () => {
  return axios.get("http://localhost:7000");
};

const fetchUser = () => {
  return axios
    .post(
      "http://localhost:7000/graphql",
      {
        query: `query getUser($id: ID) {
            getUser(id: $id) {
                id
                username
                bio
                phoneNumber
                profession
                createdDate
            }    
        }`,
        variables: {
          id: "614ecc6925cf94ee83bb184d",
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((results) => {
      //console.log("My result");
      //console.log(results);
      return results.data.data.getUser;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};
*/

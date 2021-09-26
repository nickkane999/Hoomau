export default `
    query getUserQuery($id: ID) {
        getUser(id: $id) {
            id
            username
            bio
            phoneNumber
            profession
            createdDate
          }    
    }
`;

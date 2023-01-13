export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload; //action.payload is our posts

    case "CREATE":
      return posts;

    default:
      return posts;
  }
};

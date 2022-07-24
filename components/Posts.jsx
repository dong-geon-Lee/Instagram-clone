import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "codewithsahand",
      userImg: "https://newsimg.sedaily.com/2020/05/28/1Z2XCSYAIX_1.jpg",
      img: "https://images.unsplash.com/photo-1658516182117-c98a04f4ffa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      caption: "Nice picture",
    },
    {
      id: "2",
      username: "Kee",
      userImg: "https://newsimg.sedaily.com/2020/05/28/1Z2XCSYAIX_1.jpg",
      img: "https://images.unsplash.com/photo-1658519387710-714d1a29376a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      caption: "New picture from my city",
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

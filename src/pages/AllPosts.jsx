import React, { useEffect } from "react";
import service from "../services/services";
import Container from "../components/container/Container";
import PostCard from "../components/PostCard";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    service.getBlogs([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  });

  //////////////////////////////// TODO: Handle Zero Case...
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;

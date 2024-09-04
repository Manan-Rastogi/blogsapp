import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import service from "../services/services";
import Container from "../components/container/Container";
import PostForm from "../components/postForm/PostForm";

const EditPost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      service.getBlog(slug).then(
        (post) => {
          if (post) {
            setPost(post);
          } else {
            navigate("/");
          }
        },
        [slug, navigate]
      );
    }
  });
  return (
    <div className="py-6">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  );
};

export default EditPost;

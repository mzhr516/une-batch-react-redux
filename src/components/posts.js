import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../Redux/actions";

export const Posts = (props) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/todos")
    //   .then((res) => dispatch(getPosts(res.data)));
    dispatch(getPosts());
  }, []);
  return (
    <div>
      {posts.map((post) => {
        return <p>{post.title}</p>;
      })}
    </div>
  );
};

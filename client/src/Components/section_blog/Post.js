import React from "react";
import "./blog.css";

const Post = ({post}) => (

  <div className="article" key={post.id} >
    <h4> {post.title}  </h4>
  </div>
  )


export default Post;
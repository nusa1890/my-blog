
import "./singlePost.css"
import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom"; 
import axios from "axios"
import {Link} from "react-router-dom";
import { Context } from "../../context/Context.js";


export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPosts] = useState({});
  const { user } = useContext(Context);
  useEffect(()=>{
    const getPost = async()=>{
      const res = await axios.get("/posts/"+path);
      console.log(res)
      setPosts(res.data)
    };
    getPost()
  },[path]);

  const handleDelete = async () =>{
    try {
      await axios.delete(`/posts/${post._id}`, {
        data:{username:user.username}
      });
      window.location.replace("/");
    } catch (err) {
      
    }
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      {post.photo && (
        <img 
          src={"http://localhost:5000/images/"+post.photo}
          alt=""
          className="singlePostImg"
        />
      )}
        <h1 className="singlePostTitle">
          {post.title}
          {post.username === user.username && (
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
              <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
            </div>
          )}
        </h1>
        
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <Link to={`/?user=${post.username}`} className="link"><b>{post.username}</b></Link> 
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  )
}

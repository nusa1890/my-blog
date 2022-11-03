import "./post.css"
import {Link} from "react-router-dom";

export default function Post({posts}) {
  return (
    <div className='post'>
      {posts.photo && (
        <img className="postImg"
          src={"http://localhost:5000/images/"+posts.photo}
          alt=""
        />
      )}
      <div className='postInfo'>
        <Link to={`/post/${posts._id}`} className="link">
          <span className="postTitle">{posts.title}</span>
        </Link>
        <div className='postCats'>
          {posts.categories.map((c)=>(
            <span className="postCat">{c}</span>
          ))}
        </div>
        <span className="postDate">
          {new Date(posts.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">
      {posts.desc}
      </p>
    </div>
    
  )
}

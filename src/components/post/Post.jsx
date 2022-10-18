import "./post.css"

export default function post() {
  return (
    <div className='post'>
      <img className="postImg"
        src="https://picsum.photos/200"
        alt=""
      />
      <div className='postInfo'>
        <div className='postCats'>
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Eiusmod commodo elit eu minim. Deserunt ipsum aute sit
        reprehenderit dolore fugiat labore dolor. Labore deserunt 
        sint consectetur laborum non Lorem velit magna dolore officia
        aute irure incididunt.Eiusmod commodo elit eu minim. Deserunt ipsum aute sit
        reprehenderit dolore fugiat labore dolor. Labore deserunt 
        sint consectetur laborum non Lorem velit magna dolore officia
        aute irure incididunt.Eiusmod commodo elit eu minim. Deserunt ipsum aute sit
        reprehenderit dolore fugiat labore dolor. Labore deserunt 
        sint consectetur laborum non Lorem velit magna dolore officia
        aute irure incididunt.Eiusmod commodo elit eu minim. Deserunt ipsum aute sit
        reprehenderit dolore fugiat labore dolor. Labore deserunt 
        sint consectetur laborum non Lorem velit magna dolore officia
        aute irure incididunt.
      </p>
    </div>
    
  )
}

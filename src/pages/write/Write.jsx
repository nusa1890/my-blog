import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img 
        className="writeImg"
        src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
        alt="" 
      />
      <form className="writeForm">
        <div className="writeFormGroup">
        <label htmlFor="fileInput">
        <i class="writeIcon fa-solid fa-plus"></i>
        </label>
          <input type="file" id="fileInput" style={{display:"none"}} />
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Tell Your Story....." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}


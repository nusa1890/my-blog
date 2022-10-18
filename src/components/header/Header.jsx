import "./header.css"

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg"
        src="https://images.pexels.com/photos/12639653/pexels-photo-12639653.jpeg?cs=srgb&dl=pexels-yana-moroz-12639653.jpg&fm=jpg"
        alt=""
      />
    </div>
  )
}

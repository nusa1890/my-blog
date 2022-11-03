import "./header.css"
const PF = "http://localhost:5000/images/"
export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg"
        src= {"https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg"}
        alt=""
      />
    </div>
  )
}

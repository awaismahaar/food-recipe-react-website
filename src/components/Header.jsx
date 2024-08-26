import { Link, useNavigate } from "react-router-dom"
import Button from "../designs/Button"
import Logo from "../designs/Logo"
import Search from "../designs/Search"
import { useState } from "react"

function Header() {
  let [input ,setInput] = useState('')
  let navigate = useNavigate()
  function handleSubmit(event){
    event.preventDefault()
    navigate(`/search/${input}`)
    console.log(input);
    
  }
  return (
    <>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
      <Link to="/" className="ms-5 d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <Logo/>
        <span className="fs-4 ms-4 text-white">Food Recipe</span>
      </Link>
     <div className="search mt-2">
        <Search input={input} setInput={setInput} handleSubmit={handleSubmit} value ={input} onChange={(event)=> setInput(event.target.value)}/>
     </div>
      <ul className="nav nav-pills">
        <li className="nav-item"><Link to={`category/indian`} className="nav-link" aria-current="page">
        <Button>Indian</Button></Link></li>
        <li className="nav-item"><Link to={`category/american`} className="nav-link">
        <Button>American</Button></Link></li>
        <li className="nav-item"><Link to={`category/british`} className="nav-link">
        <Button>British</Button></Link></li>
        <li className="nav-item"><Link to={`category/chinese`} className="nav-link">
        <Button>Chinese</Button></Link></li>
        <li className="nav-item"><Link to={`category/thai`} className="nav-link">
        <Button>Thai</Button></Link></li>
      </ul>
    </header>
    </>
  )
}

export default Header
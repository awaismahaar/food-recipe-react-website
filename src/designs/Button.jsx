import {styled} from 'styled-components'
function Button({children, size, ...rest}) {
  return ( 
    <Wrapper>
    <button {...rest} style={{fontSize : size ? size :'12px'}} className="shadow__btn">
       {children}
    </button>
    </Wrapper>
  )
}
let Wrapper = styled.section`
/* From Uiverse.io by mrhyddenn */ 
.shadow__btn {
  padding: 10px 15px;
  border: none;
  font-size: 12px;
  color: #fff;
  border-radius: 7px;
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.5s;
  transition-property: box-shadow;
}

.shadow__btn {
  background: rgb(0,140,255);
  box-shadow: 0 0 25px rgb(0,140,255);
}

.shadow__btn:hover {
  box-shadow: 0 0 5px rgb(0,140,255),
              0 0 25px rgb(0,140,255),
              0 0 50px rgb(0,140,255),
              0 0 100px rgb(0,140,255);
}
`
export default Button
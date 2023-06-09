import React from 'react'

const BotonCarrito = ({open,setOpen}) => {
  return (
    <a className="offcanvas__stikcy--toolbar__btn minicart__open--btn" onClick={() => {open ? setOpen(false) : setOpen(true)}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18.897" height="21.565" viewBox="0 0 18.897 21.565">
            <path  d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor"/>
        </svg>
        <span className="items__count">02</span> 
    </a>
  )
}

export default BotonCarrito

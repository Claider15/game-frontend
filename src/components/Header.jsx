import styled from "styled-components"

const HeaderElement = styled.header`
  background-image: url('/public/img/header_bg.png');
  height: 190px;
  background-repeat: no-repeat;
`

const IconImage = styled.img`
  width: 50px;
  height: 50px;
  @media (min-width: 992px) {
    width: 70px;
  height: 70px;
  }
`

const HeaderMenu = styled.img`
  margin-left: -2rem;
  height:50px;
  @media (min-width: 992px) {
    height: 60px;
    margin-left: -2.5rem;
  } 
`

const Titulo = styled.h3`
  font-family: 'SCRUBLAND', monospace;
  -webkit-text-stroke: 1px brown;
  @media (min-width: 992px) {
    margin-left: 4rem;
    font-size: 1.25rem/* 20px */;
    line-height: 1.75rem/* 28px */;
  } 
`

const Header = () => {
  const nav = "md:flex"
  const a = "flex items-center relative"
  const headerMenu = "relative z-10 max-w-none"
  const titulo = "text-white font-bold uppercase absolute left-1 ml-10 z-30 tracking-tighter"

  return (
    <>
      <HeaderElement>
        <div className="pt-5 flex justify-around items-center">
          <div className="flex items-center">
            <nav className={nav}>
              <a className={a} href="#">
                <IconImage className="relative z-20" src="/public/img/icon_menu.png"/>
                <HeaderMenu className={headerMenu} src="/public/img/header_menu.png"/>
                <Titulo className={titulo}>Continents</Titulo>
              </a>

              <a className={a} href="#">
                <IconImage className="relative z-20" src="/public/img/icon_menu2.png"/>
                <HeaderMenu className={headerMenu} src="/public/img/header_menu.png"/>
                <Titulo className={titulo}>Inventory</Titulo>
              </a>
            </nav>

            <nav className={nav}>
              <a className={a} href="#">
                <IconImage className="relative z-20" src="/public/img/icon_menu2.png"/>
                <HeaderMenu className={headerMenu} src="/public/img/header_menu.png"/>
                <Titulo className={titulo}>Market</Titulo>
              </a>

              <a className={a} href="#">
                <IconImage className="relative z-20" src="/public/img/icon_menu2.png"/>
                <HeaderMenu className={headerMenu} src="/public/img/header_menu.png"/>
                <Titulo className={titulo}>Exchange</Titulo>
              </a>
            </nav>
          </div>

          <nav className="flex flex-col md:flex-row">
            <a href="#">
              <IconImage className="relative z-20" src="/public/img/icon_menu.png"/>
            </a>

            <a href="#">
              <IconImage className="relative z-20" src="/public/img/icon_menu2.png"/>
            </a>
          </nav>
        </div>
      </HeaderElement>

      
    </>
  )
}

export default Header

import styled from "styled-components"

const IconImage = styled.img`
  width: 50px;
  height: 50px;
  @media (min-width: 992px) {
    width: 90px;
  height: 90px;
  }
`

const HeaderMenu = styled.img`
  margin-left: -2rem;
  height:50px;
  @media (min-width: 992px) {
    height: 60px;
  } 
`

const Titulo1 = styled.h3`
  font-family: 'Hansip', monospace;
  -webkit-text-stroke: 1px brown;
  margin-left: -.9rem;
  @media (min-width: 992px) {
    margin-left: 0;
  } 
`

const Titulo2 = styled.h3`
  font-family: 'SCRUBLAND', monospace;
  -webkit-text-stroke: 1px #483f38;
  margin-left: -.9rem;

`

const Iconos = () => {
  return (
    <section className='container mx-auto mt-3'>
        <div className='flex justify-between text-white'>
            <div className="flex gap-10">
            <IconImage src="/img/back.png"/>
            <div className="flex items-center justify-start relative">
                <HeaderMenu className="relative z-10 max-w-none" src="/img/but1.png"/>
                <Titulo1 className="text-white text-2xl font-bold uppercase absolute z-30 tracking-tighter">GREENHOUS</Titulo1>
            </div>
            </div>

            <div>
              <button type="button" className="flex items-center justify-start relative">
                  <HeaderMenu className="relative z-10 max-w-none" src="/img/but_options.png"/>
                  <Titulo2 className="text-white text-2xl font-bold uppercase absolute z-30 tracking-tighter">TYPE</Titulo2>
                  <HeaderMenu className="relative z-30 max-w-none right-8 lg:right-12" src="/img/icon_options.png"/>
              </button>
            </div>
        </div>
    </section>
  )
}

export default Iconos

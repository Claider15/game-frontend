import styled from "styled-components"

const GardenBorder = styled.div`
  height: 30em; // Scrollbar
  background-color: #e6d4ad;
  border: 4px solid #dda806;
  border-radius: 2rem;
  overflow: auto;

  @media (min-width: 480px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  &::-webkit-scrollbar {
    width: 10px; // Ancho del scrollbar
  } 

  &::-webkit-scrollbar-track {
    background-color: #8c4424; // Color del track del scrollbar
    border-radius: 1rem; // Radio del track;
    margin-block: .8em;
  }

  &::-webkit-scrollbar-thumb {
    background-color:  #9c7c54; // Color del thumb del scrollbar
    border-radius: 1rem; // Radio del thumb
  }

`

const ImgContainer = styled.div`
  border-radius: 2rem;
`

const GardenImg = styled.img`
  width: 200px;
  height: 200px;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`

const Circulo = styled.div`
  position: absolute;
  left: 45%;
  top: 95%;
  background-color:  #fc4440 ;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const EnterContainer = styled.img`
    width: 200px;
`

const Titulo = styled.h3`
  font-family: 'Hansip', monospace;
  -webkit-text-stroke: 1px #483f38;
  letter-spacing: -0.09em;
`

const Items = () => {
    const imgContainer = "border-4 bg-white"
    const circulo = "border-2 bg-white"
    const titulo = "absolute inset-0 flex items-center justify-center text-white text-2xl font-bold uppercase"
  return (
    <section className="container mx-auto mt-5 md:flex md:justify-center mb-5">
      <GardenBorder className="shadow p-3 grid gap-4 grid-cols-2">
        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden01.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>

        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden02.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>

        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden04.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>

        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden05.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>

        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden05.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>

        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden01.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>

        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden02.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>

        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden04.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>

        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden05.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>

        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden05.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>

        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden01.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>

        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden02.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>

        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden04.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>

        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden05.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>

        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden05.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>

        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden01.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>

        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden02.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>

        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden04.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>

        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden05.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>

        <ImgContainer className={imgContainer}>
            <div className="relative">
                <GardenImg src="/src/assets/garden05.jpg" />  
                <Circulo className={circulo}/>
            </div>

            <div className="mt-4 relative">
                <EnterContainer src="/src/assets/card_button.png" />
                <Titulo className={titulo}>Enter</Titulo>
            </div>
        </ImgContainer>
      </GardenBorder>
    </section>
  )
}

export default Items

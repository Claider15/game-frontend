import styled from "styled-components"

const Contenedor = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
`
const Contenido = styled.div`
    font-family: 'Hansip', monospace;
    background-color: rgba(0, 0, 0, 0.5);
    margin-left: -1.6rem;
    padding-left: 1.5rem;
`
const Imagen1 = styled.img`
    width: 100px;
    height: 100px;
`
const Imagen2 = styled.img`
    width: 30px;
    /* height: 80px; */
`
const Texto1 = styled.p`
    color: white;
`
const Texto2 = styled.p`
    color:  #e5cb9a;
`

const Puntuacion = () => {
  return (
    <>
      <Contenedor className="flex items-center">
        <Imagen1 className="relative z-20" src="/src/assets/user_bee.png"/>
        <Contenido className="rounded-lg p-2 relative z-10">
            <Texto1>DrBeebeep</Texto1>
            <div className="flex items-center">
                <Imagen2 src="/src/assets/hony.png"/>
                <Texto2>999,999</Texto2>
            </div>
        </Contenido>
      </Contenedor>
    </>
  )
}

export default Puntuacion

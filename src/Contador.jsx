import { useCounter } from "./Hooks/userCounter"


export const Contador = () => {

  const {contador,incrementar,resetear,decrementar} = useCounter(0)

  return (
    <>
      <h1>Contador: {contador} </h1>
      <div className="botones">
      <button className='btn btn-primary' onClick={ () => incrementar(1)}>Incrementar</button>
      <button className='btn btn-danger' onClick={() => resetear()}>Resetear</button>
      <button className='btn btn-primary' onClick={() => decrementar(1)}>Decrementar</button>    
      </div>
    </>

  )
}

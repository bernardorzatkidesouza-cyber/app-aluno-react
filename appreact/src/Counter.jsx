import { useEffect, useState } from "react"

function Counter(){
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Você clicou ${count} vezes`
    },[count])

    const frutas = ['maça','laranja','uva'];



    return (
        <>
        <button
             type="button"
             className="counter"
             onClick={() => setCount((count) => count + 1)}
        >
        Count is {count}
        </button>

        <ul>
            {frutas.map((fruta)=>
                <li key='{fruta}'>{fruta}</li>
            )}
        </ul>
        </>
    )
}
export default Counter
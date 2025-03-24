"use client";
import { useState } from 'react';
export default function Hook() {
    const [contador, setContador] = useState(0)
    function handleClickContador() {
        setContador(contador + 1)

        if (contador >= 5) {
            alert('Você atingiu o limite de 5 contagens')
            setContador(5)
        } else {
            setContador(contador + 1)
        }
    }

    function handleClickContadorMenos() {
        setContador(contador - 1)
        if (contador <= -5) {
            alert('Você atingiu o limite de -5 contagens')
            setContador(contador - 1)
        } else {
            setContador(contador - 1)
        }
    }


    return (
        <>
            <div>
                <h2>Contagem</h2>
                <p>Contagem: {contador}</p>
            </div>

            <div className="flex gap-10">
                <button
                    className='
                bg-slate-400
                p-5 border-2
                cursor-pointer'
                    type="button" onClick={handleClickContador}>Clique aqui para adicionar</button>

                <button className='
                bg-slate-400
                p-5 border-2
                cursor-pointer'
                    type="button" onClick={handleClickContadorMenos}>Clique aqui para remover</button>
            </div>
        </>
    )
}

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () =>{
    
    const [categorias, setCategorias] = useState(['Hunter X']);

    return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias={setCategorias}/>
        <hr/>
        <ol>
            {
                categorias.map(cat => (
                    <GifGrid key={cat} categoria={cat}/>
                ))
            }
        </ol>
    </>
    )
}
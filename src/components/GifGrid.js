import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

    const {data:images, loading} = useFetchGifts( categoria ); 


    return (
        <>
        <h3>{categoria}</h3>
        {loading && 'Cargando...'}
         <div className = 'card-grid'>
                {
                    images.map( img => (
                        <GifGridItem 
                            key = {img.id}
                            {...img}/>
                    ))
                }
        </div>
        </>
    )
}

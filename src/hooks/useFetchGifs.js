import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifts = (categoria) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect( () => {
        getGifs(categoria)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            });
    }, [categoria])


    return state;

}
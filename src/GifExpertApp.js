import React from 'react'
import { useState } from 'react/cjs/react.development';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['On Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Rick and Morty']);

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory setCategories={ setCategories }/>

            <hr/>

            <ol>
                { 
                    categories.map( category => 
                        <GifGrid key={ category } category={ category }/> 
                    )
                }
            </ol>
        </>
    )

}

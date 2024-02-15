import { useState } from "react";
//Archivo de barril
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
    // hooks
    const [Categories, setCategories] = useState(['One Punch']);
    
    const onAddCategory = (newCategory) =>{
        
        // ...Categories Toma todos loa elementos del arreglo
        // setCategories( [...Categories,newCategory])
        // setCategories(cat => [...cat, 'Valorant']);
        //Si Categiories contiene la nueva categoria salta todo, si no sigue 
        if(Categories.includes(newCategory)) return;
        setCategories([newCategory, ...Categories])

    }
  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
        
        {/* Input */}
        <AddCategory 
            // setCategories={setCategories}
            // El on representa que se esta emitiendo algo evento
            onNewCategory= {(event) => onAddCategory(event)}

        />

        {/* Listado de gif */}
        {/* <button onClick={onAddCategory}>Agregar</button> */}
        
        {
            Categories.map((category) =>(
                <GifGrid 
                    key={category} 
                    category={category}/>
            ))
        }


            {/* Gif Item */}

    </>
    
  )
}

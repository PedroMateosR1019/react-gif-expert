import { useState } from "react"

//Se agrefo el prop
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setinputValue] = useState('')
    const onInputChange = ({target}) =>{
        setinputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // Solo si hay un caracter 
        if(inputValue.trim().length <= 1) return;
        // Funcion donde se envia el input value y los valores de categoria
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        // Lo vuelve un string vacio 
       
        setinputValue('');

    }

    return (
        <form onSubmit= {onSubmit}>
            <input 
                type="text"
                placeholder="Buscar GIF"
                value={inputValue}
                onChange={onInputChange}
            />

        </form>

  )
}

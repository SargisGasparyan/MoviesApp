import React,{createContext,useState} from 'react'
export const Context=createContext()

const ContextProvider=(props)=>{
    const [movies] = useState(localStorage.getItem('movies'))
    const incMeth=(val)=>{

        const arr = JSON.parse(localStorage.getItem('movies')) || [];
        const data = [val, ...arr];
        localStorage.setItem('movies',JSON.stringify( data))

    }

    const decMeth=(val)=>{
        const arr = JSON.parse(localStorage.getItem('movies')) || [];
        const idx = arr.findIndex((el)=>el.Title===val);
        const before =arr.slice(0,idx);
        const after =arr.slice(idx+1,);
        const newArray =[...before,...after];
        idx!==-1 && localStorage.setItem('movies',JSON.stringify(newArray))

    }
    const val = {incMeth,decMeth,movies}
    return(
        <Context.Provider value={val}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider
import axios from 'axios'
import {useEffect, useState} from 'react'

function useDepartmentData(path) {
    const [data, setdata] = useState([])
    useEffect(()=>{
        if(path === "/department/computer"){
            axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                setdata(res.data)
                // console.log(data)
            })
            .catch(err=>{
                console.error(err)
            })
        }
        else if(path === "/department/electrical"){
    
        }
        else if(path === "/department/mechanical"){
            
        }
        else if(path === "/department/chemical"){
            
        }
    },[])
    
    return [data]
}

export default useDepartmentData

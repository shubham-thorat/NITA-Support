import {useState,useEffect} from 'react'
import axios from 'axios'

function useData() {
    const [posts, setposts] = useState([])
    const [comments, setcomments] = useState([])
    const [albums, setalbums] = useState([])
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res =>{
            setposts(res.data) 
        })
        .catch(err =>{
            console.error(err);
        })

        axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then(res =>{
            setcomments(res.data) 
        })
        .catch(err =>{
            console.error(err);
        })
        
        axios.get(`https://jsonplaceholder.typicode.com/albums`)
        .then(res =>{
            setalbums(res.data) 
        })
        .catch(err =>{
            console.error(err);
        })
        console.log('use Effect')

    }, [])
    
    return [posts,comments,albums]
}

export default useData

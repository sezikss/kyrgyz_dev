import { log } from "console"
import { useEffect, useState } from "react"
import { FaLess } from "react-icons/fa"
import {  API_URL  } from "../constants/index";

const useFetch = (
    { url } = {
      url: `${ API_URL }/jobs`,
    }
)=> {
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        try{
            const response = await fetch(url)
            const data = await response.json()
            if(data.statusCode === 200) {
                console.log(data);

                setData(data.data);
            }
        } catch(error) {
            console.log(error);
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() =>{
        fetchData()
    }, [])

    return {data, loading}
}

export default useFetch;
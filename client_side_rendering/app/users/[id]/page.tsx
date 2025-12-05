"use client"
import { useParams } from "next/navigation"
import { useState ,useEffect } from "react"
function page() {
    const {id}=useParams();
    const [data ,setData]=useState<any>([]);

    const fetchData=async()=>{
        const res= await fetch(`https://dummyjson.com/users/${id}`);
        setData(await res.json());
    }


    useEffect(()=>{
        fetchData();
    },[])
    console.log(data);
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
        <h3>{data.firstName} {data.lastName}</h3>
        <img src={data.image} alt="" />
        <p>{data.gender}</p>
        
        <div>
            <h3>{data.company?.name}</h3>
            <li>{data.company?.department}</li>
            <li>{data.company?.position}</li>
            
        </div>
    </div>
  )
}

export default page
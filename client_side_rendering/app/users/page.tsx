"use client"

import Link from "next/link";
import { useEffect ,useState} from "react"
function page() {
    const [data,setData]=useState<any>([]);

    useEffect(()=>{
        const fetchData=async()=>{
            const res=await fetch("https://dummyjson.com/users");
            setData(await res.json());
        }
        fetchData();
        

   },[])

   console.log(data.users);

  return (
    <div>
        {data && data.users && data.users.map((ele:any,idx:number)=>{
            return<div key={idx}>
                <Link href={`/users/${ele.id}`}>{ele.firstName}</Link>

                </div>

        })}
        

    </div>
  )
}

export default page
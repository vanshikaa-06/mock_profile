import { useState } from "react"

export function Education(){

    const[user,setUser]=useState({coursename:'',college:'',year:'',location:''});

   function handleChangeCourse(e)
    {
        setUser({...user,coursename:e.target.value})
    }
   function handleChangeCollege(e)
    {
        setUser({...user,college:e.target.value})
    }
   function handleChangeYear(e)
    {
        setUser({...user,year:e.target.value})
    }

    function handleChangeLocation(e){
        setUser({...user,location:e.target.value});
    }


   function handleSubmit(e)
    {
        e.preventDefault();
        console.log(user);
    }


    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChangeCourse} type='text' placeholder="Enter course name"/>
            <input onChange={handleChangeCollege} type='text' placeholder="Enter college name"/>
            <input onChange={handleChangeYear} type='number' placeholder="Enter year"/>
            <input onChange={handleChangeLocation} type='text' placeholder="Enter location"/>         
            <input type='submit' value='Submit'/>  
        </form>
    )
}
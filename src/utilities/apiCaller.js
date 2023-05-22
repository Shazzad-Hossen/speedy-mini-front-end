
import Swal from 'sweetalert2'
const api="https://ill-plum-goshawk-kit.cyclic.app/";
export const addToy=async(data)=>{

    try {
        const response = await fetch(`${api}/addtoy`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    
        const result = await response.json();
        if(result) {
          Swal.fire({
            title: 'Success!',
            text: 'Toy details successfully added',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }  
        else  {
          Swal.fire({
            title: 'Failed!',
            text: 'Failed to add toy details',
            icon: 'error',
            confirmButtonText: 'OK'
          })

        }
       
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'Somethings wents wrong',
          icon: 'error',
          confirmButtonText: 'OK'
        })
        console.error("Error:", error);
      }


   
}


export const updateToy=async(data)=>{

  try {
      const response = await fetch(`${api}/updatetoy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      if(result) {
        Swal.fire({
          title: 'Success!',
          text: 'Toy details successfully added',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }  
      else  {
        Swal.fire({
          title: 'Failed!',
          text: 'Failed to add toy details',
          icon: 'error',
          confirmButtonText: 'OK'
        })

      }
     
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Somethings wents wrong',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      console.error("Error:", error);
    }


 
}

export const delateToy=async(id)=>{
  console.log(id)

  try {
      const response = await fetch(`${api}/deletetoy/${id}`, {
        method: "delete",
      });
  
      const result = await response.json();

      if(result) {
        Swal.fire({
          title: 'Success!',
          text: 'Successfullyy deleted',
          icon: 'success',
          confirmButtonText: 'OK'
        })
       

      }  
      else  {
        Swal.fire({
          title: 'Failed!',
          text: 'Deletion failed',
          icon: 'error',
          confirmButtonText: 'OK'
        })

      }
     
     
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Somethings wents wrong',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      console.error("Error:", error);
    }


 
}


export const getAllToy=async()=>{
 const res= await fetch(`${api}/alltoy`);
 const data= await res.json();
  return data;

}

export const toysPerpage=async(limit,page)=>{

  const res= await fetch(`${api}/alltoywithlim?limit=${limit}&page=${page}`);
  const data= await res.json();
  return data;
 
 }

 export const searchToy=async(text)=>{

  const res= await fetch(`${api}/search?search=${text}`);
  const data= await res.json();
  return data;

 
 
 }

 export const getItem=async(_id)=>{
 

 const res= await fetch(`${api}/details/${_id}`);
  const data= await res.json();
  return data;
 
 }

 export const getMytoys=async(email,sort)=>{
  const res= await fetch(`${api}/mytoys?email=${email}&sort=${sort}`);
  const data= await res.json();
   return data;
 
 }

 export const getToysbycat=async(cat)=>{
  const res= await fetch(`${api}/toysbycat/${cat}`);
  const data= await res.json();
   return data;
 
 }


 export const mytoysPerpage=async(limit,page,email)=>{

  const res= await fetch(`${api}/mytoywithlim?limit=${limit}&page=${page}&email=${email}`);
  const data= await res.json();
  return data;
 
 }
 


  export const apiProduct={
    fetch: async ()=>fetch('https://www.worldoftales.com/tshirts.json').then(resolve=>resolve.json())}
    

const apiCategory= {
  fetch:()=>new Promise(resolve=>setTimeout(()=>resolve([
    {
      "id": 1,
      "name": "T-Shirts",
     
    },
    {
      "id": 2,
      "name": "Pants",
     
    },
    {
      "id": 3,
      "name": "Shoes",
      
    },

    
  ]),500)) 
    
    
}
 export default apiCategory
 

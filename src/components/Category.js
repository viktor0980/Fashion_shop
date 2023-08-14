import { useContext} from 'react'
import {Stack, Button, Image} from '@chakra-ui/react'
import { UserContext} from '../Context'

export default function Categories(){
  const {category, setSortByCat,sortByCat}=useContext(UserContext)
  function handleSortByCat(e){
    setSortByCat(e)
  }
 
  return (
    <Stack borderBottom='1px solid #ccc'  bg='white' direction={{ base: 'column-reverse', sm: 'row' }} justifyContent='center'>
    
      {category.map((item)=>
      <Button marginTop={{ base: '0px', sm: '20px' }} marginLeft={{ base: '10px', md: '10px', sm: '0px' }} marginRight={{ base: '10px', md: '10px', sm: '0px' }} fontWeight='500' width={{ base: 'auto', sm: '200px;'}}   border='1px' variant={sortByCat===item.id?'solid':'outline'} key={item.id} onClick={()=>handleSortByCat(item.id)}>
        {item.name}
      </Button>)}
      <Image height='75px' objectFit='cover'  marginLeft='20px' marginRight='10px' src={'https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149577874.jpg'} />
   
    </Stack>


     
  )
}
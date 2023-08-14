import {  HStack,Stack,Text } from '@chakra-ui/react'
import {useContext} from 'react'
import { UserContext } from '../Context'
export default function Rating(){
  const{ setRating}=useContext(UserContext)
  return(
    <Stack marginLeft='auto' marginRight='auto'  color='#d4af37' cursor='pointer' bg='white' borderWidth='1px' padding='10px'>
      <Text color='black' fontWeight='500'>Average rating</Text>
     <Stack letterSpacing='20px' paddingStart='10px' lineHeight='30px' spacing='0px' fontSize='25px'>
     <HStack letterSpacing='5px' marginLeft='auto' marginRight='auto'  onClick={()=>setRating(5)} >
    <span >{'★'.repeat(5).padEnd(5,'  ☆')}</span>
    </HStack> 
    <HStack letterSpacing='5px' marginLeft='auto' marginRight='auto'  onClick={()=>setRating(4)} bg='white' spacing={5}  >
    <span>{'★'.repeat(4).padEnd(5,'☆')}</span>
    </HStack>
    <HStack letterSpacing='5px' marginLeft='auto' marginRight='auto'  onClick={()=>setRating(3)} bg='white' spacing={5}  >
    <span>{'★'.repeat(3).padEnd(5,'☆')}</span>
    </HStack>
    <HStack letterSpacing='5px'marginLeft='auto' marginRight='auto'  onClick={()=>setRating(2)} bg='white' spacing={5} >
    <span>{'★'.repeat(2).padEnd(5,'☆')}</span>
    </HStack>
    <HStack letterSpacing='5px' marginLeft='auto' marginRight='auto'  onClick={()=>setRating(1)} bg='white' spacing={5}  >
    <span>{'★'.repeat(1).padEnd(5,'☆')}</span>
    </HStack>
    <HStack letterSpacing='2px' fontFamily='parent' color='black' fontSize='18px' marginLeft='auto' marginRight='auto'   onClick={()=>setRating()} >
    <span >Clear Rating</span>
    </HStack> 
     </Stack>
    </Stack>
    
    
  )
}
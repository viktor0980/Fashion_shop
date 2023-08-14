import { Stack, VStack, Image, Text, Button,} from '@chakra-ui/react'
import Stars from './Stars'


export default function ProductCard({item}){
  function clickme(){
  
      alert("Item added to Shopping Cart");
  
    }
  return(
    
  <Stack borderWidth='1px' bg='white' >
    <Stack  paddingY='20px'  alignItems='center' >
      <Image height='160px' objectFit='cover' src={item.image} />
    </Stack>
    <VStack  spacing={0} lineHeight='20px' direction='row' >
      <Text fontWeight='700' color='black'>{item.name}</Text>
      <Text fontWeight='500' color='black'>{item.desc}</Text>
      <Stars item={item}/>
      <Text paddingBottom='10px' color='gray.600' fontWeight='400'>{new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"}).format(item.price)}</Text>
       <Button id='Button'  onClick={() => clickme(this)}  colorScheme='green'  
    variant='outline' marginBottom='10px'>Add to Cart</Button>
    </VStack>
   
  
</Stack>)

}
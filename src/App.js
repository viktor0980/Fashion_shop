import { Stack, Container,Center, Box, Link} from '@chakra-ui/react'
import Grilla from './components/Grilla'
import Price from './components/Price'
import Rating from './components/Rating'
import Categories from './components/Category'
import Pagination from './components/Pagination'
import {UserContext } from './Context'
import {useContext, useEffect, useMemo} from 'react'
import "./styles.css";


function App() {
  const {product,color,currentPage, minPrice,rating, maxPrice, sortByCat} = useContext(UserContext)

  let conditions={}
  if(sortByCat){conditions['categoryId']=sortByCat}
  if(color){conditions['color']=color}
  if(rating){conditions['rating']=rating}
  console.log(conditions,'conditions')

  function getByPrice(array,min,max){
    if(minPrice===undefined)return product.filter(ele=>(ele['price']<=maxPrice))
    else if (maxPrice===undefined)return product.filter(ele=>(ele['price']>=minPrice))
    else return product.filter(ele=>(ele['price']<=maxPrice && ele['price']>=minPrice))}

  const productFiltered=useMemo(()=>{
    if(minPrice||maxPrice){return getByPrice(product, minPrice,maxPrice).filter(item=>{return Object.keys(conditions).every(key=>conditions[key]===item[key])})
    }
    else if(!sortByCat&&!color&&!rating){return  getByPrice(product, minPrice,maxPrice)}
    else  {
      return product.filter(item=>{
        return Object.keys(conditions).every(key=>conditions[key]===item[key])
      })
    }
  }, [ minPrice,maxPrice,product, color, sortByCat, getByPrice, rating])

  const { setIdxPrev, setIdxNext}= useContext(UserContext)

 useEffect(()=>{
   let limitPage= Math.ceil((productFiltered.length>0?productFiltered:product).length/10); 
  if(currentPage===1){
    setIdxPrev(0);setIdxNext(10)}
  else if(currentPage===limitPage){
    setIdxPrev(()=>(currentPage-1)*10);setIdxNext(Infinity)}
  else {setIdxNext(()=>currentPage*10); setIdxPrev(()=>(currentPage-1)*10)}},[productFiltered,currentPage])
   
   return ( 
    <Center> 
      <Stack width='auto'>
        <Stack position='fixed'  zIndex='10' left='0px' w="100%">
      <Categories />
        </Stack>
      <Stack  marginTop='20px' p={{ base: 4, md: 14 }} w="100%" direction={{ base: 'column-reverse', md: 'row' }}>
        <Stack marginTop='12px;'>
          <Container paddingInlineStart='0px'  width='250px' >
            <Price/>
          </Container >
          <Container paddingInlineStart='0px' width='250px' >
            <Rating/>
          </Container >
          </Stack>
        <Grilla productFiltered={productFiltered} />  
        </Stack>
        <Stack direction='row'>
          <Box width='350px'/>
          <Pagination productFiltered={productFiltered}/> 
        </Stack> 
        <Stack direction='row' bg='white' borderTop='1px solid #ccc' h='85px'>
          <Link lineHeight='85px' marginLeft='10px'>Terms & Conditions</Link>
          <Link lineHeight='85px'>Privacy Policy</Link>
          <Link lineHeight='85px'>Contact Us</Link>
        </Stack> 
      </Stack>
    </Center>
    
  ); 
}

export default App;

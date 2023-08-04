import { useEffect } from 'react'

const FetchAllProducts = ( { setAllDummyProducts } ) => {

    useEffect(()=>{
        const makingContact = async() => {
          try {
            const response = await fetch(`https://dummyjson.com/products`);
            const dummyData = await response.json();
            console.log(dummyData.products);
            const dummyProductsData = dummyData.products;
            setAllDummyProducts(dummyProductsData)
          } catch (error) {
            console.log(error);
          }
        }
        makingContact();
      },[])

      return (
        <>
            <h2>Hey, FetchAllProducts works!</h2>
        </>
    )

}



export default FetchAllProducts;

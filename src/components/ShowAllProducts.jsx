import { Link } from 'react-router-dom';

const ShowAllProducts = ( { allDummyProducts} ) => {
    
    return (
        <>
            {allDummyProducts.map((oneDummy) => (
                <Link to={`/product/${oneDummy.id}`} key={oneDummy.id}>
                    <h3 key={oneDummy.id}>{oneDummy.title}</h3>
                </Link>
            ))}
        </>
    );   
}

export default ShowAllProducts;

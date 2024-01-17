import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const Product = () => {

    // Dynamic route;
    const {id} = useParams();

    //Loading data Product.
    const url = "http://localhost:3000/products/" + id;
    const {data: product, loading, error} = useFetch(url);

    return (
        <>
            <p>ID do Produto: {id}</p>
            {error && <p>Ops... Ocorreu algum erro!</p>}
            {loading && <p>Carregando...</p>}

            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.price}</p>
                    <Link to={`/products/${product.id}/info`}>Mais Informações</Link>
                </div>
            )}
        </>
    )
}

export default Product
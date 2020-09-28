import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectCart, selectFavourites, selectFavouritesId, selectUser, setCart, setFavourites } from '../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsChevronLeft, BsFillHeartFill, BsEnvelopeFill } from "react-icons/bs";

const LinkBackToProducts = () => {
    return (
        <p className="h5 mb-4 mb-lg-0">
            <Link to="/products"
                className="text-dark d-flex align-items-center text-decoration-none">
                <BsChevronLeft />Volver al listado de productos
            </Link>
        </p>
    );
}

const ProductDescription = ({ product }) => {
    let cart = useSelector(selectCart);
    let favourites = useSelector(selectFavourites);
    const favouritesId = useSelector(selectFavouritesId);
    const useId = (useSelector(selectUser)).id;
    const dispatch = useDispatch();
    let isFavourite = false;
    const checkFavourite = () => {
        for (const key in favourites) {
            if (favourites[key].id === product.id) {
                return true;
            }
        }
        return false;
    }

    isFavourite = checkFavourite();

    const createFavouriteObject = () => {
        return {
            "id": favouritesId,
            "userId": useId,
            "favouriteProducts": favourites
        };
    }

    const updateFavourites = async () => {
        const res = await fetch(`http://localhost:3004/favourites/${favouritesId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createFavouriteObject())
        });
        res.json().then(res => {
            dispatch(setFavourites(favourites));
        });
    }

    const addProductToCart = () => {
        cart = [...cart, product];
        dispatch(setCart(cart));
    }

    const addProductToFavourites = () => {
        favourites = [...favourites, product];
        updateFavourites();
    }

    const removeProductFromFavourites = () => {
        favourites = [...favourites].filter((value) => value.id !== product.id);
        updateFavourites();
    }

    return (
        <div className="row m-0">
            <div className="col-12 col-lg-4 px-0 pr-lg-3 mb-3 mb-lg-0 d-flex align-items-center">
                <img className="img-fluid mx-auto" src={product.productImage} alt={product.productName} />
            </div>
            <div className="col-12 col-lg-8 px-0 pl-lg-3">
                <h2 className="text-center mb-3">{product.productName}</h2>
                <h4 className="text-center mb-3">{product.productResume}</h4>
                <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum eaque ipsa facilis
                ad vitae totam facere officiis voluptatem aperiam tenetur. Animi neque ut doloribus tempore saepe nisi magni facilis culpa?</p>
                <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum eaque ipsa facilis
                ad vitae totam facere officiis voluptatem aperiam tenetur. Animi neque ut doloribus tempore saepe nisi magni facilis culpa?</p>
                <p className="text-center mb-0 mt-4">Consíguelo ya por sólo:</p>
                <h3 className="h1 text-center">{product.productPrice}€</h3>
                {product.productQuantity < 1 &&
                    <p className="h4 text-center text-danger">¡Ops! Actualmente este producto no está disponible en nuestro stock...</p>
                }
            </div>
            <div className="col-12 px-0">
                <div className="row m-0 mt-4 justify-content-center justify-content-xl-end">
                    {(isFavourite)
                        ?
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-2 mb-md-0 px-0 pr-md-2" >
                            <button type="button" onClick={removeProductFromFavourites}
                                className="btn btn-dark btn-block p-3 p-xl-2 d-flex align-items-center justify-content-center" >
                                <BsFillHeartFill className="text-danger mr-1" />Quitar de favoritos
                        </button >
                        </div>
                        :
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-2 mb-md-0 px-0 pr-md-2">
                            <button type="button" onClick={addProductToFavourites}
                                className="btn btn-outline-dark btn-block p-3 p-xl-2 d-flex align-items-center justify-content-center">
                                <BsFillHeartFill className="mr-1" />Añadir a favoritos
                        </button>
                        </div>
                    }
                    <div className="col-12 col-md-6 col-lg-6 col-xl-5 mb-2 mb-md-0 px-0 pl-md-2">
                        {(product.productQuantity) > 0
                            ?
                            <button type="button" className="btn btn-danger btn-block p-3 p-xl-2" onClick={addProductToCart}>Comprar</button>
                            :
                            <button type="button" className="btn btn-dark btn-block p-3 p-xl-2 d-flex align-items-center justify-content-center"
                                data-toggle="modal" data-target="#noticeOutOfStockModal">
                                <BsEnvelopeFill className="mr-1" />Notifícame cuando esté disponible
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

// const OutOfStockModal = () => {
//     return (
//         <div className="modal fade" id="noticeOutOfStockModal" tabindex="-1" aria-labelledby="noticeOutOfStockModalLabel" aria-hidden="true">
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                     <div className="modal-body p-5 text-center">
//                         <h2 className="mt-5">¡Tomamos nota!</h2>
//                         <h5>Trabajamos para que puedas disfrutar de tus artículos favoritos cuanto antes.</h5>
//                         <p className="my-3">Recibirás un correo electrónico cuando este artículo esté disponible.</p>
//                         <button type="button" className="col-4 btn btn-dark mx-auto" data-dismiss="modal">Aceptar</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



export const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState({});

    async function fetchProduct() {
        const res = await fetch(`http://localhost:3004/products/${id}`);
        res.json().then(res => {
            setProduct(res)
        });
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <section className="col-12 px-0 bg-light p-3">
            <LinkBackToProducts></LinkBackToProducts>
            <ProductDescription product={product}></ProductDescription>
        </section>
    );
};
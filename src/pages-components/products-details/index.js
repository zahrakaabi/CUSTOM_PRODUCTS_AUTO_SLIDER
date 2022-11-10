/* ------------------------------------------------------- */
/*                     DEPENDENCIES                        */
/* ------------------------------------------------------- */
// Packages
// UI Lib Components
// UI Local Components

// API
import { PRODUCTS_API } from '../../shared/Helpers/products';

// Styles
import './index.scss';

/* ------------------------------------------------------- */
/*                      PAGE HEADER                        */
/* ------------------------------------------------------- */
function ProductsDetails() {
    let counter = 1;

    setInterval(() => {
        const SHOWED_IMAGE = document.querySelector('.show-product');
        const SHOWED_NAME = document.querySelector('.show-name');
        const SHOWED_PRICE = document.querySelector('.show-price');
        SHOWED_IMAGE.classList.remove('show-product');
        SHOWED_NAME.classList.remove('show-name');
        SHOWED_PRICE.classList.remove('show-price');

        const IMAGE = document.querySelector(`.image-${counter}`);
        const PRICE = document.querySelector(`.price-${counter}`);
        const NAME = document.querySelector(`.name-${counter}`);
        IMAGE.classList.add('show-product');
        PRICE.classList.add('show-price');
        NAME.classList.add('show-name');

        counter++;

        if (counter > PRODUCTS_API.length) {
            counter = 1;
        }
    }, 3000)

    /* ***************** RENDERING *********************** */
    return (
        <>
            <div className='products-container flex'>
                <div className="products-container__product-image">
                    {PRODUCTS_API.map(( {image, id, name} ) => <img key={id} className={`image-${id} ${id === 1 && 'show-product'}`} src={image} alt={name} />)}
                </div>
                <div className="products-container__product-content flex justify-center items-center flex-column">
                    <span>CLOSE</span>
                    <p>PRODUCT</p>
                    <div className="pos-r">
                        {PRODUCTS_API.map(( {name, id} ) => <h1 key={id} className={`name-${id} ${id === 1 && 'show-name'}`}>{name}</h1>)}
                    </div>
                    <p>PRODUCT PRICE DOLLARS</p>
                    <div className="pos-r">
                        {PRODUCTS_API.map(( {price, id} ) => <h2 key={id} className={`price-${id} ${id === 1 && 'show-price'}`}>$ {price}.00</h2>)}
                    </div>
                    <p>Make a purchase and get a gift</p>
                    <div className='CTA_buttons flex'>
                        <button className="flex justify-center items-center">ADD TO CART</button>
                        <button className="flex justify-center items-center">ADD TO FAVORITE LIST</button>
                    </div>
                    <div className='extra-infos text-center'>
                        <h6>SELFCARE</h6>
                        <p>Take care of your face</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsDetails;
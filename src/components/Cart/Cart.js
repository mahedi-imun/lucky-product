
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import './Cart.css'

const Cart = ({ product }) => {
    return (
        <div className='cart-body'>
            <h4>Selected product</h4>
            {
                product.map(bodySpray =><SelectedProduct
                key={bodySpray.id}
                bodySpray={bodySpray}
                
                ></SelectedProduct> )
            }

        </div>
    );
};

export default Cart;
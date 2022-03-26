
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import './Cart.css'

const Cart = ({ product,handleRandomProduct }) => {
    return (
        <div className='cart-body'>
            <h4>Selected product</h4>
            {
                product.map(bodySpray => <SelectedProduct
                    key={bodySpray.id}
                    bodySpray={bodySpray}
                ></SelectedProduct>)
            }
            <div className='cart-btn-group'>
                <button onClick={()=>handleRandomProduct(product)} className='cart-btn'>Chose one</button>
                <br />
                <button className='cart-btn'>Chose Agin</button>
            </div>
        </div>
    );
};

export default Cart;
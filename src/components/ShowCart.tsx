import { useRecoilState } from 'recoil'
import { cartAtom } from '../atoms/Cart'


const ShowCart = () => {
	const [cart, setCart] = useRecoilState(cartAtom)

	return (
		<div className="cart">
			{cart.map(product => (
				<div key={product.id} className="product">
					<img src={product.img} /> {product.name}
				</div>
			))}
		</div>
	)
}

export default ShowCart

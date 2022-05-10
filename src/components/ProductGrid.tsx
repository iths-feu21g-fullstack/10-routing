import { data } from '../data'
import { useRecoilState } from 'recoil'
import { cartAtom } from '../atoms/Cart'

const ProductGrid = () => {
	const [cart, setCart] = useRecoilState(cartAtom)

	return (
		<div className="product-grid">
			{data.map(product => (
				<div key={product.id} className="product">
					<h3>{product.name}</h3>
					<img src={product.img} />
					<button onClick={() => { setCart([...cart, product]) }}> Köp!!! </button>
				</div>
			))}
		</div>
	)
}

export default ProductGrid

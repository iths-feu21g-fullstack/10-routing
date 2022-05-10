import { Product } from "../models/Product";
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { productsAtom } from '../atoms/Products'
import { Navigate } from 'react-router-dom'

const SingleProduct = () => {
	const [products, setProducts] = useRecoilState(productsAtom)
	const { id } = useParams()  // URL parameter från React Router
	const selected = products.find(product => product.id === id)
	// filter: alla element som matchar
	// find: det första elementet som matchar

	return (
		<div className="single-product">
			{selected !== undefined ? (
				<>
					<h2> {selected.name} </h2>
					<img src={selected.img} />
				</>
			) : (
				<Navigate to="/" />
			) }
		</div>
	)
}

export default SingleProduct

import { atom } from 'recoil'
import {Product} from '../models/Product'

const cartAtom = atom<Product[]>({
	key: 'cartAtom',
	default: []
})


/* TODO: ändra så att kundvagnen innehåller "cart items" i stället för Product-objekt
interface CartItem {
	productId: string;
	amount: number;
}
*/

export { cartAtom }

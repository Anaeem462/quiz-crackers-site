import { getStoredCart } from "./fakeDB";

export const loaderData =async()=>{
const productData = await fetch('products.json')
const products = await productData.json()

const savedCart = getStoredCart()
const initialCart = []

for(const id in savedCart){
     const foundproduct = products.find(product=>product.id === id)
    if(foundproduct){
        const quantity = savedCart[id]
        foundproduct.quantity = quantity
        initialCart.push(foundproduct)
    }
    
}

return {products,initialCart};
}
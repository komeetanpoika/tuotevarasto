import Button from "./Button"

const Products =({products}) => {
    return(
        <div>
            {products.map(product =>
                <div type="product" key={product.id}>
                    <div>
                    Name : {product.name}
                    <br/>
                    Saldo : {product.inventory}
                    </div>
                    <Button />
                </div>
                
                
            )}
        </div>
    )

}
export default Products
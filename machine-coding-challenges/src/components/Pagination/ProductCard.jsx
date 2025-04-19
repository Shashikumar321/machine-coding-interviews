const ProductCard = ({product}) => {

    const { thumbnail, title } = product;

    return (
        <>
        <div className="pagination-product-card">
            <img className="pagination-img-card" src={thumbnail} alt=""/>
            <p className="pagination-title-card">{title}</p>
        </div>
        </>
    )
}

export default ProductCard;
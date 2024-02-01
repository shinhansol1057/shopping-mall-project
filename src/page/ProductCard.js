import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${product?.product_id}`)
  }

  return (
    <div className='product-card' onClick={showDetail}>
      <img src={product?.photo_url} alt='productImage' width={300}/>
      <div>{product?.product_name}</div>
      <div>\ {product?.product_price?.toLocaleString()}</div>
      <div>{product?.score_avg}({product?.review_count})</div>
      <div>{product?.category}</div>
      <FontAwesomeIcon icon={faStar} style={{color: "#eea82f",}}/>
    </div>
  )
}

export default ProductCard
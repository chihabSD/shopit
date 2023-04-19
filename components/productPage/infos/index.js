import React from 'react'
import styles from './styles.module.scss'
import Rating from "@mui/material/Rating";
export default function Infos({product}) {
  return (
 <div className={styles.info}>
    <div className={styles.infos__container}>
    <h1 className={styles.info__name}>{product.name}</h1>
    <h2 className={styles.info__sku}>{product.sku}</h2>
    <div className={styles.infos__rating}>
          <Rating
            name="half-rating-read"
            defaultValue={product.rating}
            precision={0.5}
            readOnly
            style={{ color: "#FACF19" }}
          />
          ({product.numReviews}
          {product.numReviews == 1 ? " review" : " reviews"})
        </div>
    </div>
 </div>
  )
}

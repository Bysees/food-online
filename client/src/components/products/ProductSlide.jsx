import React from 'react'
import cn from 'classnames'

import Rotate from '../animation/Rotate'
import ProductDescription from './description/ProductDescription'

import styles from './products.module.scss'

const ProductSlide = ({ img, labels, structure, width }) => {

  return (
    <div className={styles.product} style={width}>

      <div className={cn(styles.rowOne, styles.rowOne_slide)}>
        <Rotate
          renderFirst={(onHide) => (
            <div className={styles.img}>
              <img src={img} alt="sushi" draggable={false} />
              <button className={styles.findPrompt} onClick={() => { }}>
                Найти в меню!
              </button>
              <button className={styles.descriptionPrompt} onClick={onHide} />
            </div>
          )}

          renderSecond={(onHide) => (
            <ProductDescription
              onHide={onHide}
              labels={labels}
              structure={structure}
              isOnMoveHide
            />
          )}
        />
      </div>
    </div>
  )
}

export default ProductSlide
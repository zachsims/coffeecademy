import React from 'react'
import marked from 'marked'
import styles from './index.scss'

const Step = ({
  title,
  summary,
  instructions,
  image,
  emptyComponent
}) => {

  let style = {}
  if (emptyComponent) {
    style = {
      margin: 'auto',
      maxWidth: '33rem'
    }
  }

  return (
    <div className={styles.wrapper} style={style}>
      <div className={styles.instructionArea}>
        <h1 className={styles.stepTitle}>{title}</h1>
        <h3 className={styles.step}>{summary}</h3>
        <p className={styles.step} dangerouslySetInnerHTML={{__html: marked(instructions)}}></p>
      </div>
      <div className={styles.imageWrapper}>
        {image && <img src={image} className={styles.image}/>}
      </div>
    </div>
  )
}

export default Step

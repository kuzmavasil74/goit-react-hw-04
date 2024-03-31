// ImageCard.jsx

import css from '../ImageCard/ImageCard.module.css'

function ImageCard({ small, alt_description, description, likes, onClick }) {
  return (
    <div className={css.imageCard} onClick={onClick}>
      <img className={css.imageCardImg} src={small} alt={alt_description} />
      <br />
      <h2 className={css.imageCardTitle}>Title: {alt_description}</h2>
      <br />
      <h3 className={css.imageCardDescription}>Description: {description}</h3>
      <br />
      <h4 className={css.imageCardLikes}>Likes: {likes}</h4>
    </div>
  )
}

export default ImageCard

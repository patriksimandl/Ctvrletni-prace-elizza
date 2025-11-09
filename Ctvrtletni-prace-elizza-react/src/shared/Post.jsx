
import './Post.css'
import shareIcon from '../assets/icons/share-icon.svg';
import photoIcon from '../assets/icons/photo-album-icon.svg'

export function Post({ image, header, textContent }) {
  return (
    <div className="post-container">
      {image === '' || image === undefined ?
        '' :
        <div className="post-image-container" >
          <img className="post-image" alt="obrazek" src={image}></img>
        </div>
      }
      <div className={`post-content-container ${image=== '' || undefined ? 'post-content-container-without-image' : ''}`} >
        <div className="post-header">
          {header}
        </div>
        <div className="post-content" >
          {textContent}
        </div>
        <div className="post-links">
          <div className="post-link-container">
            <img className="post-link-icon" src={shareIcon} alt="share" />
            <div className="post-link-text">Sdílet</div>
          </div>

          <div className="post-link-container">
            <img className="post-link-icon" src={photoIcon} alt="share" />
            <div className="post-link-text">Fotogalerie</div>
          </div>
        </div>
      </div>
    </div>
  )
}
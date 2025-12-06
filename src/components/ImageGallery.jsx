import Image from "./Image.jsx";
import {useState} from "react";


export default function ImageGallery() {
  const images = import.meta.glob("/src/assets/images/*{jpg,png}", {eager: true})
  const [displayedImage, setDisplayedImage] = useState(null);

  return (
    <>
      <h1>Image Gallery</h1>
      <div className="images">
        {Object.values(images).map((image, index) => (
          <Image key={index} src={image.default} alt="Photo of nature"
                 description={`Photo of nature ${index}`}
                 onClick={() => setDisplayedImage(image.default)}></Image>
        // TODO make picture display fullscreen after clicking
        ))}
      </div>
      { displayedImage && <div className="image-overlay" onClick={() => setDisplayedImage(null)}>
        <div className="image-window" onClick={(e) => e.stopPropagation()}>
          <img className="modal-image" src={displayedImage} alt="Photo of nature" />
          <button className="modal-close" onClick={() => setDisplayedImage(null)}>Close</button>
        </div>

      </div>}
      <footer>All images were downloaded from <a href={"https://www.pexels.com"}>pexels.com</a></footer>

    </>
  )
}
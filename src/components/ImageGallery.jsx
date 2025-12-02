import Image from "./Image.jsx";


export default function ImageGallery() {
  const images = import.meta.glob("/src/assets/images/*{jpg,png}", {eager: true})

  return (
    <>
      <h1>Image Gallery</h1>
      <div className="images">
        {Object.values(images).map((image, index) => (
          <Image key={index} src={image.default} alt="Photo of nature" description={`Photo of nature ${index}`}></Image>
        ))}
      </div>
      <footer>All images were downloaded from <a href={"https://www.pexels.com"}>pexels.com</a></footer>

    </>
  )
}
import './ImageContainer.css';
type Props = { src: string; alt?: string };

export function ImageContainer({ src, alt }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={src} alt={alt} />
      </div>
    </div>
  );
}

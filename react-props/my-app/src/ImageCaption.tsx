type Props = { pictureCaption: string };

export function ImageCaption({ pictureCaption }: Props) {
  return (
    <div>
      <h3>{pictureCaption}</h3>
    </div>
  );
}

export function PhotoViewer(props) {
  return (
    <>
      <div className="PhotoViewerWrapper">
        <img src={props.imageUrl} alt="No image" />
      </div>
      <p>{props.description}</p>
    </>
  );
}

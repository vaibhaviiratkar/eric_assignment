export default function MiniPreview({ children, onClick }) {
  return (
    <div className="preview-view" onClick={onClick}>
      {children}
    </div>
  );
}
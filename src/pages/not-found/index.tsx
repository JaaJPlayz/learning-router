import './style.css';

export default function NotFound() : JSX.Element {
  return (
    <div className="notfound">
      <div className="notFoundCard">
        <h1>404 - Not Found!</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default function footer() {
  return (
    <footer className="page-footer deep-purple darken-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear() } Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            Movie
          </a>
        </div>
      </div>
    </footer>
  );
}

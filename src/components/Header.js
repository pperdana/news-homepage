import logo from "../logo.svg";

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="logo" className="logo" />
      </a>

      <nav class="main-nav">
        <ul class="main-nav-list">
          <li>
            <a class="main-nav-link" href="#">
              Home
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#new">
              New
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#popular">
              Popular
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#trending">
              Trending
            </a>
          </li>
          <li>
            <a class="main-nav-link nav-cta" href="#categories">
              Categories
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

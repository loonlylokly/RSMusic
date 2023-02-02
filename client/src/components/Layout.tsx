import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/artist">Artist</Link>
        <Link to="/album">Album</Link>
        <Link to="/playlist/new">Createplaylist</Link>
        <Link to="/playlist">Playlist</Link>
        <Link to="/yourlibrary">Yourlibrary</Link>
      </header>
      <Outlet />
      <footer>2023</footer>
    </>
  );
}

export default Layout;

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Homepage from './pages/Homepage';
import { Artistpage, artistLoader } from './pages/Artistpage';
import Albumpage from './pages/Albumpage';
import Createlistpage from './pages/Createlistpage';
import { Playlistpage, playlistLoader } from './pages/Playlistpage';
import Yourlibrarypage from './pages/Yourlibrarypage';
import Notfoundpage from './pages/Notfoundpage';

import Layout from './components/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route
        path="artist/:idArtist"
        element={<Artistpage />}
        loader={artistLoader}
      />
      <Route path="album/:idArtist/:idAlbum" element={<Albumpage />} />
      <Route path="playlist/new" element={<Createlistpage />} />
      <Route
        path="playlist/:idPlaylist"
        element={<Playlistpage />}
        loader={playlistLoader}
      />
      <Route path="yourlibrary" element={<Yourlibrarypage />} />
      <Route path="*" element={<Notfoundpage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

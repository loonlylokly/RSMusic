function Playlistpage() {
  return <h1>Playlist.</h1>;
}
const playlistLoader = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
  return res.json();
};

export { Playlistpage, playlistLoader };

import { useParams } from 'react-router-dom';
// import { useLoaderData, useParams } from 'react-router-dom';

function Artistpage() {
  // const user = useLoaderData();
  const { idArtist } = useParams();

  return (
    <>
      <h1>Artist id is {idArtist}.</h1>
      {/* <div>{user.name as string}</div> */}
    </>
  );
}

const artistLoader = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
  return res.json();
};

export { Artistpage, artistLoader };

import { Link } from 'react-router-dom';

function Notfoundpage() {
  return (
    <h1>
      Page Not Found.
      <Link to="/">Back Home</Link>
    </h1>
  );
}

export default Notfoundpage;

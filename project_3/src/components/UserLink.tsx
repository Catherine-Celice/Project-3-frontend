import { Link } from 'react-router-dom';

interface Props {
  user: string;
}

function UserLink({ user }: Props) {
  return (
    <Link className="UserLink" to={`/user/${encodeURIComponent(user)}`} >
      { user }
    </Link>
  );
}

export default UserLink;

// CAC: I have no idea what this file is for.  
// I copied it from Megan's firebase lab frontend.
// She used the UserLink component in her ShoutOutList
// which is our UsersList.
// I "think" it is needed to fetch each user, 
// but I just do not know.
// I'll work on trying to figure out if this is necessary or not later.
// I just want to get enough of a framework going for now so that we can 
// code and test API calls to our database.
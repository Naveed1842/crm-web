// export default function Home() {
//   return <div style={{ padding: 20 }}>Welcome to CRM Web</div>;
// }
import { Typography } from '@mui/material';
import NavBar from 'components/NavBar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div style={{ padding: 20 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to CRM Web
        </Typography>
      </div>
    </div>
  );
}
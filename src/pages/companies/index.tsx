import { Typography } from '@mui/material';
import NavBar from 'components/NavBar';

export default function CompaniesPage() {
  return (
    <div>
      <NavBar />
      <div style={{ padding: 20 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Companies
        </Typography>
      </div>
    </div>
  );
}
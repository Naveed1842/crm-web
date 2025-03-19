import { Card, CardContent, Typography } from '@mui/material';
import { Person } from 'types/types';

type PersonCardProps = {
  person: Person;
};

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  return (
    <Card sx={{ margin: 1 }}>
      <CardContent>
        <Typography variant="h6">{person.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {person.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PersonCard;
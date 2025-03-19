"use client";

import { GetServerSideProps } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { List } from '@mui/material';
import NavBar from 'components/NavBar';
import PersonCard from 'components/PersonCard';
import { setPeople } from 'store/peopleSlice';
import { RootState } from 'store';
import { Person } from 'types/types';
import { useEffect } from 'react';

type PeoplePageProps = {
  initialPeople: Person[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/people.json');
  const initialPeople = await res.json();
  return { props: { initialPeople } };
};

const PeoplePage = ({ initialPeople }: PeoplePageProps) => {
  const dispatch = useDispatch();
  const { list: people } = useSelector((state: RootState) => state.people);

  useEffect(() => {
    dispatch(setPeople(initialPeople));
  }, [dispatch, initialPeople]);

  return (
    <div>
      <NavBar />
      <div style={{ padding: 20 }}>
        <List>
          {people.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </List>
      </div>
    </div>
  );
};

export default PeoplePage;
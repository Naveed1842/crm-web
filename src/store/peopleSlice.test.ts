import peopleReducer, { setPeople } from './peopleSlice';

describe('peopleSlice', () => {
  it('should handle setPeople', () => {
    const initialState = { list: [], loading: false };
    const mockPeople = [{ id: 1, name: 'Alice', email: 'alice@example.com' }];
    const state = peopleReducer(initialState, setPeople(mockPeople));
    expect(state.list).toEqual(mockPeople);
    expect(state.loading).toBe(false);
  });
});
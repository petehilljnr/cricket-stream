import { create } from 'zustand'

const useInnings = create((set, get) => ({
    batting_id: 0,
    fielding_id: 0,
    innings_id: 0,
    batsman_facing: 0,
    batsman_other: 0,
    current_bowler: 0,
    current_over: 0
}));

export default useInnings;


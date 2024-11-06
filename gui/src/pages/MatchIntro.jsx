import { useQuery } from "@tanstack/react-query";
import useMatchDetails from '../stores/useMatchDetails';
import { match_details } from "../fetch/match_details";
import MatchDetail from "../components/MatchDetail";

const MatchIntro = () => {
    const { fixture_id } = useMatchDetails();

    const { data, isLoading, error } = useQuery({
        queryKey: ['match_details', fixture_id],
        queryFn: () => match_details({ fixture_id })
    })

    if(isLoading) return <div>Loading ...</div>
    if(error) return <div>{ error.message }</div>

    return(
        <>
            <MatchDetail match={data[0]} />
        </>
    )
}

export default MatchIntro;

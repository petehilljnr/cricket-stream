import axios from "axios";

const API_URL = 'http://localhost:3000';

const match_details = async(props) => {
    const { fixture_id } = props;

    const { data } = await axios.get(
        `${API_URL}/v1/query/match_details`,
        { 
          headers: {
            "Content-Type": "application/json"
          },
          params: {
            fixture_id
          }
        }
      )
      return data;
};

export { match_details }
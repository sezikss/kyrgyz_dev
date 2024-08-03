import CommunityList from "./CommunityList";
import useFetch from "../../hooks/useFetch";
import { CONSTANTS} from '../../constants/index';

const Community = () => {
  const { data, loading } = useFetch({ url: `${CONSTANTS}/community` }); 

  return (
    <div id="community">
      <div className="container">
        <div className="community">         
        </div>
      </div>
    </div>
  );
};

export default Community;
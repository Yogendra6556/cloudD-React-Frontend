import api from "@/utils/api/axios";
import { CONTAINER } from "@/utils/api/apiEndpoints";

/**
 * useContainer hook
 * Returns a function spinContainer that posts the payload and returns res.data
 */
const useContainer = () => {
  const [token, setToken] = useState(null);
  /**
   * spinContainer
   * @param {Object} payload - { env: { PROJECT_ID, USER_ID } }
   * @returns {Promise<any>} - response data
   */
  const spinContainer = async (payload) => {
    const res = await api.post(CONTAINER.CREATE, payload);
    setToken(res.data.token);
    return res.data;
  };

  return { spinContainer, token };
};

export default useContainer;

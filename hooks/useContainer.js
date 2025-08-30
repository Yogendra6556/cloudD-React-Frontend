import api from "@/utils/api/axios";
import { CONTAINER } from "@/utils/api/apiEndpoints";
import { useState } from "react";

/**
 * useContainer hook
 * Returns a function spinContainer that posts the payload and returns res.data
 */
const useContainer = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  /**
   * spinContainer
   * @param {Object} payload - { env: { PROJECT_ID, USER_ID } }
   * @returns {Promise<any>} - response data
   */
  const spinContainer = async (payload) => {
    setLoading(true);
    const res = await api.post(CONTAINER.CREATE, payload);
    setToken(res.data.token);
    setLoading(false);
    return res.data;
  };

  const getContainerDetails = async (token) => {
    setLoading(true);
    const res = await api.get(`${CONTAINER.DETAILS}/${token}/`);
    setLoading(false);
    return res.data;
  };

  return { spinContainer, token, getContainerDetails, loading };
};

export default useContainer;

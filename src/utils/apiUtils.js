import axios from "axios";

const URL = "http://localhost:8000/";

const apiUtils = () => {
  const getUrl = () => {
    return URL;
  };

  return {
    getUrl
  };
};

export default apiUtils();

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, authentication = true }) => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      // authentication is requrired but authStatus says you are not logged in
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      // authentication is not reqd[login and signup] but you are logged in -> go to home page
      navigate("/home");
    }
    setLoader(false);
  }, [authentication, authStatus, navigate]);

  /////////////////////////////////////// TODO 1: Add A Loader
  return loader ? none : <>{children}</>;
};

export default Protected;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/auth/action";
export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [condition, setcondition] = useState(false);
  return (
    <div>
      {condition ? (
        <div id="logout">
          <h1>You have sucessfully Logout.</h1>
          <button
            id="gethome"
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Home
          </button>
        </div>
      ) : (
        <div>
          <h3>Are you sure to Logout.</h3>
          <div id="conbtn">
            <button
              id="yesbtn"
              onClick={() => {
                dispatch(logout);
                setcondition(true);
              }}
            >
              Yes
            </button>
            <button
              id="nobtn"
              onClick={() => {
                navigate("/");
              }}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersPosts } from "../../Redux/userblog/action";
import PostCard from "../../components/Cards/PostCard";
import AddPost from "../addPost/AddPost";
export default function UsersBlog() {
  const userpost =
    useSelector((state) => state.userpostReducer.userposts) || [];
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authReducer.token) || "";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  useEffect(() => {
    dispatch(getUsersPosts(`userpost`, config));
  }, [dispatch]);

  console.log(userpost);
  return (
    <>
      <div id="welcometag">
        <h1>Users Blog Page.</h1>
        <div id="postdiv">
          {userpost.length === 0 ? (
            <>Not Loaded</>
          ) : (
            userpost.posts.map((el) => {
              return (
                <div key={el._id}>
                  <PostCard {...el} />
                </div>
              );
            })
          )}
          <div id="addpost">
            <AddPost></AddPost>
          </div>
        </div>
      </div>
    </>
  );
}

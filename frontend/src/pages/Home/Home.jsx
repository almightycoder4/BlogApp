import { useEffect, useState } from "react";
import PostCard from "../../components/Cards/PostCard";
import { useDispatch, useSelector } from "react-redux";
import "../Home/Home.css";
import { getPosts } from "../../Redux/posts/action";
import AddPost from "../addPost/AddPost";
import Contributebtn from "../../components/buttons/Contributebtn";
export default function Home() {
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.postReducer.posts) || [];

  useEffect(() => {
    if (blogs.posts === undefined) {
      dispatch(getPosts("allposts"));
    }
  }, [dispatch, show]);

  return (
    <>
      <div id="welcometag" style={{ display: "flex" }}>
        <div>
          {show ? (
            ""
          ) : (
            <div id="postdiv">
              {blogs.length === 0 ? (
                <>Not Loaded</>
              ) : (
                blogs.posts.map((el) => {
                  return (
                    <div key={el._id}>
                      <PostCard {...el} />
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>
        <div id="addpost">
          {show ? (
            <>
              <AddPost></AddPost>
              <button
                onClick={() => {
                  setshow(false);
                }}
              >
                {" "}
                Cancel
              </button>
            </>
          ) : (
            <div
              onClick={() => {
                setshow(true);
              }}
            >
              <Contributebtn />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

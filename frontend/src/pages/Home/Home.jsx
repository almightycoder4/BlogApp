import { useEffect } from "react";
import PostCard from "../../components/Cards/PostCard";
import { useDispatch, useSelector } from "react-redux";
import "../Home/Home.css";
import { getPosts } from "../../Redux/posts/action";
import AddPost from "../addPost/AddPost";

export default function Home() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.postReducer.posts);
  useEffect(() => {
    dispatch(getPosts("allposts"));
  }, [dispatch]);
  return (
    <>
      <div id="welcometag">
        <h1>This is a Blogging Website for All Visitors.</h1>
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
          <div id="addpost">
            <AddPost></AddPost>
          </div>
        </div>
      </div>
    </>
  );
}

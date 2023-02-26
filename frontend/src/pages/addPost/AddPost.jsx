import React from "react";
import { useState } from "react";
import "../addPost/addpost.css";
export default function AddPost({ handleClick }) {
  const [add, setadd] = useState(true);
  const [data, setdata] = useState([]);
  return (
    <div>
      <div>
        {add ? (
          <div>
            <div id="addbox">
              <div id="addhead">
                <h3>Think,Create & Post</h3>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter your Blog Tittle"
                />
              </div>
              <div id="addbody">
                <textarea
                  name="content"
                  id="content"
                  cols="30"
                  rows="10"
                  placeholder="Type your content"
                ></textarea>
                <p>Add image for your blog post.</p>
                <div id="addimg">
                  <input
                    type="file"
                    name="contentimg"
                    onChange={(event) => {
                      setdata({
                        ...data,
                        [event.target.name]: URL.createObjectURL(
                          event.target.files[0]
                        ),
                      });
                    }}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h3>Add Post + </h3>
        )}
      </div>
    </div>
  );
}

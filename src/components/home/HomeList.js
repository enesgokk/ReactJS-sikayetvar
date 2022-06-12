import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import { Link } from "react-router-dom";

const HomeList = ({ allPosts }) => {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [postId, setPostId] = useState();
  const [postData, setPostData] = useState([]);

  return (
    <div className="bg-white rounded-md px-3 shadow-xl">
      <ul style={{height:"34rem"}} className="divide-y divide-gray-200 overflow-y-scroll overflow-x-hidden scrollbar-hide">
        {allPosts &&
          allPosts.map((posts) => (
            <li
              key={posts.id}
              className="flex justify-between items-center py-6 "
            >
              <div className="flex">
                <span className="font-medium pr-2">{posts.id}</span>
                <div className="text-gray-600 ">{posts.title}</div>
              </div>
              <div className="flex">
                <Link to={{ pathname: `/post/${posts.id}` }}>
                  <button data-testid="detayBtn" className="bg-indigo-600 text-white py-3 px-4 rounded-md text-xs font-medium">
                    DETAY
                  </button>
                </Link>
                <button
                  className="bg-green-600 ml-3 text-white py-3 px-4 rounded-md text-xs font-medium"
                  onClick={() => {
                    setEditModal(true);
                    setPostData([posts.id, posts.userId]);
                  }}
                >
                  DÜZENLE
                </button>
                <button
                  className="bg-red-600 ml-3 text-white py-3 px-4 rounded-md text-xs font-medium"
                  onClick={() => {
                    setDeleteModal(true);
                    setPostId(posts.id);
                  }}
                >
                  SİL
                </button>
              </div>
            </li>
          ))}
      </ul>
      <DeleteModal
        setOpen={setDeleteModal}
        open={deleteModal}
        postId={postId}
      />
      <EditModal open={editModal} setOpen={setEditModal} postData={postData} />
    </div>
  );
};

export default HomeList;

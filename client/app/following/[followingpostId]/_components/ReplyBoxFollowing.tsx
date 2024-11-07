import { AddComment, FetchComments } from "@/actions/action";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import CommentCardFollowing from "./CommentCardFollowing";
import SkeletonCard from "@/libs/SkeletonCard";
import { useAppContext } from "@/context";

const ReplyBoxFollowing = ({
  postmore,
  commentlist,
  setcommentlist,

  userinfo,
}: any) => {
  const [comment, setcomment] = useState<string>("");
  const { loadingmain } = useAppContext();

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await FetchComments(postmore.id);
        if (res) {
          setcommentlist(res);
        } else {
          setcommentlist([]);
        }
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    }
    fetchComments();
  }, [postmore?.id, setcommentlist]);

  async function handleAddComment(
    comment: string,
    userId: string,
    postId: string
  ) {
    if (comment.trim() === "") return;

    try {
      const newComment = await AddComment(comment, userId, postId);

      const updatedComment = {
        ...newComment,
        user: {
          userName: userinfo.userName,
          profileImage: userinfo.profileImage,
        },
      };

      setcommentlist((prevComments: any) => [...prevComments, updatedComment]);
      toast.success("Comment added succesfully");
      setcomment("");
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  }

  return (
    <div>
      <div className="text-white rounded-md max-w-xl mx-auto">
        <h2 className="text-lg font-bold mb-4 my-2">Comments</h2>
      </div>

      {loadingmain ? (
        <div>
          <SkeletonCard />
        </div>
      ) : (
        <div className="flex items-start max-w-lg mx-auto">
          <Image
            height={50}
            width={50}
            src={userinfo?.profileImage}
            alt="user avatar"
            className="rounded-full w-10 h-10 mr-3"
          />

          <div className="flex-grow p-2">
            <p className="text-xs text-gray-400 mb-1">
              Replying to{" "}
              <span className="text-blue-500">@{postmore?.user?.userName}</span>
            </p>

            <input
              value={comment}
              onChange={(e) => setcomment(e.target.value)}
              type="text"
              placeholder="Post your reply"
              className="w-full bg-transparent text-white outline-none border-b border-gray-700 pb-1 mb-2"
            />

            <div className="flex justify-end">
              <button
                onClick={() =>
                  handleAddComment(comment, userinfo.id, postmore.id)
                }
                className="bg-blue-600 text-white py-1 px-4 rounded-full"
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-lg mx-auto mt-4">
        {commentlist.length > 0 ? (
          commentlist.map((comment: any, index: any) => (
            <CommentCardFollowing key={index} comment={comment} />
          ))
        ) : (
          <p className="text-sm text-gray-500">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default ReplyBoxFollowing;

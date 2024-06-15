import { motion } from "framer-motion";
import { differenceInHours } from "date-fns";
import { useState } from "react";
import { FaRegHeart, FaRegComment, FaRegPaperPlane } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaHeart, FaComment, FaPaperPlane, FaBookmark } from "react-icons/fa";
import PostModal from "./PostModal";
const date1 = new Date();
const date2 = new Date(date1.getTime() + 60 * 60 * 1000); // Add 1 hour in milliseconds

// Calculate the difference in hours between date1 and date2
const differenceHours = differenceInHours(date2, date1);

function Post() {
  const [toggleIcons, setToggleIcon] = useState({
    isLiked: false,
    hasComment: false,
    hasBookmarked: false,
    isSent: false,
  });
  const [isOpenModal, setOpenModal] = useState(false);
  const toggleIcon = (key) => {
    setToggleIcon((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  return (
    <div className="post-scroll col-span-3 px-3 border-x border-white/20 overflow-y-scroll h-full flex flex-col p-4 items-center ">
      {[...Array(5)].map((_, i) => {
        return (
          <Card
            key={i}
            toggleIcon={toggleIcon}
            {...toggleIcons}
            isFirst={i === 0}
            isOpenModal={isOpenModal}
            openModal={() => setOpenModal(true)}
            closeModal={() => setOpenModal(false)}
            source={
              "https://scontent.fbir2-1.fna.fbcdn.net/v/t1.15752-9/426758617_924198598937106_1445868995837971820_n.png?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=wngA_P5HvFYAX8MkXTz&_nc_ht=scontent.fbir2-1.fna&oh=03_AdS2MJkb9IWa3uEAIzBpmWLq74MXN6Z5XajJro6opkr5bg&oe=65F19687"
            }
          />
        );
      })}
    </div>
  );
}

export default Post;

const Card = ({
  isFirst,
  source,
  isLiked,
  hasComment,
  isSent,
  isOpenModal,
  hasBookmarked,
  toggleIcon,
  openModal,
  closeModal,
}) => {
  return (
    <>
      <div
        className={isFirst ? "flex flex-col gap-2" : "flex flex-col gap-2 py-4"}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <div className="rounded-full p-5 border border-neutral-500 overflow-hidden"></div>
            <div className="flex flex-col  items-start ">
              <div className="flex items-center gap-1.5">
                <div className="text-normal font-semibold">itsShri</div>
                <div className="p-0.5 bg-neutral-400 rounded-full" />
                <div className=" text-neutral-400 ">{differenceHours}h</div>
              </div>
              <div className="text-sm text-neutral-500">Biratnagar</div>
            </div>
          </div>
          <FaEllipsisH
            className="text-lg cursor-pointer text-neutral-400 mr-1"
            onClick={openModal}
          />
        </div>
        <div className="w-full md:w-[500px] rounded h-[500px]  overflow-hidden">
          <img
            referrerPolicy="true"
            src={source}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-2 w-full flex flex-col ">
          <div className=" flex items-center justify-between">
            <div className=" flex gap-2">
              <motion.div animate={{ scale: isLiked ? 1.1 : 1 }}>
                {isLiked ? (
                  <FaHeart
                    className="text-xl text-red-500 cursor-pointer"
                    onClick={() => toggleIcon("isLiked")}
                  />
                ) : (
                  <FaRegHeart
                    className="text-xl text-neutral-400 cursor-pointer"
                    onClick={() => toggleIcon("isLiked")}
                  />
                )}{" "}
              </motion.div>
              <motion.div animate={{ scale: hasComment ? 1.1 : 1 }}>
                {hasComment ? (
                  <FaComment
                    className="text-xl text-neutral-400 cursor-pointer"
                    onClick={() => toggleIcon("hasComment")}
                  />
                ) : (
                  <FaRegComment
                    className="text-xl text-neutral-400 cursor-pointer"
                    onClick={() => toggleIcon("hasComment")}
                  />
                )}{" "}
              </motion.div>
              <motion.div animate={{ scale: isSent ? 1.1 : 1 }}>
                {isSent ? (
                  <FaPaperPlane
                    className="text-xl text-blue-500 cursor-pointer"
                    onClick={() => toggleIcon("isSent")}
                  />
                ) : (
                  <FaRegPaperPlane
                    className="text-xl text-neutral-400 cursor-pointer"
                    onClick={() => toggleIcon("isSent")}
                  />
                )}{" "}
              </motion.div>
            </div>
            <motion.div animate={{ scale: hasBookmarked ? 1.1 : 1 }}>
              {hasBookmarked ? (
                <FaBookmark
                  className="text-xl text-neutral-400 cursor-pointer"
                  onClick={() => toggleIcon("hasBookmarked")}
                />
              ) : (
                <FaRegBookmark
                  className="text-xl text-neutral-400 cursor-pointer"
                  onClick={() => toggleIcon("hasBookmarked")}
                />
              )}
            </motion.div>
          </div>
          <div className="text-neutral-400 text-sm pt-1">230k likes</div>
          <div className="text-neutral-400 text-sm pt-1">
            <span className="text-normal text-white font-semibold">
              itsShri
            </span>{" "}
            Generated this image using gemini model.
          </div>
          <div className="text-neutral-400 text-sm pt-1 hover:underline">
            View All Comments
          </div>
        </div>
      </div>
      <PostModal isOpen={isOpenModal} closeModal={closeModal} />
    </>
  );
};

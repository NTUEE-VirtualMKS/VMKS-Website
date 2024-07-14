import React from "react";
import "./styles.css";
import Chip from "../../../Common/Chip";
import { Link } from "react-router-dom";

// Exporting the Blog type so we can use it in other files
export interface BlogData {
  id: string;
  description: string;
  title: string;
  createdAt: string; // or Date if you're using a Date object
  authorName: string;
  authorAvatar: string; // Should this be authorAvatar?
  subCategory: string[];
  category: string;
  cover: string;
}

interface BlogItemProps {
  blog: BlogData;
}

const BlogItem: React.FC<BlogItemProps> = ({
  blog: {
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    category,
    subCategory,
    cover,
  },
}) => {
  return (
    <div className="blogItem-wrap">
      <img className="blogItem-cover" src={cover} alt="cover" />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className="blogItem-desc">{description}</p>
      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className="blogItem-link" to={`/forum/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;

import type {PostItemProps} from "../../types/types.ts";
import * as React from "react";

export const PostItem: React.FC<PostItemProps> = ({post}) => (
    <div key={post.id} className="post">
        <h3>{post.username}</h3>
        <p style={{color: 'black'}}>{post.postText}</p>
    </div>
);
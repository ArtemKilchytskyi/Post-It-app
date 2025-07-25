import type {PostFormProps} from "../../types/types.ts";
import * as React from "react";

export const PostForm: React.FC<PostFormProps> = ({
                                                      username,
                                                      postText,
                                                      isSubmitting,
                                                      onUsernameChange,
                                                      onPostTextChange,
                                                      onSubmit
                                                  }) => {


    return (
        <form onSubmit={onSubmit} className="post-form">
            <input
                type="text"
                placeholder="Your username"
                value={username}
                onChange={onUsernameChange}
                disabled={isSubmitting}
            />
            <textarea
                placeholder="Write your post..."
                value={postText}
                onChange={onPostTextChange}
                disabled={isSubmitting}
            />
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Posting...' : 'Submit Post'}
            </button>
        </form>
    )
}
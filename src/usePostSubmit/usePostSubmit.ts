import {useState} from 'react';
import {postsApi} from '../posts.api.ts';

import type {CreatePostData} from "../types/types.ts";
import type {UsePostSubmit} from "../types/types.ts";


export const usePostSubmit = (onSuccess: () => void): UsePostSubmit => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleSubmit = async (username: string, postText: string): Promise<boolean> => {
        if (!username.trim() || !postText.trim()) {
            alert('Please fill in both username and post text');
            return false;
        }

        setIsSubmitting(true);

        try {
            const postData: CreatePostData = {
                username,
                postText,
            };

            await postsApi.createPost(postData);
            onSuccess();
            return true;
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post. Please try again.');
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        isSubmitting,
        handleSubmit
    };
};
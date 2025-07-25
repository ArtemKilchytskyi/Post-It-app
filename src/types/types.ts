import * as React from "react";

export interface PostResponse {
    username: string;
    postText: string;
    id: string;
}

export interface CreatePostData {
    username: string;
    postText: string;
}

export interface PostFormProps {
    username: string;
    postText: string;
    isSubmitting: boolean;
    onUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPostTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: (e: React.FormEvent) => Promise<void>;
}

export interface PostItemProps {
    post: PostResponse;
}

export interface UsePostSubmit {
    isSubmitting: boolean;
    handleSubmit: (username: string, postText: string) => Promise<boolean>;
}
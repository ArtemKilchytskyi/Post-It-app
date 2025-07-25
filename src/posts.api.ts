import type {PostResponse, CreatePostData} from "./types/types.ts";

const API_BASE_URL = 'https://post-it.gyorgy-varga-b81.workers.dev';

export const postsApi = {
    async fetchPosts(): Promise<PostResponse[]> {
        const response = await fetch(`${API_BASE_URL}/list`);
        if (!response.ok) throw new Error('Failed to fetch posts');
        return response.json();
    },

    async createPost(data: CreatePostData): Promise<void> {
        const response = await fetch(`${API_BASE_URL}/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error('Failed to create post');
    }
};
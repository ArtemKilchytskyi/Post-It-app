import * as React from "react";

import {useState, useEffect} from 'react'

import {PostForm} from "./components/PostForm/PostForm.tsx";
import {PostItem} from "./components/PostItem/PostItem.tsx";
import {usePostSubmit} from "./usePostSubmit/usePostSubmit.ts";

import type {PostResponse} from "./types/types.ts";
import type {ChangeEvent} from 'react';

import {postsApi} from "./posts.api.ts";
import './App.css'


function App() {
    const [posts, setPosts] = useState<PostResponse[]>([]);
    const [username, setUsername] = useState<string>('');
    const [postText, setPostText] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const fetchPosts = async (): Promise<void> => {

        try {
            setIsLoading(true);
            const data = await postsApi.fetchPosts();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
            alert('Failed to fetch posts. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        fetchPosts();
    }, []);


    const {isSubmitting, handleSubmit} = usePostSubmit(() => {
        setUsername('');
        setPostText('');
        fetchPosts()
    });

    const onSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        await handleSubmit(username, postText);
    };

    const usernameInput = (e: ChangeEvent<HTMLInputElement>): void => {
        setUsername(e.target.value);
    };


    const postTextInput = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setPostText(e.target.value)
    }


    return (
        <div className="app-container">
            <h1>Post It</h1>

            <PostForm
                username={username}
                postText={postText}
                isSubmitting={isSubmitting}
                onUsernameChange={usernameInput}
                onPostTextChange={postTextInput}
                onSubmit={onSubmit}
            />

            <div className="posts-list">
                <h2>{!isLoading && 'Recent Posts'}</h2>
                <span>{isLoading && 'loading...'}</span>
                {posts.map((post) => (
                    <PostItem key={post.id} post={post}/>
                ))}
            </div>
        </div>
    )
}

export default App
import { server } from "../axios/server";


export const getAllPosts = async () => {
    try {
      const response = await server.get('/auth/posts/all');
      return response.data;
    } catch (error) {
      // Handle error
      console.error('Error fetching posts:', error);
      throw error;
    }
  };
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

  export const createPosts = async (walletId: string, prompt: string) => {
    try {
      const response = await server.post('/auth/create-post', {
        wallet_id: walletId,
        prompt: prompt
      });
      return response.data;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  };
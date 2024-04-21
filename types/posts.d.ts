interface Post {
    id: number;
    userId: number;
    imageURL: string;
    prompt: string;
    user: {
        id: number;
        walletId: string;
        name: string;
        profile_pic: string;
    };
}

interface Response {
    status: string;
    user: Post[];
}
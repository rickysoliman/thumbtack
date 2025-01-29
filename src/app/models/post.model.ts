export interface Post {
    id: string;            // Unique identifier for the post
    board: string;         // The equivalent of a subreddit (e.g., "tech", "music")
    title: string;         // Title of the post
    content: string;       // Main content of the post
    author: string;        // The user who created the post
    createdAt: Date;       // Date when the post was created
    updatedAt: Date;       // Date when the post was last updated
    upvotes: number;       // Number of upvotes the post has received
    downvotes: number;     // Number of downvotes the post has received
    commentsCount: number; // Number of comments on the post
    isPinned: boolean;     // Whether the post is pinned to the top of the board
    isArchived: boolean;   // Whether the post is archived or deleted
  }
  
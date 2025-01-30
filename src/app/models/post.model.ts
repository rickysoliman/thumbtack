export interface Post {
    id: string;            // Unique identifier for the post
    board: string;         // The equivalent of a subreddit (e.g., "tech", "music")
    title: string;         // Title of the post
    content: string;       // Main content of the post
    image?: string;        // url of image if post contains an image
    author: string;        // The user who created the post
    createdAt: Date;       // Date when the post was created
    updatedAt: Date;       // Date when the post was last updated
    likes: number;         // Number of likes the post has received
    dislikes: number;      // Number of dislikes the post has received
    commentsCount: number; // Number of comments on the post
    isPinned: boolean;     // Whether the post is pinned to the top of the board
    isArchived: boolean;   // Whether the post is archived or deleted
}

// dummy data
export const dummyPosts: Post[] = [
    {
      id: '1',
      board: 'b/tech',
      title: 'How to Build a React App',
      content: 'In this post, I will guide you through building a React app from scratch...',
      image: 'https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg',
      author: 'user1',
      createdAt: new Date('2025-01-01T10:00:00'),
      updatedAt: new Date('2025-01-02T12:00:00'),
      likes: 125,
      dislikes: 3,
      commentsCount: 20,
      isPinned: false,
      isArchived: false,
    },
    {
      id: '2',
      board: 'b/music',
      title: 'Top 10 Emo Songs of 2024',
      content: 'Here are the top 10 emo songs of the year according to my personal list...',
      image: 'https://variety.com/wp-content/uploads/2022/10/Best-Emo-Bands.jpg?w=1000&h=562&crop=1',
      author: 'user2',
      createdAt: new Date('2025-01-05T08:30:00'),
      updatedAt: new Date('2025-01-06T09:00:00'),
      likes: 250,
      dislikes: 15,
      commentsCount: 50,
      isPinned: true,
      isArchived: false,
    },
    {
      id: '3',
      board: 'b/gaming',
      title: 'Best Indie Games to Play in 2025',
      content: 'If you love indie games, here are the top picks for this year...',
      author: 'user3',
      createdAt: new Date('2025-01-10T14:00:00'),
      updatedAt: new Date('2025-01-12T16:30:00'),
      likes: 85,
      dislikes: 8,
      commentsCount: 12,
      isPinned: false,
      isArchived: false,
    },
    {
      id: '4',
      board: 'b/fitness',
      title: 'How to Build Muscle at Home',
      content: 'No gym? No problem! Here’s how you can build muscle using bodyweight exercises...',
      image: 'https://i.ytimg.com/vi/95846CBGU0M/sddefault.jpg',
      author: 'user4',
      createdAt: new Date('2025-01-15T11:00:00'),
      updatedAt: new Date('2025-01-16T13:15:00'),
      likes: 65,
      dislikes: 2,
      commentsCount: 8,
      isPinned: false,
      isArchived: true, // Archived post
    },
    {
      id: '5',
      board: 'b/movies',
      title: 'Best Movies of 2024',
      content: 'Here’s a roundup of the best movies that hit the theaters last year...',
      author: 'user5',
      createdAt: new Date('2025-01-20T16:45:00'),
      updatedAt: new Date('2025-01-21T17:30:00'),
      likes: 200,
      dislikes: 5,
      commentsCount: 40,
      isPinned: false,
      isArchived: false,
    },
  ];
  
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
    createdAt: new Date('2024-01-01T10:00:00'),
    updatedAt: new Date('2024-01-02T12:00:00'),
    likes: 125,
    dislikes: 3,
    commentsCount: 20,
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
  },
  {
    id: '6',
    board: 'b/cooking',
    title: '5 Easy Dinner Recipes for Beginners',
    content: 'Here are five simple recipes anyone can make at home...',
    image: 'https://www.budgetbytes.com/wp-content/uploads/2023/02/Easy-Recipes-for-Beginners-800x600.png',
    author: 'user6',
    createdAt: new Date('2025-01-22T10:15:00'),
    updatedAt: new Date('2025-01-23T12:45:00'),
    likes: 95,
    dislikes: 4,
    commentsCount: 18,
  },
  {
    id: '7',
    board: 'b/science',
    title: 'Breakthroughs in AI Research',
    content: 'Scientists have developed a new AI model that can predict natural disasters...',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVidy4QRlpRoxW4oL5oT247ufYKe7D7Hy8eg&s',
    author: 'user7',
    createdAt: new Date('2025-01-25T09:30:00'),
    updatedAt: new Date('2025-01-26T14:20:00'),
    likes: 320,
    dislikes: 10,
    commentsCount: 65,
  },
  {
    id: '8',
    board: 'b/travel',
    title: 'Top 5 Budget Travel Destinations',
    content: 'Looking for affordable yet breathtaking travel destinations? Here are my top picks...',
    image: 'https://i.ytimg.com/vi/phCWhnn49-8/maxresdefault.jpg',
    author: 'user8',
    createdAt: new Date('2025-01-27T18:00:00'),
    updatedAt: new Date('2025-01-28T09:30:00'),
    likes: 175,
    dislikes: 6,
    commentsCount: 30,
  },
  {
    id: '9',
    board: 'b/books',
    title: 'Best Sci-Fi Novels to Read in 2025',
    content: 'If you love sci-fi, check out these must-read books for 2025...',
    author: 'user9',
    createdAt: new Date('2025-01-28T12:30:00'),
    updatedAt: new Date('2025-01-29T14:00:00'),
    likes: 220,
    dislikes: 9,
    commentsCount: 38,
  },
  {
    id: '10',
    board: 'b/space',
    title: 'NASA’s Latest Mars Mission Explained',
    content: 'NASA’s new rover is set to explore the Martian surface with groundbreaking technology...',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIZNKILMN0zlYZWfq2CDwFCcRtvxhaCJRGQ&s',
    author: 'user10',
    createdAt: new Date('2025-01-29T07:00:00'),
    updatedAt: new Date('2025-01-29T11:00:00'),
    likes: 500,
    dislikes: 20,
    commentsCount: 100,
  }
];

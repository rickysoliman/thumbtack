export interface Post {
  id: string; // Unique identifier for the post
  board: string; // The equivalent of a subreddit (e.g., "tech", "music")
  title: string; // Title of the post
  content: string; // Main content of the post
  image?: string; // url of image if post contains an image
  author: string; // The user who created the post
  createdAt: Date; // Date when the post was created
  updatedAt: Date; // Date when the post was last updated
  likes: number; // Number of likes the post has received
  dislikes: number; // Number of dislikes the post has received
  commentsCount: number; // Number of comments on the post
}

// dummy data
export const dummyPosts: Post[] = [
  {
    id: '1',
    board: 'b/spiderman',
    title: 'What do you guys think of the Spider-Man 2 game for PS5?',
    content:
      'I just finished it, and WOW! The web-swinging feels smoother than ever. What are your thoughts?',
    image:
      'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/e66c4ae18c5d8e3986a24599b293162a6f5c9eba22968d2c.jpg',
    author: 'spideyfan89',
    createdAt: new Date('2025-02-01T12:00:00'),
    updatedAt: new Date('2025-02-01T14:00:00'),
    likes: 320,
    dislikes: 15,
    commentsCount: 45,
  },
  {
    id: '2',
    board: 'b/godzilla',
    title: 'Is Godzilla x Kong: The New Empire gonna be any good?',
    content:
      'I saw the trailer, and it looks insane. But will it actually be a good movie, or just mindless CGI fights?',
    image:
      'https://m.media-amazon.com/images/M/MV5BMjNlY2UxYTMtYzMzNC00ZGEyLTk4ODUtNTI3ODYxOTY2OWY4XkEyXkFqcGdeQWFybm8@._V1_QL75_UX500_CR0,0,500,281_.jpg',
    author: 'kaijuKing',
    createdAt: new Date('2025-02-02T15:30:00'),
    updatedAt: new Date('2025-02-02T16:00:00'),
    likes: 280,
    dislikes: 12,
    commentsCount: 65,
  },
  {
    id: '3',
    board: 'b/NewDads',
    title: 'Best baby monitors in 2025?',
    content:
      'My little one just started rolling around a lot. Any recommendations for a solid baby monitor with video?',
    author: 'firsttimedad',
    createdAt: new Date('2025-02-03T08:45:00'),
    updatedAt: new Date('2025-02-03T09:30:00'),
    likes: 140,
    dislikes: 3,
    commentsCount: 20,
  },
  {
    id: '4',
    board: 'b/supersmashbros',
    title: 'Who’s your main in Smash Ultimate?',
    content:
      "I've been maining Captain Falcon forever, but I'm trying to pick up Sephiroth. Who do you main?",
    author: 'smashgod',
    createdAt: new Date('2025-02-04T19:20:00'),
    updatedAt: new Date('2025-02-04T20:10:00'),
    likes: 315,
    dislikes: 10,
    commentsCount: 55,
  },
  {
    id: '5',
    board: 'b/programming',
    title: 'Is TypeScript worth learning in 2025?',
    content:
      "I'm a junior dev, mostly using JavaScript. Should I invest time into learning TypeScript?",
    author: 'dev_n00b',
    createdAt: new Date('2025-02-05T14:30:00'),
    updatedAt: new Date('2025-02-05T15:45:00'),
    likes: 210,
    dislikes: 5,
    commentsCount: 30,
  },
  {
    id: '6',
    board: 'b/memes',
    title: 'Programmers trying to fix a bug at 3 AM',
    content: 'Every time I think I solved it, another error pops up. 😂',
    image: 'https://i.redd.it/mdjsol1eiad11.jpg',
    author: 'meme_wizard',
    createdAt: new Date('2025-02-06T22:00:00'),
    updatedAt: new Date('2025-02-06T22:15:00'),
    likes: 500,
    dislikes: 2,
    commentsCount: 80,
  },
  {
    id: '7',
    board: 'b/chatgpt',
    title: 'Does ChatGPT actually help with coding?',
    content:
      "I've used it for debugging, but how do you guys integrate it into your workflow?",
    author: 'AIcoder',
    createdAt: new Date('2025-02-07T10:00:00'),
    updatedAt: new Date('2025-02-07T11:00:00'),
    likes: 190,
    dislikes: 7,
    commentsCount: 35,
  },
  {
    id: '8',
    board: 'b/spiderman',
    title: 'Tobey, Andrew, or Tom: Who is YOUR Spider-Man?',
    content:
      "Classic debate: Who portrayed Spider-Man the best? Let's hear it!",
    image:
      'https://sm.mashable.com/t/mashable_me/photo/default/andrew-garfield-tobey-maguire-tom-holland_u2aj.1248.jpg',
    author: 'webhead',
    createdAt: new Date('2025-02-08T16:45:00'),
    updatedAt: new Date('2025-02-08T17:30:00'),
    likes: 450,
    dislikes: 10,
    commentsCount: 100,
  },
  {
    id: '9',
    board: 'b/godzilla',
    title: 'Best Godzilla fight scene of all time?',
    content: 'For me, it’s Shin Godzilla’s atomic beam sequence. What’s yours?',
    author: 'atomicbreath',
    createdAt: new Date('2025-02-09T12:00:00'),
    updatedAt: new Date('2025-02-09T12:30:00'),
    likes: 180,
    dislikes: 5,
    commentsCount: 40,
  },
  {
    id: '10',
    board: 'b/NewDads',
    title: 'How do you guys handle sleep regression?',
    content:
      'My 9-month-old went from sleeping fine to waking up every 2 hours. Any tips?',
    author: 'sleepdeprived',
    createdAt: new Date('2025-02-10T23:15:00'),
    updatedAt: new Date('2025-02-10T23:45:00'),
    likes: 120,
    dislikes: 2,
    commentsCount: 25,
  },
  {
    id: '11',
    board: 'b/supersmashbros',
    title: 'They NEED to nerf Steve!',
    content: 'Dude is ridiculous. His combos are unfair. Do you agree?',
    author: 'steveisbroken',
    createdAt: new Date('2025-02-11T18:30:00'),
    updatedAt: new Date('2025-02-11T19:00:00'),
    likes: 270,
    dislikes: 20,
    commentsCount: 50,
  },
  {
    id: '12',
    board: 'b/programming',
    title: 'Frontend vs Backend: Which career path is better?',
    content:
      "I'm trying to decide which path to specialize in. What are the pros and cons of each?",
    author: 'techcurious',
    createdAt: new Date('2025-02-12T10:45:00'),
    updatedAt: new Date('2025-02-12T11:30:00'),
    likes: 225,
    dislikes: 6,
    commentsCount: 48,
  },
  {
    id: '13',
    board: 'b/memes',
    title: 'Me explaining my code to my rubber duck',
    content: 'It makes sense in my head... 😂',
    image:
      'https://preview.redd.it/bestwaytounderstandyourcode-v0-wrc442i1e12c1.png?auto=webp&s=cc23d0f32ea44bc45d6bd216d5e91170c28ffb70',
    author: 'rubberduckdev',
    createdAt: new Date('2025-02-13T21:15:00'),
    updatedAt: new Date('2025-02-13T22:00:00'),
    likes: 600,
    dislikes: 3,
    commentsCount: 90,
  },
];

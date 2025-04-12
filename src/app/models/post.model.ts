// calling this interface Reply instead of Comment because Comment is an already existing type
export interface Reply {
  id: string; // Unique identifier for the comment
  postId: string; // The ID of the post this comment belongs to
  author: string; // The user who created the comment
  createdAt: Date; // Date when the comment was created
  updatedAt: Date; // Date when the comment was last updated
  ups: number; // Number of likes the comment has received
  downs: number; // Number of dislikes the comment has received
  repliesCount: number; // Number of replies to this comment
  parentId?: string; // The ID of the parent comment if this is a reply
  content: string; // The content of the comment
  replies: Reply[]; // Array of replies to this comment
}

export interface Post {
  approved_at_utc: number | null;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: string | null;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: any[]; // Can be improved if structure is known
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: string | null;
  downs: number;
  thumbnail_height: number | null;
  top_awarded_type: string | null;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  upvote_ratio: number;
  author_flair_background_color: string | null;
  subreddit_type: string;
  ups: number;
  total_awards_received: number;
  media_embed: Record<string, any>;
  thumbnail_width: number | null;
  author_flair_template_id: string | null;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: {
    reddit_video?: RedditVideo;
  } | null;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: string | null;
  secure_media_embed: Record<string, any>;
  link_flair_text: string | null;
  can_mod_post: boolean;
  score: number;
  approved_by: string | null;
  is_created_from_ads_ui: boolean;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean | number;
  author_flair_css_class: string | null;
  author_flair_richtext: any[];
  gildings: Record<string, number>;
  post_hint?: string;
  content_categories: string[] | null;
  is_self: boolean;
  mod_note: string | null;
  created: number;
  link_flair_type: string;
  wls: number;
  removed_by_category: string | null;
  banned_by: string | null;
  author_flair_type: string;
  domain: string;
  allow_live_comments: boolean;
  selftext_html: string | null;
  likes: boolean | null;
  suggested_sort: string | null;
  banned_at_utc: number | null;
  url_overridden_by_dest?: string;
  view_count: number | null;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview?: {
    images: {
      source: ImageSource;
      resolutions: ImageSource[];
      variants: Record<string, any>;
      id: string;
    }[];
    enabled: boolean;
  };
  all_awardings: any[];
  awarders: any[];
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: string | null;
  treatment_tags: string[];
  visited: boolean;
  removed_by: string | null;
  num_reports: number | null;
  distinguished: string | null;
  subreddit_id: string;
  author_is_blocked: boolean;
  mod_reason_by: string | null;
  removal_reason: string | null;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: string | null;
  author: string;
  discussion_type: string | null;
  num_comments: number;
  send_replies: boolean;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color: string | null;
  permalink: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: {
    reddit_video: RedditVideo;
  };
  is_video: boolean;
}

export interface RedditVideo {
  bitrate_kbps: number;
  fallback_url: string;
  has_audio: boolean;
  height: number;
  width: number;
  scrubber_media_url: string;
  dash_url: string;
  duration: number;
  hls_url: string;
  is_gif: boolean;
  transcoding_status: string;
}

export interface ImageSource {
  url: string;
  width: number;
  height: number;
}

// dummy data
// export const dummyPosts: Post[] = [
//   {
//     id: '1',
//     board: 'spiderman',
//     title: 'What do you guys think of the Spider-Man 2 game for PS5?',
//     content:
//       'I just finished it, and WOW! The web-swinging feels smoother than ever. What are your thoughts?',
//     image:
//       'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/e66c4ae18c5d8e3986a24599b293162a6f5c9eba22968d2c.jpg',
//     author: 'spideyfan89',
//     createdAt: new Date('2025-02-01T12:00:00'),
//     updatedAt: new Date('2025-02-01T14:00:00'),
//     likes: 320,
//     dislikes: 15,
//     commentsCount: 2,
//     comments: [
//       {
//         id: '1',
//         postId: '1',
//         author: 'webslinger',
//         createdAt: new Date('2025-02-01T12:30:00'),
//         updatedAt: new Date('2025-02-01T13:00:00'),
//         likes: 50,
//         dislikes: 2,
//         repliesCount: 1,
//         content: 'I loved the story! The character development was top-notch.',
//         replies: [
//           {
//             id: '3',
//             postId: '1',
//             author: 'spideyfan89',
//             createdAt: new Date('2025-02-01T12:45:00'),
//             updatedAt: new Date('2025-02-01T13:15:00'),
//             likes: 30,
//             dislikes: 1,
//             repliesCount: 0,
//             content: 'I agree! It was awesome!',
//             replies: [],
//           },
//         ],
//       },
//       {
//         id: '2',
//         postId: '1',
//         author: 'gamerdude',
//         createdAt: new Date('2025-02-01T12:35:00'),
//         updatedAt: new Date('2025-02-01T13:10:00'),
//         likes: 20,
//         dislikes: 5,
//         repliesCount: 1,
//         content:
//           'Eh, I thought it was okay. The combat felt repetitive after a while.',
//         replies: [
//           {
//             id: '4',
//             postId: '1',
//             author: 'webslinger',
//             createdAt: new Date('2025-02-01T12:50:00'),
//             updatedAt: new Date('2025-02-01T13:20:00'),
//             likes: 15,
//             dislikes: 3,
//             repliesCount: 0,
//             content: 'I get what you mean, but the boss fights made up for it!',
//             replies: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: '2',
//     board: 'godzilla',
//     title: 'Is Godzilla x Kong: The New Empire gonna be any good?',
//     content:
//       'I saw the trailer, and it looks insane. But will it actually be a good movie, or just mindless CGI fights?',
//     image:
//       'https://m.media-amazon.com/images/M/MV5BMjNlY2UxYTMtYzMzNC00ZGEyLTk4ODUtNTI3ODYxOTY2OWY4XkEyXkFqcGdeQWFybm8@._V1_QL75_UX500_CR0,0,500,281_.jpg',
//     author: 'kaijuKing',
//     createdAt: new Date('2025-02-02T15:30:00'),
//     updatedAt: new Date('2025-02-02T16:00:00'),
//     likes: 280,
//     dislikes: 12,
//     commentsCount: 5,
//     comments: [
//       {
//         id: '1',
//         postId: '2',
//         author: 'zillaFan98',
//         createdAt: new Date('2025-02-02T15:45:00'),
//         updatedAt: new Date('2025-02-02T16:10:00'),
//         likes: 60,
//         dislikes: 5,
//         repliesCount: 2,
//         content:
//           "Come on, it's a MonsterVerse movie. You don’t go in expecting Oscar-worthy storytelling. Just enjoy the kaiju fights!",
//         replies: [
//           {
//             id: '3',
//             postId: '2',
//             author: 'kaijuKing',
//             createdAt: new Date('2025-02-02T16:15:00'),
//             updatedAt: new Date('2025-02-02T16:30:00'),
//             likes: 35,
//             dislikes: 1,
//             repliesCount: 0,
//             content: 'Fair point. As long as the fights are epic, I’m happy!',
//             replies: [
//               {
//                 id: '4',
//                 postId: '2',
//                 author: 'mechaG',
//                 createdAt: new Date('2025-02-02T16:20:00'),
//                 updatedAt: new Date('2025-02-02T16:40:00'),
//                 likes: 20,
//                 dislikes: 3,
//                 repliesCount: 0,
//                 content:
//                   'Exactly! Plus, the new Titan designs look insane. I’m hyped.',
//                 replies: [],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         id: '2',
//         postId: '2',
//         author: 'cinemaCritic',
//         createdAt: new Date('2025-02-02T15:50:00'),
//         updatedAt: new Date('2025-02-02T16:20:00'),
//         likes: 40,
//         dislikes: 12,
//         repliesCount: 1,
//         content:
//           'I wish these movies had better scripts. Feels like wasted potential.',
//         replies: [
//           {
//             id: '5',
//             postId: '2',
//             author: 'zillaFan98',
//             createdAt: new Date('2025-02-02T16:25:00'),
//             updatedAt: new Date('2025-02-02T16:45:00'),
//             likes: 18,
//             dislikes: 6,
//             repliesCount: 0,
//             content:
//               'I get that, but honestly, as long as the action is fun, I don’t mind a weak plot.',
//             replies: [],
//           },
//         ],
//       },
//       {
//         id: '6',
//         postId: '2',
//         author: 'monsterlover',
//         createdAt: new Date('2025-02-02T16:00:00'),
//         updatedAt: new Date('2025-02-02T16:30:00'),
//         likes: 50,
//         dislikes: 4,
//         repliesCount: 0,
//         content:
//           "The CGI in the trailer looks incredible. Kong's new look is badass!",
//         replies: [],
//       },
//     ],
//   },
//   {
//     id: '3',
//     board: 'NewDads',
//     title: 'Best baby monitors in 2025?',
//     content:
//       'My little one just started rolling around a lot. Any recommendations for a solid baby monitor with video?',
//     author: 'firsttimedad',
//     createdAt: new Date('2025-02-03T08:45:00'),
//     updatedAt: new Date('2025-02-03T09:30:00'),
//     likes: 140,
//     dislikes: 3,
//     commentsCount: 4,
//     comments: [
//       {
//         id: '1',
//         postId: '3',
//         author: 'techdad42',
//         createdAt: new Date('2025-02-03T09:00:00'),
//         updatedAt: new Date('2025-02-03T09:20:00'),
//         likes: 35,
//         dislikes: 1,
//         repliesCount: 2,
//         content:
//           'The Nanit Pro is fantastic. Crystal clear video, sleep tracking, and great mobile app support.',
//         replies: [
//           {
//             id: '3',
//             postId: '3',
//             author: 'firsttimedad',
//             createdAt: new Date('2025-02-03T09:25:00'),
//             updatedAt: new Date('2025-02-03T09:45:00'),
//             likes: 12,
//             dislikes: 0,
//             repliesCount: 0,
//             content:
//               'That looks really solid. Is the sleep tracking actually useful?',
//             replies: [
//               {
//                 id: '4',
//                 postId: '3',
//                 author: 'techdad42',
//                 createdAt: new Date('2025-02-03T09:50:00'),
//                 updatedAt: new Date('2025-02-03T10:00:00'),
//                 likes: 10,
//                 dislikes: 1,
//                 repliesCount: 0,
//                 content:
//                   'Yeah, it gives good insights into sleep patterns, though you don’t *need* it. The video quality alone is worth it.',
//                 replies: [],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         id: '2',
//         postId: '3',
//         author: 'momapproved',
//         createdAt: new Date('2025-02-03T09:10:00'),
//         updatedAt: new Date('2025-02-03T09:35:00'),
//         likes: 28,
//         dislikes: 2,
//         repliesCount: 1,
//         content:
//           'I really like the Eufy SpaceView. No Wi-Fi needed, just a solid connection and great battery life.',
//         replies: [
//           {
//             id: '5',
//             postId: '3',
//             author: 'firsttimedad',
//             createdAt: new Date('2025-02-03T09:40:00'),
//             updatedAt: new Date('2025-02-03T09:55:00'),
//             likes: 8,
//             dislikes: 0,
//             repliesCount: 0,
//             content:
//               'That’s interesting! I was leaning toward a Wi-Fi model, but a local connection sounds more reliable.',
//             replies: [],
//           },
//         ],
//       },
//       {
//         id: '6',
//         postId: '3',
//         author: 'budgetdad',
//         createdAt: new Date('2025-02-03T09:20:00'),
//         updatedAt: new Date('2025-02-03T09:50:00'),
//         likes: 22,
//         dislikes: 0,
//         repliesCount: 0,
//         content:
//           'If you don’t want to break the bank, the VTech VM819 is solid. Good range, battery lasts forever.',
//         replies: [],
//       },
//     ],
//   },
//   {
//     id: '4',
//     board: 'supersmashbros',
//     title: 'Who’s your main in Smash Ultimate?',
//     content:
//       "I've been maining Captain Falcon forever, but I'm trying to pick up Sephiroth. Who do you main?",
//     author: 'smashgod',
//     createdAt: new Date('2025-02-04T19:20:00'),
//     updatedAt: new Date('2025-02-04T20:10:00'),
//     likes: 315,
//     dislikes: 10,
//     commentsCount: 55,
//     comments: [],
//   },
//   {
//     id: '5',
//     board: 'programming',
//     title: 'Is TypeScript worth learning in 2025?',
//     content:
//       "I'm a junior dev, mostly using JavaScript. Should I invest time into learning TypeScript?",
//     author: 'dev_n00b',
//     createdAt: new Date('2025-02-05T14:30:00'),
//     updatedAt: new Date('2025-02-05T15:45:00'),
//     likes: 210,
//     dislikes: 5,
//     commentsCount: 30,
//     comments: [],
//   },
//   {
//     id: '6',
//     board: 'memes',
//     title: 'Programmers trying to fix a bug at 3 AM',
//     content: 'Every time I think I solved it, another error pops up. 😂',
//     image: 'https://i.redd.it/mdjsol1eiad11.jpg',
//     author: 'meme_wizard',
//     createdAt: new Date('2025-02-06T22:00:00'),
//     updatedAt: new Date('2025-02-06T22:15:00'),
//     likes: 500,
//     dislikes: 2,
//     commentsCount: 80,
//     comments: [],
//   },
//   {
//     id: '7',
//     board: 'chatgpt',
//     title: 'Does ChatGPT actually help with coding?',
//     content:
//       "I've used it for debugging, but how do you guys integrate it into your workflow?",
//     author: 'AIcoder',
//     createdAt: new Date('2025-02-07T10:00:00'),
//     updatedAt: new Date('2025-02-07T11:00:00'),
//     likes: 190,
//     dislikes: 7,
//     commentsCount: 35,
//     comments: [],
//   },
//   {
//     id: '8',
//     board: 'spiderman',
//     title: 'Tobey, Andrew, or Tom: Who is YOUR Spider-Man?',
//     content:
//       "Classic debate: Who portrayed Spider-Man the best? Let's hear it!",
//     image:
//       'https://sm.mashable.com/t/mashable_me/photo/default/andrew-garfield-tobey-maguire-tom-holland_u2aj.1248.jpg',
//     author: 'webhead',
//     createdAt: new Date('2025-02-08T16:45:00'),
//     updatedAt: new Date('2025-02-08T17:30:00'),
//     likes: 450,
//     dislikes: 10,
//     commentsCount: 100,
//     comments: [],
//   },
//   {
//     id: '9',
//     board: 'godzilla',
//     title: 'Best Godzilla fight scene of all time?',
//     content: 'For me, it’s Shin Godzilla’s atomic beam sequence. What’s yours?',
//     author: 'atomicbreath',
//     createdAt: new Date('2025-02-09T12:00:00'),
//     updatedAt: new Date('2025-02-09T12:30:00'),
//     likes: 180,
//     dislikes: 5,
//     commentsCount: 40,
//     comments: [],
//   },
//   {
//     id: '10',
//     board: 'NewDads',
//     title: 'How do you guys handle sleep regression?',
//     content:
//       'My 9-month-old went from sleeping fine to waking up every 2 hours. Any tips?',
//     author: 'sleepdeprived',
//     createdAt: new Date('2025-02-10T23:15:00'),
//     updatedAt: new Date('2025-02-10T23:45:00'),
//     likes: 120,
//     dislikes: 2,
//     commentsCount: 25,
//     comments: [],
//   },
//   {
//     id: '11',
//     board: 'supersmashbros',
//     title: 'They NEED to nerf Steve!',
//     content: 'Dude is ridiculous. His combos are unfair. Do you agree?',
//     author: 'steveisbroken',
//     createdAt: new Date('2025-02-11T18:30:00'),
//     updatedAt: new Date('2025-02-11T19:00:00'),
//     likes: 270,
//     dislikes: 20,
//     commentsCount: 50,
//     comments: [],
//   },
//   {
//     id: '12',
//     board: 'programming',
//     title: 'Frontend vs Backend: Which career path is better?',
//     content:
//       "I'm trying to decide which path to specialize in. What are the pros and cons of each?",
//     author: 'techcurious',
//     createdAt: new Date('2025-02-12T10:45:00'),
//     updatedAt: new Date('2025-02-12T11:30:00'),
//     likes: 225,
//     dislikes: 6,
//     commentsCount: 48,
//     comments: [],
//   },
//   {
//     id: '13',
//     board: 'memes',
//     title: 'Me explaining my code to my rubber duck',
//     content: 'It makes sense in my head... 😂',
//     image:
//       'https://preview.redd.it/bestwaytounderstandyourcode-v0-wrc442i1e12c1.png?auto=webp&s=cc23d0f32ea44bc45d6bd216d5e91170c28ffb70',
//     author: 'rubberduckdev',
//     createdAt: new Date('2025-02-13T21:15:00'),
//     updatedAt: new Date('2025-02-13T22:00:00'),
//     likes: 600,
//     dislikes: 3,
//     commentsCount: 90,
//     comments: [],
//   },
//   {
//     id: '14',
//     board: 'chatgpt',
//     title: 'How accurate are ChatGPT predictions?',
//     content:
//       "I've been testing out ChatGPT's code recommendations. Has anyone encountered any major issues or surprising accuracies?",
//     author: 'aitechtalk',
//     createdAt: new Date('2025-02-14T11:00:00'),
//     updatedAt: new Date('2025-02-14T11:30:00'),
//     likes: 165,
//     dislikes: 4,
//     commentsCount: 28,
//     comments: [],
//   },
//   {
//     id: '15',
//     board: 'spiderman',
//     title: 'Anyone excited for the upcoming Spider-Man fan art contest?',
//     content:
//       "I've seen some awesome sketches already. Who's planning to enter and what style are you going for?",
//     image:
//       'https://i.redd.it/the-friendly-neighborhood-spider-man-fanart-by-me-v0-9hq9bxqx76ga1.png?width=3000&format=png&auto=webp&s=02229b163f8b27cbcf27b9b8e1895bd65c9d9fac',
//     author: 'artisticspidey',
//     createdAt: new Date('2025-02-15T14:20:00'),
//     updatedAt: new Date('2025-02-15T15:00:00'),
//     likes: 210,
//     dislikes: 8,
//     commentsCount: 37,
//     comments: [],
//   },
//   {
//     id: '16',
//     board: 'godzilla',
//     title: 'What’s your favorite kaiju moment in the Godzilla franchise?',
//     content:
//       "From epic battles to surprising character moments, let's discuss the best parts of the series!",
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7SFm9l_R0gdLakX4wr1K-NGYeRTQNV8mVgg&s',
//     author: 'kaijumarvel',
//     createdAt: new Date('2025-02-16T09:15:00'),
//     updatedAt: new Date('2025-02-16T09:45:00'),
//     likes: 190,
//     dislikes: 7,
//     commentsCount: 42,
//     comments: [],
//   },
//   {
//     id: '17',
//     board: 'NewDads',
//     title: 'Struggling with diaper rash remedies',
//     content:
//       'My little one has been dealing with diaper rash for a few days now. Any tried-and-true remedies or product recommendations?',
//     author: 'newdadlife',
//     createdAt: new Date('2025-02-17T20:00:00'),
//     updatedAt: new Date('2025-02-17T20:30:00'),
//     likes: 130,
//     dislikes: 2,
//     commentsCount: 19,
//     comments: [],
//   },
//   {
//     id: '18',
//     board: 'supersmashbros',
//     title: 'Tips for recovering after a crushing loss in Smash tournaments?',
//     content:
//       'I just suffered a major upset in my latest match and could use some advice on bouncing back mentally. How do you stay motivated?',
//     author: 'smashstruggle',
//     createdAt: new Date('2025-02-18T17:45:00'),
//     updatedAt: new Date('2025-02-18T18:20:00'),
//     likes: 220,
//     dislikes: 5,
//     commentsCount: 33,
//     comments: [],
//   },
//   {
//     id: '19',
//     board: 'programming',
//     title: "Just discovered Rust and I'm impressed!",
//     content:
//       "I've been dabbling with Rust recently and love its performance and safety features. Any fellow devs making the switch from JavaScript or other languages?",
//     image: 'https://miro.medium.com/v2/resize:fit:709/0*Eqqrv9zVpH99X726.png',
//     author: 'codeconvert',
//     createdAt: new Date('2025-02-19T13:30:00'),
//     updatedAt: new Date('2025-02-19T14:00:00'),
//     likes: 245,
//     dislikes: 6,
//     commentsCount: 40,
//     comments: [],
//   },
//   {
//     id: '20',
//     board: 'memes',
//     title: 'That moment when your code actually works on the first run...',
//     content:
//       'Rare, unexpected, and absolutely priceless. Share your first-run miracle stories!',
//     image:
//       'https://preview.redd.it/30e1qdf5jfa61.png?auto=webp&s=68d9a09980b8936c8bc7078b3b11017a596159b7',
//     author: 'codememequeen',
//     createdAt: new Date('2025-02-20T21:00:00'),
//     updatedAt: new Date('2025-02-20T21:15:00'),
//     likes: 540,
//     dislikes: 4,
//     commentsCount: 75,
//     comments: [],
//   },
// ];
export const dummyPosts: any = [];

// calling this interface Reply instead of Comment because Comment is an already existing type
export interface Reply {
  id: string;
  name: string;
  postId: string; // Maps to "link_id"
  parentId?: string; // Maps to "parent_id"
  subredditId: string;
  subreddit: string;
  subredditNamePrefixed: string;
  subredditType: string;
  author: string;
  authorFullname: string;
  authorFlairText?: string | null;
  authorFlairCssClass?: string | null;
  authorFlairType: string;
  authorFlairRichtext: any[];
  authorFlairBackgroundColor?: string | null;
  authorFlairTextColor?: string | null;
  authorPatreonFlair: boolean;
  authorPremium: boolean;
  authorIsBlocked: boolean;
  isSubmitter: boolean;
  data: any;

  body: string;
  bodyHtml: string;
  content: string; // Duplicate of `body` for your app's usage
  ups: number;
  downs: number;
  score: number;
  scoreHidden: boolean;
  controversiality: number;
  gilded: number;
  gildings: Record<string, number>;
  allAwardings: any[];
  totalAwardsReceived: number;
  topAwardedType?: string | null;
  associatedAward?: any | null;

  created: number;
  created_utc: number;
  createdAt: Date; // Converted from `createdUtc`
  updatedAt: Date; // Same as `createdAt` if not edited
  edited: boolean | number;
  archived: boolean;
  locked: boolean;
  stickied: boolean;
  canModPost: boolean;
  canGild: boolean;
  sendReplies: boolean;
  unrepliableReason?: string | null;

  saved: boolean;
  likes?: boolean | null;
  distinguished?: string | null;
  collapsed: boolean;
  collapsedReason?: string | null;
  collapsedReasonCode?: string | null;
  collapsedBecauseCrowdControl?: string | null;

  removalReason?: string | null;
  modReasonBy?: string | null;
  modReasonTitle?: string | null;
  modNote?: string | null;
  approvedBy?: string | null;
  bannedBy?: string | null;
  bannedAtUtc?: number | null;
  approvedAtUtc?: number | null;
  modReports: any[];
  userReports: any[];
  reportReasons?: any;
  treatmentTags: string[];

  noFollow: boolean;
  permalink: string;
  commentType?: string | null;

  replies: Replies; // Recursive definition
  repliesCount: number; // Custom derived count
  mediaMetadata?: Record<string, MediaMetadataItem>;

  // Additional data if needed later
  awarders: any[];
}

export interface Replies {
  data: {
    children: Reply[];
  };
  kind: string;
}

export interface MediaMetadataItem {
  status: string;
  e: string;
  m: string;
  p: {
    y: number;
    x: number;
    u: string;
  }[];
  s: {
    y: number;
    x: number;
    u: string;
  };
  id: string;
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

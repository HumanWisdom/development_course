/**
 * Test Fixtures and Sample Data
 * Provides consistent test data for unit tests
 */

/**
 * Sample User Data
 */
export const MOCK_USER = {
  id: 'user-123',
  email: 'test@happierme.app',
  name: 'Test User',
  firstName: 'Test',
  lastName: 'User',
  displayName: 'TestUser',
  avatar: 'https://example.com/avatar.jpg',
  createdAt: new Date('2024-01-01'),
  isActive: true,
  isPremium: false
};

export const MOCK_PREMIUM_USER = {
  ...MOCK_USER,
  id: 'user-premium-456',
  email: 'premium@happierme.app',
  isPremium: true,
  subscriptionId: 'sub-789',
  subscriptionExpiry: new Date('2025-12-31')
};

/**
 * Sample Forum Post Data
 */
export const MOCK_FORUM_POST = {
  id: 'post-123',
  title: 'How to manage stress at work',
  content: 'I am looking for advice on managing stress in a high-pressure work environment.',
  author: {
    id: MOCK_USER.id,
    name: MOCK_USER.name,
    avatar: MOCK_USER.avatar
  },
  createdAt: new Date('2024-01-15T10:30:00'),
  updatedAt: new Date('2024-01-15T10:30:00'),
  likes: 5,
  comments: 3,
  views: 25,
  tags: ['stress', 'work', 'wellness'],
  isLiked: false,
  isBookmarked: false
};

export const MOCK_FORUM_POSTS = [
  MOCK_FORUM_POST,
  {
    ...MOCK_FORUM_POST,
    id: 'post-124',
    title: 'Meditation techniques for beginners',
    tags: ['meditation', 'mindfulness']
  },
  {
    ...MOCK_FORUM_POST,
    id: 'post-125',
    title: 'Dealing with anxiety',
    tags: ['anxiety', 'mental-health']
  }
];

/**
 * Sample Forum Comment Data
 */
export const MOCK_FORUM_COMMENT = {
  id: 'comment-123',
  postId: MOCK_FORUM_POST.id,
  content: 'Great question! I find meditation really helps with work stress.',
  author: {
    id: 'user-999',
    name: 'Helpful User',
    avatar: 'https://example.com/avatar2.jpg'
  },
  createdAt: new Date('2024-01-15T11:00:00'),
  likes: 2,
  isLiked: false
};

/**
 * Sample Subscription Data
 */
export const MOCK_SUBSCRIPTION_PLAN = {
  id: 'plan-monthly',
  name: 'Monthly Plan',
  description: 'Access to all premium features',
  price: 9.99,
  currency: 'USD',
  interval: 'month',
  intervalCount: 1,
  features: [
    'Unlimited access to all content',
    'Ad-free experience',
    'Offline downloads',
    'Priority support'
  ],
  isPopular: false
};

export const MOCK_SUBSCRIPTION_PLANS = [
  MOCK_SUBSCRIPTION_PLAN,
  {
    ...MOCK_SUBSCRIPTION_PLAN,
    id: 'plan-yearly',
    name: 'Yearly Plan',
    price: 99.99,
    interval: 'year',
    isPopular: true,
    discount: 17 // percentage
  }
];

export const MOCK_CART_ITEM = {
  id: 'cart-item-1',
  planId: MOCK_SUBSCRIPTION_PLAN.id,
  plan: MOCK_SUBSCRIPTION_PLAN,
  quantity: 1,
  addedAt: new Date('2024-01-15')
};

/**
 * Sample Content Data
 */
export const MOCK_VIDEO_CONTENT = {
  id: 'video-123',
  title: 'Introduction to Mindfulness',
  description: 'Learn the basics of mindfulness meditation',
  url: 'https://youtube.com/watch?v=test123',
  thumbnail: 'https://example.com/thumbnail.jpg',
  duration: 600, // seconds
  category: 'meditation',
  tags: ['mindfulness', 'meditation', 'beginner'],
  isPremium: false,
  views: 1250,
  likes: 85,
  createdAt: new Date('2024-01-01')
};

export const MOCK_AUDIO_CONTENT = {
  id: 'audio-123',
  title: 'Guided Meditation for Sleep',
  description: 'A calming meditation to help you sleep better',
  url: 'https://example.com/audio/meditation.mp3',
  duration: 1200,
  category: 'sleep',
  tags: ['sleep', 'meditation', 'relaxation'],
  isPremium: true,
  plays: 3500,
  likes: 250,
  createdAt: new Date('2024-01-05')
};

export const MOCK_ARTICLE_CONTENT = {
  id: 'article-123',
  title: 'Understanding Stress and How to Manage It',
  description: 'A comprehensive guide to stress management',
  content: '<p>Stress is a natural response to challenges...</p>',
  author: 'Dr. Jane Smith',
  category: 'stress',
  tags: ['stress', 'wellness', 'mental-health'],
  readTime: 10, // minutes
  isPremium: false,
  views: 5000,
  likes: 450,
  createdAt: new Date('2024-01-10'),
  publishedAt: new Date('2024-01-12')
};

/**
 * Sample Journal Entry Data
 */
export const MOCK_JOURNAL_ENTRY = {
  id: 'journal-123',
  userId: MOCK_USER.id,
  title: 'Reflection on Today',
  content: 'Today was a good day. I practiced meditation in the morning and felt more focused.',
  mood: 'happy',
  moodScore: 8,
  tags: ['meditation', 'focus', 'gratitude'],
  isPrivate: true,
  createdAt: new Date('2024-01-15T20:00:00'),
  updatedAt: new Date('2024-01-15T20:00:00')
};

export const MOCK_JOURNAL_ENTRIES = [
  MOCK_JOURNAL_ENTRY,
  {
    ...MOCK_JOURNAL_ENTRY,
    id: 'journal-124',
    title: 'Dealing with Work Pressure',
    mood: 'stressed',
    moodScore: 4,
    createdAt: new Date('2024-01-14T20:00:00')
  },
  {
    ...MOCK_JOURNAL_ENTRY,
    id: 'journal-125',
    title: 'Weekend Relaxation',
    mood: 'calm',
    moodScore: 9,
    createdAt: new Date('2024-01-13T20:00:00')
  }
];

/**
 * Sample Survey Data
 */
export const MOCK_SURVEY_QUESTION = {
  id: 'question-1',
  surveyId: 'survey-happiness',
  text: 'How happy do you feel right now?',
  type: 'scale',
  scaleMin: 1,
  scaleMax: 10,
  scaleMinLabel: 'Very Unhappy',
  scaleMaxLabel: 'Very Happy',
  required: true,
  order: 1
};

export const MOCK_SURVEY = {
  id: 'survey-happiness',
  title: 'Happiness Survey',
  description: 'Measure your current happiness levels',
  questions: [
    MOCK_SURVEY_QUESTION,
    {
      ...MOCK_SURVEY_QUESTION,
      id: 'question-2',
      text: 'What contributes most to your happiness?',
      type: 'multiple-choice',
      options: ['Family', 'Work', 'Health', 'Hobbies', 'Other'],
      order: 2
    }
  ],
  isActive: true,
  createdAt: new Date('2024-01-01')
};

/**
 * Sample Progress Data
 */
export const MOCK_PROGRESS_DATA = {
  userId: MOCK_USER.id,
  programId: 'program-mindfulness',
  completedSections: ['intro', 'basics', 'breathing'],
  totalSections: 10,
  completionPercentage: 30,
  currentSection: 'meditation-101',
  timeSpent: 3600, // seconds
  lastAccessed: new Date('2024-01-15'),
  startedAt: new Date('2024-01-01'),
  badges: ['beginner', 'consistent'],
  streak: 7 // days
};

/**
 * Sample Chat Message Data
 */
export const MOCK_CHAT_MESSAGE = {
  id: 'msg-123',
  userId: MOCK_USER.id,
  message: 'How can I reduce my anxiety?',
  response: 'Anxiety can be reduced through various techniques including breathing exercises, meditation, and mindfulness.',
  timestamp: new Date('2024-01-15T14:30:00'),
  isFromUser: true,
  isRead: true
};

/**
 * Sample Notification Data
 */
export const MOCK_NOTIFICATION = {
  id: 'notif-123',
  userId: MOCK_USER.id,
  type: 'reminder',
  title: 'Time for your daily meditation',
  message: 'Don\'t forget your daily mindfulness practice!',
  isRead: false,
  actionUrl: '/meditation/daily',
  createdAt: new Date('2024-01-15T09:00:00')
};

/**
 * Sample Error Responses
 */
export const MOCK_ERROR_RESPONSE = {
  error: {
    code: 'INVALID_REQUEST',
    message: 'The request was invalid',
    status: 400
  }
};

export const MOCK_AUTH_ERROR = {
  error: {
    code: 'UNAUTHORIZED',
    message: 'Authentication required',
    status: 401
  }
};

export const MOCK_NOT_FOUND_ERROR = {
  error: {
    code: 'NOT_FOUND',
    message: 'Resource not found',
    status: 404
  }
};

export const MOCK_SERVER_ERROR = {
  error: {
    code: 'SERVER_ERROR',
    message: 'Internal server error',
    status: 500
  }
};

/**
 * Sample API Responses
 */
export const MOCK_API_SUCCESS_RESPONSE = {
  success: true,
  data: {},
  message: 'Operation completed successfully'
};

export const MOCK_API_ERROR_RESPONSE = {
  success: false,
  error: 'An error occurred',
  message: 'Operation failed'
};

/**
 * Sample Form Data
 */
export const MOCK_FORM_DATA = {
  email: 'test@example.com',
  password: 'Test@1234',
  firstName: 'Test',
  lastName: 'User',
  age: 25,
  agreedToTerms: true
};

/**
 * Sample Date Ranges
 */
export const MOCK_DATE_RANGE = {
  start: new Date('2024-01-01'),
  end: new Date('2024-01-31')
};

/**
 * Sample Configuration
 */
export const MOCK_APP_CONFIG = {
  apiUrl: 'https://api.happierme.app',
  environment: 'test',
  version: '1.0.0',
  features: {
    chat: true,
    forum: true,
    premium: true
  }
};


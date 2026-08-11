export interface OllyTopic {
  topic: string;
  displayName: string;
  fragment: string;
  questions: string[];
}

export interface OllyQuestionsData {
  adults: OllyTopic[];
  teens: OllyTopic[];
}

export const OLLY_QUESTIONS: OllyQuestionsData = {
  "adults": [
    {
      "topic": "Mental wellbeing",
      "displayName": "Improve your mental health",
      "fragment": "mental-health",
      "questions": [
        "How can I deal with past trauma",
        "How can I manage stress better",
        "How can I manage anxiety",
        // "How can I feel calmer",
        // "How do I know if I might be depressed",
        "How can I deal with depression",
        "How can I deal with my inner critic",
        "How can I improve my mental wellbeing",
        "How can I sleep better",
        "Can stress be prevented",
        "How can I stop overthinking",
        "How can I build emotional resilience",
        "How can I deal with money worries"
      ]
    },
    {
      "topic": "Emotions",
      "displayName": "Manage your emotions",
      "fragment": "emotions",
      "questions": [
        "How can I manage my anger",
        "How can I deal with loneliness",
        "How can I deal with angry people",
        // "Why do I feel sad for no reason",
        // "I feel empty, what can I do?",
        "I feel lost, what can I do?",
        "How can I manage my emotions better",
        // "Why do I feel so reactive",
        // "Why do I feel lonely even with other people",
        "What can I do to feel less afraid",
        "How can I regulate my emotions in the moment",
        // "Why do my emotions feel so overwhelming"
      ]
    },
    {
      "topic": "Relationships",
      "displayName": "Strengthen your relationships",
      "fragment": "relationships",
      "questions": [
        "How can I find love",
        "How can I have a happy relationship",
        "How can I deal with conflict",
        "How can I repair my relationship",
        "How can I understand emotional needs (mine and others’)",
        "How can I forgive others",
        "Why do we argue in relationships",
        "Why are some people controlling",
        // "How can I deal with abuse",
        // "How can I deal with a breakup",
        "How can I deal with ghosting",
        "How can I set healthy boundaries in relationships",
        "Why do I keep repeating the same relationship patterns"
      ]
    },
    {
      "topic": "Work",
      "displayName": "Succeed at work",
      "fragment": "success-at-work",
      "questions": [
        "How can I feel happier at work",
        "How can I be emotionally intelligent",
        "How can I be a better leader",
        "How can I communicate more effectively at work",
        "How can I make better decisions",
        "How can I deal with bullying",
        "How can I have better work relationships",
        "How can I grow in my career",
        // "How can I cope with pressure",
        "How can I improve my focus at work",
        "How can I set healthy boundaries at work",
        "How can I manage conflict at work"
      ]
    },
    {
      "topic": "For parents",
      "displayName": "Be a better parent",
      "fragment": "for-parents",
      "questions": [
        // "As a parent, what can I do when I feel overwhelmed",
        "How can parents deal with the challenge of social media",
        "How can I discipline children with care",
        "What are the common parental mistakes",
        "How can I be a better parent",
        "How can I be a more loving parent",
        "How can I deal with parental anxiety",
        "How can I communicate better with my kids",
        "How can I support kids during a divorce",
        "How can I support teens to be mentally healthy",
        "How can I talk to kids about sex",
        "How can I talk to kids about drugs"
      ]
    },
    {
      "topic": "Self-awareness",
      "displayName": "Build your self awareness",
      "fragment": "self-awareness",
      "questions": [
        "What is self-awareness",
        "How can self-awareness help you be a better parent",
        "How can self-awareness help you",
        // "How can I understand my own mind",
        "Do you have any tips for personal growth",
        "How can self-awareness help leaders succeed",
        "How can self-awareness help relationships",
        "How can self-awareness help students",
        // "How can I understand my feelings",
        // "How can I make sense of  my thoughts"
      ]
    },
    {
      "topic": "Meditation",
      "displayName": "Meditation",
      "fragment": "meditation",
      "questions": [
        "What is meditation",
        "What are the benefits of meditation",
        "What are the common myths around meditation",
        "How can I get started with meditation",
        // "Have you got any audio meditations I can listen to",
        "How can I deepen my meditation practice",
        "How long should I meditate for",
        // "I’m scared to meditate",
        // "How can I quieten my mind",
        "How can I connect with silence"
      ]
    },
    {
      "topic": "Addiction",
      "displayName": "Break addictive habits",
      "fragment": "addiction",
      "questions": [
        "What is the difference between a habit and an addiction",
        "How can I break a habit",
        "How can I overcome an addiction",
        "How can I deal with social media addiction",
        "What are the hidden drivers behind addiction",
        "How can I avoid addiction",
        "How does addiction change behaviour",
        "Why do we drink and take drugs",
        "How can I deal with a phone addiction",
        "What's behind binge eating"
      ]
    },
    {
      "topic": "Sorrow and loss",
      "displayName": "Deal with loss",
      "fragment": "sorrow-and-loss",
      "questions": [
        "Why does loss feel so painful",
        "How can I deal with my grief",
        "Why do I feel numb after a loss",
        "How can I move forward after my loss",
        "Why does grief come in waves",
        "What are the different emotions of loss",
        "How long does it take to heal from grief",
        "What are the different stages of grief",
        "How can understanding myself help me deal with loss",
        "How can I prepare myself for loss"
      ]
    },
    {
      "topic": "Happiness",
      "displayName": "Be happier",
      "fragment": "happiness",
      "questions": [
        // "How can I be happier today",
        "What role does gratitude play in happiness",
        // "Is happiness something I can control",
        "Why doesn’t pleasure last",
        // "Is happiness pleasure or contentment",
        // "How is joy different from happiness",
        "What gets in the way of being happy",
        "How can I build a positive attitude",
        "Why do I feel unhappy even when things are going well",
        "How can I find meaning and purpose in life"
      ]
    }
  ],
  "teens": [
    {
      "topic": "Mental wellbeing",
      "displayName": "Improve your mental health",
      "fragment": "mental-health",
      "questions": [
        "How can I manage stress better",
        "How can I manage anxiety",
        // "How can I feel calmer",
        // "How do I know if I might be depressed",
        // "How can I deal with low mood",
        "How can I deal with my inner critic",
        "How can I improve my mental wellbeing",
        "How can I sleep better",
        "Can stress be prevented",
        "How can I stop overthinking",
        "How can I be stronger inside",
        "How can I deal with a panic attack"
      ]
    },
    {
      "topic": "Emotions",
      "displayName": "Manage your emotions",
      "fragment": "emotions",
      "questions": [
        "How can I manage my anger",
        "How can I deal with loneliness",
        "How can I deal with angry people",
        // "Why do I feel sad for no reason",
        // "I feel bored, what can I do?",
        // "I feel lost, what can I do?",
        "How can I manage my emotions better",
        // "Why do I feel so reactive",
        // "Why do I feel lonely even with other people",
        // "What can I do to feel less afraid",
        "How can I regulate my emotions",
        // "Why do my emotions feel so overwhelming"
      ]
    },
    {
      "topic": "Relationships",
      "displayName": "Strengthen your relationships",
      "fragment": "relationships",
      "questions": [
        "How can I find love",
        "How can I have a happy relationship",
        "How can I deal with conflict",
        "How can I repair my relationship",
        "How can I understand emotional needs",
        "How can I forgive others",
        "Why do we argue",
        "Why do I need external approval",
        // "How can I deal with abuse",
        // "How can I deal with a breakup",
        "How can I deal with ghosting",
        "How can I set healthy boundaries in relationships",
        "Why do I keep repeating the same relationship patterns"
      ]
    },
    {
      "topic": "Success",
      "displayName": "Succeed at school / work",
      "fragment": "success",
      "questions": [
        "How can I feel happier at school",
        "How can I be emotionally intelligent",
        "How can I improve my communicate skills",
        "How can I make better decisions",
        "How can I deal with bullying",
        "How can I deal with criticism",
        "How can I cope with exam pressure",
        "How can I improve my focus",
        "How can I be more confident",
        "How can I choose a career",
        "How can I deal with failure"
      ]
    },
    {
      "topic": "Self-awareness",
      "displayName": "Build your self awareness",
      "fragment": "self-awareness",
      "questions": [
        "What is self-awareness",
        "How can self-awareness help me",
        // "How can I understand my own mind",
        "Do you have any tips for personal growth",
        "How can self-awareness help me succeed",
        "How can self-awareness help my relationships",
        // "How can I understand my feelings",
        // "How can I make sense of  my thoughts",
        "What is conditioning",
        "Why does my mind compare all the time"
      ]
    },
    {
      "topic": "Feel calm",
      "displayName": "Meditation",
      "fragment": "feel-calm",
      "questions": [
        "What is meditation",
        "What are the benefits of meditation",
        "What are the common myths around meditation",
        "How can I get started with meditation",
        // "Have you got any audio meditations I can listen to",
        "How can I deepen my meditation practice",
        "How long should I meditate for",
        // "I’m scared to meditate",
        // "How can I quieten my mind",
        "How can I feel more calm",
        "What breathing exercises can I do?",
        "How can I notice my thoughts"
      ]
    },
    {
      "topic": "Habits",
      "displayName": "Break addictive habits",
      "fragment": "habits",
      "questions": [
        "What is the difference between a habit and an addiction",
        "How can I break a habit",
        "How can I overcome an addiction",
        "How can I deal with social media addiction",
        "What are the hidden drivers behind addiction",
        "How can I avoid addiction",
        "How does addiction change behaviour",
        "Why do we drink and take drugs",
        "How can I deal with a phone addiction",
        "What's behind binge eating"
      ]
    },
    {
      "topic": "Happiness",
      "displayName": "Be happier",
      "fragment": "happiness",
      "questions": [
        "How can I be happier",
        "What role does gratitude play in happiness",
        // "Is happiness something I can control",
        "Why doesn’t pleasure last",
        // "Is happiness pleasure or contentment",
        // "How is joy different from happiness",
        "What gets in the way of being happy",
        "How can I build a positive attitude",
        "Why do I feel unhappy even when things are going well",
        "How can I find meaning and purpose in life",
        "How can I have a better relationship with social media"
      ]
    }
  ]
};

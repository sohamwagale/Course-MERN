export type LessonType = 'video' | 'quiz' | 'challenge'

export type Lesson = {
  id: string
  title: string
  durationMinutes: number
  youtubeId?: string
  summary: string
  type?: LessonType
}

export type Module = {
  id: string
  title: string
  description: string
  lessons: Lesson[]
}

export type Course = {
  id: string
  title: string
  tagline: string
  description: string
  level: string
  category: string
  available: boolean
  hours: number
  students: string
  rating: number
  accent: string
  modules: Module[]
}

export const courses: Course[] = [
  {
    id: 'mern',
    title: 'MERN Stack Developer Path',
    tagline: 'MongoDB · Express · React · Node.js',
    description:
      'A complete full-stack path from web foundations to shipping a production MERN app. Follow the modules in order, mark each lesson, quiz, and coding challenge complete, and download a PDF certificate when you finish.',
    level: 'Beginner to Advanced',
    category: 'Full Stack',
    available: true,
    hours: 54,
    students: '12.4k',
    rating: 4.8,
    accent: '#0f766e',
    modules: [
      {
        id: 'm1',
        title: 'Getting Started',
        description: 'Mindset, tooling, and version control before you write product code.',
        lessons: [
          {
            id: 'm1-l1',
            title: 'Welcome to the MERN stack',
            durationMinutes: 90,
            youtubeId: '7CqJlxBYj-M',
            summary: 'See how MongoDB, Express, React, and Node fit together in a real app.',
            type: 'video',
          },
          {
            id: 'm1-l2',
            title: 'Developer environment & VS Code',
            durationMinutes: 75,
            youtubeId: 'B-s71n0dHUk',
            summary: 'Install Node, VS Code, and the extensions you will use throughout the path.',
            type: 'video',
          },
          {
            id: 'm1-l3',
            title: 'Git & GitHub essentials',
            durationMinutes: 75,
            youtubeId: 'RGOj5yH7evk',
            summary: 'Commit, branch, and push so every project is versioned from day one.',
            type: 'video',
          },
          {
            id: 'quiz-m1-tools',
            title: 'Quiz 1: Git & Dev Tools Checkpoint',
            durationMinutes: 15,
            summary: '5 multiple-choice questions on version control, package-lock, and HTTP verbs.',
            type: 'quiz',
          },
        ],
      },
      {
        id: 'm2',
        title: 'Web Foundations',
        description: 'HTML, CSS, and JavaScript you need before React.',
        lessons: [
          {
            id: 'm2-l1',
            title: 'HTML & CSS from scratch',
            durationMinutes: 360,
            youtubeId: 'G3e-cpL7ofc',
            summary: 'Build page structure, layout, and responsive styles used in later React UIs.',
            type: 'video',
          },
          {
            id: 'challenge-palindrome',
            title: 'Code: Valid Palindrome (LeetCode #125)',
            durationMinutes: 20,
            summary: 'Solve the classic palindrome string challenge with browser test case validation.',
            type: 'challenge',
          },
          {
            id: 'm2-l2',
            title: 'JavaScript essentials',
            durationMinutes: 240,
            youtubeId: 'PkZNo7MFNFg',
            summary: 'Variables, functions, arrays, objects, and control flow for backend and frontend.',
            type: 'video',
          },
          {
            id: 'challenge-two-sum',
            title: 'Code: Two Sum (LeetCode #1)',
            durationMinutes: 25,
            summary: 'Find the two indices adding to the target using Hash Maps in JS.',
            type: 'challenge',
          },
          {
            id: 'm2-l3',
            title: 'Modern ES6+ JavaScript',
            durationMinutes: 120,
            youtubeId: 'nZ1DMMsyVyI',
            summary: 'Arrow functions, destructuring, modules, promises, and async/await.',
            type: 'video',
          },
          {
            id: 'quiz-m2-js',
            title: 'Quiz 2: Modern JavaScript & ES6+ Checkpoint',
            durationMinutes: 15,
            summary: '5 MCQ questions testing promises, spread syntax, type coercion, and array methods.',
            type: 'quiz',
          },
          {
            id: 'challenge-custom-map',
            title: 'Code: Custom Array Map Implementation',
            durationMinutes: 20,
            summary: 'Implement your own Array.map polyfill without using the native method.',
            type: 'challenge',
          },
        ],
      },
      {
        id: 'm3',
        title: 'Node.js & Express',
        description: 'APIs, servers, and the E in MERN.',
        lessons: [
          {
            id: 'm3-l1',
            title: 'Node.js fundamentals',
            durationMinutes: 180,
            youtubeId: 'Oe421EPjeBE',
            summary: 'Runtime, modules, npm, and building scripts without a browser.',
            type: 'video',
          },
          {
            id: 'm3-l2',
            title: 'Express crash course',
            durationMinutes: 150,
            youtubeId: 'L72fhGm1tfE',
            summary: 'Routes, middleware, and request handling for REST APIs.',
            type: 'video',
          },
          {
            id: 'quiz-m3-express',
            title: 'Quiz 3: Express Architecture & Middleware',
            durationMinutes: 15,
            summary: '5 MCQ questions on next(), status codes, params, and error handling.',
            type: 'quiz',
          },
          {
            id: 'challenge-bearer-token',
            title: 'Code: Bearer Token Extractor Middleware',
            durationMinutes: 20,
            summary: 'Write the token extraction logic used across production auth middleware.',
            type: 'challenge',
          },
          {
            id: 'm3-l3',
            title: 'Designing REST APIs',
            durationMinutes: 150,
            youtubeId: 'Q-BpqyOT3aA',
            summary: 'Resources, status codes, and clean API shape for a React client.',
            type: 'video',
          },
        ],
      },
      {
        id: 'm4',
        title: 'MongoDB',
        description: 'Documents, queries, and the database layer.',
        lessons: [
          {
            id: 'm4-l1',
            title: 'MongoDB crash course',
            durationMinutes: 150,
            youtubeId: '-56x56UppqQ',
            summary: 'Collections, documents, Compass, and CRUD in the shell.',
            type: 'video',
          },
          {
            id: 'm4-l2',
            title: 'MongoDB with Node.js',
            durationMinutes: 120,
            youtubeId: 'ofme2o29ngU',
            summary: 'Connect Node to MongoDB Atlas and run queries from Express.',
            type: 'video',
          },
          {
            id: 'm4-l3',
            title: 'Mongoose models & schemas',
            durationMinutes: 90,
            youtubeId: 'DZBGEVgL2eE',
            summary: 'Schemas, validation, and relationships for application data.',
            type: 'video',
          },
          {
            id: 'quiz-m4-mongo',
            title: 'Quiz 4: MongoDB & Mongoose Schemas',
            durationMinutes: 15,
            summary: '5 MCQ questions on BSON, ObjectIds, validation, and populate().',
            type: 'quiz',
          },
          {
            id: 'challenge-group-anagrams',
            title: 'Code: Group Anagrams (LeetCode #49)',
            durationMinutes: 30,
            summary: 'Group related records by sorted hash key, similar to MongoDB aggregation grouping.',
            type: 'challenge',
          },
        ],
      },
      {
        id: 'm5',
        title: 'React',
        description: 'Components, hooks, and the user interface.',
        lessons: [
          {
            id: 'm5-l1',
            title: 'React crash course',
            durationMinutes: 180,
            youtubeId: 'w7ejDZ8SWv8',
            summary: 'Components, JSX, props, and state for interactive UIs.',
            type: 'video',
          },
          {
            id: 'm5-l2',
            title: 'Hooks in depth',
            durationMinutes: 150,
            youtubeId: '4Cf86qVEIJY',
            summary: 'useState, useEffect, and custom hooks for real screens.',
            type: 'video',
          },
          {
            id: 'quiz-m5-react',
            title: 'Quiz 5: React Components & Hooks',
            durationMinutes: 15,
            summary: '5 MCQ questions on immutability, effect cleanup, keys, and lifting state.',
            type: 'quiz',
          },
          {
            id: 'm5-l3',
            title: 'React Router',
            durationMinutes: 120,
            youtubeId: 'Ul3y1LXxzdU',
            summary: 'Multi-page apps with nested routes and navigation.',
            type: 'video',
          },
          {
            id: 'm5-l4',
            title: 'Fetching APIs from React',
            durationMinutes: 150,
            youtubeId: 'PoRJizFvM7s',
            summary: 'Async JavaScript, fetch, and talking to your Express API from React.',
            type: 'video',
          },
          {
            id: 'challenge-query-parser',
            title: 'Code: URL Query String Parser',
            durationMinutes: 25,
            summary: 'Build a query parser helper for client-side search params and routing.',
            type: 'challenge',
          },
        ],
      },
      {
        id: 'm6',
        title: 'Full Stack MERN',
        description: 'Wire the four layers into one product.',
        lessons: [
          {
            id: 'm6-l1',
            title: 'Build a MERN application',
            durationMinutes: 180,
            youtubeId: 'CvCiNeLnZ00',
            summary: 'Walk a complete MERN project from API to React UI.',
            type: 'video',
          },
          {
            id: 'm6-l2',
            title: 'JWT authentication',
            durationMinutes: 120,
            youtubeId: 'mbsmsi7l3r4',
            summary: 'Register, login, protected routes, and tokens.',
            type: 'video',
          },
          {
            id: 'quiz-m6-jwt',
            title: 'Quiz 6: Full Stack Security & JWT Auth',
            durationMinutes: 15,
            summary: '5 MCQ questions on tokens, bcrypt hashing, Authorization headers, and CORS.',
            type: 'quiz',
          },
          {
            id: 'm6-l3',
            title: 'MERN project walkthrough',
            durationMinutes: 150,
            youtubeId: '98BzS5Oz5E4',
            summary: 'Folder structure, env files, and connecting frontend to backend.',
            type: 'video',
          },
        ],
      },
      {
        id: 'm7',
        title: 'Ship & Capstone',
        description: 'Test, deploy, and close the path.',
        lessons: [
          {
            id: 'm7-l1',
            title: 'Testing APIs',
            durationMinutes: 90,
            youtubeId: 'FgnxcUQ5vho',
            summary: 'Write confidence checks before you deploy.',
            type: 'video',
          },
          {
            id: 'm7-l2',
            title: 'Deploy frontend & API',
            durationMinutes: 120,
            youtubeId: '-9CE0GxOM8A',
            summary: 'Host the React app and Node API so others can use it.',
            type: 'video',
          },
          {
            id: 'm7-l3',
            title: 'Capstone recap',
            durationMinutes: 60,
            youtubeId: 'ME3tMy5Q2qo',
            summary: 'Review the stack, checklist your project, and claim your certificate.',
            type: 'video',
          },
        ],
      },
    ],
  },

  {
    id: 'python',
    title: 'Python for Developers',
    tagline: 'Syntax · OOP · APIs · Automation',
    description: 'Python from first script to APIs and automation. Curriculum opens in a later release.',
    level: 'Beginner',
    category: 'Backend',
    available: false,
    hours: 32,
    students: '8.1k',
    rating: 4.6,
    accent: '#2563eb',
    modules: [],
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    tagline: 'Arrays · Trees · Graphs · Interview prep',
    description: 'Problem-solving patterns for interviews and production systems. Coming soon.',
    level: 'Intermediate',
    category: 'Computer Science',
    available: false,
    hours: 40,
    students: '15.2k',
    rating: 4.9,
    accent: '#7c3aed',
    modules: [],
  },
  {
    id: 'java',
    title: 'Java & Spring Boot',
    tagline: 'OOP · Spring · REST · JPA',
    description: 'Enterprise Java with Spring Boot services. Not available yet.',
    level: 'Intermediate',
    category: 'Backend',
    available: false,
    hours: 38,
    students: '6.7k',
    rating: 4.5,
    accent: '#e11d48',
    modules: [],
  },
  {
    id: 'flutter',
    title: 'Flutter Mobile Apps',
    tagline: 'Dart · Widgets · State · Stores',
    description: 'Cross-platform iOS and Android apps. Curriculum is locked.',
    level: 'Beginner',
    category: 'Mobile',
    available: false,
    hours: 28,
    students: '5.3k',
    rating: 4.7,
    accent: '#0284c7',
    modules: [],
  },
  {
    id: 'nextjs',
    title: 'Next.js & TypeScript',
    tagline: 'App Router · SSR · Auth · Deploy',
    description: 'Production React with Next.js. Opens after the MERN path.',
    level: 'Advanced',
    category: 'Frontend',
    available: false,
    hours: 26,
    students: '9.0k',
    rating: 4.8,
    accent: '#65a30d',
    modules: [],
  },
]

export function getCourse(id: string) {
  return courses.find((course) => course.id === id)
}

export function getAllLessons(course: Course): Lesson[] {
  return course.modules.flatMap((module) => module.lessons)
}

export function formatDuration(minutes: number) {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  if (hours && mins) return `${hours}h ${mins}m`
  if (hours) return `${hours}h`
  return `${mins}m`
}

export function courseHoursFromModules(course: Course) {
  const minutes = getAllLessons(course).reduce((sum, lesson) => sum + lesson.durationMinutes, 0)
  return Math.round((minutes / 60) * 10) / 10
}

export type QuizQuestion = {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export type QuizData = {
  id: string
  title: string
  moduleTitle: string
  description: string
  questions: QuizQuestion[]
}

export type TestCase = {
  inputDesc: string
  inputArgs: any[]
  expected: any
}

export type CodingProblem = {
  id: string
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  moduleTitle: string
  description: string
  examples: {
    input: string
    output: string
    explanation?: string
  }[]
  constraints: string[]
  functionName: string
  starterCode: string
  solutionCode: string
  testCases: TestCase[]
}

export const mernQuizzes: Record<string, QuizData> = {
  'quiz-m1-tools': {
    id: 'quiz-m1-tools',
    title: 'Checkpoint: Git & Developer Tooling',
    moduleTitle: 'Getting Started',
    description: 'Test your understanding of version control, CLI workflow, and project setup before moving to code.',
    questions: [
      {
        id: 'q1-1',
        question: 'Which git command creates a new branch and switches to it in one step?',
        options: ['git branch -n <name>', 'git checkout -b <name>', 'git merge <name>', 'git switch --force <name>'],
        correctIndex: 1,
        explanation: 'git checkout -b <name> (or git switch -c <name>) creates and immediately checks out the new branch.',
      },
      {
        id: 'q1-2',
        question: 'What is the purpose of the .gitignore file?',
        options: [
          'To ignore compiler errors',
          'To tell Git which files and folders to exclude from version tracking',
          'To delete untracked files automatically',
          'To protect passwords from being read by Node.js',
        ],
        correctIndex: 1,
        explanation: '.gitignore prevents temporary files, credentials, and bulky folders like node_modules from being tracked by git.',
      },
      {
        id: 'q1-3',
        question: 'What does the "package-lock.json" file ensure in a Node.js project?',
        options: [
          'Locks the file so other developers cannot edit package.json',
          'Guarantees identical dependency versions are installed across different machines',
          'Encrypts sensitive API credentials in production',
          'Speeds up git push operations',
        ],
        correctIndex: 1,
        explanation: 'package-lock.json pins exact dependency tree resolutions so everyone installs identical sub-dependencies.',
      },
      {
        id: 'q1-4',
        question: 'What is the primary role of Node.js in the MERN stack?',
        options: [
          'It is a relational database',
          'It is a JavaScript runtime environment allowing JS execution on the server',
          'It is a CSS preprocessor for React',
          'It replaces HTML in the browser',
        ],
        correctIndex: 1,
        explanation: 'Node.js is built on Chromes V8 engine to execute JavaScript on servers outside the browser.',
      },
      {
        id: 'q1-5',
        question: 'Which HTTP method should be used when creating a new resource on an API?',
        options: ['GET', 'DELETE', 'POST', 'PATCH'],
        correctIndex: 2,
        explanation: 'POST is the standard REST method for creating new resources on a server.',
      },
    ],
  },
  'quiz-m2-js': {
    id: 'quiz-m2-js',
    title: 'Checkpoint: Modern JavaScript & ES6+',
    moduleTitle: 'Web Foundations',
    description: 'Verify your mastery over closures, arrow functions, promises, and array methods.',
    questions: [
      {
        id: 'q2-1',
        question: 'What will `[1, 2, 3].map(x => x * 2)` return?',
        options: ['[1, 2, 3]', '[2, 4, 6]', 'undefined', '6'],
        correctIndex: 1,
        explanation: 'Array.map applies the transformation to every element, returning a new array [2, 4, 6].',
      },
      {
        id: 'q2-2',
        question: 'What is the key difference between `==` and `===` in JavaScript?',
        options: [
          '`==` checks both value and type, while `===` allows type coercion',
          '`===` performs strict equality without type coercion; `==` allows type coercion',
          'There is no difference in ES6',
          '`===` is only for comparing numbers and strings',
        ],
        correctIndex: 1,
        explanation: 'Strict equality `===` checks both value and data type without implicit type conversion.',
      },
      {
        id: 'q2-3',
        question: 'What happens when an `async` function is called?',
        options: [
          'It pauses the entire browser thread',
          'It always returns a Promise, resolving with the returned value',
          'It creates a new worker thread in background',
          'It must be accompanied by a callback argument',
        ],
        correctIndex: 1,
        explanation: 'Async functions always wrap their return value in a Promise.',
      },
      {
        id: 'q2-4',
        question: 'What does the spread operator (`...`) do when applied to an object `{ ...user, role: "admin" }`?',
        options: [
          'Deletes the user object',
          'Creates a shallow copy of user and overrides or adds the role property',
          'Mutates the original user object directly',
          'Converts the object to JSON',
        ],
        correctIndex: 1,
        explanation: 'Object spread copies properties into a new object, allowing clean immutable updates.',
      },
      {
        id: 'q2-5',
        question: 'What will `typeof NaN` evaluate to in JavaScript?',
        options: ['"undefined"', '"nan"', '"number"', '"object"'],
        correctIndex: 2,
        explanation: 'In JavaScript numeric specifications, NaN (Not-a-Number) is of type "number".',
      },
    ],
  },
  'quiz-m3-express': {
    id: 'quiz-m3-express',
    title: 'Checkpoint: Express Architecture & Middleware',
    moduleTitle: 'Node.js & Express',
    description: 'Ensure you understand middleware chains, status codes, and routing.',
    questions: [
      {
        id: 'q3-1',
        question: 'What does calling `next()` do inside an Express middleware function?',
        options: [
          'Sends the HTTP response immediately',
          'Passes control to the next middleware or route handler in the stack',
          'Restarts the Express application',
          'Redirects the client to the next URL',
        ],
        correctIndex: 1,
        explanation: 'next() tells Express to invoke the subsequent middleware function in the request pipeline.',
      },
      {
        id: 'q3-2',
        question: 'Which HTTP status code is most appropriate when a requested resource is created successfully?',
        options: ['200 OK', '201 Created', '204 No Content', '301 Moved Permanently'],
        correctIndex: 1,
        explanation: '201 Created specifically signals that the request succeeded and led to resource creation.',
      },
      {
        id: 'q3-3',
        question: 'How do you access URL route parameters like `/users/:id` in Express?',
        options: ['req.body.id', 'req.query.id', 'req.params.id', 'req.headers.id'],
        correctIndex: 2,
        explanation: 'Named route segments configured with `:param` are accessible on `req.params`.',
      },
      {
        id: 'q3-4',
        question: 'What built-in Express middleware is used to parse JSON bodies?',
        options: ['express.url()', 'express.json()', 'express.bodyParser()', 'express.static()'],
        correctIndex: 1,
        explanation: 'express.json() parses incoming JSON request bodies into `req.body`.',
      },
      {
        id: 'q3-5',
        question: 'What is the signature of an error-handling middleware in Express?',
        options: [
          '(req, res, next)',
          '(err, req, res, next)',
          '(err, res, next)',
          '(req, res, err)',
        ],
        correctIndex: 1,
        explanation: 'Express distinguishes error middleware by having exactly 4 parameters: (err, req, res, next).',
      },
    ],
  },
  'quiz-m4-mongo': {
    id: 'quiz-m4-mongo',
    title: 'Checkpoint: MongoDB & Mongoose Schemas',
    moduleTitle: 'MongoDB',
    description: 'Test your understanding of collections, documents, BSON types, and schemas.',
    questions: [
      {
        id: 'q4-1',
        question: 'What format does MongoDB use internally to store documents with typed extensions?',
        options: ['XML', 'YAML', 'BSON (Binary JSON)', 'CSV'],
        correctIndex: 2,
        explanation: 'MongoDB stores data in BSON, which provides binary serialization with support for Date, ObjectId, and Int.',
      },
      {
        id: 'q4-2',
        question: 'What is the default unique identifier field generated by MongoDB for each document?',
        options: ['_uid', 'id', '_id', '__key'],
        correctIndex: 2,
        explanation: '_id is the default primary key populated with an ObjectId if not provided.',
      },
      {
        id: 'q4-3',
        question: 'In Mongoose, how do you define a field that must be provided when saving?',
        options: ['mandatory: true', 'required: true', 'notNull: true', 'enforce: true'],
        correctIndex: 1,
        explanation: 'Mongoose schema definitions use `required: true` or `required: [true, "Message"]`.',
      },
      {
        id: 'q4-4',
        question: 'Which Mongoose method finds a single document matching a query and updates it?',
        options: ['findAndUpdate()', 'findOneAndUpdate()', 'updateOneAndFetch()', 'queryAndModify()'],
        correctIndex: 1,
        explanation: 'Model.findOneAndUpdate(filter, update, options) finds and updates in a single operation.',
      },
      {
        id: 'q4-5',
        question: 'What Mongoose method replaces ObjectId references with actual referenced documents?',
        options: ['expand()', 'join()', 'populate()', 'lookup()'],
        correctIndex: 2,
        explanation: '.populate("fieldName") replaces referenced IDs with documents from other collections.',
      },
    ],
  },
  'quiz-m5-react': {
    id: 'quiz-m5-react',
    title: 'Checkpoint: React Components & Hooks',
    moduleTitle: 'React',
    description: 'Verify your grasp of state, effects, component lifecycles, and props.',
    questions: [
      {
        id: 'q5-1',
        question: 'Why should you never mutate state directly in React like `state.count = 5`?',
        options: [
          'JavaScript throws a syntax error',
          'React relies on reference equality to detect changes and trigger re-renders',
          'It deletes other properties in state',
          'It only works inside class components',
        ],
        correctIndex: 1,
        explanation: 'React compares state references to know when to re-render; direct mutation skips this detection.',
      },
      {
        id: 'q5-2',
        question: 'When does the cleanup function returned from `useEffect` execute?',
        options: [
          'Never unless the browser tab closes',
          'Before the effect runs again and when the component unmounts',
          'Only when an error is thrown',
          'Immediately before the first render',
        ],
        correctIndex: 1,
        explanation: 'Cleanups run before re-running the effect on dependency change and when unmounting.',
      },
      {
        id: 'q5-3',
        question: 'What is the main benefit of the `key` prop when rendering lists in React?',
        options: [
          'It provides CSS styling to list items',
          'It helps React identify which items have changed, been added, or removed efficiently',
          'It encrypts sensitive array elements',
          'It enables pagination automatically',
        ],
        correctIndex: 1,
        explanation: 'Keys give React stable identities across renders to minimize DOM re-creations.',
      },
      {
        id: 'q5-4',
        question: 'How do you pass data from a child component back up to a parent component in React?',
        options: [
          'By modifying window.location',
          'By passing a callback function as a prop and invoking it from the child',
          'Using the parent selector in CSS',
          'By importing the parent component into the child',
        ],
        correctIndex: 1,
        explanation: 'Lifting state up: parents pass callback handlers down, and children call them with data.',
      },
      {
        id: 'q5-5',
        question: 'What hook is recommended for complex state logic that involves multiple sub-values?',
        options: ['useRef', 'useReducer', 'useLayoutEffect', 'useId'],
        correctIndex: 1,
        explanation: 'useReducer provides a structured state machine with action dispatching for complex state.',
      },
    ],
  },
  'quiz-m6-jwt': {
    id: 'quiz-m6-jwt',
    title: 'Checkpoint: Full Stack Security & JWT Auth',
    moduleTitle: 'Full Stack MERN',
    description: 'Understand tokens, password hashing, CORS, and full stack security.',
    questions: [
      {
        id: 'q6-1',
        question: 'What are the three parts of a JSON Web Token separated by dots?',
        options: [
          'Key, Value, Timestamp',
          'Header, Payload, Signature',
          'User, Password, Hash',
          'Issuer, Audience, Expiry',
        ],
        correctIndex: 1,
        explanation: 'A JWT consists of Header.Payload.Signature encoded in Base64Url.',
      },
      {
        id: 'q6-2',
        question: 'Why should passwords NEVER be stored in plain text or encrypted with two-way encryption?',
        options: [
          'Plaintext takes too much disk space',
          'Two-way keys can be leaked; salted one-way hashes (e.g. bcrypt) cannot be easily reversed',
          'Databases do not support text fields longer than 10 characters',
          'MongoDB rejects plain strings',
        ],
        correctIndex: 1,
        explanation: 'Salted cryptographic hashes like bcrypt ensure that even if the database is leaked, passwords remain protected.',
      },
      {
        id: 'q6-3',
        question: 'Where is an Authorization Bearer token typically sent in HTTP requests?',
        options: ['In the URL path', 'In the request body only', 'In the `Authorization` request header', 'In a cookie named `password`'],
        correctIndex: 2,
        explanation: 'Standard REST conventions send `Authorization: Bearer <token>` in the request headers.',
      },
      {
        id: 'q6-4',
        question: 'What is CORS (Cross-Origin Resource Sharing)?',
        options: [
          'A database indexing algorithm',
          'A browser security mechanism that restricts HTTP requests made to another domain/origin',
          'A React compiler plugin',
          'A Docker networking protocol',
        ],
        correctIndex: 1,
        explanation: 'CORS is enforced by browsers to prevent malicious scripts on one origin from accessing sensitive APIs on another.',
      },
      {
        id: 'q6-5',
        question: 'What HTTP status code represents "401 Unauthorized"?',
        options: [
          'The server crashed',
          'The request requires user authentication credentials which are missing or invalid',
          'The client is authenticated but forbidden from accessing the resource',
          'The server is busy',
        ],
        correctIndex: 1,
        explanation: '401 Unauthorized indicates authentication is missing or token is invalid. (403 is Forbidden).',
      },
    ],
  },
}

export const mernCodingProblems: Record<string, CodingProblem> = {
  'challenge-two-sum': {
    id: 'challenge-two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    moduleTitle: 'Web Foundations',
    description: `Given an array of integers \`nums\` and an integer \`target\`, return the **indices** of the two numbers such that they add up to \`target\`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order (e.g., \`[0, 1]\` or \`[1, 0]\`).`,
    examples: [
      {
        input: 'nums = [2, 7, 11, 15], target = 9',
        output: '[0, 1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3, 2, 4], target = 6',
        output: '[1, 2]',
        explanation: 'nums[1] + nums[2] == 2 + 4 == 6.',
      },
      {
        input: 'nums = [3, 3], target = 6',
        output: '[0, 1]',
      },
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      'Only one valid answer exists.',
    ],
    functionName: 'twoSum',
    starterCode: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  // Write your code here
  
}
`,
    solutionCode: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
    testCases: [
      {
        inputDesc: 'nums = [2, 7, 11, 15], target = 9',
        inputArgs: [[2, 7, 11, 15], 9],
        expected: [0, 1],
      },
      {
        inputDesc: 'nums = [3, 2, 4], target = 6',
        inputArgs: [[3, 2, 4], 6],
        expected: [1, 2],
      },
      {
        inputDesc: 'nums = [3, 3], target = 6',
        inputArgs: [[3, 3], 6],
        expected: [0, 1],
      },
      {
        inputDesc: 'nums = [1, 5, 8, 3], target = 11',
        inputArgs: [[1, 5, 8, 3], 11],
        expected: [2, 3],
      },
    ],
  },

  'challenge-palindrome': {
    id: 'challenge-palindrome',
    title: 'Valid Palindrome',
    difficulty: 'Easy',
    moduleTitle: 'Web Foundations',
    description: `A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string \`s\`, return \`true\` if it is a palindrome, or \`false\` otherwise.`,
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: 'true',
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: 'false',
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: 'true',
        explanation: 's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: [
      '1 <= s.length <= 2 * 10^5',
      's consists only of printable ASCII characters.',
    ],
    functionName: 'isPalindrome',
    starterCode: `/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  // Write your code here
  
}
`,
    solutionCode: `function isPalindrome(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}`,
    testCases: [
      {
        inputDesc: 's = "A man, a plan, a canal: Panama"',
        inputArgs: ['A man, a plan, a canal: Panama'],
        expected: true,
      },
      {
        inputDesc: 's = "race a car"',
        inputArgs: ['race a car'],
        expected: false,
      },
      {
        inputDesc: 's = " "',
        inputArgs: [' '],
        expected: true,
      },
      {
        inputDesc: 's = "0P"',
        inputArgs: ['0P'],
        expected: false,
      },
    ],
  },

  'challenge-custom-map': {
    id: 'challenge-custom-map',
    title: 'Custom Array Map Implementation',
    difficulty: 'Easy',
    moduleTitle: 'Web Foundations',
    description: `Write a function \`myMap(arr, fn)\` that replicates the behavior of the native JavaScript \`Array.prototype.map\` without calling the built-in \`.map()\` method.

It should return a new array containing each transformed element returned by \`fn(element, index)\`.`,
    examples: [
      {
        input: 'arr = [1, 2, 3], fn = (x) => x * 2',
        output: '[2, 4, 6]',
      },
      {
        input: 'arr = ["a", "b"], fn = (x, i) => x + i',
        output: '["a0", "b1"]',
      },
    ],
    constraints: [
      '0 <= arr.length <= 1000',
      'Do not mutate the original array.',
    ],
    functionName: 'myMap',
    starterCode: `/**
 * @param {any[]} arr
 * @param {Function} fn
 * @return {any[]}
 */
function myMap(arr, fn) {
  // Write your code here (do NOT use arr.map)
  
}
`,
    solutionCode: `function myMap(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
}`,
    testCases: [
      {
        inputDesc: 'arr = [1, 2, 3], fn = x => x * 10',
        inputArgs: [[1, 2, 3], (x: number) => x * 10],
        expected: [10, 20, 30],
      },
      {
        inputDesc: 'arr = ["dev", "lead"], fn = (s, i) => `${i}:${s}`',
        inputArgs: [['dev', 'lead'], (s: string, i: number) => `${i}:${s}`],
        expected: ['0:dev', '1:lead'],
      },
      {
        inputDesc: 'arr = [], fn = x => x + 1',
        inputArgs: [[], (x: number) => x + 1],
        expected: [],
      },
    ],
  },

  'challenge-bearer-token': {
    id: 'challenge-bearer-token',
    title: 'Bearer Token Extractor',
    difficulty: 'Easy',
    moduleTitle: 'Node.js & Express',
    description: `When authenticating API requests in Express, clients pass the JWT in the \`Authorization\` header:
\`Authorization: Bearer <token>\`

Write a function \`extractBearerToken(header)\` that:
1. Returns the clean token string if the header starts with \`Bearer \` (with a space) and has a valid token.
2. Returns \`null\` if the header is missing, is not a string, is empty, or uses a different scheme (e.g. \`Basic\`).`,
    examples: [
      {
        input: 'header = "Bearer eyJhbGciOiJIUzI1NiJ9.abc.xyz"',
        output: '"eyJhbGciOiJIUzI1NiJ9.abc.xyz"',
      },
      {
        input: 'header = "Basic dXNlcjpwYXNz"',
        output: 'null',
      },
      {
        input: 'header = "Bearer "',
        output: 'null',
      },
    ],
    constraints: [
      'Input can be string, null, or undefined.',
      'Token must not be empty whitespace.',
    ],
    functionName: 'extractBearerToken',
    starterCode: `/**
 * @param {string | null | undefined} header
 * @return {string | null}
 */
function extractBearerToken(header) {
  // Write your code here
  
}
`,
    solutionCode: `function extractBearerToken(header) {
  if (!header || typeof header !== 'string') return null;
  const parts = header.trim().split(' ');
  if (parts.length === 2 && parts[0] === 'Bearer' && parts[1].length > 0) {
    return parts[1];
  }
  return null;
}`,
    testCases: [
      {
        inputDesc: 'header = "Bearer mySecureToken123"',
        inputArgs: ['Bearer mySecureToken123'],
        expected: 'mySecureToken123',
      },
      {
        inputDesc: 'header = "Basic username:secret"',
        inputArgs: ['Basic username:secret'],
        expected: null,
      },
      {
        inputDesc: 'header = "Bearer "',
        inputArgs: ['Bearer '],
        expected: null,
      },
      {
        inputDesc: 'header = ""',
        inputArgs: [''],
        expected: null,
      },
      {
        inputDesc: 'header = null',
        inputArgs: [null],
        expected: null,
      },
    ],
  },

  'challenge-group-anagrams': {
    id: 'challenge-group-anagrams',
    title: 'Group Anagrams',
    difficulty: 'Medium',
    moduleTitle: 'MongoDB',
    description: `Given an array of strings \`strs\`, group the **anagrams** together. You can return the answer in any order.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.`,
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["eat","tea","ate"],["tan","nat"],["bat"]]',
      },
      {
        input: 'strs = [""]',
        output: '[[""]]',
      },
      {
        input: 'strs = ["a"]',
        output: '[["a"]]',
      },
    ],
    constraints: [
      '1 <= strs.length <= 10^4',
      '0 <= strs[i].length <= 100',
      'strs[i] consists of lowercase English letters.',
    ],
    functionName: 'groupAnagrams',
    starterCode: `/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  // Write your code here
  
}
`,
    solutionCode: `function groupAnagrams(strs) {
  const map = {};
  for (const s of strs) {
    const key = s.split('').sort().join('');
    if (!map[key]) map[key] = [];
    map[key].push(s);
  }
  return Object.values(map);
}`,
    testCases: [
      {
        inputDesc: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        inputArgs: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']],
        expected: [['bat'], ['eat', 'tea', 'ate'], ['tan', 'nat']],
      },
      {
        inputDesc: 'strs = [""]',
        inputArgs: [['']],
        expected: [['']],
      },
      {
        inputDesc: 'strs = ["a"]',
        inputArgs: [['a']],
        expected: [['a']],
      },
      {
        inputDesc: 'strs = ["listen", "silent", "enlist"]',
        inputArgs: [['listen', 'silent', 'enlist']],
        expected: [['listen', 'silent', 'enlist']],
      },
    ],
  },

  'challenge-query-parser': {
    id: 'challenge-query-parser',
    title: 'URL Query String Parser',
    difficulty: 'Medium',
    moduleTitle: 'React',
    description: `Write a function \`parseQueryString(queryString)\` that takes a URL search query string (e.g., \`"?page=1&limit=20&search=mern"\`) and parses it into an object of key-value pairs:
\`{ page: "1", limit: "20", search: "mern" }\`.

Requirements:
- Strip any leading \`?\` character if present.
- Decode URI components (e.g. \`%20\` should become space).
- If the query string is empty or just \`?\`, return an empty object \`{}\`.`,
    examples: [
      {
        input: 'queryString = "?page=1&limit=20&search=mern"',
        output: '{ page: "1", limit: "20", search: "mern" }',
      },
      {
        input: 'queryString = "?category=full%20stack&level=all"',
        output: '{ category: "full stack", level: "all" }',
      },
      {
        input: 'queryString = ""',
        output: '{}',
      },
    ],
    constraints: [
      'Input is always a string.',
    ],
    functionName: 'parseQueryString',
    starterCode: `/**
 * @param {string} queryString
 * @return {Record<string, string>}
 */
function parseQueryString(queryString) {
  // Write your code here
  
}
`,
    solutionCode: `function parseQueryString(queryString) {
  if (!queryString || queryString === '?') return {};
  const query = queryString.startsWith('?') ? queryString.slice(1) : queryString;
  const pairs = query.split('&');
  const result = {};
  for (const pair of pairs) {
    if (!pair) continue;
    const [rawKey, rawVal] = pair.split('=');
    const key = decodeURIComponent(rawKey);
    const val = rawVal !== undefined ? decodeURIComponent(rawVal) : '';
    result[key] = val;
  }
  return result;
}`,
    testCases: [
      {
        inputDesc: 'queryString = "?page=2&sort=desc"',
        inputArgs: ['?page=2&sort=desc'],
        expected: { page: '2', sort: 'desc' },
      },
      {
        inputDesc: 'queryString = "?name=John%20Doe&role=dev"',
        inputArgs: ['?name=John%20Doe&role=dev'],
        expected: { name: 'John Doe', role: 'dev' },
      },
      {
        inputDesc: 'queryString = ""',
        inputArgs: [''],
        expected: {},
      },
      {
        inputDesc: 'queryString = "?"',
        inputArgs: ['?'],
        expected: {},
      },
    ],
  },
}

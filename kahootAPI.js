
// Kahoot API Mock
const KAHOOT_API_BASE_URL = 'https://create.kahoot.it/rest/kahoots';

// Mock data for quizzes
const mockQuizzes = [
  {
    uuid: '1234-abcd-5678',
    title: 'General Knowledge Quiz',
    description: 'Test your knowledge on various topics!',
    cover: 'https://placehold.co/600x400/1A8555/FFFFFF/png?text=General+Knowledge',
    questions: [
      {
        uuid: 'q1',
        question: 'What is the capital of France?',
        time: 30,
        points: true,
        pointsMultiplier: 1,
        choices: [
          { answer: 'Paris', correct: true },
          { answer: 'London', correct: false },
          { answer: 'Berlin', correct: false },
          { answer: 'Madrid', correct: false }
        ],
        type: 'quiz',
        layout: 'CLASSIC'
      },
      {
        uuid: 'q2',
        question: 'Which planet is closest to the sun?',
        time: 20,
        points: true,
        pointsMultiplier: 1,
        choices: [
          { answer: 'Venus', correct: false },
          { answer: 'Mercury', correct: true },
          { answer: 'Earth', correct: false },
          { answer: 'Mars', correct: false }
        ],
        type: 'quiz',
        layout: 'CLASSIC'
      }
    ],
    type: 'quiz',
    visibility: 1,
    creator_username: 'quizwizard'
  },
  {
    uuid: '5678-efgh-9012',
    title: 'Science Quiz',
    description: 'Challenge your scientific knowledge!',
    cover: 'https://placehold.co/600x400/46BDFF/FFFFFF/png?text=Science+Quiz',
    questions: [
      {
        uuid: 'q1',
        question: 'What is the chemical symbol for gold?',
        time: 20,
        points: true,
        pointsMultiplier: 1,
        choices: [
          { answer: 'Go', correct: false },
          { answer: 'Gd', correct: false },
          { answer: 'Au', correct: true },
          { answer: 'Ag', correct: false }
        ],
        type: 'quiz',
        layout: 'CLASSIC'
      },
      {
        uuid: 'q2',
        question: 'What is the most abundant gas in Earth\'s atmosphere?',
        time: 20,
        points: true,
        pointsMultiplier: 1,
        choices: [
          { answer: 'Oxygen', correct: false },
          { answer: 'Carbon Dioxide', correct: false },
          { answer: 'Nitrogen', correct: true },
          { answer: 'Hydrogen', correct: false }
        ],
        type: 'quiz',
        layout: 'CLASSIC'
      }
    ],
    type: 'quiz',
    visibility: 1,
    creator_username: 'scienceteacher'
  },
  {
    uuid: '9012-ijkl-3456',
    title: 'History Trivia',
    description: 'Test your knowledge of world history!',
    cover: 'https://placehold.co/600x400/8A4BD5/FFFFFF/png?text=History+Trivia',
    questions: [
      {
        uuid: 'q1',
        question: 'Who was the first President of the United States?',
        time: 20,
        points: true,
        pointsMultiplier: 1,
        choices: [
          { answer: 'Thomas Jefferson', correct: false },
          { answer: 'Abraham Lincoln', correct: false },
          { answer: 'George Washington', correct: true },
          { answer: 'John Adams', correct: false }
        ],
        type: 'quiz',
        layout: 'CLASSIC'
      },
      {
        uuid: 'q2',
        question: 'In which year did World War II end?',
        time: 20,
        points: true,
        pointsMultiplier: 1,
        choices: [
          { answer: '1943', correct: false },
          { answer: '1944', correct: false },
          { answer: '1945', correct: true },
          { answer: '1946', correct: false }
        ],
        type: 'quiz',
        layout: 'CLASSIC'
      }
    ],
    type: 'quiz',
    visibility: 1,
    creator_username: 'historyteacher'
  }
];

// Fetch public quizzes (mock function)
async function fetchPublicQuizzes(limit = 10, offset = 0) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Return mock data
  return {
    totalCount: mockQuizzes.length,
    entities: mockQuizzes.slice(offset, offset + limit)
  };
}

// Fetch a single quiz by ID (mock function)
async function fetchQuizById(id) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));
  
  const quiz = mockQuizzes.find(q => q.uuid === id);
  
  if (!quiz) {
    throw new Error('Quiz not found');
  }
  
  return quiz;
}

// Create a new quiz (mock function)
async function createQuiz(quizData) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Generate a mock UUID
  const uuid = 'new-' + Math.random().toString(36).substring(2, 11);
  
  const newQuiz = {
    uuid,
    ...quizData,
    creator_username: 'current_user',
    visibility: 1,
    type: 'quiz'
  };
  
  // In a real app, this would be posted to the API
  // For now, we just return the mock object
  return newQuiz;
}

// Join a quiz with PIN (mock function)
async function joinQuizByPin(pin, nickname) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock validation - accept any PIN that's 6 digits
  if (!/^\d{6}$/.test(pin)) {
    throw new Error('Invalid PIN format. Please use a 6-digit number.');
  }
  
  // In a real app, this would connect to a live quiz session
  return {
    success: true,
    gameId: pin,
    nickname: nickname,
    message: 'Successfully joined game!'
  };
}

// Submit quiz answers (mock function)
async function submitQuizAnswers(quizId, answers) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock score calculation
  const totalQuestions = answers.length;
  const correctAnswers = Math.floor(Math.random() * (totalQuestions + 1));
  const score = Math.round((correctAnswers / totalQuestions) * 100);
  
  return {
    quizId,
    totalQuestions,
    correctAnswers,
    score,
    completedAt: new Date().toISOString()
  };
}

// Expose functions globally
window.KahootAPI = {
  fetchPublicQuizzes,
  fetchQuizById,
  createQuiz,
  joinQuizByPin,
  submitQuizAnswers
};

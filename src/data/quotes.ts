export const mortalityQuotes = [
  {
    text: "Remember that you are mortal",
    author: "Ancient Roman Saying"
  },
  {
    text: "Time is the most valuable thing we can spend",
    author: "Theophrastus"
  },
  {
    text: "Life is really simple, but we insist on making it complicated",
    author: "Confucius"
  },
  {
    text: "The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time",
    author: "Mark Twain"
  },
  {
    text: "Death is not the greatest loss in life. The greatest loss is what dies inside us while we live",
    author: "Norman Cousins"
  },
  {
    text: "Time flies over us, but leaves its shadow behind",
    author: "Nathaniel Hawthorne"
  },
  {
    text: "The meaning of life is to give life meaning",
    author: "Viktor Frankl"
  },
  {
    text: "Yesterday is history, tomorrow is a mystery, today is a gift",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away",
    author: "Maya Angelou"
  },
  {
    text: "Time is what we want most, but what we use worst",
    author: "William Penn"
  }
];

export const getRandomQuote = () => {
  return mortalityQuotes[Math.floor(Math.random() * mortalityQuotes.length)];
};
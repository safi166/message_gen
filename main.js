function generateRandomMessage() {
    const greetings = ["Hello", "Hi", "Hey"];
    const subjects = ["World", "Friend", "Everyone"];
    const actions = ["enjoy coding", "keep learning", "have a great day"];
  
    const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
  
    const randomGreeting = getRandomElement(greetings);
    const randomSubject = getRandomElement(subjects);
    const randomAction = getRandomElement(actions);
  
    return `${randomGreeting}, ${randomSubject}! ${randomAction}.`;
  }
  
  // Example usage:
  const randomMessage = generateRandomMessage();
  console.log(randomMessage);
  
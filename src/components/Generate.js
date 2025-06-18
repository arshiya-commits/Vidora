export function getRandomName() {
  const names = [
    "Arshiya","Hameed","Bhavana","Bhargavi","prathyusha"
  ];
const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}


export function getRandomMessage() {
  const messages = [
    "Hello!",
    "How are you?",
    "This is amazing!",
    "yem chesthunav",
    "Bunk kottudham",
    "Assalamu alaikum",
    "record rasava",
    "yenni units ayipoyinayi",
    "Tommorow vasthav",
    "kya karin",
    "Let's build something cool.",
    "Nice to meet you!",
    "Good morning!",
    "What's going on?",
    "Learning never stops!",
    "Chatting randomly!"
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}
export function nthPrime(n) {
  let count = 0;
  let num = 2;

  while (true) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      count++;
      if (count === n) {
        return num;
      }
    }

    num++;
  }
}

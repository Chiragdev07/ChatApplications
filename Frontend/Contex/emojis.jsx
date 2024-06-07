export const funEmojis=[
  " 😄",
   "😃",
    "😀",
   "😊",
   "😁",
   "😆",
   "😅",
   "😂",
   "🤣",
   "😇",
   "😉",
   "😌",
   "😍",
   "🥰",
   "😋",
   "😎",
   "🤩",
   "🥳",
   "😸",
   "😺",
];

export const getRandomEmojis=()=>{
    return funEmojis[Math.floor(Math.random()*funEmojis.length)];
}
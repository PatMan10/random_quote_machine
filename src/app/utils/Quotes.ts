import F from "./Functions";
import Quote from "../models/Quote";

class Quotes {
  static getQuote(): Quote {
    const randomIndex = F.getRandomInt(arrQuotes.length);
    const q = arrQuotes[randomIndex];
    return new Quote(q.author, q.body);
  }
}

export default Quotes;

const arrQuotes = [
  {
    body:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison"
  },
  {
    body: "You can observe a lot just by watching.",
    author: "Yogi Berra"
  },
  {
    body: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln"
  },
  {
    body: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "Fate is in your hands and no one elses",
    author: "Byron Pulsifer"
  },
  {
    body: "Be the chief but never the lord.",
    author: "Lao Tzu"
  },
  {
    body: "Nothing happens unless first we dream.",
    author: "Carl Sandburg"
  },
  {
    body: "Well begun is half done.",
    author: "Aristotle"
  },
  {
    body: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra"
  },
  {
    body: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster"
  },
  {
    body: "Peace comes from within. Do not seek it without.",
    author: "Buddha"
  },
  {
    body: "What you give is what you get.",
    author: "Byron Pulsifer"
  },
  {
    body: "We can only learn to love by loving.",
    author: "Iris Murdoch"
  },
  {
    body: "Life is change. Growth is optional. Choose wisely.",
    author: "Karen Clark"
  },
  {
    body: "You'll see it when you believe it.",
    author: "Wayne Dyer"
  },
  {
    body: "Today is the tomorrow we worried about yesterday.",
    author: ""
  },
  {
    body: "It's easier to see the mistakes on someone else's paper.",
    author: ""
  },
  {
    body: "Every man dies. Not every man really lives.",
    author: ""
  },
  {
    body: "To lead people walk behind them.",
    author: "Lao Tzu"
  },
  {
    body: "Having nothing, nothing can he lose.",
    author: "William Shakespeare"
  },
  {
    body: "Trouble is only opportunity in work clothes.",
    author: "Henry J. Kaiser"
  },
  {
    body: "A rolling stone gathers no moss.",
    author: "Publilius Syrus"
  },
  {
    body: "Ideas are the beginning points of all fortunes.",
    author: "Napoleon Hill"
  },
  {
    body: "Everything in life is luck.",
    author: "Donald Trump"
  },
  {
    body: "Doing nothing is better than being busy doing nothing.",
    author: "Lao Tzu"
  },
  {
    body: "Trust yourself. You know more than you think you do.",
    author: "Benjamin Spock"
  },
  {
    body: "Study the past, if you would divine the future.",
    author: "Confucius"
  },
  {
    body: "The day is already blessed, find peace within it.",
    author: ""
  },
  {
    body: "From error to error one discovers the entire truth.",
    author: "Sigmund Freud"
  },
  {
    body: "Well done is better than well said.",
    author: "Benjamin Franklin"
  },
  {
    body: "Bite off more than you can chew, then chew it.",
    author: "Ella Williams"
  },
  {
    body: "Work out your own salvation. Do not depend on others.",
    author: "Buddha"
  },
  {
    body: "One today is worth two tomorrows.",
    author: "Benjamin Franklin"
  },
  {
    body: "Once you choose hope, anythings possible.",
    author: "Christopher Reeve"
  },
  {
    body: "God always takes the simplest way.",
    author: "Albert Einstein"
  },
  {
    body: "One fails forward toward success.",
    author: "Charles Kettering"
  },
  {
    body: "From small beginnings come great things.",
    author: ""
  },
  {
    body: "Learning is a treasure that will follow its owner everywhere",
    author: "Chinese proverb"
  },
  {
    body: "Be as you wish to seem.",
    author: "Socrates"
  },
  {
    body: "The world is always in movement.",
    author: "V. Naipaul"
  },
  {
    body: "Never mistake activity for achievement.",
    author: "John Wooden"
  },
  {
    body: "What worries you masters you.",
    author: "Haddon Robinson"
  },
  {
    body: "One faces the future with ones past.",
    author: "Pearl Buck"
  },
  {
    body: "Goals are the fuel in the furnace of achievement.",
    author: "Brian Tracy"
  },
  {
    body: "Who sows virtue reaps honour.",
    author: "Leonardo da Vinci"
  },
  {
    body: "Be kind whenever possible. It is always possible.",
    author: "Dalai Lama"
  },
  {
    body: "Talk doesn't cook rice.",
    author: "Chinese proverb"
  },
  {
    body: "He is able who thinks he is able.",
    author: "Buddha"
  },
  {
    body: "Be as you wish to seem.",
    author: "Socrates"
  },
  {
    body: "A goal without a plan is just a wish.",
    author: "Larry Elder"
  },
  {
    body: "To succeed, we must first believe that we can.",
    author: "Michael Korda"
  },
  {
    body: "Learn from yesterday, live for today, hope for tomorrow.",
    author: "Albert Einstein"
  },
  {
    body: "A weed is no more than a flower in disguise.",
    author: "James Lowell"
  },
  {
    body: "Do, or do not. There is no try.",
    author: "Yoda"
  },
  {
    body: "All serious daring starts from within.",
    author: "Harriet Beecher Stowe"
  },
  {
    body: "The best teacher is experience learned from failures.",
    author: "Byron Pulsifer"
  },
  {
    body: "Think how hard physics would be if particles could think.",
    author: "Murray Gell-Mann"
  },
  {
    body: "Love is the flower you've got to let grow.",
    author: "John Lennon"
  },
  {
    body: "Don't wait. The time will never be just right.",
    author: "Napoleon Hill"
  },
  {
    body: "One fails forward toward success.",
    author: "Charles Kettering"
  },
  {
    body: "Time is the wisest counsellor of all.",
    author: "Pericles"
  },
  {
    body: "You give before you get.",
    author: "Napoleon Hill"
  },
  {
    body: "Wisdom begins in wonder.",
    author: "Socrates"
  },
  {
    body: "Without courage, wisdom bears no fruit.",
    author: "Baltasar Gracian"
  },
  {
    body: "Change in all things is sweet.",
    author: "Aristotle"
  },
  {
    body: "What you fear is that which requires action to overcome.",
    author: "Byron Pulsifer"
  },
  {
    body: "The best teacher is experience learned from failures.",
    author: "Byron Pulsifer"
  },
  {
    body: "When performance exceeds ambition, the overlap is called success.",
    author: "Cullen Hightower"
  },
  {
    body: "When deeds speak, words are nothing.",
    author: "African proverb"
  },
  {
    body:
      "Real magic in relationships means an absence of judgement of others.",
    author: "Wayne Dyer"
  },
  {
    body: "When performance exceeds ambition, the overlap is called success.",
    author: "Cullen Hightower"
  },
  {
    body: "I never think of the future. It comes soon enough.",
    author: "Albert Einstein"
  },
  {
    body: "Skill to do comes of doing.",
    author: "Ralph Emerson"
  },
  {
    body: "Wisdom is the supreme part of happiness.",
    author: "Sophocles"
  },
  {
    body: "I believe that every person is born with talent.",
    author: "Maya Angelou"
  },
  {
    body: "Important principles may, and must, be inflexible.",
    author: "Abraham Lincoln"
  },
  {
    body: "The undertaking of a new action brings new strength.",
    author: "Richard Evans"
  },
  {
    body: "I believe that every person is born with talent.",
    author: "Maya Angelou"
  },
  {
    body: "The years teach much which the days never know.",
    author: "Ralph Emerson"
  },
  {
    body: "Our distrust is very expensive.",
    author: "Ralph Emerson"
  },
  {
    body: "All know the way; few actually walk it.",
    author: "Bodhidharma"
  },
  {
    body: "Great talent finds happiness in execution.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "Faith in oneself is the best and safest course.",
    author: "Michelangelo"
  },
  {
    body: "Courage is going from failure to failure without losing enthusiasm.",
    author: "Winston Churchill"
  },
  {
    body: "The two most powerful warriors are patience and time.",
    author: "Leo Tolstoy"
  },
  {
    body: "Anticipate the difficult by managing the easy.",
    author: "Lao Tzu"
  },
  {
    body: "Those who are free of resentful thoughts surely find peace.",
    author: "Buddha"
  },
  {
    body: "Talk doesn't cook rice.",
    author: "Chinese proverb"
  },
  {
    body: "A short saying often contains much wisdom.",
    author: "Sophocles"
  },
  {
    body: "The day is already blessed, find peace within it.",
    author: ""
  },
  {
    body: "It takes both sunshine and rain to make a rainbow.",
    author: ""
  },
  {
    body: "A beautiful thing is never perfect.",
    author: ""
  },
  {
    body: "Only do what your heart tells you.",
    author: "Princess Diana"
  },
  {
    body: "Life is movement-we breathe, we eat, we walk, we move!",
    author: "John Pierrakos"
  },
  {
    body: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt"
  },
  {
    body: "One fails forward toward success.",
    author: "Charles Kettering"
  },
  {
    body: "Argue for your limitations, and sure enough theyre yours.",
    author: "Richard Bach"
  },
  {
    body: "Luck is what happens when preparation meets opportunity.",
    author: "Seneca"
  },
  {
    body: "Victory belongs to the most persevering.",
    author: "Napoleon Bonaparte"
  },
  {
    body: "Once you choose hope, anythings possible.",
    author: "Christopher Reeve"
  },
  {
    body: "Love all, trust a few, do wrong to none.",
    author: "William Shakespeare"
  },
  {
    body: "In order to win, you must expect to win.",
    author: "Richard Bach"
  },
  {
    body: "A goal is a dream with a deadline.",
    author: "Napoleon Hill"
  },
  {
    body: "You can do it if you believe you can!",
    author: "Napoleon Hill"
  },
  {
    body: "Set your goals high, and don't stop till you get there.",
    author: "Bo Jackson"
  },
  {
    body:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison"
  },
  {
    body: "Every new day is another chance to change your life.",
    author: ""
  },
  {
    body: "Smile, breathe, and go slowly.",
    author: "Thich Nhat Hanh"
  },
  {
    body: "Nobody will believe in you unless you believe in yourself.",
    author: "Liberace"
  },
  {
    body: "Be kind whenever possible. It is always possible.",
    author: "Dalai Lama"
  },
  {
    body: "Do more than dream: work.",
    author: "William Arthur Ward"
  },
  {
    body: "No man was ever wise by chance.",
    author: "Seneca"
  },
  {
    body: "Some pursue happiness, others create it.",
    author: ""
  },
  {
    body: "It's easier to see the mistakes on someone else's paper.",
    author: ""
  },
  {
    body: "Think how hard physics would be if particles could think.",
    author: "Murray Gell-Mann"
  },
  {
    body: "Well begun is half done.",
    author: "Aristotle"
  },
  {
    body: "He that is giddy thinks the world turns round.",
    author: "William Shakespeare"
  },
  {
    body: "Don't ruin the present with the ruined past.",
    author: "Ellen Gilchrist"
  },
  {
    body: "Do something wonderful, people may imitate it.",
    author: "Albert Schweitzer"
  },
  {
    body: "We do what we do because we believe.",
    author: ""
  },
  {
    body: "Great talent finds happiness in execution.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt"
  },
  {
    body: "If you cannot be silent be brilliant and thoughtful.",
    author: "Byron Pulsifer"
  },
  {
    body: "Smile, breathe, and go slowly.",
    author: "Thich Nhat Hanh"
  },
  {
    body: "Who looks outside, dreams; who looks inside, awakes.",
    author: "Carl Jung"
  },
  {
    body: "What we think, we become.",
    author: "Buddha"
  },
  {
    body: "The shortest answer is doing.",
    author: "Lord Herbert"
  },
  {
    body: "All our knowledge has its origins in our perceptions.",
    author: "Leonardo da Vinci"
  },
  {
    body: "He is able who thinks he is able.",
    author: "Buddha"
  },
  {
    body: "The harder you fall, the higher you bounce.",
    author: ""
  },
  {
    body: "Trusting our intuition often saves us from disaster.",
    author: "Anne Wilson Schaef"
  },
  {
    body: "Truth is powerful and it prevails.",
    author: "Sojourner Truth"
  },
  {
    body: "Talk doesn't cook rice.",
    author: "Chinese proverb"
  },
  {
    body: "Light tomorrow with today!",
    author: "Elizabeth Browning"
  },
  {
    body: "Silence is a fence around wisdom.",
    author: "German proverb"
  },
  {
    body: "Society develops wit, but its contemplation alone forms genius.",
    author: "Madame de Stael"
  },
  {
    body:
      "Real magic in relationships means an absence of judgement of others.",
    author: "Wayne Dyer"
  },
  {
    body: "The years teach much which the days never know.",
    author: "Ralph Emerson"
  },
  {
    body: "We can only learn to love by loving.",
    author: "Iris Murdoch"
  },
  {
    body: "The simplest things are often the truest.",
    author: "Richard Bach"
  },
  {
    body: "What you give is what you get.",
    author: "Byron Pulsifer"
  },
  {
    body: "Everyone smiles in the same language.",
    author: ""
  },
  {
    body: "A short saying often contains much wisdom.",
    author: "Sophocles"
  },
  {
    body: "Yesterday I dared to struggle. Today I dare to win.",
    author: "Bernadette Devlin"
  },
  {
    body: "Victory belongs to the most persevering.",
    author: "Napoleon Bonaparte"
  },
  {
    body: "No alibi will save you from accepting the responsibility.",
    author: "Napoleon Hill"
  },
  {
    body: "If you can dream it, you can do it.",
    author: "Walt Disney"
  },
  {
    body: "From error to error one discovers the entire truth.",
    author: "Sigmund Freud"
  },
  {
    body: "It is better to travel well than to arrive.",
    author: "Buddha"
  },
  {
    body: "Life shrinks or expands in proportion to one's courage.",
    author: "Anais Nin"
  },
  {
    body: "You have to believe in yourself.",
    author: "Sun Tzu"
  },
  {
    body: "Our intention creates our reality.",
    author: "Wayne Dyer"
  },
  {
    body: "Silence is a true friend who never betrays.",
    author: "Confucius"
  },
  {
    body: "Character develops itself in the stream of life.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "From little acorns mighty oaks do grow.",
    author: "American proverb"
  },
  {
    body: "You have to believe in yourself.",
    author: "Sun Tzu"
  },
  {
    body: "You can't stop the waves, but you can learn to surf.",
    author: "Jon Kabat-Zinn"
  },
  {
    body: "Reality does not conform to the ideal, but confirms it.",
    author: "Gustave Flaubert"
  },
  {
    body: "Speak low, if you speak love.",
    author: "William Shakespeare"
  },
  {
    body: "A really great talent finds its happiness in execution.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "Reality leaves a lot to the imagination.",
    author: "John Lennon"
  },
  {
    body: "Our intention creates our reality.",
    author: "Wayne Dyer"
  },
  {
    body: "Society develops wit, but its contemplation alone forms genius.",
    author: "Madame de Stael"
  },
  {
    body: "The greatest remedy for anger is delay.",
    author: "Seneca"
  },
  {
    body: "Growth itself contains the germ of happiness.",
    author: "Pearl Buck"
  },
  {
    body: "You can do what's reasonable or you can decide what's possible.",
    author: ""
  },
  {
    body: "Nothing strengthens authority so much as silence.",
    author: "Leonardo da Vinci"
  },
  {
    body: "Wherever you go, go with all your heart.",
    author: "Confucius"
  },
  {
    body: "The only real valuable thing is intuition.",
    author: "Albert Einstein"
  },
  {
    body: "I believe that every person is born with talent.",
    author: "Maya Angelou"
  },
  {
    body: "Good luck is another name for tenacity of purpose.",
    author: "Ralph Emerson"
  },
  {
    body: "Rainbows apologize for angry skies.",
    author: "Sylvia Voirol"
  },
  {
    body: "Friendship isn't a big thing. It's a million little things.",
    author: ""
  },
  {
    body: "Time is the most valuable thing a man can spend.",
    author: "Theophrastus"
  },
  {
    body: "Whatever happens, take responsibility.",
    author: "Tony Robbins"
  },
  {
    body: "Experience is simply the name we give our mistakes.",
    author: "Oscar Wilde"
  },
  {
    body: "I think and that is all that I am.",
    author: "Wayne Dyer"
  },
  {
    body: "A good plan today is better than a perfect plan tomorrow.",
    author: ""
  },
  {
    body: "Be as you wish to seem.",
    author: "Socrates"
  },
  {
    body: "If the shoe doesn't fit, must we change the foot?",
    author: "Gloria Steinem"
  },
  {
    body: "Each day provides its own gifts.",
    author: "Marcus Aurelius"
  },
  {
    body: "While we stop to think, we often miss our opportunity.",
    author: "Publilius Syrus"
  },
  {
    body: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "Bernard Shaw"
  },
  {
    body: "To bring anything into your life, imagine that it's already there.",
    author: "Richard Bach"
  },
  {
    body: "Begin to weave and God will give you the thread.",
    author: "German proverb"
  },
  {
    body: "The more you know yourself, the more you forgive yourself.",
    author: "Confucius"
  },
  {
    body:
      "Someone remembers, someone cares; your name is whispered in someone's prayers.",
    author: ""
  },
  {
    body: "Without faith, nothing is possible. With it, nothing is impossible.",
    author: "Mary Bethune"
  },
  {
    body: "What worries you masters you.",
    author: "Haddon Robinson"
  },
  {
    body: "Once we accept our limits, we go beyond them.",
    author: "Albert Einstein"
  },
  {
    body: "Don't be pushed by your problems; be led by your dreams.",
    author: ""
  },
  {
    body:
      "Whatever we expect with confidence becomes our own self-fulfilling prophecy.",
    author: "Brian Tracy"
  },
  {
    body: "Everything you can imagine is real.",
    author: "Pablo Picasso"
  },
  {
    body: "The shortest answer is doing.",
    author: "Lord Herbert"
  },
  {
    body: "A beautiful thing is never perfect.",
    author: ""
  },
  {
    body: "Fear is a darkroom where negatives develop.",
    author: "Usman Asif"
  },
  {
    body: "The simplest things are often the truest.",
    author: "Richard Bach"
  },
  {
    body: "The truest wisdom is a resolute determination.",
    author: "Napoleon Bonaparte"
  },
  {
    body: "Life is the flower for which love is the honey.",
    author: "Victor Hugo"
  },
  {
    body: "Freedom is the right to live as we wish.",
    author: "Epictetus"
  },
  {
    body: "Change your thoughts, change your life!",
    author: ""
  },
  {
    body: "Never ignore a gut feeling, but never believe that it's enough.",
    author: "Robert Heller"
  },
  {
    body: "Loss is nothing else but change,and change is Natures delight.",
    author: "Marcus Aurelius"
  },
  {
    body: "Someone is special only if you tell them.",
    author: "Byron Pulsifer"
  },
  {
    body: "Great talent finds happiness in execution.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "Today is the tomorrow you worried about yesterday.",
    author: ""
  },
  {
    body: "There is no way to happiness, happiness is the way.",
    author: "Thich Nhat Hanh"
  },
  {
    body: "The day always looks brighter from behind a smile.",
    author: ""
  },
  {
    body: "A beautiful thing is never perfect.",
    author: ""
  },
  {
    body: "No alibi will save you from accepting the responsibility.",
    author: "Napoleon Hill"
  },
  {
    body: "Argue for your limitations, and sure enough theyre yours.",
    author: "Richard Bach"
  },
  {
    body: "You can observe a lot just by watching.",
    author: "Yogi Berra"
  },
  {
    body: "Reality leaves a lot to the imagination.",
    author: "John Lennon"
  },
  {
    body: "A stumble may prevent a fall.",
    author: ""
  },
  {
    body: "He who talks more is sooner exhausted.",
    author: "Lao Tzu"
  },
  {
    body: "Well begun is half done.",
    author: "Aristotle"
  },
  {
    body: "He who is contented is rich.",
    author: "Lao Tzu"
  },
  {
    body: "Work out your own salvation. Do not depend on others.",
    author: "Buddha"
  },
  {
    body: "You can do it if you believe you can!",
    author: "Napoleon Hill"
  },
  {
    body: "What we achieve inwardly will change outer reality.",
    author: "Plutarch"
  },
  {
    body: "Our strength grows out of our weaknesses.",
    author: "Ralph Waldo Emerson"
  },
  {
    body: "We must become the change we want to see.",
    author: "Mahatma Gandhi"
  },
  {
    body: "Happiness is found in doing, not merely possessing.",
    author: "Napoleon Hill"
  },
  {
    body: "Put your future in good hands � your own.",
    author: ""
  },
  {
    body: "We choose our destiny in the way we treat others.",
    author: "Wit"
  },
  {
    body: "Time is the most valuable thing a man can spend.",
    author: "Theophrastus"
  },
  {
    body: "No snowflake in an avalanche ever feels responsible.",
    author: "Voltaire"
  },
  {
    body: "Smile, breathe, and go slowly.",
    author: "Thich Nhat Hanh"
  },
  {
    body: "Fortune favours the brave.",
    author: "Virgil"
  },
  {
    body: "I believe in one thing only, the power of human will.",
    author: "Joseph Stalin"
  },
  {
    body: "The more you know yourself, the more you forgive yourself.",
    author: "Confucius"
  },
  {
    body: "The best way out is always through.",
    author: "Robert Frost"
  },
  {
    body: "The mind unlearns with difficulty what it has long learned.",
    author: "Seneca"
  },
  {
    body: "I destroy my enemies when I make them my friends.",
    author: "Abraham Lincoln"
  },
  {
    body: "No garden is without its weeds.",
    author: "Thomas Fuller"
  },
  {
    body: "There is no failure except in no longer trying.",
    author: "Elbert Hubbard"
  },
  {
    body: "Kind words will unlock an iron door.",
    author: "Turkish proverb"
  },
  {
    body: "Problems are only opportunities with thorns on them.",
    author: "Hugh Miller"
  },
  {
    body: "Life is just a chance to grow a soul.",
    author: "A. Powell Davies"
  },
  {
    body: "Reality does not conform to the ideal, but confirms it.",
    author: "Gustave Flaubert"
  },
  {
    body: "If you can dream it, you can do it.",
    author: "Walt Disney"
  },
  {
    body: "Mountains cannot be surmounted except by winding paths.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "May our hearts garden of awakening bloom with hundreds of flowers.",
    author: "Thich Nhat Hanh"
  },
  {
    body: "Nobody will believe in you unless you believe in yourself.",
    author: "Liberace"
  },
  {
    body: "Fortune befriends the bold.",
    author: "John Dryden"
  },
  {
    body: "Keep true to the dreams of thy youth.",
    author: "Friedrich von Schiller"
  },
  {
    body: "You're never a loser until you quit trying.",
    author: "Mike Ditka"
  },
  {
    body: "Science is organized knowledge. Wisdom is organized life.",
    author: "Immanuel Kant"
  },
  {
    body: "Knowing is not enough; we must apply!",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "Strong beliefs win strong men, and then make them stronger.",
    author: "Richard Bach"
  },
  {
    body: "Autumn is a second spring when every leaf is a flower.",
    author: "Albert Camus"
  },
  {
    body: "If you surrender to the wind, you can ride it.",
    author: "Toni Morrison"
  },
  {
    body: "Character develops itself in the stream of life.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "We must become the change we want to see.",
    author: "Mahatma Gandhi"
  },
  {
    body: "Keep yourself to the sunshine and you cannot see the shadow.",
    author: "Helen Keller"
  },
  {
    body: "Write your plans in pencil and give God the eraser.",
    author: "Paulo Coelho"
  },
  {
    body: "Inspiration exists, but it has to find us working.",
    author: "Pablo Picasso"
  },
  {
    body: "All serious daring starts from within.",
    author: "Harriet Beecher Stowe"
  },
  {
    body: "Pick battles big enough to matter, small enough to win.",
    author: "Jonathan Kozol"
  },
  {
    body: "Don't compromise yourself. You are all you've got.",
    author: "Janis Joplin"
  },
  {
    body: "He that is giddy thinks the world turns round.",
    author: "William Shakespeare"
  },
  {
    body: "A short saying often contains much wisdom.",
    author: "Sophocles"
  },
  {
    body: "Difficulties are things that show a person what they are.",
    author: "Epictetus"
  },
  {
    body: "When you doubt your power, you give power to your doubt.",
    author: "Honore de Balzac"
  },
  {
    body: "The cause is hidden. The effect is visible to all.",
    author: "Ovid"
  },
  {
    body: "A weed is no more than a flower in disguise.",
    author: "James Lowell"
  },
  {
    body: "Keep true to the dreams of thy youth.",
    author: "Friedrich von Schiller"
  },
  {
    body: "A prudent question is one half of wisdom.",
    author: "Francis Bacon"
  },
  {
    body: "The path to success is to take massive, determined action.",
    author: "Tony Robbins"
  },
  {
    body: "I allow my intuition to lead my path.",
    author: "Manuel Puig"
  },
  {
    body: "Nature takes away any faculty that is not used.",
    author: "William R. Inge"
  },
  {
    body: "All our knowledge has its origins in our perceptions.",
    author: "Leonardo da Vinci"
  },
  {
    body: "If the shoe doesn't fit, must we change the foot?",
    author: "Gloria Steinem"
  },
  {
    body: "Life shrinks or expands in proportion to one's courage.",
    author: "Anais Nin"
  },
  {
    body: "May our hearts garden of awakening bloom with hundreds of flowers.",
    author: "Thich Nhat Hanh"
  },
  {
    body: "If you wish to be a writer, write.",
    author: "Epictetus"
  },
  {
    body: "Today is the tomorrow we worried about yesterday.",
    author: ""
  },
  {
    body: "There is no way to prosperity, prosperity is the way.",
    author: "Wayne Dyer"
  },
  {
    body: "Talk doesn't cook rice.",
    author: "Chinese proverb"
  },
  {
    body: "Wherever you go, go with all your heart.",
    author: "Confucius"
  },
  {
    body: "Either you run the day or the day runs you.",
    author: "Jim Rohn"
  },
  {
    body: "Write your plans in pencil and give God the eraser.",
    author: "Paulo Coelho"
  },
  {
    body: "Better be ignorant of a matter than half know it.",
    author: "Publilius Syrus"
  },
  {
    body: "Follow your instincts. That is where true wisdom manifests itself.",
    author: "Oprah Winfrey"
  },
  {
    body: "There never was a good knife made of bad steel.",
    author: "Benjamin Franklin"
  },
  {
    body: "To accomplish great things, we must dream as well as act.",
    author: "Anatole France"
  },
  {
    body: "Patience is the companion of wisdom.",
    author: "Saint Augustine"
  },
  {
    body: "The mind is everything. What you think you become.",
    author: "Buddha"
  },
  {
    body: "To enjoy life, we must touch much of it lightly.",
    author: "Voltaire"
  },
  {
    body: "To fly, we have to have resistance.",
    author: "Maya Lin"
  },
  {
    body: "The more you know yourself, the more you forgive yourself.",
    author: "Confucius"
  },
  {
    body: "What you see depends on what you're looking for.",
    author: ""
  },
  {
    body: "The heart has its reasons which reason knows not of.",
    author: "Blaise Pascal"
  },
  {
    body: "When you doubt your power, you give power to your doubt.",
    author: "Honore de Balzac"
  },
  {
    body: "Be great in act, as you have been in thought.",
    author: "William Shakespeare"
  },
  {
    body: "Imagination rules the world.",
    author: "Napoleon Bonaparte"
  },
  {
    body: "Kind words do not cost much. Yet they accomplish much.",
    author: "Blaise Pascal"
  },
  {
    body: "Wherever you go, go with all your heart.",
    author: "Confucius"
  },
  {
    body: "In order to win, you must expect to win.",
    author: "Richard Bach"
  },
  {
    body: "You're never a loser until you quit trying.",
    author: "Mike Ditka"
  },
  {
    body: "There is no greater harm than that of time wasted.",
    author: "Michelangelo"
  },
  {
    body: "Intuition will tell the thinking mind where to look next.",
    author: "Jonas Salk"
  },
  {
    body: "Nature takes away any faculty that is not used.",
    author: "William R. Inge"
  },
  {
    body: "Doing nothing is better than being busy doing nothing.",
    author: "Lao Tzu"
  },
  {
    body: "It is better to travel well than to arrive.",
    author: "Buddha"
  },
  {
    body: "Once you choose hope, anythings possible.",
    author: "Christopher Reeve"
  },
  {
    body: "Worry gives a small thing a big shadow.",
    author: ""
  },
  {
    body: "Do, or do not. There is no try.",
    author: "Yoda"
  },
  {
    body: "Fears are nothing more than a state of mind.",
    author: "Napoleon Hill"
  },
  {
    body: "Mountains cannot be surmounted except by winding paths.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "May our hearts garden of awakening bloom with hundreds of flowers.",
    author: "Thich Nhat Hanh"
  },
  {
    body: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  },
  {
    body: "Don't be pushed by your problems; be led by your dreams.",
    author: ""
  },
  {
    body:
      "Efficiency is doing things right; effectiveness is doing the right things.",
    author: "Peter Drucker"
  },
  {
    body: "The greatest remedy for anger is delay.",
    author: "Seneca"
  },
  {
    body: "Worry gives a small thing a big shadow.",
    author: ""
  },
  {
    body: "Blaze with the fire that is never extinguished.",
    author: "Luisa Sigea"
  },
  {
    body: "Don't cry because it's over. Smile because it happened.",
    author: "Dr. Seuss"
  },
  {
    body: "Time is the wisest counsellor of all.",
    author: "Pericles"
  },
  {
    body: "No is easier to do. Yes is easier to say.",
    author: "Jason Fried"
  },
  {
    body: "From little acorns mighty oaks do grow.",
    author: "American proverb"
  },
  {
    body: "To be wrong is nothing unless you continue to remember it.",
    author: "Confucius"
  },
  {
    body: "Write your plans in pencil and give God the eraser.",
    author: "Paulo Coelho"
  },
  {
    body: "Once we accept our limits, we go beyond them.",
    author: "Albert Einstein"
  },
  {
    body: "He who talks more is sooner exhausted.",
    author: "Lao Tzu"
  },
  {
    body: "I never think of the future. It comes soon enough.",
    author: "Albert Einstein"
  },
  {
    body: "Whatever happens, take responsibility.",
    author: "Tony Robbins"
  },
  {
    body: "Yesterdays home runs don't win today's games.",
    author: "Babe Ruth"
  },
  {
    body: "The world is always in movement.",
    author: "V. Naipaul"
  },
  {
    body: "Inspiration exists, but it has to find us working.",
    author: "Pablo Picasso"
  },
  {
    body: "Silence is deep as Eternity, Speech is shallow as Time.",
    author: "Carlyle"
  },
  {
    body: "Don't smother each other. No one can grow in the shade.",
    author: "Leo F. Buscaglia"
  },
  {
    body: "We must become the change we want to see.",
    author: "Mahatma Gandhi"
  },
  {
    body: "An ant on the move does more than a dozing ox",
    author: "Lao Tzu"
  },
  {
    body: "You can't shake hands with a clenched fist.",
    author: "Indira Gandhi"
  },
  {
    body: "A good decision is based on knowledge and not on numbers.",
    author: "Plato"
  },
  {
    body: "Once we accept our limits, we go beyond them.",
    author: "Albert Einstein"
  },
  {
    body: "The cautious seldom err.",
    author: "Confucius"
  },
  {
    body: "Ideas are the beginning points of all fortunes.",
    author: "Napoleon Hill"
  },
  {
    body: "Every man dies. Not every man really lives.",
    author: ""
  },
  {
    body: "If there is no struggle, there is no progress.",
    author: "Frederick Douglass"
  },
  {
    body: "There is no way to prosperity, prosperity is the way.",
    author: "Wayne Dyer"
  },
  {
    body: "Where there is great love, there are always miracles.",
    author: "Willa Cather"
  },
  {
    body: "Trusting our intuition often saves us from disaster.",
    author: "Anne Wilson Schaef"
  },
  {
    body: "Friendship isn't a big thing. It's a million little things.",
    author: ""
  },
  {
    body: "Goals are the fuel in the furnace of achievement.",
    author: "Brian Tracy"
  },
  {
    body: "Each day provides its own gifts.",
    author: "Marcus Aurelius"
  },
  {
    body: "Time you enjoy wasting, was not wasted.",
    author: "John Lennon"
  },
  {
    body: "Every problem has a gift for you in its hands.",
    author: "Richard Bach"
  },
  {
    body: "Sadness flies away on the wings of time.",
    author: "Jean de la Fontaine"
  },
  {
    body: "The only real valuable thing is intuition.",
    author: "Albert Einstein"
  },
  {
    body: "Fortune befriends the bold.",
    author: "John Dryden"
  },
  {
    body: "I have often regretted my speech, never my silence.",
    author: "Publilius Syrus"
  },
  {
    body: "May our hearts garden of awakening bloom with hundreds of flowers.",
    author: "Thich Nhat Hanh"
  },
  {
    body: "I destroy my enemies when I make them my friends.",
    author: "Abraham Lincoln"
  },
  {
    body: "Sadness flies away on the wings of time.",
    author: "Jean de la Fontaine"
  },
  {
    body: "Never put off till tomorrow what you can do today.",
    author: "Thomas Jefferson"
  },
  {
    body: "Minds are like parachutes. They only function when open.",
    author: "Thomas Dewar"
  },
  {
    body: "If a man does his best, what else is there?",
    author: "George Patton"
  },
  {
    body: "The secret of success is constancy to purpose.",
    author: "Benjamin Disraeli"
  },
  {
    body: "Imagination rules the world.",
    author: "Napoleon Bonaparte"
  },
  {
    body: "Well begun is half done.",
    author: "Aristotle"
  },
  {
    body: "The best way out is always through.",
    author: "Robert Frost"
  },
  {
    body: "Without faith, nothing is possible. With it, nothing is impossible.",
    author: "Mary Bethune"
  },
  {
    body: "Life is a progress, and not a station.",
    author: "Ralph Emerson"
  },
  {
    body:
      "All seasons are beautiful for the person who carries happiness within.",
    author: "Horace Friess"
  },
  {
    body: "To avoid criticism, do nothing, say nothing, be nothing.",
    author: "Elbert Hubbard"
  },
  {
    body: "Whatever happens, take responsibility.",
    author: "Tony Robbins"
  },
  {
    body: "All things change; nothing perishes.",
    author: "Ovid"
  },
  {
    body: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt"
  },
  {
    body: "Absence makes the heart grow fonder.",
    author: "Haynes Bayly"
  },
  {
    body: "Imagination is the highest kite one can fly.",
    author: "Lauren Bacall"
  },
  {
    body: "Don't be pushed by your problems; be led by your dreams.",
    author: ""
  },
  {
    body: "Nothing happens unless first we dream.",
    author: "Carl Sandburg"
  },
  {
    body: "Minds are like parachutes. They only function when open.",
    author: "Thomas Dewar"
  },
  {
    body:
      "The beginning of knowledge is the discovery of something we do not understand.",
    author: "Frank Herbert"
  },
  {
    body:
      "Love doesn't make the world go round, love is what makes the ride worthwhile.",
    author: "Elizabeth Browning"
  },
  {
    body:
      "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    author: "Arthur Conan Doyle"
  },
  {
    body:
      "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
    author: "J. Willard Marriott"
  },
  {
    body:
      "I believe that we are fundamentally the same and have the same basic potential.",
    author: "Dalai Lama"
  },
  {
    body:
      "The winds and waves are always on the side of the ablest navigators.",
    author: "Edward Gibbon"
  },
  {
    body:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    body:
      "To get something you never had, you have to do something you never did.",
    author: ""
  },
  {
    body:
      "Be thankful when you don't know something for it gives you the opportunity to learn.",
    author: ""
  },
  {
    body:
      "Strength does not come from physical capacity. It comes from an indomitable will.",
    author: "Mahatma Gandhi"
  },
  {
    body:
      "Each misfortune you encounter will carry in it the seed of tomorrows good luck.",
    author: "Og Mandino"
  },
  {
    body:
      "The winds and waves are always on the side of the ablest navigators.",
    author: "Edward Gibbon"
  },
  {
    body:
      "To forgive is to set a prisoner free and realize that prisoner was you.",
    author: "Lewis B. Smedes"
  },
  {
    body:
      "In separateness lies the world's great misery, in compassion lies the world's true strength.",
    author: "Buddha"
  },
  {
    body:
      "By believing passionately in something that does not yet exist, we create it.",
    author: "Nikos Kazantzakis"
  },
  {
    body:
      "Letting go isn�t the end of the world; it�s the beginning of a new life.",
    author: ""
  },
  {
    body:
      "All the great performers I have worked with are fuelled by a personal dream.",
    author: "John Eliot"
  },
  {
    body:
      "One of the advantages of being disorderly is that one is constantly making exciting discoveries.",
    author: "A. A. Milne"
  },
  {
    body: "I never see what has been done; I only see what remains to be done.",
    author: "Marie Curie"
  },
  {
    body:
      "Begin at once to live and count each separate day as a separate life.",
    author: "Seneca"
  },
  {
    body:
      "If you don't know where you are going, you will probably end up somewhere else.",
    author: "Lawrence Peter"
  },
  {
    body:
      "Love doesn't make the world go round, love is what makes the ride worthwhile.",
    author: "Elizabeth Browning"
  },
  {
    body:
      "It is not so important to know everything as to appreciate what we learn.",
    author: "Hannah More"
  },
  {
    body:
      "The bird of paradise alights only upon the hand that does not grasp.",
    author: "John Berry"
  },
  {
    body: "Think as a wise man but communicate in the language of the people.",
    author: "William Yeats"
  },
  {
    body:
      "Practice yourself, for heavens sake in little things, and then proceed to greater.",
    author: "Epictetus"
  },
  {
    body:
      "If one does not know to which port is sailing, no wind is favorable.",
    author: "Seneca"
  },
  {
    body:
      "Our greatest glory is not in never failing but rising everytime we fall.",
    author: ""
  },
  {
    body:
      "Being right is highly overrated. Even a stopped clock is right twice a day.",
    author: ""
  },
  {
    body: "To be upset over what you don't have is to waste what you do have.",
    author: "Ken S. Keyes"
  },
  {
    body: "If we did the things we are capable of, we would astound ourselves.",
    author: "Thomas Edison"
  },
  {
    body: "Nothing in life is to be feared. It is only to be understood.",
    author: "Marie Curie"
  },
  {
    body:
      "Successful people ask better questions, and as a result, they get better answers.",
    author: "Tony Robbins"
  },
  {
    body:
      "Love is not blind; it simply enables one to see things others fail to see.",
    author: ""
  },
  {
    body: "Life is a process. We are a process. The universe is a process.",
    author: "Anne Schaef"
  },
  {
    body:
      "I think somehow we learn who we really are and then live with that decision.",
    author: "Eleanor Roosevelt"
  },
  {
    body: "We learn what we have said from those who listen to our speaking.",
    author: "Kenneth Patton"
  },
  {
    body:
      "A little knowledge that acts is worth infinitely more than much knowledge that is idle.",
    author: "Kahlil Gibran"
  },
  {
    body:
      "If you get up one more time than you fall, you will make it through.",
    author: ""
  },
  {
    body:
      "The beginning of knowledge is the discovery of something we do not understand.",
    author: "Frank Herbert"
  },
  {
    body: "The doors we open and close each day decide the lives we live.",
    author: "Flora Whittemore"
  },
  {
    body:
      "The worst bankrupt in the world is the person who has lost his enthusiasm.",
    author: "H. W. Arnold"
  },
  {
    body:
      "Happiness comes when your work and words are of benefit to yourself and others.",
    author: "Buddha"
  },
  {
    body:
      "Each misfortune you encounter will carry in it the seed of tomorrows good luck.",
    author: "Og Mandino"
  },
  {
    body:
      "Don't focus on making the right decision, focus on making the decision the right one.",
    author: ""
  },
  {
    body:
      "Everything is perfect in the universe � even your desire to improve it.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Begin at once to live and count each separate day as a separate life.",
    author: "Seneca"
  },
  {
    body:
      "The universe is full of magical things, patiently waiting for our wits to grow sharper.",
    author: "Eden Phillpotts"
  },
  {
    body:
      "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
    author: "Buddha"
  },
  {
    body:
      "A thing long expected takes the form of the unexpected when at last it comes.",
    author: "Mark Twain"
  },
  {
    body:
      "To forgive is to set a prisoner free and realize that prisoner was you.",
    author: "Lewis B. Smedes"
  },
  {
    body:
      "Action may not always bring happiness; but there is no happiness without action.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "I don't believe in failure. It is not failure if you enjoyed the process.",
    author: "Oprah Winfrey"
  },
  {
    body: "What you do not want done to yourself, do not do to others.",
    author: "Confucius"
  },
  {
    body: "Short words are best and the old words when short are best of all.",
    author: "Winston Churchill"
  },
  {
    body: "If you light a lamp for somebody, it will also brighten your path.",
    author: "Buddha"
  },
  {
    body:
      "I have done my best: that is about all the philosophy of living one needs.",
    author: "Lin-yutang"
  },
  {
    body:
      "Through perseverance many people win success out of what seemed destined to be certain failure.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "Give thanks for the rain of life that propels us to reach new horizons.",
    author: "Byron Pulsifer"
  },
  {
    body: "Love is just a word until someone comes along and gives it meaning.",
    author: ""
  },
  {
    body:
      "We all have problems. The way we solve them is what makes us different.",
    author: ""
  },
  {
    body: "The secret to a rich life is to have more beginnings than endings.",
    author: "Dave Weinbaum"
  },
  {
    body:
      "It is only when the mind and character slumber that the dress can be seen.",
    author: "Ralph Waldo Emerson"
  },
  {
    body:
      "If you don't like something, change it. If you can't change it, change your attitude.",
    author: "Maya Angelou"
  },
  {
    body: "Nothing in life is to be feared. It is only to be understood.",
    author: "Marie Curie"
  },
  {
    body:
      "Reviewing what you have learned and learning anew, you are fit to be a teacher.",
    author: "Confucius"
  },
  {
    body: "The world is a book, and those who do not travel read only a page.",
    author: "Augustinus Sanctus"
  },
  {
    body:
      "Action may not always bring happiness; but there is no happiness without action.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "So long as a person is capable of self-renewal they are a living being.",
    author: "Henri-Frederic Amiel"
  },
  {
    body: "I'm not afraid of storms, for Im learning how to sail my ship.",
    author: "Louisa Alcott"
  },
  {
    body:
      "Think for yourselves and let others enjoy the privilege to do so too.",
    author: "Voltaire"
  },
  {
    body: "How we spend our days is, of course, how we spend our lives.",
    author: "Annie Dillard"
  },
  {
    body:
      "It has never been my object to record my dreams, just to realize them.",
    author: "Man Ray"
  },
  {
    body:
      "The most complicated achievements of thought are possible without the assistance of consciousness.",
    author: "Sigmund Freud"
  },
  {
    body:
      "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Most great people have attained their greatest success just one step beyond their greatest failure.",
    author: "Napoleon Hill"
  },
  {
    body: "The doors we open and close each day decide the lives we live.",
    author: "Flora Whittemore"
  },
  {
    body:
      "If you think you can, you can. And if you think you can't, you're right.",
    author: "Henry Ford"
  },
  {
    body: "Better to have loved and lost, than to have never loved at all.",
    author: "St. Augustine"
  },
  {
    body:
      "Everyone thinks of changing the world, but no one thinks of changing himself.",
    author: "Leo Tolstoy"
  },
  {
    body:
      "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    author: "Arthur Conan Doyle"
  },
  {
    body: "The best way to pay for a lovely moment is to enjoy it.",
    author: "Richard Bach"
  },
  {
    body:
      "You have enemies? Good. That means you've stood up for something, sometime in your life.",
    author: "Winston Churchill"
  },
  {
    body:
      "Slow down and everything you are chasing will come around and catch you.",
    author: "John De Paola"
  },
  {
    body:
      "Your worst enemy cannot harm you as much as your own unguarded thoughts.",
    author: "Buddha"
  },
  {
    body:
      "I always wanted to be somebody, but I should have been more specific.",
    author: "Lily Tomlin"
  },
  {
    body: "Yeah we all shine on, like the moon, and the stars, and the sun.",
    author: "John Lennon"
  },
  {
    body:
      "Knowledge is a process of piling up facts; wisdom lies in their simplification.",
    author: "Martin Fischer"
  },
  {
    body:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
    author: "Albert Einstein"
  },
  {
    body:
      "We should all be thankful for those people who rekindle the inner spirit.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "In separateness lies the world's great misery, in compassion lies the world's true strength.",
    author: "Buddha"
  },
  {
    body:
      "Reviewing what you have learned and learning anew, you are fit to be a teacher.",
    author: "Confucius"
  },
  {
    body:
      "To get something you never had, you have to do something you never did.",
    author: ""
  },
  {
    body: "What you do not want done to yourself, do not do to others.",
    author: "Confucius"
  },
  {
    body:
      "Opportunity is missed by most because it is dressed in overalls and looks like work.",
    author: "Thomas Edison"
  },
  {
    body:
      "Feeling and longing are the motive forces behind all human endeavor and human creations.",
    author: "Albert Einstein"
  },
  {
    body:
      "In the end we retain from our studies only that which we practically apply.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "It is only when the mind and character slumber that the dress can be seen.",
    author: "Ralph Waldo Emerson"
  },
  {
    body:
      "If you correct your mind, the rest of your life will fall into place.",
    author: "Lao Tzu"
  },
  {
    body: "The world makes way for the man who knows where he is going.",
    author: "Ralph Emerson"
  },
  {
    body:
      "When your desires are strong enough you will appear to possess superhuman powers to achieve.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.",
    author: "John Adams"
  },
  {
    body: "I cannot make my days longer so I strive to make them better.",
    author: "Henry David Thoreau"
  },
  {
    body:
      "Think for yourselves and let others enjoy the privilege to do so too.",
    author: "Voltaire"
  },
  {
    body: "Tension is who you think you should be. Relaxation is who you are.",
    author: "Chinese proverb"
  },
  {
    body:
      "Never bend your head. Always hold it high. Look the world right in the eye.",
    author: "Helen Keller"
  },
  {
    body:
      "One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity.",
    author: "Albert Schweitzer"
  },
  {
    body: "We cannot do everything at once, but we can do something at once.",
    author: "Calvin Coolidge"
  },
  {
    body:
      "You have to do your own growing no matter how tall your grandfather was.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "Invent your world. Surround yourself with people, color, sounds, and work that nourish you.",
    author: ""
  },
  {
    body: "It is fatal to enter any war without the will to win it.",
    author: "General Douglas MacArthur"
  },
  {
    body:
      "Be what you are. This is the first step toward becoming better than you are.",
    author: "Julius Charles Hare"
  },
  {
    body:
      "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
    author: "Buckminster Fuller"
  },
  {
    body:
      "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    author: "Arthur Conan Doyle"
  },
  {
    body:
      "Love and compassion open our own inner life, reducing stress, distrust and loneliness.",
    author: "Dalai Lama"
  },
  {
    body:
      "Ideals are an imaginative understanding of that which is desirable in that which is possible.",
    author: "Walter Lippmann"
  },
  {
    body:
      "The superior man is satisfied and composed; the mean man is always full of distress.",
    author: "Confucius"
  },
  {
    body:
      "If you spend too much time thinking about a thing, you'll never get it done.",
    author: "Bruce Lee"
  },
  {
    body: "The way is not in the sky. The way is in the heart.",
    author: "Buddha"
  },
  {
    body:
      "I don't believe in failure. It is not failure if you enjoyed the process.",
    author: "Oprah Winfrey"
  },
  {
    body: "Most people are about as happy as they make up their minds to be",
    author: "Abraham Lincoln"
  },
  {
    body:
      "Three things cannot be long hidden: the sun, the moon, and the truth.",
    author: "Buddha"
  },
  {
    body:
      "More often than not, anger is actually an indication of weakness rather than of strength.",
    author: "Dalai Lama"
  },
  {
    body:
      "Before you put on a frown, make absolutely sure there are no smiles available.",
    author: "Jim Beggs"
  },
  {
    body:
      "A man of ability and the desire to accomplish something can do anything.",
    author: "Donald Kircher"
  },
  {
    body:
      "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
    author: "Buddha"
  },
  {
    body:
      "It is not uncommon for people to spend their whole life waiting to start living.",
    author: "Eckhart Tolle"
  },
  {
    body: "We learn what we have said from those who listen to our speaking.",
    author: "Kenneth Patton"
  },
  {
    body:
      "It is only when the mind and character slumber that the dress can be seen.",
    author: "Ralph Waldo Emerson"
  },
  {
    body: "The way is not in the sky. The way is in the heart.",
    author: "Buddha"
  },
  {
    body: "Don't be afraid to go out on a limb. That's where the fruit is.",
    author: "H. Jackson Browne"
  },
  {
    body:
      "Wicked people are always surprised to find ability in those that are good.",
    author: "Marquis Vauvenargues"
  },
  {
    body:
      "Life is so constructed that an event does not, cannot, will not, match the expectation.",
    author: "Charlotte Bronte"
  },
  {
    body:
      "Ideals are an imaginative understanding of that which is desirable in that which is possible.",
    author: "Walter Lippmann"
  },
  {
    body:
      "If you change the way you look at things, the things you look at change.",
    author: "Wayne Dyer"
  },
  {
    body: "No man can succeed in a line of endeavor which he does not like.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Think for yourselves and let others enjoy the privilege to do so too.",
    author: "Voltaire"
  },
  {
    body:
      "You will not be punished for your anger, you will be punished by your anger.",
    author: "Buddha"
  },
  {
    body:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    body:
      "I believe that we are fundamentally the same and have the same basic potential.",
    author: "Dalai Lama"
  },
  {
    body:
      "Each misfortune you encounter will carry in it the seed of tomorrows good luck.",
    author: "Og Mandino"
  },
  {
    body:
      "Don't judge each day by the harvest you reap but by the seeds you plant.",
    author: "Robert Stevenson"
  },
  {
    body:
      "They say that time changes things, but you actually have to change them yourself.",
    author: "Andy Warhol"
  },
  {
    body:
      "Never apologize for showing feelings. When you do so, you apologize for the truth.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "The truth you believe and cling to makes you unavailable to hear anything new.",
    author: "Pema Chodron"
  },
  {
    body:
      "Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant.",
    author: "Horace"
  },
  {
    body:
      "The winds and waves are always on the side of the ablest navigators.",
    author: "Edward Gibbon"
  },
  {
    body: "If you light a lamp for somebody, it will also brighten your path.",
    author: "Buddha"
  },
  {
    body:
      "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.",
    author: "Morris West"
  },
  {
    body:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin Roosevelt"
  },
  {
    body:
      "Every action of our lives touches on some chord that will vibrate in eternity.",
    author: "Edwin Chapin"
  },
  {
    body:
      "Letting go isn�t the end of the world; it�s the beginning of a new life.",
    author: ""
  },
  {
    body: "Shoot for the moon. Even if you miss, you'll land among the stars.",
    author: "Les Brown"
  },
  {
    body:
      "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
    author: "Buddha"
  },
  {
    body:
      "Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant.",
    author: "Horace"
  },
  {
    body: "I'm not afraid of storms, for Im learning how to sail my ship.",
    author: "Louisa Alcott"
  },
  {
    body: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    body: "Every day may not be good, but there's something good in every day.",
    author: ""
  },
  {
    body:
      "The truth you believe and cling to makes you unavailable to hear anything new.",
    author: "Pema Chodron"
  },
  {
    body:
      "To forgive is to set a prisoner free and realize that prisoner was you.",
    author: "Lewis B. Smedes"
  },
  {
    body: "Most folks are about as happy as they make up their minds to be.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "If you would take, you must first give, this is the beginning of intelligence.",
    author: "Lao Tzu"
  },
  {
    body:
      "Some people think it's holding that makes one strong � sometimes it's letting go.",
    author: ""
  },
  {
    body:
      "The universe is full of magical things, patiently waiting for our wits to grow sharper.",
    author: "Eden Phillpotts"
  },
  {
    body:
      "It is on our failures that we base a new and different and better success.",
    author: "Havelock Ellis"
  },
  {
    body:
      "If you spend too much time thinking about a thing, you'll never get it done.",
    author: "Bruce Lee"
  },
  {
    body:
      "Quality is never an accident; it is always the result of intelligent effort.",
    author: "John Ruskin"
  },
  {
    body:
      "To study and not think is a waste. To think and not study is dangerous.",
    author: "Confucius"
  },
  {
    body:
      "Life is a succession of lessons, which must be lived to be understood.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Being right is highly overrated. Even a stopped clock is right twice a day.",
    author: ""
  },
  {
    body: "Love is just a word until someone comes along and gives it meaning.",
    author: ""
  },
  {
    body:
      "I have done my best: that is about all the philosophy of living one needs.",
    author: "Lin-yutang"
  },
  {
    body:
      "Time changes everything except something within us which is always surprised by change.",
    author: "Thomas Hardy"
  },
  {
    body:
      "You are important enough to ask and you are blessed enough to receive back.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Our greatest glory is not in never failing but rising everytime we fall.",
    author: ""
  },
  {
    body:
      "Knowledge is a process of piling up facts; wisdom lies in their simplification.",
    author: "Martin Fischer"
  },
  {
    body: "It is fatal to enter any war without the will to win it.",
    author: "General Douglas MacArthur"
  },
  {
    body:
      "If you spend too much time thinking about a thing, you'll never get it done.",
    author: "Bruce Lee"
  },
  {
    body:
      "To get something you never had, you have to do something you never did.",
    author: ""
  },
  {
    body: "If you cannot do great things, do small things in a great way.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Everything is perfect in the universe � even your desire to improve it.",
    author: "Wayne Dyer"
  },
  {
    body:
      "If you want your life to be more rewarding, you have to change the way you think.",
    author: "Oprah Winfrey"
  },
  {
    body:
      "Transformation doesn't take place with a vacuum; instead, it occurs when we are indirectly and directly connected to all those around us.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.",
    author: "Leonardo Ruiz"
  },
  {
    body:
      "The free man is he who does not fear to go to the end of his thought.",
    author: "Leon Blum"
  },
  {
    body:
      "Great are they who see that spiritual is stronger than any material force, that thoughts rule the world.",
    author: "Ralph Emerson"
  },
  {
    body:
      "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
    author: "Bernard Shaw"
  },
  {
    body:
      "The wise man does not lay up his own treasures. The more he gives to others, the more he has for his own.",
    author: "Lao Tzu"
  },
  {
    body:
      "Don't leave a stone unturned. It's always something, to know you have done the most you could.",
    author: "Charles Dickens"
  },
  {
    body:
      "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.",
    author: "Dalai Lama"
  },
  {
    body:
      "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.",
    author: "Sam Keen"
  },
  {
    body:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Walt Emerson"
  },
  {
    body:
      "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
    author: "John Astin"
  },
  {
    body:
      "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.",
    author: "Elbert Hubbard"
  },
  {
    body:
      "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
    author: "John Astin"
  },
  {
    body:
      "There is no retirement for an artist, it's your way of living so there is no end to it.",
    author: "Henry Moore"
  },
  {
    body:
      "I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability.",
    author: "Confucius"
  },
  {
    body:
      "Why worry about things you can�t control when you can keep yourself busy controlling the things that depend on you?",
    author: ""
  },
  {
    body:
      "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
    author: "Laozi"
  },
  {
    body:
      "Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.",
    author: "William Shakespeare"
  },
  {
    body:
      "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.",
    author: "George Sheehan"
  },
  {
    body:
      "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
    author: "Thomas Jefferson"
  },
  {
    body:
      "It is only with the heart that one can see rightly, what is essential is invisible to the eye.",
    author: "Antoine de Saint-Exupery"
  },
  {
    body:
      "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom.",
    author: "Marcel Proust"
  },
  {
    body:
      "Make the best use of what is in your power, and take the rest as it happens.",
    author: "Epictetus"
  },
  {
    body:
      "The thoughts we choose to think are the tools we use to paint the canvas of our lives.",
    author: "Louise Hay"
  },
  {
    body:
      "No matter how carefully you plan your goals they will never be more that pipe dreams unless you pursue them with gusto.",
    author: "W. Clement Stone"
  },
  {
    body:
      "The reason most goals are not achieved is that we spend our time doing second things first.",
    author: "Robert McKain"
  },
  {
    body:
      "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
    author: "John Quincy Adams"
  },
  {
    body:
      "I'm a great believer in luck and I find the harder I work, the more I have of it.",
    author: "Thomas Jefferson"
  },
  {
    body:
      "Do not waste yourself in rejection, nor bark against the bad, but chant the beauty of the good.",
    author: "Ralph Emerson"
  },
  {
    body:
      "The person born with a talent they are meant to use will find their greatest happiness in using it.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "Good people are good because they've come to wisdom through failure. We get very little wisdom from success, you know.",
    author: "William Saroyan"
  },
  {
    body:
      "Your destiny isn't just fate; it is how you use your own developed abilities to get what you want.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
    author: "Leonardo da Vinci"
  },
  {
    body:
      "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
    author: "Isaac Asimov"
  },
  {
    body:
      "Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars.",
    author: "Henry Van Dyke"
  },
  {
    body:
      "The person born with a talent they are meant to use will find their greatest happiness in using it.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "You got to be careful if you don't know where you're going, because you might not get there.",
    author: "Yogi Berra"
  },
  {
    body:
      "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.",
    author: "Naguib Mahfouz"
  },
  {
    body:
      "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more",
    author: "Anthony Robbins"
  },
  {
    body:
      "You can't let praise or criticism get to you. It's a weakness to get caught up in either one.",
    author: "John Wooden"
  },
  {
    body:
      "I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.",
    author: "Og Mandino"
  },
  {
    body:
      "Our doubts are traitors and make us lose the good we often might win, by fearing to attempt.",
    author: "Jane Addams"
  },
  {
    body:
      "By nature man hates change; seldom will he quit his old home till it has actually fallen around his ears.",
    author: "Thomas Carlyle"
  },
  {
    body:
      "Until you value yourself, you won't value your time. Until you value your time, you won't do anything with it.",
    author: "M. Scott Peck"
  },
  {
    body:
      "The minute you settle for less than you deserve, you get even less than you settled for.",
    author: "Maureen Dowd"
  },
  {
    body:
      "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.",
    author: "Charles Darwin"
  },
  {
    body:
      "It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward.",
    author: ""
  },
  {
    body:
      "If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace.",
    author: "Dalai Lama"
  },
  {
    body:
      "There is only one success � to be able to spend your life in your own way.",
    author: "Christopher Morley"
  },
  {
    body:
      "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.",
    author: "Hannah Arendt"
  },
  {
    body:
      "Appreciation is the highest form of prayer, for it acknowledges the presence of good wherever you shine the light of your thankful thoughts.",
    author: "Alan Cohen"
  },
  {
    body:
      "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
    author: "Leonardo da Vinci"
  },
  {
    body:
      "There is only one corner of the universe you can be certain of improving, and that's your own self.",
    author: "Aldous Huxley"
  },
  {
    body:
      "You're not obligated to win. You're obligated to keep trying to do the best you can every day.",
    author: "Marian Edelman"
  },
  {
    body:
      "Everyone can taste success when the going is easy, but few know how to taste victory when times get tough.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Deep listening is miraculous for both listener and speaker.When someone receives us with open-hearted, non-judging, intensely interested listening, our spirits expand.",
    author: "Sue Patton Thoele"
  },
  {
    body:
      "You may be deceived if you trust too much, but you will live in torment if you don't trust enough.",
    author: "Frank Crane"
  },
  {
    body:
      "Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.",
    author: "Lao Tzu"
  },
  {
    body:
      "All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable.",
    author: "Kathleen Norris"
  },
  {
    body:
      "Choose a job you love, and you will never have to work a day in your life.",
    author: "Confucius"
  },
  {
    body:
      "You cannot find yourself by going into the past. You can find yourself by coming into the present.",
    author: "Eckhart Tolle"
  },
  {
    body:
      "All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise.",
    author: "Anne Bronte"
  },
  {
    body:
      "In order to live free and happily you must sacrifice boredom. It is not always an easy sacrifice.",
    author: "Richard Bach"
  },
  {
    body:
      "The fox has many tricks. The hedgehog has but one. But that is the best of all.",
    author: "Desiderius Erasmus"
  },
  {
    body:
      "Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.",
    author: "Arthur Rubinstein"
  },
  {
    body:
      "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity",
    author: "Louis Pasteur"
  },
  {
    body:
      "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
    author: "Rumi"
  },
  {
    body:
      "We must never forget that it is through our actions, words, and thoughts that we have a choice.",
    author: "Sogyal Rinpoche"
  },
  {
    body:
      "We see things not as they are, but as we are. Our perception is shaped by our previous experiences.",
    author: "Dennis Kimbro"
  },
  {
    body:
      "True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.",
    author: "William Penn"
  },
  {
    body:
      "There is no retirement for an artist, it's your way of living so there is no end to it.",
    author: "Henry Moore"
  },
  {
    body:
      "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.",
    author: "Immanuel Kant"
  },
  {
    body:
      "The thought manifests as the word. The word manifests as the deed. The deed develops into habit. And the habit hardens into character.",
    author: "Buddha"
  },
  {
    body:
      "As the rest of the world is walking out the door, your best friends are the ones walking in.",
    author: ""
  },
  {
    body:
      "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us.",
    author: "Robert Lynd"
  },
  {
    body:
      "If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him.",
    author: "Ralph Emerson"
  },
  {
    body:
      "True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.",
    author: "William Penn"
  },
  {
    body:
      "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.",
    author: "Donald Trump"
  },
  {
    body:
      "The person born with a talent they are meant to use will find their greatest happiness in using it.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.",
    author: "Sam Keen"
  },
  {
    body:
      "Friendship with oneself is all important because without it one cannot be friends with anybody else in the world.",
    author: "Eleanor Roosevelt"
  },
  {
    body:
      "Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away.",
    author: "Robert Fulghum"
  },
  {
    body:
      "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
    author: "Bruce Lee"
  },
  {
    body:
      "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.",
    author: "Charles Darwin"
  },
  {
    body:
      "Every man takes the limits of his own field of vision for the limits of the world.",
    author: "Arthur Schopenhauer"
  },
  {
    body:
      "One does not discover new lands without consenting to lose sight of the shore for a very long time.",
    author: "Andr� Gide"
  },
  {
    body:
      "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
    author: "Sai Baba"
  },
  {
    body:
      "Genuine love should first be directed at oneself � if we do not love ourselves, how can we love others?",
    author: "Dalai Lama"
  },
  {
    body:
      "Life is like a sewer. What you get out of it depends on what you put into it.",
    author: "Tom Lehrer"
  },
  {
    body:
      "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
    author: "Bruce Lee"
  },
  {
    body:
      "Learn all you can from the mistakes of others. You won't have time to make them all yourself.",
    author: "Alfred Sheinwold"
  },
  {
    body:
      "There is only one corner of the universe you can be certain of improving, and that's your own self.",
    author: "Aldous Huxley"
  },
  {
    body:
      "Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest.",
    author: "Sri Chinmoy"
  },
  {
    body:
      "People are so constituted that everybody would rather undertake what they see others do, whether they have an aptitude for it or not.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life.",
    author: "James Freeman Clarke"
  },
  {
    body:
      "You can't let praise or criticism get to you. It's a weakness to get caught up in either one.",
    author: "John Wooden"
  },
  {
    body:
      "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
    author: "Anais Nin"
  },
  {
    body:
      "Everything that happens happens as it should, and if you observe carefully, you will find this to be so.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.",
    author: "Hannah Arendt"
  },
  {
    body:
      "Learn all you can from the mistakes of others. You won't have time to make them all yourself.",
    author: "Alfred Sheinwold"
  },
  {
    body:
      "The fox has many tricks. The hedgehog has but one. But that is the best of all.",
    author: "Desiderius Erasmus"
  },
  {
    body:
      "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.",
    author: "Buddha"
  },
  {
    body:
      "It is the greatest of all mistakes to do nothing because you can only do little � do what you can.",
    author: "Sydney Smith"
  },
  {
    body:
      "When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself.",
    author: "Confucius"
  },
  {
    body:
      "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway.",
    author: "Mary Kay Ash"
  },
  {
    body:
      "Those who try to do something and fail are infinitely better than those who try nothing and succeed.",
    author: "Lloyd Jones"
  },
  {
    body:
      "Snowflakes are one of natures most fragile things, but just look what they can do when they stick together.",
    author: "Vista Kelly"
  },
  {
    body:
      "The first step to getting the things you want out of life is this: decide what you want.",
    author: "Ben Stein"
  },
  {
    body:
      "Why compare yourself with others? No one in the entire world can do a better job of being you than you.",
    author: ""
  },
  {
    body:
      "Experience is not what happens to a man. It is what a man does with what happens to him.",
    author: "Aldous Huxley"
  },
  {
    body:
      "A good teacher is like a candle � it consumes itself to light the way for others.",
    author: ""
  },
  {
    body:
      "The only thing to do with good advice is to pass it on. It is never of any use to oneself.",
    author: "Oscar Wilde"
  },
  {
    body:
      "Life is not measured by the breaths we take, but by the moments that take our breath.",
    author: ""
  },
  {
    body:
      "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.",
    author: "Honore de Balzac"
  },
  {
    body:
      "Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others.",
    author: "Jacob Braude"
  },
  {
    body:
      "If you'll not settle for anything less than your best, you will be amazed at what you can accomplish in your lives.",
    author: "Vince Lombardi"
  },
  {
    body:
      "What lies behind us and what lies before us are small matters compared to what lies within us.",
    author: "Oliver Holmes"
  },
  {
    body:
      "With the realization of ones own potential and self-confidence in ones ability, one can build a better world.",
    author: "Dalai Lama"
  },
  {
    body:
      "There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered.",
    author: "Nelson Mandela"
  },
  {
    body:
      "Friendship with oneself is all important because without it one cannot be friends with anybody else in the world.",
    author: "Eleanor Roosevelt"
  },
  {
    body:
      "Forget about all the reasons why something may not work. You only need to find one good reason why it will.",
    author: "Robert Anthony"
  },
  {
    body:
      "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle"
  },
  {
    body:
      "Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.",
    author: "Washington Irving"
  },
  {
    body:
      "We all live with the objective of being happy; our lives are all different and yet the same.",
    author: "Anne Frank"
  },
  {
    body:
      "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity",
    author: "Louis Pasteur"
  },
  {
    body:
      "Many people think of prosperity that concerns money only to forget that true prosperity is of the mind.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "To be beautiful means to be yourself. You don�t need to be accepted by others. You need to accept yourself.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind.",
    author: "Buddha"
  },
  {
    body:
      "It is very easy to forgive others their mistakes; it takes more grit to forgive them for having witnessed your own.",
    author: "Jessamyn West"
  },
  {
    body:
      "Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind.",
    author: "Plato"
  },
  {
    body:
      "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
    author: "Bruce Lee"
  },
  {
    body:
      "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
    author: "Charlotte Gilman"
  },
  {
    body:
      "Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.",
    author: "Mother Teresa"
  },
  {
    body:
      "Silences make the real conversations between friends. Not the saying but the never needing to say is what counts.",
    author: "Margaret Runbeck"
  },
  {
    body:
      "The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work.",
    author: "Dalai Lama"
  },
  {
    body:
      "If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.",
    author: "William Penn"
  },
  {
    body:
      "Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a fish.",
    author: "Ovid"
  },
  {
    body:
      "You're not obligated to win. You're obligated to keep trying to do the best you can every day.",
    author: "Marian Edelman"
  },
  {
    body:
      "I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted.",
    author: "Og Mandino"
  },
  {
    body:
      "We never understand how little we need in this world until we know the loss of it.",
    author: "James Barrie"
  },
  {
    body:
      "It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward.",
    author: ""
  },
  {
    body:
      "The real measure of your wealth is how much youd be worth if you lost all your money.",
    author: ""
  },
  {
    body:
      "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
    author: "Buddha"
  },
  {
    body:
      "Life is like a sewer. What you get out of it depends on what you put into it.",
    author: "Tom Lehrer"
  },
  {
    body:
      "Take no thought of who is right or wrong or who is better than. Be not for or against.",
    author: "Bruce Lee"
  },
  {
    body:
      "I am a man of fixed and unbending principles, the first of which is to be flexible at all times.",
    author: "Everett Dirksen"
  },
  {
    body:
      "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
    author: "Rumi"
  },
  {
    body:
      "Today, give a stranger a smile without waiting for it may be the joy they need to have a great day.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
    author: "Henry Miller"
  },
  {
    body:
      "Good people are good because they've come to wisdom through failure. We get very little wisdom from success, you know.",
    author: "William Saroyan"
  },
  {
    body:
      "At the center of your being you have the answer; you know who you are and you know what you want.",
    author: "Lao Tzu"
  },
  {
    body:
      "How wonderful that we have met with a paradox. Now we have some hope of making progress.",
    author: "Niels Bohr"
  },
  {
    body:
      "Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.",
    author: "Lao Tzu"
  },
  {
    body:
      "Everyone is a genius at least once a year. A real genius has his original ideas closer together.",
    author: "Georg Lichtenberg"
  },
  {
    body:
      "Dreams pass into the reality of action. From the actions stems the dream again; and this interdependence produces the highest form of living.",
    author: "Anais Nin"
  },
  {
    body:
      "Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.",
    author: "Gloria Steinem"
  },
  {
    body:
      "Sadness may be part of life but there is no need to let it dominate your entire life.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Keeping a little ahead of conditions is one of the secrets of business, the trailer seldom goes far.",
    author: "Charles Schwab"
  },
  {
    body:
      "Nature gave us one tongue and two ears so we could hear twice as much as we speak.",
    author: "Epictetus"
  },
  {
    body:
      "Don't wait for your feelings to change to take the action. Take the action and your feelings will change.",
    author: "Barbara Baron"
  },
  {
    body:
      "You are always free to change your mind and choose a different future, or a different past.",
    author: "Richard Bach"
  },
  {
    body:
      "You were not born a winner, and you were not born a loser. You are what you make yourself be.",
    author: "Lou Holtz"
  },
  {
    body:
      "Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.",
    author: "Napoleon Hill"
  },
  {
    body:
      "You got to be careful if you don't know where you're going, because you might not get there.",
    author: "Yogi Berra"
  },
  {
    body:
      "Cherish your visions and your dreams as they are the children of your soul; the blueprints of your ultimate achievements.",
    author: "Napoleon Hill"
  },
  {
    body:
      "To be what we are, and to become what we are capable of becoming, is the only end of life.",
    author: "Robert Stevenson"
  },
  {
    body:
      "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
    author: "Charles DeLint"
  },
  {
    body:
      "Take things as they are. Punch when you have to punch. Kick when you have to kick.",
    author: "Bruce Lee"
  },
  {
    body:
      "I believe that a simple and unassuming manner of life is best for everyone, best both for the body and the mind.",
    author: "Albert Einstein"
  },
  {
    body:
      "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
    author: ""
  },
  {
    body:
      "Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind.",
    author: "Paavo Nurmi"
  },
  {
    body:
      "The real measure of your wealth is how much youd be worth if you lost all your money.",
    author: ""
  },
  {
    body:
      "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "Anne Frank"
  },
  {
    body:
      "A friend is someone who understands your past, believes in your future, and accepts you just the way you are.",
    author: ""
  },
  {
    body:
      "By nature man hates change; seldom will he quit his old home till it has actually fallen around his ears.",
    author: "Thomas Carlyle"
  },
  {
    body:
      "The first step to getting the things you want out of life is this: decide what you want.",
    author: "Ben Stein"
  },
  {
    body:
      "Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars.",
    author: "Henry Van Dyke"
  },
  {
    body:
      "It is one of the blessings of old friends that you can afford to be stupid with them.",
    author: "Ralph Emerson"
  },
  {
    body:
      "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
    author: "Tryon Edwards"
  },
  {
    body:
      "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "One must be fond of people and trust them if one is not to make a mess of life.",
    author: "E. M. Forster"
  },
  {
    body:
      "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
    author: "John Astin"
  },
  {
    body:
      "We cannot change our memories, but we can change their meaning and the power they have over us.",
    author: "David Seamans"
  },
  {
    body:
      "Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?",
    author: "Confucius"
  },
  {
    body:
      "To give hope to someone occurs when you teach them how to use the tools to do it for themselves.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
    author: "Charles DeLint"
  },
  {
    body:
      "Id rather regret the things that I have done than the things that I have not done.",
    author: "Lucille Ball"
  },
  {
    body:
      "The past has no power to stop you from being present now. Only your grievance about the past can do that.",
    author: "Eckhart Tolle"
  },
  {
    body:
      "If the stars should appear but one night every thousand years how man would marvel and adore.",
    author: "Ralph Emerson"
  },
  {
    body:
      "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
    author: "Laurence J. Peter"
  },
  {
    body:
      "I'm not interested in age. People who tell me their age are silly. You're as old as you feel.",
    author: "Elizabeth Arden"
  },
  {
    body:
      "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.",
    author: "Hannah Arendt"
  },
  {
    body:
      "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.",
    author: "Dalai Lama"
  },
  {
    body:
      "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
    author: "Bruce Lee"
  },
  {
    body:
      "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
    author: "Confucius"
  },
  {
    body:
      "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.",
    author: "Nikola Tesla"
  },
  {
    body:
      "Blessed is the person who is too busy to worry in the daytime, and too sleepy to worry at night.",
    author: "Leo Aikman"
  },
  {
    body:
      "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.",
    author: "Leonardo Ruiz"
  },
  {
    body:
      "He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law.",
    author: "Pablo Picasso"
  },
  {
    body:
      "These days people seek knowledge, not wisdom. Knowledge is of the past, wisdom is of the future.",
    author: "Vernon Cooper"
  },
  {
    body:
      "One secret of success in life is for a man to be ready for his opportunity when it comes.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "People take different roads seeking fulfilment and happiness. Just because theyre not on your road doesn't mean they've gotten lost.",
    author: "Dalai Lama"
  },
  {
    body:
      "The shoe that fits one person pinches another; there is no recipe for living that suits all cases.",
    author: "Carl Jung"
  },
  {
    body:
      "There are only two mistakes one can make along the road to truth; not going all the way, and not starting.",
    author: "Buddha"
  },
  {
    body:
      "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "Giving up doesn't always mean you are weak. Sometimes it means that you are strong enough to let go.",
    author: ""
  },
  {
    body:
      "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
    author: "Laurence J. Peter"
  },
  {
    body:
      "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
    author: "Bernard Shaw"
  },
  {
    body:
      "There is only one success � to be able to spend your life in your own way.",
    author: "Christopher Morley"
  },
  {
    body:
      "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered.",
    author: "Nelson Mandela"
  },
  {
    body:
      "By nature man hates change; seldom will he quit his old home till it has actually fallen around his ears.",
    author: "Thomas Carlyle"
  },
  {
    body:
      "Treat people as if they were what they ought to be and you help them to become what they are capable of being.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "If you focus on results, you will never change. If you focus on change, you will get results.",
    author: "Jack Dixon"
  },
  {
    body:
      "I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder.",
    author: "G. K. Chesterton"
  },
  {
    body:
      "No matter how carefully you plan your goals they will never be more that pipe dreams unless you pursue them with gusto.",
    author: "W. Clement Stone"
  },
  {
    body:
      "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.",
    author: "Dalai Lama"
  },
  {
    body:
      "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.",
    author: "Denis Waitley"
  },
  {
    body:
      "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
    author: "John Quincy Adams"
  },
  {
    body:
      "Experience is not what happens to a man. It is what a man does with what happens to him.",
    author: "Aldous Huxley"
  },
  {
    body:
      "All difficult things have their origin in that which is easy, and great things in that which is small.",
    author: "Lao-Tzu"
  },
  {
    body:
      "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
    author: "Confucius"
  },
  {
    body:
      "You can be what you want to be. You have the power within and we will help you always.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "To speak gratitude is courteous and pleasant, to enact gratitude is generous and noble, but to live gratitude is to touch Heaven.",
    author: "Johannes Gaertner"
  },
  {
    body:
      "Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.",
    author: "Gloria Steinem"
  },
  {
    body:
      "What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk.",
    author: "Doug Larson"
  },
  {
    body:
      "Do not waste yourself in rejection, nor bark against the bad, but chant the beauty of the good.",
    author: "Ralph Emerson"
  },
  {
    body:
      "The greatest pleasure I know is to do a good action by stealth, and to have it found out by accident.",
    author: "Charles Lamb"
  },
  {
    body:
      "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "Anne Frank"
  },
  {
    body:
      "The first step to getting the things you want out of life is this: decide what you want.",
    author: "Ben Stein"
  },
  {
    body:
      "When one tugs at a single thing in nature, he finds it attached to the rest of the world.",
    author: "John Muir"
  },
  {
    body:
      "If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.",
    author: "Winston Churchill"
  },
  {
    body:
      "Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others.",
    author: "Jacob Braude"
  },
  {
    body:
      "The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
    author: "Helen Keller"
  },
  {
    body:
      "I am a man of fixed and unbending principles, the first of which is to be flexible at all times.",
    author: "Everett Dirksen"
  },
  {
    body:
      "To live a pure unselfish life, one must count nothing as ones own in the midst of abundance.",
    author: "Buddha"
  },
  {
    body:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas Edison"
  },
  {
    body:
      "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "When we seek to discover the best in others, we somehow bring out the best in ourselves.",
    author: "William Ward"
  },
  {
    body:
      "If you accept the expectations of others, especially negative ones, then you never will change the outcome.",
    author: "Michael Jordan"
  },
  {
    body:
      "The first step to getting the things you want out of life is this: decide what you want.",
    author: "Ben Stein"
  },
  {
    body:
      "A man may fulfil the object of his existence by asking a question he cannot answer, and attempting a task he cannot achieve.",
    author: "Oliver Holmes"
  },
  {
    body:
      "You are always free to change your mind and choose a different future, or a different past.",
    author: "Richard Bach"
  },
  {
    body:
      "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.",
    author: "Confucius"
  },
  {
    body:
      "Id rather regret the things that I have done than the things that I have not done.",
    author: "Lucille Ball"
  },
  {
    body:
      "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
    author: "Epictetus"
  },
  {
    body:
      "The person born with a talent they are meant to use will find their greatest happiness in using it.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "I am always doing that which I cannot do, in order that I may learn how to do it.",
    author: "Pablo Picasso"
  },
  {
    body:
      "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
    author: "Barack Obama"
  },
  {
    body:
      "The world is round and the place which may seem like the end may also be the beginning.",
    author: "Ivy Baker Priest"
  },
  {
    body:
      "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
    author: ""
  },
  {
    body:
      "Give it all you've got because you never know if there's going to be a next time.",
    author: "Danielle Ingrum"
  },
  {
    body:
      "These days people seek knowledge, not wisdom. Knowledge is of the past, wisdom is of the future.",
    author: "Vernon Cooper"
  },
  {
    body:
      "You have to take it as it happens, but you should try to make it happen the way you want to take it.",
    author: "Old German proverb"
  },
  {
    body:
      "Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.",
    author: "Ralph Blum"
  },
  {
    body:
      "Im not in this world to live up to your expectations and you're not in this world to live up to mine.",
    author: "Bruce Lee"
  },
  {
    body:
      "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.",
    author: "Confucius"
  },
  {
    body:
      "Don't wait for your feelings to change to take the action. Take the action and your feelings will change.",
    author: "Barbara Baron"
  },
  {
    body:
      "People take different roads seeking fulfilment and happiness. Just because theyre not on your road doesn't mean they've gotten lost.",
    author: "Dalai Lama"
  },
  {
    body:
      "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.",
    author: "Honore de Balzac"
  },
  {
    body:
      "I am always doing that which I cannot do, in order that I may learn how to do it.",
    author: "Pablo Picasso"
  },
  {
    body:
      "I can't imagine a person becoming a success who doesn't give this game of life everything hes got.",
    author: "Walter Cronkite"
  },
  {
    body:
      "The greatest way to live with honor in this world is to be what we pretend to be.",
    author: "Socrates"
  },
  {
    body:
      "The conditions of conquest are always easy. We have but to toil awhile, endure awhile, believe always, and never turn back.",
    author: "Seneca"
  },
  {
    body:
      "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.",
    author: "George Sheehan"
  },
  {
    body:
      "If you want your life to be more rewarding, you have to change the way you think.",
    author: "Oprah Winfrey"
  },
  {
    body:
      "The grand essentials of happiness are: something to do, something to love, and something to hope for.",
    author: "Chalmers"
  },
  {
    body:
      "By living deeply in the present moment we can understand the past better and we can prepare for a better future.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "Do not be too timid and squeamish about your reactions. All life is an experiment. The more experiments you make the better.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Emerson"
  },
  {
    body:
      "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
    author: "Buddha"
  },
  {
    body:
      "Don't leave a stone unturned. It's always something, to know you have done the most you could.",
    author: "Charles Dickens"
  },
  {
    body:
      "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.",
    author: "Robert Louis Stevenson"
  },
  {
    body:
      "Edison failed 10,000 times before he made the electric light. Do not be discouraged if you fail a few times.",
    author: "Napoleon Hill"
  },
  {
    body:
      "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
    author: "Laurence J. Peter"
  },
  {
    body:
      "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that's why they call it the present.",
    author: ""
  },
  {
    body:
      "The only way to tell the truth is to speak with kindness. Only the words of a loving man can be heard.",
    author: "Henry Thoreau"
  },
  {
    body:
      "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
    author: "Charles DeLint"
  },
  {
    body:
      "Great are they who see that spiritual is stronger than any material force, that thoughts rule the world.",
    author: "Ralph Emerson"
  },
  {
    body:
      "The greatest good you can do for another is not just to share your riches but to reveal to him his own.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.",
    author: "Donald Trump"
  },
  {
    body:
      "You can only grow if you're willing to feel awkward and uncomfortable when you try something new.",
    author: "Brian Tracy"
  },
  {
    body:
      "To free us from the expectations of others, to give us back to ourselves � there lies the great, singular power of self-respect.",
    author: "Joan Didion"
  },
  {
    body:
      "Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.",
    author: "Napoleon Hill"
  },
  {
    body:
      "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.",
    author: "Mabel Newcomber"
  },
  {
    body:
      "Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?",
    author: "Confucius"
  },
  {
    body:
      "When you don't know what you believe, everything becomes an argument. Everything is debatable. But when you stand for something, decisions are obvious.",
    author: ""
  },
  {
    body:
      "Why worry about things you can�t control when you can keep yourself busy controlling the things that depend on you?",
    author: ""
  },
  {
    body:
      "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
    author: "John Astin"
  },
  {
    body:
      "The greatest pleasure I know is to do a good action by stealth, and to have it found out by accident.",
    author: "Charles Lamb"
  },
  {
    body:
      "Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer.",
    author: "Robert Graves"
  },
  {
    body:
      "All difficult things have their origin in that which is easy, and great things in that which is small.",
    author: "Lao-Tzu"
  },
  {
    body:
      "The thing always happens that you really believe in; and the belief in a thing makes it happen.",
    author: "Frank Wright"
  },
  {
    body:
      "A true friend is the most precious of all possessions and the one we take the least thought about acquiring.",
    author: "Francois de La Rochefoucauld"
  },
  {
    body:
      "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.",
    author: "Epictetus"
  },
  {
    body:
      "The only thing to do with good advice is to pass it on. It is never of any use to oneself.",
    author: "Oscar Wilde"
  },
  {
    body:
      "Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary.",
    author: "Margaret Cousins"
  },
  {
    body:
      "One secret of success in life is for a man to be ready for his opportunity when it comes.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "One must be fond of people and trust them if one is not to make a mess of life.",
    author: "E. M. Forster"
  },
  {
    body:
      "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.",
    author: "Denis Waitley"
  },
  {
    body:
      "Every sixty seconds you spend angry, upset or mad, is a full minute of happiness you�ll never get back.",
    author: ""
  },
  {
    body:
      "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.",
    author: "Elbert Hubbard"
  },
  {
    body:
      "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.",
    author: "Epictetus"
  },
  {
    body:
      "This world, after all our science and sciences, is still a miracle; wonderful, inscrutable, magical and more, to whosoever will think of it.",
    author: "Thomas Carlyle"
  },
  {
    body:
      "Every great mistake has a halfway moment, a split second when it can be recalled and perhaps remedied.",
    author: "Pearl Buck"
  },
  {
    body:
      "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.",
    author: "Catherine Pulsifer"
  },
  {
    body:
      "The happiness of a man in this life does not consist in the absence but in the mastery of his passions.",
    author: "Alfred Tennyson"
  },
  {
    body:
      "Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has.",
    author: "Margaret Mead"
  },
  {
    body:
      "Let your hook always be cast; in the pool where you least expect it, there will be a fish.",
    author: "Ovid"
  },
  {
    body:
      "The person born with a talent they are meant to use will find their greatest happiness in using it.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "You get peace of mind not by thinking about it or imagining it, but by quietening and relaxing the restless mind.",
    author: "Remez Sasson"
  },
  {
    body:
      "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.",
    author: "Epictetus"
  },
  {
    body:
      "If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace.",
    author: "Dalai Lama"
  },
  {
    body:
      "Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years.",
    author: "Richard Bach"
  },
  {
    body:
      "It is the greatest of all mistakes to do nothing because you can only do little � do what you can.",
    author: "Sydney Smith"
  },
  {
    body:
      "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
    author: "Lao Tzu"
  },
  {
    body:
      "When you begin to touch your heart or let your heart be touched, you begin to discover that it's bottomless.",
    author: "Pema Chodron"
  },
  {
    body:
      "The thing always happens that you really believe in; and the belief in a thing makes it happen.",
    author: "Frank Wright"
  },
  {
    body:
      "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
    author: "Richard Bach"
  },
  {
    body:
      "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
    author: "Charles DeLint"
  },
  {
    body:
      "Wisdom is knowing what to do next; Skill is knowing how ot do it, and Virtue is doing it.",
    author: "David Jordan"
  },
  {
    body:
      "Make the best use of what is in your power, and take the rest as it happens.",
    author: "Epictetus"
  },
  {
    body:
      "Snowflakes are one of natures most fragile things, but just look what they can do when they stick together.",
    author: "Vista Kelly"
  },
  {
    body:
      "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
    author: "Rumi"
  },
  {
    body:
      "Why worry about things you can�t control when you can keep yourself busy controlling the things that depend on you?",
    author: ""
  },
  {
    body:
      "When one tugs at a single thing in nature, he finds it attached to the rest of the world.",
    author: "John Muir"
  },
  {
    body:
      "I'm a great believer in luck and I find the harder I work, the more I have of it.",
    author: "Thomas Jefferson"
  },
  {
    body:
      "Bad things are not the worst things that can happen to us. Nothing is the worst thing that can happen to us!",
    author: "Richard Bach"
  },
  {
    body:
      "Wisdom is knowing what to do next; Skill is knowing how ot do it, and Virtue is doing it.",
    author: "David Jordan"
  },
  {
    body:
      "You can only grow if you're willing to feel awkward and uncomfortable when you try something new.",
    author: "Brian Tracy"
  },
  {
    body:
      "No valid plans for the future can be made by those who have no capacity for living now.",
    author: "Alan Watts"
  },
  {
    body:
      "The aim of life is self-development. To realize ones nature perfectly � that is what each of us is here for.",
    author: "Oscar Wilde"
  },
  {
    body:
      "Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.",
    author: "Lao Tzu"
  },
  {
    body:
      "One does not discover new lands without consenting to lose sight of the shore for a very long time.",
    author: "Andr� Gide"
  },
  {
    body:
      "To accomplish great things, we must not only act, but also dream; not only plan, but also believe.",
    author: "Anatole France"
  },
  {
    body:
      "The first requisite for success is the ability to apply your physical and mental energies to one problem incessantly without growing weary.",
    author: "Thomas Edison"
  },
  {
    body:
      "If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away.",
    author: "John Steinbeck"
  },
  {
    body:
      "We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life.",
    author: "James Freeman Clarke"
  },
  {
    body:
      "If we are facing in the right direction, all we have to do is keep on walking.",
    author: ""
  },
  {
    body:
      "The minute you settle for less than you deserve, you get even less than you settled for.",
    author: "Maureen Dowd"
  },
  {
    body:
      "Remember always that you not only have the right to be an individual, you have an obligation to be one.",
    author: "Eleanor Roosevelt"
  },
  {
    body:
      "There is only one success � to be able to spend your life in your own way.",
    author: "Christopher Morley"
  },
  {
    body:
      "It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward.",
    author: ""
  },
  {
    body:
      "There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them.",
    author: "Denis Waitley"
  },
  {
    body:
      "If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "If you seek truth you will not seek victory by dishonourable means, and if you find truth you will become invincible.",
    author: "Epictetus"
  },
  {
    body:
      "Through meditation and by giving full attention to one thing at a time, we can learn to direct attention where we choose.",
    author: "Eknath Easwaran"
  },
  {
    body:
      "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
    author: ""
  },
  {
    body:
      "If we are facing in the right direction, all we have to do is keep on walking.",
    author: ""
  },
  {
    body:
      "We could never learn to be brave and patient if there were only joy in the world.",
    author: "Helen Keller"
  },
  {
    body:
      "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
    author: "Sai Baba"
  },
  {
    body: "If it is not right do not do it; if it is not true do not say it.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "You cannot find yourself by going into the past. You can find yourself by coming into the present.",
    author: "Eckhart Tolle"
  },
  {
    body:
      "The truth of the matter is that you always know the right thing to do. The hard part is doing it.",
    author: "Norman Schwarzkopf"
  },
  {
    body:
      "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
    author: "Charlotte Gilman"
  },
  {
    body:
      "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.",
    author: "Julie Morgenstern"
  },
  {
    body:
      "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.",
    author: "Blaise Pascal"
  },
  {
    body:
      "Arrogance and rudeness are training wheels on the bicycle of life � for weak people who cannot keep their balance without them.",
    author: "Laura Teresa Marquez"
  },
  {
    body:
      "Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.",
    author: "Ralph Blum"
  },
  {
    body:
      "If you are patient in one moment of anger, you will escape one hundred days of sorrow.",
    author: "Chinese proverb"
  },
  {
    body:
      "To speak gratitude is courteous and pleasant, to enact gratitude is generous and noble, but to live gratitude is to touch Heaven.",
    author: "Johannes Gaertner"
  },
  {
    body:
      "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "Courage is not about taking risks unknowingly but putting your own being in front of challenges that others may not be able to.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "The truth of the matter is that you always know the right thing to do. The hard part is doing it.",
    author: "Norman Schwarzkopf"
  },
  {
    body:
      "Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?",
    author: "Richard Bach"
  },
  {
    body:
      "Arrogance and rudeness are training wheels on the bicycle of life for weak people who cannot keep their balance without them.",
    author: "Laura Teresa Marquez"
  },
  {
    body:
      "One must be fond of people and trust them if one is not to make a mess of life.",
    author: "E. M. Forster"
  },
  {
    body:
      "The poor man is not he who is without a cent, but he who is without a dream.",
    author: "Harry Kemp"
  },
  {
    body:
      "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
    author: "Isaac Asimov"
  },
  {
    body:
      "The greatest good you can do for another is not just share your riches, but reveal to them their own.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha"
  },
  {
    body:
      "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
    author: "Barack Obama"
  },
  {
    body:
      "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.",
    author: "Donald Trump"
  },
  {
    body:
      "Peace of mind is not the absence of conflict from life, but the ability to cope with it.",
    author: ""
  },
  {
    body:
      "I am a man of fixed and unbending principles, the first of which is to be flexible at all times.",
    author: "Everett Dirksen"
  },
  {
    body:
      "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
    author: "Confucius"
  },
  {
    body:
      "Transformation doesn't take place with a vacuum; instead, it occurs when we are indirectly and directly connected to all those around us.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Face your deficiencies and acknowledge them; but do not let them master you. Let them teach you patience, sweetness, insight.",
    author: "Helen Keller"
  },
  {
    body:
      "To give hope to someone occurs when you teach them how to use the tools to do it for themselves.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.",
    author: "Robert Louis Stevenson"
  },
  {
    body:
      "Change is the law of life. And those who look only to the past or present are certain to miss the future.",
    author: "John Kennedy"
  },
  {
    body:
      "You have power over your mind � not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "Silences make the real conversations between friends. Not the saying but the never needing to say is what counts.",
    author: "Margaret Runbeck"
  },
  {
    body:
      "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
    author: "Rumi"
  },
  {
    body:
      "A good teacher is like a candle � it consumes itself to light the way for others.",
    author: ""
  },
  {
    body:
      "There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them.",
    author: "Denis Waitley"
  },
  {
    body:
      "The greatest good you can do for another is not just to share your riches but to reveal to him his own.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "To be beautiful means to be yourself. You don't need to be accepted by others. You need to accept yourself.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer.",
    author: "Robert Graves"
  },
  {
    body:
      "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity.",
    author: "Louis Pasteur"
  },
  {
    body:
      "One secret of success in life is for a man to be ready for his opportunity when it comes.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.",
    author: "Buddha"
  },
  {
    body:
      "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
    author: "Henry Longfellow"
  },
  {
    body:
      "Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind.",
    author: "Plato"
  },
  {
    body:
      "I cannot always control what goes on outside. But I can always control what goes on inside.",
    author: "Wayne Dyer"
  },
  {
    body:
      "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.",
    author: "Honore de Balzac"
  },
  {
    body:
      "Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary.",
    author: "Margaret Cousins"
  },
  {
    body:
      "What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people.",
    author: "Daisaku Ikeda"
  },
  {
    body:
      "We cannot change our memories, but we can change their meaning and the power they have over us.",
    author: "David Seamans"
  },
  {
    body:
      "When you are offended at any man's fault, turn to yourself and study your own failings. Then you will forget your anger.",
    author: "Epictetus"
  },
  {
    body:
      "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
    author: "Rumi"
  },
  {
    body:
      "To free us from the expectations of others, to give us back to ourselves there lies the great, singular power of self-respect.",
    author: "Joan Didion"
  },
  {
    body:
      "At the center of your being you have the answer; you know who you are and you know what you want.",
    author: "Lao Tzu"
  },
  {
    body:
      "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more",
    author: "Anthony Robbins"
  },
  {
    body:
      "There is no retirement for an artist, it's your way of living so there is no end to it.",
    author: "Henry Moore"
  },
  {
    body:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Take time to deliberate, but when the time for action has arrived, stop thinking and go in.",
    author: "Napoleon Bonaparte"
  },
  {
    body:
      "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
    author: ""
  },
  {
    body:
      "When one tugs at a single thing in nature, he finds it attached to the rest of the world.",
    author: "John Muir"
  },
  {
    body:
      "The happiness of a man in this life does not consist in the absence but in the mastery of his passions.",
    author: "Alfred Tennyson"
  },
  {
    body:
      "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "With realization of ones own potential and self-confidence in ones ability, one can build a better world.",
    author: "Dalai Lama"
  },
  {
    body:
      "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
    author: "Thomas Jefferson"
  },
  {
    body:
      "The greatest good you can do for another is not just to share your riches but to reveal to him his own.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.",
    author: "Leonardo Ruiz"
  },
  {
    body:
      "To free us from the expectations of others, to give us back to ourselves � there lies the great, singular power of self-respect.",
    author: "Joan Didion"
  },
  {
    body:
      "You can only grow if you're willing to feel awkward and uncomfortable when you try something new.",
    author: "Brian Tracy"
  },
  {
    body:
      "The only thing to do with good advice is to pass it on. It is never of any use to oneself.",
    author: "Oscar Wilde"
  },
  {
    body:
      "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
    author: "Richard Bach"
  },
  {
    body:
      "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
    author: "Franklin Roosevelt"
  },
  {
    body:
      "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
    author: "Bernard Shaw"
  },
  {
    body:
      "Sadness may be part of life but there is no need to let it dominate your entire life.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "You cannot make yourself feel something you do not feel, but you can make yourself do right in spite of your feelings.",
    author: "Pearl Buck"
  },
  {
    body:
      "Those who are blessed with the most talent don't necessarily outperform everyone else. It's the people with follow-through who excel.",
    author: "Mary Kay Ash"
  },
  {
    body:
      "Try not to become a man of success, but rather try to become a man of value.",
    author: "Albert Einstein"
  },
  {
    body:
      "All difficult things have their origin in that which is easy, and great things in that which is small.",
    author: "Lao Tzu"
  },
  {
    body:
      "Men of perverse opinion do not know the excellence of what is in their hands, till some one dash it from them.",
    author: "Sophocles"
  },
  {
    body:
      "We never understand how little we need in this world until we know the loss of it.",
    author: "James Barrie"
  },
  {
    body:
      "If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "It is not enough to have a good mind; the main thing is to use it well.",
    author: "Rene Descartes"
  },
  {
    body:
      "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway.",
    author: "Mary Kay Ash"
  },
  {
    body:
      "To be beautiful means to be yourself. You don't need to be accepted by others. You need to accept yourself.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "Keeping a little ahead of conditions is one of the secrets of business, the trailer seldom goes far.",
    author: "Charles Schwab"
  },
  {
    body:
      "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
    author: "Thomas Jefferson"
  },
  {
    body:
      "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
    author: "Bruce Lee"
  },
  {
    body:
      "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.",
    author: "Immanuel Kant"
  },
  {
    body:
      "Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Remember always that you not only have the right to be an individual, you have an obligation to be one.",
    author: "Eleanor Roosevelt"
  },
  {
    body:
      "It is only with the heart that one can see rightly, what is essential is invisible to the eye.",
    author: "Antoine de Saint-Exupery"
  },
  {
    body:
      "When you begin to touch your heart or let your heart be touched, you begin to discover that it's bottomless.",
    author: "Pema Chodron"
  },
  {
    body:
      "Never do things others can do and will do, if there are things others cannot do or will not do.",
    author: "Amelia Earhart"
  },
  {
    body:
      "I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability.",
    author: "Confucius"
  },
  {
    body:
      "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    author: "Jimmy Dean"
  },
  {
    body:
      "If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away.",
    author: "John Steinbeck"
  },
  {
    body:
      "What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.",
    author: "Wayne Dyer"
  },
  {
    body:
      "People of mediocre ability sometimes achieve outstanding success because they don't know when to quit. Most men succeed because they are determined to.",
    author: "George Allen"
  },
  {
    body:
      "Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.",
    author: "Mother Teresa"
  },
  {
    body:
      "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.",
    author: "Joseph Roux"
  },
  {
    body:
      "I cannot always control what goes on outside. But I can always control what goes on inside.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Life's challenges are not supposed to paralyse you, they're supposed to help you discover who you are.",
    author: "Bernice Reagon"
  },
  {
    body:
      "If you accept the expectations of others, especially negative ones, then you never will change the outcome.",
    author: "Michael Jordan"
  },
  {
    body:
      "Life is like a sewer. What you get out of it depends on what you put into it.",
    author: "Tom Lehrer"
  },
  {
    body:
      "You can be what you want to be. You have the power within and we will help you always.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "If the stars should appear but one night every thousand years how man would marvel and adore.",
    author: "Ralph Emerson"
  },
  {
    body:
      "The greatest way to live with honour in this world is to be what we pretend to be.",
    author: "Socrates"
  },
  {
    body:
      "To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly.",
    author: "Henri Bergson"
  },
  {
    body:
      "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.",
    author: "Catherine Pulsifer"
  },
  {
    body:
      "True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.",
    author: "William Penn"
  },
  {
    body:
      "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
    author: "Bernard Shaw"
  },
  {
    body:
      "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.",
    author: "Immanuel Kant"
  },
  {
    body:
      "Try not to become a man of success but rather try to become a man of value.",
    author: "Albert Einstein"
  },
  {
    body:
      "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
    author: "Rumi"
  },
  {
    body:
      "You can't create in a vacuum. Life gives you the material and dreams can propel new beginnings.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "A true friend is the most precious of all possessions and the one we take the least thought about acquiring.",
    author: "Francois de La Rochefoucauld"
  },
  {
    body:
      "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.",
    author: "Mabel Newcomber"
  },
  {
    body:
      "Your work is to discover your world and then with all your heart give yourself to it.",
    author: "Buddha"
  },
  {
    body:
      "Arrogance and rudeness are training wheels on the bicycle of life for weak people who cannot keep their balance without them.",
    author: "Laura Teresa Marquez"
  },
  {
    body:
      "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.",
    author: "Dalai Lama"
  },
  {
    body:
      "We cannot change our memories, but we can change their meaning and the power they have over us.",
    author: "David Seamans"
  },
  {
    body:
      "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
    author: "Anais Nin"
  },
  {
    body:
      "One does not discover new lands without consenting to lose sight of the shore for a very long time.",
    author: "Andr� Gide"
  },
  {
    body:
      "The person who lives life fully, glowing with life's energy, is the person who lives a successful life.",
    author: "Daisaku Ikeda"
  },
  {
    body:
      "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.",
    author: "Blaise Pascal"
  },
  {
    body:
      "Don't turn away from possible futures before you're certain you don't have anything to learn from them.",
    author: "Richard Bach"
  },
  {
    body:
      "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway.",
    author: "Mary Kay Ash"
  },
  {
    body:
      "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.",
    author: "Julie Morgenstern"
  },
  {
    body:
      "A successful person is one who can lay a firm foundation with the bricks that others throw at him or her.",
    author: "David Brinkley"
  },
  {
    body:
      "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
    author: "Bruce Lee"
  },
  {
    body:
      "All that we are is the result of what we have thought. The mind is everything. What we think we become.",
    author: "Buddha"
  },
  {
    body:
      "Work while you have the light. You are responsible for the talent that has been entrusted to you.",
    author: "Henri-Frederic Amiel"
  },
  {
    body:
      "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
    author: "Bernard Shaw"
  },
  {
    body:
      "A true friend is the most precious of all possessions and the one we take the least thought about acquiring.",
    author: "Francois de La Rochefoucauld"
  },
  {
    body:
      "How far that little candle throws its beams! So shines a good deed in a naughty world.",
    author: "William Shakespeare"
  },
  {
    body:
      "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
    author: "Napoleon Hill"
  },
  {
    body:
      "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
    author: "John Quincy Adams"
  },
  {
    body: "Fear is a darkroom where negatives develop.",
    author: "Usman Asif"
  },
  {
    body: "It is in your moments of decision that your destiny is shaped.",
    author: "Tony Robbins"
  },
  {
    body: "Those who are free of resentful thoughts surely find peace.",
    author: "Buddha"
  },
  {
    body: "Blaze with the fire that is never extinguished.",
    author: "Luisa Sigea"
  },
  {
    body: "An obstacle may be either a stepping stone or a stumbling block.",
    author: ""
  },
  {
    body: "The pain passes, but the beauty remains.",
    author: "Pierre Auguste Renoir"
  },
  {
    body: "All I can say about life is, Oh God, enjoy it!",
    author: "Bob Newhart"
  },
  {
    body:
      "Creativity comes from trust. Trust your instincts. And never hope more than you work.",
    author: "Rita Mae Brown"
  },
  {
    body:
      "Love doesn't make the world go round, love is what makes the ride worthwhile.",
    author: "Elizabeth Browning"
  },
  {
    body:
      "Your outlook on life is a direct reflection on how much you like yourself.",
    author: "Lululemon"
  },
  {
    body:
      "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
    author: "Lao Tzu"
  },
  {
    body: "You won't skid if you stay in a rut.",
    author: "Kin Hubbard"
  },
  {
    body:
      "You block your dream when you allow your fear to grow bigger than your faith.",
    author: "Mary Morrissey"
  },
  {
    body: "Happiness depends upon ourselves.",
    author: "Aristotle"
  },
  {
    body: "Tension is who you think you should be. Relaxation is who you are.",
    author: "Chinese proverb"
  },
  {
    body: "Wherever a man turns he can find someone who needs him.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "If one is lucky, a solitary fantasy can totally transform one million realities.",
    author: "Maya Angelou"
  },
  {
    body: "The years teach much which the days never know.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Never idealize others. They will never live up to your expectations.",
    author: "Leo Buscaglia"
  },
  {
    body:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin Roosevelt"
  },
  {
    body: "He who is contented is rich.",
    author: "Lao Tzu"
  },
  {
    body:
      "When you realize there is nothing lacking, the whole world belongs to you.",
    author: "Lao Tzu"
  },
  {
    body: "No man was ever wise by chance.",
    author: "Seneca"
  },
  {
    body: "The more you know yourself, the more you forgive yourself.",
    author: "Confucius"
  },
  {
    body: "Trust yourself. You know more than you think you do.",
    author: "Benjamin Spock"
  },
  {
    body: "Time you enjoy wasting, was not wasted.",
    author: "John Lennon"
  },
  {
    body:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    body: "Meaning is not what you start with but what you end up with.",
    author: "Peter Elbow"
  },
  {
    body: "No one has ever become poor by giving.",
    author: "Anne Frank"
  },
  {
    body:
      "Be faithful in small things because it is in them that your strength lies.",
    author: "Mother Teresa"
  },
  {
    body: "What you do not want done to yourself, do not do to others.",
    author: "Confucius"
  },
  {
    body:
      "Each misfortune you encounter will carry in it the seed of tomorrows good luck.",
    author: "Og Mandino"
  },
  {
    body: "All is flux; nothing stays still.",
    author: "Heraclitus"
  },
  {
    body: "He who is fixed to a star does not change his mind.",
    author: "Leonardo da Vinci"
  },
  {
    body:
      "He who lives in harmony with himself lives in harmony with the universe.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "Ignorant men don't know what good they hold in their hands until they've flung it away.",
    author: "Sophocles"
  },
  {
    body: "When the solution is simple, God is answering.",
    author: "Albert Einstein"
  },
  {
    body:
      "All achievements, all earned riches, have their beginning in an idea.",
    author: "Napoleon Hill"
  },
  {
    body: "Do not turn back when you are just at the goal.",
    author: "Publilius Syrus"
  },
  {
    body: "You can't trust without risk but neither can you live in a cocoon.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "All perceiving is also thinking, all reasoning is also intuition, all observation is also invention.",
    author: "Rudolf Arnheim"
  },
  {
    body: "Error is discipline through which we advance.",
    author: "Channing"
  },
  {
    body:
      "The truth is always exciting. Speak it, then. Life is dull without it.",
    author: "Pearl Buck"
  },
  {
    body: "What worries you masters you.",
    author: "Haddon Robinson"
  },
  {
    body:
      "The worst bankrupt in the world is the person who has lost his enthusiasm.",
    author: "H. W. Arnold"
  },
  {
    body:
      "The superior man is modest in his speech, but exceeds in his actions.",
    author: "Confucius"
  },
  {
    body:
      "The longer we dwell on our misfortunes, the greater is their power to harm us.",
    author: "Voltaire"
  },
  {
    body: "Those who will play with cats must expect to be scratched.",
    author: "Cervantes"
  },
  {
    body: "I've never seen a smiling face that was not beautiful.",
    author: ""
  },
  {
    body: "In all things of nature there is something of the marvellous.",
    author: "Aristotle"
  },
  {
    body: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "Bernard Shaw"
  },
  {
    body:
      "The universe is transformation; our life is what our thoughts make it.",
    author: "Marcus Aurelius"
  },
  {
    body: "Memory is the mother of all wisdom.",
    author: "Samuel Johnson"
  },
  {
    body: "Silence is the true friend that never betrays.",
    author: "Confucius"
  },
  {
    body:
      "You might well remember that nothing can bring you success but yourself.",
    author: "Napoleon Hill"
  },
  {
    body: "Watch the little things; a small leak will sink a great ship.",
    author: "Benjamin Franklin"
  },
  {
    body: "God has given you one face, and you make yourself another.",
    author: "William Shakespeare"
  },
  {
    body:
      "All perceiving is also thinking, all reasoning is also intuition, all observation is also invention.",
    author: "Rudolf Arnheim"
  },
  {
    body: "The more you know yourself, the more you forgive yourself.",
    author: "Confucius"
  },
  {
    body:
      "Efficiency is doing things right; effectiveness is doing the right things.",
    author: "Peter Drucker"
  },
  {
    body: "To be wronged is nothing unless you continue to remember it.",
    author: "Confucius"
  },
  {
    body: "Kindness is the greatest wisdom.",
    author: ""
  },
  {
    body: "Action will remove the doubts that theory cannot solve.",
    author: "Tehyi Hsieh"
  },
  {
    body:
      "Don't miss all the beautiful colors of the rainbow looking for that pot of gold.",
    author: ""
  },
  {
    body: "Your big opportunity may be right where you are now.",
    author: "Napoleon Hill"
  },
  {
    body: "Kindness is the greatest wisdom.",
    author: ""
  },
  {
    body:
      "People who say it cannot be done should not interrupt those who are doing it.",
    author: "Chinese proverb"
  },
  {
    body: "The day you decide to do it is your lucky day.",
    author: "Japanese proverb"
  },
  {
    body: "We must not say every mistake is a foolish one.",
    author: "Cicero"
  },
  {
    body: "Imagination is the highest kite one can fly.",
    author: "Lauren Bacall"
  },
  {
    body:
      "Every action of our lives touches on some chord that will vibrate in eternity.",
    author: "Edwin Chapin"
  },
  {
    body:
      "Accept challenges, so that you may feel the exhilaration of victory.",
    author: "George Patton"
  },
  {
    body: "It is better to understand a little than to misunderstand a lot.",
    author: "Anatole France"
  },
  {
    body: "You don't drown by falling in water. You drown by staying there.",
    author: ""
  },
  {
    body:
      "Never be afraid to try, remember... Amateurs built the ark, Professionals built the Titanic.",
    author: ""
  },
  {
    body: "Correction does much, but encouragement does more.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "Know, first, who you are, and then adorn yourself accordingly.",
    author: "Epictetus"
  },
  {
    body:
      "The biggest adventure you can ever take is to live the life of your dreams.",
    author: "Oprah Winfrey"
  },
  {
    body: "The pain passes, but the beauty remains.",
    author: "Pierre Auguste Renoir"
  },
  {
    body: "The cause is hidden. The effect is visible to all.",
    author: "Ovid"
  },
  {
    body:
      "You will not be punished for your anger, you will be punished by your anger.",
    author: "Buddha"
  },
  {
    body: "Time you enjoy wasting, was not wasted.",
    author: "John Lennon"
  },
  {
    body:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    body:
      "Don't miss all the beautiful colors of the rainbow looking for that pot of gold.",
    author: ""
  },
  {
    body: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles Swindoll"
  },
  {
    body:
      "We all have problems. The way we solve them is what makes us different.",
    author: ""
  },
  {
    body: "An obstacle may be either a stepping stone or a stumbling block.",
    author: ""
  },
  {
    body: "To want to be what one can be is purpose in life.",
    author: "Cynthia Ozick"
  },
  {
    body:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    body:
      "Remember that sometimes not getting what you want is a wonderful stroke of luck.",
    author: "Dalai Lama"
  },
  {
    body: "Truth is powerful and it prevails.",
    author: "Sojourner Truth"
  },
  {
    body: "History will be kind to me for I intend to write it.",
    author: "Winston Churchill"
  },
  {
    body: "Short words are best and the old words when short are best of all.",
    author: "Winston Churchill"
  },
  {
    body: "Our lives are a sum total of the choices we have made.",
    author: "Wayne Dyer"
  },
  {
    body: "Time stays long enough for anyone who will use it.",
    author: "Leonardo da Vinci"
  },
  {
    body: "Each day provides its own gifts.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "You have enemies? Good. That means you've stood up for something, sometime in your life.",
    author: "Winston Churchill"
  },
  {
    body: "If you light a lamp for somebody, it will also brighten your path.",
    author: "Buddha"
  },
  {
    body:
      "Never tell me the sky�s the limit when there are footprints on the moon.",
    author: ""
  },
  {
    body: "You must welcome change as the rule but not as your ruler.",
    author: "Denis Waitley"
  },
  {
    body:
      "Give whatever you are doing and whoever you are with the gift of your attention.",
    author: "Jim Rohn"
  },
  {
    body: "Always be smarter than the people who hire you.",
    author: "Lena Horne"
  },
  {
    body: "We do what we do because we believe.",
    author: ""
  },
  {
    body: "Formula for success: under promise and over deliver.",
    author: "Tom Peters"
  },
  {
    body: "The eye sees only what the mind is prepared to comprehend.",
    author: "Henri Bergson"
  },
  {
    body: "You can't stop the waves, but you can learn to surf.",
    author: "Jon Kabat-Zinn"
  },
  {
    body:
      "Some people think it's holding that makes one strong � sometimes it's letting go.",
    author: ""
  },
  {
    body:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison"
  },
  {
    body: "People seldom notice old clothes if you wear a big smile.",
    author: "Lee Mildon"
  },
  {
    body:
      "The more light you allow within you, the brighter the world you live in will be.",
    author: "Shakti Gawain"
  },
  {
    body: "Nothing diminishes anxiety faster than action.",
    author: "Walter Anderson"
  },
  {
    body:
      "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
    author: "Andr� Gide"
  },
  {
    body:
      "Everything that irritates us about others can lead us to an understanding about ourselves.",
    author: "Carl Jung"
  },
  {
    body: "Never mistake activity for achievement.",
    author: "John Wooden"
  },
  {
    body: "Fortune favours the brave.",
    author: "Virgil"
  },
  {
    body: "Can you imagine what I would do if I could do all I can?",
    author: "Sun Tzu"
  },
  {
    body:
      "Remember that sometimes not getting what you want is a wonderful stroke of luck.",
    author: "Dalai Lama"
  },
  {
    body:
      "Practice yourself, for heavens sake in little things, and then proceed to greater.",
    author: "Epictetus"
  },
  {
    body: "Ignorance never settle a question.",
    author: "Benjamin Disraeli"
  },
  {
    body: "The awareness of our own strength makes us modest.",
    author: "Paul Cezanne"
  },
  {
    body: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  },
  {
    body:
      "They must often change, who would be constant in happiness or wisdom.",
    author: "Confucius"
  },
  {
    body: "There are no failures. Just experiences and your reactions to them.",
    author: "Tom Krause"
  },
  {
    body: "Your future depends on many things, but mostly on you.",
    author: "Frank Tyger"
  },
  {
    body:
      "Fear grows in darkness; if you think theres a bogeyman around, turn on the light.",
    author: "Dorothy Thompson"
  },
  {
    body: "If you surrender to the wind, you can ride it.",
    author: "Toni Morrison"
  },
  {
    body:
      "The most important point is to accept yourself and stand on your two feet.",
    author: "Shunryu Suzuki"
  },
  {
    body: "It is better to understand a little than to misunderstand a lot.",
    author: "Anatole France"
  },
  {
    body: "If we did the things we are capable of, we would astound ourselves.",
    author: "Thomas Edison"
  },
  {
    body:
      "Do not expect the world to look bright, if you habitually wear gray-brown glasses.",
    author: "Tomas Eliot"
  },
  {
    body:
      "More often than not, anger is actually an indication of weakness rather than of strength.",
    author: "Dalai Lama"
  },
  {
    body: "We must not say every mistake is a foolish one.",
    author: "Cicero"
  },
  {
    body:
      "The superior man is modest in his speech, but exceeds in his actions.",
    author: "Confucius"
  },
  {
    body: "As long as your going to be thinking anyway, think big.",
    author: "Donald Trump"
  },
  {
    body: "Without some goals and some efforts to reach it, no man can live.",
    author: "John Dewey"
  },
  {
    body: "He who obtains has little. He who scatters has much.",
    author: "Richard Braunstein"
  },
  {
    body: "Wherever a man turns he can find someone who needs him.",
    author: "Albert Schweitzer"
  },
  {
    body: "Myths which are believed in tend to become true.",
    author: "George Orwell"
  },
  {
    body: "If the shoe doesn't fit, must we change the foot?",
    author: "Gloria Steinem"
  },
  {
    body: "Love all, trust a few, do wrong to none.",
    author: "William Shakespeare"
  },
  {
    body: "Those who will play with cats must expect to be scratched.",
    author: "Cervantes"
  },
  {
    body:
      "You have to do your own growing no matter how tall your grandfather was.",
    author: "Abraham Lincoln"
  },
  {
    body: "To be upset over what you don't have is to waste what you do have.",
    author: "Ken S. Keyes"
  },
  {
    body: "The foot feels the foot when it feels the ground.",
    author: "Buddha"
  },
  {
    body: "Not what we have but what we enjoy constitutes our abundance.",
    author: "John Petit-Senn"
  },
  {
    body:
      "We should all be thankful for those people who rekindle the inner spirit.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "Opportunity is missed by most because it is dressed in overalls and looks like work.",
    author: "Thomas Edison"
  },
  {
    body:
      "Successful people ask better questions, and as a result, they get better answers.",
    author: "Tony Robbins"
  },
  {
    body: "It is never too late to be what you might have been.",
    author: "George Eliot"
  },
  {
    body: "The beginning is always today.",
    author: "Mary Wollstonecraft"
  },
  {
    body: "Sadness flies away on the wings of time.",
    author: "Jean de la Fontaine"
  },
  {
    body:
      "In the long run we get no more than we have been willing to risk giving.",
    author: "Sheldon Kopp"
  },
  {
    body: "Self-trust is the first secret of success.",
    author: "Ralph Emerson"
  },
  {
    body: "Without some goals and some efforts to reach it, no man can live.",
    author: "John Dewey"
  },
  {
    body:
      "So long as a person is capable of self-renewal they are a living being.",
    author: "Henri-Frederic Amiel"
  },
  {
    body: "Don't look back. Something might be gaining on you.",
    author: "Satchel Paige"
  },
  {
    body: "From error to error one discovers the entire truth.",
    author: "Sigmund Freud"
  },
  {
    body:
      "They must often change, who would be constant in happiness or wisdom.",
    author: "Confucius"
  },
  {
    body:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas Edison"
  },
  {
    body:
      "Learn all you can from the mistakes of others. You won't have time to make them all yourself.",
    author: "Alfred Sheinwold"
  },
  {
    body:
      "Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.",
    author: "Ralph Blum"
  },
  {
    body:
      "The greatest way to live with honour in this world is to be what we pretend to be.",
    author: "Socrates"
  },
  {
    body:
      "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom.",
    author: "Marcel Proust"
  },
  {
    body:
      "Look back over the past, with its changing empires that rose and fell, and you can foresee the future, too.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.",
    author: "Immanuel Kant"
  },
  {
    body:
      "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
    author: ""
  },
  {
    body: "If it is not right do not do it; if it is not true do not say it.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
    author: "Franklin Roosevelt"
  },
  {
    body:
      "A life spent making mistakes is not only more honourable, but more useful than a life spent doing nothing.",
    author: "George Bernard Shaw"
  },
  {
    body:
      "Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has.",
    author: "Margaret Mead"
  },
  {
    body:
      "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "Men are disturbed not by things, but by the view which they take of them.",
    author: "Epictetus"
  },
  {
    body:
      "Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world.",
    author: "Blaise Pascal"
  },
  {
    body:
      "Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?",
    author: "Confucius"
  },
  {
    body:
      "People of mediocre ability sometimes achieve outstanding success because they don't know when to quit. Most men succeed because they are determined to.",
    author: "George Allen"
  },
  {
    body:
      "Happiness is a Swedish sunset � it is there for all, but most of us look the other way and lose it.",
    author: "Mark Twain"
  },
  {
    body:
      "A smile is a light in the window of your face to show your heart is at home.",
    author: ""
  },
  {
    body:
      "The greatest good you can do for another is not just to share your riches but to reveal to him his own.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "The person who lives life fully, glowing with life's energy, is the person who lives a successful life.",
    author: "Daisaku Ikeda"
  },
  {
    body:
      "Your work is to discover your world and then with all your heart give yourself to it.",
    author: "Buddha"
  },
  {
    body:
      "A man may fulfil the object of his existence by asking a question he cannot answer, and attempting a task he cannot achieve.",
    author: "Oliver Holmes"
  },
  {
    body:
      "When we seek to discover the best in others, we somehow bring out the best in ourselves.",
    author: "William Ward"
  },
  {
    body:
      "Look forward to spring as a time when you can start to see what nature has to offer once again.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.",
    author: "Blaise Pascal"
  },
  {
    body:
      "Trust your own instinct. Your mistakes might as well be your own, instead of someone elses.",
    author: "Billy Wilder"
  },
  {
    body:
      "The least movement is of importance to all nature. The entire ocean is affected by a pebble.",
    author: "Blaise Pascal"
  },
  {
    body:
      "I am always doing that which I can not do, in order that I may learn how to do it.",
    author: "Pablo Picasso"
  },
  {
    body:
      "You are always free to change your mind and choose a different future, or a different past.",
    author: "Richard Bach"
  },
  {
    body:
      "If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace.",
    author: "Dalai Lama"
  },
  {
    body:
      "The grand essentials of happiness are: something to do, something to love, and something to hope for.",
    author: "Chalmers"
  },
  {
    body:
      "Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.",
    author: "Dalai Lama"
  },
  {
    body:
      "Everyone can taste success when the going is easy, but few know how to taste victory when times get tough.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them.",
    author: "Denis Waitley"
  },
  {
    body:
      "Men in general judge more from appearances than from reality. All men have eyes, but few have the gift of penetration.",
    author: "Niccolo Machiavelli"
  },
  {
    body:
      "You may only be someone in the world, but to someone else, you may be the world.",
    author: ""
  },
  {
    body:
      "The real measure of your wealth is how much youd be worth if you lost all your money.",
    author: ""
  },
  {
    body:
      "Every artist dips his brush in his own soul, and paints his own nature into his pictures.",
    author: "Henry Ward Beecher"
  },
  {
    body:
      "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
    author: "Buddha"
  },
  {
    body:
      "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.",
    author: "Joseph Roux"
  },
  {
    body:
      "It is the greatest of all mistakes to do nothing because you can only do little � do what you can.",
    author: "Sydney Smith"
  },
  {
    body:
      "If you take each challenge one step at a time, with faith in every footstep, your strength and understanding will increase.",
    author: "James Faust"
  },
  {
    body:
      "There is only one corner of the universe you can be certain of improving, and that's your own self.",
    author: "Aldous Huxley"
  },
  {
    body:
      "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
    author: "Buddha"
  },
  {
    body:
      "Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace and gratitude.",
    author: "Denis Waitley"
  },
  {
    body:
      "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
    author: "Tryon Edwards"
  },
  {
    body:
      "At the center of your being you have the answer; you know who you are and you know what you want.",
    author: "Lao Tzu"
  },
  {
    body:
      "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
    author: "John Astin"
  },
  {
    body:
      "Until you value yourself, you won't value your time. Until you value your time, you won't do anything with it.",
    author: "M. Scott Peck"
  },
  {
    body:
      "Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength.",
    author: "Hasidic saying"
  },
  {
    body:
      "When we quit thinking primarily about ourselves and our own self-preservation, we undergo a truly heroic transformation of consciousness.",
    author: "Joseph Campbell"
  },
  {
    body:
      "Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.",
    author: "Ralph Blum"
  },
  {
    body:
      "I cannot always control what goes on outside. But I can always control what goes on inside.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Do not give your attention to what others do or fail to do; give it to what you do or fail to do.",
    author: "Dhammapada"
  },
  {
    body:
      "The world is round and the place which may seem like the end may also be the beginning.",
    author: "Ivy Baker Priest"
  },
  {
    body:
      "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
    author: "Tryon Edwards"
  },
  {
    body:
      "Follow effective action with quiet reflection. From the quiet reflection will come even more effective action.",
    author: "Peter Drucker"
  },
  {
    body:
      "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
    author: "Bruce Lee"
  },
  {
    body:
      "Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are.",
    author: "Bernice Reagon"
  },
  {
    body:
      "There is one thing you have got to learn about our movement. Three people are better than no people.",
    author: "Fannie Hamer"
  },
  {
    body:
      "We never understand how little we need in this world until we know the loss of it.",
    author: "James Barrie"
  },
  {
    body:
      "Happiness is a perfume you cannot pour on others without getting a few drops on yourself.",
    author: "Ralph Waldo Emerson"
  },
  {
    body:
      "Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.",
    author: "Napoleon Hill"
  },
  {
    body:
      "You get peace of mind not by thinking about it or imagining it, but by quietening and relaxing the restless mind.",
    author: "Remez Sasson"
  },
  {
    body:
      "I'm a great believer in luck and I find the harder I work, the more I have of it.",
    author: "Thomas Jefferson"
  },
  {
    body:
      "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle"
  },
  {
    body:
      "It is not the mistake that has the most power, instead, it is learning from the mistake to advance your own attributes.",
    author: "Byron Roberts"
  },
  {
    body:
      "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.",
    author: "Denis Waitley"
  },
  {
    body:
      "The amount of happiness that you have depends on the amount of freedom you have in your heart.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind.",
    author: "Buddha"
  },
  {
    body:
      "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
    author: "Buddha"
  },
  {
    body:
      "Do not give your attention to what others do or fail to do; give it to what you do or fail to do.",
    author: "Dhammapada"
  },
  {
    body:
      "I believe that a simple and unassuming manner of life is best for everyone, best both for the body and the mind.",
    author: "Albert Einstein"
  },
  {
    body:
      "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.",
    author: "George Sheehan"
  },
  {
    body:
      "Do not be too timid and squeamish about your reactions. All life is an experiment. The more experiments you make the better.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity",
    author: "Louis Pasteur"
  },
  {
    body:
      "Your vision will become clear only when you look into your heart. Who looks outside, dreams. Who looks inside, awakens.",
    author: "Carl Jung"
  },
  {
    body:
      "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift. That is why we call it the present.",
    author: "Babatunde Olatunji"
  },
  {
    body:
      "Make the best use of what is in your power, and take the rest as it happens.",
    author: "Epictetus"
  },
  {
    body:
      "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.",
    author: "Elbert Hubbard"
  },
  {
    body:
      "The way we communicate with others and with ourselves ultimately determines the quality of our lives.",
    author: "Tony Robbins"
  },
  {
    body:
      "The greatest good you can do for another is not just to share your riches but to reveal to him his own.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.",
    author: "Julie Morgenstern"
  },
  {
    body:
      "Every man takes the limits of his own field of vision for the limits of the world.",
    author: "Arthur Schopenhauer"
  },
  {
    body:
      "Sometimes it is better to lose and do the right thing than to win and do the wrong thing.",
    author: "Tony Blair"
  },
  {
    body:
      "If we are facing in the right direction, all we have to do is keep on walking.",
    author: ""
  },
  {
    body:
      "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.",
    author: "Dalai Lama"
  },
  {
    body:
      "I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted.",
    author: "Og Mandino"
  },
  {
    body:
      "Let us always meet each other with smile, for the smile is the beginning of love.",
    author: "Mother Teresa"
  },
  {
    body:
      "A bend in the road is not the end of the road...unless you fail to make the turn.",
    author: ""
  },
  {
    body:
      "I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder.",
    author: "G. K. Chesterton"
  },
  {
    body:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle"
  },
  {
    body:
      "Peace of mind is not the absence of conflict from life, but the ability to cope with it.",
    author: ""
  },
  {
    body:
      "Living at risk is jumping off the cliff and building your wings on the way down.",
    author: "Ray Bradbury"
  },
  {
    body:
      "The person born with a talent they are meant to use will find their greatest happiness in using it.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "In the depth of winter, I finally learned that there was within me an invincible summer.",
    author: "Albert Camus"
  },
  {
    body:
      "Wit lies in recognizing the resemblance among things which differ and the difference between things which are alike.",
    author: "Madame de Stael"
  },
  {
    body:
      "Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind.",
    author: "Plato"
  },
  {
    body:
      "A failure is a man who has blundered but is not capable of cashing in on the experience.",
    author: "Elbert Hubbard"
  },
  {
    body:
      "I cannot give you the formula for success, but I can give you the formula for failure: which is: Try to please everybody.",
    author: "Herbert Swope"
  },
  {
    body:
      "I believe that a simple and unassuming manner of life is best for everyone, best both for the body and the mind.",
    author: "Albert Einstein"
  },
  {
    body:
      "One who asks a question is a fool for five minutes; one who does not ask a question remains a fool forever.",
    author: ""
  },
  {
    body:
      "The person who lives life fully, glowing with life's energy, is the person who lives a successful life.",
    author: "Daisaku Ikeda"
  },
  {
    body:
      "The power of intuitive understanding will protect you from harm until the end of your days.",
    author: "Laozi"
  },
  {
    body:
      "The best thing about the future is that it only comes one day at a time.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "A smile is a light in the window of your face to show your heart is at home.",
    author: ""
  },
  {
    body:
      "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
    author: "Laurence J. Peter"
  },
  {
    body:
      "We have two ears and one mouth so that we can listen twice as much as we speak.",
    author: "Epictetus"
  },
  {
    body:
      "Fear of failure is one attitude that will keep you at the same point in your life.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Sadness may be part of life but there is no need to let it dominate your entire life.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.",
    author: "Dalai Lama"
  },
  {
    body:
      "Friends are those rare people who ask how we are and then wait to hear the answer.",
    author: "Ed Cunningham"
  },
  {
    body:
      "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
    author: "Bruce Lee"
  },
  {
    body:
      "I'm a great believer in luck and I find the harder I work, the more I have of it.",
    author: "Thomas Jefferson"
  },
  {
    body:
      "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    author: "Jimmy Dean"
  },
  {
    body:
      "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.",
    author: "Pema Chodron"
  },
  {
    body:
      "Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength.",
    author: "Hasidic saying"
  },
  {
    body:
      "People grow through experience if they meet life honestly and courageously. This is how character is built.",
    author: "Eleanor Roosevelt"
  },
  {
    body:
      "A hero is no braver than an ordinary man, but he is braver five minutes longer.",
    author: "Ralph Waldo Emerson"
  },
  {
    body:
      "While we try to teach our children all about life, our children teach us what life is all about.",
    author: "Angela Schwindt"
  },
  {
    body:
      "If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace.",
    author: "Dalai Lama"
  },
  {
    body:
      "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.",
    author: "Buddha"
  },
  {
    body:
      "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that's why they call it the present.",
    author: ""
  },
  {
    body:
      "All difficult things have their origin in that which is easy, and great things in that which is small.",
    author: "Lao-Tzu"
  },
  {
    body:
      "When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way.",
    author: "Wayne Dyer"
  },
  {
    body:
      "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.",
    author: "Leonardo Ruiz"
  },
  {
    body:
      "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.",
    author: "Charles Darwin"
  },
  {
    body:
      "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
    author: ""
  },
  {
    body:
      "One who asks a question is a fool for five minutes; one who does not ask a question remains a fool forever.",
    author: ""
  },
  {
    body:
      "This world, after all our science and sciences, is still a miracle; wonderful, inscrutable, magical and more, to whosoever will think of it.",
    author: "Thomas Carlyle"
  },
  {
    body:
      "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
    author: "Isaac Asimov"
  },
  {
    body:
      "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.",
    author: "Dalai Lama"
  },
  {
    body:
      "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
    author: "Charles DeLint"
  },
  {
    body:
      "Genuine love should first be directed at oneself � if we do not love ourselves, how can we love others?",
    author: "Dalai Lama"
  },
  {
    body:
      "Courage is not about taking risks unknowingly but putting your own being in front of challenges that others may not be able to.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer.",
    author: "Robert Graves"
  },
  {
    body:
      "All difficult things have their origin in that which is easy, and great things in that which is small.",
    author: "Lao Tzu"
  },
  {
    body:
      "The Creator has not given you a longing to do that which you have no ability to do.",
    author: "Orison Marden"
  },
  {
    body:
      "It's so simple to be wise. Just think of something stupid to say and then don't say it.",
    author: "Sam Levenson"
  },
  {
    body:
      "Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health.",
    author: "Dalai Lama"
  },
  {
    body:
      "Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind.",
    author: "Buddha"
  },
  {
    body:
      "Until you make peace with who you are, you will never be content with what you have.",
    author: "Doris Mortman"
  },
  {
    body:
      "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
    author: "Anais Nin"
  },
  {
    body:
      "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.",
    author: "Mabel Newcomber"
  },
  {
    body:
      "To give hope to someone occurs when you teach them how to use the tools to do it for themselves.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "It is the greatest of all mistakes to do nothing because you can only do little � do what you can.",
    author: "Sydney Smith"
  },
  {
    body:
      "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
    author: "Buddha"
  },
  {
    body:
      "To live a pure unselfish life, one must count nothing as ones own in the midst of abundance.",
    author: "Buddha"
  },
  {
    body:
      "The moment one gives close attention to anything, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
    author: "Henry Miller"
  },
  {
    body:
      "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mohandas Gandhi"
  },
  {
    body:
      "If we are facing in the right direction, all we have to do is keep on walking.",
    author: ""
  },
  {
    body:
      "Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.",
    author: "Mother Teresa"
  },
  {
    body:
      "Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.",
    author: "Lao Tzu"
  },
  {
    body:
      "People are so constituted that everybody would rather undertake what they see others do, whether they have an aptitude for it or not.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.",
    author: "Honore de Balzac"
  },
  {
    body:
      "The greatest antidote to insecurity and the sense of fear is compassion � it brings one back to the basis of one's inner strength",
    author: "Dalai Lama"
  },
  {
    body:
      "Courage is the discovery that you may not win, and trying when you know you can lose.",
    author: ""
  },
  {
    body:
      "Nature gave us one tongue and two ears so we could hear twice as much as we speak.",
    author: "Epictetus"
  },
  {
    body:
      "No valid plans for the future can be made by those who have no capacity for living now.",
    author: "Alan Watts"
  },
  {
    body:
      "To be thoughtful and kind only takes a few seconds compared to the timeless hurt caused by one rude gesture.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.",
    author: "Mortimer Adler"
  },
  {
    body:
      "Men in general judge more from appearances than from reality. All men have eyes, but few have the gift of penetration.",
    author: "Niccolo Machiavelli"
  },
  {
    body:
      "When you realize how perfect everything is you will tilt your head back and laugh at the sky.",
    author: "Buddha"
  },
  {
    body:
      "Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.",
    author: "Ralph Blum"
  },
  {
    body:
      "Blessed is the person who is too busy to worry in the daytime, and too sleepy to worry at night.",
    author: "Leo Aikman"
  },
  {
    body:
      "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.",
    author: "Charles Darwin"
  },
  {
    body:
      "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
    author: "Buddha"
  },
  {
    body:
      "For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour.",
    author: "Mary Kay Ash"
  },
  {
    body:
      "It is surprising what a man can do when he has to, and how little most men will do when they don't have to.",
    author: "Walter Linn"
  },
  {
    body:
      "To be aware of a single shortcoming in oneself is more useful than to be aware of a thousand in someone else.",
    author: "Tenzin Gyatso"
  },
  {
    body:
      "Nobody made a greater mistake than he who did nothing because he could do only a little.",
    author: "Edmund Burke"
  },
  {
    body:
      "Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Blessed is the person who is too busy to worry in the daytime, and too sleepy to worry at night.",
    author: "Leo Aikman"
  },
  {
    body:
      "Today, give a stranger a smile without waiting for it may be the joy they need to have a great day.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
    author: "Laurence J. Peter"
  },
  {
    body:
      "With realization of ones own potential and self-confidence in ones ability, one can build a better world.",
    author: "Dalai Lama"
  },
  {
    body:
      "I cannot give you the formula for success, but I can give you the formula for failure: which is: Try to please everybody.",
    author: "Herbert Swope"
  },
  {
    body:
      "Constant kindness can accomplish much. As the sun makes ice melt, kindness causes misunderstanding, mistrust, and hostility to evaporate.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "Experience is not what happens to a man. It is what a man does with what happens to him.",
    author: "Aldous Huxley"
  },
  {
    body:
      "The greatest minds are capable of the greatest vices as well as of the greatest virtues.",
    author: "Rene Descartes"
  },
  {
    body:
      "A man should look for what is, and not for what he thinks should be.",
    author: "Albert Einstein"
  },
  {
    body:
      "You can't let praise or criticism get to you. It's a weakness to get caught up in either one.",
    author: "John Wooden"
  },
  {
    body:
      "A hero is no braver than an ordinary man, but he is braver five minutes longer.",
    author: "Ralph Waldo Emerson"
  },
  {
    body:
      "Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict.",
    author: "William Channing"
  },
  {
    body:
      "Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away.",
    author: "Robert Fulghum"
  },
  {
    body:
      "If you have no respect for your own values how can you be worthy of respect from others.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "One must be fond of people and trust them if one is not to make a mess of life.",
    author: "E. M. Forster"
  },
  {
    body:
      "The real measure of your wealth is how much youd be worth if you lost all your money.",
    author: ""
  },
  {
    body:
      "People take different roads seeking fulfilment and happiness. Just because theyre not on your road doesn't mean they've gotten lost.",
    author: "Dalai Lama"
  },
  {
    body:
      "Some people are always grumbling because roses have thorns; I am thankful that thorns have roses.",
    author: "Alphonse Karr"
  },
  {
    body:
      "You are always free to change your mind and choose a different future, or a different past.",
    author: "Richard Bach"
  },
  {
    body:
      "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
    author: "Isaac Asimov"
  },
  {
    body:
      "Genuine love should first be directed at oneself � if we do not love ourselves, how can we love others?",
    author: "Dalai Lama"
  },
  {
    body:
      "To choose what is difficult all ones days, as if it were easy, that is faith.",
    author: "W. H. Auden"
  },
  {
    body:
      "Work while you have the light. You are responsible for the talent that has been entrusted to you.",
    author: "Henri-Frederic Amiel"
  },
  {
    body:
      "Ability is what you're capable of doing. Motivation determines what you do.Attitude determines how well you do it.",
    author: "Lou Holtz"
  },
  {
    body:
      "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "People of mediocre ability sometimes achieve outstanding success because they don't know when to quit. Most men succeed because they are determined to.",
    author: "George Allen"
  },
  {
    body:
      "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
    author: "John Astin"
  },
  {
    body:
      "To be beautiful means to be yourself. You don�t need to be accepted by others. You need to accept yourself.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
    author: "Henry Longfellow"
  },
  {
    body:
      "A life spent making mistakes is not only more honourable, but more useful than a life spent doing nothing.",
    author: "George Bernard Shaw"
  },
  {
    body:
      "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.",
    author: "Thomas Carlyle"
  },
  {
    body:
      "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    author: "Buddha"
  },
  {
    body:
      "I care not so much what I am to others as what I am to myself. I will be rich by myself, and not by borrowing.",
    author: "Michel de Montaigne"
  },
  {
    body:
      "Know that although in the eternal scheme of things you are small, you are also unique and irreplaceable, as are all your fellow humans everywhere in the world.",
    author: "Margaret Laurence"
  },
  {
    body:
      "To do all that one is able to do, is to be a man; to do all that one would like to do, is to be a god.",
    author: "Napoleon Bonaparte"
  },
  {
    body:
      "When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself.",
    author: "Confucius"
  },
  {
    body:
      "If you let go a little, you will have a little peace. If you let go a lot, you will have a lot of peace.",
    author: "Ajahn Chah"
  },
  {
    body:
      "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.",
    author: "Thomas Carlyle"
  },
  {
    body:
      "There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness.",
    author: "Dalai Lama"
  },
  {
    body:
      "The spirit, the will to win, and the will to excel, are the things that endure. These qualities are so much more important than the events that occur.",
    author: "Vincent Lombardi"
  },
  {
    body:
      "Man is not sum of what he has already, but rather the sum of what he does not yet have, of what he could have.",
    author: "Jean-Paul Sartre"
  },
  {
    body:
      "Don't believe what your eyes are telling you. All they show is limitation. Look with your understanding, find out what you already know, and you'll see the way to fly.",
    author: "Richard Bach"
  },
  {
    body:
      "I believe that we are solely responsible for our choices, and we have to accept the consequences of every deed, word, and thought throughout our lifetime.",
    author: "Elisabeth Kubler-Ross"
  },
  {
    body:
      "I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.",
    author: "Og Mandino"
  },
  {
    body:
      "There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness.",
    author: "Dalai Lama"
  },
  {
    body:
      "Wishes can be your best avenue of getting what you want when you turn wishes into action. Action moves your wish to the forefront from thought to reality.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Don't believe what your eyes are telling you. All they show is limitation. Look with your understanding, find out what you already know, and you'll see the way to fly.",
    author: "Richard Bach"
  },
  {
    body:
      "To understand the heart and mind of a person, look not at what he has already achieved, but at what he aspires to do.",
    author: "Kahlil Gibran"
  },
  {
    body:
      "I am of the opinion that my life belongs to the community, and as long as I live it is my privilege to do for it whatever I can.",
    author: "Bernard Shaw"
  },
  {
    body:
      "Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.",
    author: "Albert Einstein"
  },
  {
    body:
      "When you see a good person, think of becoming like him. When you see someone not so good, reflect on your own weak points.",
    author: "Confucius"
  },
  {
    body:
      "When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself.",
    author: "Confucius"
  },
  {
    body:
      "If one is estranged from oneself, then one is estranged from others too. If one is out of touch with oneself, then one cannot touch others.",
    author: "Anne Lindbergh"
  },
  {
    body:
      "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
    author: "Dale Carnegie"
  },
  {
    body:
      "You may say Im a dreamer, but Im not the only one, I hope someday you will join us, and the world will live as one.",
    author: "John Lennon"
  },
  {
    body:
      "Happiness is as a butterfly which, when pursued, is always beyond our grasp, but which if you will sit down quietly, may alight upon you.",
    author: "Nathaniel Hawthorne"
  },
  {
    body:
      "He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye.",
    author: "Buddha"
  },
  {
    body:
      "In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true.",
    author: "Buddha"
  },
  {
    body:
      "You cannot change anything in your life with intention alone, which can become a watered-down, occasional hope that you'll get to tomorrow. Intention without action is useless.",
    author: "Caroline Myss"
  },
  {
    body:
      "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.",
    author: "Thomas Carlyle"
  },
  {
    body:
      "Before you can inspire with emotion, you must be swamped with it yourself. Before you can move their tears, your own must flow. To convince them, you must yourself believe.",
    author: "Winston Churchill"
  },
  {
    body:
      "The greatest discovery of our generation is that human beings can alter their lives by altering their attitudes of mind. As you think, so shall you be.",
    author: "William James"
  },
  {
    body:
      "If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagines, he will meet with a success unexpected in common hours.",
    author: "Henry David Thoreau"
  },
  {
    body:
      "The secret of joy in work is contained in one word � excellence. To know how to do something well is to enjoy it.",
    author: "Pearl Buck"
  },
  {
    body:
      "When you meet someone better than yourself, turn your thoughts to becoming his equal. When you meet someone not as good as you are, look within and examine your own self.",
    author: "Confucius"
  },
  {
    body:
      "Happiness is as a butterfly which, when pursued, is always beyond our grasp, but which if you will sit down quietly, may alight upon you.",
    author: "Nathaniel Hawthorne"
  },
  {
    body:
      "We must overcome the notion that we must be regular. It robs you of the chance to be extraordinary and leads you to the mediocre.",
    author: "Uta Hagen"
  },
  {
    body:
      "Most of our obstacles would melt away if, instead of cowering before them, we should make up our minds to walk boldly through them.",
    author: "Orison Marden"
  },
  {
    body:
      "Everything can be taken from a man but ... the last of the human freedoms � to choose ones attitude in any given set of circumstances, to choose ones own way.",
    author: "Victor Frankl"
  },
  {
    body:
      "It is better to have enough ideas for some of them to be wrong, than to be always right by having no ideas at all.",
    author: "Edward de Bono"
  },
  {
    body:
      "Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "By letting it go it all gets done. The world is won by those who let it go. But when you try and try. The world is beyond the winning.",
    author: "Lao Tzu"
  },
  {
    body:
      "I am like a falling star who has finally found her place next to another in a lovely constellation, where we will sparkle in the heavens forever.",
    author: "Amy Tan"
  },
  {
    body:
      "Not every difficult and dangerous thing is suitable for training, but only that which is conducive to success in achieving the object of our effort.",
    author: "Epictetus"
  },
  {
    body:
      "We are not animals. We are not a product of what has happened to us in our past. We have the power of choice.",
    author: "Stephen Covey"
  },
  {
    body:
      "The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you're being self-indulgent.",
    author: "Paul Graham"
  },
  {
    body:
      "Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    author: "Buddha"
  },
  {
    body:
      "A lot of times people look at the negative side of what they feel they can't do. I always look on the positive side of what I can do.",
    author: "Chuck Norris"
  },
  {
    body:
      "Without passion man is a mere latent force and possibility, like the flint which awaits the shock of the iron before it can give forth its spark.",
    author: "Amiel"
  },
  {
    body:
      "Love at first sight is easy to understand; its when two people have been looking at each other for a lifetime that it becomes a miracle.",
    author: "Amy Bloom"
  },
  {
    body:
      "With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.",
    author: "Keshavan Nair"
  },
  {
    body:
      "The right way is not always the popular and easy way. Standing for right when it is unpopular is a true test of moral character.",
    author: "Margaret Smith"
  },
  {
    body:
      "I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence.",
    author: "Frederick Douglass"
  },
  {
    body:
      "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
    author: "Helen Keller"
  },
  {
    body:
      "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    author: "Buddha"
  },
  {
    body:
      "When you arise in the morning, think of what a precious privilege it is to be alive � to breathe, to think, to enjoy, to love.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved.",
    author: "Helen Keller"
  },
  {
    body:
      "Although there may be tragedy in your life, there's always a possibility to triumph. It doesn't matter who you are, where you come from. The ability to triumph begins with you. Always.",
    author: "Oprah Winfrey"
  },
  {
    body:
      "You must train your intuition � you must trust the small voice inside you which tells you exactly what to say, what to decide.",
    author: "Ingrid Bergman"
  },
  {
    body:
      "If you let go a little, you will have a little peace. If you let go a lot, you will have a lot of peace.",
    author: "Ajahn Chah"
  },
  {
    body:
      "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "Let us resolve to be masters, not the victims, of our history, controlling our own destiny without giving way to blind suspicions and emotions.",
    author: "John Kennedy"
  },
  {
    body:
      "The greatest discovery of our generation is that human beings can alter their lives by altering their attitudes of mind. As you think, so shall you be.",
    author: "William James"
  },
  {
    body:
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    author: "Marie Curie"
  },
  {
    body:
      "Parents can only give good advice or put them on the right paths, but the final forming of a persons character lies in their own hands.",
    author: "Anne Frank"
  },
  {
    body:
      "Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
    author: "Dale Carnegie"
  },
  {
    body:
      "Let us resolve to be masters, not the victims, of our history, controlling our own destiny without giving way to blind suspicions and emotions.",
    author: "John Kennedy"
  },
  {
    body:
      "When you meet someone better than yourself, turn your thoughts to becoming his equal. When you meet someone not as good as you are, look within and examine your own self.",
    author: "Confucius"
  },
  {
    body:
      "If you break your neck, if you have nothing to eat, if your house is on fire, then you got a problem. Everything else is inconvenience.",
    author: "Robert Fulghum"
  },
  {
    body:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.",
    author: "Albert Einstein"
  },
  {
    body:
      "There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness.",
    author: "Dalai Lama"
  },
  {
    body:
      "My advice to you is not to inquire why or whither, but just enjoy your ice cream while its on your plate � that's my philosophy.",
    author: "Thornton Wilder"
  },
  {
    body:
      "Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.",
    author: "John Dewey"
  },
  {
    body:
      "He who conquers others is strong; He who conquers himself is mighty.",
    author: "Lao Tzu"
  },
  {
    body: "Smile, breathe, and go slowly.",
    author: "Thich Nhat Hanh"
  },
  {
    body: "Nothing diminishes anxiety faster than action.",
    author: "Walter Anderson"
  },
  {
    body: "The secret of success is constancy to purpose.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "Anything you really want, you can attain, if you really go after it.",
    author: "Wayne Dyer"
  },
  {
    body: "Arriving at one point is the starting point to another.",
    author: "John Dewey"
  },
  {
    body:
      "The foolish man seeks happiness in the distance, the wise grows it under his feet.",
    author: "James Oppenheim"
  },
  {
    body: "Don't be afraid to go out on a limb. That's where the fruit is.",
    author: "H. Jackson Browne"
  },
  {
    body: "When the solution is simple, God is answering.",
    author: "Albert Einstein"
  },
  {
    body: "Never put off till tomorrow what you can do today.",
    author: "Thomas Jefferson"
  },
  {
    body:
      "Do not expect the world to look bright, if you habitually wear gray-brown glasses.",
    author: "Tomas Eliot"
  },
  {
    body:
      "The greatest part of our happiness depends on our dispositions, not our circumstances.",
    author: "Martha Washington"
  },
  {
    body: "It is in your moments of decision that your destiny is shaped.",
    author: "Tony Robbins"
  },
  {
    body:
      "It is only possible to live happily ever after on a day to day basis.",
    author: "Margaret Bonnano"
  },
  {
    body:
      "Being right is highly overrated. Even a stopped clock is right twice a day.",
    author: ""
  },
  {
    body:
      "Love doesn't make the world go round, love is what makes the ride worthwhile.",
    author: "Elizabeth Browning"
  },
  {
    body:
      "Don't judge each day by the harvest you reap but by the seeds you plant.",
    author: "Robert Stevenson"
  },
  {
    body: "One fails forward toward success.",
    author: "Charles Kettering"
  },
  {
    body: "A man sees in the world what he carries in his heart.",
    author: "Goethe"
  },
  {
    body: "If you surrender to the wind, you can ride it.",
    author: "Toni Morrison"
  },
  {
    body:
      "Action may not always bring happiness, but there is no happiness without action.",
    author: "Benjamin Disraeli"
  },
  {
    body: "Love is the flower you've got to let grow.",
    author: "John Lennon"
  },
  {
    body:
      "Believe deep down in your heart that you're destined to do great things.",
    author: "Joe Paterno"
  },
  {
    body: "Sooner or later, those who win are those who think they can.",
    author: "Richard Bach"
  },
  {
    body: "The only limit to your impact is your imagination and commitment.",
    author: "Tony Robbins"
  },
  {
    body: "Silence is the true friend that never betrays.",
    author: "Confucius"
  },
  {
    body: "You are special, you are unique, you are the best!",
    author: "Cathy Pulsifer"
  },
  {
    body:
      "Four steps to achievement: Plan purposefully. Prepare prayerfully. Proceed positively. Pursue persistently.",
    author: "William Arthur Ward"
  },
  {
    body: "It is in your moments of decision that your destiny is shaped.",
    author: "Tony Robbins"
  },
  {
    body: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra"
  },
  {
    body: "A short saying often contains much wisdom.",
    author: "Sophocles"
  },
  {
    body: "I'm not afraid of storms, for Im learning how to sail my ship.",
    author: "Louisa Alcott"
  },
  {
    body: "To know oneself is to study oneself in action with another person.",
    author: "Bruce Lee"
  },
  {
    body:
      "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    author: "Arthur Conan Doyle"
  },
  {
    body: "We must not allow ourselves to become like the system we oppose.",
    author: "Bishop Desmond Tutu"
  },
  {
    body: "Smile, breathe and go slowly.",
    author: "Thich Nhat Hanh"
  },
  {
    body: "The day you decide to do it is your lucky day.",
    author: "Japanese proverb"
  },
  {
    body: "To want to be what one can be is purpose in life.",
    author: "Cynthia Ozick"
  },
  {
    body: "Reality is merely an illusion, albeit a very persistent one.",
    author: "Albert Einstein"
  },
  {
    body: "When you come to the end of your rope, tie a knot and hang on.",
    author: "Franklin Roosevelt"
  },
  {
    body: "Always be mindful of the kindness and not the faults of others.",
    author: "Buddha"
  },
  {
    body:
      "Everything that irritates us about others can lead us to an understanding of ourselves.",
    author: "Carl Jung"
  },
  {
    body: "When fate hands us a lemon, lets try to make lemonade.",
    author: "Dale Carnegie"
  },
  {
    body:
      "The weak can never forgive. Forgiveness is the attribute of the strong.",
    author: "Mohandas Gandhi"
  },
  {
    body: "A man is great by deeds, not by birth.",
    author: "Chanakya"
  },
  {
    body:
      "Success is getting what you want. Happiness is wanting what you get.",
    author: "Dale Carnegie"
  },
  {
    body: "I believe that every person is born with talent.",
    author: "Maya Angelou"
  },
  {
    body: "Put your future in good hands � your own.",
    author: ""
  },
  {
    body: "Don't be pushed by your problems; be led by your dreams.",
    author: ""
  },
  {
    body:
      "You are important enough to ask and you are blessed enough to receive back.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Truth isn't all about what actually happens but more about how what has happened is interpreted.",
    author: "Byron Pulsifer"
  },
  {
    body: "The cautious seldom err.",
    author: "Confucius"
  },
  {
    body: "No garden is without its weeds.",
    author: "Thomas Fuller"
  },
  {
    body: "Who looks outside, dreams; who looks inside, awakes.",
    author: "Carl Jung"
  },
  {
    body: "A good rest is half the work.",
    author: ""
  },
  {
    body:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Stevenson"
  },
  {
    body: "Small opportunities are often the beginning of great enterprises.",
    author: "Demosthenes"
  },
  {
    body: "You can do what's reasonable or you can decide what's possible.",
    author: ""
  },
  {
    body:
      "To be tested is good. The challenged life may be the best therapist.",
    author: "Gail Sheehy"
  },
  {
    body:
      "If you think you can, you can. And if you think you can't, you're right.",
    author: "Henry Ford"
  },
  {
    body: "There are no failures. Just experiences and your reactions to them.",
    author: "Tom Krause"
  },
  {
    body: "I destroy my enemies when I make them my friends.",
    author: "Abraham Lincoln"
  },
  {
    body: "Do something wonderful, people may imitate it.",
    author: "Albert Schweitzer"
  },
  {
    body: "Fears are nothing more than a state of mind.",
    author: "Napoleon Hill"
  },
  {
    body: "Take heed: you do not find what you do not seek.",
    author: "English proverb"
  },
  {
    body:
      "Happiness is the reward we get for living to the highest right we know.",
    author: "Richard Bach"
  },
  {
    body: "Be slow of tongue and quick of eye.",
    author: "Cervantes"
  },
  {
    body: "Freedom is not worth having if it does not connote freedom to err.",
    author: "Mohandas Gandhi"
  },
  {
    body: "Nothing diminishes anxiety faster than action.",
    author: "Walter Anderson"
  },
  {
    body:
      "I have always thought the actions of men the best interpreters of their thoughts.",
    author: "John Locke"
  },
  {
    body:
      "If one is lucky, a solitary fantasy can totally transform one million realities.",
    author: "Maya Angelou"
  },
  {
    body: "He who obtains has little. He who scatters has much.",
    author: "Lao Tzu"
  },
  {
    body: "I'm not afraid of storms, for Im learning how to sail my ship.",
    author: "Louisa Alcott"
  },
  {
    body: "Be great in act, as you have been in thought.",
    author: "William Shakespeare"
  },
  {
    body: "The cause is hidden. The effect is visible to all.",
    author: "Ovid"
  },
  {
    body: "He who obtains has little. He who scatters has much.",
    author: "Richard Braunstein"
  },
  {
    body:
      "To dare is to lose ones footing momentarily. To not dare is to lose oneself.",
    author: "Soren Kierkegaard"
  },
  {
    body: "No day in which you learn something is a complete loss.",
    author: "David Eddings"
  },
  {
    body: "When the solution is simple, God is answering.",
    author: "Albert Einstein"
  },
  {
    body:
      "Peace cannot be kept by force. It can only be achieved by understanding.",
    author: "Albert Einstein"
  },
  {
    body: "Real success is finding your lifework in the work that you love.",
    author: "David McCullough"
  },
  {
    body: "Better than a thousand hollow words, is one word that brings peace.",
    author: "Buddha"
  },
  {
    body: "All the flowers of all the tomorrows are in the seeds of today.",
    author: ""
  },
  {
    body: "Some pursue happiness, others create it.",
    author: ""
  },
  {
    body: "Your sacred space is where you can find yourself again and again.",
    author: "Joseph Campbell"
  },
  {
    body: "There never was a good knife made of bad steel.",
    author: "Benjamin Franklin"
  },
  {
    body: "He who talks more is sooner exhausted.",
    author: "Lao Tzu"
  },
  {
    body: "As you think, so shall you become.",
    author: "Bruce Lee"
  },
  {
    body: "Do not turn back when you are just at the goal.",
    author: "Publilius Syrus"
  },
  {
    body: "He who obtains has little. He who scatters has much.",
    author: "Richard Braunstein"
  },
  {
    body: "In seed time learn, in harvest teach, in winter enjoy.",
    author: "William Blake"
  },
  {
    body: "A short saying often contains much wisdom.",
    author: "Sophocles"
  },
  {
    body:
      "Happiness does not come from having much, but from being attached to little.",
    author: "Cheng Yen"
  },
  {
    body: "Every gift from a friend is a wish for your happiness.",
    author: "Richard Bach"
  },
  {
    body: "Go put your creed into the deed. Nor speak with double tongue.",
    author: "Ralph Emerson"
  },
  {
    body:
      "In the end we retain from our studies only that which we practically apply.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "The wisest men follow their own direction.",
    author: "Euripides"
  },
  {
    body:
      "Hope arouses, as nothing else can arouse, a passion for the possible.",
    author: "William Sloane Coffin"
  },
  {
    body: "Myths which are believed in tend to become true.",
    author: "George Orwell"
  },
  {
    body: "Who sows virtue reaps honour.",
    author: "Leonardo da Vinci"
  },
  {
    body:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    body: "Everything has beauty, but not everyone sees it.",
    author: "Confucius"
  },
  {
    body: "Courage is going from failure to failure without losing enthusiasm.",
    author: "Winston Churchill"
  },
  {
    body: "He who talks more is sooner exhausted.",
    author: "Lao Tzu"
  },
  {
    body: "Nothing ever goes away until it has taught us what we need to know.",
    author: "Pema Chodron"
  },
  {
    body: "Smile, breathe, and go slowly.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "In separateness lies the world's great misery, in compassion lies the world's true strength.",
    author: "Buddha"
  },
  {
    body: "Small opportunities are often the beginning of great enterprises.",
    author: "Demosthenes"
  },
  {
    body:
      "If you don't know where you are going, you will probably end up somewhere else.",
    author: "Lawrence Peter"
  },
  {
    body: "When you learn, teach. When you get, give.",
    author: "Maya Angelou"
  },
  {
    body: "We choose our destiny in the way we treat others.",
    author: "Wit"
  },
  {
    body:
      "The universe is transformation; our life is what our thoughts make it.",
    author: "Marcus Aurelius"
  },
  {
    body: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "Smile, breathe, and go slowly.",
    author: "Thich Nhat Hanh"
  },
  {
    body: "Science is organized knowledge. Wisdom is organized life.",
    author: "Immanuel Kant"
  },
  {
    body: "Only when we are no longer afraid do we begin to live.",
    author: "Dorothy Thompson"
  },
  {
    body: "If you smile when no one else is around, you really mean it.",
    author: "Andy Rooney"
  },
  {
    body: "Life is a process. We are a process. The universe is a process.",
    author: "Anne Schaef"
  },
  {
    body:
      "Love is the only force capable of transforming an enemy into friend.",
    author: "Martin Luther King, Jr."
  },
  {
    body: "Good luck is another name for tenacity of purpose.",
    author: "Ralph Emerson"
  },
  {
    body: "Well done is better than well said.",
    author: "Benjamin Franklin"
  },
  {
    body: "Our lives are a sum total of the choices we have made.",
    author: "Wayne Dyer"
  },
  {
    body: "In all chaos there is a cosmos, in all disorder a secret order.",
    author: "Carl Jung"
  },
  {
    body: "A man is not where he lives but where he loves.",
    author: ""
  },
  {
    body: "You can do what's reasonable or you can decide what's possible.",
    author: ""
  },
  {
    body: "The greatest remedy for anger is delay.",
    author: "Seneca"
  },
  {
    body: "The price of greatness is responsibility.",
    author: "Winston Churchill"
  },
  {
    body: "Decision is a risk rooted in the courage of being free.",
    author: "Paul Tillich"
  },
  {
    body: "The day is already blessed, find peace within it.",
    author: ""
  },
  {
    body:
      "You might well remember that nothing can bring you success but yourself.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Your mind will answer most questions if you learn to relax and wait for the answer.",
    author: "William Burroughs"
  },
  {
    body: "All things change; nothing perishes.",
    author: "Ovid"
  },
  {
    body: "You can do it if you believe you can!",
    author: "Napoleon Hill"
  },
  {
    body: "God has given you one face, and you make yourself another.",
    author: "William Shakespeare"
  },
  {
    body:
      "Being right is highly overrated. Even a stopped clock is right twice a day.",
    author: ""
  },
  {
    body: "The world doesn�t happen to you it happens from you.",
    author: ""
  },
  {
    body:
      "It is only possible to live happily ever after on a day to day basis.",
    author: "Margaret Bonnano"
  },
  {
    body:
      "We cannot solve our problems with the same thinking we used when we created them.",
    author: "Albert Einstein"
  },
  {
    body: "More powerful than the will to win is the courage to begin.",
    author: ""
  },
  {
    body: "Wisdom is the supreme part of happiness.",
    author: "Sophocles"
  },
  {
    body: "Who looks outside, dreams; who looks inside, awakes.",
    author: "Carl Jung"
  },
  {
    body: "Learning is finding out what you already know.",
    author: "Richard Bach"
  },
  {
    body:
      "Don't judge each day by the harvest you reap but by the seeds you plant.",
    author: "Robert Stevenson"
  },
  {
    body: "We learn what we have said from those who listen to our speaking.",
    author: "Kenneth Patton"
  },
  {
    body:
      "Efficiency is doing things right; effectiveness is doing the right things.",
    author: "Peter Drucker"
  },
  {
    body:
      "Saying thank you is more than good manners. It is good spirituality.",
    author: "Alfred Painter"
  },
  {
    body: "Silence is a source of great strength.",
    author: "Lao Tzu"
  },
  {
    body: "Joy is the best makeup.",
    author: "Anne Lamott"
  },
  {
    body: "If you cannot be silent be brilliant and thoughtful.",
    author: "Byron Pulsifer"
  },
  {
    body: "There is no great genius without some touch of madness.",
    author: "Seneca"
  },
  {
    body:
      "The biggest adventure you can ever take is to live the life of your dreams.",
    author: "Oprah Winfrey"
  },
  {
    body: "A jug fills drop by drop.",
    author: "Buddha"
  },
  {
    body: "You must welcome change as the rule but not as your ruler.",
    author: "Denis Waitley"
  },
  {
    body:
      "Everything that irritates us about others can lead us to an understanding of ourselves.",
    author: "Carl Jung"
  },
  {
    body: "Once you choose hope, anythings possible.",
    author: "Christopher Reeve"
  },
  {
    body: "Talk doesn't cook rice.",
    author: "Chinese proverb"
  },
  {
    body:
      "In separateness lies the world's great misery, in compassion lies the world's true strength.",
    author: "Buddha"
  },
  {
    body: "The only real valuable thing is intuition.",
    author: "Albert Einstein"
  },
  {
    body:
      "Accept challenges, so that you may feel the exhilaration of victory.",
    author: "George Patton"
  },
  {
    body:
      "Until you make peace with who you are, you'll never be content with what you have.",
    author: "Doris Mortman"
  },
  {
    body:
      "Never apologize for showing feelings. When you do so, you apologize for the truth.",
    author: "Benjamin Disraeli"
  },
  {
    body: "We aim above the mark to hit the mark.",
    author: "Ralph Emerson"
  },
  {
    body: "Being angry never solves anything.",
    author: "Catherine Pulsifer"
  },
  {
    body: "Every problem has a gift for you in its hands.",
    author: "Richard Bach"
  },
  {
    body: "All men who have achieved great things have been great dreamers.",
    author: "Orison Marden"
  },
  {
    body:
      "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.",
    author: "Arthur Conan Doyle"
  },
  {
    body: "Where all think alike, no one thinks very much.",
    author: "Walter Lippmann"
  },
  {
    body:
      "Everything that exists is in a manner the seed of that which will be.",
    author: "Marcus Aurelius"
  },
  {
    body: "Be less curious about people and more curious about ideas.",
    author: "Marie Curie"
  },
  {
    body: "The heart has eyes which the brain knows nothing of.",
    author: "Charles Perkhurst"
  },
  {
    body: "Don't be pushed by your problems; be led by your dreams.",
    author: ""
  },
  {
    body: "I'm not afraid of storms, for Im learning how to sail my ship.",
    author: "Louisa Alcott"
  },
  {
    body: "A short saying often contains much wisdom.",
    author: "Sophocles"
  },
  {
    body:
      "Everything is perfect in the universe � even your desire to improve it.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
    author: "Wayne Dyer"
  },
  {
    body: "Think how hard physics would be if particles could think.",
    author: "Murray Gell-Mann"
  },
  {
    body: "Only those who dare to fail greatly can ever achieve greatly.",
    author: "Robert Kennedy"
  },
  {
    body:
      "Lose an hour in the morning, and you will spend all day looking for it.",
    author: "Richard Whately"
  },
  {
    body:
      "Mistakes are always forgivable, if one has the courage to admit them.",
    author: "Bruce Lee"
  },
  {
    body:
      "Go to your bosom: Knock there, and ask your heart what it doth know.",
    author: "William Shakespeare"
  },
  {
    body:
      "If you think you can, you can. And if you think you can't, you're right.",
    author: "Henry Ford"
  },
  {
    body:
      "Through perseverance many people win success out of what seemed destined to be certain failure.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "Happiness mainly comes from our own attitude, rather than from external factors.",
    author: "Dalai Lama"
  },
  {
    body:
      "If you do not change direction, you may end up where you are heading.",
    author: "Lao Tzu"
  },
  {
    body: "What we see is mainly what we look for.",
    author: ""
  },
  {
    body:
      "If you correct your mind, the rest of your life will fall into place.",
    author: "Lao Tzu"
  },
  {
    body: "Stay away from what might have been and look at what will be.",
    author: "Marsha Petrie Sue"
  },
  {
    body: "When the solution is simple, God is answering.",
    author: "Albert Einstein"
  },
  {
    body: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    body:
      "Successful people ask better questions, and as a result, they get better answers.",
    author: "Tony Robbins"
  },
  {
    body: "There never was a good knife made of bad steel.",
    author: "Benjamin Franklin"
  },
  {
    body: "Better be ignorant of a matter than half know it.",
    author: "Publilius Syrus"
  },
  {
    body:
      "Passion creates the desire for more and action fuelled by passion creates a future.",
    author: "Byron Pulsifer"
  },
  {
    body: "Most people are about as happy as they make up their minds to be",
    author: "Abraham Lincoln"
  },
  {
    body: "Every new day is another chance to change your life.",
    author: ""
  },
  {
    body: "Do good by stealth, and blush to find it fame.",
    author: "Alexander Pope"
  },
  {
    body: "When you doubt your power, you give power to your doubt.",
    author: "Honore de Balzac"
  },
  {
    body:
      "I always wanted to be somebody, but I should have been more specific.",
    author: "Lily Tomlin"
  },
  {
    body:
      "Opportunity often comes disguised in the form of misfortune, or temporary defeat.",
    author: "Napoleon Hill"
  },
  {
    body: "Pick battles big enough to matter, small enough to win.",
    author: "Jonathan Kozol"
  },
  {
    body: "If we did the things we are capable of, we would astound ourselves.",
    author: "Thomas Edison"
  },
  {
    body: "Don't talk about what you have done or what you are going to do.",
    author: "Thomas Jefferson"
  },
  {
    body: "The way is not in the sky. The way is in the heart.",
    author: "Buddha"
  },
  {
    body: "Most powerful is he who has himself in his own power.",
    author: "Seneca"
  },
  {
    body: "Those who are free of resentful thoughts surely find peace.",
    author: "Buddha"
  },
  {
    body:
      "We don't stop playing because we grow old; we grow old because we stop playing.",
    author: "Bernard Shaw"
  },
  {
    body:
      "It is not so important to know everything as to appreciate what we learn.",
    author: "Hannah More"
  },
  {
    body: "Experience can only be gained by doing not by thinking or dreaming.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Always tell the truth. That way, you don't have to remember what you said.",
    author: "Mark Twain"
  },
  {
    body: "From wonder into wonder existence opens.",
    author: "Lao Tzu"
  },
  {
    body: "An ant on the move does more than a dozing ox",
    author: "Lao Tzu"
  },
  {
    body: "To avoid criticism, do nothing, say nothing, be nothing.",
    author: "Elbert Hubbard"
  },
  {
    body:
      "Through perseverance many people win success out of what seemed destined to be certain failure.",
    author: "Benjamin Disraeli"
  },
  {
    body: "He who fears being conquered is sure of defeat.",
    author: "Napoleon Bonaparte"
  },
  {
    body: "Life is what happens while you are making other plans.",
    author: "John Lennon"
  },
  {
    body: "Those who are free of resentful thoughts surely find peace.",
    author: "Buddha"
  },
  {
    body: "Good luck is another name for tenacity of purpose.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Doing what you love is the cornerstone of having abundance in your life.",
    author: "Wayne Dyer"
  },
  {
    body: "Nothing diminishes anxiety faster than action.",
    author: "Walter Anderson"
  },
  {
    body:
      "Be faithful in small things because it is in them that your strength lies.",
    author: "Mother Teresa"
  },
  {
    body: "Kindness is the golden chain by which society is bound together.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "You need chaos in your soul to give birth to a dancing star.",
    author: "Nietzsche"
  },
  {
    body: "I have often regretted my speech, never my silence.",
    author: "Publilius Syrus"
  },
  {
    body: "It can't be spring if your heart is filled with past failures.",
    author: "Byron Pulsifer"
  },
  {
    body: "If you cannot be silent be brilliant and thoughtful.",
    author: "Byron Pulsifer"
  },
  {
    body: "If you wish to be a writer, write.",
    author: "Epictetus"
  },
  {
    body:
      "No yesterdays are ever wasted for those who give themselves to today.",
    author: "Brendan Francis"
  },
  {
    body:
      "The truth is always exciting. Speak it, then. Life is dull without it.",
    author: "Pearl Buck"
  },
  {
    body: "There are no failures � just experiences and your reactions to them.",
    author: "Tom Krause"
  },
  {
    body: "Action is the foundational key to all success.",
    author: "Pablo Picasso"
  },
  {
    body:
      "What is necessary to change a person is to change his awareness of himself.",
    author: "Abraham Maslow"
  },
  {
    body: "Silence is a fence around wisdom.",
    author: "German proverb"
  },
  {
    body:
      "If you spend too much time thinking about a thing, you'll never get it done.",
    author: "Bruce Lee"
  },
  {
    body:
      "Positive thinking will let you do everything better than negative thinking will.",
    author: "Zig Ziglar"
  },
  {
    body: "Think how hard physics would be if particles could think.",
    author: "Murray Gell-Mann"
  },
  {
    body: "We shall never know all the good that a simple smile can do.",
    author: "Mother Teresa"
  },
  {
    body: "Nature takes away any faculty that is not used.",
    author: "William R. Inge"
  },
  {
    body:
      "Nothing is so strong as gentleness. Nothing is so gentle as real strength.",
    author: "Frances de Sales"
  },
  {
    body: "Fears are nothing more than a state of mind.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Imagination is not a talent of some men but is the health of every man.",
    author: "Ralph Waldo Emerson"
  },
  {
    body: "We must embrace pain and burn it as fuel for our journey.",
    author: "Kenji Miyazawa"
  },
  {
    body:
      "It has never been my object to record my dreams, just to realize them.",
    author: "Man Ray"
  },
  {
    body: "Don't wait for people to be friendly. Show them how.",
    author: ""
  },
  {
    body:
      "Practice yourself, for heavens sake in little things, and then proceed to greater.",
    author: "Epictetus"
  },
  {
    body:
      "Your outlook on life is a direct reflection on how much you like yourself.",
    author: "Lululemon"
  },
  {
    body: "Better to have loved and lost, than to have never loved at all.",
    author: "St. Augustine"
  },
  {
    body: "A man is not where he lives but where he loves.",
    author: ""
  },
  {
    body: "From error to error one discovers the entire truth.",
    author: "Sigmund Freud"
  },
  {
    body: "I believe that every person is born with talent.",
    author: "Maya Angelou"
  },
  {
    body:
      "Three things cannot be long hidden: the sun, the moon, and the truth.",
    author: "Buddha"
  },
  {
    body: "Every day may not be good, but there's something good in every day.",
    author: ""
  },
  {
    body: "Well begun is half done.",
    author: "Aristotle"
  },
  {
    body:
      "In separateness lies the world's great misery, in compassion lies the world's true strength.",
    author: "Buddha"
  },
  {
    body: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt"
  },
  {
    body: "Whatever happens, take responsibility.",
    author: "Tony Robbins"
  },
  {
    body:
      "A gem cannot be polished without friction, nor a man perfected without trials.",
    author: "Chinese proverb"
  },
  {
    body: "No is easier to do. Yes is easier to say.",
    author: "Jason Fried"
  },
  {
    body:
      "Nothing is so strong as gentleness. Nothing is so gentle as real strength.",
    author: "Frances de Sales"
  },
  {
    body: "Life is a process. We are a process. The universe is a process.",
    author: "Anne Schaef"
  },
  {
    body: "Don't wait. The time will never be just right.",
    author: "Napoleon Hill"
  },
  {
    body: "Be as you wish to seem.",
    author: "Socrates"
  },
  {
    body: "Knowing is not enough; we must apply!",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "Science is organized knowledge. Wisdom is organized life.",
    author: "Immanuel Kant"
  },
  {
    body: "The path to success is to take massive, determined action.",
    author: "Tony Robbins"
  },
  {
    body: "Freedom is not worth having if it does not connote freedom to err.",
    author: "Mohandas Gandhi"
  },
  {
    body: "Each day can be one of triumph if you keep up your interests.",
    author: "George Matthew Adams"
  },
  {
    body:
      "The place to improve the world is first in one's own heart and head and hands.",
    author: "Robert M. Pirsig"
  },
  {
    body:
      "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.",
    author: "Winston Churchill"
  },
  {
    body:
      "Winners have simply formed the habit of doing things losers don't like to do.",
    author: "Albert Gray"
  },
  {
    body: "Nature is a mutable cloud which is always and never the same.",
    author: "Ralph Emerson"
  },
  {
    body: "Life is what you make of it. Always has been, always will be.",
    author: "Grandma Moses"
  },
  {
    body:
      "If you do not change direction, you may end up where you are heading.",
    author: "Lao Tzu"
  },
  {
    body: "Worry often gives a small thing a big shadow.",
    author: "Swedish proverb"
  },
  {
    body:
      "I want you to be everything that's you, deep at the center of your being.",
    author: "Confucius"
  },
  {
    body: "We know what we are, but know not what we may be.",
    author: "William Shakespeare"
  },
  {
    body: "Do not turn back when you are just at the goal.",
    author: "Publilius Syrus"
  },
  {
    body: "Freedom is what you do with what's been done to you.",
    author: "Jean-Paul Sartre"
  },
  {
    body:
      "Life is so constructed that an event does not, cannot, will not, match the expectation.",
    author: "Charlotte Bronte"
  },
  {
    body: "Pick battles big enough to matter, small enough to win.",
    author: "Jonathan Kozol"
  },
  {
    body: "It is never too late to be what you might have been.",
    author: "George Eliot"
  },
  {
    body: "The truth which has made us free will in the end make us glad also.",
    author: "Felix Adler"
  },
  {
    body: "The heart has its reasons which reason knows not of.",
    author: "Blaise Pascal"
  },
  {
    body: "To succeed, we must first believe that we can.",
    author: "Michael Korda"
  },
  {
    body: "He who has imagination without learning has wings but no feet.",
    author: "Joseph Joubert"
  },
  {
    body: "Never ignore a gut feeling, but never believe that it's enough.",
    author: "Robert Heller"
  },
  {
    body: "Everything in life is luck.",
    author: "Donald Trump"
  },
  {
    body: "A goal without a plan is just a wish.",
    author: "Larry Elder"
  },
  {
    body: "Our lives are a sum total of the choices we have made.",
    author: "Wayne Dyer"
  },
  {
    body: "Watch the little things; a small leak will sink a great ship.",
    author: "Benjamin Franklin"
  },
  {
    body: "When performance exceeds ambition, the overlap is called success.",
    author: "Cullen Hightower"
  },
  {
    body: "Work out your own salvation. Do not depend on others.",
    author: "Buddha"
  },
  {
    body: "Everyone smiles in the same language.",
    author: ""
  },
  {
    body: "We do what we do because we believe.",
    author: ""
  },
  {
    body: "Whoso loves, believes the impossible.",
    author: "Elizabeth Browning"
  },
  {
    body: "Fate is in your hands and no one elses",
    author: "Byron Pulsifer"
  },
  {
    body: "It isn't where you come from, it's where you're going that counts.",
    author: "Ella Fitzgerald"
  },
  {
    body: "Reality is merely an illusion, albeit a very persistent one.",
    author: "Albert Einstein"
  },
  {
    body:
      "Your worst enemy cannot harm you as much as your own unguarded thoughts.",
    author: "Buddha"
  },
  {
    body: "The greatest obstacle to connecting with our joy is resentment.",
    author: "Pema Chodron"
  },
  {
    body: "Freedom is what you do with what's been done to you.",
    author: "Jean-Paul Sartre"
  },
  {
    body: "Mountains cannot be surmounted except by winding paths.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "I believe that every person is born with talent.",
    author: "Maya Angelou"
  },
  {
    body: "When anger use your energy to do something productive.",
    author: "C. Pulsifer"
  },
  {
    body: "Growth itself contains the germ of happiness.",
    author: "Pearl Buck"
  },
  {
    body: "Victory belongs to the most persevering.",
    author: "Napoleon Bonaparte"
  },
  {
    body: "We are all something, but none of us are everything.",
    author: "Blaise Pascal"
  },
  {
    body: "To want to be what one can be is purpose in life.",
    author: "Cynthia Ozick"
  },
  {
    body: "Intuition will tell the thinking mind where to look next.",
    author: "Jonas Salk"
  },
  {
    body: "Always be mindful of the kindness and not the faults of others.",
    author: "Buddha"
  },
  {
    body:
      "No yesterdays are ever wasted for those who give themselves to today.",
    author: "Brendan Francis"
  },
  {
    body: "Do not turn back when you are just at the goal.",
    author: "Publilius Syrus"
  },
  {
    body:
      "Reviewing what you have learned and learning anew, you are fit to be a teacher.",
    author: "Confucius"
  },
  {
    body: "Where all think alike, no one thinks very much.",
    author: "Walter Lippmann"
  },
  {
    body: "Action is the foundational key to all success.",
    author: "Pablo Picasso"
  },
  {
    body:
      "If you can't explain it simply, you don't understand it well enough.",
    author: "Albert Einstein"
  },
  {
    body: "The truth which has made us free will in the end make us glad also.",
    author: "Felix Adler"
  },
  {
    body: "Sooner or later, those who win are those who think they can.",
    author: "Richard Bach"
  },
  {
    body:
      "He who lives in harmony with himself lives in harmony with the world.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "Begin at once to live and count each separate day as a separate life.",
    author: "Seneca"
  },
  {
    body: "He who knows himself is enlightened.",
    author: "Lao Tzu"
  },
  {
    body: "Growth itself contains the germ of happiness.",
    author: "Pearl Buck"
  },
  {
    body: "Kind words do not cost much. Yet they accomplish much.",
    author: "Blaise Pascal"
  },
  {
    body: "Think as a wise man but communicate in the language of the people.",
    author: "William Yeats"
  },
  {
    body:
      "He who lives in harmony with himself lives in harmony with the universe.",
    author: "Marcus Aurelius"
  },
  {
    body: "Kind words will unlock an iron door.",
    author: "Turkish proverb"
  },
  {
    body:
      "Build a better mousetrap and the world will beat a path to your door.",
    author: "Ralph Emerson"
  },
  {
    body: "As our case is new, we must think and act anew.",
    author: "Abraham Lincoln"
  },
  {
    body: "Fear is a darkroom where negatives develop.",
    author: "Usman Asif"
  },
  {
    body:
      "Every action of our lives touches on some chord that will vibrate in eternity.",
    author: "Edwin Chapin"
  },
  {
    body: "If you can't feed a hundred people, then feed just one.",
    author: "Mother Teresa"
  },
  {
    body: "When anger use your energy to do something productive.",
    author: "C. Pulsifer"
  },
  {
    body:
      "In three words I can sum up everything Ive learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    body: "From error to error one discovers the entire truth.",
    author: "Sigmund Freud"
  },
  {
    body: "The day you decide to do it is your lucky day.",
    author: "Japanese proverb"
  },
  {
    body:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    body:
      "Don't let today's disappointments cast a shadow on tomorrow's dreams.",
    author: ""
  },
  {
    body: "Silence is a true friend who never betrays.",
    author: "Confucius"
  },
  {
    body: "As our case is new, we must think and act anew.",
    author: "Abraham Lincoln"
  },
  {
    body: "Great talent finds happiness in execution.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "Keep yourself to the sunshine and you cannot see the shadow.",
    author: "Helen Keller"
  },
  {
    body: "Who sows virtue reaps honour.",
    author: "Leonardo da Vinci"
  },
  {
    body:
      "If you don't know where you are going, you will probably end up somewhere else.",
    author: "Lawrence Peter"
  },
  {
    body: "Goals are the fuel in the furnace of achievement.",
    author: "Brian Tracy"
  },
  {
    body: "To be wronged is nothing unless you continue to remember it.",
    author: "Confucius"
  },
  {
    body: "You always succeed in producing a result.",
    author: "Tony Robbins"
  },
  {
    body:
      "Everything you are against weakens you. Everything you are for empowers you.",
    author: "Wayne Dyer"
  },
  {
    body: "As we risk ourselves, we grow. Each new experience is a risk.",
    author: "Fran Watson"
  },
  {
    body: "What we achieve inwardly will change outer reality.",
    author: "Plutarch"
  },
  {
    body: "Who we are never changes. Who we think we are does.",
    author: "Mary Almanac"
  },
  {
    body:
      "If you correct your mind, the rest of your life will fall into place.",
    author: "Lao Tzu"
  },
  {
    body:
      "Feeling and longing are the motive forces behind all human endeavor and human creations.",
    author: "Albert Einstein"
  },
  {
    body:
      "The final proof of greatness lies in being able to endure criticism without resentment.",
    author: "Elbert Hubbard"
  },
  {
    body:
      "If you do not change direction, you may end up where you are heading.",
    author: "Lao Tzu"
  },
  {
    body: "An obstacle may be either a stepping stone or a stumbling block.",
    author: ""
  },
  {
    body: "A beautiful thing is never perfect.",
    author: ""
  },
  {
    body: "A man sees in the world what he carries in his heart.",
    author: "Goethe"
  },
  {
    body:
      "An invasion of armies can be resisted, but not an idea whose time has come.",
    author: "Victor Hugo"
  },
  {
    body: "Never let lack of money interfere with having fun.",
    author: ""
  },
  {
    body: "Excellence is not a skill. It is an attitude.",
    author: "Ralph Marston"
  },
  {
    body: "People may doubt what you say, but they will believe what you do.",
    author: "Lewis Cass"
  },
  {
    body: "The most formidable weapon against errors of every kind is reason.",
    author: "Thomas Paine"
  },
  {
    body: "If there is no struggle, there is no progress.",
    author: "Frederick Douglass"
  },
  {
    body:
      "It's important to know that words don't move mountains. Work, exacting work moves mountains.",
    author: "Danilo Dolci"
  },
  {
    body: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt"
  },
  {
    body: "When you come to the end of your rope, tie a knot and hang on.",
    author: "Franklin Roosevelt"
  },
  {
    body: "Sooner or later, those who win are those who think they can.",
    author: "Richard Bach"
  },
  {
    body:
      "Beware of missing chances; otherwise it may be altogether too late some day.",
    author: "Franz Liszt"
  },
  {
    body: "You only lose what you cling to.",
    author: "Buddha"
  },
  {
    body: "Life is a succession of moments. To live each one is to succeed.",
    author: "Corita Kent"
  },
  {
    body:
      "Most of the shadows of life are caused by standing in our own sunshine.",
    author: "Ralph Waldo Emerson"
  },
  {
    body:
      "Good actions give strength to ourselves and inspire good actions in others.",
    author: "Plato"
  },
  {
    body: "I know but one freedom and that is the freedom of the mind.",
    author: "Antoine de Saint-Exupery"
  },
  {
    body: "Freedom is not worth having if it does not connote freedom to err.",
    author: "Mohandas Gandhi"
  },
  {
    body: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    body: "Trust yourself. You know more than you think you do.",
    author: "Benjamin Spock"
  },
  {
    body:
      "If one does not know to which port is sailing, no wind is favorable.",
    author: "Seneca"
  },
  {
    body: "Wherever you go, go with all your heart.",
    author: "Confucius"
  },
  {
    body: "Every human being is the author of his own health or disease.",
    author: "Buddha"
  },
  {
    body: "When in doubt, tell the truth.",
    author: "Mark Twain"
  },
  {
    body:
      "Strength does not come from physical capacity. It comes from an indomitable will.",
    author: "Mahatma Gandhi"
  },
  {
    body: "To be wronged is nothing unless you continue to remember it.",
    author: "Confucius"
  },
  {
    body:
      "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
    author: "J. Willard Marriott"
  },
  {
    body:
      "Every great advance in science has issued from a new audacity of the imagination.",
    author: "John Dewey"
  },
  {
    body: "The path to success is to take massive, determined action.",
    author: "Anthony Robbins"
  },
  {
    body: "The ladder of success is never crowded at the top.",
    author: "Napoleon Hill"
  },
  {
    body: "Formula for success: under promise and over deliver.",
    author: "Tom Peters"
  },
  {
    body: "What you fear is that which requires action to overcome.",
    author: "Byron Pulsifer"
  },
  {
    body: "Worry often gives a small thing a big shadow.",
    author: "Swedish proverb"
  },
  {
    body: "He who has health has hope, and he who has hope has everything.",
    author: ""
  },
  {
    body: "All great achievements require time.",
    author: "Maya Angelou"
  },
  {
    body: "The heart has eyes which the brain knows nothing of.",
    author: "Charles Perkhurst"
  },
  {
    body:
      "No person is your friend who demands your silence, or denies your right to grow.",
    author: "Alice Walker"
  },
  {
    body: "A really great talent finds its happiness in execution.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "Impossibilities are merely things which we have not yet learned.",
    author: "Charles Chesnutt"
  },
  {
    body:
      "Vision without action is a daydream. Action without vision is a nightmare.",
    author: "Japanese proverb"
  },
  {
    body: "Love all, trust a few, do wrong to none.",
    author: "William Shakespeare"
  },
  {
    body:
      "Invent your world. Surround yourself with people, color, sounds, and work that nourish you.",
    author: ""
  },
  {
    body: "Today is the tomorrow you worried about yesterday.",
    author: ""
  },
  {
    body: "Without faith, nothing is possible. With it, nothing is impossible.",
    author: "Mary Bethune"
  },
  {
    body:
      "Your outlook on life is a direct reflection on how much you like yourself.",
    author: "Lululemon"
  },
  {
    body: "To be wrong is nothing unless you continue to remember it.",
    author: "Confucius"
  },
  {
    body:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    body:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
    author: "Albert Einstein"
  },
  {
    body:
      "The Superior Man is aware of Righteousness, the inferior man is aware of advantage.",
    author: "Confucius"
  },
  {
    body: "A rolling stone gathers no moss.",
    author: "Publilius Syrus"
  },
  {
    body: "Trust yourself. You know more than you think you do.",
    author: "Benjamin Spock"
  },
  {
    body: "He who angers you conquers you.",
    author: "Elizabeth Kenny"
  },
  {
    body: "I never worry about action, but only inaction.",
    author: "Winston Churchill"
  },
  {
    body: "The world makes way for the man who knows where he is going.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Ideals are an imaginative understanding of that which is desirable in that which is possible.",
    author: "Walter Lippmann"
  },
  {
    body: "No man is free who is not master of himself.",
    author: "Epictetus"
  },
  {
    body:
      "He who conquers others is strong; He who conquers himself is mighty.",
    author: "Lao Tzu"
  },
  {
    body:
      "It is only when the mind and character slumber that the dress can be seen.",
    author: "Ralph Waldo Emerson"
  },
  {
    body: "The truest wisdom is a resolute determination.",
    author: "Napoleon Bonaparte"
  },
  {
    body: "Those that know, do. Those that understand, teach.",
    author: "Aristotle"
  },
  {
    body:
      "If we are not fully ourselves, truly in the present moment, we miss everything.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "A thing long expected takes the form of the unexpected when at last it comes.",
    author: "Mark Twain"
  },
  {
    body: "Do good by stealth, and blush to find it fame.",
    author: "Alexander Pope"
  },
  {
    body: "An ant on the move does more than a dozing ox",
    author: "Lao Tzu"
  },
  {
    body: "No act of kindness, no matter how small, is ever wasted.",
    author: "Aesop"
  },
  {
    body: "Every man is a volume if you know how to read him.",
    author: "Channing"
  },
  {
    body:
      "The difficulties of life are intended to make us better, not bitter.",
    author: ""
  },
  {
    body: "A good rest is half the work.",
    author: ""
  },
  {
    body: "We choose our destiny in the way we treat others.",
    author: "Wit"
  },
  {
    body:
      "In separateness lies the world's great misery, in compassion lies the world's true strength.",
    author: "Buddha"
  },
  {
    body:
      "Everything that irritates us about others can lead us to an understanding about ourselves.",
    author: "Carl Jung"
  },
  {
    body: "Better be ignorant of a matter than half know it.",
    author: "Publilius Syrus"
  },
  {
    body: "You can't stop the waves, but you can learn to surf.",
    author: "Jon Kabat-Zinn"
  },
  {
    body: "Quality means doing it right when no one is looking.",
    author: "Henry Ford"
  },
  {
    body: "The cautious seldom err.",
    author: "Confucius"
  },
  {
    body: "Change your words. Change your world.",
    author: ""
  },
  {
    body: "Worry often gives a small thing a big shadow.",
    author: "Swedish proverb"
  },
  {
    body:
      "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.",
    author: "Winston Churchill"
  },
  {
    body:
      "The superior man is modest in his speech, but exceeds in his actions.",
    author: "Confucius"
  },
  {
    body: "All is flux; nothing stays still.",
    author: "Heraclitus"
  },
  {
    body:
      "To get something you never had, you have to do something you never did.",
    author: ""
  },
  {
    body: "I know but one freedom and that is the freedom of the mind.",
    author: "Antoine de Saint-Exupery"
  },
  {
    body: "Every day may not be good, but there's something good in every day.",
    author: ""
  },
  {
    body: "A short saying often contains much wisdom.",
    author: "Sophocles"
  },
  {
    body: "Great acts are made up of small deeds.",
    author: "Lao Tzu"
  },
  {
    body: "The foot feels the foot when it feels the ground.",
    author: "Buddha"
  },
  {
    body:
      "The odds of hitting your target go up dramatically when you aim at it.",
    author: "Mal Pancoast"
  },
  {
    body: "It is in your moments of decision that your destiny is shaped.",
    author: "Tony Robbins"
  },
  {
    body:
      "The superior man is satisfied and composed; the mean man is always full of distress.",
    author: "Confucius"
  },
  {
    body: "Open minds lead to open doors.",
    author: ""
  },
  {
    body: "They can do all because they think they can.",
    author: "Virgil"
  },
  {
    body: "Life is the flower for which love is the honey.",
    author: "Victor Hugo"
  },
  {
    body: "The secret of success is constancy to purpose.",
    author: "Benjamin Disraeli"
  },
  {
    body: "Courage is going from failure to failure without losing enthusiasm.",
    author: "Winston Churchill"
  },
  {
    body: "The secret of success is constancy to purpose.",
    author: "Benjamin Disraeli"
  },
  {
    body: "You have to think anyway, so why not think big?",
    author: "Donald Trump"
  },
  {
    body: "The world is a book, and those who do not travel read only a page.",
    author: "Augustinus Sanctus"
  },
  {
    body:
      "On every thorn, delightful wisdom grows, In every rill a sweet instruction flows.",
    author: "Edward Young"
  },
  {
    body: "Smile, breathe and go slowly.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "If one does not know to which port is sailing, no wind is favorable.",
    author: "Seneca"
  },
  {
    body: "It is better to understand a little than to misunderstand a lot.",
    author: "Anatole France"
  },
  {
    body: "Once you choose hope, anythings possible.",
    author: "Christopher Reeve"
  },
  {
    body:
      "Until you make peace with who you are, you'll never be content with what you have.",
    author: "Doris Mortman"
  },
  {
    body: "To enjoy life, we must touch much of it lightly.",
    author: "Voltaire"
  },
  {
    body:
      "It is only when the mind and character slumber that the dress can be seen.",
    author: "Ralph Waldo Emerson"
  },
  {
    body: "Nothing strengthens authority so much as silence.",
    author: "Leonardo da Vinci"
  },
  {
    body: "Most folks are about as happy as they make up their minds to be.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "The foolish man seeks happiness in the distance, the wise grows it under his feet.",
    author: "James Oppenheim"
  },
  {
    body:
      "Your body is precious. It is our vehicle for awakening. Treat it with care.",
    author: "Buddha"
  },
  {
    body: "You can do what's reasonable or you can decide what's possible.",
    author: ""
  },
  {
    body:
      "Nothing is so strong as gentleness. Nothing is so gentle as real strength.",
    author: "Frances de Sales"
  },
  {
    body:
      "Practice yourself, for heavens sake in little things, and then proceed to greater.",
    author: "Epictetus"
  },
  {
    body: "Nobody will believe in you unless you believe in yourself.",
    author: "Liberace"
  },
  {
    body: "The one who always loses, is the only person who gets the reward.",
    author: "Claire Charmont"
  },
  {
    body: "Better be ignorant of a matter than half know it.",
    author: "Publilius Syrus"
  },
  {
    body: "Character develops itself in the stream of life.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "All the flowers of all the tomorrows are in the seeds of today.",
    author: ""
  },
  {
    body: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster"
  },
  {
    body: "Our intention creates our reality.",
    author: "Wayne Dyer"
  },
  {
    body:
      "You have enemies? Good. That means you've stood up for something, sometime in your life.",
    author: "Winston Churchill"
  },
  {
    body: "From wonder into wonder existence opens.",
    author: "Lao Tzu"
  },
  {
    body: "Happiness is found in doing, not merely possessing.",
    author: "Napoleon Hill"
  },
  {
    body:
      "They say that time changes things, but you actually have to change them yourself.",
    author: "Andy Warhol"
  },
  {
    body:
      "The future is completely open, and we are writing it moment to moment.",
    author: "Pema Chodron"
  },
  {
    body: "Smile, breathe, and go slowly.",
    author: "Thich Nhat Hanh"
  },
  {
    body: "I cannot make my days longer so I strive to make them better.",
    author: "Henry David Thoreau"
  },
  {
    body: "No is easier to do. Yes is easier to say.",
    author: "Jason Fried"
  },
  {
    body: "Nothing happens unless first we dream.",
    author: "Carl Sandburg"
  },
  {
    body:
      "I believe that we are fundamentally the same and have the same basic potential.",
    author: "Dalai Lama"
  },
  {
    body:
      "Successful people ask better questions, and as a result, they get better answers.",
    author: "Tony Robbins"
  },
  {
    body:
      "Happiness comes when your work and words are of benefit to yourself and others.",
    author: "Buddha"
  },
  {
    body: "There is no way to prosperity, prosperity is the way.",
    author: "Wayne Dyer"
  },
  {
    body: "I know but one freedom and that is the freedom of the mind.",
    author: "Antoine de Saint-Exupery"
  },
  {
    body:
      "Each time we face a fear, we gain strength, courage, and confidence in the doing.",
    author: ""
  },
  {
    body:
      "Ask yourself the secret of your success. Listen to your answer, and practice it.",
    author: "Richard Bach"
  },
  {
    body: "Better to have loved and lost, than to have never loved at all.",
    author: "St. Augustine"
  },
  {
    body: "From error to error one discovers the entire truth.",
    author: "Sigmund Freud"
  },
  {
    body: "No man can succeed in a line of endeavor which he does not like.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Don't frown because you never know who is falling in love with your smile.",
    author: "Sinvyest Tan"
  },
  {
    body: "Experience is simply the name we give our mistakes.",
    author: "Oscar Wilde"
  },
  {
    body: "Better be ignorant of a matter than half know it.",
    author: "Publilius Syrus"
  },
  {
    body:
      "Trust your hunches. They're usually based on facts filed away just below the conscious level.",
    author: "Joyce Brothers"
  },
  {
    body:
      "The place to improve the world is first in one's own heart and head and hands.",
    author: "Robert M. Pirsig"
  },
  {
    body: "Nothing is at last sacred but the integrity of your own mind.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Listen to your intuition. It will tell you everything you need to know.",
    author: "Anthony D'Angelo"
  },
  {
    body: "To bring anything into your life, imagine that it's already there.",
    author: "Richard Bach"
  },
  {
    body: "Light tomorrow with today!",
    author: "Elizabeth Browning"
  },
  {
    body:
      "The personal life deeply lived always expands into truths beyond itself.",
    author: "Anais Nin"
  },
  {
    body:
      "Everything is perfect in the universe � even your desire to improve it.",
    author: "Wayne Dyer"
  },
  {
    body: "The undertaking of a new action brings new strength.",
    author: "Richard Evans"
  },
  {
    body:
      "Whenever something negative happens to you, there is a deep lesson concealed within it.",
    author: "Eckhart Tolle"
  },
  {
    body:
      "The most complicated achievements of thought are possible without the assistance of consciousness.",
    author: "Sigmund Freud"
  },
  {
    body: "Being angry never solves anything.",
    author: "Catherine Pulsifer"
  },
  {
    body: "Fortune favours the brave.",
    author: "Virgil"
  },
  {
    body: "What is not started today is never finished tomorrow.",
    author: "Goethe"
  },
  {
    body:
      "I think somehow we learn who we really are and then live with that decision.",
    author: "Eleanor Roosevelt"
  },
  {
    body: "Light tomorrow with today!",
    author: "Elizabeth Browning"
  },
  {
    body: "You can't stop the waves, but you can learn to surf.",
    author: "Jon Kabat-Zinn"
  },
  {
    body: "Nothing ever goes away until it has taught us what we need to know.",
    author: "Pema Chodron"
  },
  {
    body: "Fate is in your hands and no one elses",
    author: "Byron Pulsifer"
  },
  {
    body: "The ladder of success is never crowded at the top.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Our kindness may be the most persuasive argument for that which we believe.",
    author: "Gordon Hinckley"
  },
  {
    body: "It's easier to see the mistakes on someone else's paper.",
    author: ""
  },
  {
    body:
      "Chaos is inherent in all compounded things. Strive on with diligence.",
    author: "Buddha"
  },
  {
    body: "Be sure you put your feet in the right place, then stand firm.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "Everything that irritates us about others can lead us to an understanding of ourselves.",
    author: "Carl Jung"
  },
  {
    body:
      "By believing passionately in something that does not yet exist, we create it.",
    author: "Nikos Kazantzakis"
  },
  {
    body:
      "They must often change, who would be constant in happiness or wisdom.",
    author: "Confucius"
  },
  {
    body: "The heart has eyes which the brain knows nothing of.",
    author: "Charles Perkhurst"
  },
  {
    body:
      "The weak can never forgive. Forgiveness is the attribute of the strong.",
    author: "Mohandas Gandhi"
  },
  {
    body: "Nothing great was ever achieved without enthusiasm.",
    author: "Ralph Emerson"
  },
  {
    body: "God always takes the simplest way.",
    author: "Albert Einstein"
  },
  {
    body:
      "We all have problems. The way we solve them is what makes us different.",
    author: ""
  },
  {
    body:
      "Real magic in relationships means an absence of judgement of others.",
    author: "Wayne Dyer"
  },
  {
    body: "All serious daring starts from within.",
    author: "Harriet Beecher Stowe"
  },
  {
    body: "They can do all because they think they can.",
    author: "Virgil"
  },
  {
    body: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    body: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  },
  {
    body:
      "The meaning I picked, the one that changed my life: Overcome fear, behold wonder.",
    author: "Richard Bach"
  },
  {
    body:
      "Know how to listen, and you will profit even from those who talk badly.",
    author: "Plutarch"
  },
  {
    body: "It is never too late to be what you might have been.",
    author: "George Eliot"
  },
  {
    body: "He who obtains has little. He who scatters has much.",
    author: "Richard Braunstein"
  },
  {
    body: "A man is not old as long as he is seeking something.",
    author: "Edmond Rostand"
  },
  {
    body: "Ideas are the beginning points of all fortunes.",
    author: "Napoleon Hill"
  },
  {
    body: "The time you think you're missing, misses you too.",
    author: "Ymber Delecto"
  },
  {
    body: "No man was ever wise by chance.",
    author: "Seneca"
  },
  {
    body: "You won't skid if you stay in a rut.",
    author: "Kin Hubbard"
  },
  {
    body:
      "We don't stop playing because we grow old; we grow old because we stop playing.",
    author: "Bernard Shaw"
  },
  {
    body:
      "Give thanks for the rain of life that propels us to reach new horizons.",
    author: "Byron Pulsifer"
  },
  {
    body: "Patience is the companion of wisdom.",
    author: "Saint Augustine"
  },
  {
    body:
      "The foolish man seeks happiness in the distance, the wise grows it under his feet.",
    author: "James Oppenheim"
  },
  {
    body:
      "Our kindness may be the most persuasive argument for that which we believe.",
    author: "Gordon Hinckley"
  },
  {
    body:
      "Life is not measured by the breaths you take, but by its breathtaking moments.",
    author: "Michael Vance"
  },
  {
    body: "Much wisdom often goes with fewer words.",
    author: "Sophocles"
  },
  {
    body:
      "If you love life, don't waste time, for time is what life is made up of.",
    author: "Bruce Lee"
  },
  {
    body: "He who talks more is sooner exhausted.",
    author: "Lao Tzu"
  },
  {
    body:
      "The greatest way to live with honour in this world is to be what we pretend to be.",
    author: "Socrates"
  },
  {
    body:
      "Imagination is the living power and prime agent of all human perception.",
    author: "Samuel Taylor Coleridge"
  },
  {
    body: "I'm not afraid of storms, for Im learning how to sail my ship.",
    author: "Louisa Alcott"
  },
  {
    body:
      "The greatest minds are capable of the greatest vices as well as of the greatest virtues.",
    author: "Rene Descartes"
  },
  {
    body: "Victory belongs to the most persevering.",
    author: "Napoleon Bonaparte"
  },
  {
    body:
      "All that we are is the result of what we have thought. The mind is everything. What we think we become.",
    author: "Buddha"
  },
  {
    body:
      "When your desires are strong enough you will appear to possess superhuman powers to achieve.",
    author: "Napoleon Hill"
  },
  {
    body:
      "What lies behind us and what lies before us are small matters compared to what lies within us.",
    author: "Oliver Holmes"
  },
  {
    body: "Be slow of tongue and quick of eye.",
    author: "Cervantes"
  },
  {
    body: "It is impossible to feel grateful and depressed in the same moment.",
    author: "Naomi Williams"
  },
  {
    body:
      "A friend is someone who understands your past, believes in your future, and accepts you just the way you are.",
    author: ""
  },
  {
    body: "The path to success is to take massive, determined action.",
    author: "Anthony Robbins"
  },
  {
    body:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Walt Emerson"
  },
  {
    body:
      "Progress always involves risks. You can't steal second base and keep your foot on first.",
    author: "Frederick Wilcox"
  },
  {
    body: "Peace comes from within. Do not seek it without.",
    author: "Buddha"
  },
  {
    body:
      "Bad things are not the worst things that can happen to us. Nothing is the worst thing that can happen to us!",
    author: "Richard Bach"
  },
  {
    body:
      "Liberty, taking the word in its concrete sense, consists in the ability to choose.",
    author: "Simone Weil"
  },
  {
    body: "Blaze with the fire that is never extinguished.",
    author: "Luisa Sigea"
  },
  {
    body: "There are no failures � just experiences and your reactions to them.",
    author: "Tom Krause"
  },
  {
    body:
      "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
    author: "Tryon Edwards"
  },
  {
    body:
      "On every thorn, delightful wisdom grows, In every rill a sweet instruction flows.",
    author: "Edward Young"
  },
  {
    body:
      "If you would take, you must first give, this is the beginning of intelligence.",
    author: "Lao Tzu"
  },
  {
    body: "A thing well said will be wit in all languages.",
    author: "John Dryden"
  },
  {
    body: "Write your plans in pencil and give God the eraser.",
    author: "Paulo Coelho"
  },
  {
    body: "No is easier to do. Yes is easier to say.",
    author: "Jason Fried"
  },
  {
    body: "Always do your best. What you plant now, you will harvest later.",
    author: "Og Mandino"
  },
  {
    body:
      "My mama always said: life's like a box of chocolate you never know what you gonna get.",
    author: "Forrest Gump"
  },
  {
    body:
      "We are the leaves of one branch, the drops of one sea, the flowers of one garden.",
    author: "Jean Lacordaire"
  },
  {
    body: "If you light a lamp for somebody, it will also brighten your path.",
    author: "Buddha"
  },
  {
    body:
      "Strength does not come from physical capacity. It comes from an indomitable will.",
    author: "Mahatma Gandhi"
  },
  {
    body: "If you come to a fork in the road, take it.",
    author: ""
  },
  {
    body: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles Swindoll"
  },
  {
    body: "Error is discipline through which we advance.",
    author: "Channing"
  },
  {
    body:
      "How wonderful that we have met with a paradox. Now we have some hope of making progress.",
    author: "Niels Bohr"
  },
  {
    body: "Be slow of tongue and quick of eye.",
    author: "Cervantes"
  },
  {
    body:
      "He who conquers others is strong; He who conquers himself is mighty.",
    author: "Lao Tzu"
  },
  {
    body: "The best way to pay for a lovely moment is to enjoy it.",
    author: "Richard Bach"
  },
  {
    body:
      "If we are facing in the right direction, all we have to do is keep on walking.",
    author: ""
  },
  {
    body:
      "It is not only for what we do that we are held responsible, but also for what we do not do.",
    author: "Moliere"
  },
  {
    body:
      "The only way to tell the truth is to speak with kindness. Only the words of a loving man can be heard.",
    author: "Henry Thoreau"
  },
  {
    body:
      "As the rest of the world is walking out the door, your best friends are the ones walking in.",
    author: ""
  },
  {
    body:
      "The greatest minds are capable of the greatest vices as well as of the greatest virtues.",
    author: "Rene Descartes"
  },
  {
    body: "Someone is special only if you tell them.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "It's so simple to be wise. Just think of something stupid to say and then don't say it.",
    author: "Sam Levenson"
  },
  {
    body: "A man is great by deeds, not by birth.",
    author: "Chanakya"
  },
  {
    body: "No garden is without its weeds.",
    author: "Thomas Fuller"
  },
  {
    body: "Nobody can do everything, but everybody can do something.",
    author: ""
  },
  {
    body:
      "The world has the habit of making room for the man whose actions show that he knows where he is going.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Quality is never an accident; it is always the result of intelligent effort.",
    author: "John Ruskin"
  },
  {
    body:
      "You cannot step twice into the same river, for other waters are continually flowing in.",
    author: "Heraclitus"
  },
  {
    body:
      "We should all be thankful for those people who rekindle the inner spirit.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.",
    author: "Leonardo Ruiz"
  },
  {
    body: "All great achievements require time.",
    author: "Maya Angelou"
  },
  {
    body:
      "Never idealize others. They will never live up to your expectations.",
    author: "Leo Buscaglia"
  },
  {
    body: "Excellence is to do a common thing in an uncommon way.",
    author: "Booker Washington"
  },
  {
    body:
      "Edison failed 10,000 times before he made the electric light. Do not be discouraged if you fail a few times.",
    author: "Napoleon Hill"
  },
  {
    body: "No matter how hard the past, you can always begin again.",
    author: "Buddha"
  },
  {
    body: "I begin with an idea and then it becomes something else.",
    author: "Pablo Picasso"
  },
  {
    body: "May our hearts garden of awakening bloom with hundreds of flowers.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "Friends are those rare people who ask how we are and then wait to hear the answer.",
    author: "Ed Cunningham"
  },
  {
    body:
      "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle"
  },
  {
    body:
      "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
    author: "Napoleon Hill"
  },
  {
    body: "Whoever is happy will make others happy, too.",
    author: "Mark Twain"
  },
  {
    body:
      "The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.",
    author: "Mortimer Adler"
  },
  {
    body:
      "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
    author: "Henry Longfellow"
  },
  {
    body:
      "The bird of paradise alights only upon the hand that does not grasp.",
    author: "John Berry"
  },
  {
    body: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    body: "To accomplish great things, we must dream as well as act.",
    author: "Anatole France"
  },
  {
    body:
      "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.",
    author: "Catherine Pulsifer"
  },
  {
    body:
      "Your work is to discover your work and then with all your heart to give yourself to it.",
    author: "Buddha"
  },
  {
    body:
      "There are only two mistakes one can make along the road to truth; not going all the way, and not starting.",
    author: "Buddha"
  },
  {
    body: "It's not what happens to you, but how you react to it that matters.",
    author: "Epictetus"
  },
  {
    body:
      "It is very easy to forgive others their mistakes; it takes more grit to forgive them for having witnessed your own.",
    author: "Jessamyn West"
  },
  {
    body: "Take it easy � but take it.",
    author: "Woody Guthrie"
  },
  {
    body:
      "Don't wait for your feelings to change to take the action. Take the action and your feelings will change.",
    author: "Barbara Baron"
  },
  {
    body:
      "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.",
    author: "Robert Louis Stevenson"
  },
  {
    body: "Whoever is happy will make others happy, too.",
    author: "Mark Twain"
  },
  {
    body:
      "Never apologize for showing feeling. When you do so, you apologize for truth.",
    author: "Benjamin Disraeli"
  },
  {
    body: "Where all think alike, no one thinks very much.",
    author: "Walter Lippmann"
  },
  {
    body:
      "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
    author: "Sai Baba"
  },
  {
    body:
      "Face your deficiencies and acknowledge them; but do not let them master you. Let them teach you patience, sweetness, insight.",
    author: "Helen Keller"
  },
  {
    body:
      "I have done my best: that is about all the philosophy of living one needs.",
    author: "Lin-yutang"
  },
  {
    body: "To accomplish great things, we must dream as well as act.",
    author: "Anatole France"
  },
  {
    body: "The beginning is always today.",
    author: "Mary Wollstonecraft"
  },
  {
    body: "Keep true to the dreams of thy youth.",
    author: "Friedrich von Schiller"
  },
  {
    body:
      "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
    author: "Buddha"
  },
  {
    body:
      "The winds and waves are always on the side of the ablest navigators.",
    author: "Edward Gibbon"
  },
  {
    body: "Take rest; a field that has rested gives a bountiful crop.",
    author: "Ovid"
  },
  {
    body:
      "Truth isn't all about what actually happens but more about how what has happened is interpreted.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Age does not protect you from love. But love, to some extent, protects you from age.",
    author: "Anais Nin"
  },
  {
    body:
      "Men are disturbed not by things, but by the view which they take of them.",
    author: "Epictetus"
  },
  {
    body:
      "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
    author: "Charlotte Gilman"
  },
  {
    body:
      "Every man takes the limits of his own field of vision for the limits of the world.",
    author: "Arthur Schopenhauer"
  },
  {
    body:
      "Doing what you love is the cornerstone of having abundance in your life.",
    author: "Wayne Dyer"
  },
  {
    body: "May our hearts garden of awakening bloom with hundreds of flowers.",
    author: "Thich Nhat Hanh"
  },
  {
    body: "Do what you can. Want what you have. Be who you are.",
    author: "Forrest Church"
  },
  {
    body: "There are people who have money and people who are rich.",
    author: "Coco Chanel"
  },
  {
    body:
      "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
    author: "Henry Longfellow"
  },
  {
    body:
      "The greatest good you can do for another is not just share your riches, but reveal to them their own.",
    author: "Benjamin Disraeli"
  },
  {
    body: "Why worry about tomorrow, when today is all we have?",
    author: ""
  },
  {
    body:
      "Speak when you are angry and you will make the best speech you will ever regret.",
    author: "Ambrose Bierce"
  },
  {
    body: "To accomplish great things, we must dream as well as act.",
    author: "Anatole France"
  },
  {
    body: "Things do not change, we change.",
    author: "Henry Thoreau"
  },
  {
    body:
      "The exercise of an extraordinary gift is the supremest pleasure in life.",
    author: "Mark Twain"
  },
  {
    body:
      "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
    author: "Etty Hillesum"
  },
  {
    body:
      "The first requisite for success is the ability to apply your physical and mental energies to one problem incessantly without growing weary.",
    author: "Thomas Edison"
  },
  {
    body: "To be wronged is nothing unless you continue to remember it.",
    author: "Confucius"
  },
  {
    body:
      "We should all be thankful for those people who rekindle the inner spirit.",
    author: "Albert Schweitzer"
  },
  {
    body: "There is no greater harm than that of time wasted.",
    author: "Michelangelo"
  },
  {
    body:
      "Forgiveness is choosing to love. It is the first skill of self-giving love.",
    author: "Mohandas Gandhi"
  },
  {
    body: "To accomplish great things, we must dream as well as act.",
    author: "Anatole France"
  },
  {
    body:
      "It is only with the heart that one can see rightly, what is essential is invisible to the eye.",
    author: "Antoine de Saint-Exupery"
  },
  {
    body:
      "To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.",
    author: "William Londen"
  },
  {
    body:
      "Believe deep down in your heart that you're destined to do great things.",
    author: "Joe Paterno"
  },
  {
    body:
      "Nothing is so strong as gentleness. Nothing is so gentle as real strength.",
    author: "Frances de Sales"
  },
  {
    body: "If you cannot do great things, do small things in a great way.",
    author: "Napoleon Hill"
  },
  {
    body: "Experience is simply the name we give our mistakes.",
    author: "Oscar Wilde"
  },
  {
    body: "Most smiles are started by another smile.",
    author: ""
  },
  {
    body: "Think how hard physics would be if particles could think.",
    author: "Murray Gell-Mann"
  },
  {
    body:
      "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.",
    author: "Blaise Pascal"
  },
  {
    body: "Imagination is the highest kite one can fly.",
    author: "Lauren Bacall"
  },
  {
    body: "The best way out is always through.",
    author: "Robert Frost"
  },
  {
    body:
      "Nature gave us one tongue and two ears so we could hear twice as much as we speak.",
    author: "Epictetus"
  },
  {
    body:
      "Nothing is softer or more flexible than water, yet nothing can resist it.",
    author: "Lao Tzu"
  },
  {
    body:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin Roosevelt"
  },
  {
    body:
      "It is difficult to achieve a spirit of genuine cooperation as long as people remain indifferent to the feelings and happiness of others.",
    author: "Dalai Lama"
  },
  {
    body:
      "The exercise of an extraordinary gift is the supremest pleasure in life.",
    author: "Mark Twain"
  },
  {
    body:
      "To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly.",
    author: "Henri Bergson"
  },
  {
    body: "A man is not where he lives but where he loves.",
    author: ""
  },
  {
    body: "Experience keeps a dear school, but fools will learn in no other.",
    author: "Benjamin Franklin"
  },
  {
    body: "The heart has eyes which the brain knows nothing of.",
    author: "Charles Perkhurst"
  },
  {
    body:
      "We can only be said to be alive in those moments when our hearts are conscious of our treasures.",
    author: "Thornton Wilder"
  },
  {
    body:
      "Fine words and an insinuating appearance are seldom associated with true virtue",
    author: "Confucius"
  },
  {
    body:
      "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
    author: "Isaac Asimov"
  },
  {
    body:
      "Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    author: "Buddha"
  },
  {
    body:
      "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
    author: "Barack Obama"
  },
  {
    body:
      "Someone remembers, someone cares; your name is whispered in someone's prayers.",
    author: ""
  },
  {
    body:
      "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.",
    author: "Mabel Newcomber"
  },
  {
    body: "God always takes the simplest way.",
    author: "Albert Einstein"
  },
  {
    body:
      "Every artist dips his brush in his own soul, and paints his own nature into his pictures.",
    author: "Henry Ward Beecher"
  },
  {
    body:
      "When you don't know what you believe, everything becomes an argument. Everything is debatable. But when you stand for something, decisions are obvious.",
    author: ""
  },
  {
    body: "Those that know, do. Those that understand, teach.",
    author: "Aristotle"
  },
  {
    body:
      "The conditions of conquest are always easy. We have but to toil awhile, endure awhile, believe always, and never turn back.",
    author: "Seneca"
  },
  {
    body:
      "You can be what you want to be. You have the power within and we will help you always.",
    author: "Byron Pulsifer"
  },
  {
    body: "He who knows himself is enlightened.",
    author: "Lao Tzu"
  },
  {
    body:
      "The universe is transformation; our life is what our thoughts make it.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "Our kindness may be the most persuasive argument for that which we believe.",
    author: "Gordon Hinckley"
  },
  {
    body:
      "We do not quit playing because we grow old, we grow old because we quit playing.",
    author: "Oliver Holmes"
  },
  {
    body: "You can't choose up sides on a round world.",
    author: "Wayne Dyer"
  },
  {
    body:
      "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
    author: "Anais Nin"
  },
  {
    body: "What you do not want done to yourself, do not do to others.",
    author: "Confucius"
  },
  {
    body:
      "With realization of ones own potential and self-confidence in ones ability, one can build a better world.",
    author: "Dalai Lama"
  },
  {
    body: "Fortune favours the brave.",
    author: "Virgil"
  },
  {
    body:
      "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.",
    author: "Catherine Pulsifer"
  },
  {
    body: "A man is not old as long as he is seeking something.",
    author: "Edmond Rostand"
  },
  {
    body: "Happiness depends upon ourselves.",
    author: "Aristotle"
  },
  {
    body: "Smile, breathe and go slowly.",
    author: "Thich Nhat Hanh"
  },
  {
    body: "A man is not old as long as he is seeking something.",
    author: "Edmond Rostand"
  },
  {
    body:
      "Imagination is the living power and prime agent of all human perception.",
    author: "Samuel Taylor Coleridge"
  },
  {
    body:
      "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.",
    author: "Honore de Balzac"
  },
  {
    body:
      "My advice to you is not to inquire why or whither, but just enjoy your ice cream while its on your plate � that's my philosophy.",
    author: "Thornton Wilder"
  },
  {
    body:
      "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
    author: "Rumi"
  },
  {
    body:
      "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "Kindness is the language which the deaf can hear and the blind can see.",
    author: "Mark Twain"
  },
  {
    body: "Be the chief but never the lord.",
    author: "Lao Tzu"
  },
  {
    body:
      "Every action of our lives touches on some chord that will vibrate in eternity.",
    author: "Edwin Chapin"
  },
  {
    body: "I may not know everything, but everything is not known yet anyway.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "The bird of paradise alights only upon the hand that does not grasp.",
    author: "John Berry"
  },
  {
    body:
      "If we could see the miracle of a single flower clearly, our whole life would change.",
    author: "Buddha"
  },
  {
    body:
      "You have to take it as it happens, but you should try to make it happen the way you want to take it.",
    author: "Old German proverb"
  },
  {
    body:
      "Without this playing with fantasy no creative work has ever yet come to birth. The debt we owe to the play of the imagination is incalculable.",
    author: "Carl Jung"
  },
  {
    body: "You cannot travel the path until you have become the path itself.",
    author: "Buddha"
  },
  {
    body:
      "I believe that we are solely responsible for our choices, and we have to accept the consequences of every deed, word, and thought throughout our lifetime.",
    author: "Elisabeth Kubler-Ross"
  },
  {
    body: "Keep your eyes on the stars and your feet on the ground.",
    author: "Theodore Roosevelt"
  },
  {
    body:
      "I am not afraid of tomorrow, for I have seen yesterday and I love today.",
    author: "William White"
  },
  {
    body:
      "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
    author: "Jamie Paolinetti"
  },
  {
    body:
      "If you are patient in one moment of anger, you will escape one hundred days of sorrow.",
    author: "Chinese proverb"
  },
  {
    body: "When you lose, don't lose the lesson.",
    author: ""
  },
  {
    body: "Character develops itself in the stream of life.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "If you want a thing done well, do it yourself.",
    author: "Napoleon Bonaparte"
  },
  {
    body:
      "All the great performers I have worked with are fuelled by a personal dream.",
    author: "John Eliot"
  },
  {
    body:
      "It's so simple to be wise. Just think of something stupid to say and then don't say it.",
    author: "Sam Levenson"
  },
  {
    body: "No one has ever become poor by giving.",
    author: "Anne Frank"
  },
  {
    body:
      "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.",
    author: "Catherine Pulsifer"
  },
  {
    body: "An obstacle may be either a stepping stone or a stumbling block.",
    author: ""
  },
  {
    body:
      "Everything can be taken from a man but ... the last of the human freedoms � to choose ones attitude in any given set of circumstances, to choose ones own way.",
    author: "Victor Frankl"
  },
  {
    body: "I think and that is all that I am.",
    author: "Wayne Dyer"
  },
  {
    body: "The greatest barrier to success is the fear of failure.",
    author: "Eriksson"
  },
  {
    body:
      "Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather.",
    author: "John Ruskin"
  },
  {
    body:
      "If you are patient in one moment of anger, you will escape one hundred days of sorrow.",
    author: "Chinese proverb"
  },
  {
    body:
      "I want you to be everything that's you, deep at the center of your being.",
    author: "Confucius"
  },
  {
    body: "The heart has eyes which the brain knows nothing of.",
    author: "Charles Perkhurst"
  },
  {
    body: "If you aren't going all the way, why go at all?",
    author: "Joe Namath"
  },
  {
    body:
      "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius"
  },
  {
    body: "We choose our destiny in the way we treat others.",
    author: "Wit"
  },
  {
    body:
      "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
    author: "John Astin"
  },
  {
    body:
      "If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagines, he will meet with a success unexpected in common hours.",
    author: "Henry David Thoreau"
  },
  {
    body:
      "The beginning of wisdom is found in doubting; by doubting we come to the question, and by seeking we may come upon the truth.",
    author: "Pierre Abelard"
  },
  {
    body:
      "We can only be said to be alive in those moments when our hearts are conscious of our treasures.",
    author: "Thornton Wilder"
  },
  {
    body:
      "Wicked people are always surprised to find ability in those that are good.",
    author: "Marquis Vauvenargues"
  },
  {
    body:
      "If I could reach up and hold a star for every time you've made me smile, the entire evening sky would be in the palm of my hand.",
    author: ""
  },
  {
    body:
      "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.",
    author: "Buddha"
  },
  {
    body:
      "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mohandas Gandhi"
  },
  {
    body:
      "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
    author: "Bruce Lee"
  },
  {
    body:
      "You have enemies? Good. That means you've stood up for something, sometime in your life.",
    author: "Winston Churchill"
  },
  {
    body: "Kind words do not cost much. Yet they accomplish much.",
    author: "Blaise Pascal"
  },
  {
    body: "I destroy my enemies when I make them my friends.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "Feeling and longing are the motive forces behind all human endeavor and human creations.",
    author: "Albert Einstein"
  },
  {
    body:
      "Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us.",
    author: "Robert Lynd"
  },
  {
    body:
      "Stay committed to your decisions, but stay flexible in your approach.",
    author: "Tony Robbins"
  },
  {
    body: "The path to success is to take massive, determined action.",
    author: "Anthony Robbins"
  },
  {
    body:
      "One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "An optimist is a person who sees a green light everywhere, while the pessimist sees only the red spotlight... The truly wise person is colour-blind.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "What separates the winners from the losers is how a person reacts to each new twist of fate.",
    author: "Donald Trump"
  },
  {
    body:
      "Ignorant men don't know what good they hold in their hands until they've flung it away.",
    author: "Sophocles"
  },
  {
    body:
      "One does not discover new lands without consenting to lose sight of the shore for a very long time.",
    author: "Andr� Gide"
  },
  {
    body:
      "All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise.",
    author: "Anne Bronte"
  },
  {
    body: "Tension is who you think you should be. Relaxation is who you are.",
    author: "Chinese proverb"
  },
  {
    body:
      "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
    author: "Lao Tzu"
  },
  {
    body:
      "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
    author: "Dale Carnegie"
  },
  {
    body:
      "Each man has his own vocation; his talent is his call. There is one direction in which all space is open to him.",
    author: "Ralph Emerson"
  },
  {
    body: "We do what we do because we believe.",
    author: ""
  },
  {
    body:
      "Never bend your head. Always hold it high. Look the world right in the eye.",
    author: "Helen Keller"
  },
  {
    body:
      "Just as a flower, which seems beautiful has color but no perfume, so are the fruitless words of a man who speaks them but does them not.",
    author: "Dhammapada"
  },
  {
    body:
      "Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a fish.",
    author: "Ovid"
  },
  {
    body:
      "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
    author: "Buddha"
  },
  {
    body:
      "Sometimes it is better to lose and do the right thing than to win and do the wrong thing.",
    author: "Tony Blair"
  },
  {
    body: "Silence is the true friend that never betrays.",
    author: "Confucius"
  },
  {
    body:
      "Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world.",
    author: "Blaise Pascal"
  },
  {
    body: "To want to be what one can be is purpose in life.",
    author: "Cynthia Ozick"
  },
  {
    body:
      "To change ones life, start immediately, do it flamboyantly, no exceptions.",
    author: "William James"
  },
  {
    body:
      "I have done my best: that is about all the philosophy of living one needs.",
    author: "Lin-yutang"
  },
  {
    body:
      "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
    author: "John F. Kennedy"
  },
  {
    body:
      "If you let go a little, you will have a little peace. If you let go a lot, you will have a lot of peace.",
    author: "Ajahn Chah"
  },
  {
    body: "Whoever is happy will make others happy, too.",
    author: "Mark Twain"
  },
  {
    body: "Character develops itself in the stream of life.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "Everything can be taken from a man but ... the last of the human freedoms � to choose ones attitude in any given set of circumstances, to choose ones own way.",
    author: "Victor Frankl"
  },
  {
    body: "Better than a thousand hollow words, is one word that brings peace.",
    author: "Buddha"
  },
  {
    body:
      "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
    author: "Andr� Gide"
  },
  {
    body: "The only real valuable thing is intuition.",
    author: "Albert Einstein"
  },
  {
    body:
      "The world cares very little about what a man or woman knows; it is what a man or woman is able to do that counts.",
    author: "Booker Washington"
  },
  {
    body:
      "The steeper the mountain the harder the climb the better the view from the finishing line",
    author: ""
  },
  {
    body:
      "Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life.",
    author: "Dr. David M. Burns"
  },
  {
    body: "Wisdom begins in wonder.",
    author: "Socrates"
  },
  {
    body:
      "I have done my best: that is about all the philosophy of living one needs.",
    author: "Lin-yutang"
  },
  {
    body:
      "Forgiveness is choosing to love. It is the first skill of self-giving love.",
    author: "Mohandas Gandhi"
  },
  {
    body:
      "Peace cannot be kept by force. It can only be achieved by understanding.",
    author: "Albert Einstein"
  },
  {
    body: "When I let go of what I am, I become what I might be.",
    author: "Lao Tzu"
  },
  {
    body:
      "Transformation does not start with some one else changing you; transformation is an inner self reworking of what you are now to what you will be.",
    author: "Byron Pulsifer"
  },
  {
    body: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    body:
      "Time is not a measure the length of a day or month or year but more a measure of what you have accomplished.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Wherever a man may happen to turn, whatever a man may undertake, he will always end up by returning to the path which nature has marked out for him.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "No person is your friend who demands your silence, or denies your right to grow.",
    author: "Alice Walker"
  },
  {
    body:
      "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
    author: "Buddha"
  },
  {
    body: "Peace comes from within. Do not seek it without.",
    author: "Buddha"
  },
  {
    body: "When there is no enemy within, the enemies outside cannot hurt you.",
    author: "African proverb"
  },
  {
    body:
      "He who controls others may be powerful, but he who has mastered himself is mightier still.",
    author: "Lao Tzu"
  },
  {
    body:
      "You may say Im a dreamer, but Im not the only one, I hope someday you will join us, and the world will live as one.",
    author: "John Lennon"
  },
  {
    body:
      "There is no scarcity of opportunity to make a living at what you love; theres only scarcity of resolve to make it happen.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Neither a lofty degree of intelligence nor imagination nor both together go to the making of genius. Love, love, love, that is the soul of genius.",
    author: "Wolfgang Amadeus Mozart"
  },
  {
    body:
      "The happy and efficient people in this world are those who accept trouble as a normal detail of human life and resolve to capitalize it when it comes along.",
    author: "H. Bertram Lewis"
  },
  {
    body:
      "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Whatever we expect with confidence becomes our own self-fulfilling prophecy.",
    author: "Brian Tracy"
  },
  {
    body:
      "The final proof of greatness lies in being able to endure criticism without resentment.",
    author: "Elbert Hubbard"
  },
  {
    body:
      "As an organizer I start from where the world is, as it is, not as I would like it to be.",
    author: "Saul Alinsky"
  },
  {
    body:
      "The biggest adventure you can ever take is to live the life of your dreams.",
    author: "Oprah Winfrey"
  },
  {
    body: "You are the only person on Earth who can use your ability.",
    author: "Zig Ziglar"
  },
  {
    body: "Don't let what you can't do stop you from doing what you can do.",
    author: ""
  },
  {
    body: "Complaining doesn't change a thing only taking action does.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Life a culmination of the past, an awareness of the present, an indication of the future beyond knowledge, the quality that gives a touch of divinity to matter.",
    author: "Charles A. Lindbergh"
  },
  {
    body:
      "Each man has his own vocation; his talent is his call. There is one direction in which all space is open to him.",
    author: "Ralph Emerson"
  },
  {
    body: "If you can't feed a hundred people, then feed just one.",
    author: "Mother Teresa"
  },
  {
    body:
      "Everything that exists is in a manner the seed of that which will be.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "Enjoy the little things, for one day you may look back and realize they were the big things.",
    author: "Robert Brault"
  },
  {
    body:
      "With every experience, you alone are painting your own canvas, thought by thought, choice by choice.",
    author: "Oprah Winfrey"
  },
  {
    body: "Think how hard physics would be if particles could think.",
    author: "Murray Gell-Mann"
  },
  {
    body: "Let the beauty of what you love be what you do.",
    author: "Rumi"
  },
  {
    body:
      "The world turns aside to let any man pass who knows where he is going.",
    author: "Epictetus"
  },
  {
    body:
      "I can't imagine a person becoming a success who doesn't give this game of life everything hes got.",
    author: "Walter Cronkite"
  },
  {
    body: "Beauty is not in the face; beauty is a light in the heart.",
    author: "Kahlil Gibran"
  },
  {
    body: "A day of worry is more exhausting than a day of work.",
    author: "John Lubbock"
  },
  {
    body: "I never think of the future. It comes soon enough.",
    author: "Albert Einstein"
  },
  {
    body: "It isn't where you come from, it's where you're going that counts.",
    author: "Ella Fitzgerald"
  },
  {
    body:
      "He who controls others may be powerful, but he who has mastered himself is mightier still.",
    author: "Lao Tzu"
  },
  {
    body:
      "Truth, and goodness, and beauty are but different faces of the same all.",
    author: "Ralph Emerson"
  },
  {
    body: "All I can say about life is, Oh God, enjoy it!",
    author: "Bob Newhart"
  },
  {
    body:
      "Trust your hunches. They're usually based on facts filed away just below the conscious level.",
    author: "Joyce Brothers"
  },
  {
    body: "The day is already blessed, find peace within it.",
    author: ""
  },
  {
    body: "Tension is who you think you should be. Relaxation is who you are.",
    author: "Chinese proverb"
  },
  {
    body: "To be great is to be misunderstood.",
    author: "Ralph Emerson"
  },
  {
    body: "Love all, trust a few, do wrong to none.",
    author: "William Shakespeare"
  },
  {
    body:
      "Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health.",
    author: "Dalai Lama"
  },
  {
    body:
      "We all live with the objective of being happy; our lives are all different and yet the same.",
    author: "Anne Frank"
  },
  {
    body:
      "Trust only movement. Life happens at the level of events, not of words. Trust movement.",
    author: "Alfred Adler"
  },
  {
    body: "Never, never, never give up.",
    author: "Winston Churchill"
  },
  {
    body: "Think as a wise man but communicate in the language of the people.",
    author: "William Yeats"
  },
  {
    body:
      "Parents can only give good advice or put them on the right paths, but the final forming of a persons character lies in their own hands.",
    author: "Anne Frank"
  },
  {
    body:
      "I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence.",
    author: "Frederick Douglass"
  },
  {
    body:
      "The most decisive actions of our life... are most often unconsidered actions.",
    author: "Andr� Gide"
  },
  {
    body:
      "As we grow as unique persons, we learn to respect the uniqueness of others.",
    author: "Robert Schuller"
  },
  {
    body:
      "Failure doesn't mean you are a failure it just means you haven't succeeded yet.",
    author: "Robert Schuller"
  },
  {
    body:
      "Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.",
    author: "John Dewey"
  },
  {
    body:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
    author: "Helen Keller"
  },
  {
    body:
      "Those who are blessed with the most talent don't necessarily outperform everyone else. It's the people with follow-through who excel.",
    author: "Mary Kay Ash"
  },
  {
    body: "They can do all because they think they can.",
    author: "Virgil"
  },
  {
    body: "It isn't where you come from, it's where you're going that counts.",
    author: "Ella Fitzgerald"
  },
  {
    body:
      "All that we are is the result of what we have thought. The mind is everything. What we think we become.",
    author: "Buddha"
  },
  {
    body: "In all chaos there is a cosmos, in all disorder a secret order.",
    author: "Carl Jung"
  },
  {
    body:
      "It is the quality of our work which will please God, not the quantity.",
    author: "Mahatma Gandhi"
  },
  {
    body: "Try and fail, but don't fail to try.",
    author: "Stephen Kaggwa"
  },
  {
    body: "The heart has its reasons which reason knows not of.",
    author: "Blaise Pascal"
  },
  {
    body:
      "The happy and efficient people in this world are those who accept trouble as a normal detail of human life and resolve to capitalize it when it comes along.",
    author: "H. Bertram Lewis"
  },
  {
    body:
      "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.",
    author: "Confucius"
  },
  {
    body:
      "First say to yourself what you would be; and then do what you have to do.",
    author: "Epictetus"
  },
  {
    body: "The ladder of success is never crowded at the top.",
    author: "Napoleon Hill"
  },
  {
    body: "You can do what's reasonable or you can decide what's possible.",
    author: ""
  },
  {
    body: "Nothing diminishes anxiety faster than action.",
    author: "Walter Anderson"
  },
  {
    body: "Don't be afraid to go out on a limb. That's where the fruit is.",
    author: "H. Jackson Browne"
  },
  {
    body:
      "Mistakes are always forgivable, if one has the courage to admit them.",
    author: "Bruce Lee"
  },
  {
    body: "I allow my intuition to lead my path.",
    author: "Manuel Puig"
  },
  {
    body: "Today is the tomorrow we worried about yesterday.",
    author: ""
  },
  {
    body:
      "Through pride we are ever deceiving ourselves. But deep down below the surface of the average conscience a still, small voice says to us, Something is out of tune.",
    author: "Carl Jung"
  },
  {
    body:
      "What is necessary to change a person is to change his awareness of himself.",
    author: "Abraham Maslow"
  },
  {
    body:
      "Keep silence for the most part, and speak only when you must, and then briefly.",
    author: "Epictetus"
  },
  {
    body: "Fear not for the future, weep not for the past.",
    author: "Percy Shelley"
  },
  {
    body: "The mind is everything. What you think you become.",
    author: "Buddha"
  },
  {
    body:
      "Try not to become a man of success, but rather try to become a man of value.",
    author: "Albert Einstein"
  },
  {
    body:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer"
  },
  {
    body: "We are Divine enough to ask and we are important enough to receive.",
    author: "Wayne Dyer"
  },
  {
    body: "If you kick a stone in anger, you'll hurt your own foot.",
    author: "Korean proverb"
  },
  {
    body: "Put your future in good hands � your own.",
    author: ""
  },
  {
    body:
      "The wise man does not lay up his own treasures. The more he gives to others, the more he has for his own.",
    author: "Lao Tzu"
  },
  {
    body: "All men who have achieved great things have been great dreamers.",
    author: "Orison Marden"
  },
  {
    body:
      "To live a pure unselfish life, one must count nothing as ones own in the midst of abundance.",
    author: "Buddha"
  },
  {
    body:
      "Face your deficiencies and acknowledge them; but do not let them master you. Let them teach you patience, sweetness, insight.",
    author: "Helen Keller"
  },
  {
    body:
      "Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has.",
    author: "Margaret Mead"
  },
  {
    body: "To see things in the seed, that is genius.",
    author: "Lao Tzu"
  },
  {
    body:
      "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
    author: "Charles DeLint"
  },
  {
    body:
      "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.",
    author: "Arthur Conan Doyle"
  },
  {
    body:
      "The happiness that is genuinely satisfying is accompanied by the fullest exercise of our faculties and the fullest realization of the world in which we live.",
    author: "Bertrand Russell"
  },
  {
    body:
      "Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.",
    author: "Douglas Adams"
  },
  {
    body:
      "Giving up doesn't always mean you are weak. Sometimes it means that you are strong enough to let go.",
    author: ""
  },
  {
    body:
      "The greatest antidote to insecurity and the sense of fear is compassion � it brings one back to the basis of one's inner strength",
    author: "Dalai Lama"
  },
  {
    body:
      "The truth of the matter is that you always know the right thing to do. The hard part is doing it.",
    author: "Norman Schwarzkopf"
  },
  {
    body:
      "If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away.",
    author: "John Steinbeck"
  },
  {
    body:
      "No yesterdays are ever wasted for those who give themselves to today.",
    author: "Brendan Francis"
  },
  {
    body:
      "It is the greatest of all mistakes to do nothing because you can only do little � do what you can.",
    author: "Sydney Smith"
  },
  {
    body: "I may not know everything, but everything is not known yet anyway.",
    author: "Byron Pulsifer"
  },
  {
    body: "He who obtains has little. He who scatters has much.",
    author: "Lao Tzu"
  },
  {
    body:
      "Do not give your attention to what others do or fail to do; give it to what you do or fail to do.",
    author: "Dhammapada"
  },
  {
    body:
      "Chaos is inherent in all compounded things. Strive on with diligence.",
    author: "Buddha"
  },
  {
    body:
      "Deep listening is miraculous for both listener and speaker.When someone receives us with open-hearted, non-judging, intensely interested listening, our spirits expand.",
    author: "Sue Patton Thoele"
  },
  {
    body:
      "A true friend is the most precious of all possessions and the one we take the least thought about acquiring.",
    author: "Francois de La Rochefoucauld"
  },
  {
    body: "Make the most of yourself, for that is all there is of you.",
    author: "Ralph Emerson"
  },
  {
    body: "History will be kind to me for I intend to write it.",
    author: "Winston Churchill"
  },
  {
    body:
      "As the rest of the world is walking out the door, your best friends are the ones walking in.",
    author: ""
  },
  {
    body:
      "These days people seek knowledge, not wisdom. Knowledge is of the past, wisdom is of the future.",
    author: "Vernon Cooper"
  },
  {
    body:
      "The person born with a talent they are meant to use will find their greatest happiness in using it.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.",
    author: "Washington Irving"
  },
  {
    body: "In all chaos there is a cosmos, in all disorder a secret order.",
    author: "Carl Jung"
  },
  {
    body: "The universe is made of stories, not atoms.",
    author: "Muriel Rukeyser"
  },
  {
    body:
      "It is on our failures that we base a new and different and better success.",
    author: "Havelock Ellis"
  },
  {
    body:
      "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.",
    author: "George Sheehan"
  },
  {
    body:
      "Ask yourself the secret of your success. Listen to your answer, and practice it.",
    author: "Richard Bach"
  },
  {
    body:
      "All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise.",
    author: "Anne Bronte"
  },
  {
    body: "The best way to pay for a lovely moment is to enjoy it.",
    author: "Richard Bach"
  },
  {
    body: "Respect should be earned by actions, and not acquired by years.",
    author: "Frank Wright"
  },
  {
    body: "I hear and I forget. I see and I remember. I do and I understand.",
    author: "Confucius"
  },
  {
    body:
      "We cannot change our memories, but we can change their meaning and the power they have over us.",
    author: "David Seamans"
  },
  {
    body:
      "Always tell the truth. That way, you don't have to remember what you said.",
    author: "Mark Twain"
  },
  {
    body: "Do something wonderful, people may imitate it.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
    author: "Thomas Jefferson"
  },
  {
    body: "You can do it if you believe you can!",
    author: "Napoleon Hill"
  },
  {
    body:
      "The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you're being self-indulgent.",
    author: "Paul Graham"
  },
  {
    body:
      "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
    author: "Napoleon Hill"
  },
  {
    body:
      "The trouble with most people is that they think with their hopes or fears or wishes rather than with their minds.",
    author: "Will Durant"
  },
  {
    body: "We shall never know all the good that a simple smile can do.",
    author: "Mother Teresa"
  },
  {
    body:
      "A lot of people give up just before theyre about to make it. You know you never know when that next obstacle is going to be the last one.",
    author: "Chuck Norris"
  },
  {
    body: "Sometimes the biggest act of courage is a small one.",
    author: "Lauren Raffo"
  },
  {
    body:
      "He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye.",
    author: "Buddha"
  },
  {
    body: "Let the beauty of what you love be what you do.",
    author: "Rumi"
  },
  {
    body:
      "The moment one gives close attention to anything, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
    author: "Henry Miller"
  },
  {
    body: "Strong beliefs win strong men, and then make them stronger.",
    author: "Richard Bach"
  },
  {
    body: "No man is free who is not master of himself.",
    author: "Epictetus"
  },
  {
    body:
      "Follow effective action with quiet reflection. From the quiet reflection will come even more effective action.",
    author: "Peter Drucker"
  },
  {
    body:
      "People are not lazy. They simply have impotent goals � that is, goals that do not inspire them.",
    author: "Tony Robbins"
  },
  {
    body:
      "You do not become good by trying to be good, but by finding the goodness that is already within you.",
    author: "Eckhart Tolle"
  },
  {
    body:
      "Winners have simply formed the habit of doing things losers don't like to do.",
    author: "Albert Gray"
  },
  {
    body: "Waste no more time arguing about what a good man should be. Be one.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "A bend in the road is not the end of the road...unless you fail to make the turn.",
    author: ""
  },
  {
    body: "Don't be afraid to go out on a limb. That's where the fruit is.",
    author: "H. Jackson Browne"
  },
  {
    body:
      "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
    author: "Napoleon Hill"
  },
  {
    body: "Keep true to the dreams of thy youth.",
    author: "Friedrich von Schiller"
  },
  {
    body: "Great talent finds happiness in execution.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "Happiness often sneaks in through a door you didn't know you left open.",
    author: "John Barrymore"
  },
  {
    body: "Decision is a risk rooted in the courage of being free.",
    author: "Paul Tillich"
  },
  {
    body:
      "There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded.",
    author: "Mark Twain"
  },
  {
    body:
      "The things that one most wants to do are the things that are probably most worth doing.",
    author: "Winifred Holtby"
  },
  {
    body:
      "Always bear in mind that your own resolution to succeed is more important than any one thing.",
    author: "Abraham Lincoln"
  },
  {
    body: "Think as a wise man but communicate in the language of the people.",
    author: "William Yeats"
  },
  {
    body: "He who obtains has little. He who scatters has much.",
    author: "Lao Tzu"
  },
  {
    body:
      "On every thorn, delightful wisdom grows, In every rill a sweet instruction flows.",
    author: "Edward Young"
  },
  {
    body:
      "Life is like a sewer. What you get out of it depends on what you put into it.",
    author: "Tom Lehrer"
  },
  {
    body:
      "Setting an example is not the main means of influencing another, it is the only means.",
    author: "Albert Einstein"
  },
  {
    body:
      "I want you to be everything that's you, deep at the center of your being.",
    author: "Confucius"
  },
  {
    body:
      "It has never been my object to record my dreams, just to realize them.",
    author: "Man Ray"
  },
  {
    body:
      "Take things as they are. Punch when you have to punch. Kick when you have to kick.",
    author: "Bruce Lee"
  },
  {
    body:
      "What is necessary to change a person is to change his awareness of himself.",
    author: "Abraham Maslow"
  },
  {
    body:
      "To forgive is to set a prisoner free and realize that prisoner was you.",
    author: "Lewis B. Smedes"
  },
  {
    body: "There is no greater harm than that of time wasted.",
    author: "Michelangelo"
  },
  {
    body:
      "Happiness mainly comes from our own attitude, rather than from external factors.",
    author: "Dalai Lama"
  },
  {
    body: "Experience is simply the name we give our mistakes.",
    author: "Oscar Wilde"
  },
  {
    body:
      "To study and not think is a waste. To think and not study is dangerous.",
    author: "Confucius"
  },
  {
    body:
      "Life is not measured by the breaths we take, but by the moments that take our breath.",
    author: ""
  },
  {
    body: "Chaos and Order are not enemies, only opposites.",
    author: "Richard Garriott"
  },
  {
    body: "You must welcome change as the rule but not as your ruler.",
    author: "Denis Waitley"
  },
  {
    body:
      "Progress always involves risks. You can't steal second base and keep your foot on first.",
    author: "Frederick Wilcox"
  },
  {
    body:
      "Perseverance is a great element of success. If you only knock long enough and loud enough at the gate, you are sure to wake up somebody.",
    author: "Henry Longfellow"
  },
  {
    body: "The secret of success is constancy to purpose.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "Only through our connectedness to others can we really know and enhance the self. And only through working on the self can we begin to enhance our connectedness to others.",
    author: "Harriet Lerner"
  },
  {
    body:
      "It is only with the heart that one can see rightly, what is essential is invisible to the eye.",
    author: "Antoine de Saint-Exupery"
  },
  {
    body: "Rainbows apologize for angry skies.",
    author: "Sylvia Voirol"
  },
  {
    body:
      "Fear grows in darkness; if you think theres a bogeyman around, turn on the light.",
    author: "Dorothy Thompson"
  },
  {
    body:
      "He who deliberates fully before taking a step will spend his entire life on one leg.",
    author: "Chinese proverb"
  },
  {
    body:
      "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
    author: ""
  },
  {
    body: "We are Divine enough to ask and we are important enough to receive.",
    author: "Wayne Dyer"
  },
  {
    body: "Be kind whenever possible. It is always possible.",
    author: "Dalai Lama"
  },
  {
    body:
      "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
    author: "Bernard Shaw"
  },
  {
    body: "Peace begins with a smile.",
    author: "Mother Teresa"
  },
  {
    body:
      "Every sixty seconds you spend angry, upset or mad, is a full minute of happiness you�ll never get back.",
    author: ""
  },
  {
    body: "Be your own hero, it's cheaper than a movie ticket.",
    author: "Doug Horton"
  },
  {
    body: "Kind words will unlock an iron door.",
    author: "Turkish proverb"
  },
  {
    body: "Turn your face toward the sun and the shadows will fall behind you.",
    author: "Maori proverb"
  },
  {
    body: "Much wisdom often goes with fewer words.",
    author: "Sophocles"
  },
  {
    body: "Great talent finds happiness in execution.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Emerson"
  },
  {
    body: "Better to have loved and lost, than to have never loved at all.",
    author: "St. Augustine"
  },
  {
    body:
      "The things that one most wants to do are the things that are probably most worth doing.",
    author: "Winifred Holtby"
  },
  {
    body:
      "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
    author: "Buddha"
  },
  {
    body:
      "If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace.",
    author: "Dalai Lama"
  },
  {
    body:
      "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.",
    author: "Winston Churchill"
  },
  {
    body:
      "Go to your bosom: Knock there, and ask your heart what it doth know.",
    author: "William Shakespeare"
  },
  {
    body:
      "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
    author: "Leonardo da Vinci"
  },
  {
    body:
      "Things turn out best for those who make the best of the way things turn out.",
    author: "Jack Buck"
  },
  {
    body:
      "As the rest of the world is walking out the door, your best friends are the ones walking in.",
    author: ""
  },
  {
    body: "Stay away from what might have been and look at what will be.",
    author: "Marsha Petrie Sue"
  },
  {
    body:
      "Happiness is a perfume you cannot pour on others without getting a few drops on yourself.",
    author: "Ralph Waldo Emerson"
  },
  {
    body:
      "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.",
    author: "Robert Louis Stevenson"
  },
  {
    body: "No man can succeed in a line of endeavor which he does not like.",
    author: "Napoleon Hill"
  },
  {
    body: "Don't wait for people to be friendly. Show them how.",
    author: ""
  },
  {
    body: "Tension is who you think you should be. Relaxation is who you are.",
    author: "Chinese proverb"
  },
  {
    body: "Can you imagine what I would do if I could do all I can?",
    author: "Sun Tzu"
  },
  {
    body:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas Edison"
  },
  {
    body:
      "Take time to deliberate, but when the time for action has arrived, stop thinking and go in.",
    author: "Napoleon Bonaparte"
  },
  {
    body:
      "Were here for a reason. I believe a bit of the reason is to throw little torches out to lead people through the dark.",
    author: "Whoopi Goldberg"
  },
  {
    body:
      "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more",
    author: "Anthony Robbins"
  },
  {
    body:
      "To effectively communicate, we must realize that we are all different in the way we perceive the world and use this understanding as a guide to our communication with others.",
    author: "Anthony Robbins"
  },
  {
    body: "Once you choose hope, anythings possible.",
    author: "Christopher Reeve"
  },
  {
    body: "Ability will never catch up with the demand for it.",
    author: "Confucius"
  },
  {
    body:
      "He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye.",
    author: "Buddha"
  },
  {
    body:
      "Until you value yourself, you won't value your time. Until you value your time, you won't do anything with it.",
    author: "M. Scott Peck"
  },
  {
    body: "Yeah we all shine on, like the moon, and the stars, and the sun.",
    author: "John Lennon"
  },
  {
    body:
      "If one does not know to which port is sailing, no wind is favorable.",
    author: "Seneca"
  },
  {
    body:
      "Never say there is nothing beautiful in the world any more. There is always something to make you wonder in the shape of a tree, the trembling of a leaf.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "Intuition is the very force or activity of the soul in its experience through whatever has been the experience of the soul itself.",
    author: "Henry Reed"
  },
  {
    body: "It is impossible to feel grateful and depressed in the same moment.",
    author: "Naomi Williams"
  },
  {
    body:
      "Setting goals is the first step in turning the invisible into the visible.",
    author: "Tony Robbins"
  },
  {
    body: "The day always looks brighter from behind a smile.",
    author: ""
  },
  {
    body: "Absence makes the heart grow fonder.",
    author: "Haynes Bayly"
  },
  {
    body: "Follow your instincts. That is where true wisdom manifests itself.",
    author: "Oprah Winfrey"
  },
  {
    body:
      "We cannot change our memories, but we can change their meaning and the power they have over us.",
    author: "David Seamans"
  },
  {
    body:
      "When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Without passion man is a mere latent force and possibility, like the flint which awaits the shock of the iron before it can give forth its spark.",
    author: "Amiel"
  },
  {
    body:
      "The longer we dwell on our misfortunes, the greater is their power to harm us.",
    author: "Voltaire"
  },
  {
    body:
      "Courage is not the absence of fear, but simply moving on with dignity despite that fear.",
    author: "Pat Riley"
  },
  {
    body:
      "Life a culmination of the past, an awareness of the present, an indication of the future beyond knowledge, the quality that gives a touch of divinity to matter.",
    author: "Charles A. Lindbergh"
  },
  {
    body: "A prudent question is one half of wisdom.",
    author: "Francis Bacon"
  },
  {
    body:
      "All truths are easy to understand once they are discovered; the point is to discover them.",
    author: "Galileo Galilei"
  },
  {
    body:
      "First say to yourself what you would be; and then do what you have to do.",
    author: "Epictetus"
  },
  {
    body: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra"
  },
  {
    body: "Don't let what you can't do stop you from doing what you can do.",
    author: ""
  },
  {
    body:
      "Four steps to achievement: Plan purposefully. Prepare prayerfully. Proceed positively. Pursue persistently.",
    author: "William Arthur Ward"
  },
  {
    body:
      "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
    author: ""
  },
  {
    body: "Joy is the best makeup.",
    author: "Anne Lamott"
  },
  {
    body:
      "The smallest act of kindness is worth more than the grandest intention.",
    author: "Oscar Wilde"
  },
  {
    body: "The mind unlearns with difficulty what it has long learned.",
    author: "Seneca"
  },
  {
    body:
      "We know from science that nothing in the universe exists as an isolated or independent entity.",
    author: "Margaret Wheatley"
  },
  {
    body:
      "Every great advance in science has issued from a new audacity of the imagination.",
    author: "John Dewey"
  },
  {
    body:
      "Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather.",
    author: "John Ruskin"
  },
  {
    body:
      "Everything in the universe goes by indirection. There are no straight lines.",
    author: "Ralph Emerson"
  },
  {
    body:
      "What do we live for, if it is not to make life less difficult for each other?",
    author: "George Eliot"
  },
  {
    body:
      "When we feel love and kindness toward others, it not only makes others feel loved and cared for, but it helps us also to develop inner happiness and peace.",
    author: "Tenzin Gyatso"
  },
  {
    body: "In all chaos there is a cosmos, in all disorder a secret order.",
    author: "Carl Jung"
  },
  {
    body: "If you wish to be a writer, write.",
    author: "Epictetus"
  },
  {
    body:
      "Everything you are against weakens you. Everything you are for empowers you.",
    author: "Wayne Dyer"
  },
  {
    body:
      "All difficult things have their origin in that which is easy, and great things in that which is small.",
    author: "Lao Tzu"
  },
  {
    body: "It can't be spring if your heart is filled with past failures.",
    author: "Byron Pulsifer"
  },
  {
    body: "We may encounter many defeats but we must not be defeated.",
    author: "Maya Angelou"
  },
  {
    body:
      "Whenever something negative happens to you, there is a deep lesson concealed within it.",
    author: "Eckhart Tolle"
  },
  {
    body:
      "If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him.",
    author: "Ralph Emerson"
  },
  {
    body: "Arriving at one point is the starting point to another.",
    author: "John Dewey"
  },
  {
    body:
      "Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.",
    author: "Richard Bach"
  },
  {
    body: "Each day provides its own gifts.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "Logic will get you from A to B. Imagination will take you everywhere.",
    author: "Albert Einstein"
  },
  {
    body:
      "A man of ability and the desire to accomplish something can do anything.",
    author: "Donald Kircher"
  },
  {
    body:
      "Our deepest wishes are whispers of our authentic selves. We must learn to respect them. We must learn to listen.",
    author: "Sarah Breathnach"
  },
  {
    body: "Arriving at one point is the starting point to another.",
    author: "John Dewey"
  },
  {
    body:
      "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.",
    author: "Confucius"
  },
  {
    body: "The mind unlearns with difficulty what it has long learned.",
    author: "Seneca"
  },
  {
    body:
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    author: "Marie Curie"
  },
  {
    body:
      "Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.",
    author: "Richard Bach"
  },
  {
    body:
      "All perceiving is also thinking, all reasoning is also intuition, all observation is also invention.",
    author: "Rudolf Arnheim"
  },
  {
    body: "Inspiration exists, but it has to find us working.",
    author: "Pablo Picasso"
  },
  {
    body:
      "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
    author: "Etty Hillesum"
  },
  {
    body: "Only when we are no longer afraid do we begin to live.",
    author: "Dorothy Thompson"
  },
  {
    body:
      "If we are not fully ourselves, truly in the present moment, we miss everything.",
    author: "Thich Nhat Hanh"
  },
  {
    body: "We must not allow ourselves to become like the system we oppose.",
    author: "Bishop Desmond Tutu"
  },
  {
    body:
      "He who lives in harmony with himself lives in harmony with the universe.",
    author: "Marcus Aurelius"
  },
  {
    body: "Chaos and Order are not enemies, only opposites.",
    author: "Richard Garriott"
  },
  {
    body: "Never let lack of money interfere with having fun.",
    author: ""
  },
  {
    body:
      "Begin at once to live and count each separate day as a separate life.",
    author: "Seneca"
  },
  {
    body: "The world is but a canvas to the imagination.",
    author: "Henry Thoreau"
  },
  {
    body:
      "Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict.",
    author: "William Channing"
  },
  {
    body: "We choose our destiny in the way we treat others.",
    author: "Wit"
  },
  {
    body: "Don't be afraid to go out on a limb. That's where the fruit is.",
    author: "H. Jackson Browne"
  },
  {
    body:
      "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
    author: "Bernard Shaw"
  },
  {
    body: "We do what we do because we believe.",
    author: ""
  },
  {
    body:
      "The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you're being self-indulgent.",
    author: "Paul Graham"
  },
  {
    body: "Never ignore a gut feeling, but never believe that it's enough.",
    author: "Robert Heller"
  },
  {
    body: "All I can say about life is, Oh God, enjoy it!",
    author: "Bob Newhart"
  },
  {
    body:
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    author: "Marie Curie"
  },
  {
    body:
      "Ignorant men don't know what good they hold in their hands until they've flung it away.",
    author: "Sophocles"
  },
  {
    body:
      "The world has the habit of making room for the man whose actions show that he knows where he is going.",
    author: "Napoleon Hill"
  },
  {
    body: "You are special, you are unique, you are the best!",
    author: "Cathy Pulsifer"
  },
  {
    body:
      "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
    author: "Richard Bach"
  },
  {
    body:
      "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "Everything that irritates us about others can lead us to an understanding about ourselves.",
    author: "Carl Jung"
  },
  {
    body:
      "Thats the risk you take if you change: that people you've been involved with won't like the new you. But other people who do will come along.",
    author: "Lisa Alther"
  },
  {
    body:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha"
  },
  {
    body:
      "To be happy is to be able to become aware of oneself without fright.",
    author: "Walter Benjamin"
  },
  {
    body:
      "Strength to carry on despite the odds means you have faith in your own abilities and know how.",
    author: "Byron Pulsifer"
  },
  {
    body: "Make the most of yourself for that is all there is of you.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Men of perverse opinion do not know the excellence of what is in their hands, till some one dash it from them.",
    author: "Sophocles"
  },
  {
    body: "No matter how hard the past, you can always begin again.",
    author: "Buddha"
  },
  {
    body:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    body: "Be gentle first with yourself if you wish to be gentle with others.",
    author: "Lama Yeshe"
  },
  {
    body: "A man who doesn't trust himself can never really trust anyone else.",
    author: "Cardinal Retz"
  },
  {
    body: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  },
  {
    body: "To be wronged is nothing unless you continue to remember it.",
    author: "Confucius"
  },
  {
    body:
      "With realization of ones own potential and self-confidence in ones ability, one can build a better world.",
    author: "Dalai Lama"
  },
  {
    body:
      "Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?",
    author: "Richard Bach"
  },
  {
    body: "Someone is special only if you tell them.",
    author: "Byron Pulsifer"
  },
  {
    body: "Joy is the best makeup.",
    author: "Anne Lamott"
  },
  {
    body: "We make our own fortunes and we call them fate.",
    author: "Benjamin Disraeli"
  },
  {
    body: "I hear and I forget. I see and I remember. I do and I understand.",
    author: "Confucius"
  },
  {
    body: "Myths which are believed in tend to become true.",
    author: "George Orwell"
  },
  {
    body:
      "Leaders aren't born they are made. And they are made just like anything else, through hard work. And that's the price well have to pay to achieve that goal, or any goal.",
    author: "Vince Lombardi"
  },
  {
    body: "It takes courage to grow up and become who you really are.",
    author: "E. E. Cummings"
  },
  {
    body: "Always seek out the seed of triumph in every adversity.",
    author: "Og Mandino"
  },
  {
    body:
      "At the center of your being you have the answer; you know who you are and you know what you want.",
    author: "Lao Tzu"
  },
  {
    body:
      "Rather than wishing for change, you first must be prepared to change.",
    author: "Catherine Pulsifer"
  },
  {
    body: "Always be smarter than the people who hire you.",
    author: "Lena Horne"
  },
  {
    body:
      "I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on them unless they act.",
    author: "Buddha"
  },
  {
    body:
      "Everything can be taken from a man but ... the last of the human freedoms � to choose ones attitude in any given set of circumstances, to choose ones own way.",
    author: "Victor Frankl"
  },
  {
    body:
      "It's important to know that words don't move mountains. Work, exacting work moves mountains.",
    author: "Danilo Dolci"
  },
  {
    body: "Fame usually comes to those who are thinking about something else.",
    author: "Holmes"
  },
  {
    body:
      "With realization of ones own potential and self-confidence in ones ability, one can build a better world.",
    author: "Dalai Lama"
  },
  {
    body: "I may not know everything, but everything is not known yet anyway.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Know how to listen, and you will profit even from those who talk badly.",
    author: "Plutarch"
  },
  {
    body:
      "First comes thought; then organization of that thought, into ideas and plans; then transformation of those plans into reality. The beginning, as you will observe, is in your imagination.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace and gratitude.",
    author: "Denis Waitley"
  },
  {
    body: "It is never too late to be what you might have been.",
    author: "George Eliot"
  },
  {
    body: "Every gift from a friend is a wish for your happiness.",
    author: "Richard Bach"
  },
  {
    body: "Only do what your heart tells you.",
    author: "Princess Diana"
  },
  {
    body:
      "To get something you never had, you have to do something you never did.",
    author: ""
  },
  {
    body: "Make the most of yourself, for that is all there is of you.",
    author: "Ralph Emerson"
  },
  {
    body:
      "The superior man acts before he speaks, and afterwards speaks according to his action.",
    author: "Confucius"
  },
  {
    body:
      "A single conversation across the table with a wise person is worth a months study of books.",
    author: "Chinese proverb"
  },
  {
    body:
      "All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable.",
    author: "Kathleen Norris"
  },
  {
    body: "Turn your face toward the sun and the shadows will fall behind you.",
    author: "Maori proverb"
  },
  {
    body:
      "The beginning of wisdom is found in doubting; by doubting we come to the question, and by seeking we may come upon the truth.",
    author: "Pierre Abelard"
  },
  {
    body:
      "One who asks a question is a fool for five minutes; one who does not ask a question remains a fool forever.",
    author: ""
  },
  {
    body:
      "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
    author: "Charlotte Gilman"
  },
  {
    body:
      "The difference between what we do and what we are capable of doing would suffice to solve most of the worlds problems.",
    author: "Mohandas Gandhi"
  },
  {
    body:
      "You can never cross the ocean unless you have the courage to lose sight of the shore.",
    author: ""
  },
  {
    body:
      "Everyone can taste success when the going is easy, but few know how to taste victory when times get tough.",
    author: "Byron Pulsifer"
  },
  {
    body: "Myths which are believed in tend to become true.",
    author: "George Orwell"
  },
  {
    body: "What we think, we become.",
    author: "Buddha"
  },
  {
    body:
      "The beginning of knowledge is the discovery of something we do not understand.",
    author: "Frank Herbert"
  },
  {
    body: "Peace begins with a smile.",
    author: "Mother Teresa"
  },
  {
    body:
      "Work for something because it is good, not just because it stands a chance to succeed.",
    author: "Vaclav Havel"
  },
  {
    body:
      "Real magic in relationships means an absence of judgement of others.",
    author: "Wayne Dyer"
  },
  {
    body:
      "The world cares very little about what a man or woman knows; it is what a man or woman is able to do that counts.",
    author: "Booker Washington"
  },
  {
    body:
      "Every man takes the limits of his own field of vision for the limits of the world.",
    author: "Arthur Schopenhauer"
  },
  {
    body: "Who sows virtue reaps honour.",
    author: "Leonardo da Vinci"
  },
  {
    body: "Knowledge rests not upon truth alone, but upon error also.",
    author: "Carl Jung"
  },
  {
    body:
      "Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you can't build on it; it's only for wallowing in.",
    author: "Katherine Mansfield"
  },
  {
    body:
      "Be what you are. This is the first step toward becoming better than you are.",
    author: "Julius Charles Hare"
  },
  {
    body: "Minds are like parachutes. They only function when open.",
    author: "Thomas Dewar"
  },
  {
    body: "A man is not old as long as he is seeking something.",
    author: "Edmond Rostand"
  },
  {
    body:
      "Logic will get you from A to B. Imagination will take you everywhere.",
    author: "Albert Einstein"
  },
  {
    body: "Faith in oneself is the best and safest course.",
    author: "Michelangelo"
  },
  {
    body:
      "In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true.",
    author: "Buddha"
  },
  {
    body:
      "The Creator has not given you a longing to do that which you have no ability to do.",
    author: "Orison Marden"
  },
  {
    body:
      "Never regret. If it's good, it's wonderful. If it's bad, it's experience.",
    author: "Victoria Holt"
  },
  {
    body:
      "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
    author: "Helen Keller"
  },
  {
    body:
      "Our deepest wishes are whispers of our authentic selves. We must learn to respect them. We must learn to listen.",
    author: "Sarah Breathnach"
  },
  {
    body: "When deeds and words are in accord, the whole world is transformed.",
    author: "Chuang Tzu"
  },
  {
    body:
      "Kind words can be short and easy to speak but their echoes are truly endless.",
    author: "Mother Teresa"
  },
  {
    body: "Take heed: you do not find what you do not seek.",
    author: "English proverb"
  },
  {
    body: "Yeah we all shine on, like the moon, and the stars, and the sun.",
    author: "John Lennon"
  },
  {
    body: "No man was ever wise by chance.",
    author: "Seneca"
  },
  {
    body:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Walt Emerson"
  },
  {
    body: "Better to have loved and lost, than to have never loved at all.",
    author: "St. Augustine"
  },
  {
    body: "For everything that lives is holy, life delights in life.",
    author: "William Blake"
  },
  {
    body:
      "Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer.",
    author: "Robert Graves"
  },
  {
    body:
      "The most important thing is transforming our minds, for a new way of thinking, a new outlook: we should strive to develop a new inner world.",
    author: "Dalai Lama"
  },
  {
    body: "Today is the tomorrow we worried about yesterday.",
    author: ""
  },
  {
    body:
      "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.",
    author: "Hannah Arendt"
  },
  {
    body: "Peace comes from within. Do not seek it without.",
    author: "Buddha"
  },
  {
    body:
      "Strength does not come from physical capacity. It comes from an indomitable will.",
    author: "Mahatma Gandhi"
  },
  {
    body: "Our passion is our strength.",
    author: "Billie Armstrong"
  },
  {
    body:
      "By nature man hates change; seldom will he quit his old home till it has actually fallen around his ears.",
    author: "Thomas Carlyle"
  },
  {
    body: "Wisdom is the supreme part of happiness.",
    author: "Sophocles"
  },
  {
    body:
      "Happiness often sneaks in through a door you didn't know you left open.",
    author: "John Barrymore"
  },
  {
    body:
      "With the realization of ones own potential and self-confidence in ones ability, one can build a better world.",
    author: "Dalai Lama"
  },
  {
    body:
      "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.",
    author: "Joseph Roux"
  },
  {
    body:
      "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.",
    author: "Blaise Pascal"
  },
  {
    body: "Take heed: you do not find what you do not seek.",
    author: "English proverb"
  },
  {
    body:
      "Fear of failure is one attitude that will keep you at the same point in your life.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "In rivers, the water that you touch is the last of what has passed and the first of that which comes; so with present time.",
    author: "Leonardo da Vinci"
  },
  {
    body:
      "I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on them unless they act.",
    author: "Buddha"
  },
  {
    body: "Spring is a time for rebirth and the fulfilment of new life.",
    author: "Byron Pulsifer"
  },
  {
    body: "Being angry never solves anything.",
    author: "Catherine Pulsifer"
  },
  {
    body:
      "My mama always said: life's like a box of chocolate � you never know what you gonna get.",
    author: "Forrest Gump"
  },
  {
    body:
      "There is nothing happens to any person but what was in his power to go through with.",
    author: "Marcus Aurelius"
  },
  {
    body: "It can't be spring if your heart is filled with past failures.",
    author: "Byron Pulsifer"
  },
  {
    body: "From little acorns mighty oaks do grow.",
    author: "American proverb"
  },
  {
    body: "When deeds speak, words are nothing.",
    author: "African proverb"
  },
  {
    body:
      "Peace cannot be kept by force. It can only be achieved by understanding.",
    author: "Albert Einstein"
  },
  {
    body: "Nature is a mutable cloud which is always and never the same.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Be faithful in small things because it is in them that your strength lies.",
    author: "Mother Teresa"
  },
  {
    body:
      "There are two ways to slide easily through life: to believe everything or to doubt everything; both ways save us from thinking.",
    author: "Alfred Korzybski"
  },
  {
    body: "Society develops wit, but its contemplation alone forms genius.",
    author: "Madame de Stael"
  },
  {
    body:
      "The conditions of conquest are always easy. We have but to toil awhile, endure awhile, believe always, and never turn back.",
    author: "Seneca"
  },
  {
    body:
      "Try not to become a man of success, but rather try to become a man of value.",
    author: "Albert Einstein"
  },
  {
    body:
      "It's so simple to be wise. Just think of something stupid to say and then don't say it.",
    author: "Sam Levenson"
  },
  {
    body: "Life is what happens while you are making other plans.",
    author: "John Lennon"
  },
  {
    body: "Be your own hero, it's cheaper than a movie ticket.",
    author: "Doug Horton"
  },
  {
    body:
      "One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "The art of progress is to preserve order amid change, and to preserve change amid order.",
    author: "Alfred Whitehead"
  },
  {
    body:
      "The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work.",
    author: "Dalai Lama"
  },
  {
    body:
      "Things turn out best for those who make the best of the way things turn out.",
    author: "Jack Buck"
  },
  {
    body:
      "We make a living by what we get, but we make a life by what we give.",
    author: "Winston Churchill"
  },
  {
    body: "Can you imagine what I would do if I could do all I can?",
    author: "Sun Tzu"
  },
  {
    body: "The two most powerful warriors are patience and time.",
    author: "Leo Tolstoy"
  },
  {
    body:
      "If you break your neck, if you have nothing to eat, if your house is on fire, then you got a problem. Everything else is inconvenience.",
    author: "Robert Fulghum"
  },
  {
    body:
      "The smallest act of kindness is worth more than the grandest intention.",
    author: "Oscar Wilde"
  },
  {
    body:
      "Make the best use of what is in your power, and take the rest as it happens.",
    author: "Epictetus"
  },
  {
    body:
      "If you want to study yourself � look into the hearts of other people. If you want to study other people � look into your own heart.",
    author: "Friedrich von Schiller"
  },
  {
    body:
      "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
    author: "Dale Carnegie"
  },
  {
    body:
      "Your destiny isn't just fate; it is how you use your own developed abilities to get what you want.",
    author: "Byron Pulsifer"
  },
  {
    body: "Nobody will believe in you unless you believe in yourself.",
    author: "Liberace"
  },
  {
    body:
      "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.",
    author: "Naguib Mahfouz"
  },
  {
    body: "Open minds lead to open doors.",
    author: ""
  },
  {
    body: "You are special, you are unique, you are the best!",
    author: "Cathy Pulsifer"
  },
  {
    body:
      "The most important thing is transforming our minds, for a new way of thinking, a new outlook: we should strive to develop a new inner world.",
    author: "Dalai Lama"
  },
  {
    body:
      "No matter how carefully you plan your goals they will never be more that pipe dreams unless you pursue them with gusto.",
    author: "W. Clement Stone"
  },
  {
    body:
      "Real magic in relationships means an absence of judgement of others.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world.",
    author: "Blaise Pascal"
  },
  {
    body:
      "Maxim for life: You get treated in life the way you teach people to treat you.",
    author: "Wayne Dyer"
  },
  {
    body:
      "With every experience, you alone are painting your own canvas, thought by thought, choice by choice.",
    author: "Oprah Winfrey"
  },
  {
    body: "Make the most of yourself for that is all there is of you.",
    author: "Ralph Emerson"
  },
  {
    body: "Happiness is found in doing, not merely possessing.",
    author: "Napoleon Hill"
  },
  {
    body:
      "The first duty of a human being is to assume the right functional relationship to society � more briefly, to find your real job, and do it.",
    author: "Charlotte Perkins Gilman"
  },
  {
    body: "The world is but a canvas to the imagination.",
    author: "Henry Thoreau"
  },
  {
    body: "You'll see it when you believe it.",
    author: "Wayne Dyer"
  },
  {
    body:
      "We are the leaves of one branch, the drops of one sea, the flowers of one garden.",
    author: "Jean Lacordaire"
  },
  {
    body: "We make our own fortunes and we call them fate.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.",
    author: "Morris West"
  },
  {
    body:
      "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle"
  },
  {
    body: "A prudent question is one half of wisdom.",
    author: "Francis Bacon"
  },
  {
    body: "Experience keeps a dear school, but fools will learn in no other.",
    author: "Benjamin Franklin"
  },
  {
    body:
      "The poor man is not he who is without a cent, but he who is without a dream.",
    author: "Harry Kemp"
  },
  {
    body:
      "The key to growth is the introduction of higher dimensions of consciousness into our awareness.",
    author: "Lao Tzu"
  },
  {
    body:
      "Thought is the blossom; language the bud; action the fruit behind it.",
    author: "Ralph Emerson"
  },
  {
    body:
      "True happiness means forging a strong spirit that is undefeated, no matter how trying our circumstances.",
    author: "Daisaku Ikeda"
  },
  {
    body:
      "Your work is to discover your world and then with all your heart give yourself to it.",
    author: "Buddha"
  },
  {
    body:
      "There is nothing so useless as doing efficiently that which should not be done at all.",
    author: "Peter Drucker"
  },
  {
    body:
      "Neither a lofty degree of intelligence nor imagination nor both together go to the making of genius. Love, love, love, that is the soul of genius.",
    author: "Wolfgang Amadeus Mozart"
  },
  {
    body:
      "We know from science that nothing in the universe exists as an isolated or independent entity.",
    author: "Margaret Wheatley"
  },
  {
    body:
      "First comes thought; then organization of that thought, into ideas and plans; then transformation of those plans into reality. The beginning, as you will observe, is in your imagination.",
    author: "Napoleon Hill"
  },
  {
    body: "A rolling stone gathers no moss.",
    author: "Publilius Syrus"
  },
  {
    body: "Every problem has a gift for you in its hands.",
    author: "Richard Bach"
  },
  {
    body:
      "Life's challenges are not supposed to paralyse you, they're supposed to help you discover who you are.",
    author: "Bernice Reagon"
  },
  {
    body:
      "Everything in the universe goes by indirection. There are no straight lines.",
    author: "Ralph Emerson"
  },
  {
    body: "To be wronged is nothing unless you continue to remember it.",
    author: "Confucius"
  },
  {
    body:
      "Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away.",
    author: "Robert Fulghum"
  },
  {
    body: "If a man does his best, what else is there?",
    author: "George Patton"
  },
  {
    body:
      "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    author: "Leonardo da Vinci"
  },
  {
    body:
      "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
    author: "Richard Bach"
  },
  {
    body:
      "One of the advantages of being disorderly is that one is constantly making exciting discoveries.",
    author: "A. A. Milne"
  },
  {
    body: "Take heed: you do not find what you do not seek.",
    author: "English proverb"
  },
  {
    body: "If you can't feed a hundred people, then feed just one.",
    author: "Mother Teresa"
  },
  {
    body:
      "Wisdom is knowing what to do next; Skill is knowing how ot do it, and Virtue is doing it.",
    author: "David Jordan"
  },
  {
    body:
      "Although there may be tragedy in your life, there's always a possibility to triumph. It doesn't matter who you are, where you come from. The ability to triumph begins with you. Always.",
    author: "Oprah Winfrey"
  },
  {
    body:
      "To live a pure unselfish life, one must count nothing as ones own in the midst of abundance.",
    author: "Buddha"
  },
  {
    body:
      "All the world is a stage, And all the men and women merely players.They have their exits and entrances; Each man in his time plays many parts.",
    author: "William Shakespeare"
  },
  {
    body:
      "As we are liberated from our own fear, our presence automatically liberates others.",
    author: "Nelson Mandela"
  },
  {
    body:
      "Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.",
    author: "Gloria Steinem"
  },
  {
    body: "It isn't where you come from, it's where you're going that counts.",
    author: "Ella Fitzgerald"
  },
  {
    body: "Silence is a source of great strength.",
    author: "Lao Tzu"
  },
  {
    body:
      "To be tested is good. The challenged life may be the best therapist.",
    author: "Gail Sheehy"
  },
  {
    body: "Can you imagine what I would do if I could do all I can?",
    author: "Sun Tzu"
  },
  {
    body:
      "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    author: "Leonardo da Vinci"
  },
  {
    body:
      "Opportunity often comes disguised in the form of misfortune, or temporary defeat.",
    author: "Napoleon Hill"
  },
  {
    body: "To bring anything into your life, imagine that it's already there.",
    author: "Richard Bach"
  },
  {
    body: "The most successful people are those who are good at plan B.",
    author: "James Yorke"
  },
  {
    body:
      "Criticism is something you can easily avoid by saying nothing, doing nothing, and being nothing.",
    author: "Aristotle"
  },
  {
    body:
      "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.",
    author: "Nikola Tesla"
  },
  {
    body: "Mountains cannot be surmounted except by winding paths.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "Courage is not about taking risks unknowingly but putting your own being in front of challenges that others may not be able to.",
    author: "Byron Pulsifer"
  },
  {
    body: "Only do what your heart tells you.",
    author: "Princess Diana"
  },
  {
    body: "Smile, breathe, and go slowly.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "To fly as fast as thought, you must begin by knowing that you have already arrived.",
    author: "Richard Bach"
  },
  {
    body:
      "To speak gratitude is courteous and pleasant, to enact gratitude is generous and noble, but to live gratitude is to touch Heaven.",
    author: "Johannes Gaertner"
  },
  {
    body:
      "Obstacles are those things you see when you take your eyes off the goal.",
    author: "Hannah More"
  },
  {
    body:
      "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
    author: "Michelangelo"
  },
  {
    body:
      "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
    author: "Leonardo da Vinci"
  },
  {
    body:
      "In rivers, the water that you touch is the last of what has passed and the first of that which comes; so with present time.",
    author: "Leonardo da Vinci"
  },
  {
    body: "Kind words do not cost much. Yet they accomplish much.",
    author: "Blaise Pascal"
  },
  {
    body: "Great ideas often receive violent opposition from mediocre minds.",
    author: "Albert Einstein"
  },
  {
    body:
      "The winds and waves are always on the side of the ablest navigators.",
    author: "Edward Gibbon"
  },
  {
    body:
      "We can change our lives. We can do, have, and be exactly what we wish.",
    author: "Tony Robbins"
  },
  {
    body:
      "Courage is not the absence of fear, but simply moving on with dignity despite that fear.",
    author: "Pat Riley"
  },
  {
    body:
      "Never do things others can do and will do, if there are things others cannot do or will not do.",
    author: "Amelia Earhart"
  },
  {
    body:
      "The poor man is not he who is without a cent, but he who is without a dream.",
    author: "Harry Kemp"
  },
  {
    body: "Only those who dare to fail greatly can ever achieve greatly.",
    author: "Robert Kennedy"
  },
  {
    body:
      "Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?",
    author: "Confucius"
  },
  {
    body: "You are the only person on earth who can use your ability.",
    author: "Zig Ziglar"
  },
  {
    body:
      "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.",
    author: "Morris West"
  },
  {
    body: "When you lose, don't lose the lesson.",
    author: ""
  },
  {
    body: "Kindness is the greatest wisdom.",
    author: ""
  },
  {
    body: "We may encounter many defeats but we must not be defeated.",
    author: "Maya Angelou"
  },
  {
    body: "Every day may not be good, but there's something good in every day.",
    author: ""
  },
  {
    body: "A stumble may prevent a fall.",
    author: ""
  },
  {
    body:
      "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
    author: "Henry Longfellow"
  },
  {
    body:
      "Nothing is so strong as gentleness. Nothing is so gentle as real strength.",
    author: "Frances de Sales"
  },
  {
    body: "The pain passes, but the beauty remains.",
    author: "Pierre Auguste Renoir"
  },
  {
    body:
      "One secret of success in life is for a man to be ready for his opportunity when it comes.",
    author: "Benjamin Disraeli"
  },
  {
    body: "Meaning is not what you start with but what you end up with.",
    author: "Peter Elbow"
  },
  {
    body:
      "The foolish man seeks happiness in the distance, the wise grows it under his feet.",
    author: "James Oppenheim"
  },
  {
    body:
      "Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind.",
    author: "Paavo Nurmi"
  },
  {
    body:
      "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
    author: "Sai Baba"
  },
  {
    body: "You can't trust without risk but neither can you live in a cocoon.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Take things as they are. Punch when you have to punch. Kick when you have to kick.",
    author: "Bruce Lee"
  },
  {
    body: "To know oneself is to study oneself in action with another person.",
    author: "Bruce Lee"
  },
  {
    body: "No man can succeed in a line of endeavor which he does not like.",
    author: "Napoleon Hill"
  },
  {
    body:
      "If one is lucky, a solitary fantasy can totally transform one million realities.",
    author: "Maya Angelou"
  },
  {
    body:
      "Look forward to spring as a time when you can start to see what nature has to offer once again.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Neither genius, fame, nor love show the greatness of the soul. Only kindness can do that.",
    author: "Jean Lacordaire"
  },
  {
    body:
      "In the end we retain from our studies only that which we practically apply.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "Genuine love should first be directed at oneself � if we do not love ourselves, how can we love others?",
    author: "Dalai Lama"
  },
  {
    body:
      "The least of things with a meaning is worth more in life than the greatest of things without it.",
    author: "Carl Jung"
  },
  {
    body:
      "The noblest worship is to make yourself as good and as just as you can.",
    author: "Isocrates"
  },
  {
    body:
      "Though no one can go back and make a brand new start, anyone can start from not and make a brand new ending.",
    author: "Carl Bard"
  },
  {
    body:
      "Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.",
    author: "John Dewey"
  },
  {
    body:
      "A dream is your creative vision for your life in the future. You must break out of your current comfort zone and become comfortable with the unfamiliar and the unknown.",
    author: "Denis Waitley"
  },
  {
    body:
      "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.",
    author: "Joseph Roux"
  },
  {
    body:
      "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
    author: "Charlotte Gilman"
  },
  {
    body: "Learn from yesterday, live for today, hope for tomorrow.",
    author: "Albert Einstein"
  },
  {
    body: "Don't think of it as failure. Think of it as time-released success.",
    author: "Robert Orben"
  },
  {
    body:
      "Many people think of prosperity that concerns money only to forget that true prosperity is of the mind.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "The least movement is of importance to all nature. The entire ocean is affected by a pebble.",
    author: "Blaise Pascal"
  },
  {
    body:
      "A lot of times people look at the negative side of what they feel they can't do. I always look on the positive side of what I can do.",
    author: "Chuck Norris"
  },
  {
    body:
      "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
    author: "Aristotle"
  },
  {
    body:
      "Know how to listen, and you will profit even from those who talk badly.",
    author: "Plutarch"
  },
  {
    body: "You can't trust without risk but neither can you live in a cocoon.",
    author: "Byron Pulsifer"
  },
  {
    body: "The doors we open and close each day decide the lives we live.",
    author: "Flora Whittemore"
  },
  {
    body: "You cannot travel the path until you have become the path itself.",
    author: "Buddha"
  },
  {
    body: "I walk slowly, but I never walk backward.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
    author: "John F. Kennedy"
  },
  {
    body:
      "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
    author: "Barack Obama"
  },
  {
    body:
      "The least movement is of importance to all nature. The entire ocean is affected by a pebble.",
    author: "Blaise Pascal"
  },
  {
    body: "Where there is great love, there are always miracles.",
    author: "Willa Cather"
  },
  {
    body:
      "You have enemies? Good. That means you've stood up for something, sometime in your life.",
    author: "Winston Churchill"
  },
  {
    body:
      "Keep silence for the most part, and speak only when you must, and then briefly.",
    author: "Epictetus"
  },
  {
    body:
      "Divide each difficulty into as many parts as is feasible and necessary to resolve it.",
    author: "Rene Descartes"
  },
  {
    body:
      "Courage is not about taking risks unknowingly but putting your own being in front of challenges that others may not be able to.",
    author: "Byron Pulsifer"
  },
  {
    body: "Change your thoughts, change your life!",
    author: ""
  },
  {
    body:
      "The best place to find a helping hand is at the end of your own arm.",
    author: ""
  },
  {
    body:
      "The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.",
    author: "Mortimer Adler"
  },
  {
    body: "Every human being is the author of his own health or disease.",
    author: "Buddha"
  },
  {
    body: "It is better to understand a little than to misunderstand a lot.",
    author: "Anatole France"
  },
  {
    body:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle"
  },
  {
    body: "Knowing is not enough; we must apply!",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "We know the truth, not only by the reason, but by the heart.",
    author: "Blaise Pascal"
  },
  {
    body: "We choose our joys and sorrows long before we experience them.",
    author: "Kahlil Gibran"
  },
  {
    body:
      "Before you can inspire with emotion, you must be swamped with it yourself. Before you can move their tears, your own must flow. To convince them, you must yourself believe.",
    author: "Winston Churchill"
  },
  {
    body: "Anybody can make history. Only a great man can write it.",
    author: "Oscar Wilde"
  },
  {
    body:
      "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mohandas Gandhi"
  },
  {
    body: "If I know what love is, it is because of you.",
    author: "Hermann Hesse"
  },
  {
    body: "The best teacher is experience learned from failures.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Allow the world to live as it chooses, and allow yourself to live as you choose.",
    author: "Richard Bach"
  },
  {
    body:
      "Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others.",
    author: "Jacob Braude"
  },
  {
    body: "The years teach much which the days never know.",
    author: "Ralph Emerson"
  },
  {
    body:
      "A lot of people give up just before theyre about to make it. You know you never know when that next obstacle is going to be the last one.",
    author: "Chuck Norris"
  },
  {
    body: "Self-trust is the first secret of success.",
    author: "Ralph Emerson"
  },
  {
    body: "The harder you fall, the higher you bounce.",
    author: ""
  },
  {
    body:
      "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
    author: "Bruce Lee"
  },
  {
    body:
      "The foolish man seeks happiness in the distance, the wise grows it under his feet.",
    author: "James Oppenheim"
  },
  {
    body: "Myths which are believed in tend to become true.",
    author: "George Orwell"
  },
  {
    body: "Nature takes away any faculty that is not used.",
    author: "William R. Inge"
  },
  {
    body:
      "Focusing your life solely on making a buck shows a poverty of ambition. It asks too little of yourself. And it will leave you unfulfilled.",
    author: "Barack Obama"
  },
  {
    body: "Patience is the companion of wisdom.",
    author: "Saint Augustine"
  },
  {
    body:
      "The worst bankrupt in the world is the person who has lost his enthusiasm.",
    author: "H. W. Arnold"
  },
  {
    body:
      "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity.",
    author: "Louis Pasteur"
  },
  {
    body: "Meaning is not what you start with but what you end up with.",
    author: "Peter Elbow"
  },
  {
    body:
      "While we try to teach our children all about life, our children teach us what life is all about.",
    author: "Angela Schwindt"
  },
  {
    body:
      "Compassion and happiness are not a sign of weakness but a sign of strength.",
    author: "Dalai Lama"
  },
  {
    body:
      "It is common sense to take a method and try it. If it fails, admit it frankly and try another. But above all, try something.",
    author: "Franklin D. Roosevelt"
  },
  {
    body:
      "Opportunity often comes disguised in the form of misfortune, or temporary defeat.",
    author: "Napoleon Hill"
  },
  {
    body: "Be here now. Be someplace else later. Is that so complicated?",
    author: "David Bader"
  },
  {
    body:
      "If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence.",
    author: "Frederick Douglass"
  },
  {
    body: "If it is not right do not do it; if it is not true do not say it.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "An invasion of armies can be resisted, but not an idea whose time has come.",
    author: "Victor Hugo"
  },
  {
    body:
      "To be able to give away riches is mandatory if you wish to possess them. This is the only way that you will be truly rich.",
    author: "Mahummad Ali"
  },
  {
    body:
      "Learning without reflection is a waste, reflection without learning is dangerous.",
    author: "Confucius"
  },
  {
    body:
      "Don't fear failure so much that you refuse to try new things. The saddest summary of life contains three descriptions: could have, might have, and should have.",
    author: ""
  },
  {
    body:
      "All fixed set patterns are incapable of adaptability or pliability. The truth is outside of all fixed patterns.",
    author: "Bruce Lee"
  },
  {
    body:
      "You may say Im a dreamer, but Im not the only one, I hope someday you will join us, and the world will live as one.",
    author: "John Lennon"
  },
  {
    body:
      "Successful people ask better questions, and as a result, they get better answers.",
    author: "Tony Robbins"
  },
  {
    body:
      "Ability is what you're capable of doing. Motivation determines what you do.Attitude determines how well you do it.",
    author: "Lou Holtz"
  },
  {
    body:
      "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "Anne Frank"
  },
  {
    body:
      "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
    author: "Thomas Jefferson"
  },
  {
    body: "You can do it if you believe you can!",
    author: "Napoleon Hill"
  },
  {
    body: "Nothing happens unless first we dream.",
    author: "Carl Sandburg"
  },
  {
    body:
      "To change ones life, start immediately, do it flamboyantly, no exceptions.",
    author: "William James"
  },
  {
    body:
      "The greatest antidote to insecurity and the sense of fear is compassion � it brings one back to the basis of one's inner strength",
    author: "Dalai Lama"
  },
  {
    body:
      "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "Everything you are against weakens you. Everything you are for empowers you.",
    author: "Wayne Dyer"
  },
  {
    body: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    body: "The best way to pay for a lovely moment is to enjoy it.",
    author: "Richard Bach"
  },
  {
    body:
      "I don't believe in failure. It's not failure if you enjoyed the process.",
    author: "Oprah Winfrey"
  },
  {
    body:
      "Truth, and goodness, and beauty are but different faces of the same all.",
    author: "Ralph Emerson"
  },
  {
    body:
      "The best and most beautiful things in the world cannot be seen, nor touched... but are felt in the heart.",
    author: "Helen Keller"
  },
  {
    body:
      "You have to take it as it happens, but you should try to make it happen the way you want to take it.",
    author: "Old German proverb"
  },
  {
    body:
      "If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him.",
    author: "Ralph Emerson"
  },
  {
    body: "Learn from yesterday, live for today, hope for tomorrow.",
    author: "Albert Einstein"
  },
  {
    body: "Beauty is not in the face; beauty is a light in the heart.",
    author: "Kahlil Gibran"
  },
  {
    body:
      "Success in business requires training and discipline and hard work. But if you're not frightened by these things, the opportunities are just as great today as they ever were.",
    author: "David Rockefeller"
  },
  {
    body:
      "Give it all you've got because you never know if there's going to be a next time.",
    author: "Danielle Ingrum"
  },
  {
    body:
      "Happiness comes when your work and words are of benefit to yourself and others.",
    author: "Buddha"
  },
  {
    body:
      "With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.",
    author: "Keshavan Nair"
  },
  {
    body:
      "The man who trusts men will make fewer mistakes than he who distrusts them.",
    author: "Cavour"
  },
  {
    body: "A jug fills drop by drop.",
    author: "Buddha"
  },
  {
    body:
      "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
    author: "Laozi"
  },
  {
    body:
      "Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health.",
    author: "Dalai Lama"
  },
  {
    body: "The less effort, the faster and more powerful you will be.",
    author: "Bruce Lee"
  },
  {
    body:
      "Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life.",
    author: "Byron Pulsifer"
  },
  {
    body: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster"
  },
  {
    body:
      "Intuition is the very force or activity of the soul in its experience through whatever has been the experience of the soul itself.",
    author: "Henry Reed"
  },
  {
    body: "Write your plans in pencil and give God the eraser.",
    author: "Paulo Coelho"
  },
  {
    body:
      "In separateness lies the world's great misery, in compassion lies the world's true strength.",
    author: "Buddha"
  },
  {
    body:
      "The thing always happens that you really believe in; and the belief in a thing makes it happen.",
    author: "Frank Wright"
  },
  {
    body: "A rolling stone gathers no moss.",
    author: "Publilius Syrus"
  },
  {
    body: "Freedom is the right to live as we wish.",
    author: "Epictetus"
  },
  {
    body:
      "We must be as courteous to a man as we are to a picture, which we are willing to give the advantage of a good light.",
    author: "Ralph Emerson"
  },
  {
    body:
      "The dream was always running ahead of me. To catch up, to live for a moment in unison with it, that was the miracle.",
    author: "Anais Nin"
  },
  {
    body:
      "Through perseverance many people win success out of what seemed destined to be certain failure.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "Doing what you love is the cornerstone of having abundance in your life.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Intuition is the very force or activity of the soul in its experience through whatever has been the experience of the soul itself.",
    author: "Henry Reed"
  },
  {
    body:
      "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.",
    author: "Arthur Rubinstein"
  },
  {
    body: "The cure for boredom is curiosity. There is no cure for curiosity.",
    author: "Ellen Parr"
  },
  {
    body:
      "The longer we dwell on our misfortunes, the greater is their power to harm us.",
    author: "Voltaire"
  },
  {
    body: "The greatest barrier to success is the fear of failure.",
    author: "Eriksson"
  },
  {
    body:
      "Every great advance in science has issued from a new audacity of the imagination.",
    author: "John Dewey"
  },
  {
    body:
      "You may be deceived if you trust too much, but you will live in torment if you don't trust enough.",
    author: "Frank Crane"
  },
  {
    body: "When there is no enemy within, the enemies outside cannot hurt you.",
    author: "African proverb"
  },
  {
    body:
      "The most important thing is transforming our minds, for a new way of thinking, a new outlook: we should strive to develop a new inner world.",
    author: "Dalai Lama"
  },
  {
    body:
      "First say to yourself what you would be; and then do what you have to do.",
    author: "Epictetus"
  },
  {
    body: "We can do no great things, only small things with great love.",
    author: "Mother Teresa"
  },
  {
    body:
      "As we grow as unique persons, we learn to respect the uniqueness of others.",
    author: "Robert Schuller"
  },
  {
    body:
      "There is nothing happens to any person but what was in his power to go through with.",
    author: "Marcus Aurelius"
  },
  {
    body: "Work out your own salvation. Do not depend on others.",
    author: "Buddha"
  },
  {
    body:
      "Don't focus on making the right decision, focus on making the decision the right one.",
    author: ""
  },
  {
    body:
      "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
    author: "Rumi"
  },
  {
    body: "Be like the flower, turn your face to the sun.",
    author: "Kahlil Gibran"
  },
  {
    body: "Remembering a wrong is like carrying a burden on the mind.",
    author: "Buddha"
  },
  {
    body: "He that is giddy thinks the world turns round.",
    author: "William Shakespeare"
  },
  {
    body:
      "The foolish man seeks happiness in the distance; the wise grows it under his feet.",
    author: "James Openheim"
  },
  {
    body: "Gratitude is the fairest blossom which springs from the soul.",
    author: "Henry Beecher"
  },
  {
    body: "Nothing happens unless first we dream.",
    author: "Carl Sandburg"
  },
  {
    body:
      "If you look into your own heart, and you find nothing wrong there, what is there to worry about? What is there to fear?",
    author: "Confucius"
  },
  {
    body:
      "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle"
  },
  {
    body:
      "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.",
    author: "Nikola Tesla"
  },
  {
    body: "There are no failures � just experiences and your reactions to them.",
    author: "Tom Krause"
  },
  {
    body: "The heart has eyes which the brain knows nothing of.",
    author: "Charles Perkhurst"
  },
  {
    body: "Life shrinks or expands in proportion to one's courage.",
    author: "Anais Nin"
  },
  {
    body:
      "An optimist is a person who sees a green light everywhere, while the pessimist sees only the red spotlight... The truly wise person is colour-blind.",
    author: "Albert Schweitzer"
  },
  {
    body: "You cannot have what you do not want.",
    author: "John Acosta"
  },
  {
    body: "You have to believe in yourself.",
    author: "Sun Tzu"
  },
  {
    body:
      "The most important point is to accept yourself and stand on your two feet.",
    author: "Shunryu Suzuki"
  },
  {
    body:
      "When you arise in the morning, think of what a precious privilege it is to be alive � to breathe, to think, to enjoy, to love.",
    author: "Marcus Aurelius"
  },
  {
    body: "All the flowers of all the tomorrows are in the seeds of today.",
    author: ""
  },
  {
    body:
      "Do not follow where the path may lead. Go, instead, where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson"
  },
  {
    body:
      "It is not fair to ask of others what you are unwilling to do yourself.",
    author: "Eleanor Roosevelt"
  },
  {
    body:
      "The moment one gives close attention to anything, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
    author: "Henry Miller"
  },
  {
    body: "One today is worth two tomorrows.",
    author: "Benjamin Franklin"
  },
  {
    body: "You have to think anyway, so why not think big?",
    author: "Donald Trump"
  },
  {
    body:
      "Knowing your own darkness is the best method for dealing with the darknesses of other people.",
    author: "Carl Jung"
  },
  {
    body:
      "Don't let today's disappointments cast a shadow on tomorrow's dreams.",
    author: ""
  },
  {
    body:
      "You cannot make yourself feel something you do not feel, but you can make yourself do right in spite of your feelings.",
    author: "Pearl Buck"
  },
  {
    body: "I walk slowly, but I never walk backward.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "There is no retirement for an artist, it's your way of living so there is no end to it.",
    author: "Henry Moore"
  },
  {
    body: "To be upset over what you don't have is to waste what you do have.",
    author: "Ken S. Keyes"
  },
  {
    body: "No one has ever become poor by giving.",
    author: "Anne Frank"
  },
  {
    body: "Better than a thousand hollow words, is one word that brings peace.",
    author: "Buddha"
  },
  {
    body: "Truth is powerful and it prevails.",
    author: "Sojourner Truth"
  },
  {
    body: "Don't ruin the present with the ruined past.",
    author: "Ellen Gilchrist"
  },
  {
    body: "Blaze with the fire that is never extinguished.",
    author: "Luisa Sigea"
  },
  {
    body:
      "Make the best use of what is in your power, and take the rest as it happens.",
    author: "Epictetus"
  },
  {
    body:
      "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
    author: "Sai Baba"
  },
  {
    body:
      "If you do not change direction, you may end up where you are heading.",
    author: "Lao Tzu"
  },
  {
    body: "The world is a book, and those who do not travel read only a page.",
    author: "Augustinus Sanctus"
  },
  {
    body:
      "He who lives in harmony with himself lives in harmony with the universe.",
    author: "Marcus Aurelius"
  },
  {
    body: "The best thing in every noble dream is the dreamer...",
    author: "Moncure Conway"
  },
  {
    body: "Spring is a time for rebirth and the fulfilment of new life.",
    author: "Byron Pulsifer"
  },
  {
    body: "Every man is a volume if you know how to read him.",
    author: "Channing"
  },
  {
    body:
      "You're not obligated to win. You're obligated to keep trying to do the best you can every day.",
    author: "Marian Edelman"
  },
  {
    body: "Weve got to have a dream if we are going to make a dream come true.",
    author: "Walt Disney"
  },
  {
    body:
      "If you want things to be different, perhaps the answer is to become different yourself.",
    author: "Norman Peale"
  },
  {
    body:
      "If you want your life to be more rewarding, you have to change the way you think.",
    author: "Oprah Winfrey"
  },
  {
    body: "I hear and I forget. I see and I remember. I do and I understand.",
    author: "Confucius"
  },
  {
    body: "In order to win, you must expect to win.",
    author: "Richard Bach"
  },
  {
    body:
      "Everything in the universe goes by indirection. There are no straight lines.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Don't fear failure so much that you refuse to try new things. The saddest summary of life contains three descriptions: could have, might have, and should have.",
    author: ""
  },
  {
    body:
      "To be aware of a single shortcoming in oneself is more useful than to be aware of a thousand in someone else.",
    author: "Tenzin Gyatso"
  },
  {
    body: "There is nothing impossible to him who will try.",
    author: "Alexander the Great"
  },
  {
    body:
      "If you have no respect for your own values how can you be worthy of respect from others.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Kindness is more important than wisdom, and the recognition of this is the beginning of wisdom.",
    author: "Theodore Rubin"
  },
  {
    body:
      "How far that little candle throws its beams! So shines a good deed in a naughty world.",
    author: "William Shakespeare"
  },
  {
    body: "We must become the change we want to see.",
    author: "Mahatma Gandhi"
  },
  {
    body:
      "Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    author: "Buddha"
  },
  {
    body:
      "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
    author: "Harriet Tubman"
  },
  {
    body: "Never mistake activity for achievement.",
    author: "John Wooden"
  },
  {
    body:
      "You must train your intuition � you must trust the small voice inside you which tells you exactly what to say, what to decide.",
    author: "Ingrid Bergman"
  },
  {
    body:
      "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
    author: "Buddha"
  },
  {
    body:
      "People grow through experience if they meet life honestly and courageously. This is how character is built.",
    author: "Eleanor Roosevelt"
  },
  {
    body:
      "It is only when the mind and character slumber that the dress can be seen.",
    author: "Ralph Waldo Emerson"
  },
  {
    body: "Waste no more time arguing about what a good man should be. Be one.",
    author: "Marcus Aurelius"
  },
  {
    body: "Freedom is not worth having if it does not connote freedom to err.",
    author: "Mohandas Gandhi"
  },
  {
    body:
      "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.",
    author: "Thomas Carlyle"
  },
  {
    body:
      "The only real failure in life is not to be true to the best one knows.",
    author: "Buddha"
  },
  {
    body:
      "Happiness comes when your work and words are of benefit to yourself and others.",
    author: "Buddha"
  },
  {
    body:
      "Three things cannot be long hidden: the sun, the moon, and the truth.",
    author: "Buddha"
  },
  {
    body:
      "Anyone who doesn't take truth seriously in small matters cannot be trusted in large ones either.",
    author: "Albert Einstein"
  },
  {
    body: "He who talks more is sooner exhausted.",
    author: "Lao Tzu"
  },
  {
    body:
      "Everything in the universe goes by indirection. There are no straight lines.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Nobody made a greater mistake than he who did nothing because he could do only a little.",
    author: "Edmund Burke"
  },
  {
    body:
      "Change will not come if we wait for some other person or some other time. We are the ones weve been waiting for. We are the change that we seek.",
    author: "Barack Obama"
  },
  {
    body: "I begin with an idea and then it becomes something else.",
    author: "Pablo Picasso"
  },
  {
    body: "Those who cannot learn from history are doomed to repeat it.",
    author: "George Santayan"
  },
  {
    body:
      "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.",
    author: "Charles Darwin"
  },
  {
    body: "Why worry about tomorrow, when today is all we have?",
    author: ""
  },
  {
    body:
      "Transformation doesn't take place with a vacuum; instead, it occurs when we are indirectly and directly connected to all those around us.",
    author: "Byron Pulsifer"
  },
  {
    body: "Every man dies. Not every man really lives.",
    author: ""
  },
  {
    body:
      "They must often change, who would be constant in happiness or wisdom.",
    author: "Confucius"
  },
  {
    body:
      "Quality is never an accident; it is always the result of intelligent effort.",
    author: "John Ruskin"
  },
  {
    body:
      "Courage is not about taking risks unknowingly but putting your own being in front of challenges that others may not be able to.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "The weak can never forgive. Forgiveness is the attribute of the strong.",
    author: "Mohandas Gandhi"
  },
  {
    body:
      "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius"
  },
  {
    body:
      "The trick is in what one emphasizes. We either make ourselves miserable, or we make ourselves happy. The amount of work is the same.",
    author: "Carlos Castaneda"
  },
  {
    body: "Difficulties are things that show a person what they are.",
    author: "Epictetus"
  },
  {
    body: "Our distrust is very expensive.",
    author: "Ralph Emerson"
  },
  {
    body:
      "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.",
    author: "Dalai Lama"
  },
  {
    body:
      "Knowing your own darkness is the best method for dealing with the darknesses of other people.",
    author: "Carl Jung"
  },
  {
    body:
      "Obstacles are those things you see when you take your eyes off the goal.",
    author: "Hannah More"
  },
  {
    body:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    body:
      "To get something you never had, you have to do something you never did.",
    author: ""
  },
  {
    body: "The one who always loses, is the only person who gets the reward.",
    author: "Claire Charmont"
  },
  {
    body:
      "Just as a flower, which seems beautiful has color but no perfume, so are the fruitless words of a man who speaks them but does them not.",
    author: "Dhammapada"
  },
  {
    body: "Things that were hard to bear are sweet to remember.",
    author: "Seneca"
  },
  {
    body:
      "We can change our lives. We can do, have, and be exactly what we wish.",
    author: "Tony Robbins"
  },
  {
    body: "The heart has eyes which the brain knows nothing of.",
    author: "Charles Perkhurst"
  },
  {
    body: "To know oneself is to study oneself in action with another person.",
    author: "Bruce Lee"
  },
  {
    body:
      "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more",
    author: "Anthony Robbins"
  },
  {
    body: "Only those who dare to fail greatly can ever achieve greatly.",
    author: "Robert Kennedy"
  },
  {
    body: "Peace begins with a smile.",
    author: "Mother Teresa"
  },
  {
    body:
      "Stay committed to your decisions, but stay flexible in your approach.",
    author: "Tony Robbins"
  },
  {
    body:
      "If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away.",
    author: "John Steinbeck"
  },
  {
    body: "The only limit to your impact is your imagination and commitment.",
    author: "Tony Robbins"
  },
  {
    body: "No matter how hard the past, you can always begin again.",
    author: "Buddha"
  },
  {
    body: "It is better to understand a little than to misunderstand a lot.",
    author: "Anatole France"
  },
  {
    body:
      "The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
    author: "Henry Miller"
  },
  {
    body: "No man can succeed in a line of endeavor which he does not like.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Three things in human life are important. The first is to be kind. The second is to be kind. The third is to be kind.",
    author: "Henry James"
  },
  {
    body:
      "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.",
    author: "Arthur Conan Doyle"
  },
  {
    body:
      "Giving up doesn't always mean you are weak. Sometimes it means that you are strong enough to let go.",
    author: ""
  },
  {
    body: "Autumn is a second spring when every leaf is a flower.",
    author: "Albert Camus"
  },
  {
    body:
      "To be beautiful means to be yourself. You don�t need to be accepted by others. You need to accept yourself.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "No valid plans for the future can be made by those who have no capacity for living now.",
    author: "Alan Watts"
  },
  {
    body:
      "Things turn out best for those who make the best of the way things turn out.",
    author: "Jack Buck"
  },
  {
    body:
      "Progress always involves risks. You can't steal second base and keep your foot on first.",
    author: "Frederick Wilcox"
  },
  {
    body: "Each day can be one of triumph if you keep up your interests.",
    author: "George Matthew Adams"
  },
  {
    body:
      "There is one thing you have got to learn about our movement. Three people are better than no people.",
    author: "Fannie Hamer"
  },
  {
    body:
      "Happiness is a perfume you cannot pour on others without getting a few drops on yourself.",
    author: "Ralph Waldo Emerson"
  },
  {
    body:
      "However many holy words you read, However many you speak, What good will they do you If you do not act on upon them?",
    author: "Buddha"
  },
  {
    body: "They can conquer who believe they can.",
    author: "Virgil"
  },
  {
    body:
      "The world has the habit of making room for the man whose actions show that he knows where he is going.",
    author: "Napoleon Hill"
  },
  {
    body:
      "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.",
    author: "Buddha"
  },
  {
    body:
      "It is very easy to forgive others their mistakes; it takes more grit to forgive them for having witnessed your own.",
    author: "Jessamyn West"
  },
  {
    body:
      "When one tugs at a single thing in nature, he finds it attached to the rest of the world.",
    author: "John Muir"
  },
  {
    body:
      "What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people.",
    author: "Daisaku Ikeda"
  },
  {
    body:
      "To fly as fast as thought, you must begin by knowing that you have already arrived.",
    author: "Richard Bach"
  },
  {
    body:
      "Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.",
    author: "Gloria Steinem"
  },
  {
    body:
      "Successful people ask better questions, and as a result, they get better answers.",
    author: "Tony Robbins"
  },
  {
    body: "Know, first, who you are, and then adorn yourself accordingly.",
    author: "Epictetus"
  },
  {
    body:
      "I always wanted to be somebody, but I should have been more specific.",
    author: "Lily Tomlin"
  },
  {
    body: "To enjoy life, we must touch much of it lightly.",
    author: "Voltaire"
  },
  {
    body: "We do what we do because we believe.",
    author: ""
  },
  {
    body:
      "Learn to listen. Opportunity could be knocking at your door very softly.",
    author: "Frank Tyger"
  },
  {
    body: "All action results from thought, so it is thoughts that matter.",
    author: "Sai Baba"
  },
  {
    body: "As we risk ourselves, we grow. Each new experience is a risk.",
    author: "Fran Watson"
  },
  {
    body:
      "Without this playing with fantasy no creative work has ever yet come to birth. The debt we owe to the play of the imagination is incalculable.",
    author: "Carl Jung"
  },
  {
    body:
      "Ability is what you're capable of doing. Motivation determines what you do.Attitude determines how well you do it.",
    author: "Lou Holtz"
  },
  {
    body: "The cure for boredom is curiosity. There is no cure for curiosity.",
    author: "Ellen Parr"
  },
  {
    body:
      "Don't judge each day by the harvest you reap but by the seeds you plant.",
    author: "Robert Stevenson"
  },
  {
    body:
      "There is nothing so useless as doing efficiently that which should not be done at all.",
    author: "Peter Drucker"
  },
  {
    body:
      "Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.",
    author: "John Dewey"
  },
  {
    body:
      "Rather than wishing for change, you first must be prepared to change.",
    author: "Catherine Pulsifer"
  },
  {
    body: "You'll see it when you believe it.",
    author: "Wayne Dyer"
  },
  {
    body: "Everyone smiles in the same language.",
    author: ""
  },
  {
    body:
      "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    author: "Buddha"
  },
  {
    body:
      "Be faithful in small things because it is in them that your strength lies.",
    author: "Mother Teresa"
  },
  {
    body:
      "There is only one success � to be able to spend your life in your own way.",
    author: "Christopher Morley"
  },
  {
    body: "Yesterdays home runs don't win today's games.",
    author: "Babe Ruth"
  },
  {
    body:
      "Letting go isn�t the end of the world; it�s the beginning of a new life.",
    author: ""
  },
  {
    body:
      "Nature gave us one tongue and two ears so we could hear twice as much as we speak.",
    author: "Epictetus"
  },
  {
    body:
      "Work while you have the light. You are responsible for the talent that has been entrusted to you.",
    author: "Henri-Frederic Amiel"
  },
  {
    body:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    author: "Albert Einstein"
  },
  {
    body:
      "I am not afraid of tomorrow, for I have seen yesterday and I love today.",
    author: "William White"
  },
  {
    body:
      "I love my past. I love my present. Im not ashamed of what Ive had, and Im not sad because I have it no longer.",
    author: "Colette"
  },
  {
    body:
      "Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible.",
    author: "Maya Angelou"
  },
  {
    body:
      "I cannot give you the formula for success, but I can give you the formula for failure: which is: Try to please everybody.",
    author: "Herbert Swope"
  },
  {
    body: "Just as much as we see in others we have in ourselves.",
    author: "William Hazlitt"
  },
  {
    body:
      "Prosperity depends more on wanting what you have than having what you want.",
    author: "Geoffrey F. Abert"
  },
  {
    body:
      "Stay committed to your decisions, but stay flexible in your approach.",
    author: "Tony Robbins"
  },
  {
    body:
      "How many cares one loses when one decides not to be something but to be someone.",
    author: "Coco Chanel"
  },
  {
    body: "The most successful people are those who are good at plan B.",
    author: "James Yorke"
  },
  {
    body: "He who knows, does not speak. He who speaks, does not know.",
    author: "Lao Tzu"
  },
  {
    body:
      "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
    author: "Buckminster Fuller"
  },
  {
    body: "We cannot direct the wind but we can adjust the sails.",
    author: ""
  },
  {
    body:
      "He who conquers others is strong; He who conquers himself is mighty.",
    author: "Lao Tzu"
  },
  {
    body:
      "True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.",
    author: "William Penn"
  },
  {
    body: "Life is a process. We are a process. The universe is a process.",
    author: "Anne Schaef"
  },
  {
    body:
      "One may say the eternal mystery of the world is its comprehensibility.",
    author: "Albert Einstein"
  },
  {
    body:
      "Peace of mind is not the absence of conflict from life, but the ability to cope with it.",
    author: ""
  },
  {
    body:
      "Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "To be beautiful means to be yourself. You don�t need to be accepted by others. You need to accept yourself.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "The self is not something ready-made, but something in continuous formation through choice of action.",
    author: "John Dewey"
  },
  {
    body: "Once you choose hope, anythings possible.",
    author: "Christopher Reeve"
  },
  {
    body:
      "Everything is perfect in the universe � even your desire to improve it.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Ability is what you're capable of doing. Motivation determines what you do.Attitude determines how well you do it.",
    author: "Lou Holtz"
  },
  {
    body:
      "Real magic in relationships means an absence of judgement of others.",
    author: "Wayne Dyer"
  },
  {
    body:
      "To accomplish great things, we must not only act, but also dream; not only plan, but also believe.",
    author: "Anatole France"
  },
  {
    body:
      "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
    author: "Jamie Paolinetti"
  },
  {
    body: "Yesterdays home runs don't win today's games.",
    author: "Babe Ruth"
  },
  {
    body:
      "Our greatness lies not so much in being able to remake the world as being able to remake ourselves.",
    author: "Mahatma Gandhi"
  },
  {
    body:
      "The noblest worship is to make yourself as good and as just as you can.",
    author: "Isocrates"
  },
  {
    body:
      "Allow the world to live as it chooses, and allow yourself to live as you choose.",
    author: "Richard Bach"
  },
  {
    body: "Wherever you go, go with all your heart.",
    author: "Confucius"
  },
  {
    body: "Nothing is at last sacred but the integrity of your own mind.",
    author: "Ralph Emerson"
  },
  {
    body: "Moments of complete apathy are the best for new creations.",
    author: "Philip Breedveld"
  },
  {
    body: "The only real mistake is the one from which we learn nothing.",
    author: "John Powell"
  },
  {
    body:
      "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
    author: "Napoleon Hill"
  },
  {
    body:
      "To dream of the person you would like to be is to waste the person you are.",
    author: "Tim Menchen"
  },
  {
    body:
      "These days people seek knowledge, not wisdom. Knowledge is of the past, wisdom is of the future.",
    author: "Vernon Cooper"
  },
  {
    body:
      "Criticism is something you can easily avoid by saying nothing, doing nothing, and being nothing.",
    author: "Aristotle"
  },
  {
    body:
      "Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible.",
    author: "Maya Angelou"
  },
  {
    body: "You are the only person on earth who can use your ability.",
    author: "Zig Ziglar"
  },
  {
    body:
      "You were not born a winner, and you were not born a loser. You are what you make yourself be.",
    author: "Lou Holtz"
  },
  {
    body:
      "He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye.",
    author: "Buddha"
  },
  {
    body: "Myths which are believed in tend to become true.",
    author: "George Orwell"
  },
  {
    body:
      "Don't let today's disappointments cast a shadow on tomorrow's dreams.",
    author: ""
  },
  {
    body: "All serious daring starts from within.",
    author: "Harriet Beecher Stowe"
  },
  {
    body:
      "The important thing is this: to be able at any moment to sacrifice what we are for what we could become.",
    author: "Charles Dubois"
  },
  {
    body:
      "Gratitude is not only the greatest of virtues, but the paren't of all the others.",
    author: "Cicero"
  },
  {
    body:
      "There is no scarcity of opportunity to make a living at what you love; theres only scarcity of resolve to make it happen.",
    author: "Wayne Dyer"
  },
  {
    body:
      "It is never too late. Even if you are going to die tomorrow, keep yourself straight and clear and be a happy human being today.",
    author: "Lama Yeshe"
  },
  {
    body:
      "The universe is transformation; our life is what our thoughts make it.",
    author: "Marcus Aurelius"
  },
  {
    body: "Do good by stealth, and blush to find it fame.",
    author: "Alexander Pope"
  },
  {
    body:
      "Respect is not something that you can ask for, buy or borrow. Respect is what you earn from each person no matter their background or status.",
    author: "Byron Pulsifer"
  },
  {
    body: "Things do not change; we change.",
    author: "Henry Thoreau"
  },
  {
    body: "Excellence is not a skill. It is an attitude.",
    author: "Ralph Marston"
  },
  {
    body:
      "We must learn our limits. We are all something, but none of us are everything.",
    author: "Blaise Pascal"
  },
  {
    body: "You have to think anyway, so why not think big?",
    author: "Donald Trump"
  },
  {
    body: "The harder you fall, the higher you bounce.",
    author: ""
  },
  {
    body: "Always seek out the seed of triumph in every adversity.",
    author: "Og Mandino"
  },
  {
    body: "To be upset over what you don't have is to waste what you do have.",
    author: "Ken S. Keyes"
  },
  {
    body:
      "Opportunity often comes disguised in the form of misfortune, or temporary defeat.",
    author: "Napoleon Hill"
  },
  {
    body: "Yesterdays home runs don't win today's games.",
    author: "Babe Ruth"
  },
  {
    body:
      "Happiness does not come from having much, but from being attached to little.",
    author: "Cheng Yen"
  },
  {
    body:
      "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
    author: "Rumi"
  },
  {
    body: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    body:
      "Learn wisdom from the ways of a seedling. A seedling which is never hardened off through stressful situations will never become a strong productive plant.",
    author: "Stephen Sigmund"
  },
  {
    body:
      "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
    author: "Helen Keller"
  },
  {
    body:
      "We are all faced with a series of great opportunities brilliantly disguised as impossible situations.",
    author: "Charles R. Swindoll"
  },
  {
    body:
      "If you are patient in one moment of anger, you will escape one hundred days of sorrow.",
    author: "Chinese proverb"
  },
  {
    body:
      "The poor man is not he who is without a cent, but he who is without a dream.",
    author: "Harry Kemp"
  },
  {
    body:
      "All men have a sweetness in their life. That is what helps them go on. It is towards that they turn when they feel too worn out.",
    author: "Albert Camus"
  },
  {
    body: "Be a good listener. Your ears will never get you in trouble.",
    author: "Frank Tyger"
  },
  {
    body: "Every day may not be good, but there's something good in every day.",
    author: ""
  },
  {
    body:
      "Meditation brings wisdom; lack of mediation leaves ignorance. Know well what leads you forward and what hold you back, and choose the path that leads to wisdom.",
    author: "Buddha"
  },
  {
    body: "The heart has eyes which the brain knows nothing of.",
    author: "Charles Perkhurst"
  },
  {
    body: "What we see is mainly what we look for.",
    author: ""
  },
  {
    body: "It is impossible to feel grateful and depressed in the same moment.",
    author: "Naomi Williams"
  },
  {
    body:
      "You learn to speak by speaking, to study by studying, to run by running, to work by working; in just the same way, you learn to love by loving.",
    author: "Anatole France"
  },
  {
    body:
      "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    author: "Leonardo da Vinci"
  },
  {
    body:
      "The best place to find a helping hand is at the end of your own arm.",
    author: ""
  },
  {
    body:
      "The worst bankrupt in the world is the person who has lost his enthusiasm.",
    author: "H. W. Arnold"
  },
  {
    body:
      "The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.",
    author: "Mortimer Adler"
  },
  {
    body: "Strong beliefs win strong men, and then make them stronger.",
    author: "Richard Bach"
  },
  {
    body:
      "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
    author: "Tryon Edwards"
  },
  {
    body:
      "I cannot always control what goes on outside. But I can always control what goes on inside.",
    author: "Wayne Dyer"
  },
  {
    body: "In order to win, you must expect to win.",
    author: "Richard Bach"
  },
  {
    body:
      "For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour.",
    author: "Mary Kay Ash"
  },
  {
    body:
      "Opportunity is missed by most because it is dressed in overalls and looks like work.",
    author: "Thomas Edison"
  },
  {
    body:
      "Give thanks for the rain of life that propels us to reach new horizons.",
    author: "Byron Pulsifer"
  },
  {
    body: "A beautiful thing is never perfect.",
    author: ""
  },
  {
    body: "You give before you get.",
    author: "Napoleon Hill"
  },
  {
    body:
      "We must be as courteous to a man as we are to a picture, which we are willing to give the advantage of a good light.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world.",
    author: "Blaise Pascal"
  },
  {
    body: "There are no failures. Just experiences and your reactions to them.",
    author: "Tom Krause"
  },
  {
    body:
      "As we grow as unique persons, we learn to respect the uniqueness of others.",
    author: "Robert Schuller"
  },
  {
    body:
      "Every great mistake has a halfway moment, a split second when it can be recalled and perhaps remedied.",
    author: "Pearl Buck"
  },
  {
    body:
      "The self is not something ready-made, but something in continuous formation through choice of action.",
    author: "John Dewey"
  },
  {
    body:
      "Don't let today's disappointments cast a shadow on tomorrow's dreams.",
    author: ""
  },
  {
    body:
      "To listen well is as powerful a means of communication and influence as to talk well.",
    author: "John Marshall"
  },
  {
    body:
      "Imagination is the living power and prime agent of all human perception.",
    author: "Samuel Taylor Coleridge"
  },
  {
    body:
      "When you don't know what you believe, everything becomes an argument. Everything is debatable. But when you stand for something, decisions are obvious.",
    author: ""
  },
  {
    body: "You only lose what you cling to.",
    author: "Buddha"
  },
  {
    body: "There is only one happiness in life, to love and be loved.",
    author: "George Sand"
  },
  {
    body: "Happiness is found in doing, not merely possessing.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Live through feeling and you will live through love. For feeling is the language of the soul, and feeling is truth.",
    author: "Matt Zotti"
  },
  {
    body: "He who is contented is rich.",
    author: "Lao Tzu"
  },
  {
    body:
      "You are always free to change your mind and choose a different future, or a different past.",
    author: "Richard Bach"
  },
  {
    body:
      "Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.",
    author: "Lao Tzu"
  },
  {
    body:
      "Reason and free inquiry are the only effectual agents against error.",
    author: "Thomas Jefferson"
  },
  {
    body: "Moments of complete apathy are the best for new creations.",
    author: "Philip Breedveld"
  },
  {
    body:
      "We don't stop playing because we grow old; we grow old because we stop playing.",
    author: "Bernard Shaw"
  },
  {
    body: "You can't choose up sides on a round world.",
    author: "Wayne Dyer"
  },
  {
    body: "The best cure for the body is a quiet mind.",
    author: "Napoleon Bonaparte"
  },
  {
    body:
      "He who lives in harmony with himself lives in harmony with the universe.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "By believing passionately in something that does not yet exist, we create it.",
    author: "Nikos Kazantzakis"
  },
  {
    body:
      "If one is estranged from oneself, then one is estranged from others too. If one is out of touch with oneself, then one cannot touch others.",
    author: "Anne Lindbergh"
  },
  {
    body:
      "You got to be careful if you don't know where you're going, because you might not get there.",
    author: "Yogi Berra"
  },
  {
    body: "See the positive side, the potential, and make an effort.",
    author: "Dalai Lama"
  },
  {
    body:
      "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
    author: "Bruce Lee"
  },
  {
    body:
      "By accepting yourself and being fully what you are, your presence can make others happy.",
    author: "Jane Roberts"
  },
  {
    body:
      "Never deny a diagnosis, but do deny the negative verdict that may go with it.",
    author: "Norman Cousins"
  },
  {
    body:
      "The really unhappy person is the one who leaves undone what they can do, and starts doing what they don't understand; no wonder they come to grief.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "If you don't know where you are going, you will probably end up somewhere else.",
    author: "Lawrence Peter"
  },
  {
    body:
      "I am a man of fixed and unbending principles, the first of which is to be flexible at all times.",
    author: "Everett Dirksen"
  },
  {
    body:
      "The happiness of a man in this life does not consist in the absence but in the mastery of his passions.",
    author: "Alfred Tennyson"
  },
  {
    body: "Life is movement-we breathe, we eat, we walk, we move!",
    author: "John Pierrakos"
  },
  {
    body:
      "Your work is to discover your world and then with all your heart give yourself to it.",
    author: "Buddha"
  },
  {
    body: "You cannot be lonely if you like the person you're alone with.",
    author: "Wayne Dyer"
  },
  {
    body:
      "The place to improve the world is first in one's own heart and head and hands.",
    author: "Robert M. Pirsig"
  },
  {
    body: "Why worry about tomorrow, when today is all we have?",
    author: ""
  },
  {
    body:
      "One of the advantages of being disorderly is that one is constantly making exciting discoveries.",
    author: "A. A. Milne"
  },
  {
    body:
      "I believe that we are solely responsible for our choices, and we have to accept the consequences of every deed, word, and thought throughout our lifetime.",
    author: "Elisabeth Kubler-Ross"
  },
  {
    body:
      "To be what we are, and to become what we are capable of becoming, is the only end of life.",
    author: "Robert Stevenson"
  },
  {
    body:
      "Face your deficiencies and acknowledge them; but do not let them master you. Let them teach you patience, sweetness, insight.",
    author: "Helen Keller"
  },
  {
    body: "We know the truth, not only by the reason, but by the heart.",
    author: "Blaise Pascal"
  },
  {
    body: "Fame usually comes to those who are thinking about something else.",
    author: "Holmes"
  },
  {
    body: "The truest wisdom is a resolute determination.",
    author: "Napoleon Bonaparte"
  },
  {
    body: "Never, never, never give up.",
    author: "Winston Churchill"
  },
  {
    body: "The best thing in every noble dream is the dreamer...",
    author: "Moncure Conway"
  },
  {
    body: "Everyone smiles in the same language.",
    author: ""
  },
  {
    body: "If you want a thing done well, do it yourself.",
    author: "Napoleon Bonaparte"
  },
  {
    body: "Take heed: you do not find what you do not seek.",
    author: "English proverb"
  },
  {
    body:
      "If you look into your own heart, and you find nothing wrong there, what is there to worry about? What is there to fear?",
    author: "Confucius"
  },
  {
    body: "Waste no more time arguing about what a good man should be. Be one.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
    author: "Buddha"
  },
  {
    body: "Yesterday I dared to struggle. Today I dare to win.",
    author: "Bernadette Devlin"
  },
  {
    body: "Be a good listener. Your ears will never get you in trouble.",
    author: "Frank Tyger"
  },
  {
    body:
      "I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on man unless they act.",
    author: "G. K. Chesterton"
  },
  {
    body:
      "If you propose to speak, always ask yourself, is it true, is it necessary, is it kind.",
    author: "Buddha"
  },
  {
    body: "Kind words do not cost much. Yet they accomplish much.",
    author: "Blaise Pascal"
  },
  {
    body:
      "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    author: "Buddha"
  },
  {
    body:
      "To understand the heart and mind of a person, look not at what he has already achieved, but at what he aspires to do.",
    author: "Kahlil Gibran"
  },
  {
    body:
      "It is not only for what we do that we are held responsible, but also for what we do not do.",
    author: "Moliere"
  },
  {
    body:
      "A good teacher is like a candle � it consumes itself to light the way for others.",
    author: ""
  },
  {
    body: "Be kind whenever possible. It is always possible.",
    author: "Dalai Lama"
  },
  {
    body: "When fate hands us a lemon, lets try to make lemonade.",
    author: "Dale Carnegie"
  },
  {
    body:
      "If the stars should appear but one night every thousand years how man would marvel and adore.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
    author: ""
  },
  {
    body:
      "Risk more than others think is safe. Care more than others think is wise. Dream more than others think is practical.Expect more than others think is possible.",
    author: "Cadet Maxim"
  },
  {
    body: "Go put your creed into the deed. Nor speak with double tongue.",
    author: "Ralph Emerson"
  },
  {
    body:
      "There are two ways to slide easily through life: to believe everything or to doubt everything; both ways save us from thinking.",
    author: "Alfred Korzybski"
  },
  {
    body:
      "Ignorant men don't know what good they hold in their hands until they've flung it away.",
    author: "Sophocles"
  },
  {
    body:
      "Failure will never overtake me if my determination to succeed is strong enough.",
    author: "Og Mandino"
  },
  {
    body:
      "Let go of your attachment to being right, and suddenly your mind is more open. You're able to benefit from the unique viewpoints of others, without being crippled by your own judgement.",
    author: "Ralph Marston"
  },
  {
    body:
      "Our doubts are traitors and make us lose the good we often might win, by fearing to attempt.",
    author: "Jane Addams"
  },
  {
    body:
      "While we try to teach our children all about life, our children teach us what life is all about.",
    author: "Angela Schwindt"
  },
  {
    body:
      "Kind words can be short and easy to speak but their echoes are truly endless.",
    author: "Mother Teresa"
  },
  {
    body:
      "Things turn out best for those who make the best of the way things turn out.",
    author: "Jack Buck"
  },
  {
    body: "Wrinkles should merely indicate where smiles have been.",
    author: "Mark Twain"
  },
  {
    body: "Your attitude, not your aptitude, will determine your altitude.",
    author: "Zig Ziglar"
  },
  {
    body:
      "You can be what you want to be. You have the power within and we will help you always.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "The thoughts we choose to think are the tools we use to paint the canvas of our lives.",
    author: "Louise Hay"
  },
  {
    body: "Don't be afraid to go out on a limb. That's where the fruit is.",
    author: "H. Jackson Browne"
  },
  {
    body:
      "As an organizer I start from where the world is, as it is, not as I would like it to be.",
    author: "Saul Alinsky"
  },
  {
    body: "If you can dream it, you can do it.",
    author: "Walt Disney"
  },
  {
    body:
      "Let yourself be silently drawn by the stronger pull of what you really love.",
    author: "Rumi"
  },
  {
    body: "Where all think alike, no one thinks very much.",
    author: "Walter Lippmann"
  },
  {
    body:
      "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.",
    author: "Arthur Conan Doyle"
  },
  {
    body: "The undertaking of a new action brings new strength.",
    author: "Richard Evans"
  },
  {
    body: "What you see depends on what you're looking for.",
    author: ""
  },
  {
    body: "Be your own hero, it's cheaper than a movie ticket.",
    author: "Doug Horton"
  },
  {
    body:
      "I gave my life to become the person I am right now. Was it worth it?",
    author: "Richard Bach"
  },
  {
    body:
      "Through pride we are ever deceiving ourselves. But deep down below the surface of the average conscience a still, small voice says to us, Something is out of tune.",
    author: "Carl Jung"
  },
  {
    body: "Give thanks for a little and you will find a lot.",
    author: "Hausa"
  },
  {
    body: "Most powerful is he who has himself in his own power.",
    author: "Seneca"
  },
  {
    body:
      "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.",
    author: "Pema Chodron"
  },
  {
    body:
      "It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward.",
    author: ""
  },
  {
    body:
      "Gratitude is not only the greatest of virtues, but the paren't of all the others.",
    author: "Cicero"
  },
  {
    body: "When you doubt your power, you give power to your doubt.",
    author: "Honore de Balzac"
  },
  {
    body:
      "You may only be someone in the world, but to someone else, you may be the world.",
    author: ""
  },
  {
    body:
      "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
    author: "Buddha"
  },
  {
    body:
      "You block your dream when you allow your fear to grow bigger than your faith.",
    author: "Mary Morrissey"
  },
  {
    body:
      "Your ability to learn faster than your competition is your only sustainable competitive advantage.",
    author: "Arie de Gues"
  },
  {
    body:
      "Nobody made a greater mistake than he who did nothing because he could do only a little.",
    author: "Edmund Burke"
  },
  {
    body:
      "A gem cannot be polished without friction, nor a man perfected without trials.",
    author: "Chinese proverb"
  },
  {
    body:
      "The first duty of a human being is to assume the right functional relationship to society � more briefly, to find your real job, and do it.",
    author: "Charlotte Perkins Gilman"
  },
  {
    body:
      "Mistakes are always forgivable, if one has the courage to admit them.",
    author: "Bruce Lee"
  },
  {
    body:
      "Forgiveness does not change the past, but it does enlarge the future.",
    author: "Paul Boese"
  },
  {
    body:
      "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
    author: "Lao Tzu"
  },
  {
    body:
      "Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine.",
    author: "Nikola Tesla"
  },
  {
    body:
      "The important thing is this: to be able at any moment to sacrifice what we are for what we could become.",
    author: "Charles Dubois"
  },
  {
    body: "I think and that is all that I am.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Don't leave a stone unturned. It's always something, to know you have done the most you could.",
    author: "Charles Dickens"
  },
  {
    body: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    body: "Fame usually comes to those who are thinking about something else.",
    author: "Holmes"
  },
  {
    body:
      "If one does not know to which port is sailing, no wind is favorable.",
    author: "Seneca"
  },
  {
    body:
      "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.",
    author: "Joseph Roux"
  },
  {
    body:
      "Moral excellence comes about as a result of habit. We become just by doing just acts, temperate by doing temperate acts, brave by doing brave acts.",
    author: "Aristotle"
  },
  {
    body:
      "Id rather regret the things that I have done than the things that I have not done.",
    author: "Lucille Ball"
  },
  {
    body:
      "Do not be too timid and squeamish about your reactions. All life is an experiment. The more experiments you make the better.",
    author: "Ralph Emerson"
  },
  {
    body: "The deepest craving of human nature is the need to be appreciated.",
    author: "William James"
  },
  {
    body:
      "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    author: "Buddha"
  },
  {
    body:
      "Love does not consist of gazing at each other, but in looking together in the same direction.",
    author: "Antoine de Saint-Exupery"
  },
  {
    body:
      "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.",
    author: "Buddha"
  },
  {
    body:
      "Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has.",
    author: "Margaret Mead"
  },
  {
    body: "If you can dream it, you can do it.",
    author: "Walt Disney"
  },
  {
    body:
      "The odds of hitting your target go up dramatically when you aim at it.",
    author: "Mal Pancoast"
  },
  {
    body:
      "Compassion and happiness are not a sign of weakness but a sign of strength.",
    author: "Dalai Lama"
  },
  {
    body: "I cannot make my days longer so I strive to make them better.",
    author: "Henry David Thoreau"
  },
  {
    body:
      "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved.",
    author: "Helen Keller"
  },
  {
    body:
      "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
    author: "Bruce Lee"
  },
  {
    body:
      "The key to growth is the introduction of higher dimensions of consciousness into our awareness.",
    author: "Lao Tzu"
  },
  {
    body: "Fortune befriends the bold.",
    author: "John Dryden"
  },
  {
    body: "Excellence is not a skill. It is an attitude.",
    author: "Ralph Marston"
  },
  {
    body: "Your attitude, not your aptitude, will determine your altitude.",
    author: "Zig Ziglar"
  },
  {
    body:
      "There is no scarcity of opportunity to make a living at what you love; theres only scarcity of resolve to make it happen.",
    author: "Wayne Dyer"
  },
  {
    body:
      "One must be fond of people and trust them if one is not to make a mess of life.",
    author: "E. M. Forster"
  },
  {
    body:
      "The happy and efficient people in this world are those who accept trouble as a normal detail of human life and resolve to capitalize it when it comes along.",
    author: "H. Bertram Lewis"
  },
  {
    body:
      "Let your hook always be cast; in the pool where you least expect it, there will be a fish.",
    author: "Ovid"
  },
  {
    body:
      "Arrogance and rudeness are training wheels on the bicycle of life � for weak people who cannot keep their balance without them.",
    author: "Laura Teresa Marquez"
  },
  {
    body:
      "Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.",
    author: "Richard Bach"
  },
  {
    body:
      "We never understand how little we need in this world until we know the loss of it.",
    author: "James Barrie"
  },
  {
    body:
      "We have committed the Golden Rule to memory; let us now commit it to life.",
    author: "Edwin Markham"
  },
  {
    body:
      "Obstacles are those things you see when you take your eyes off the goal.",
    author: "Hannah More"
  },
  {
    body:
      "Knowing your own darkness is the best method for dealing with the darknesses of other people.",
    author: "Carl Jung"
  },
  {
    body: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra"
  },
  {
    body:
      "It is only when the mind and character slumber that the dress can be seen.",
    author: "Ralph Waldo Emerson"
  },
  {
    body: "If you can dream it, you can do it.",
    author: "Walt Disney"
  },
  {
    body: "Kind words do not cost much. Yet they accomplish much.",
    author: "Blaise Pascal"
  },
  {
    body:
      "It is with words as with sunbeams. The more they are condensed, the deeper they burn.",
    author: "Robert Southey"
  },
  {
    body:
      "Each time we face a fear, we gain strength, courage, and confidence in the doing.",
    author: ""
  },
  {
    body: "We cannot direct the wind but we can adjust the sails.",
    author: ""
  },
  {
    body:
      "This world, after all our science and sciences, is still a miracle; wonderful, inscrutable, magical and more, to whosoever will think of it.",
    author: "Thomas Carlyle"
  },
  {
    body: "Every gift from a friend is a wish for your happiness.",
    author: "Richard Bach"
  },
  {
    body: "When people are like each other they tend to like each other.",
    author: "Tony Robbins"
  },
  {
    body:
      "Id rather regret the things that I have done than the things that I have not done.",
    author: "Lucille Ball"
  },
  {
    body:
      "Sincerity is the way of Heaven. The attainment of sincerity is the way of men.",
    author: "Confucius"
  },
  {
    body:
      "I always wanted to be somebody, but I should have been more specific.",
    author: "Lily Tomlin"
  },
  {
    body:
      "The best and most beautiful things in the world cannot be seen, nor touched... but are felt in the heart.",
    author: "Helen Keller"
  },
  {
    body: "You can't trust without risk but neither can you live in a cocoon.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Everything you are against weakens you. Everything you are for empowers you.",
    author: "Wayne Dyer"
  },
  {
    body: "All I can say about life is, Oh God, enjoy it!",
    author: "Bob Newhart"
  },
  {
    body:
      "The secret of joy in work is contained in one word � excellence. To know how to do something well is to enjoy it.",
    author: "Pearl Buck"
  },
  {
    body: "There is only one happiness in life, to love and be loved.",
    author: "George Sand"
  },
  {
    body: "The eye sees only what the mind is prepared to comprehend.",
    author: "Henri Bergson"
  },
  {
    body: "Well begun is half done.",
    author: "Aristotle"
  },
  {
    body: "Don't think of it as failure. Think of it as time-released success.",
    author: "Robert Orben"
  },
  {
    body:
      "Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years.",
    author: "Richard Bach"
  },
  {
    body:
      "Try not to become a man of success, but rather try to become a man of value.",
    author: "Albert Einstein"
  },
  {
    body: "Meaning is not what you start with but what you end up with.",
    author: "Peter Elbow"
  },
  {
    body: "Be the change that you want to see in the world.",
    author: "Mohandas Gandhi"
  },
  {
    body: "The most formidable weapon against errors of every kind is reason.",
    author: "Thomas Paine"
  },
  {
    body:
      "I don't believe in failure. It is not failure if you enjoyed the process.",
    author: "Oprah Winfrey"
  },
  {
    body:
      "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved.",
    author: "Helen Keller"
  },
  {
    body:
      "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.",
    author: "Elbert Hubbard"
  },
  {
    body: "The more you care, the stronger you can be.",
    author: "Jim Rohn"
  },
  {
    body:
      "Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.",
    author: "Oprah Winfrey"
  },
  {
    body: "A good rest is half the work.",
    author: ""
  },
  {
    body: "Goals are the fuel in the furnace of achievement.",
    author: "Brian Tracy"
  },
  {
    body: "He who is contented is rich.",
    author: "Lao Tzu"
  },
  {
    body: "God always takes the simplest way.",
    author: "Albert Einstein"
  },
  {
    body: "Just trust yourself, then you will know how to live.",
    author: "Goethe"
  },
  {
    body: "Formula for success: under promise and over deliver.",
    author: "Tom Peters"
  },
  {
    body: "Everything in life is luck.",
    author: "Donald Trump"
  },
  {
    body:
      "The greatest part of our happiness depends on our dispositions, not our circumstances.",
    author: "Martha Washington"
  },
  {
    body:
      "Neither genius, fame, nor love show the greatness of the soul. Only kindness can do that.",
    author: "Jean Lacordaire"
  },
  {
    body:
      "Living at risk is jumping off the cliff and building your wings on the way down.",
    author: "Ray Bradbury"
  },
  {
    body:
      "What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people.",
    author: "Daisaku Ikeda"
  },
  {
    body: "Our intention creates our reality.",
    author: "Wayne Dyer"
  },
  {
    body:
      "To be fully alive, fully human, and completely awake is to be continually thrown out of the nest.",
    author: "Pema Chodron"
  },
  {
    body:
      "To free us from the expectations of others, to give us back to ourselves � there lies the great, singular power of self-respect.",
    author: "Joan Didion"
  },
  {
    body:
      "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.",
    author: "George Sheehan"
  },
  {
    body:
      "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
    author: "Bruce Lee"
  },
  {
    body:
      "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
    author: "Leonardo da Vinci"
  },
  {
    body: "A good rest is half the work.",
    author: ""
  },
  {
    body: "You won't skid if you stay in a rut.",
    author: "Kin Hubbard"
  },
  {
    body: "We must become the change we want to see.",
    author: "Mahatma Gandhi"
  },
  {
    body: "A rolling stone gathers no moss.",
    author: "Publilius Syrus"
  },
  {
    body:
      "Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.",
    author: "William Shakespeare"
  },
  {
    body: "Change in all things is sweet.",
    author: "Aristotle"
  },
  {
    body: "Fame usually comes to those who are thinking about something else.",
    author: "Holmes"
  },
  {
    body:
      "Setting an example is not the main means of influencing another, it is the only means.",
    author: "Albert Einstein"
  },
  {
    body:
      "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
    author: "Laurence J. Peter"
  },
  {
    body:
      "We know from science that nothing in the universe exists as an isolated or independent entity.",
    author: "Margaret Wheatley"
  },
  {
    body: "There is only one happiness in life, to love and be loved.",
    author: "George Sand"
  },
  {
    body:
      "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
    author: "Henry Longfellow"
  },
  {
    body:
      "The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you're being self-indulgent.",
    author: "Paul Graham"
  },
  {
    body: "Worry often gives a small thing a big shadow.",
    author: "Swedish proverb"
  },
  {
    body:
      "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
    author: "Jim Rohn"
  },
  {
    body:
      "Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.",
    author: "Arthur Rubinstein"
  },
  {
    body: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    body: "Nature is a mutable cloud which is always and never the same.",
    author: "Ralph Emerson"
  },
  {
    body: "We aim above the mark to hit the mark.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Our greatest glory is not in never failing but rising everytime we fall.",
    author: ""
  },
  {
    body:
      "It all depends on how we look at things, and not how they are in themselves.",
    author: "Carl Jung"
  },
  {
    body: "Be like the flower, turn your face to the sun.",
    author: "Kahlil Gibran"
  },
  {
    body: "He who talks more is sooner exhausted.",
    author: "Lao Tzu"
  },
  {
    body:
      "Giving up doesn't always mean you are weak; sometimes it means that you are strong enough to let go.",
    author: ""
  },
  {
    body: "To climb steep hills requires a slow pace at first.",
    author: "William Shakespeare"
  },
  {
    body:
      "An idea that is developed and put into action is more important than an idea that exists only as an idea.",
    author: "Buddha"
  },
  {
    body:
      "No valid plans for the future can be made by those who have no capacity for living now.",
    author: "Alan Watts"
  },
  {
    body: "There is nothing impossible to him who will try.",
    author: "Alexander the Great"
  },
  {
    body:
      "It is not the possession of truth, but the success which attends the seeking after it, that enriches the seeker and brings happiness to him.",
    author: "Max Planck"
  },
  {
    body: "Truth is generally the best vindication against slander.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "All achievements, all earned riches, have their beginning in an idea.",
    author: "Napoleon Hill"
  },
  {
    body: "To follow, without halt, one aim: There is the secret of success.",
    author: "Anna Pavlova"
  },
  {
    body: "When the solution is simple, God is answering.",
    author: "Albert Einstein"
  },
  {
    body: "Imagination is the highest kite one can fly.",
    author: "Lauren Bacall"
  },
  {
    body:
      "The way we communicate with others and with ourselves ultimately determines the quality of our lives.",
    author: "Tony Robbins"
  },
  {
    body:
      "If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him.",
    author: "Ralph Emerson"
  },
  {
    body:
      "The universe is transformation; our life is what our thoughts make it.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "The greatest minds are capable of the greatest vices as well as of the greatest virtues.",
    author: "Rene Descartes"
  },
  {
    body:
      "And as we let our own light shine, we unconsciously give other people permission to do the same.",
    author: "Nelson Mandela"
  },
  {
    body:
      "Let go of your attachment to being right, and suddenly your mind is more open. You're able to benefit from the unique viewpoints of others, without being crippled by your own judgement.",
    author: "Ralph Marston"
  },
  {
    body: "What is a weed? A plant whose virtues have not yet been discovered.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Learn wisdom from the ways of a seedling. A seedling which is never hardened off through stressful situations will never become a strong productive plant.",
    author: "Stephen Sigmund"
  },
  {
    body: "Those who cannot learn from history are doomed to repeat it.",
    author: "George Santayan"
  },
  {
    body:
      "Belief consists in accepting the affirmations of the soul; Unbelief, in denying them.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Living at risk is jumping off the cliff and building your wings on the way down.",
    author: "Ray Bradbury"
  },
  {
    body:
      "Remember that sometimes not getting what you want is a wonderful stroke of luck.",
    author: "Dalai Lama"
  },
  {
    body: "Be less curious about people and more curious about ideas.",
    author: "Marie Curie"
  },
  {
    body:
      "On every thorn, delightful wisdom grows, In every rill a sweet instruction flows.",
    author: "Edward Young"
  },
  {
    body:
      "Many people have gone further than they thought they could because someone else thought they could.",
    author: ""
  },
  {
    body:
      "To free us from the expectations of others, to give us back to ourselves � there lies the great, singular power of self-respect.",
    author: "Joan Didion"
  },
  {
    body:
      "In rivers, the water that you touch is the last of what has passed and the first of that which comes; so with present time.",
    author: "Leonardo da Vinci"
  },
  {
    body:
      "Speak when you are angry and you will make the best speech you will ever regret.",
    author: "Ambrose Bierce"
  },
  {
    body:
      "No person is your friend who demands your silence, or denies your right to grow.",
    author: "Alice Walker"
  },
  {
    body: "We choose our destiny in the way we treat others.",
    author: "Wit"
  },
  {
    body: "We read the world wrong and say that it deceives us.",
    author: "Rabindranath Tagore"
  },
  {
    body:
      "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
    author: "Lao Tzu"
  },
  {
    body: "If only wed stop trying to be happy wed have a pretty good time.",
    author: "Edith Wharton"
  },
  {
    body: "Don't cry because it's over. Smile because it happened.",
    author: "Dr. Seuss"
  },
  {
    body: "You must do the things you think you cannot do.",
    author: "Eleanor Roosevelt"
  },
  {
    body: "The path to success is to take massive, determined action.",
    author: "Tony Robbins"
  },
  {
    body:
      "Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest.",
    author: "Sri Chinmoy"
  },
  {
    body:
      "One may say the eternal mystery of the world is its comprehensibility.",
    author: "Albert Einstein"
  },
  {
    body: "To be upset over what you don't have is to waste what you do have.",
    author: "Ken S. Keyes"
  },
  {
    body: "Meaning is not what you start with but what you end up with.",
    author: "Peter Elbow"
  },
  {
    body:
      "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "Four steps to achievement: Plan purposefully. Prepare prayerfully. Proceed positively. Pursue persistently.",
    author: "William Arthur Ward"
  },
  {
    body:
      "A true friend is the most precious of all possessions and the one we take the least thought about acquiring.",
    author: "Francois de La Rochefoucauld"
  },
  {
    body: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    body:
      "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
    author: "Etty Hillesum"
  },
  {
    body:
      "The poor man is not he who is without a cent, but he who is without a dream.",
    author: "Harry Kemp"
  },
  {
    body: "Loss is nothing else but change,and change is Natures delight.",
    author: "Marcus Aurelius"
  },
  {
    body: "When deeds speak, words are nothing.",
    author: "African proverb"
  },
  {
    body:
      "Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.",
    author: "Richard Bach"
  },
  {
    body:
      "Successful people ask better questions, and as a result, they get better answers.",
    author: "Tony Robbins"
  },
  {
    body:
      "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius"
  },
  {
    body:
      "People of mediocre ability sometimes achieve outstanding success because they don't know when to quit. Most men succeed because they are determined to.",
    author: "George Allen"
  },
  {
    body: "A rolling stone gathers no moss.",
    author: "Publilius Syrus"
  },
  {
    body:
      "All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable.",
    author: "Kathleen Norris"
  },
  {
    body:
      "The mark of your ignorance is the depth of your belief in injustice and tragedy. What the caterpillar calls the end of the world, the Master calls the butterfly.",
    author: "Richard Bach"
  },
  {
    body:
      "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
    author: "Buckminster Fuller"
  },
  {
    body: "Things do not change; we change.",
    author: "Henry Thoreau"
  },
  {
    body:
      "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
    author: "Buckminster Fuller"
  },
  {
    body:
      "Most of the shadows of life are caused by standing in our own sunshine.",
    author: "Ralph Waldo Emerson"
  },
  {
    body: "Know, first, who you are, and then adorn yourself accordingly.",
    author: "Epictetus"
  },
  {
    body: "You cannot have what you do not want.",
    author: "John Acosta"
  },
  {
    body: "I cannot make my days longer so I strive to make them better.",
    author: "Henry David Thoreau"
  },
  {
    body:
      "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
    author: "Michelangelo"
  },
  {
    body:
      "Thought is the blossom; language the bud; action the fruit behind it.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Life is not measured by the breaths you take, but by its breathtaking moments.",
    author: "Michael Vance"
  },
  {
    body: "For everything that lives is holy, life delights in life.",
    author: "William Blake"
  },
  {
    body: "Don't smother each other. No one can grow in the shade.",
    author: "Leo F. Buscaglia"
  },
  {
    body:
      "I am glad that I paid so little attention to good advice; had I abided by it I might have been saved from some of my most valuable mistakes.",
    author: "Edna Millay"
  },
  {
    body:
      "The bird of paradise alights only upon the hand that does not grasp.",
    author: "John Berry"
  },
  {
    body: "To be upset over what you don't have is to waste what you do have.",
    author: "Ken S. Keyes"
  },
  {
    body: "Nothing great was ever achieved without enthusiasm.",
    author: "Ralph Emerson"
  },
  {
    body: "A thing well said will be wit in all languages.",
    author: "John Dryden"
  },
  {
    body: "Myths which are believed in tend to become true.",
    author: "George Orwell"
  },
  {
    body:
      "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.",
    author: "Arthur Conan Doyle"
  },
  {
    body:
      "Everyone thinks of changing the world, but no one thinks of changing himself.",
    author: "Leo Tolstoy"
  },
  {
    body: "The greatest remedy for anger is delay.",
    author: "Seneca"
  },
  {
    body:
      "One who asks a question is a fool for five minutes; one who does not ask a question remains a fool forever.",
    author: ""
  },
  {
    body: "Those who are free of resentful thoughts surely find peace.",
    author: "Buddha"
  },
  {
    body: "Great acts are made up of small deeds.",
    author: "Lao Tzu"
  },
  {
    body:
      "All the world is a stage, And all the men and women merely players.They have their exits and entrances; Each man in his time plays many parts.",
    author: "William Shakespeare"
  },
  {
    body:
      "I gave my life to become the person I am right now. Was it worth it?",
    author: "Richard Bach"
  },
  {
    body:
      "For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour.",
    author: "Mary Kay Ash"
  },
  {
    body:
      "To study and not think is a waste. To think and not study is dangerous.",
    author: "Confucius"
  },
  {
    body:
      "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
    author: "Anais Nin"
  },
  {
    body: "Most folks are as happy as they make up their minds to be.",
    author: "Abraham Lincoln"
  },
  {
    body: "What you see depends on what you're looking for.",
    author: ""
  },
  {
    body:
      "If you spend too much time thinking about a thing, you'll never get it done.",
    author: "Bruce Lee"
  },
  {
    body:
      "An optimist is a person who sees a green light everywhere, while the pessimist sees only the red spotlight... The truly wise person is colour-blind.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "Things turn out best for those who make the best of the way things turn out.",
    author: "Jack Buck"
  },
  {
    body: "If it is not right do not do it; if it is not true do not say it.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "To be beautiful means to be yourself. You don�t need to be accepted by others. You need to accept yourself.",
    author: "Thich Nhat Hanh"
  },
  {
    body: "Love is the master key that opens the gates of happiness.",
    author: "Oliver Holmes"
  },
  {
    body:
      "Our greatness lies not so much in being able to remake the world as being able to remake ourselves.",
    author: "Mahatma Gandhi"
  },
  {
    body: "What we achieve inwardly will change outer reality.",
    author: "Plutarch"
  },
  {
    body:
      "The most decisive actions of our life... are most often unconsidered actions.",
    author: "Andr� Gide"
  },
  {
    body: "If I know what love is, it is because of you.",
    author: "Hermann Hesse"
  },
  {
    body:
      "Your outlook on life is a direct reflection on how much you like yourself.",
    author: "Lululemon"
  },
  {
    body:
      "Nothing is softer or more flexible than water, yet nothing can resist it.",
    author: "Lao Tzu"
  },
  {
    body:
      "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
    author: "Isaac Asimov"
  },
  {
    body:
      "I believe that we are solely responsible for our choices, and we have to accept the consequences of every deed, word, and thought throughout our lifetime.",
    author: "Elisabeth Kubler-Ross"
  },
  {
    body:
      "The person who makes a success of living is the one who see his goal steadily and aims for it unswervingly. That is dedication.",
    author: "Cecil B. DeMille"
  },
  {
    body: "Tension is who you think you should be. Relaxation is who you are.",
    author: "Chinese proverb"
  },
  {
    body:
      "Friends are those rare people who ask how we are and then wait to hear the answer.",
    author: "Ed Cunningham"
  },
  {
    body:
      "Wishes can be your best avenue of getting what you want when you turn wishes into action. Action moves your wish to the forefront from thought to reality.",
    author: "Byron Pulsifer"
  },
  {
    body: "My reputation grows with every failure.",
    author: "George Shaw"
  },
  {
    body: "We know what we are, but know not what we may be.",
    author: "William Shakespeare"
  },
  {
    body: "Time is the wisest counsellor of all.",
    author: "Pericles"
  },
  {
    body:
      "The greatest good you can do for another is not just to share your riches but to reveal to him his own.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "Good thoughts are no better than good dreams, unless they be executed.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Trust only movement. Life happens at the level of events, not of words. Trust movement.",
    author: "Alfred Adler"
  },
  {
    body:
      "Success is getting what you want. Happiness is wanting what you get.",
    author: "Dale Carnegie"
  },
  {
    body:
      "Never be afraid to try, remember... Amateurs built the ark, Professionals built the Titanic.",
    author: ""
  },
  {
    body:
      "We are the leaves of one branch, the drops of one sea, the flowers of one garden.",
    author: "Jean Lacordaire"
  },
  {
    body:
      "The only real failure in life is not to be true to the best one knows.",
    author: "Buddha"
  },
  {
    body:
      "Happiness does not come about only due to external circumstances; it mainly derives from inner attitudes.",
    author: "Dalai Lama"
  },
  {
    body: "Skill to do comes of doing.",
    author: "Ralph Emerson"
  },
  {
    body: "As we risk ourselves, we grow. Each new experience is a risk.",
    author: "Fran Watson"
  },
  {
    body: "Be slow of tongue and quick of eye.",
    author: "Cervantes"
  },
  {
    body:
      "I always wanted to be somebody, but I should have been more specific.",
    author: "Lily Tomlin"
  },
  {
    body:
      "However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?",
    author: "Buddha"
  },
  {
    body: "The greatest barrier to success is the fear of failure.",
    author: "Eriksson"
  },
  {
    body: "For success, attitude is equally as important as ability.",
    author: "Harry Banks"
  },
  {
    body:
      "If you take each challenge one step at a time, with faith in every footstep, your strength and understanding will increase.",
    author: "James Faust"
  },
  {
    body:
      "If you correct your mind, the rest of your life will fall into place.",
    author: "Lao Tzu"
  },
  {
    body:
      "A life spent making mistakes is not only more honourable, but more useful than a life spent doing nothing.",
    author: "George Bernard Shaw"
  },
  {
    body:
      "Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.",
    author: "Richard Bach"
  },
  {
    body:
      "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
    author: "Buckminster Fuller"
  },
  {
    body:
      "Your work is to discover your work and then with all your heart to give yourself to it.",
    author: "Buddha"
  },
  {
    body:
      "Man is not sum of what he has already, but rather the sum of what he does not yet have, of what he could have.",
    author: "Jean-Paul Sartre"
  },
  {
    body:
      "Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.",
    author: "Albert Einstein"
  },
  {
    body:
      "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
    author: "Jim Rohn"
  },
  {
    body: "Knowledge rests not upon truth alone, but upon error also.",
    author: "Carl Jung"
  },
  {
    body:
      "Why worry about things you can�t control when you can keep yourself busy controlling the things that depend on you?",
    author: ""
  },
  {
    body:
      "The best and most beautiful things in the world cannot be seen, nor touched... but are felt in the heart.",
    author: "Helen Keller"
  },
  {
    body:
      "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.",
    author: "Morris West"
  },
  {
    body:
      "If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude.",
    author: "Colin Powell"
  },
  {
    body: "You can observe a lot just by watching.",
    author: "Yogi Berra"
  },
  {
    body:
      "Failure will never overtake me if my determination to succeed is strong enough.",
    author: "Og Mandino"
  },
  {
    body:
      "The man who trusts men will make fewer mistakes than he who distrusts them.",
    author: "Cavour"
  },
  {
    body:
      "To get something you never had, you have to do something you never did.",
    author: ""
  },
  {
    body: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein"
  },
  {
    body:
      "Your work is to discover your world and then with all your heart give yourself to it.",
    author: "Buddha"
  },
  {
    body:
      "The past has no power to stop you from being present now. Only your grievance about the past can do that.",
    author: "Eckhart Tolle"
  },
  {
    body: "Better than a thousand hollow words is one word that brings peace.",
    author: "Buddha"
  },
  {
    body:
      "Everything that irritates us about others can lead us to an understanding of ourselves.",
    author: "Carl Jung"
  },
  {
    body:
      "Never be afraid to try, remember... Amateurs built the ark, Professionals built the Titanic.",
    author: ""
  },
  {
    body:
      "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
    author: "Buddha"
  },
  {
    body: "The possibilities are numerous once we decide to act and not react.",
    author: "George Bernard Shaw"
  },
  {
    body:
      "The spirit, the will to win, and the will to excel, are the things that endure. These qualities are so much more important than the events that occur.",
    author: "Vincent Lombardi"
  },
  {
    body: "When fate hands us a lemon, lets try to make lemonade.",
    author: "Dale Carnegie"
  },
  {
    body: "We can only learn to love by loving.",
    author: "Iris Murdoch"
  },
  {
    body:
      "Remember always that you not only have the right to be an individual, you have an obligation to be one.",
    author: "Eleanor Roosevelt"
  },
  {
    body:
      "Fine words and an insinuating appearance are seldom associated with true virtue",
    author: "Confucius"
  },
  {
    body: "He who obtains has little. He who scatters has much.",
    author: "Lao Tzu"
  },
  {
    body: "Self-trust is the first secret of success.",
    author: "Ralph Emerson"
  },
  {
    body:
      "In the depth of winter, I finally learned that there was within me an invincible summer.",
    author: "Albert Camus"
  },
  {
    body:
      "Through perseverance many people win success out of what seemed destined to be certain failure.",
    author: "Benjamin Disraeli"
  },
  {
    body: "To be wrong is nothing unless you continue to remember it.",
    author: "Confucius"
  },
  {
    body: "Don't compromise yourself. You are all you've got.",
    author: "Janis Joplin"
  },
  {
    body: "Never ignore a gut feeling, but never believe that it's enough.",
    author: "Robert Heller"
  },
  {
    body: "Well done is better than well said.",
    author: "Benjamin Franklin"
  },
  {
    body:
      "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
    author: "Michelangelo"
  },
  {
    body: "Almost everything comes from nothing.",
    author: "Henri Amiel"
  },
  {
    body: "It isn't where you come from, it's where you're going that counts.",
    author: "Ella Fitzgerald"
  },
  {
    body: "He who is contented is rich.",
    author: "Lao Tzu"
  },
  {
    body: "Where all think alike, no one thinks very much.",
    author: "Walter Lippmann"
  },
  {
    body:
      "The world is round and the place which may seem like the end may also be the beginning.",
    author: "Ivy Baker Priest"
  },
  {
    body: "I never think of the future. It comes soon enough.",
    author: "Albert Einstein"
  },
  {
    body: "Sometimes by losing a battle you find a new way to win the war.",
    author: "Donald Trump"
  },
  {
    body:
      "Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.",
    author: "Douglas Adams"
  },
  {
    body:
      "People of mediocre ability sometimes achieve outstanding success because they don't know when to quit. Most men succeed because they are determined to.",
    author: "George Allen"
  },
  {
    body: "Listen to what you know instead of what you fear.",
    author: "Richard Bach"
  },
  {
    body:
      "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
    author: "John Astin"
  },
  {
    body:
      "One secret of success in life is for a man to be ready for his opportunity when it comes.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "You cannot step twice into the same river, for other waters are continually flowing in.",
    author: "Heraclitus"
  },
  {
    body:
      "Ideals are an imaginative understanding of that which is desirable in that which is possible.",
    author: "Walter Lippmann"
  },
  {
    body:
      "It is easier to live through someone else than to become complete yourself.",
    author: "Betty Friedan"
  },
  {
    body: "When you doubt your power, you give power to your doubt.",
    author: "Honore de Balzac"
  },
  {
    body:
      "It's important to know that words don't move mountains. Work, exacting work moves mountains.",
    author: "Danilo Dolci"
  },
  {
    body:
      "When your desires are strong enough you will appear to possess superhuman powers to achieve.",
    author: "Napoleon Hill"
  },
  {
    body:
      "If you're in a bad situation, don't worry it'll change. If you're in a good situation, don't worry it'll change.",
    author: "John Simone"
  },
  {
    body:
      "You can be what you want to be. You have the power within and we will help you always.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "The happy and efficient people in this world are those who accept trouble as a normal detail of human life and resolve to capitalize it when it comes along.",
    author: "H. Bertram Lewis"
  },
  {
    body:
      "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
    author: "Anais Nin"
  },
  {
    body: "The greatest obstacle to connecting with our joy is resentment.",
    author: "Pema Chodron"
  },
  {
    body: "Remember that failure is an event, not a person.",
    author: "Zig Ziglar"
  },
  {
    body: "Why worry about tomorrow, when today is all we have?",
    author: ""
  },
  {
    body:
      "There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness.",
    author: "Dalai Lama"
  },
  {
    body: "From little acorns mighty oaks do grow.",
    author: "American proverb"
  },
  {
    body:
      "You might well remember that nothing can bring you success but yourself.",
    author: "Napoleon Hill"
  },
  {
    body: "Don't settle for a relationship that won't let you be yourself.",
    author: "Oprah Winfrey"
  },
  {
    body: "Wherever a man turns he can find someone who needs him.",
    author: "Albert Schweitzer"
  },
  {
    body: "Not what we have but what we enjoy constitutes our abundance.",
    author: "John Petit-Senn"
  },
  {
    body: "As you think, so shall you become.",
    author: "Bruce Lee"
  },
  {
    body: "God has given you one face, and you make yourself another.",
    author: "William Shakespeare"
  },
  {
    body: "Bite off more than you can chew, then chew it.",
    author: "Ella Williams"
  },
  {
    body:
      "The way we communicate with others and with ourselves ultimately determines the quality of our lives.",
    author: "Tony Robbins"
  },
  {
    body: "The only limit to your impact is your imagination and commitment.",
    author: "Tony Robbins"
  },
  {
    body: "Nothing diminishes anxiety faster than action.",
    author: "Walter Anderson"
  },
  {
    body:
      "What the caterpillar calls the end of the world, the master calls a butterfly.",
    author: "Richard Bach"
  },
  {
    body:
      "Instead of saying that man is the creature of circumstance, it would be nearer the mark to say that man is the architect of circumstance.",
    author: "Thomas Carlyle"
  },
  {
    body:
      "A little knowledge that acts is worth infinitely more than much knowledge that is idle.",
    author: "Kahlil Gibran"
  },
  {
    body:
      "A smile is a light in the window of your face to show your heart is at home.",
    author: ""
  },
  {
    body:
      "You might well remember that nothing can bring you success but yourself.",
    author: "Napoleon Hill"
  },
  {
    body:
      "If you do what you've always done, you'll get what youve always gotten.",
    author: "Tony Robbins"
  },
  {
    body:
      "To dare is to lose ones footing momentarily. To not dare is to lose oneself.",
    author: "Soren Kierkegaard"
  },
  {
    body: "Memory is the mother of all wisdom.",
    author: "Samuel Johnson"
  },
  {
    body:
      "Make the best use of what is in your power, and take the rest as it happens.",
    author: "Epictetus"
  },
  {
    body: "Freedom is what you do with what's been done to you.",
    author: "Jean-Paul Sartre"
  },
  {
    body: "Do not wait for leaders; do it alone, person to person.",
    author: "Mother Teresa"
  },
  {
    body:
      "Knowledge has three degrees � opinion, science, illumination. The means or instrument of the first is sense; of the second, dialectic; of the third, intuition.",
    author: "Plotinus"
  },
  {
    body:
      "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.",
    author: "Dalai Lama"
  },
  {
    body:
      "Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind.",
    author: "Paavo Nurmi"
  },
  {
    body: "Never ignore a gut feeling, but never believe that it's enough.",
    author: "Robert Heller"
  },
  {
    body: "The price of greatness is responsibility.",
    author: "Winston Churchill"
  },
  {
    body: "You don't drown by falling in water. You drown by staying there.",
    author: ""
  },
  {
    body:
      "Obstacles are those things you see when you take your eyes off the goal.",
    author: "Hannah More"
  },
  {
    body:
      "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
    author: "Harriet Tubman"
  },
  {
    body: "Don't talk about what you have done or what you are going to do.",
    author: "Thomas Jefferson"
  },
  {
    body: "Everything in life is luck.",
    author: "Donald Trump"
  },
  {
    body:
      "Love vanquishes time. To lovers, a moment can be eternity, eternity can be the tick of a clock.",
    author: "Mary Parrish"
  },
  {
    body:
      "Letting go isn�t the end of the world; it�s the beginning of a new life.",
    author: ""
  },
  {
    body: "Science is organized knowledge. Wisdom is organized life.",
    author: "Immanuel Kant"
  },
  {
    body: "I'm not afraid of storms, for Im learning how to sail my ship.",
    author: "Louisa Alcott"
  },
  {
    body:
      "A little knowledge that acts is worth infinitely more than much knowledge that is idle.",
    author: "Kahlil Gibran"
  },
  {
    body:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Stevenson"
  },
  {
    body: "It is fatal to enter any war without the will to win it.",
    author: "General Douglas MacArthur"
  },
  {
    body: "Life is just a chance to grow a soul.",
    author: "A. Powell Davies"
  },
  {
    body:
      "Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you can't build on it; it's only for wallowing in.",
    author: "Katherine Mansfield"
  },
  {
    body: "You can observe a lot just by watching.",
    author: "Yogi Berra"
  },
  {
    body: "We never live; we are always in the expectation of living.",
    author: "Voltaire"
  },
  {
    body: "Think like a man of action; act like a man of thought.",
    author: "Henri L. Bergson"
  },
  {
    body: "The beginning is always today.",
    author: "Mary Wollstonecraft"
  },
  {
    body:
      "The universe is transformation; our life is what our thoughts make it.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "You can complain because roses have thorns, or you can rejoice because thorns have roses.",
    author: "Ziggy"
  },
  {
    body:
      "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "There is not one big cosmic meaning for all, there is only the meaning we each give to our life.",
    author: "Anais Nin"
  },
  {
    body: "Well done is better than well said.",
    author: "Benjamin Franklin"
  },
  {
    body:
      "I always wanted to be somebody, but I should have been more specific.",
    author: "Lily Tomlin"
  },
  {
    body: "Always do your best. What you plant now, you will harvest later.",
    author: "Og Mandino"
  },
  {
    body:
      "Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.",
    author: "Gloria Steinem"
  },
  {
    body:
      "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
    author: "Lao Tzu"
  },
  {
    body: "If it is not right do not do it; if it is not true do not say it.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "Every great mistake has a halfway moment, a split second when it can be recalled and perhaps remedied.",
    author: "Pearl Buck"
  },
  {
    body:
      "Kindness is more important than wisdom, and the recognition of this is the beginning of wisdom.",
    author: "Theodore Rubin"
  },
  {
    body:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    author: "Albert Einstein"
  },
  {
    body: "Time you enjoyed wasting was not wasted.",
    author: "John Lennon"
  },
  {
    body:
      "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
    author: "Albert Camus"
  },
  {
    body:
      "Genuine sincerity opens people's hearts, while manipulation causes them to close.",
    author: "Daisaku Ikeda"
  },
  {
    body:
      "Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer.",
    author: "Robert Graves"
  },
  {
    body:
      "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
    author: "Rumi"
  },
  {
    body: "Your big opportunity may be right where you are now.",
    author: "Napoleon Hill"
  },
  {
    body: "Do something wonderful, people may imitate it.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "To give ones self earnestly to the duties due to men, and, while respecting spiritual beings, to keep aloof from them, may be called wisdom.",
    author: "Confucius"
  },
  {
    body: "A man's dreams are an index to his greatness.",
    author: "Zadok Rabinowitz"
  },
  {
    body: "Everyone smiles in the same language.",
    author: ""
  },
  {
    body: "There is no way to happiness, happiness is the way.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "We do not quit playing because we grow old, we grow old because we quit playing.",
    author: "Oliver Holmes"
  },
  {
    body:
      "You're not obligated to win. You're obligated to keep trying to do the best you can every day.",
    author: "Marian Edelman"
  },
  {
    body:
      "Your body is precious. It is our vehicle for awakening. Treat it with care.",
    author: "Buddha"
  },
  {
    body:
      "Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.",
    author: "John Dewey"
  },
  {
    body: "What you do not want done to yourself, do not do to others.",
    author: "Confucius"
  },
  {
    body:
      "How many cares one loses when one decides not to be something but to be someone.",
    author: "Coco Chanel"
  },
  {
    body:
      "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.",
    author: "Buddha"
  },
  {
    body:
      "Why worry about things you can�t control when you can keep yourself busy controlling the things that depend on you?",
    author: ""
  },
  {
    body: "Why worry about tomorrow, when today is all we have?",
    author: ""
  },
  {
    body: "Know, first, who you are, and then adorn yourself accordingly.",
    author: "Epictetus"
  },
  {
    body: "Try and fail, but don't fail to try.",
    author: "Stephen Kaggwa"
  },
  {
    body:
      "The first duty of a human being is to assume the right functional relationship to society � more briefly, to find your real job, and do it.",
    author: "Charlotte Perkins Gilman"
  },
  {
    body: "Your big opportunity may be right where you are now.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
    author: "Wayne Dyer"
  },
  {
    body:
      "I believe that we are fundamentally the same and have the same basic potential.",
    author: "Dalai Lama"
  },
  {
    body:
      "Transformation does not start with some one else changing you; transformation is an inner self reworking of what you are now to what you will be.",
    author: "Byron Pulsifer"
  },
  {
    body: "Intuition will tell the thinking mind where to look next.",
    author: "Jonas Salk"
  },
  {
    body: "Our intention creates our reality.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
    author: "J. Willard Marriott"
  },
  {
    body:
      "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
    author: "Rumi"
  },
  {
    body:
      "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
    author: "Laozi"
  },
  {
    body: "Strong beliefs win strong men, and then make them stronger.",
    author: "Richard Bach"
  },
  {
    body:
      "The smallest act of kindness is worth more than the grandest intention.",
    author: "Oscar Wilde"
  },
  {
    body:
      "If you'll not settle for anything less than your best, you will be amazed at what you can accomplish in your lives.",
    author: "Vince Lombardi"
  },
  {
    body:
      "Only through our connectedness to others can we really know and enhance the self. And only through working on the self can we begin to enhance our connectedness to others.",
    author: "Harriet Lerner"
  },
  {
    body:
      "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.",
    author: "Blaise Pascal"
  },
  {
    body:
      "Be thankful when you don't know something for it gives you the opportunity to learn.",
    author: ""
  },
  {
    body: "Ignorance never settle a question.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "This is the final test of a gentleman: his respect for those who can be of no possible value to him.",
    author: "William Lyon Phelps"
  },
  {
    body: "Set your goals high, and don't stop till you get there.",
    author: "Bo Jackson"
  },
  {
    body: "Whoever is happy will make others happy, too.",
    author: "Mark Twain"
  },
  {
    body:
      "I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder.",
    author: "G. K. Chesterton"
  },
  {
    body:
      "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
    author: "Helen Keller"
  },
  {
    body: "To follow, without halt, one aim: There is the secret of success.",
    author: "Anna Pavlova"
  },
  {
    body: "A stumble may prevent a fall.",
    author: ""
  },
  {
    body: "The years teach much which the days never know.",
    author: "Ralph Emerson"
  },
  {
    body: "God has given you one face, and you make yourself another.",
    author: "William Shakespeare"
  },
  {
    body: "You teach best what you most need to learn.",
    author: "Richard Bach"
  },
  {
    body:
      "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
    author: "Isaac Asimov"
  },
  {
    body:
      "Compassion and happiness are not a sign of weakness but a sign of strength.",
    author: "Dalai Lama"
  },
  {
    body:
      "When you realize how perfect everything is you will tilt your head back and laugh at the sky.",
    author: "Buddha"
  },
  {
    body: "Watch the little things; a small leak will sink a great ship.",
    author: "Benjamin Franklin"
  },
  {
    body:
      "Continuous effort�not strength or intelligence�is the key to unlocking our potential.",
    author: "Winston Churchill"
  },
  {
    body:
      "We must learn our limits. We are all something, but none of us are everything.",
    author: "Blaise Pascal"
  },
  {
    body:
      "Obstacles are those frightful things you see when you take your eyes off your goal.",
    author: "Henry Ford"
  },
  {
    body:
      "Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary.",
    author: "Margaret Cousins"
  },
  {
    body: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    body:
      "Kindness is the language which the deaf can hear and the blind can see.",
    author: "Mark Twain"
  },
  {
    body:
      "To be tested is good. The challenged life may be the best therapist.",
    author: "Gail Sheehy"
  },
  {
    body:
      "To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.",
    author: "William Londen"
  },
  {
    body: "Sooner or later, those who win are those who think they can.",
    author: "Richard Bach"
  },
  {
    body:
      "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
    author: "Franklin Roosevelt"
  },
  {
    body: "Fortune favours the brave.",
    author: "Virgil"
  },
  {
    body: "The heart has its reasons which reason knows not of.",
    author: "Blaise Pascal"
  },
  {
    body: "Go for it now. The future is promised to no one.",
    author: "Wayne Dyer"
  },
  {
    body: "When you doubt your power, you give power to your doubt.",
    author: "Honore de Balzac"
  },
  {
    body:
      "Never tell a young person that anything cannot be done. God may have been waiting centuries for someone ignorant enough of the impossible to do that very thing.",
    author: "John Holmes"
  },
  {
    body:
      "Every action of our lives touches on some chord that will vibrate in eternity.",
    author: "Edwin Chapin"
  },
  {
    body:
      "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.",
    author: "Catherine Pulsifer"
  },
  {
    body: "Don't let what you can't do stop you from doing what you can do.",
    author: ""
  },
  {
    body:
      "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk.",
    author: "Doug Larson"
  },
  {
    body:
      "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
    author: "Buddha"
  },
  {
    body:
      "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.",
    author: "Sam Keen"
  },
  {
    body:
      "Being right is highly overrated. Even a stopped clock is right twice a day.",
    author: ""
  },
  {
    body:
      "To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.",
    author: "William Londen"
  },
  {
    body:
      "It is one of the blessings of old friends that you can afford to be stupid with them.",
    author: "Ralph Emerson"
  },
  {
    body:
      "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.",
    author: "Buddha"
  },
  {
    body:
      "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.",
    author: "Hannah Arendt"
  },
  {
    body: "Our passion is our strength.",
    author: "Billie Armstrong"
  },
  {
    body: "Learning is a treasure that will follow its owner everywhere",
    author: "Chinese proverb"
  },
  {
    body: "The best way to pay for a lovely moment is to enjoy it.",
    author: "Richard Bach"
  },
  {
    body: "Loss is nothing else but change,and change is Natures delight.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "Maxim for life: You get treated in life the way you teach people to treat you.",
    author: "Wayne Dyer"
  },
  {
    body: "Whatever happens, take responsibility.",
    author: "Tony Robbins"
  },
  {
    body:
      "The only way to tell the truth is to speak with kindness. Only the words of a loving man can be heard.",
    author: "Henry Thoreau"
  },
  {
    body:
      "Don't turn away from possible futures before you're certain you don't have anything to learn from them.",
    author: "Richard Bach"
  },
  {
    body:
      "Focusing your life solely on making a buck shows a poverty of ambition. It asks too little of yourself. And it will leave you unfulfilled.",
    author: "Barack Obama"
  },
  {
    body:
      "A single conversation across the table with a wise person is worth a months study of books.",
    author: "Chinese proverb"
  },
  {
    body: "We must not say every mistake is a foolish one.",
    author: "Cicero"
  },
  {
    body:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    author: "Albert Einstein"
  },
  {
    body:
      "With every experience, you alone are painting your own canvas, thought by thought, choice by choice.",
    author: "Oprah Winfrey"
  },
  {
    body: "The day always looks brighter from behind a smile.",
    author: ""
  },
  {
    body:
      "Allow the world to live as it chooses, and allow yourself to live as you choose.",
    author: "Richard Bach"
  },
  {
    body:
      "Bold is not the act of foolishness but the attribute and inner strength to act when others will not so as to move forward not backward.",
    author: "Byron Pulsifer"
  },
  {
    body: "From small beginnings come great things.",
    author: ""
  },
  {
    body:
      "One secret of success in life is for a man to be ready for his opportunity when it comes.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "If we look at the world with a love of life, the world will reveal its beauty to us.",
    author: "Daisaku Ikeda"
  },
  {
    body: "Open minds lead to open doors.",
    author: ""
  },
  {
    body:
      "The most important point is to accept yourself and stand on your two feet.",
    author: "Shunryu Suzuki"
  },
  {
    body: "In skating over thin ice our safety is in our speed.",
    author: "Ralph Emerson"
  },
  {
    body:
      "The self is not something ready-made, but something in continuous formation through choice of action.",
    author: "John Dewey"
  },
  {
    body:
      "When you discover your mission, you will feel its demand. It will fill you with enthusiasm and a burning desire to get to work on it.",
    author: "W. Clement Stone"
  },
  {
    body:
      "Happiness is the reward we get for living to the highest right we know.",
    author: "Richard Bach"
  },
  {
    body: "To want to be what one can be is purpose in life.",
    author: "Cynthia Ozick"
  },
  {
    body:
      "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that's why they call it the present.",
    author: ""
  },
  {
    body:
      "Creativity comes from trust. Trust your instincts. And never hope more than you work.",
    author: "Rita Mae Brown"
  },
  {
    body:
      "Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible.",
    author: "Maya Angelou"
  },
  {
    body:
      "Whatever we expect with confidence becomes our own self-fulfilling prophecy.",
    author: "Brian Tracy"
  },
  {
    body:
      "When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Be faithful in small things because it is in them that your strength lies.",
    author: "Mother Teresa"
  },
  {
    body:
      "Never deny a diagnosis, but do deny the negative verdict that may go with it.",
    author: "Norman Cousins"
  },
  {
    body:
      "The grand essentials of happiness are: something to do, something to love, and something to hope for.",
    author: "Chalmers"
  },
  {
    body:
      "Wisdom is knowing what to do next; Skill is knowing how ot do it, and Virtue is doing it.",
    author: "David Jordan"
  },
  {
    body: "Never promise more than you can perform.",
    author: "Publilius Syrus"
  },
  {
    body:
      "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
    author: "Helen Keller"
  },
  {
    body:
      "You were not born a winner, and you were not born a loser. You are what you make yourself be.",
    author: "Lou Holtz"
  },
  {
    body: "The greatest remedy for anger is delay.",
    author: "Seneca"
  },
  {
    body: "He who fears being conquered is sure of defeat.",
    author: "Napoleon Bonaparte"
  },
  {
    body:
      "Belief consists in accepting the affirmations of the soul; Unbelief, in denying them.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Everyone is a genius at least once a year. A real genius has his original ideas closer together.",
    author: "Georg Lichtenberg"
  },
  {
    body:
      "If you don't go after what you want, you'll never have it. If you don't ask, the answer is always no. If you don't step forward, you're always in the same place.",
    author: "Nora Roberts"
  },
  {
    body:
      "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.",
    author: "Mabel Newcomber"
  },
  {
    body: "Do not turn back when you are just at the goal.",
    author: "Publilius Syrus"
  },
  {
    body:
      "A single conversation across the table with a wise person is worth a months study of books.",
    author: "Chinese proverb"
  },
  {
    body: "When in doubt, tell the truth.",
    author: "Mark Twain"
  },
  {
    body: "Every problem has a gift for you in its hands.",
    author: "Richard Bach"
  },
  {
    body: "As you think, so shall you become.",
    author: "Bruce Lee"
  },
  {
    body: "The cautious seldom err.",
    author: "Confucius"
  },
  {
    body: "Be less curious about people and more curious about ideas.",
    author: "Marie Curie"
  },
  {
    body: "As you think, so shall you become.",
    author: "Bruce Lee"
  },
  {
    body:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    body: "I can't believe that God put us on this earth to be ordinary.",
    author: "Lou Holtz"
  },
  {
    body: "There are no limitations to the mind except those we acknowledge.",
    author: "Napoleon Hill"
  },
  {
    body: "You won't skid if you stay in a rut.",
    author: "Kin Hubbard"
  },
  {
    body:
      "The universe is full of magical things, patiently waiting for our wits to grow sharper.",
    author: "Eden Phillpotts"
  },
  {
    body: "Ignorance never settle a question.",
    author: "Benjamin Disraeli"
  },
  {
    body: "To fly, we have to have resistance.",
    author: "Maya Lin"
  },
  {
    body:
      "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
    author: "Bruce Lee"
  },
  {
    body: "Things do not change; we change.",
    author: "Henry Thoreau"
  },
  {
    body:
      "We never understand how little we need in this world until we know the loss of it.",
    author: "James Barrie"
  },
  {
    body: "He who angers you conquers you.",
    author: "Elizabeth Kenny"
  },
  {
    body:
      "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift. That is why we call it the present.",
    author: "Babatunde Olatunji"
  },
  {
    body: "Don't think of it as failure. Think of it as time-released success.",
    author: "Robert Orben"
  },
  {
    body:
      "Instead of saying that man is the creature of circumstance, it would be nearer the mark to say that man is the architect of circumstance.",
    author: "Thomas Carlyle"
  },
  {
    body:
      "The exercise of an extraordinary gift is the supremest pleasure in life.",
    author: "Mark Twain"
  },
  {
    body:
      "It is through science that we prove, but through intuition that we discover.",
    author: "Jules Poincare"
  },
  {
    body: "Every problem has a gift for you in its hands.",
    author: "Richard Bach"
  },
  {
    body:
      "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
    author: "Anais Nin"
  },
  {
    body:
      "The future is completely open, and we are writing it moment to moment.",
    author: "Pema Chodron"
  },
  {
    body:
      "Don't be dismayed by good-byes. A farewell is necessary before you can meet again. And meeting again, after moments or lifetimes, is certain for those who are friends.",
    author: "Richard Bach"
  },
  {
    body: "Nothing in life is to be feared. It is only to be understood.",
    author: "Marie Curie"
  },
  {
    body:
      "If someone in your life talked to you the way you talk to yourself, you would have left them long ago.",
    author: "Carla Gordon"
  },
  {
    body:
      "I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability.",
    author: "Confucius"
  },
  {
    body:
      "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
    author: "Richard Bach"
  },
  {
    body:
      "Courage is not about taking risks unknowingly but putting your own being in front of challenges that others may not be able to.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "The cosmos is neither moral or immoral; only people are. He who would move the world must first move himself.",
    author: "Edward Ericson"
  },
  {
    body:
      "Some people are always grumbling because roses have thorns; I am thankful that thorns have roses.",
    author: "Alphonse Karr"
  },
  {
    body: "Everyone smiles in the same language.",
    author: ""
  },
  {
    body:
      "If you lose today, win tomorrow. In this never-ending spirit of challenge is the heart of a victor.",
    author: "Daisaku Ikeda"
  },
  {
    body:
      "Arrogance and rudeness are training wheels on the bicycle of life � for weak people who cannot keep their balance without them.",
    author: "Laura Teresa Marquez"
  },
  {
    body: "Well done is better than well said.",
    author: "Benjamin Franklin"
  },
  {
    body: "No is easier to do. Yes is easier to say.",
    author: "Jason Fried"
  },
  {
    body: "Myths which are believed in tend to become true.",
    author: "George Orwell"
  },
  {
    body:
      "A failure is a man who has blundered but is not capable of cashing in on the experience.",
    author: "Elbert Hubbard"
  },
  {
    body: "You can do what's reasonable or you can decide what's possible.",
    author: ""
  },
  {
    body:
      "We must overcome the notion that we must be regular. It robs you of the chance to be extraordinary and leads you to the mediocre.",
    author: "Uta Hagen"
  },
  {
    body:
      "There is a way that nature speaks, that land speaks. Most of the time we are simply not patient enough, quiet enough, to pay attention to the story.",
    author: "Linda Hogan"
  },
  {
    body: "He who fears being conquered is sure of defeat.",
    author: "Napoleon Bonaparte"
  },
  {
    body: "You can do it if you believe you can!",
    author: "Napoleon Hill"
  },
  {
    body:
      "Take time to deliberate, but when the time for action has arrived, stop thinking and go in.",
    author: "Napoleon Bonaparte"
  },
  {
    body:
      "To listen well is as powerful a means of communication and influence as to talk well.",
    author: "John Marshall"
  },
  {
    body: "He who angers you conquers you.",
    author: "Elizabeth Kenny"
  },
  {
    body:
      "The secret of joy in work is contained in one word � excellence. To know how to do something well is to enjoy it.",
    author: "Pearl Buck"
  },
  {
    body:
      "Transformation doesn't take place with a vacuum; instead, it occurs when we are indirectly and directly connected to all those around us.",
    author: "Byron Pulsifer"
  },
  {
    body: "Everyone smiles in the same language.",
    author: ""
  },
  {
    body:
      "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
    author: "Laurence J. Peter"
  },
  {
    body:
      "You cannot make yourself feel something you do not feel, but you can make yourself do right in spite of your feelings.",
    author: "Pearl Buck"
  },
  {
    body:
      "Nobody made a greater mistake than he who did nothing because he could do only a little.",
    author: "Edmund Burke"
  },
  {
    body:
      "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.",
    author: "Catherine Pulsifer"
  },
  {
    body: "I have often regretted my speech, never my silence.",
    author: "Publilius Syrus"
  },
  {
    body: "Never promise more than you can perform.",
    author: "Publilius Syrus"
  },
  {
    body:
      "The best and most beautiful things in the world cannot be seen, nor touched... but are felt in the heart.",
    author: "Helen Keller"
  },
  {
    body:
      "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.",
    author: "Dalai Lama"
  },
  {
    body:
      "He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law.",
    author: "Pablo Picasso"
  },
  {
    body: "Complaining doesn't change a thing only taking action does.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "If you think you can, you can. And if you think you can't, you're right.",
    author: "Henry Ford"
  },
  {
    body:
      "If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagines, he will meet with a success unexpected in common hours.",
    author: "Henry David Thoreau"
  },
  {
    body: "If you wish to be a writer, write.",
    author: "Epictetus"
  },
  {
    body:
      "Never tell me the sky�s the limit when there are footprints on the moon.",
    author: ""
  },
  {
    body: "When people are like each other they tend to like each other.",
    author: "Tony Robbins"
  },
  {
    body:
      "I cannot say whether things will get better if we change; what I can say is they must change if they are to get better.",
    author: "Georg Lichtenberg"
  },
  {
    body:
      "Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace and gratitude.",
    author: "Denis Waitley"
  },
  {
    body:
      "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.",
    author: "Honore de Balzac"
  },
  {
    body: "We must not say every mistake is a foolish one.",
    author: "Cicero"
  },
  {
    body: "The way is not in the sky. The way is in the heart.",
    author: "Buddha"
  },
  {
    body: "Once we accept our limits, we go beyond them.",
    author: "Albert Einstein"
  },
  {
    body:
      "Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?",
    author: "Richard Bach"
  },
  {
    body:
      "There are two ways to slide easily through life: to believe everything or to doubt everything; both ways save us from thinking.",
    author: "Alfred Korzybski"
  },
  {
    body:
      "Fine words and an insinuating appearance are seldom associated with true virtue",
    author: "Confucius"
  },
  {
    body:
      "The greater part of human pain is unnecessary. It is self-created as long as the unobserved mind runs your life.",
    author: "Eckhart Tolle"
  },
  {
    body: "Shoot for the moon. Even if you miss, you'll land among the stars.",
    author: "Les Brown"
  },
  {
    body:
      "If the stars should appear but one night every thousand years how man would marvel and adore.",
    author: "Ralph Emerson"
  },
  {
    body:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin Roosevelt"
  },
  {
    body:
      "Learning without reflection is a waste, reflection without learning is dangerous.",
    author: "Confucius"
  },
  {
    body:
      "Think for yourselves and let others enjoy the privilege to do so too.",
    author: "Voltaire"
  },
  {
    body: "Take it easy � but take it.",
    author: "Woody Guthrie"
  },
  {
    body: "No garden is without its weeds.",
    author: "Thomas Fuller"
  },
  {
    body:
      "Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.",
    author: "Lao Tzu"
  },
  {
    body:
      "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
    author: "Albert Camus"
  },
  {
    body:
      "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
    author: "Helen Keller"
  },
  {
    body: "Life shrinks or expands in proportion to one's courage.",
    author: "Anais Nin"
  },
  {
    body:
      "Thats the risk you take if you change: that people you've been involved with won't like the new you. But other people who do will come along.",
    author: "Lisa Alther"
  },
  {
    body:
      "The winds and waves are always on the side of the ablest navigators.",
    author: "Edward Gibbon"
  },
  {
    body:
      "No yesterdays are ever wasted for those who give themselves to today.",
    author: "Brendan Francis"
  },
  {
    body:
      "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
    author: "Confucius"
  },
  {
    body:
      "Meditation brings wisdom; lack of mediation leaves ignorance. Know well what leads you forward and what hold you back, and choose the path that leads to wisdom.",
    author: "Buddha"
  },
  {
    body: "Change your words. Change your world.",
    author: ""
  },
  {
    body:
      "If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "You must train your intuition � you must trust the small voice inside you which tells you exactly what to say, what to decide.",
    author: "Ingrid Bergman"
  },
  {
    body: "Study the past, if you would divine the future.",
    author: "Confucius"
  },
  {
    body: "God has given you one face, and you make yourself another.",
    author: "William Shakespeare"
  },
  {
    body: "The only real valuable thing is intuition.",
    author: "Albert Einstein"
  },
  {
    body: "It is never too late to be what you might have been.",
    author: "George Eliot"
  },
  {
    body: "People seldom notice old clothes if you wear a big smile.",
    author: "Lee Mildon"
  },
  {
    body:
      "Blessed is the man who expects nothing, for he shall never be disappointed.",
    author: "Alexander Pope"
  },
  {
    body:
      "What the caterpillar calls the end of the world, the master calls a butterfly.",
    author: "Richard Bach"
  },
  {
    body: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    body: "What we think, we become.",
    author: "Buddha"
  },
  {
    body: "The foot feels the foot when it feels the ground.",
    author: "Buddha"
  },
  {
    body: "Rainbows apologize for angry skies.",
    author: "Sylvia Voirol"
  },
  {
    body: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "Bernard Shaw"
  },
  {
    body:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer"
  },
  {
    body: "He who knows others is wise. He who knows himself is enlightened.",
    author: "Lao Tzu"
  },
  {
    body:
      "The greatest way to live with honor in this world is to be what we pretend to be.",
    author: "Socrates"
  },
  {
    body:
      "Great are they who see that spiritual is stronger than any material force, that thoughts rule the world.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Trust only movement. Life happens at the level of events, not of words. Trust movement.",
    author: "Alfred Adler"
  },
  {
    body:
      "The really unhappy person is the one who leaves undone what they can do, and starts doing what they don't understand; no wonder they come to grief.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "An ant on the move does more than a dozing ox",
    author: "Lao Tzu"
  },
  {
    body: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  },
  {
    body:
      "They say that time changes things, but you actually have to change them yourself.",
    author: "Andy Warhol"
  },
  {
    body:
      "Learn all you can from the mistakes of others. You won't have time to make them all yourself.",
    author: "Alfred Sheinwold"
  },
  {
    body:
      "There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them.",
    author: "Denis Waitley"
  },
  {
    body:
      "If one is lucky, a solitary fantasy can totally transform one million realities.",
    author: "Maya Angelou"
  },
  {
    body: "Once we accept our limits, we go beyond them.",
    author: "Albert Einstein"
  },
  {
    body:
      "Strength to carry on despite the odds means you have faith in your own abilities and know how.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "And as we let our own light shine, we unconsciously give other people permission to do the same.",
    author: "Nelson Mandela"
  },
  {
    body:
      "The greatest pleasure I know is to do a good action by stealth, and to have it found out by accident.",
    author: "Charles Lamb"
  },
  {
    body:
      "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
    author: "Jim Rohn"
  },
  {
    body:
      "With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.",
    author: "Keshavan Nair"
  },
  {
    body: "Moments of complete apathy are the best for new creations.",
    author: "Philip Breedveld"
  },
  {
    body: "The best way to predict your future is to create it.",
    author: "Peter Drucker"
  },
  {
    body: "To avoid criticism, do nothing, say nothing, be nothing.",
    author: "Elbert Hubbard"
  },
  {
    body: "To accomplish great things, we must dream as well as act.",
    author: "Anatole France"
  },
  {
    body: "Fear is a darkroom where negatives develop.",
    author: "Usman Asif"
  },
  {
    body:
      "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.",
    author: "Sam Keen"
  },
  {
    body:
      "People take different roads seeking fulfilment and happiness. Just because theyre not on your road doesn't mean they've gotten lost.",
    author: "Dalai Lama"
  },
  {
    body: "Life is what you make of it. Always has been, always will be.",
    author: "Grandma Moses"
  },
  {
    body: "To see things in the seed, that is genius.",
    author: "Lao Tzu"
  },
  {
    body:
      "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    author: "Buddha"
  },
  {
    body:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Stevenson"
  },
  {
    body:
      "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
    author: "Rumi"
  },
  {
    body:
      "Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars.",
    author: "Henry Van Dyke"
  },
  {
    body:
      "A hero is no braver than an ordinary man, but he is braver five minutes longer.",
    author: "Ralph Waldo Emerson"
  },
  {
    body:
      "There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness.",
    author: "Dalai Lama"
  },
  {
    body: "Whoever is happy will make others happy, too.",
    author: "Mark Twain"
  },
  {
    body: "It's not what happens to you, but how you react to it that matters.",
    author: "Epictetus"
  },
  {
    body:
      "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
    author: "Tryon Edwards"
  },
  {
    body: "Anybody can make history. Only a great man can write it.",
    author: "Oscar Wilde"
  },
  {
    body:
      "A garden is always a series of losses set against a few triumphs, like life itself.",
    author: "May Sarton"
  },
  {
    body: "Difficulties are things that show a person what they are.",
    author: "Epictetus"
  },
  {
    body: "A goal without a plan is just a wish.",
    author: "Larry Elder"
  },
  {
    body:
      "Life is so constructed that an event does not, cannot, will not, match the expectation.",
    author: "Charlotte Bronte"
  },
  {
    body: "We shall never know all the good that a simple smile can do.",
    author: "Mother Teresa"
  },
  {
    body:
      "Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.",
    author: "Washington Irving"
  },
  {
    body:
      "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
    author: "Thomas Jefferson"
  },
  {
    body:
      "If facts are the seeds that later produce knowledge and wisdom, then the emotions and the impressions of the senses are the fertile soil in which the seeds must grow.",
    author: "Rachel Carson"
  },
  {
    body: "The harder you fall, the higher you bounce.",
    author: ""
  },
  {
    body:
      "Kindness is more important than wisdom, and the recognition of this is the beginning of wisdom.",
    author: "Theodore Rubin"
  },
  {
    body:
      "Compassion and happiness are not a sign of weakness but a sign of strength.",
    author: "Dalai Lama"
  },
  {
    body:
      "Don't focus on making the right decision, focus on making the decision the right one.",
    author: ""
  },
  {
    body: "The way is not in the sky. The way is in the heart.",
    author: "Buddha"
  },
  {
    body: "Light tomorrow with today!",
    author: "Elizabeth Browning"
  },
  {
    body:
      "Forgiveness does not change the past, but it does enlarge the future.",
    author: "Paul Boese"
  },
  {
    body: "You won't skid if you stay in a rut.",
    author: "Kin Hubbard"
  },
  {
    body: "Never mistake motion for action.",
    author: "Ernest Hemingway"
  },
  {
    body:
      "Genuine love should first be directed at oneself � if we do not love ourselves, how can we love others?",
    author: "Dalai Lama"
  },
  {
    body: "Your attitude, not your aptitude, will determine your altitude.",
    author: "Zig Ziglar"
  },
  {
    body:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself.",
    author: "Confucius"
  },
  {
    body:
      "Never bend your head. Always hold it high. Look the world right in the eye.",
    author: "Helen Keller"
  },
  {
    body: "A goal without a plan is just a wish.",
    author: "Larry Elder"
  },
  {
    body:
      "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
    author: "Confucius"
  },
  {
    body:
      "Friendship with oneself is all important because without it one cannot be friends with anybody else in the world.",
    author: "Eleanor Roosevelt"
  },
  {
    body: "I have often regretted my speech, never my silence.",
    author: "Publilius Syrus"
  },
  {
    body:
      "One needs something to believe in, something for which one can have whole-hearted enthusiasm. One needs to feel that ones life has meaning, that one is needed in this world.",
    author: "Hannah Senesh"
  },
  {
    body:
      "One who is too insistent on his own views, finds few to agree with him.",
    author: "Lao Tzu"
  },
  {
    body:
      "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.",
    author: "Thomas Carlyle"
  },
  {
    body:
      "A single conversation across the table with a wise person is worth a months study of books.",
    author: "Chinese proverb"
  },
  {
    body:
      "Be what you are. This is the first step toward becoming better than you are.",
    author: "Julius Charles Hare"
  },
  {
    body:
      "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
    author: "Buddha"
  },
  {
    body: "Your attitude, not your aptitude, will determine your altitude.",
    author: "Zig Ziglar"
  },
  {
    body: "Ability will never catch up with the demand for it.",
    author: "Confucius"
  },
  {
    body:
      "Nature gave us one tongue and two ears so we could hear twice as much as we speak.",
    author: "Epictetus"
  },
  {
    body:
      "To be happy is to be able to become aware of oneself without fright.",
    author: "Walter Benjamin"
  },
  {
    body: "You only lose what you cling to.",
    author: "Buddha"
  },
  {
    body: "A weed is no more than a flower in disguise.",
    author: "James Lowell"
  },
  {
    body:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison"
  },
  {
    body: "The secret to a rich life is to have more beginnings than endings.",
    author: "Dave Weinbaum"
  },
  {
    body:
      "Translation is the paradigm, the exemplar of all writing. It is translation that demonstrates most vividly the yearning for transformation that underlies every act involving speech, that supremely human gift.",
    author: "Harry Burchell Mathews"
  },
  {
    body:
      "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk.",
    author: "Doug Larson"
  },
  {
    body: "Nothing ever goes away until it has taught us what we need to know.",
    author: "Pema Chodron"
  },
  {
    body:
      "A successful person is one who can lay a firm foundation with the bricks that others throw at him or her.",
    author: "David Brinkley"
  },
  {
    body:
      "Meditation is the dissolution of thoughts in eternal awareness or Pure consciousness without objectification, knowing without thinking, merging finitude in infinity.",
    author: "Voltaire"
  },
  {
    body:
      "The reasonable man adapts himself to the world; the unreasonable man persists in trying to adapt the world to himself. Therefore, all progress depends on the unreasonable man.",
    author: "George Shaw"
  },
  {
    body:
      "Setting goals is the first step in turning the invisible into the visible.",
    author: "Tony Robbins"
  },
  {
    body:
      "The universe is transformation; our life is what our thoughts make it.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.",
    author: "Robert Louis Stevenson"
  },
  {
    body:
      "Good instincts usually tell you what to do long before your head has figured it out.",
    author: "Michael Burke"
  },
  {
    body: "Meaning is not what you start with but what you end up with.",
    author: "Peter Elbow"
  },
  {
    body:
      "We are all faced with a series of great opportunities brilliantly disguised as impossible situations.",
    author: "Charles R. Swindoll"
  },
  {
    body:
      "What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people.",
    author: "Daisaku Ikeda"
  },
  {
    body:
      "The biggest adventure you can ever take is to live the life of your dreams.",
    author: "Oprah Winfrey"
  },
  {
    body:
      "Logic will get you from A to B. Imagination will take you everywhere.",
    author: "Albert Einstein"
  },
  {
    body:
      "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.",
    author: "Hannah Arendt"
  },
  {
    body: "A short saying often contains much wisdom.",
    author: "Sophocles"
  },
  {
    body: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster"
  },
  {
    body: "What is not started today is never finished tomorrow.",
    author: "Goethe"
  },
  {
    body:
      "It isn't what happens to us that causes us to suffer; it's what we say to ourselves about what happens.",
    author: "Pema Chodron"
  },
  {
    body:
      "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
    author: "Anais Nin"
  },
  {
    body: "Bite off more than you can chew, then chew it.",
    author: "Ella Williams"
  },
  {
    body: "Ignorance never settle a question.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "Failure will never overtake me if my determination to succeed is strong enough.",
    author: "Og Mandino"
  },
  {
    body:
      "Those who dream by day are cognizant of many things which escape those who dream only by night.",
    author: "Edgar Allan Poe"
  },
  {
    body:
      "All that we are is the result of what we have thought. The mind is everything. What we think we become.",
    author: "Buddha"
  },
  {
    body:
      "There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness.",
    author: "Dalai Lama"
  },
  {
    body:
      "We cannot hold a torch to light another's path without brightening our own.",
    author: "Ben Sweetland"
  },
  {
    body:
      "The minute you settle for less than you deserve, you get even less than you settled for.",
    author: "Maureen Dowd"
  },
  {
    body:
      "You are never given a wish without also being given the power to make it come true. You may have to work for it, however.",
    author: "Richard Bach"
  },
  {
    body:
      "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
    author: "Jim Rohn"
  },
  {
    body: "A weed is no more than a flower in disguise.",
    author: "James Lowell"
  },
  {
    body: "Real success is finding your lifework in the work that you love.",
    author: "David McCullough"
  },
  {
    body: "Great talent finds happiness in execution.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "We are all faced with a series of great opportunities brilliantly disguised as impossible situations.",
    author: "Charles R. Swindoll"
  },
  {
    body: "The deepest craving of human nature is the need to be appreciated.",
    author: "William James"
  },
  {
    body:
      "If you have no respect for your own values how can you be worthy of respect from others.",
    author: "Byron Pulsifer"
  },
  {
    body: "Where there is great love, there are always miracles.",
    author: "Willa Cather"
  },
  {
    body: "I allow my intuition to lead my path.",
    author: "Manuel Puig"
  },
  {
    body: "Never, never, never give up.",
    author: "Winston Churchill"
  },
  {
    body: "From little acorns mighty oaks do grow.",
    author: "American proverb"
  },
  {
    body: "I believe that every person is born with talent.",
    author: "Maya Angelou"
  },
  {
    body:
      "The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work.",
    author: "Dalai Lama"
  },
  {
    body: "Can you imagine what I would do if I could do all I can?",
    author: "Sun Tzu"
  },
  {
    body:
      "Wherever a man may happen to turn, whatever a man may undertake, he will always end up by returning to the path which nature has marked out for him.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "It's so simple to be wise. Just think of something stupid to say and then don't say it.",
    author: "Sam Levenson"
  },
  {
    body:
      "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
    author: "Laozi"
  },
  {
    body:
      "Many people have gone further than they thought they could because someone else thought they could.",
    author: ""
  },
  {
    body: "Keep true to the dreams of thy youth.",
    author: "Friedrich von Schiller"
  },
  {
    body:
      "Happiness does not come from having much, but from being attached to little.",
    author: "Cheng Yen"
  },
  {
    body: "Most smiles are started by another smile.",
    author: ""
  },
  {
    body:
      "Through meditation and by giving full attention to one thing at a time, we can learn to direct attention where we choose.",
    author: "Eknath Easwaran"
  },
  {
    body:
      "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.",
    author: "Thomas Carlyle"
  },
  {
    body:
      "If you can't explain it simply, you don't understand it well enough.",
    author: "Albert Einstein"
  },
  {
    body: "All know the way; few actually walk it.",
    author: "Bodhidharma"
  },
  {
    body:
      "However many holy words you read, However many you speak, What good will they do you If you do not act on upon them?",
    author: "Buddha"
  },
  {
    body:
      "What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people.",
    author: "Daisaku Ikeda"
  },
  {
    body:
      "When you begin to touch your heart or let your heart be touched, you begin to discover that it's bottomless.",
    author: "Pema Chodron"
  },
  {
    body:
      "Kind words can be short and easy to speak, but their echoes are truly endless.",
    author: "Mother Teresa"
  },
  {
    body: "Life shrinks or expands in proportion to one's courage.",
    author: "Anais Nin"
  },
  {
    body:
      "With realization of ones own potential and self-confidence in ones ability, one can build a better world.",
    author: "Dalai Lama"
  },
  {
    body:
      "Count your joys instead of your woes. Count your friends instead of your foes.",
    author: ""
  },
  {
    body: "The cause is hidden. The effect is visible to all.",
    author: "Ovid"
  },
  {
    body:
      "You were not born a winner, and you were not born a loser. You are what you make yourself be.",
    author: "Lou Holtz"
  },
  {
    body:
      "If one does not know to which port is sailing, no wind is favorable.",
    author: "Seneca"
  },
  {
    body: "I think and that is all that I am.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Dreams come true. Without that possibility, nature would not incite us to have them.",
    author: "John Updike"
  },
  {
    body:
      "To be able to give away riches is mandatory if you wish to possess them. This is the only way that you will be truly rich.",
    author: "Mahummad Ali"
  },
  {
    body:
      "One needs something to believe in, something for which one can have whole-hearted enthusiasm. One needs to feel that ones life has meaning, that one is needed in this world.",
    author: "Hannah Senesh"
  },
  {
    body: "Nothing in life is to be feared. It is only to be understood.",
    author: "Marie Curie"
  },
  {
    body:
      "A little knowledge that acts is worth infinitely more than much knowledge that is idle.",
    author: "Kahlil Gibran"
  },
  {
    body:
      "If you would take, you must first give, this is the beginning of intelligence.",
    author: "Lao Tzu"
  },
  {
    body:
      "Positive thinking will let you do everything better than negative thinking will.",
    author: "Zig Ziglar"
  },
  {
    body:
      "He who lives in harmony with himself lives in harmony with the world.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "Staying in one place is the best path to be taken over and surpassed by many.",
    author: "Byron Pulsifer"
  },
  {
    body: "To know oneself is to study oneself in action with another person.",
    author: "Bruce Lee"
  },
  {
    body:
      "However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?",
    author: "Buddha"
  },
  {
    body: "Doing nothing is better than being busy doing nothing.",
    author: "Lao Tzu"
  },
  {
    body:
      "There is not one big cosmic meaning for all, there is only the meaning we each give to our life.",
    author: "Anais Nin"
  },
  {
    body:
      "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.",
    author: "Naguib Mahfouz"
  },
  {
    body:
      "The truth of the matter is that you always know the right thing to do. The hard part is doing it.",
    author: "Norman Schwarzkopf"
  },
  {
    body:
      "Imagination will often carry us to worlds that never were. But without it we go nowhere.",
    author: "Carl Sagan"
  },
  {
    body:
      "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
    author: "Helen Keller"
  },
  {
    body:
      "We must be as courteous to a man as we are to a picture, which we are willing to give the advantage of a good light.",
    author: "Ralph Emerson"
  },
  {
    body: "Change your thoughts, change your life!",
    author: ""
  },
  {
    body:
      "You have to take it as it happens, but you should try to make it happen the way you want to take it.",
    author: "Old German proverb"
  },
  {
    body: "All I can say about life is, Oh God, enjoy it!",
    author: "Bob Newhart"
  },
  {
    body:
      "Real magic in relationships means an absence of judgement of others.",
    author: "Wayne Dyer"
  },
  {
    body: "Problems are only opportunities with thorns on them.",
    author: "Hugh Miller"
  },
  {
    body: "He who knows himself is enlightened.",
    author: "Lao Tzu"
  },
  {
    body:
      "The minute you settle for less than you deserve, you get even less than you settled for.",
    author: "Maureen Dowd"
  },
  {
    body: "I think and that is all that I am.",
    author: "Wayne Dyer"
  },
  {
    body: "Fortune favours the brave.",
    author: "Virgil"
  },
  {
    body:
      "A leader or a man of action in a crisis almost always acts subconsciously and then thinks of the reasons for his action.",
    author: "Jawaharlal Nehru"
  },
  {
    body:
      "Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest.",
    author: "Sri Chinmoy"
  },
  {
    body: "The secret of success is constancy to purpose.",
    author: "Benjamin Disraeli"
  },
  {
    body: "Absence makes the heart grow fonder.",
    author: "Haynes Bayly"
  },
  {
    body:
      "The best place to find a helping hand is at the end of your own arm.",
    author: ""
  },
  {
    body:
      "The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work.",
    author: "Dalai Lama"
  },
  {
    body: "I have no special talent. I am only passionately curious.",
    author: "Albert Einstein"
  },
  {
    body: "He who knows others is wise. He who knows himself is enlightened.",
    author: "Lao Tzu"
  },
  {
    body:
      "What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people.",
    author: "Daisaku Ikeda"
  },
  {
    body: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster"
  },
  {
    body: "Remember that failure is an event, not a person.",
    author: "Zig Ziglar"
  },
  {
    body: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    body:
      "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.",
    author: "Mabel Newcomber"
  },
  {
    body:
      "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.",
    author: "Buddha"
  },
  {
    body:
      "I'm not interested in age. People who tell me their age are silly. You're as old as you feel.",
    author: "Elizabeth Arden"
  },
  {
    body:
      "Nothing is softer or more flexible than water, yet nothing can resist it.",
    author: "Lao Tzu"
  },
  {
    body: "Yesterday I dared to struggle. Today I dare to win.",
    author: "Bernadette Devlin"
  },
  {
    body:
      "I'm a great believer in luck and I find the harder I work, the more I have of it.",
    author: "Thomas Jefferson"
  },
  {
    body:
      "If you look into your own heart, and you find nothing wrong there, what is there to worry about? What is there to fear?",
    author: "Confucius"
  },
  {
    body:
      "I endeavour to be wise when I cannot be merry, easy when I cannot be glad, content with what cannot be mended and patient when there is no redress.",
    author: "Elizabeth Montagu"
  },
  {
    body:
      "The shoe that fits one person pinches another; there is no recipe for living that suits all cases.",
    author: "Carl Jung"
  },
  {
    body:
      "The world has the habit of making room for the man whose actions show that he knows where he is going.",
    author: "Napoleon Hill"
  },
  {
    body: "You always succeed in producing a result.",
    author: "Tony Robbins"
  },
  {
    body: "You are the only person on earth who can use your ability.",
    author: "Zig Ziglar"
  },
  {
    body:
      "To live a pure unselfish life, one must count nothing as ones own in the midst of abundance.",
    author: "Buddha"
  },
  {
    body: "To be wrong is nothing unless you continue to remember it.",
    author: "Confucius"
  },
  {
    body:
      "The happiness that is genuinely satisfying is accompanied by the fullest exercise of our faculties and the fullest realization of the world in which we live.",
    author: "Bertrand Russell"
  },
  {
    body:
      "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.",
    author: "Pema Chodron"
  },
  {
    body: "A man who doesn't trust himself can never really trust anyone else.",
    author: "Cardinal Retz"
  },
  {
    body:
      "Without passion man is a mere latent force and possibility, like the flint which awaits the shock of the iron before it can give forth its spark.",
    author: "Amiel"
  },
  {
    body:
      "Not every difficult and dangerous thing is suitable for training, but only that which is conducive to success in achieving the object of our effort.",
    author: "Epictetus"
  },
  {
    body: "It takes both sunshine and rain to make a rainbow.",
    author: ""
  },
  {
    body:
      "An idea that is developed and put into action is more important than an idea that exists only as an idea.",
    author: "Buddha"
  },
  {
    body: "You can do it if you believe you can!",
    author: "Napoleon Hill"
  },
  {
    body:
      "Do not expect the world to look bright, if you habitually wear gray-brown glasses.",
    author: "Tomas Eliot"
  },
  {
    body: "Change in all things is sweet.",
    author: "Aristotle"
  },
  {
    body: "They can do all because they think they can.",
    author: "Virgil"
  },
  {
    body: "The two most powerful warriors are patience and time.",
    author: "Leo Tolstoy"
  },
  {
    body:
      "The height of your accomplishments will equal the depth of your convictions.",
    author: "William Scolavino"
  },
  {
    body: "If you come to a fork in the road, take it.",
    author: ""
  },
  {
    body:
      "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
    author: "Leonardo da Vinci"
  },
  {
    body:
      "However many holy words you read, However many you speak, What good will they do you If you do not act on upon them?",
    author: "Buddha"
  },
  {
    body: "You cannot be lonely if you like the person you're alone with.",
    author: "Wayne Dyer"
  },
  {
    body: "Freedom is the right to live as we wish.",
    author: "Epictetus"
  },
  {
    body:
      "The truth of the matter is that you always know the right thing to do. The hard part is doing it.",
    author: "Norman Schwarzkopf"
  },
  {
    body: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster"
  },
  {
    body:
      "As we are liberated from our own fear, our presence automatically liberates others.",
    author: "Nelson Mandela"
  },
  {
    body:
      "If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when?",
    author: "Rabbi Hillel"
  },
  {
    body:
      "It has never been my object to record my dreams, just to realize them.",
    author: "Man Ray"
  },
  {
    body: "Wisdom begins in wonder.",
    author: "Socrates"
  },
  {
    body:
      "We must never forget that it is through our actions, words, and thoughts that we have a choice.",
    author: "Sogyal Rinpoche"
  },
  {
    body:
      "He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye.",
    author: "Buddha"
  },
  {
    body:
      "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    author: "Audre Lorde"
  },
  {
    body:
      "To give hope to someone occurs when you teach them how to use the tools to do it for themselves.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
    author: "Bernard Shaw"
  },
  {
    body: "We know what we are, but know not what we may be.",
    author: "William Shakespeare"
  },
  {
    body:
      "If you let go a little, you will have a little peace. If you let go a lot, you will have a lot of peace.",
    author: "Ajahn Chah"
  },
  {
    body:
      "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.",
    author: "Julie Morgenstern"
  },
  {
    body: "What is a weed? A plant whose virtues have not yet been discovered.",
    author: "Ralph Emerson"
  },
  {
    body: "To be wronged is nothing unless you continue to remember it.",
    author: "Confucius"
  },
  {
    body:
      "Your destiny isn't just fate; it is how you use your own developed abilities to get what you want.",
    author: "Byron Pulsifer"
  },
  {
    body: "How we spend our days is, of course, how we spend our lives.",
    author: "Annie Dillard"
  },
  {
    body: "To accomplish great things, we must dream as well as act.",
    author: "Anatole France"
  },
  {
    body: "If we did the things we are capable of, we would astound ourselves.",
    author: "Thomas Edison"
  },
  {
    body: "You are the only person on Earth who can use your ability.",
    author: "Zig Ziglar"
  },
  {
    body:
      "Success is getting what you want. Happiness is wanting what you get.",
    author: "Dale Carnegie"
  },
  {
    body:
      "Never idealize others. They will never live up to your expectations.",
    author: "Leo Buscaglia"
  },
  {
    body:
      "I cannot always control what goes on outside. But I can always control what goes on inside.",
    author: "Wayne Dyer"
  },
  {
    body: "Those who will play with cats must expect to be scratched.",
    author: "Cervantes"
  },
  {
    body:
      "We can only be said to be alive in those moments when our hearts are conscious of our treasures.",
    author: "Thornton Wilder"
  },
  {
    body: "Today is the tomorrow you worried about yesterday.",
    author: ""
  },
  {
    body: "Every gift from a friend is a wish for your happiness.",
    author: "Richard Bach"
  },
  {
    body: "When performance exceeds ambition, the overlap is called success.",
    author: "Cullen Hightower"
  },
  {
    body:
      "This is the final test of a gentleman: his respect for those who can be of no possible value to him.",
    author: "William Lyon Phelps"
  },
  {
    body: "We choose our destiny in the way we treat others.",
    author: "Wit"
  },
  {
    body:
      "Divide each difficulty into as many parts as is feasible and necessary to resolve it.",
    author: "Rene Descartes"
  },
  {
    body:
      "Only through our connectedness to others can we really know and enhance the self. And only through working on the self can we begin to enhance our connectedness to others.",
    author: "Harriet Lerner"
  },
  {
    body:
      "When you discover your mission, you will feel its demand. It will fill you with enthusiasm and a burning desire to get to work on it.",
    author: "W. Clement Stone"
  },
  {
    body: "You won't skid if you stay in a rut.",
    author: "Kin Hubbard"
  },
  {
    body:
      "To listen well is as powerful a means of communication and influence as to talk well.",
    author: "John Marshall"
  },
  {
    body:
      "I am a man of fixed and unbending principles, the first of which is to be flexible at all times.",
    author: "Everett Dirksen"
  },
  {
    body:
      "Do not give your attention to what others do or fail to do; give it to what you do or fail to do.",
    author: "Dhammapada"
  },
  {
    body: "Well begun is half done.",
    author: "Aristotle"
  },
  {
    body: "The years teach much which the days never know.",
    author: "Ralph Emerson"
  },
  {
    body: "Set your goals high, and don't stop till you get there.",
    author: "Bo Jackson"
  },
  {
    body:
      "What the caterpillar calls the end of the world, the master calls a butterfly.",
    author: "Richard Bach"
  },
  {
    body: "An obstacle may be either a stepping stone or a stumbling block.",
    author: ""
  },
  {
    body:
      "I am not afraid of tomorrow, for I have seen yesterday and I love today.",
    author: "William White"
  },
  {
    body:
      "We know from science that nothing in the universe exists as an isolated or independent entity.",
    author: "Margaret Wheatley"
  },
  {
    body:
      "Each misfortune you encounter will carry in it the seed of tomorrows good luck.",
    author: "Og Mandino"
  },
  {
    body:
      "If you want to study yourself � look into the hearts of other people. If you want to study other people � look into your own heart.",
    author: "Friedrich von Schiller"
  },
  {
    body:
      "Your outlook on life is a direct reflection on how much you like yourself.",
    author: "Lululemon"
  },
  {
    body:
      "The place to improve the world is first in one's own heart and head and hands.",
    author: "Robert M. Pirsig"
  },
  {
    body:
      "Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.",
    author: "John Dewey"
  },
  {
    body: "Absence makes the heart grow fonder.",
    author: "Haynes Bayly"
  },
  {
    body:
      "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.",
    author: "Charles Darwin"
  },
  {
    body:
      "Learning without reflection is a waste, reflection without learning is dangerous.",
    author: "Confucius"
  },
  {
    body:
      "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
    author: "J. Willard Marriott"
  },
  {
    body:
      "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.",
    author: "Pema Chodron"
  },
  {
    body:
      "Happiness is a perfume you cannot pour on others without getting a few drops on yourself.",
    author: "Ralph Waldo Emerson"
  },
  {
    body: "From error to error one discovers the entire truth.",
    author: "Sigmund Freud"
  },
  {
    body:
      "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more",
    author: "Anthony Robbins"
  },
  {
    body: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein"
  },
  {
    body:
      "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.",
    author: "Buddha"
  },
  {
    body:
      "We must learn our limits. We are all something, but none of us are everything.",
    author: "Blaise Pascal"
  },
  {
    body:
      "If you get up one more time than you fall, you will make it through.",
    author: ""
  },
  {
    body:
      "All great men are gifted with intuition. They know without reasoning or analysis, what they need to know.",
    author: "Alexis Carrel"
  },
  {
    body:
      "Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health.",
    author: "Dalai Lama"
  },
  {
    body:
      "To get the full value of joy you must have someone to divide it with.",
    author: "Mark Twain"
  },
  {
    body:
      "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    author: "Arthur Conan Doyle"
  },
  {
    body:
      "The mark of your ignorance is the depth of your belief in injustice and tragedy. What the caterpillar calls the end of the world, the Master calls the butterfly.",
    author: "Richard Bach"
  },
  {
    body: "We never live; we are always in the expectation of living.",
    author: "Voltaire"
  },
  {
    body:
      "To be happy is to be able to become aware of oneself without fright.",
    author: "Walter Benjamin"
  },
  {
    body:
      "Sometimes our fate resembles a fruit tree in winter. Who would think that those branches would turn green again and blossom, but we hope it, we know it.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "We lost because we told ourselves we lost.",
    author: "Leo Tolstoy"
  },
  {
    body:
      "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
    author: "Helen Keller"
  },
  {
    body:
      "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.",
    author: "Mabel Newcomber"
  },
  {
    body:
      "We don't stop playing because we grow old; we grow old because we stop playing.",
    author: "Bernard Shaw"
  },
  {
    body:
      "Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.",
    author: "Douglas Adams"
  },
  {
    body: "Our passion is our strength.",
    author: "Billie Armstrong"
  },
  {
    body: "You teach best what you most need to learn.",
    author: "Richard Bach"
  },
  {
    body: "Worry gives a small thing a big shadow.",
    author: ""
  },
  {
    body:
      "Fine words and an insinuating appearance are seldom associated with true virtue",
    author: "Confucius"
  },
  {
    body: "You can do it if you believe you can!",
    author: "Napoleon Hill"
  },
  {
    body: "No act of kindness, no matter how small, is ever wasted.",
    author: "Aesop"
  },
  {
    body: "A man's dreams are an index to his greatness.",
    author: "Zadok Rabinowitz"
  },
  {
    body:
      "If you change the way you look at things, the things you look at change.",
    author: "Wayne Dyer"
  },
  {
    body:
      "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
    author: "Isaac Asimov"
  },
  {
    body:
      "You can't let praise or criticism get to you. It's a weakness to get caught up in either one.",
    author: "John Wooden"
  },
  {
    body:
      "Action may not always bring happiness, but there is no happiness without action.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "In three words I can sum up everything Ive learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    body:
      "Learn wisdom from the ways of a seedling. A seedling which is never hardened off through stressful situations will never become a strong productive plant.",
    author: "Stephen Sigmund"
  },
  {
    body:
      "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
    author: "Isaac Asimov"
  },
  {
    body:
      "Don't frown because you never know who is falling in love with your smile.",
    author: "Sinvyest Tan"
  },
  {
    body: "Without some goals and some efforts to reach it, no man can live.",
    author: "John Dewey"
  },
  {
    body: "He who knows, does not speak. He who speaks, does not know.",
    author: "Lao Tzu"
  },
  {
    body: "The only real valuable thing is intuition.",
    author: "Albert Einstein"
  },
  {
    body:
      "The best and most beautiful things in the world cannot be seen, nor touched... but are felt in the heart.",
    author: "Helen Keller"
  },
  {
    body:
      "Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.",
    author: "Lao Tzu"
  },
  {
    body: "Do not wait for leaders; do it alone, person to person.",
    author: "Mother Teresa"
  },
  {
    body:
      "As the rest of the world is walking out the door, your best friends are the ones walking in.",
    author: ""
  },
  {
    body:
      "With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.",
    author: "Keshavan Nair"
  },
  {
    body: "Whatever happens, take responsibility.",
    author: "Tony Robbins"
  },
  {
    body: "Keep your eyes on the stars and your feet on the ground.",
    author: "Theodore Roosevelt"
  },
  {
    body:
      "Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us.",
    author: "Robert Lynd"
  },
  {
    body: "Success is determined by those whom prove the impossible, possible.",
    author: "James Pence"
  },
  {
    body:
      "We are all faced with a series of great opportunities brilliantly disguised as impossible situations.",
    author: "Charles R. Swindoll"
  },
  {
    body:
      "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.",
    author: "Joseph Roux"
  },
  {
    body:
      "I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on man unless they act.",
    author: "G. K. Chesterton"
  },
  {
    body: "Worry often gives a small thing a big shadow.",
    author: "Swedish proverb"
  },
  {
    body: "We shall never know all the good that a simple smile can do.",
    author: "Mother Teresa"
  },
  {
    body:
      "The only real failure in life is not to be true to the best one knows.",
    author: "Buddha"
  },
  {
    body:
      "Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Good advice is always certain to be ignored, but that's no reason not to give it.",
    author: "Agatha Christie"
  },
  {
    body: "God has given you one face, and you make yourself another.",
    author: "William Shakespeare"
  },
  {
    body: "Wherever a man turns he can find someone who needs him.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "As the rest of the world is walking out the door, your best friends are the ones walking in.",
    author: ""
  },
  {
    body:
      "The winner ain't the one with the fastest car it's the one who refuses to lose.",
    author: "Dale Earnhardt"
  },
  {
    body:
      "Be thankful when you don't know something for it gives you the opportunity to learn.",
    author: ""
  },
  {
    body: "The best way out is always through.",
    author: "Robert Frost"
  },
  {
    body:
      "Deep listening is miraculous for both listener and speaker.When someone receives us with open-hearted, non-judging, intensely interested listening, our spirits expand.",
    author: "Sue Patton Thoele"
  },
  {
    body:
      "I am of the opinion that my life belongs to the community, and as long as I live it is my privilege to do for it whatever I can.",
    author: "Bernard Shaw"
  },
  {
    body:
      "Spirituality can be severed from both vicious sectarianism and thoughtless banalities. Spirituality, I have come to see, is nothing less than the thoughtful love of life.",
    author: "Robert C. Solomon"
  },
  {
    body: "You are special, you are unique, you are the best!",
    author: "Cathy Pulsifer"
  },
  {
    body: "Truth is powerful and it prevails.",
    author: "Sojourner Truth"
  },
  {
    body: "When you learn, teach. When you get, give.",
    author: "Maya Angelou"
  },
  {
    body: "A man's dreams are an index to his greatness.",
    author: "Zadok Rabinowitz"
  },
  {
    body:
      "Efficiency is doing things right; effectiveness is doing the right things.",
    author: "Peter Drucker"
  },
  {
    body: "Truth is powerful and it prevails.",
    author: "Sojourner Truth"
  },
  {
    body:
      "Through perseverance many people win success out of what seemed destined to be certain failure.",
    author: "Benjamin Disraeli"
  },
  {
    body: "The wisest men follow their own direction.",
    author: "Euripides"
  },
  {
    body:
      "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
    author: "Buddha"
  },
  {
    body: "Think how hard physics would be if particles could think.",
    author: "Murray Gell-Mann"
  },
  {
    body:
      "Before you put on a frown, make absolutely sure there are no smiles available.",
    author: "Jim Beggs"
  },
  {
    body:
      "It is with words as with sunbeams. The more they are condensed, the deeper they burn.",
    author: "Robert Southey"
  },
  {
    body: "To follow, without halt, one aim: There is the secret of success.",
    author: "Anna Pavlova"
  },
  {
    body:
      "In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true.",
    author: "Buddha"
  },
  {
    body:
      "Transformation does not start with some one else changing you; transformation is an inner self reworking of what you are now to what you will be.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "The thing always happens that you really believe in; and the belief in a thing makes it happen.",
    author: "Frank Wright"
  },
  {
    body:
      "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.",
    author: "Pema Chodron"
  },
  {
    body: "If you kick a stone in anger, you'll hurt your own foot.",
    author: "Korean proverb"
  },
  {
    body:
      "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
    author: "Charlotte Gilman"
  },
  {
    body: "Intuition will tell the thinking mind where to look next.",
    author: "Jonas Salk"
  },
  {
    body:
      "No one has a finer command of language than the person who keeps his mouth shut.",
    author: "Sam Rayburn"
  },
  {
    body:
      "Through perseverance many people win success out of what seemed destined to be certain failure.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "One needs something to believe in, something for which one can have whole-hearted enthusiasm. One needs to feel that ones life has meaning, that one is needed in this world.",
    author: "Hannah Senesh"
  },
  {
    body:
      "The only person who never makes mistakes is the person who never does anything.",
    author: "Denis Waitley"
  },
  {
    body:
      "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
    author: "Aristotle"
  },
  {
    body:
      "Before you put on a frown, make absolutely sure there are no smiles available.",
    author: "Jim Beggs"
  },
  {
    body: "We cannot direct the wind but we can adjust the sails.",
    author: ""
  },
  {
    body:
      "Ask yourself the secret of your success. Listen to your answer, and practice it.",
    author: "Richard Bach"
  },
  {
    body:
      "Letting go isn�t the end of the world; it�s the beginning of a new life.",
    author: ""
  },
  {
    body:
      "When you discover your mission, you will feel its demand. It will fill you with enthusiasm and a burning desire to get to work on it.",
    author: "W. Clement Stone"
  },
  {
    body: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon"
  },
  {
    body:
      "If I could reach up and hold a star for every time you've made me smile, the entire evening sky would be in the palm of my hand.",
    author: ""
  },
  {
    body:
      "Let go of your attachment to being right, and suddenly your mind is more open. You're able to benefit from the unique viewpoints of others, without being crippled by your own judgement.",
    author: "Ralph Marston"
  },
  {
    body:
      "Your work is to discover your world and then with all your heart give yourself to it.",
    author: "Buddha"
  },
  {
    body: "When there is no enemy within, the enemies outside cannot hurt you.",
    author: "African proverb"
  },
  {
    body:
      "Progress always involves risks. You can't steal second base and keep your foot on first.",
    author: "Frederick Wilcox"
  },
  {
    body: "Don't be pushed by your problems; be led by your dreams.",
    author: ""
  },
  {
    body:
      "Trust your hunches. They're usually based on facts filed away just below the conscious level.",
    author: "Joyce Brothers"
  },
  {
    body: "Truth is powerful and it prevails.",
    author: "Sojourner Truth"
  },
  {
    body:
      "Discovery consists of seeing what everybody has seen and thinking what nobody else has thought.",
    author: "Jonathan Swift"
  },
  {
    body: "If you wish to be a writer, write.",
    author: "Epictetus"
  },
  {
    body: "In seed time learn, in harvest teach, in winter enjoy.",
    author: "William Blake"
  },
  {
    body: "Take heed: you do not find what you do not seek.",
    author: "English proverb"
  },
  {
    body:
      "Kindness is the language which the deaf can hear and the blind can see.",
    author: "Mark Twain"
  },
  {
    body:
      "When you realize there is nothing lacking, the whole world belongs to you.",
    author: "Lao Tzu"
  },
  {
    body:
      "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
    author: "Anais Nin"
  },
  {
    body:
      "Trust only movement. Life happens at the level of events, not of words. Trust movement.",
    author: "Alfred Adler"
  },
  {
    body: "Knowledge rests not upon truth alone, but upon error also.",
    author: "Carl Jung"
  },
  {
    body: "No man was ever wise by chance.",
    author: "Seneca"
  },
  {
    body: "If you have knowledge, let others light their candles in it.",
    author: "Margaret Fuller"
  },
  {
    body:
      "To get the full value of joy you must have someone to divide it with.",
    author: "Mark Twain"
  },
  {
    body:
      "The superior man is satisfied and composed; the mean man is always full of distress.",
    author: "Confucius"
  },
  {
    body:
      "It is impossible for a man to learn what he thinks he already knows.",
    author: "Epictetus"
  },
  {
    body: "Silence is deep as Eternity, Speech is shallow as Time.",
    author: "Carlyle"
  },
  {
    body:
      "If you find yourself in a hole, the first thing to do is stop digging.",
    author: "Will Rogers"
  },
  {
    body:
      "Never deny a diagnosis, but do deny the negative verdict that may go with it.",
    author: "Norman Cousins"
  },
  {
    body:
      "When you see a good person, think of becoming like him. When you see someone not so good, reflect on your own weak points.",
    author: "Confucius"
  },
  {
    body:
      "If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away.",
    author: "John Steinbeck"
  },
  {
    body: "I have no special talent. I am only passionately curious.",
    author: "Albert Einstein"
  },
  {
    body:
      "You will not be punished for your anger, you will be punished by your anger.",
    author: "Buddha"
  },
  {
    body: "It isn't where you come from, it's where you're going that counts.",
    author: "Ella Fitzgerald"
  },
  {
    body: "Those who will play with cats must expect to be scratched.",
    author: "Cervantes"
  },
  {
    body: "Action is the foundational key to all success.",
    author: "Pablo Picasso"
  },
  {
    body:
      "To be able to give away riches is mandatory if you wish to possess them. This is the only way that you will be truly rich.",
    author: "Mahummad Ali"
  },
  {
    body:
      "To make no mistakes is not in the power of man; but from their errors and mistakes the wise and good learn wisdom for the future.",
    author: "Plutarch"
  },
  {
    body: "To see things in the seed, that is genius.",
    author: "Lao Tzu"
  },
  {
    body:
      "Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant.",
    author: "Horace"
  },
  {
    body:
      "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.",
    author: "Confucius"
  },
  {
    body:
      "To give hope to someone occurs when you teach them how to use the tools to do it for themselves.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
    author: "Buddha"
  },
  {
    body: "Don't smother each other. No one can grow in the shade.",
    author: "Leo F. Buscaglia"
  },
  {
    body:
      "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
    author: "Laozi"
  },
  {
    body: "Sooner or later, those who win are those who think they can.",
    author: "Richard Bach"
  },
  {
    body:
      "True happiness means forging a strong spirit that is undefeated, no matter how trying our circumstances.",
    author: "Daisaku Ikeda"
  },
  {
    body:
      "Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.",
    author: "Mother Teresa"
  },
  {
    body:
      "I think you can have moderate success by copying something else, but if you really want to knock it out of the park, you have to do something different and take chances.",
    author: "Lee Womack"
  },
  {
    body:
      "Giving up doesn't always mean you are weak; sometimes it means that you are strong enough to let go.",
    author: ""
  },
  {
    body:
      "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
    author: ""
  },
  {
    body:
      "I am always doing that which I cannot do, in order that I may learn how to do it.",
    author: "Pablo Picasso"
  },
  {
    body:
      "To free us from the expectations of others, to give us back to ourselves � there lies the great, singular power of self-respect.",
    author: "Joan Didion"
  },
  {
    body:
      "He who controls others may be powerful, but he who has mastered himself is mightier still.",
    author: "Lao Tzu"
  },
  {
    body:
      "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mohandas Gandhi"
  },
  {
    body:
      "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "To effectively communicate, we must realize that we are all different in the way we perceive the world and use this understanding as a guide to our communication with others.",
    author: "Anthony Robbins"
  },
  {
    body:
      "Six essential qualities that are the key to success: Sincerity, personal integrity, humility, courtesy, wisdom, charity.",
    author: "William Menninger"
  },
  {
    body:
      "People are so constituted that everybody would rather undertake what they see others do, whether they have an aptitude for it or not.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "Goals are the fuel in the furnace of achievement.",
    author: "Brian Tracy"
  },
  {
    body:
      "Through perseverance many people win success out of what seemed destined to be certain failure.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace and gratitude.",
    author: "Denis Waitley"
  },
  {
    body:
      "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
    author: "Wayne Dyer"
  },
  {
    body:
      "By accepting yourself and being fully what you are, your presence can make others happy.",
    author: "Jane Roberts"
  },
  {
    body: "A goal without a plan is just a wish.",
    author: "Larry Elder"
  },
  {
    body:
      "A man of ability and the desire to accomplish something can do anything.",
    author: "Donald Kircher"
  },
  {
    body:
      "It's important to know that words don't move mountains. Work, exacting work moves mountains.",
    author: "Danilo Dolci"
  },
  {
    body:
      "If you are patient in one moment of anger, you will escape one hundred days of sorrow.",
    author: "Chinese proverb"
  },
  {
    body:
      "Logic will get you from A to B. Imagination will take you everywhere.",
    author: "Albert Einstein"
  },
  {
    body:
      "I am of the opinion that my life belongs to the community, and as long as I live it is my privilege to do for it whatever I can.",
    author: "Bernard Shaw"
  },
  {
    body:
      "No yesterdays are ever wasted for those who give themselves to today.",
    author: "Brendan Francis"
  },
  {
    body:
      "However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?",
    author: "Buddha"
  },
  {
    body: "Autumn is a second spring when every leaf is a flower.",
    author: "Albert Camus"
  },
  {
    body: "There are no failures � just experiences and your reactions to them.",
    author: "Tom Krause"
  },
  {
    body:
      "Transformation does not start with some one else changing you; transformation is an inner self reworking of what you are now to what you will be.",
    author: "Byron Pulsifer"
  },
  {
    body: "From small beginnings come great things.",
    author: ""
  },
  {
    body:
      "Kind words can be short and easy to speak, but their echoes are truly endless.",
    author: "Mother Teresa"
  },
  {
    body:
      "Knowing your own darkness is the best method for dealing with the darknesses of other people.",
    author: "Carl Jung"
  },
  {
    body:
      "I have an everyday religion that works for me. Love yourself first, and everything else falls into line.",
    author: "Lucille Ball"
  },
  {
    body: "Well done is better than well said.",
    author: "Benjamin Franklin"
  },
  {
    body: "Be sure you put your feet in the right place, then stand firm.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "Learn all you can from the mistakes of others. You won't have time to make them all yourself.",
    author: "Alfred Sheinwold"
  },
  {
    body:
      "Flow with whatever is happening and let your mind be free. Stay centred by accepting whatever you are doing. This is the ultimate.",
    author: "Chuang Tzu"
  },
  {
    body:
      "Nothing could be worse than the fear that one had given up too soon, and left one unexpended effort that might have saved the world.",
    author: "Jane Addams"
  },
  {
    body: "I never worry about action, but only inaction.",
    author: "Winston Churchill"
  },
  {
    body:
      "Respect is not something that you can ask for, buy or borrow. Respect is what you earn from each person no matter their background or status.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Change will not come if we wait for some other person or some other time. We are the ones weve been waiting for. We are the change that we seek.",
    author: "Barack Obama"
  },
  {
    body: "The energy of the mind is the essence of life.",
    author: "Aristotle"
  },
  {
    body:
      "We all have problems. The way we solve them is what makes us different.",
    author: ""
  },
  {
    body:
      "The man who trusts men will make fewer mistakes than he who distrusts them.",
    author: "Cavour"
  },
  {
    body:
      "Gratitude is not only the greatest of virtues, but the paren't of all the others.",
    author: "Cicero"
  },
  {
    body:
      "To be happy is to be able to become aware of oneself without fright.",
    author: "Walter Benjamin"
  },
  {
    body:
      "Failure will never overtake me if my determination to succeed is strong enough.",
    author: "Og Mandino"
  },
  {
    body: "In skating over thin ice our safety is in our speed.",
    author: "Ralph Emerson"
  },
  {
    body:
      "I'm not interested in age. People who tell me their age are silly. You're as old as you feel.",
    author: "Elizabeth Arden"
  },
  {
    body: "Kindness is the greatest wisdom.",
    author: ""
  },
  {
    body: "To bring anything into your life, imagine that it's already there.",
    author: "Richard Bach"
  },
  {
    body: "What you give is what you get.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "The person who lives life fully, glowing with life's energy, is the person who lives a successful life.",
    author: "Daisaku Ikeda"
  },
  {
    body:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle"
  },
  {
    body:
      "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
    author: "Charlotte Gilman"
  },
  {
    body: "The secret of success is constancy to purpose.",
    author: "Benjamin Disraeli"
  },
  {
    body: "Our intention creates our reality.",
    author: "Wayne Dyer"
  },
  {
    body:
      "With every experience, you alone are painting your own canvas, thought by thought, choice by choice.",
    author: "Oprah Winfrey"
  },
  {
    body:
      "The best place to find a helping hand is at the end of your own arm.",
    author: ""
  },
  {
    body:
      "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
    author: "Andr� Gide"
  },
  {
    body:
      "Reviewing what you have learned and learning anew, you are fit to be a teacher.",
    author: "Confucius"
  },
  {
    body: "Begin, be bold, and venture to be wise.",
    author: "Horace"
  },
  {
    body:
      "The first step to getting the things you want out of life is this: decide what you want.",
    author: "Ben Stein"
  },
  {
    body: "There are people who have money and people who are rich.",
    author: "Coco Chanel"
  },
  {
    body: "While we stop to think, we often miss our opportunity.",
    author: "Publilius Syrus"
  },
  {
    body:
      "The trouble with most people is that they think with their hopes or fears or wishes rather than with their minds.",
    author: "Will Durant"
  },
  {
    body: "You only lose what you cling to.",
    author: "Buddha"
  },
  {
    body: "You give before you get.",
    author: "Napoleon Hill"
  },
  {
    body: "Do good by stealth, and blush to find it fame.",
    author: "Alexander Pope"
  },
  {
    body:
      "Opportunity often comes disguised in the form of misfortune, or temporary defeat.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Most great people have attained their greatest success just one step beyond their greatest failure.",
    author: "Napoleon Hill"
  },
  {
    body:
      "The weak can never forgive. Forgiveness is the attribute of the strong.",
    author: "Mohandas Gandhi"
  },
  {
    body:
      "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.",
    author: "George Sheehan"
  },
  {
    body:
      "We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life.",
    author: "James Freeman Clarke"
  },
  {
    body: "Action will remove the doubts that theory cannot solve.",
    author: "Tehyi Hsieh"
  },
  {
    body:
      "Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Why worry about things you can�t control when you can keep yourself busy controlling the things that depend on you?",
    author: ""
  },
  {
    body: "Spring is a time for rebirth and the fulfilment of new life.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "In the end we retain from our studies only that which we practically apply.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "Only do what your heart tells you.",
    author: "Princess Diana"
  },
  {
    body:
      "Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life.",
    author: "Byron Pulsifer"
  },
  {
    body: "You cannot have what you do not want.",
    author: "John Acosta"
  },
  {
    body: "Great acts are made up of small deeds.",
    author: "Lao Tzu"
  },
  {
    body:
      "An optimist is a person who sees a green light everywhere, while the pessimist sees only the red spotlight... The truly wise person is colour-blind.",
    author: "Albert Schweitzer"
  },
  {
    body: "Always seek out the seed of triumph in every adversity.",
    author: "Og Mandino"
  },
  {
    body:
      "Give a man a fish and you feed him for a day. Teach him how to fish and you feed him for a lifetime.",
    author: "Lao Tzu"
  },
  {
    body: "You must welcome change as the rule but not as your ruler.",
    author: "Denis Waitley"
  },
  {
    body:
      "Allow the world to live as it chooses, and allow yourself to live as you choose.",
    author: "Richard Bach"
  },
  {
    body: "When you come to the end of your rope, tie a knot and hang on.",
    author: "Franklin Roosevelt"
  },
  {
    body: "The more you care, the stronger you can be.",
    author: "Jim Rohn"
  },
  {
    body:
      "Do not give your attention to what others do or fail to do; give it to what you do or fail to do.",
    author: "Dhammapada"
  },
  {
    body:
      "Don't miss all the beautiful colors of the rainbow looking for that pot of gold.",
    author: ""
  },
  {
    body:
      "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
    author: "Richard Bach"
  },
  {
    body:
      "Don't be dismayed by good-byes. A farewell is necessary before you can meet again. And meeting again, after moments or lifetimes, is certain for those who are friends.",
    author: "Richard Bach"
  },
  {
    body:
      "Real magic in relationships means an absence of judgement of others.",
    author: "Wayne Dyer"
  },
  {
    body: "He who knows, does not speak. He who speaks, does not know.",
    author: "Lao Tzu"
  },
  {
    body:
      "To accomplish great things, we must not only act, but also dream; not only plan, but also believe.",
    author: "Anatole France"
  },
  {
    body:
      "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    author: "Audre Lorde"
  },
  {
    body:
      "Imagination is not a talent of some men but is the health of every man.",
    author: "Ralph Waldo Emerson"
  },
  {
    body: "If the shoe doesn't fit, must we change the foot?",
    author: "Gloria Steinem"
  },
  {
    body:
      "Through pride we are ever deceiving ourselves. But deep down below the surface of the average conscience a still, small voice says to us, Something is out of tune.",
    author: "Carl Jung"
  },
  {
    body:
      "Strength does not come from physical capacity. It comes from an indomitable will.",
    author: "Mahatma Gandhi"
  },
  {
    body: "To be upset over what you don't have is to waste what you do have.",
    author: "Ken S. Keyes"
  },
  {
    body:
      "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
    author: "Henry Longfellow"
  },
  {
    body: "It is better to travel well than to arrive.",
    author: "Buddha"
  },
  {
    body:
      "A dream is your creative vision for your life in the future. You must break out of your current comfort zone and become comfortable with the unfamiliar and the unknown.",
    author: "Denis Waitley"
  },
  {
    body:
      "Nothing is softer or more flexible than water, yet nothing can resist it.",
    author: "Lao Tzu"
  },
  {
    body:
      "A smile is a light in the window of your face to show your heart is at home.",
    author: ""
  },
  {
    body: "Time you enjoyed wasting was not wasted.",
    author: "John Lennon"
  },
  {
    body:
      "Give whatever you are doing and whoever you are with the gift of your attention.",
    author: "Jim Rohn"
  },
  {
    body: "A wise man will make more opportunities than he finds.",
    author: "Francis Bacon"
  },
  {
    body:
      "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
    author: "Bruce Lee"
  },
  {
    body:
      "If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagines, he will meet with a success unexpected in common hours.",
    author: "Henry David Thoreau"
  },
  {
    body:
      "Our kindness may be the most persuasive argument for that which we believe.",
    author: "Gordon Hinckley"
  },
  {
    body: "To climb steep hills requires a slow pace at first.",
    author: "William Shakespeare"
  },
  {
    body: "Talk doesn't cook rice.",
    author: "Chinese proverb"
  },
  {
    body: "If you light a lamp for somebody, it will also brighten your path.",
    author: "Buddha"
  },
  {
    body:
      "Everything you are against weakens you. Everything you are for empowers you.",
    author: "Wayne Dyer"
  },
  {
    body:
      "There is nothing so useless as doing efficiently that which should not be done at all.",
    author: "Peter Drucker"
  },
  {
    body: "Everyone smiles in the same language.",
    author: ""
  },
  {
    body: "A good rest is half the work.",
    author: ""
  },
  {
    body: "God has given you one face, and you make yourself another.",
    author: "William Shakespeare"
  },
  {
    body:
      "Not every difficult and dangerous thing is suitable for training, but only that which is conducive to success in achieving the object of our effort.",
    author: "Epictetus"
  },
  {
    body:
      "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that's why they call it the present.",
    author: ""
  },
  {
    body:
      "Your ability to learn faster than your competition is your only sustainable competitive advantage.",
    author: "Arie de Gues"
  },
  {
    body: "When deeds speak, words are nothing.",
    author: "African proverb"
  },
  {
    body:
      "The self is not something ready-made, but something in continuous formation through choice of action.",
    author: "John Dewey"
  },
  {
    body:
      "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
    author: "Richard Bach"
  },
  {
    body:
      "Trust your own instinct. Your mistakes might as well be your own, instead of someone elses.",
    author: "Billy Wilder"
  },
  {
    body: "Only those who dare to fail greatly can ever achieve greatly.",
    author: "Robert Kennedy"
  },
  {
    body:
      "Whatever we expect with confidence becomes our own self-fulfilling prophecy.",
    author: "Brian Tracy"
  },
  {
    body: "Be the change that you want to see in the world.",
    author: "Mohandas Gandhi"
  },
  {
    body:
      "Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.",
    author: "Douglas Adams"
  },
  {
    body: "Smile, breathe, and go slowly.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others.",
    author: "Jacob Braude"
  },
  {
    body:
      "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
    author: "Tryon Edwards"
  },
  {
    body:
      "Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are.",
    author: "Bernice Reagon"
  },
  {
    body: "Arriving at one point is the starting point to another.",
    author: "John Dewey"
  },
  {
    body:
      "Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing.",
    author: "Abraham Lincoln"
  },
  {
    body: "Whoever is happy will make others happy, too.",
    author: "Mark Twain"
  },
  {
    body:
      "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.",
    author: "Winston Churchill"
  },
  {
    body:
      "Many people think of prosperity that concerns money only to forget that true prosperity is of the mind.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "The difficulties of life are intended to make us better, not bitter.",
    author: ""
  },
  {
    body:
      "Slow down and enjoy life. It's not only the scenery you miss by going too fast � you also miss the sense of where you are going and why.",
    author: "Eddie Cantor"
  },
  {
    body:
      "What the caterpillar calls the end of the world, the master calls a butterfly.",
    author: "Richard Bach"
  },
  {
    body:
      "When one tugs at a single thing in nature, he finds it attached to the rest of the world.",
    author: "John Muir"
  },
  {
    body: "We can do no great things, only small things with great love.",
    author: "Mother Teresa"
  },
  {
    body:
      "The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you're being self-indulgent.",
    author: "Paul Graham"
  },
  {
    body:
      "Let go of your attachment to being right, and suddenly your mind is more open. You're able to benefit from the unique viewpoints of others, without being crippled by your own judgement.",
    author: "Ralph Marston"
  },
  {
    body: "Begin to weave and God will give you the thread.",
    author: "German proverb"
  },
  {
    body:
      "Knowledge has three degrees � opinion, science, illumination. The means or instrument of the first is sense; of the second, dialectic; of the third, intuition.",
    author: "Plotinus"
  },
  {
    body: "Impossibilities are merely things which we have not yet learned.",
    author: "Charles Chesnutt"
  },
  {
    body: "Don't be pushed by your problems; be led by your dreams.",
    author: ""
  },
  {
    body:
      "For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour.",
    author: "Mary Kay Ash"
  },
  {
    body:
      "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
    author: "Buddha"
  },
  {
    body: "Life is what happens while you are making other plans.",
    author: "John Lennon"
  },
  {
    body: "Science is organized knowledge. Wisdom is organized life.",
    author: "Immanuel Kant"
  },
  {
    body:
      "The greatest antidote to insecurity and the sense of fear is compassion � it brings one back to the basis of one's inner strength",
    author: "Dalai Lama"
  },
  {
    body:
      "Courage is the discovery that you may not win, and trying when you know you can lose.",
    author: ""
  },
  {
    body: "To know oneself is to study oneself in action with another person.",
    author: "Bruce Lee"
  },
  {
    body:
      "Many people think of prosperity that concerns money only to forget that true prosperity is of the mind.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "When you are offended at any man's fault, turn to yourself and study your own failings. Then you will forget your anger.",
    author: "Epictetus"
  },
  {
    body:
      "I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted.",
    author: "Og Mandino"
  },
  {
    body: "From error to error one discovers the entire truth.",
    author: "Sigmund Freud"
  },
  {
    body:
      "We can only be said to be alive in those moments when our hearts are conscious of our treasures.",
    author: "Thornton Wilder"
  },
  {
    body:
      "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
    author: "John F. Kennedy"
  },
  {
    body: "Faith in oneself is the best and safest course.",
    author: "Michelangelo"
  },
  {
    body:
      "The minute you settle for less than you deserve, you get even less than you settled for.",
    author: "Maureen Dowd"
  },
  {
    body: "All great achievements require time.",
    author: "Maya Angelou"
  },
  {
    body: "Miracles come in moments. Be ready and willing.",
    author: "Wayne Dyer"
  },
  {
    body:
      "We could never learn to be brave and patient if there were only joy in the world.",
    author: "Helen Keller"
  },
  {
    body: "One today is worth two tomorrows.",
    author: "Benjamin Franklin"
  },
  {
    body:
      "Meditation is the dissolution of thoughts in eternal awareness or Pure consciousness without objectification, knowing without thinking, merging finitude in infinity.",
    author: "Voltaire"
  },
  {
    body:
      "For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour.",
    author: "Mary Kay Ash"
  },
  {
    body: "Be a good listener. Your ears will never get you in trouble.",
    author: "Frank Tyger"
  },
  {
    body: "If you kick a stone in anger, you'll hurt your own foot.",
    author: "Korean proverb"
  },
  {
    body:
      "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
    author: ""
  },
  {
    body: "A stumble may prevent a fall.",
    author: ""
  },
  {
    body:
      "Never regret. If it's good, it's wonderful. If it's bad, it's experience.",
    author: "Victoria Holt"
  },
  {
    body: "Good luck is another name for tenacity of purpose.",
    author: "Ralph Emerson"
  },
  {
    body: "Better than a thousand hollow words, is one word that brings peace.",
    author: "Buddha"
  },
  {
    body:
      "Our greatness lies not so much in being able to remake the world as being able to remake ourselves.",
    author: "Mahatma Gandhi"
  },
  {
    body:
      "The only thing to do with good advice is to pass it on. It is never of any use to oneself.",
    author: "Oscar Wilde"
  },
  {
    body:
      "The way we communicate with others and with ourselves ultimately determines the quality of our lives.",
    author: "Tony Robbins"
  },
  {
    body:
      "We should all be thankful for those people who rekindle the inner spirit.",
    author: "Albert Schweitzer"
  },
  {
    body: "Skill to do comes of doing.",
    author: "Ralph Emerson"
  },
  {
    body:
      "The best place to find a helping hand is at the end of your own arm.",
    author: ""
  },
  {
    body: "Meaning is not what you start with but what you end up with.",
    author: "Peter Elbow"
  },
  {
    body:
      "Numberless are the worlds wonders, but none more wonderful than man.",
    author: "Sophocles"
  },
  {
    body: "Either you run the day or the day runs you.",
    author: "Jim Rohn"
  },
  {
    body:
      "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
    author: "Buddha"
  },
  {
    body:
      "Don't judge each day by the harvest you reap but by the seeds you plant.",
    author: "Robert Stevenson"
  },
  {
    body: "Once we accept our limits, we go beyond them.",
    author: "Albert Einstein"
  },
  {
    body: "Formula for success: under promise and over deliver.",
    author: "Tom Peters"
  },
  {
    body:
      "Every artist dips his brush in his own soul, and paints his own nature into his pictures.",
    author: "Henry Ward Beecher"
  },
  {
    body:
      "If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when?",
    author: "Rabbi Hillel"
  },
  {
    body: "Nothing in life is to be feared. It is only to be understood.",
    author: "Marie Curie"
  },
  {
    body:
      "One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity.",
    author: "Albert Schweitzer"
  },
  {
    body: "Time you enjoy wasting, was not wasted.",
    author: "John Lennon"
  },
  {
    body: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "Bernard Shaw"
  },
  {
    body:
      "In the depth of winter, I finally learned that there was within me an invincible summer.",
    author: "Albert Camus"
  },
  {
    body:
      "Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace and gratitude.",
    author: "Denis Waitley"
  },
  {
    body: "The more you care, the stronger you can be.",
    author: "Jim Rohn"
  },
  {
    body:
      "Failure doesn't mean you are a failure it just means you haven't succeeded yet.",
    author: "Robert Schuller"
  },
  {
    body:
      "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
    author: "Etty Hillesum"
  },
  {
    body:
      "Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are.",
    author: "Bernice Reagon"
  },
  {
    body:
      "With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.",
    author: "Keshavan Nair"
  },
  {
    body: "To want to be what one can be is purpose in life.",
    author: "Cynthia Ozick"
  },
  {
    body:
      "The important thing is this: to be able at any moment to sacrifice what we are for what we could become.",
    author: "Charles Dubois"
  },
  {
    body: "Fortune befriends the bold.",
    author: "John Dryden"
  },
  {
    body:
      "As we grow as unique persons, we learn to respect the uniqueness of others.",
    author: "Robert Schuller"
  },
  {
    body: "Love is the master key that opens the gates of happiness.",
    author: "Oliver Holmes"
  },
  {
    body:
      "So is cheerfulness, or a good temper, the more it is spent, the more remains.",
    author: "Ralph Emerson"
  },
  {
    body: "Reality leaves a lot to the imagination.",
    author: "John Lennon"
  },
  {
    body:
      "A man of ability and the desire to accomplish something can do anything.",
    author: "Donald Kircher"
  },
  {
    body:
      "Everything in the universe goes by indirection. There are no straight lines.",
    author: "Ralph Emerson"
  },
  {
    body:
      "The greatest part of our happiness depends on our dispositions, not our circumstances.",
    author: "Martha Washington"
  },
  {
    body:
      "You have to take it as it happens, but you should try to make it happen the way you want to take it.",
    author: "Old German proverb"
  },
  {
    body: "I know but one freedom and that is the freedom of the mind.",
    author: "Antoine de Saint-Exupery"
  },
  {
    body: "Change your words. Change your world.",
    author: ""
  },
  {
    body:
      "The key to growth is the introduction of higher dimensions of consciousness into our awareness.",
    author: "Lao Tzu"
  },
  {
    body: "The most successful people are those who are good at plan B.",
    author: "James Yorke"
  },
  {
    body: "Luck is what happens when preparation meets opportunity.",
    author: "Seneca"
  },
  {
    body:
      "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.",
    author: "Charles Darwin"
  },
  {
    body:
      "Staying in one place is the best path to be taken over and surpassed by many.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
    author: "Charles DeLint"
  },
  {
    body:
      "A man should look for what is, and not for what he thinks should be.",
    author: "Albert Einstein"
  },
  {
    body: "You are the only person on earth who can use your ability.",
    author: "Zig Ziglar"
  },
  {
    body:
      "You are always free to change your mind and choose a different future, or a different past.",
    author: "Richard Bach"
  },
  {
    body:
      "One must be fond of people and trust them if one is not to make a mess of life.",
    author: "E. M. Forster"
  },
  {
    body:
      "The true way to render ourselves happy is to love our work and find in it our pleasure.",
    author: "Francoise de Motteville"
  },
  {
    body: "Fortune befriends the bold.",
    author: "John Dryden"
  },
  {
    body:
      "Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine.",
    author: "Nikola Tesla"
  },
  {
    body: "Worry gives a small thing a big shadow.",
    author: ""
  },
  {
    body:
      "Those who are blessed with the most talent don't necessarily outperform everyone else. It's the people with follow-through who excel.",
    author: "Mary Kay Ash"
  },
  {
    body: "An obstacle may be either a stepping stone or a stumbling block.",
    author: ""
  },
  {
    body:
      "The weak can never forgive. Forgiveness is the attribute of the strong.",
    author: "Mohandas Gandhi"
  },
  {
    body:
      "We cannot solve our problems with the same thinking we used when we created them.",
    author: "Albert Einstein"
  },
  {
    body:
      "We can only be said to be alive in those moments when our hearts are conscious of our treasures.",
    author: "Thornton Wilder"
  },
  {
    body: "I hear and I forget. I see and I remember. I do and I understand.",
    author: "Confucius"
  },
  {
    body:
      "Men in general judge more from appearances than from reality. All men have eyes, but few have the gift of penetration.",
    author: "Niccolo Machiavelli"
  },
  {
    body: "Difficulties are things that show a person what they are.",
    author: "Epictetus"
  },
  {
    body: "Nature takes away any faculty that is not used.",
    author: "William R. Inge"
  },
  {
    body:
      "It is not enough to have a good mind; the main thing is to use it well.",
    author: "Rene Descartes"
  },
  {
    body:
      "Wit lies in recognizing the resemblance among things which differ and the difference between things which are alike.",
    author: "Madame de Stael"
  },
  {
    body:
      "One secret of success in life is for a man to be ready for his opportunity when it comes.",
    author: "Benjamin Disraeli"
  },
  {
    body: "The secret of success is constancy to purpose.",
    author: "Benjamin Disraeli"
  },
  {
    body: "To succeed, we must first believe that we can.",
    author: "Michael Korda"
  },
  {
    body:
      "When you judge another, you do not define them, you define yourself.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Be thankful when you don't know something for it gives you the opportunity to learn.",
    author: ""
  },
  {
    body:
      "Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us.",
    author: "Robert Lynd"
  },
  {
    body:
      "If you don't go after what you want, you'll never have it. If you don't ask, the answer is always no. If you don't step forward, you're always in the same place.",
    author: "Nora Roberts"
  },
  {
    body:
      "When you arise in the morning, think of what a precious privilege it is to be alive � to breathe, to think, to enjoy, to love.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
    author: "Michelangelo"
  },
  {
    body:
      "Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.",
    author: "Albert Einstein"
  },
  {
    body:
      "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
    author: "Isaac Asimov"
  },
  {
    body: "You give before you get.",
    author: "Napoleon Hill"
  },
  {
    body: "Make the most of yourself for that is all there is of you.",
    author: "Ralph Emerson"
  },
  {
    body: "Those who are free of resentful thoughts surely find peace.",
    author: "Buddha"
  },
  {
    body:
      "Think for yourselves and let others enjoy the privilege to do so too.",
    author: "Voltaire"
  },
  {
    body:
      "If you propose to speak, always ask yourself, is it true, is it necessary, is it kind.",
    author: "Buddha"
  },
  {
    body: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  },
  {
    body:
      "The least of things with a meaning is worth more in life than the greatest of things without it.",
    author: "Carl Jung"
  },
  {
    body:
      "The only way to tell the truth is to speak with kindness. Only the words of a loving man can be heard.",
    author: "Henry Thoreau"
  },
  {
    body:
      "Constant kindness can accomplish much. As the sun makes ice melt, kindness causes misunderstanding, mistrust, and hostility to evaporate.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "You block your dream when you allow your fear to grow bigger than your faith.",
    author: "Mary Morrissey"
  },
  {
    body: "I never worry about action, but only inaction.",
    author: "Winston Churchill"
  },
  {
    body:
      "The final proof of greatness lies in being able to endure criticism without resentment.",
    author: "Elbert Hubbard"
  },
  {
    body: "Take it easy � but take it.",
    author: "Woody Guthrie"
  },
  {
    body: "If you want a thing done well, do it yourself.",
    author: "Napoleon Bonaparte"
  },
  {
    body:
      "The past has no power to stop you from being present now. Only your grievance about the past can do that.",
    author: "Eckhart Tolle"
  },
  {
    body:
      "Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life.",
    author: "Dr. David M. Burns"
  },
  {
    body:
      "We are not animals. We are not a product of what has happened to us in our past. We have the power of choice.",
    author: "Stephen Covey"
  },
  {
    body:
      "Don't leave a stone unturned. It's always something, to know you have done the most you could.",
    author: "Charles Dickens"
  },
  {
    body:
      "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that's why they call it the present.",
    author: ""
  },
  {
    body: "Argue for your limitations, and sure enough they're yours.",
    author: "Richard Bach"
  },
  {
    body:
      "If you look into your own heart, and you find nothing wrong there, what is there to worry about? What is there to fear?",
    author: "Confucius"
  },
  {
    body:
      "Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.",
    author: "Richard Bach"
  },
  {
    body:
      "He who deliberates fully before taking a step will spend his entire life on one leg.",
    author: "Chinese proverb"
  },
  {
    body: "Wisdom is the supreme part of happiness.",
    author: "Sophocles"
  },
  {
    body: "Every problem has a gift for you in its hands.",
    author: "Richard Bach"
  },
  {
    body: "A good plan today is better than a perfect plan tomorrow.",
    author: ""
  },
  {
    body: "If you have knowledge, let others light their candles in it.",
    author: "Margaret Fuller"
  },
  {
    body:
      "The grand essentials of happiness are: something to do, something to love, and something to hope for.",
    author: "Chalmers"
  },
  {
    body: "A stumble may prevent a fall.",
    author: ""
  },
  {
    body:
      "He who wishes to secure the good of others, has already secured his own.",
    author: "Confucius"
  },
  {
    body:
      "It is not enough to have a good mind; the main thing is to use it well.",
    author: "Rene Descartes"
  },
  {
    body:
      "We are all faced with a series of great opportunities brilliantly disguised as impossible situations.",
    author: "Charles R. Swindoll"
  },
  {
    body: "We aim above the mark to hit the mark.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Whenever something negative happens to you, there is a deep lesson concealed within it.",
    author: "Eckhart Tolle"
  },
  {
    body:
      "I think somehow we learn who we really are and then live with that decision.",
    author: "Eleanor Roosevelt"
  },
  {
    body:
      "To give ones self earnestly to the duties due to men, and, while respecting spiritual beings, to keep aloof from them, may be called wisdom.",
    author: "Confucius"
  },
  {
    body:
      "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
    author: "J. Willard Marriott"
  },
  {
    body:
      "Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years.",
    author: "Richard Bach"
  },
  {
    body:
      "If one is lucky, a solitary fantasy can totally transform one million realities.",
    author: "Maya Angelou"
  },
  {
    body:
      "Always bear in mind that your own resolution to succeed is more important than any one thing.",
    author: "Abraham Lincoln"
  },
  {
    body: "Friendship isn't a big thing. It's a million little things.",
    author: ""
  },
  {
    body:
      "Wise men talk because they have something to say; fools, because they have to say something.",
    author: "Plato"
  },
  {
    body:
      "We don't stop playing because we grow old; we grow old because we stop playing.",
    author: "Bernard Shaw"
  },
  {
    body: "The time you think you're missing, misses you too.",
    author: "Ymber Delecto"
  },
  {
    body:
      "The thought manifests as the word. The word manifests as the deed. The deed develops into habit. And the habit hardens into character.",
    author: "Buddha"
  },
  {
    body:
      "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.",
    author: "Donald Trump"
  },
  {
    body:
      "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.",
    author: "Denis Waitley"
  },
  {
    body: "To climb steep hills requires a slow pace at first.",
    author: "William Shakespeare"
  },
  {
    body: "If the shoe doesn't fit, must we change the foot?",
    author: "Gloria Steinem"
  },
  {
    body:
      "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.",
    author: "Robert Louis Stevenson"
  },
  {
    body:
      "You have enemies? Good. That means you've stood up for something, sometime in your life.",
    author: "Winston Churchill"
  },
  {
    body: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius"
  },
  {
    body:
      "Nobody made a greater mistake than he who did nothing because he could do only a little.",
    author: "Edmund Burke"
  },
  {
    body: "Action will remove the doubts that theory cannot solve.",
    author: "Tehyi Hsieh"
  },
  {
    body: "The universe is made of stories, not atoms.",
    author: "Muriel Rukeyser"
  },
  {
    body:
      "With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.",
    author: "Keshavan Nair"
  },
  {
    body: "A man is not where he lives but where he loves.",
    author: ""
  },
  {
    body: "You can't shake hands with a clenched fist.",
    author: "Indira Gandhi"
  },
  {
    body:
      "The future is an opaque mirror. Anyone who tries to look into it sees nothing but the dim outlines of an old and worried face.",
    author: "Jim Bishop"
  },
  {
    body:
      "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
    author: "Etty Hillesum"
  },
  {
    body:
      "Everything that irritates us about others can lead us to a better understanding of ourselves.",
    author: "Carl Jung"
  },
  {
    body: "Great acts are made up of small deeds.",
    author: "Lao Tzu"
  },
  {
    body:
      "Many people have gone further than they thought they could because someone else thought they could.",
    author: ""
  },
  {
    body: "The truth which has made us free will in the end make us glad also.",
    author: "Felix Adler"
  },
  {
    body:
      "He who lives in harmony with himself lives in harmony with the universe.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that's why they call it the present.",
    author: ""
  },
  {
    body: "Kind words do not cost much. Yet they accomplish much.",
    author: "Blaise Pascal"
  },
  {
    body:
      "We do not quit playing because we grow old, we grow old because we quit playing.",
    author: "Oliver Holmes"
  },
  {
    body:
      "We do not quit playing because we grow old, we grow old because we quit playing.",
    author: "Oliver Holmes"
  },
  {
    body: "Take rest; a field that has rested gives a bountiful crop.",
    author: "Ovid"
  },
  {
    body:
      "Doing what you love is the cornerstone of having abundance in your life.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Action may not always bring happiness; but there is no happiness without action.",
    author: "Benjamin Disraeli"
  },
  {
    body: "The years teach much which the days never know.",
    author: "Ralph Emerson"
  },
  {
    body: "Without some goals and some efforts to reach it, no man can live.",
    author: "John Dewey"
  },
  {
    body:
      "Positive thinking will let you do everything better than negative thinking will.",
    author: "Zig Ziglar"
  },
  {
    body:
      "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
    author: "Helen Keller"
  },
  {
    body:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha"
  },
  {
    body: "We must not allow ourselves to become like the system we oppose.",
    author: "Bishop Desmond Tutu"
  },
  {
    body:
      "Friends are those rare people who ask how we are and then wait to hear the answer.",
    author: "Ed Cunningham"
  },
  {
    body: "The most formidable weapon against errors of every kind is reason.",
    author: "Thomas Paine"
  },
  {
    body:
      "I am always doing that which I can not do, in order that I may learn how to do it.",
    author: "Pablo Picasso"
  },
  {
    body: "In order to win, you must expect to win.",
    author: "Richard Bach"
  },
  {
    body:
      "Why compare yourself with others? No one in the entire world can do a better job of being you than you.",
    author: ""
  },
  {
    body:
      "Learn to listen. Opportunity could be knocking at your door very softly.",
    author: "Frank Tyger"
  },
  {
    body:
      "Never say there is nothing beautiful in the world any more. There is always something to make you wonder in the shape of a tree, the trembling of a leaf.",
    author: "Albert Schweitzer"
  },
  {
    body: "A weed is no more than a flower in disguise.",
    author: "James Lowell"
  },
  {
    body:
      "Treat people as if they were what they ought to be and you help them to become what they are capable of being.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "Anyone who doesn't take truth seriously in small matters cannot be trusted in large ones either.",
    author: "Albert Einstein"
  },
  {
    body:
      "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.",
    author: "Arthur Conan Doyle"
  },
  {
    body:
      "Beware of the half truth. You may have gotten hold of the wrong half.",
    author: ""
  },
  {
    body:
      "At the center of your being you have the answer; you know who you are and you know what you want.",
    author: "Lao Tzu"
  },
  {
    body: "Imagination rules the world.",
    author: "Napoleon Bonaparte"
  },
  {
    body: "The only real mistake is the one from which we learn nothing.",
    author: "John Powell"
  },
  {
    body: "Most folks are about as happy as they make up their minds to be.",
    author: "Abraham Lincoln"
  },
  {
    body: "If you can't feed a hundred people, then feed just one.",
    author: "Mother Teresa"
  },
  {
    body: "The heart has its reasons which reason knows not of.",
    author: "Blaise Pascal"
  },
  {
    body:
      "Sincerity is the way of Heaven. The attainment of sincerity is the way of men.",
    author: "Confucius"
  },
  {
    body: "Be as you wish to seem.",
    author: "Socrates"
  },
  {
    body:
      "The greatest mistake you can make in life is to be continually fearing you will make one.",
    author: "Elbert Hubbard"
  },
  {
    body:
      "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
    author: "Lao Tzu"
  },
  {
    body:
      "Wicked people are always surprised to find ability in those that are good.",
    author: "Marquis Vauvenargues"
  },
  {
    body: "Do what you can. Want what you have. Be who you are.",
    author: "Forrest Church"
  },
  {
    body: "The less effort, the faster and more powerful you will be.",
    author: "Bruce Lee"
  },
  {
    body:
      "The free man is he who does not fear to go to the end of his thought.",
    author: "Leon Blum"
  },
  {
    body: "People seldom notice old clothes if you wear a big smile.",
    author: "Lee Mildon"
  },
  {
    body: "Rainbows apologize for angry skies.",
    author: "Sylvia Voirol"
  },
  {
    body: "People may doubt what you say, but they will believe what you do.",
    author: "Lewis Cass"
  },
  {
    body:
      "All perceiving is also thinking, all reasoning is also intuition, all observation is also invention.",
    author: "Rudolf Arnheim"
  },
  {
    body:
      "Never idealize others. They will never live up to your expectations.",
    author: "Leo Buscaglia"
  },
  {
    body:
      "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
    author: "Leonardo da Vinci"
  },
  {
    body: "No act of kindness, no matter how small, is ever wasted.",
    author: "Aesop"
  },
  {
    body: "The best cure for the body is a quiet mind.",
    author: "Napoleon Bonaparte"
  },
  {
    body:
      "Listen to your intuition. It will tell you everything you need to know.",
    author: "Anthony D'Angelo"
  },
  {
    body:
      "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.",
    author: "Thomas Carlyle"
  },
  {
    body:
      "Nothing is softer or more flexible than water, yet nothing can resist it.",
    author: "Lao Tzu"
  },
  {
    body:
      "What the caterpillar calls the end of the world, the master calls a butterfly.",
    author: "Richard Bach"
  },
  {
    body:
      "I am of the opinion that my life belongs to the community, and as long as I live it is my privilege to do for it whatever I can.",
    author: "Bernard Shaw"
  },
  {
    body:
      "Translation is the paradigm, the exemplar of all writing. It is translation that demonstrates most vividly the yearning for transformation that underlies every act involving speech, that supremely human gift.",
    author: "Harry Burchell Mathews"
  },
  {
    body:
      "The right way is not always the popular and easy way. Standing for right when it is unpopular is a true test of moral character.",
    author: "Margaret Smith"
  },
  {
    body:
      "The past has no power to stop you from being present now. Only your grievance about the past can do that.",
    author: "Eckhart Tolle"
  },
  {
    body: "A really great talent finds its happiness in execution.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "Take things as they are. Punch when you have to punch. Kick when you have to kick.",
    author: "Bruce Lee"
  },
  {
    body:
      "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.",
    author: "Hannah Arendt"
  },
  {
    body: "If you can dream it, you can do it.",
    author: "Walt Disney"
  },
  {
    body:
      "The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work.",
    author: "Dalai Lama"
  },
  {
    body:
      "Men of perverse opinion do not know the excellence of what is in their hands, till some one dash it from them.",
    author: "Sophocles"
  },
  {
    body:
      "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
    author: "Charlotte Gilman"
  },
  {
    body:
      "In the depth of winter, I finally learned that there was within me an invincible summer.",
    author: "Albert Camus"
  },
  {
    body:
      "If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.",
    author: "Albert Einstein"
  },
  {
    body: "A man sees in the world what he carries in his heart.",
    author: "Goethe"
  },
  {
    body: "As we risk ourselves, we grow. Each new experience is a risk.",
    author: "Fran Watson"
  },
  {
    body: "I have never been hurt by anything I didn't say.",
    author: "Calvin Coolidge"
  },
  {
    body:
      "The dream was always running ahead of me. To catch up, to live for a moment in unison with it, that was the miracle.",
    author: "Anais Nin"
  },
  {
    body: "Real success is finding your lifework in the work that you love.",
    author: "David McCullough"
  },
  {
    body:
      "The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
    author: "Helen Keller"
  },
  {
    body:
      "Opportunity often comes disguised in the form of misfortune, or temporary defeat.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Be not angry that you cannot make others as you wish them to be, since you cannot make yourself as you wish to be.",
    author: "Thomas Kempis"
  },
  {
    body:
      "Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.",
    author: "Ralph Blum"
  },
  {
    body:
      "Appreciation is the highest form of prayer, for it acknowledges the presence of good wherever you shine the light of your thankful thoughts.",
    author: "Alan Cohen"
  },
  {
    body: "Sadness flies away on the wings of time.",
    author: "Jean de la Fontaine"
  },
  {
    body:
      "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
    author: "Andr� Gide"
  },
  {
    body: "Why worry about tomorrow, when today is all we have?",
    author: ""
  },
  {
    body: "As you think, so shall you become.",
    author: "Bruce Lee"
  },
  {
    body:
      "Kind words can be short and easy to speak, but their echoes are truly endless.",
    author: "Mother Teresa"
  },
  {
    body: "Most smiles are started by another smile.",
    author: ""
  },
  {
    body:
      "You can't create in a vacuum. Life gives you the material and dreams can propel new beginnings.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Cherish your visions and your dreams as they are the children of your soul; the blueprints of your ultimate achievements.",
    author: "Napoleon Hill"
  },
  {
    body: "A man who doesn't trust himself can never really trust anyone else.",
    author: "Cardinal Retz"
  },
  {
    body: "Adversity causes some men to break, others to break records.",
    author: "William Ward"
  },
  {
    body:
      "When your desires are strong enough you will appear to possess superhuman powers to achieve.",
    author: "Napoleon Hill"
  },
  {
    body: "Just trust yourself, then you will know how to live.",
    author: "Goethe"
  },
  {
    body:
      "Whenever something negative happens to you, there is a deep lesson concealed within it.",
    author: "Eckhart Tolle"
  },
  {
    body:
      "It is with words as with sunbeams. The more they are condensed, the deeper they burn.",
    author: "Robert Southey"
  },
  {
    body:
      "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle"
  },
  {
    body:
      "The greatest mistake you can make in life is to be continually fearing you will make one.",
    author: "Elbert Hubbard"
  },
  {
    body: "A short saying often contains much wisdom.",
    author: "Sophocles"
  },
  {
    body:
      "The superior man is modest in his speech, but exceeds in his actions.",
    author: "Confucius"
  },
  {
    body:
      "Our deepest wishes are whispers of our authentic selves. We must learn to respect them. We must learn to listen.",
    author: "Sarah Breathnach"
  },
  {
    body:
      "I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability.",
    author: "Confucius"
  },
  {
    body:
      "Your work is to discover your world and then with all your heart give yourself to it.",
    author: "Buddha"
  },
  {
    body:
      "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    author: "Marcus Aurelius"
  },
  {
    body: "Change your words. Change your world.",
    author: ""
  },
  {
    body: "Take it easy � but take it.",
    author: "Woody Guthrie"
  },
  {
    body:
      "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
    author: "Napoleon Hill"
  },
  {
    body:
      "The universe is transformation; our life is what our thoughts make it.",
    author: "Marcus Aurelius"
  },
  {
    body: "Be your own hero, it's cheaper than a movie ticket.",
    author: "Doug Horton"
  },
  {
    body:
      "The Superior Man is aware of Righteousness, the inferior man is aware of advantage.",
    author: "Confucius"
  },
  {
    body:
      "Gratitude is not only the greatest of virtues, but the paren't of all the others.",
    author: "Cicero"
  },
  {
    body: "Goals are the fuel in the furnace of achievement.",
    author: "Brian Tracy"
  },
  {
    body: "You are the only person on Earth who can use your ability.",
    author: "Zig Ziglar"
  },
  {
    body:
      "They say that time changes things, but you actually have to change them yourself.",
    author: "Andy Warhol"
  },
  {
    body:
      "A true friend is the most precious of all possessions and the one we take the least thought about acquiring.",
    author: "Francois de La Rochefoucauld"
  },
  {
    body:
      "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.",
    author: "Buddha"
  },
  {
    body:
      "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.",
    author: "Winston Churchill"
  },
  {
    body:
      "A man of ability and the desire to accomplish something can do anything.",
    author: "Donald Kircher"
  },
  {
    body:
      "If you seek truth you will not seek victory by dishonourable means, and if you find truth you will become invincible.",
    author: "Epictetus"
  },
  {
    body:
      "Reason and free inquiry are the only effectual agents against error.",
    author: "Thomas Jefferson"
  },
  {
    body: "The best teacher is experience learned from failures.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength.",
    author: "Hasidic saying"
  },
  {
    body:
      "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
    author: "Harriet Tubman"
  },
  {
    body:
      "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
    author: ""
  },
  {
    body:
      "A smile is a light in the window of your face to show your heart is at home.",
    author: ""
  },
  {
    body:
      "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
    author: "Lao Tzu"
  },
  {
    body:
      "An invincible determination can accomplish almost anything and in this lies the great distinction between great men and little men.",
    author: "Thomas Fuller"
  },
  {
    body:
      "All that we are is the result of what we have thought. The mind is everything. What we think we become.",
    author: "Buddha"
  },
  {
    body:
      "A lot of people give up just before theyre about to make it. You know you never know when that next obstacle is going to be the last one.",
    author: "Chuck Norris"
  },
  {
    body:
      "If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude.",
    author: "Colin Powell"
  },
  {
    body: "People may doubt what you say, but they will believe what you do.",
    author: "Lewis Cass"
  },
  {
    body:
      "A bend in the road is not the end of the road...unless you fail to make the turn.",
    author: ""
  },
  {
    body:
      "When you judge another, you do not define them, you define yourself.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Strength does not come from physical capacity. It comes from an indomitable will.",
    author: "Mahatma Gandhi"
  },
  {
    body:
      "The universe is full of magical things, patiently waiting for our wits to grow sharper.",
    author: "Eden Phillpotts"
  },
  {
    body: "Speak low, if you speak love.",
    author: "William Shakespeare"
  },
  {
    body:
      "The industrial landscape is already littered with remains of once successful companies that could not adapt their strategic vision to altered conditions of competition.",
    author: "Abernathy"
  },
  {
    body: "We must not allow ourselves to become like the system we oppose.",
    author: "Bishop Desmond Tutu"
  },
  {
    body: "Change your thoughts, change your life!",
    author: ""
  },
  {
    body: "When performance exceeds ambition, the overlap is called success.",
    author: "Cullen Hightower"
  },
  {
    body: "To fly, we have to have resistance.",
    author: "Maya Lin"
  },
  {
    body:
      "To be thoughtful and kind only takes a few seconds compared to the timeless hurt caused by one rude gesture.",
    author: "Byron Pulsifer"
  },
  {
    body: "All our knowledge has its origins in our perceptions.",
    author: "Leonardo da Vinci"
  },
  {
    body: "Gratitude is the fairest blossom which springs from the soul.",
    author: "Henry Beecher"
  },
  {
    body: "A good rest is half the work.",
    author: ""
  },
  {
    body: "Tension is who you think you should be. Relaxation is who you are.",
    author: "Chinese proverb"
  },
  {
    body:
      "Anything you really want, you can attain, if you really go after it.",
    author: "Wayne Dyer"
  },
  {
    body:
      "A leader or a man of action in a crisis almost always acts subconsciously and then thinks of the reasons for his action.",
    author: "Jawaharlal Nehru"
  },
  {
    body:
      "Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    author: "Buddha"
  },
  {
    body: "Let the beauty of what you love be what you do.",
    author: "Rumi"
  },
  {
    body:
      "Ask yourself the secret of your success. Listen to your answer, and practice it.",
    author: "Richard Bach"
  },
  {
    body: "The truth which has made us free will in the end make us glad also.",
    author: "Felix Adler"
  },
  {
    body:
      "Chaos is inherent in all compounded things. Strive on with diligence.",
    author: "Buddha"
  },
  {
    body: "Action is the foundational key to all success.",
    author: "Pablo Picasso"
  },
  {
    body: "We must not say every mistake is a foolish one.",
    author: "Cicero"
  },
  {
    body: "Ability will never catch up with the demand for it.",
    author: "Confucius"
  },
  {
    body:
      "I want you to be everything that's you, deep at the center of your being.",
    author: "Confucius"
  },
  {
    body: "Love is the master key that opens the gates of happiness.",
    author: "Oliver Holmes"
  },
  {
    body: "From error to error one discovers the entire truth.",
    author: "Sigmund Freud"
  },
  {
    body: "It isn't where you come from, it's where you're going that counts.",
    author: "Ella Fitzgerald"
  },
  {
    body:
      "Speak when you are angry and you will make the best speech you will ever regret.",
    author: "Ambrose Bierce"
  },
  {
    body:
      "A thing long expected takes the form of the unexpected when at last it comes.",
    author: "Mark Twain"
  },
  {
    body: "I know but one freedom and that is the freedom of the mind.",
    author: "Antoine de Saint-Exupery"
  },
  {
    body:
      "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.",
    author: "Leonardo Ruiz"
  },
  {
    body: "Our strength grows out of our weaknesses.",
    author: "Ralph Waldo Emerson"
  },
  {
    body: "You teach best what you most need to learn.",
    author: "Richard Bach"
  },
  {
    body:
      "As we grow as unique persons, we learn to respect the uniqueness of others.",
    author: "Robert Schuller"
  },
  {
    body:
      "If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when?",
    author: "Rabbi Hillel"
  },
  {
    body:
      "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
    author: "Andr� Gide"
  },
  {
    body:
      "In separateness lies the world's great misery, in compassion lies the world's true strength.",
    author: "Buddha"
  },
  {
    body:
      "If you can't explain it simply, you don't understand it well enough.",
    author: "Albert Einstein"
  },
  {
    body: "Most smiles are started by another smile.",
    author: ""
  },
  {
    body: "Example has more followers than reason.",
    author: "Christian Bovee"
  },
  {
    body:
      "Happiness does not come from having much, but from being attached to little.",
    author: "Cheng Yen"
  },
  {
    body:
      "You must train your intuition � you must trust the small voice inside you which tells you exactly what to say, what to decide.",
    author: "Ingrid Bergman"
  },
  {
    body:
      "Time changes everything except something within us which is always surprised by change.",
    author: "Thomas Hardy"
  },
  {
    body:
      "Nothing is so strong as gentleness. Nothing is so gentle as real strength.",
    author: "Frances de Sales"
  },
  {
    body:
      "Blessed is the man who expects nothing, for he shall never be disappointed.",
    author: "Alexander Pope"
  },
  {
    body:
      "The real measure of your wealth is how much youd be worth if you lost all your money.",
    author: ""
  },
  {
    body:
      "Trust your hunches. They're usually based on facts filed away just below the conscious level.",
    author: "Joyce Brothers"
  },
  {
    body: "Wherever a man turns he can find someone who needs him.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "The universe is full of magical things, patiently waiting for our wits to grow sharper.",
    author: "Eden Phillpotts"
  },
  {
    body:
      "Never tell me the sky�s the limit when there are footprints on the moon.",
    author: ""
  },
  {
    body: "Be kind whenever possible. It is always possible.",
    author: "Dalai Lama"
  },
  {
    body:
      "Don't wait for your feelings to change to take the action. Take the action and your feelings will change.",
    author: "Barbara Baron"
  },
  {
    body:
      "It is impossible for a man to learn what he thinks he already knows.",
    author: "Epictetus"
  },
  {
    body:
      "Success is getting what you want. Happiness is wanting what you get.",
    author: "Dale Carnegie"
  },
  {
    body:
      "One that desires to excel should endeavour in those things that are in themselves most excellent.",
    author: "Epictetus"
  },
  {
    body:
      "If you have made mistakes, there is always another chance for you. You may have a fresh start any moment you choose.",
    author: "Mary Pickford"
  },
  {
    body:
      "The greatest mistake you can make in life is to be continually fearing you will make one.",
    author: "Elbert Hubbard"
  },
  {
    body:
      "Imagination is the living power and prime agent of all human perception.",
    author: "Samuel Taylor Coleridge"
  },
  {
    body:
      "My mama always said: life's like a box of chocolate � you never know what you gonna get.",
    author: "Forrest Gump"
  },
  {
    body:
      "The only Zen you find on the tops of mountains is the Zen you bring up there.",
    author: "Robert Pirsig"
  },
  {
    body: "Yeah we all shine on, like the moon, and the stars, and the sun.",
    author: "John Lennon"
  },
  {
    body:
      "The thing always happens that you really believe in; and the belief in a thing makes it happen.",
    author: "Frank Wright"
  },
  {
    body:
      "Nature gave us one tongue and two ears so we could hear twice as much as we speak.",
    author: "Epictetus"
  },
  {
    body:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin Roosevelt"
  },
  {
    body:
      "Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary.",
    author: "Margaret Cousins"
  },
  {
    body: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein"
  },
  {
    body:
      "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
    author: "Lao Tzu"
  },
  {
    body: "There is no way to prosperity, prosperity is the way.",
    author: "Wayne Dyer"
  },
  {
    body:
      "We are not animals. We are not a product of what has happened to us in our past. We have the power of choice.",
    author: "Stephen Covey"
  },
  {
    body:
      "Life is not measured by the breaths you take, but by its breathtaking moments.",
    author: "Michael Vance"
  },
  {
    body: "If I know what love is, it is because of you.",
    author: "Hermann Hesse"
  },
  {
    body: "The less effort, the faster and more powerful you will be.",
    author: "Bruce Lee"
  },
  {
    body: "Every new day is another chance to change your life.",
    author: ""
  },
  {
    body:
      "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
    author: "Buddha"
  },
  {
    body: "It isn't where you come from, it's where you're going that counts.",
    author: "Ella Fitzgerald"
  },
  {
    body:
      "The winner ain't the one with the fastest car it's the one who refuses to lose.",
    author: "Dale Earnhardt"
  },
  {
    body: "Talk doesn't cook rice.",
    author: "Chinese proverb"
  },
  {
    body:
      "To be thoughtful and kind only takes a few seconds compared to the timeless hurt caused by one rude gesture.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible.",
    author: "Maya Angelou"
  },
  {
    body: "Gratitude is riches. Complaint is poverty.",
    author: "Doris Day"
  },
  {
    body:
      "One must be fond of people and trust them if one is not to make a mess of life.",
    author: "E. M. Forster"
  },
  {
    body:
      "Rather than wishing for change, you first must be prepared to change.",
    author: "Catherine Pulsifer"
  },
  {
    body:
      "Setting goals is the first step in turning the invisible into the visible.",
    author: "Tony Robbins"
  },
  {
    body: "For everything that lives is holy, life delights in life.",
    author: "William Blake"
  },
  {
    body:
      "By accepting yourself and being fully what you are, your presence can make others happy.",
    author: "Jane Roberts"
  },
  {
    body:
      "Flow with whatever is happening and let your mind be free. Stay centred by accepting whatever you are doing. This is the ultimate.",
    author: "Chuang Tzu"
  },
  {
    body: "The best thing in every noble dream is the dreamer...",
    author: "Moncure Conway"
  },
  {
    body:
      "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
    author: "Buckminster Fuller"
  },
  {
    body:
      "Do not give your attention to what others do or fail to do; give it to what you do or fail to do.",
    author: "Dhammapada"
  },
  {
    body:
      "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.",
    author: "George Sheehan"
  },
  {
    body:
      "Sadness may be part of life but there is no need to let it dominate your entire life.",
    author: "Byron Pulsifer"
  },
  {
    body: "The only real mistake is the one from which we learn nothing.",
    author: "John Powell"
  },
  {
    body: "Myths which are believed in tend to become true.",
    author: "George Orwell"
  },
  {
    body: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "Bernard Shaw"
  },
  {
    body:
      "Strong people make as many mistakes as weak people. Difference is that strong people admit their mistakes, laugh at them, learn from them. That is how they become strong.",
    author: "Richard Needham"
  },
  {
    body:
      "The superior man acts before he speaks, and afterwards speaks according to his action.",
    author: "Confucius"
  },
  {
    body: "Well done is better than well said.",
    author: "Benjamin Franklin"
  },
  {
    body: "I hear and I forget. I see and I remember. I do and I understand.",
    author: "Confucius"
  },
  {
    body: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra"
  },
  {
    body: "Argue for your limitations, and sure enough they're yours.",
    author: "Richard Bach"
  },
  {
    body: "No man can succeed in a line of endeavor which he does not like.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
    author: ""
  },
  {
    body:
      "In rivers, the water that you touch is the last of what has passed and the first of that which comes; so with present time.",
    author: "Leonardo da Vinci"
  },
  {
    body:
      "If you're in a bad situation, don't worry it'll change. If you're in a good situation, don't worry it'll change.",
    author: "John Simone"
  },
  {
    body: "Love is just a word until someone comes along and gives it meaning.",
    author: ""
  },
  {
    body: "I know but one freedom and that is the freedom of the mind.",
    author: "Antoine de Saint-Exupery"
  },
  {
    body: "Action will remove the doubts that theory cannot solve.",
    author: "Tehyi Hsieh"
  },
  {
    body:
      "Don't leave a stone unturned. It's always something, to know you have done the most you could.",
    author: "Charles Dickens"
  },
  {
    body:
      "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
    author: "Harriet Tubman"
  },
  {
    body:
      "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    author: "Buddha"
  },
  {
    body:
      "If you're in a bad situation, don't worry it'll change. If you're in a good situation, don't worry it'll change.",
    author: "John Simone"
  },
  {
    body: "Most folks are about as happy as they make up their minds to be.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "The greatest way to live with honor in this world is to be what we pretend to be.",
    author: "Socrates"
  },
  {
    body: "Kindness is the greatest wisdom.",
    author: ""
  },
  {
    body:
      "To know your purpose is to live a life of direction, and in that direction is found peace and tranquillity.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "The past has no power to stop you from being present now. Only your grievance about the past can do that.",
    author: "Eckhart Tolle"
  },
  {
    body:
      "If you would take, you must first give, this is the beginning of intelligence.",
    author: "Lao Tzu"
  },
  {
    body:
      "Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world.",
    author: "Blaise Pascal"
  },
  {
    body:
      "I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability.",
    author: "Confucius"
  },
  {
    body:
      "If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.",
    author: "Albert Einstein"
  },
  {
    body: "Our intention creates our reality.",
    author: "Wayne Dyer"
  },
  {
    body:
      "The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Stevenson"
  },
  {
    body: "When the solution is simple, God is answering.",
    author: "Albert Einstein"
  },
  {
    body: "The doors we open and close each day decide the lives we live.",
    author: "Flora Whittemore"
  },
  {
    body: "Life is just a chance to grow a soul.",
    author: "A. Powell Davies"
  },
  {
    body: "He who obtains has little. He who scatters has much.",
    author: "Lao Tzu"
  },
  {
    body:
      "If you spend too much time thinking about a thing, you'll never get it done.",
    author: "Bruce Lee"
  },
  {
    body: "Those who are free of resentful thoughts surely find peace.",
    author: "Buddha"
  },
  {
    body:
      "All men have a sweetness in their life. That is what helps them go on. It is towards that they turn when they feel too worn out.",
    author: "Albert Camus"
  },
  {
    body:
      "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk.",
    author: "Doug Larson"
  },
  {
    body:
      "The odds of hitting your target go up dramatically when you aim at it.",
    author: "Mal Pancoast"
  },
  {
    body: "Fear is a darkroom where negatives develop.",
    author: "Usman Asif"
  },
  {
    body:
      "Your work is to discover your work and then with all your heart to give yourself to it.",
    author: "Buddha"
  },
  {
    body:
      "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.",
    author: "Thomas Carlyle"
  },
  {
    body: "From wonder into wonder existence opens.",
    author: "Lao Tzu"
  },
  {
    body:
      "Liberty, taking the word in its concrete sense, consists in the ability to choose.",
    author: "Simone Weil"
  },
  {
    body:
      "He who lives in harmony with himself lives in harmony with the universe.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "You can stand tall without standing on someone. You can be a victor without having victims.",
    author: "Harriet Woods"
  },
  {
    body:
      "I believe that we are fundamentally the same and have the same basic potential.",
    author: "Dalai Lama"
  },
  {
    body: "If you cannot do great things, do small things in a great way.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Neither genius, fame, nor love show the greatness of the soul. Only kindness can do that.",
    author: "Jean Lacordaire"
  },
  {
    body: "I believe in one thing only, the power of human will.",
    author: "Joseph Stalin"
  },
  {
    body: "You can't choose up sides on a round world.",
    author: "Wayne Dyer"
  },
  {
    body: "Excellence is not a skill. It is an attitude.",
    author: "Ralph Marston"
  },
  {
    body: "It's not what happens to you, but how you react to it that matters.",
    author: "Epictetus"
  },
  {
    body:
      "Bad times have a scientific value. These are occasions a good learner would not miss.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
    author: ""
  },
  {
    body:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
    author: "Albert Einstein"
  },
  {
    body:
      "It's not who you are that holds you back, it's who you think you're not.",
    author: ""
  },
  {
    body:
      "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
    author: "Isaac Asimov"
  },
  {
    body: "Miracles come in moments. Be ready and willing.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Everything that irritates us about others can lead us to a better understanding of ourselves.",
    author: "Carl Jung"
  },
  {
    body: "The deepest craving of human nature is the need to be appreciated.",
    author: "William James"
  },
  {
    body:
      "The free man is he who does not fear to go to the end of his thought.",
    author: "Leon Blum"
  },
  {
    body:
      "All children are artists. The problem is how to remain an artist once he grows up.",
    author: "Pablo Picasso"
  },
  {
    body: "You can do it if you believe you can!",
    author: "Napoleon Hill"
  },
  {
    body:
      "Each time we face a fear, we gain strength, courage, and confidence in the doing.",
    author: ""
  },
  {
    body:
      "I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted.",
    author: "Og Mandino"
  },
  {
    body: "There never was a good knife made of bad steel.",
    author: "Benjamin Franklin"
  },
  {
    body: "Either I will find a way, or I will make one.",
    author: "Philip Sidney"
  },
  {
    body:
      "Learn all you can from the mistakes of others. You won't have time to make them all yourself.",
    author: "Alfred Sheinwold"
  },
  {
    body:
      "I am glad that I paid so little attention to good advice; had I abided by it I might have been saved from some of my most valuable mistakes.",
    author: "Edna Millay"
  },
  {
    body:
      "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
    author: "Laurence J. Peter"
  },
  {
    body:
      "Take no thought of who is right or wrong or who is better than. Be not for or against.",
    author: "Bruce Lee"
  },
  {
    body: "Argue for your limitations, and sure enough theyre yours.",
    author: "Richard Bach"
  },
  {
    body:
      "Good people are good because they've come to wisdom through failure. We get very little wisdom from success, you know.",
    author: "William Saroyan"
  },
  {
    body: "Love is the master key that opens the gates of happiness.",
    author: "Oliver Holmes"
  },
  {
    body:
      "Neither a lofty degree of intelligence nor imagination nor both together go to the making of genius. Love, love, love, that is the soul of genius.",
    author: "Wolfgang Amadeus Mozart"
  },
  {
    body:
      "There is only one success � to be able to spend your life in your own way.",
    author: "Christopher Morley"
  },
  {
    body: "We lost because we told ourselves we lost.",
    author: "Leo Tolstoy"
  },
  {
    body: "All the flowers of all the tomorrows are in the seeds of today.",
    author: ""
  },
  {
    body:
      "The difficulties of life are intended to make us better, not bitter.",
    author: ""
  },
  {
    body:
      "Man is not sum of what he has already, but rather the sum of what he does not yet have, of what he could have.",
    author: "Jean-Paul Sartre"
  },
  {
    body: "A stumble may prevent a fall.",
    author: ""
  },
  {
    body:
      "We can only be said to be alive in those moments when our hearts are conscious of our treasures.",
    author: "Thornton Wilder"
  },
  {
    body:
      "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
    author: "John F. Kennedy"
  },
  {
    body:
      "You have power over your mind � not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "The fox has many tricks. The hedgehog has but one. But that is the best of all.",
    author: "Desiderius Erasmus"
  },
  {
    body:
      "Do not expect the world to look bright, if you habitually wear gray-brown glasses.",
    author: "Tomas Eliot"
  },
  {
    body: "Nothing strengthens authority so much as silence.",
    author: "Leonardo da Vinci"
  },
  {
    body:
      "Everything that irritates us about others can lead us to a better understanding of ourselves.",
    author: "Carl Jung"
  },
  {
    body: "For success, attitude is equally as important as ability.",
    author: "Harry Banks"
  },
  {
    body: "He who knows that enough is enough will always have enough.",
    author: "Lao Tzu"
  },
  {
    body: "The cautious seldom err.",
    author: "Confucius"
  },
  {
    body: "He who talks more is sooner exhausted.",
    author: "Lao Tzu"
  },
  {
    body:
      "We are the leaves of one branch, the drops of one sea, the flowers of one garden.",
    author: "Jean Lacordaire"
  },
  {
    body:
      "I think somehow we learn who we really are and then live with that decision.",
    author: "Eleanor Roosevelt"
  },
  {
    body:
      "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "The winner ain't the one with the fastest car it's the one who refuses to lose.",
    author: "Dale Earnhardt"
  },
  {
    body: "People may doubt what you say, but they will believe what you do.",
    author: "Lewis Cass"
  },
  {
    body:
      "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.",
    author: "Donald Trump"
  },
  {
    body: "To succeed, we must first believe that we can.",
    author: "Michael Korda"
  },
  {
    body: "What you give is what you get.",
    author: "Byron Pulsifer"
  },
  {
    body: "To avoid criticism, do nothing, say nothing, be nothing.",
    author: "Elbert Hubbard"
  },
  {
    body:
      "Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others.",
    author: "Jacob Braude"
  },
  {
    body:
      "Mistakes are always forgivable, if one has the courage to admit them.",
    author: "Bruce Lee"
  },
  {
    body:
      "Liberty, taking the word in its concrete sense, consists in the ability to choose.",
    author: "Simone Weil"
  },
  {
    body: "Success is determined by those whom prove the impossible, possible.",
    author: "James Pence"
  },
  {
    body: "Absence makes the heart grow fonder.",
    author: "Haynes Bayly"
  },
  {
    body: "Life is a succession of moments. To live each one is to succeed.",
    author: "Corita Kent"
  },
  {
    body:
      "Doing what you love is the cornerstone of having abundance in your life.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom.",
    author: "Marcel Proust"
  },
  {
    body: "All is flux; nothing stays still.",
    author: "Heraclitus"
  },
  {
    body:
      "I have always thought the actions of men the best interpreters of their thoughts.",
    author: "John Locke"
  },
  {
    body: "Fear not for the future, weep not for the past.",
    author: "Percy Shelley"
  },
  {
    body:
      "Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance.",
    author: "Byron Pulsifer"
  },
  {
    body: "Wrinkles should merely indicate where smiles have been.",
    author: "Mark Twain"
  },
  {
    body: "The only way to have a friend is to be one.",
    author: "Ralph Emerson"
  },
  {
    body: "We choose our destiny in the way we treat others.",
    author: "Wit"
  },
  {
    body: "Love is the master key that opens the gates of happiness.",
    author: "Oliver Holmes"
  },
  {
    body:
      "In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true.",
    author: "Buddha"
  },
  {
    body:
      "If you break your neck, if you have nothing to eat, if your house is on fire, then you got a problem. Everything else is inconvenience.",
    author: "Robert Fulghum"
  },
  {
    body:
      "Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?",
    author: "Confucius"
  },
  {
    body:
      "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
    author: "Rumi"
  },
  {
    body:
      "Men of perverse opinion do not know the excellence of what is in their hands, till some one dash it from them.",
    author: "Sophocles"
  },
  {
    body:
      "If you would take, you must first give, this is the beginning of intelligence.",
    author: "Lao Tzu"
  },
  {
    body:
      "Knowledge has three degrees � opinion, science, illumination. The means or instrument of the first is sense; of the second, dialectic; of the third, intuition.",
    author: "Plotinus"
  },
  {
    body:
      "Discovery consists of seeing what everybody has seen and thinking what nobody else has thought.",
    author: "Jonathan Swift"
  },
  {
    body:
      "This is the final test of a gentleman: his respect for those who can be of no possible value to him.",
    author: "William Lyon Phelps"
  },
  {
    body:
      "To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.",
    author: "William Londen"
  },
  {
    body: "Wisdom is the supreme part of happiness.",
    author: "Sophocles"
  },
  {
    body:
      "You may only be someone in the world, but to someone else, you may be the world.",
    author: ""
  },
  {
    body: "Most people are about as happy as they make up their minds to be",
    author: "Abraham Lincoln"
  },
  {
    body:
      "Every sixty seconds you spend angry, upset or mad, is a full minute of happiness you�ll never get back.",
    author: ""
  },
  {
    body:
      "If we had no winter, the spring would not be so pleasant; if we did not sometimes taste of adversity, prosperity would not be so welcome.",
    author: "Anne Bradstreet"
  },
  {
    body:
      "The greatest way to live with honor in this world is to be what we pretend to be.",
    author: "Socrates"
  },
  {
    body:
      "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
    author: "Buddha"
  },
  {
    body:
      "Each misfortune you encounter will carry in it the seed of tomorrows good luck.",
    author: "Og Mandino"
  },
  {
    body:
      "Slow down and everything you are chasing will come around and catch you.",
    author: "John De Paola"
  },
  {
    body:
      "A hero is no braver than an ordinary man, but he is braver five minutes longer.",
    author: "Ralph Waldo Emerson"
  },
  {
    body:
      "Staying in one place is the best path to be taken over and surpassed by many.",
    author: "Byron Pulsifer"
  },
  {
    body: "The cause is hidden. The effect is visible to all.",
    author: "Ovid"
  },
  {
    body:
      "Joy is what happens to us when we allow ourselves to recognize how good things really are.",
    author: "Marianne Williamson"
  },
  {
    body: "I begin with an idea and then it becomes something else.",
    author: "Pablo Picasso"
  },
  {
    body:
      "It is not enough to have a good mind; the main thing is to use it well.",
    author: "Rene Descartes"
  },
  {
    body: "All is flux; nothing stays still.",
    author: "Heraclitus"
  },
  {
    body: "Silence is a fence around wisdom.",
    author: "German proverb"
  },
  {
    body:
      "Although there may be tragedy in your life, there's always a possibility to triumph. It doesn't matter who you are, where you come from. The ability to triumph begins with you. Always.",
    author: "Oprah Winfrey"
  },
  {
    body: "Better than a thousand hollow words, is one word that brings peace.",
    author: "Buddha"
  },
  {
    body:
      "We cannot solve our problems with the same thinking we used when we created them.",
    author: "Albert Einstein"
  },
  {
    body: "If you can dream it, you can do it.",
    author: "Walt Disney"
  },
  {
    body:
      "Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.",
    author: "Carl Jung"
  },
  {
    body:
      "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
    author: "Albert Camus"
  },
  {
    body:
      "Never say there is nothing beautiful in the world any more. There is always something to make you wonder in the shape of a tree, the trembling of a leaf.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "Friends are those rare people who ask how we are and then wait to hear the answer.",
    author: "Ed Cunningham"
  },
  {
    body: "I may not know everything, but everything is not known yet anyway.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "It is the greatest of all mistakes to do nothing because you can only do little � do what you can.",
    author: "Sydney Smith"
  },
  {
    body:
      "Everything in the universe goes by indirection. There are no straight lines.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Vision without action is a daydream. Action without vision is a nightmare.",
    author: "Japanese proverb"
  },
  {
    body: "From wonder into wonder existence opens.",
    author: "Lao Tzu"
  },
  {
    body:
      "There is never enough time to do everything, but there is always enough time to do the most important thing.",
    author: "Brian Tracy"
  },
  {
    body: "You really can change the world if you care enough.",
    author: "Marian Edelman"
  },
  {
    body: "The years teach much which the days never know.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    author: "Buddha"
  },
  {
    body:
      "You do not become good by trying to be good, but by finding the goodness that is already within you.",
    author: "Eckhart Tolle"
  },
  {
    body: "You can observe a lot just by watching.",
    author: "Yogi Berra"
  },
  {
    body:
      "Life is not measured by the breaths we take, but by the moments that take our breath.",
    author: ""
  },
  {
    body:
      "Setting an example is not the main means of influencing another, it is the only means.",
    author: "Albert Einstein"
  },
  {
    body: "The best way out is always through.",
    author: "Robert Frost"
  },
  {
    body: "All things change; nothing perishes.",
    author: "Ovid"
  },
  {
    body:
      "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
    author: "Buckminster Fuller"
  },
  {
    body: "You only lose what you cling to.",
    author: "Buddha"
  },
  {
    body:
      "The only real failure in life is not to be true to the best one knows.",
    author: "Buddha"
  },
  {
    body:
      "On every thorn, delightful wisdom grows, In every rill a sweet instruction flows.",
    author: "Edward Young"
  },
  {
    body: "Just as much as we see in others we have in ourselves.",
    author: "William Hazlitt"
  },
  {
    body:
      "What you are is what you have been. What you�ll be is what you do now.",
    author: "Buddha"
  },
  {
    body: "If there is no struggle, there is no progress.",
    author: "Frederick Douglass"
  },
  {
    body: "The cure for boredom is curiosity. There is no cure for curiosity.",
    author: "Ellen Parr"
  },
  {
    body:
      "Good people are good because they've come to wisdom through failure. We get very little wisdom from success, you know.",
    author: "William Saroyan"
  },
  {
    body: "To bring anything into your life, imagine that it's already there.",
    author: "Richard Bach"
  },
  {
    body:
      "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.",
    author: "Joseph Roux"
  },
  {
    body:
      "People grow through experience if they meet life honestly and courageously. This is how character is built.",
    author: "Eleanor Roosevelt"
  },
  {
    body: "It's not what happens to you, but how you react to it that matters.",
    author: "Epictetus"
  },
  {
    body: "Never put off till tomorrow what you can do today.",
    author: "Thomas Jefferson"
  },
  {
    body: "It isn't where you come from, it's where you're going that counts.",
    author: "Ella Fitzgerald"
  },
  {
    body:
      "The meaning I picked, the one that changed my life: Overcome fear, behold wonder.",
    author: "Richard Bach"
  },
  {
    body:
      "If you think you can, you can. And if you think you can't, you're right.",
    author: "Henry Ford"
  },
  {
    body:
      "It's so simple to be wise. Just think of something stupid to say and then don't say it.",
    author: "Sam Levenson"
  },
  {
    body: "Experience keeps a dear school, but fools will learn in no other.",
    author: "Benjamin Franklin"
  },
  {
    body: "Every problem has a gift for you in its hands.",
    author: "Richard Bach"
  },
  {
    body:
      "We are the leaves of one branch, the drops of one sea, the flowers of one garden.",
    author: "Jean Lacordaire"
  },
  {
    body:
      "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mohandas Gandhi"
  },
  {
    body:
      "Our lives are the only meaningful expression of what we believe and in Whom we believe. And the only real wealth, for any of us, lies in our faith.",
    author: "Gordon Hinckley"
  },
  {
    body:
      "There surely is in human nature an inherent propensity to extract all the good out of all the evil.",
    author: "Benjamin Haydon"
  },
  {
    body:
      "Thats the risk you take if you change: that people you've been involved with won't like the new you. But other people who do will come along.",
    author: "Lisa Alther"
  },
  {
    body:
      "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity",
    author: "Louis Pasteur"
  },
  {
    body: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt"
  },
  {
    body: "The only way to have a friend is to be one.",
    author: "Ralph Emerson"
  },
  {
    body: "There never was a good knife made of bad steel.",
    author: "Benjamin Franklin"
  },
  {
    body:
      "Wisdom is knowing what to do next; Skill is knowing how ot do it, and Virtue is doing it.",
    author: "David Jordan"
  },
  {
    body: "Beauty is not in the face; beauty is a light in the heart.",
    author: "Kahlil Gibran"
  },
  {
    body:
      "The beginning of knowledge is the discovery of something we do not understand.",
    author: "Frank Herbert"
  },
  {
    body:
      "The future is completely open, and we are writing it moment to moment.",
    author: "Pema Chodron"
  },
  {
    body: "Music in the soul can be heard by the universe.",
    author: "Lao Tzu"
  },
  {
    body:
      "It is through science that we prove, but through intuition that we discover.",
    author: "Jules Poincare"
  },
  {
    body:
      "Our doubts are traitors and make us lose the good we often might win, by fearing to attempt.",
    author: "Jane Addams"
  },
  {
    body:
      "We have two ears and one mouth so that we can listen twice as much as we speak.",
    author: "Epictetus"
  },
  {
    body:
      "Nature gave us one tongue and two ears so we could hear twice as much as we speak.",
    author: "Epictetus"
  },
  {
    body:
      "You may be deceived if you trust too much, but you will live in torment if you don't trust enough.",
    author: "Frank Crane"
  },
  {
    body:
      "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
    author: "Isaac Asimov"
  },
  {
    body: "What we see depends mainly on what we look for.",
    author: "John Lubbock"
  },
  {
    body:
      "It is difficult to achieve a spirit of genuine cooperation as long as people remain indifferent to the feelings and happiness of others.",
    author: "Dalai Lama"
  },
  {
    body:
      "If you don't like something, change it. If you can't change it, change your attitude.",
    author: "Maya Angelou"
  },
  {
    body:
      "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    author: "Audre Lorde"
  },
  {
    body: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    body: "To hell with circumstances; I create opportunities.",
    author: "Bruce Lee"
  },
  {
    body: "Every problem has a gift for you in its hands.",
    author: "Richard Bach"
  },
  {
    body: "It's easier to see the mistakes on someone else's paper.",
    author: ""
  },
  {
    body:
      "Compassion and happiness are not a sign of weakness but a sign of strength.",
    author: "Dalai Lama"
  },
  {
    body: "No day in which you learn something is a complete loss.",
    author: "David Eddings"
  },
  {
    body: "He who has imagination without learning has wings but no feet.",
    author: "Joseph Joubert"
  },
  {
    body:
      "If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.",
    author: "Albert Einstein"
  },
  {
    body:
      "Everything in the universe goes by indirection. There are no straight lines.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Passion creates the desire for more and action fuelled by passion creates a future.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "The moment one gives close attention to anything, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
    author: "Henry Miller"
  },
  {
    body:
      "The first step to getting the things you want out of life is this: decide what you want.",
    author: "Ben Stein"
  },
  {
    body: "When in doubt, tell the truth.",
    author: "Mark Twain"
  },
  {
    body: "The world is always in movement.",
    author: "V. Naipaul"
  },
  {
    body:
      "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
    author: "Helen Keller"
  },
  {
    body: "A man sees in the world what he carries in his heart.",
    author: "Goethe"
  },
  {
    body:
      "You might well remember that nothing can bring you success but yourself.",
    author: "Napoleon Hill"
  },
  {
    body: "Learning is finding out what you already know.",
    author: "Richard Bach"
  },
  {
    body: "I have never been hurt by anything I didn't say.",
    author: "Calvin Coolidge"
  },
  {
    body:
      "You are never given a wish without also being given the power to make it come true. You may have to work for it, however.",
    author: "Richard Bach"
  },
  {
    body:
      "Only through our connectedness to others can we really know and enhance the self. And only through working on the self can we begin to enhance our connectedness to others.",
    author: "Harriet Lerner"
  },
  {
    body: "What you give is what you get.",
    author: "Byron Pulsifer"
  },
  {
    body: "The world is always in movement.",
    author: "V. Naipaul"
  },
  {
    body:
      "The art of progress is to preserve order amid change, and to preserve change amid order.",
    author: "Alfred Whitehead"
  },
  {
    body:
      "The future is completely open, and we are writing it moment to moment.",
    author: "Pema Chodron"
  },
  {
    body:
      "Silences make the real conversations between friends. Not the saying but the never needing to say is what counts.",
    author: "Margaret Runbeck"
  },
  {
    body:
      "Why compare yourself with others? No one in the entire world can do a better job of being you than you.",
    author: ""
  },
  {
    body: "Nothing ever goes away until it has taught us what we need to know.",
    author: "Pema Chodron"
  },
  {
    body:
      "A little knowledge that acts is worth infinitely more than much knowledge that is idle.",
    author: "Kahlil Gibran"
  },
  {
    body:
      "A good teacher is like a candle � it consumes itself to light the way for others.",
    author: ""
  },
  {
    body:
      "Follow effective action with quiet reflection. From the quiet reflection will come even more effective action.",
    author: "Peter Drucker"
  },
  {
    body:
      "The Superior Man is aware of Righteousness, the inferior man is aware of advantage.",
    author: "Confucius"
  },
  {
    body:
      "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.",
    author: "Elbert Hubbard"
  },
  {
    body: "Myths which are believed in tend to become true.",
    author: "George Orwell"
  },
  {
    body:
      "Id rather regret the things that I have done than the things that I have not done.",
    author: "Lucille Ball"
  },
  {
    body:
      "When you meet someone better than yourself, turn your thoughts to becoming his equal. When you meet someone not as good as you are, look within and examine your own self.",
    author: "Confucius"
  },
  {
    body: "Go put your creed into the deed. Nor speak with double tongue.",
    author: "Ralph Emerson"
  },
  {
    body:
      "The happiness of a man in this life does not consist in the absence but in the mastery of his passions.",
    author: "Alfred Tennyson"
  },
  {
    body:
      "The aim of life is self-development. To realize ones nature perfectly � that is what each of us is here for.",
    author: "Oscar Wilde"
  },
  {
    body:
      "It all depends on how we look at things, and not how they are in themselves.",
    author: "Carl Jung"
  },
  {
    body: "Those who cannot learn from history are doomed to repeat it.",
    author: "George Santayan"
  },
  {
    body: "It isn't where you come from, it's where you're going that counts.",
    author: "Ella Fitzgerald"
  },
  {
    body: "Keep yourself to the sunshine and you cannot see the shadow.",
    author: "Helen Keller"
  },
  {
    body: "We never live; we are always in the expectation of living.",
    author: "Voltaire"
  },
  {
    body:
      "Happiness is a Swedish sunset � it is there for all, but most of us look the other way and lose it.",
    author: "Mark Twain"
  },
  {
    body: "To enjoy life, we must touch much of it lightly.",
    author: "Voltaire"
  },
  {
    body:
      "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
    author: "Leonardo da Vinci"
  },
  {
    body:
      "Failure will never overtake me if my determination to succeed is strong enough.",
    author: "Og Mandino"
  },
  {
    body:
      "Divide each difficulty into as many parts as is feasible and necessary to resolve it.",
    author: "Rene Descartes"
  },
  {
    body: "If you cannot do great things, do small things in a great way.",
    author: "Napoleon Hill"
  },
  {
    body:
      "If one does not know to which port is sailing, no wind is favorable.",
    author: "Seneca"
  },
  {
    body:
      "The cosmos is neither moral or immoral; only people are. He who would move the world must first move himself.",
    author: "Edward Ericson"
  },
  {
    body:
      "Try not to become a man of success, but rather try to become a man of value.",
    author: "Albert Einstein"
  },
  {
    body: "Smile, breathe and go slowly.",
    author: "Thich Nhat Hanh"
  },
  {
    body: "Wherever a man turns he can find someone who needs him.",
    author: "Albert Schweitzer"
  },
  {
    body:
      "The minute you settle for less than you deserve, you get even less than you settled for.",
    author: "Maureen Dowd"
  },
  {
    body:
      "The most complicated achievements of thought are possible without the assistance of consciousness.",
    author: "Sigmund Freud"
  },
  {
    body:
      "A failure is a man who has blundered but is not capable of cashing in on the experience.",
    author: "Elbert Hubbard"
  },
  {
    body: "Stay away from what might have been and look at what will be.",
    author: "Marsha Petrie Sue"
  },
  {
    body:
      "Choose a job you love, and you will never have to work a day in your life.",
    author: "Confucius"
  },
  {
    body:
      "He who lives in harmony with himself lives in harmony with the universe.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "There is only one corner of the universe you can be certain of improving, and that's your own self.",
    author: "Aldous Huxley"
  },
  {
    body:
      "This world, after all our science and sciences, is still a miracle; wonderful, inscrutable, magical and more, to whosoever will think of it.",
    author: "Thomas Carlyle"
  },
  {
    body:
      "The truest greatness lies in being kind, the truest wisdom in a happy mind.",
    author: "Ella Wilcox"
  },
  {
    body: "An ounce of emotion is equal to a ton of facts.",
    author: "John Junor"
  },
  {
    body:
      "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    author: "Arthur Conan Doyle"
  },
  {
    body:
      "Risk more than others think is safe. Care more than others think is wise. Dream more than others think is practical.Expect more than others think is possible.",
    author: "Cadet Maxim"
  },
  {
    body:
      "Try not to become a man of success but rather try to become a man of value.",
    author: "Albert Einstein"
  },
  {
    body:
      "At the center of your being you have the answer; you know who you are and you know what you want.",
    author: "Lao Tzu"
  },
  {
    body:
      "The person who lives life fully, glowing with life's energy, is the person who lives a successful life.",
    author: "Daisaku Ikeda"
  },
  {
    body:
      "At the center of your being you have the answer; you know who you are and you know what you want.",
    author: "Lao Tzu"
  },
  {
    body:
      "It is the greatest of all mistakes to do nothing because you can only do little � do what you can.",
    author: "Sydney Smith"
  },
  {
    body:
      "The superior man is satisfied and composed; the mean man is always full of distress.",
    author: "Confucius"
  },
  {
    body:
      "Do not waste yourself in rejection, nor bark against the bad, but chant the beauty of the good.",
    author: "Ralph Emerson"
  },
  {
    body: "If a man does his best, what else is there?",
    author: "George Patton"
  },
  {
    body:
      "If you are patient in one moment of anger, you will escape one hundred days of sorrow.",
    author: "Chinese proverb"
  },
  {
    body: "Only when we are no longer afraid do we begin to live.",
    author: "Dorothy Thompson"
  },
  {
    body: "Our strength grows out of our weaknesses.",
    author: "Ralph Waldo Emerson"
  },
  {
    body:
      "Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away.",
    author: "Robert Fulghum"
  },
  {
    body:
      "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.",
    author: "John Adams"
  },
  {
    body:
      "We need to find the courage to say NO to the things and people that are not serving us if we want to rediscover ourselves and live our lives with authenticity.",
    author: "Barbara De Angelis"
  },
  {
    body:
      "Treat people as if they were what they ought to be and you help them to become what they are capable of being.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "When in doubt, tell the truth.",
    author: "Mark Twain"
  },
  {
    body:
      "You do not become good by trying to be good, but by finding the goodness that is already within you.",
    author: "Eckhart Tolle"
  },
  {
    body:
      "It's not who you are that holds you back, it's who you think you're not.",
    author: ""
  },
  {
    body:
      "It is not so important to know everything as to appreciate what we learn.",
    author: "Hannah More"
  },
  {
    body: "We must become the change we want to see.",
    author: "Mahatma Gandhi"
  },
  {
    body: "Great is the art of beginning, but greater is the art of ending.",
    author: "Lazurus Long"
  },
  {
    body:
      "Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?",
    author: "Richard Bach"
  },
  {
    body:
      "To study and not think is a waste. To think and not study is dangerous.",
    author: "Confucius"
  },
  {
    body:
      "Simply put, you believer that things or people make you unhappy, but this is not accurate. You make yourself unhappy.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Simply put, you believer that things or people make you unhappy, but this is not accurate. You make yourself unhappy.",
    author: "Wayne Dyer"
  },
  {
    body: "Smile, breathe and go slowly.",
    author: "Thich Nhat Hanh"
  },
  {
    body:
      "Courage is not the absence of fear, but simply moving on with dignity despite that fear.",
    author: "Pat Riley"
  },
  {
    body:
      "It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward.",
    author: ""
  },
  {
    body: "Time is the most valuable thing a man can spend.",
    author: "Theophrastus"
  },
  {
    body: "Chaos and Order are not enemies, only opposites.",
    author: "Richard Garriott"
  },
  {
    body: "The day you decide to do it is your lucky day.",
    author: "Japanese proverb"
  },
  {
    body:
      "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
    author: "Buddha"
  },
  {
    body:
      "Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars.",
    author: "Henry Van Dyke"
  },
  {
    body:
      "To forgive is to set a prisoner free and realize that prisoner was you.",
    author: "Lewis B. Smedes"
  },
  {
    body:
      "Wishes can be your best avenue of getting what you want when you turn wishes into action. Action moves your wish to the forefront from thought to reality.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Look back over the past, with its changing empires that rose and fell, and you can foresee the future, too.",
    author: "Marcus Aurelius"
  },
  {
    body:
      "We are the leaves of one branch, the drops of one sea, the flowers of one garden.",
    author: "Jean Lacordaire"
  },
  {
    body:
      "True happiness means forging a strong spirit that is undefeated, no matter how trying our circumstances.",
    author: "Daisaku Ikeda"
  },
  {
    body:
      "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.",
    author: "Denis Waitley"
  },
  {
    body:
      "I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence.",
    author: "Frederick Douglass"
  },
  {
    body: "You give before you get.",
    author: "Napoleon Hill"
  },
  {
    body:
      "More often than not, anger is actually an indication of weakness rather than of strength.",
    author: "Dalai Lama"
  },
  {
    body:
      "Setting an example is not the main means of influencing another, it is the only means.",
    author: "Albert Einstein"
  },
  {
    body: "Keep your eyes on the stars and your feet on the ground.",
    author: "Theodore Roosevelt"
  },
  {
    body:
      "Take things as they are. Punch when you have to punch. Kick when you have to kick.",
    author: "Bruce Lee"
  },
  {
    body: "Argue for your limitations, and sure enough theyre yours.",
    author: "Richard Bach"
  },
  {
    body: "The only limit to your impact is your imagination and commitment.",
    author: "Tony Robbins"
  },
  {
    body:
      "A good teacher is like a candle � it consumes itself to light the way for others.",
    author: ""
  },
  {
    body: "You must welcome change as the rule but not as your ruler.",
    author: "Denis Waitley"
  },
  {
    body:
      "If you correct your mind, the rest of your life will fall into place.",
    author: "Lao Tzu"
  },
  {
    body:
      "Work for something because it is good, not just because it stands a chance to succeed.",
    author: "Vaclav Havel"
  },
  {
    body:
      "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle"
  },
  {
    body:
      "We can only be said to be alive in those moments when our hearts are conscious of our treasures.",
    author: "Thornton Wilder"
  },
  {
    body: "Trouble is only opportunity in work clothes.",
    author: "Henry J. Kaiser"
  },
  {
    body: "You're never a loser until you quit trying.",
    author: "Mike Ditka"
  },
  {
    body: "If the shoe doesn't fit, must we change the foot?",
    author: "Gloria Steinem"
  },
  {
    body:
      "You may only be someone in the world, but to someone else, you may be the world.",
    author: ""
  },
  {
    body:
      "I am glad that I paid so little attention to good advice; had I abided by it I might have been saved from some of my most valuable mistakes.",
    author: "Edna Millay"
  },
  {
    body:
      "Let your hook always be cast; in the pool where you least expect it, there will be a fish.",
    author: "Ovid"
  },
  {
    body:
      "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.",
    author: "Denis Waitley"
  },
  {
    body:
      "The world has the habit of making room for the man whose actions show that he knows where he is going.",
    author: "Napoleon Hill"
  },
  {
    body: "Nothing will work unless you do.",
    author: "Maya Angelou"
  },
  {
    body:
      "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
    author: "Barack Obama"
  },
  {
    body:
      "It is common sense to take a method and try it. If it fails, admit it frankly and try another. But above all, try something.",
    author: "Franklin D. Roosevelt"
  },
  {
    body:
      "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
    author: "John Quincy Adams"
  },
  {
    body:
      "It is surprising what a man can do when he has to, and how little most men will do when they don't have to.",
    author: "Walter Linn"
  },
  {
    body: "Doing nothing is better than being busy doing nothing.",
    author: "Lao Tzu"
  },
  {
    body: "I know but one freedom and that is the freedom of the mind.",
    author: "Antoine de Saint-Exupery"
  },
  {
    body:
      "You might well remember that nothing can bring you success but yourself.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Life's challenges are not supposed to paralyse you, they're supposed to help you discover who you are.",
    author: "Bernice Reagon"
  },
  {
    body:
      "Your worst enemy cannot harm you as much as your own unguarded thoughts.",
    author: "Buddha"
  },
  {
    body:
      "The world has the habit of making room for the man whose actions show that he knows where he is going.",
    author: "Napoleon Hill"
  },
  {
    body: "We know what we are, but know not what we may be.",
    author: "William Shakespeare"
  },
  {
    body:
      "Peace cannot be kept by force. It can only be achieved by understanding.",
    author: "Albert Einstein"
  },
  {
    body:
      "Our ability to achieve happiness and success depends on the strength of our wings.",
    author: "Catherine Pulsifer"
  },
  {
    body:
      "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
    author: "Charles DeLint"
  },
  {
    body:
      "The least of things with a meaning is worth more in life than the greatest of things without it.",
    author: "Carl Jung"
  },
  {
    body:
      "They must often change, who would be constant in happiness or wisdom.",
    author: "Confucius"
  },
  {
    body: "If you want a thing done well, do it yourself.",
    author: "Napoleon Bonaparte"
  },
  {
    body:
      "Let yourself be silently drawn by the stronger pull of what you really love.",
    author: "Rumi"
  },
  {
    body:
      "Do not expect the world to look bright, if you habitually wear gray-brown glasses.",
    author: "Tomas Eliot"
  },
  {
    body:
      "Why compare yourself with others? No one in the entire world can do a better job of being you than you.",
    author: ""
  },
  {
    body:
      "Don't fear failure so much that you refuse to try new things. The saddest summary of life contains three descriptions: could have, might have, and should have.",
    author: ""
  },
  {
    body: "Patience is the companion of wisdom.",
    author: "Saint Augustine"
  },
  {
    body: "If you cannot be silent be brilliant and thoughtful.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Action may not always bring happiness, but there is no happiness without action.",
    author: "Benjamin Disraeli"
  },
  {
    body: "A rolling stone gathers no moss.",
    author: "Publilius Syrus"
  },
  {
    body:
      "To go against the dominant thinking of your friends, of most of the people you see every day, is perhaps the most difficult act of heroism you can perform.",
    author: "Theodore H. White"
  },
  {
    body: "To fly, we have to have resistance.",
    author: "Maya Lin"
  },
  {
    body: "Never mistake activity for achievement.",
    author: "John Wooden"
  },
  {
    body:
      "As the rest of the world is walking out the door, your best friends are the ones walking in.",
    author: ""
  },
  {
    body:
      "Take no thought of who is right or wrong or who is better than. Be not for or against.",
    author: "Bruce Lee"
  },
  {
    body:
      "Six essential qualities that are the key to success: Sincerity, personal integrity, humility, courtesy, wisdom, charity.",
    author: "William Menninger"
  },
  {
    body:
      "The bird of paradise alights only upon the hand that does not grasp.",
    author: "John Berry"
  },
  {
    body: "Why worry about tomorrow, when today is all we have?",
    author: ""
  },
  {
    body:
      "Live through feeling and you will live through love. For feeling is the language of the soul, and feeling is truth.",
    author: "Matt Zotti"
  },
  {
    body: "Those who are free of resentful thoughts surely find peace.",
    author: "Buddha"
  },
  {
    body: "Pick battles big enough to matter, small enough to win.",
    author: "Jonathan Kozol"
  },
  {
    body:
      "Maxim for life: You get treated in life the way you teach people to treat you.",
    author: "Wayne Dyer"
  },
  {
    body: "The ladder of success is never crowded at the top.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Happiness is a perfume you cannot pour on others without getting a few drops on yourself.",
    author: "Ralph Waldo Emerson"
  },
  {
    body: "Love is the flower you've got to let grow.",
    author: "John Lennon"
  },
  {
    body: "Trust yourself. You know more than you think you do.",
    author: "Benjamin Spock"
  },
  {
    body: "We must embrace pain and burn it as fuel for our journey.",
    author: "Kenji Miyazawa"
  },
  {
    body:
      "I am glad that I paid so little attention to good advice; had I abided by it I might have been saved from some of my most valuable mistakes.",
    author: "Edna Millay"
  },
  {
    body:
      "Life a culmination of the past, an awareness of the present, an indication of the future beyond knowledge, the quality that gives a touch of divinity to matter.",
    author: "Charles A. Lindbergh"
  },
  {
    body: "He who is fixed to a star does not change his mind.",
    author: "Leonardo da Vinci"
  },
  {
    body:
      "Try not to become a man of success, but rather try to become a man of value.",
    author: "Albert Einstein"
  },
  {
    body:
      "The superior man is modest in his speech, but exceeds in his actions.",
    author: "Confucius"
  },
  {
    body:
      "There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them.",
    author: "Denis Waitley"
  },
  {
    body:
      "Never be afraid to try, remember... Amateurs built the ark, Professionals built the Titanic.",
    author: ""
  },
  {
    body:
      "If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when?",
    author: "Rabbi Hillel"
  },
  {
    body: "You can't trust without risk but neither can you live in a cocoon.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
    author: "Buckminster Fuller"
  },
  {
    body: "Be a good listener. Your ears will never get you in trouble.",
    author: "Frank Tyger"
  },
  {
    body:
      "The greatest good you can do for another is not just to share your riches but to reveal to him his own.",
    author: "Benjamin Disraeli"
  },
  {
    body:
      "We have two ears and one mouth so that we can listen twice as much as we speak.",
    author: "Epictetus"
  },
  {
    body:
      "A thing long expected takes the form of the unexpected when at last it comes.",
    author: "Mark Twain"
  },
  {
    body: "Do what you can. Want what you have. Be who you are.",
    author: "Forrest Church"
  },
  {
    body:
      "Think for yourselves and let others enjoy the privilege to do so too.",
    author: "Voltaire"
  },
  {
    body:
      "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.",
    author: "Confucius"
  },
  {
    body:
      "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.",
    author: "Melody Beattie"
  },
  {
    body:
      "I endeavour to be wise when I cannot be merry, easy when I cannot be glad, content with what cannot be mended and patient when there is no redress.",
    author: "Elizabeth Montagu"
  },
  {
    body:
      "My advice to you is not to inquire why or whither, but just enjoy your ice cream while its on your plate � that's my philosophy.",
    author: "Thornton Wilder"
  },
  {
    body: "Things do not change, we change.",
    author: "Henry Thoreau"
  },
  {
    body:
      "I love my past. I love my present. Im not ashamed of what Ive had, and Im not sad because I have it no longer.",
    author: "Colette"
  },
  {
    body:
      "Many people think of prosperity that concerns money only to forget that true prosperity is of the mind.",
    author: "Byron Pulsifer"
  },
  {
    body: "They can do all because they think they can.",
    author: "Virgil"
  },
  {
    body:
      "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
    author: "Lao Tzu"
  },
  {
    body:
      "Love at first sight is easy to understand; its when two people have been looking at each other for a lifetime that it becomes a miracle.",
    author: "Amy Bloom"
  },
  {
    body:
      "It is not only for what we do that we are held responsible, but also for what we do not do.",
    author: "Moliere"
  },
  {
    body:
      "Obstacles are those things you see when you take your eyes off the goal.",
    author: "Hannah More"
  },
  {
    body:
      "Everything that irritates us about others can lead us to an understanding of ourselves.",
    author: "Carl Jung"
  },
  {
    body:
      "Thats the risk you take if you change: that people you've been involved with won't like the new you. But other people who do will come along.",
    author: "Lisa Alther"
  },
  {
    body:
      "If you are patient in one moment of anger, you will escape one hundred days of sorrow.",
    author: "Chinese proverb"
  },
  {
    body:
      "Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.",
    author: "Mother Teresa"
  },
  {
    body:
      "Into each life rain must fall but rain can be the giver of life and it is all in your attitude that makes rain produce sunshine.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
    author: "Sai Baba"
  },
  {
    body:
      "Work for something because it is good, not just because it stands a chance to succeed.",
    author: "Vaclav Havel"
  },
  {
    body:
      "To be tested is good. The challenged life may be the best therapist.",
    author: "Gail Sheehy"
  },
  {
    body:
      "Happiness does not come from having much, but from being attached to little.",
    author: "Cheng Yen"
  },
  {
    body: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    body:
      "The fox has many tricks. The hedgehog has but one. But that is the best of all.",
    author: "Desiderius Erasmus"
  },
  {
    body: "Our intention creates our reality.",
    author: "Wayne Dyer"
  },
  {
    body:
      "We are all inclined to judge ourselves by our ideals; others, by their acts.",
    author: "Harold Nicolson"
  },
  {
    body: "A goal is a dream with a deadline.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
    author: "Bruce Lee"
  },
  {
    body:
      "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    author: "Arthur Conan Doyle"
  },
  {
    body:
      "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "The amount of happiness that you have depends on the amount of freedom you have in your heart.",
    author: "Thich Nhat Hanh"
  },
  {
    body: "Nothing is a waste of time if you use the experience wisely.",
    author: "Rodin"
  },
  {
    body: "The years teach much which the days never know.",
    author: "Ralph Emerson"
  },
  {
    body: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra"
  },
  {
    body: "Don't settle for a relationship that won't let you be yourself.",
    author: "Oprah Winfrey"
  },
  {
    body: "If we did the things we are capable of, we would astound ourselves.",
    author: "Thomas Edison"
  },
  {
    body:
      "To give hope to someone occurs when you teach them how to use the tools to do it for themselves.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
    author: "Bernard Shaw"
  },
  {
    body: "The only real valuable thing is intuition.",
    author: "Albert Einstein"
  },
  {
    body:
      "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
    author: ""
  },
  {
    body:
      "If we are facing in the right direction, all we have to do is keep on walking.",
    author: ""
  },
  {
    body:
      "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
    author: "Abraham Lincoln"
  },
  {
    body: "You always succeed in producing a result.",
    author: "Tony Robbins"
  },
  {
    body: "A prudent question is one half of wisdom.",
    author: "Francis Bacon"
  },
  {
    body: "Knowing is not enough; we must apply!",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body: "Don't wait. The time will never be just right.",
    author: "Napoleon Hill"
  },
  {
    body:
      "Know how to listen, and you will profit even from those who talk badly.",
    author: "Plutarch"
  },
  {
    body: "Mountains cannot be surmounted except by winding paths.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "You can be what you want to be. You have the power within and we will help you always.",
    author: "Byron Pulsifer"
  },
  {
    body: "If you surrender to the wind, you can ride it.",
    author: "Toni Morrison"
  },
  {
    body: "All know the way; few actually walk it.",
    author: "Bodhidharma"
  },
  {
    body:
      "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
    author: "Tryon Edwards"
  },
  {
    body: "Those who are free of resentful thoughts surely find peace.",
    author: "Buddha"
  },
  {
    body: "No is easier to do. Yes is easier to say.",
    author: "Jason Fried"
  },
  {
    body:
      "What lies behind us and what lies before us are small matters compared to what lies within us.",
    author: "Oliver Holmes"
  },
  {
    body:
      "People are not lazy. They simply have impotent goals � that is, goals that do not inspire them.",
    author: "Tony Robbins"
  },
  {
    body:
      "Don't miss all the beautiful colors of the rainbow looking for that pot of gold.",
    author: ""
  },
  {
    body:
      "Truth, and goodness, and beauty are but different faces of the same all.",
    author: "Ralph Emerson"
  },
  {
    body:
      "Forgiveness does not change the past, but it does enlarge the future.",
    author: "Paul Boese"
  },
  {
    body:
      "If one way be better than another, that you may be sure is natures way.",
    author: "Aristotle"
  },
  {
    body:
      "To know your purpose is to live a life of direction, and in that direction is found peace and tranquillity.",
    author: "Byron Pulsifer"
  },
  {
    body: "A beautiful thing is never perfect.",
    author: ""
  },
  {
    body: "Keep your eyes on the stars and your feet on the ground.",
    author: "Theodore Roosevelt"
  },
  {
    body:
      "You are never given a wish without also being given the power to make it come true. You may have to work for it, however.",
    author: "Richard Bach"
  },
  {
    body: "From error to error one discovers the entire truth.",
    author: "Sigmund Freud"
  },
  {
    body:
      "In order to live free and happily you must sacrifice boredom. It is not always an easy sacrifice.",
    author: "Richard Bach"
  },
  {
    body:
      "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.",
    author: "Confucius"
  },
  {
    body:
      "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
    author: "Confucius"
  },
  {
    body: "I believe that every person is born with talent.",
    author: "Maya Angelou"
  },
  {
    body: "Doing nothing is better than being busy doing nothing.",
    author: "Lao Tzu"
  },
  {
    body:
      "To be thoughtful and kind only takes a few seconds compared to the timeless hurt caused by one rude gesture.",
    author: "Byron Pulsifer"
  },
  {
    body:
      "Make the best use of what is in your power, and take the rest as it happens.",
    author: "Epictetus"
  },
  {
    body:
      "The right way is not always the popular and easy way. Standing for right when it is unpopular is a true test of moral character.",
    author: "Margaret Smith"
  },
  {
    body: "To be wronged is nothing unless you continue to remember it.",
    author: "Confucius"
  },
  {
    body:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin Roosevelt"
  },
  {
    body:
      "The future is completely open, and we are writing it moment to moment.",
    author: "Pema Chodron"
  },
  {
    body:
      "More often than not, anger is actually an indication of weakness rather than of strength.",
    author: "Dalai Lama"
  },
  {
    body:
      "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.",
    author: "Julie Morgenstern"
  },
  {
    body: "Victory belongs to the most persevering.",
    author: "Napoleon Bonaparte"
  },
  {
    body:
      "They say that time changes things, but you actually have to change them yourself.",
    author: "Andy Warhol"
  },
  {
    body:
      "He who deliberates fully before taking a step will spend his entire life on one leg.",
    author: "Chinese proverb"
  },
  {
    body: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "Everything that irritates us about others can lead us to an understanding about ourselves.",
    author: "Carl Jung"
  },
  {
    body:
      "Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind.",
    author: "Paavo Nurmi"
  },
  {
    body:
      "It isn't what happens to us that causes us to suffer; it's what we say to ourselves about what happens.",
    author: "Pema Chodron"
  },
  {
    body: "Absence makes the heart grow fonder.",
    author: "Haynes Bayly"
  },
  {
    body: "We must become the change we want to see.",
    author: "Mahatma Gandhi"
  },
  {
    body:
      "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
    author: "J. Willard Marriott"
  },
  {
    body:
      "All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise.",
    author: "Anne Bronte"
  },
  {
    body:
      "Enjoy the little things, for one day you may look back and realize they were the big things.",
    author: "Robert Brault"
  },
  {
    body:
      "True happiness means forging a strong spirit that is undefeated, no matter how trying our circumstances.",
    author: "Daisaku Ikeda"
  },
  {
    body:
      "We are the leaves of one branch, the drops of one sea, the flowers of one garden.",
    author: "Jean Lacordaire"
  },
  {
    body: "Experience is simply the name we give our mistakes.",
    author: "Oscar Wilde"
  },
  {
    body:
      "What you are is what you have been. What you�ll be is what you do now.",
    author: "Buddha"
  },
  {
    body: "Watch the little things; a small leak will sink a great ship.",
    author: "Benjamin Franklin"
  },
  {
    body: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster"
  },
  {
    body: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  },
  {
    body:
      "Being right is highly overrated. Even a stopped clock is right twice a day.",
    author: ""
  },
  {
    body:
      "We know from science that nothing in the universe exists as an isolated or independent entity.",
    author: "Margaret Wheatley"
  },
  {
    body:
      "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity",
    author: "Louis Pasteur"
  },
  {
    body:
      "Ideals are an imaginative understanding of that which is desirable in that which is possible.",
    author: "Walter Lippmann"
  },
  {
    body:
      "All achievements, all earned riches, have their beginning in an idea.",
    author: "Napoleon Hill"
  },
  {
    body:
      "The greatest way to live with honour in this world is to be what we pretend to be.",
    author: "Socrates"
  },
  {
    body:
      "I believe that we are fundamentally the same and have the same basic potential.",
    author: "Dalai Lama"
  },
  {
    body: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon"
  },
  {
    body: "Peace begins with a smile.",
    author: "Mother Teresa"
  },
  {
    body:
      "I have always thought the actions of men the best interpreters of their thoughts.",
    author: "John Locke"
  },
  {
    body:
      "Life a culmination of the past, an awareness of the present, an indication of the future beyond knowledge, the quality that gives a touch of divinity to matter.",
    author: "Charles A. Lindbergh"
  },
  {
    body:
      "Here is one quality that one must possess to win, and that is definiteness of purpose, the knowledge of what one wants, and a burning desire to possess it.",
    author: "Napoleon Hill"
  },
  {
    body: "Kindness is the golden chain by which society is bound together.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    body:
      "In the long run we get no more than we have been willing to risk giving.",
    author: "Sheldon Kopp"
  },
  {
    body: "We are Divine enough to ask and we are important enough to receive.",
    author: "Wayne Dyer"
  },
  {
    body:
      "All the world is a stage, And all the men and women merely players.They have their exits and entrances; Each man in his time plays many parts.",
    author: "William Shakespeare"
  },
  {
    body:
      "Three things cannot be long hidden: the sun, the moon, and the truth.",
    author: "Buddha"
  },
  {
    body:
      "I am not afraid of tomorrow, for I have seen yesterday and I love today.",
    author: "William White"
  },
  {
    body:
      "You do not become good by trying to be good, but by finding the goodness that is already within you.",
    author: "Eckhart Tolle"
  },
  {
    body: "When you lose, don't lose the lesson.",
    author: ""
  },
  {
    body: "Worry gives a small thing a big shadow.",
    author: ""
  },
  {
    body:
      "Successful people ask better questions, and as a result, they get better answers.",
    author: "Tony Robbins"
  },
  {
    body:
      "A man of ability and the desire to accomplish something can do anything.",
    author: "Donald Kircher"
  },
  {
    body: "My reputation grows with every failure.",
    author: "George Shaw"
  },
  {
    body: "A good plan today is better than a perfect plan tomorrow.",
    author: ""
  },
  {
    body: "The awareness of our own strength makes us modest.",
    author: "Paul Cezanne"
  },
  {
    body:
      "By letting it go it all gets done. The world is won by those who let it go. But when you try and try. The world is beyond the winning.",
    author: "Lao Tzu"
  },
  {
    body: "A good rest is half the work.",
    author: ""
  },
  {
    body:
      "He who conquers others is strong; He who conquers himself is mighty.",
    author: "Lao Tzu"
  },
  {
    body: "Patience is the companion of wisdom.",
    author: "Saint Augustine"
  },
  {
    body:
      "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.",
    author: "Julie Morgenstern"
  },
  {
    body:
      "You do not become good by trying to be good, but by finding the goodness that is already within you.",
    author: "Eckhart Tolle"
  },
  {
    body:
      "I think somehow we learn who we really are and then live with that decision.",
    author: "Eleanor Roosevelt"
  },
  {
    body:
      "A man may fulfil the object of his existence by asking a question he cannot answer, and attempting a task he cannot achieve.",
    author: "Oliver Holmes"
  },
  {
    body:
      "Every man takes the limits of his own field of vision for the limits of the world.",
    author: "Arthur Schopenhauer"
  },
  {
    body:
      "Count your joys instead of your woes. Count your friends instead of your foes.",
    author: ""
  },
  {
    body:
      "If you break your neck, if you have nothing to eat, if your house is on fire, then you got a problem. Everything else is inconvenience.",
    author: "Robert Fulghum"
  },
  {
    body: "It is not in the stars to hold our destiny but in ourselves.",
    author: "William Shakespeare"
  },
  {
    body:
      "Take no thought of who is right or wrong or who is better than. Be not for or against.",
    author: "Bruce Lee"
  },
  {
    body: "Weve got to have a dream if we are going to make a dream come true.",
    author: "Walt Disney"
  },
  {
    body:
      "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.",
    author: "Catherine Pulsifer"
  },
  {
    body: "Follow your instincts. That is where true wisdom manifests itself.",
    author: "Oprah Winfrey"
  },
  {
    body:
      "A man should look for what is, and not for what he thinks should be.",
    author: "Albert Einstein"
  },
  {
    body: "Those that know, do. Those that understand, teach.",
    author: "Aristotle"
  },
  {
    body: "To be upset over what you don't have is to waste what you do have.",
    author: "Ken S. Keyes"
  },
  {
    body: "When in doubt, tell the truth.",
    author: "Mark Twain"
  },
  {
    body: "Think how hard physics would be if particles could think.",
    author: "Murray Gell-Mann"
  },
  {
    body:
      "You are important enough to ask and you are blessed enough to receive back.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Without this playing with fantasy no creative work has ever yet come to birth. The debt we owe to the play of the imagination is incalculable.",
    author: "Carl Jung"
  },
  {
    body: "They can do all because they think they can.",
    author: "Virgil"
  },
  {
    body:
      "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
    author: "Buddha"
  },
  {
    body:
      "We could never learn to be brave and patient if there were only joy in the world.",
    author: "Helen Keller"
  },
  {
    body:
      "Compassion and happiness are not a sign of weakness but a sign of strength.",
    author: "Dalai Lama"
  },
  {
    body: "I believe that every person is born with talent.",
    author: "Maya Angelou"
  },
  {
    body:
      "Maxim for life: You get treated in life the way you teach people to treat you.",
    author: "Wayne Dyer"
  },
  {
    body:
      "Using the power of decision gives you the capacity to get past any excuse to change any and every part of your life in an instant.",
    author: "Tony Robbins"
  },
  {
    body:
      "An invincible determination can accomplish almost anything and in this lies the great distinction between great men and little men.",
    author: "Thomas Fuller"
  },
  {
    body: "There are people who have money and people who are rich.",
    author: "Coco Chanel"
  },
  {
    body: "The more you know yourself, the more you forgive yourself.",
    author: "Confucius"
  },
  {
    body:
      "The art of progress is to preserve order amid change, and to preserve change amid order.",
    author: "Alfred Whitehead"
  },
  {
    body:
      "Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has.",
    author: "Margaret Mead"
  },
  {
    body: "Kind words will unlock an iron door.",
    author: "Turkish proverb"
  },
  {
    body:
      "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
    author: "Etty Hillesum"
  },
  {
    body:
      "To get the full value of joy you must have someone to divide it with.",
    author: "Mark Twain"
  },
  {
    body:
      "To make no mistakes is not in the power of man; but from their errors and mistakes the wise and good learn wisdom for the future.",
    author: "Plutarch"
  },
  {
    body:
      "If you accept the expectations of others, especially negative ones, then you never will change the outcome.",
    author: "Michael Jordan"
  },
  {
    body:
      "Flow with whatever is happening and let your mind be free. Stay centred by accepting whatever you are doing. This is the ultimate.",
    author: "Chuang Tzu"
  },
  {
    body:
      "If you want things to be different, perhaps the answer is to become different yourself.",
    author: "Norman Peale"
  },
  {
    body:
      "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    author: "Jimmy Dean"
  },
  {
    body:
      "The happiness that is genuinely satisfying is accompanied by the fullest exercise of our faculties and the fullest realization of the world in which we live.",
    author: "Bertrand Russell"
  },
  {
    body:
      "Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength.",
    author: "Hasidic saying"
  },
  {
    body:
      "We have committed the Golden Rule to memory; let us now commit it to life.",
    author: "Edwin Markham"
  },
  {
    body: "Where there is great love, there are always miracles.",
    author: "Willa Cather"
  },
  {
    body:
      "Let go of your attachment to being right, and suddenly your mind is more open. You're able to benefit from the unique viewpoints of others, without being crippled by your own judgement.",
    author: "Ralph Marston"
  },
  {
    body: "To see things in the seed, that is genius.",
    author: "Lao Tzu"
  },
  {
    body: "We must become the change we want to see.",
    author: "Mahatma Gandhi"
  },
  {
    body:
      "Life a culmination of the past, an awareness of the present, an indication of the future beyond knowledge, the quality that gives a touch of divinity to matter.",
    author: "Charles A. Lindbergh"
  },
  {
    body: "I have often regretted my speech, never my silence.",
    author: "Publilius Syrus"
  },
  {
    body:
      "Your worst enemy cannot harm you as much as your own unguarded thoughts.",
    author: "Buddha"
  },
  {
    body: "If I know what love is, it is because of you.",
    author: "Hermann Hesse"
  },
  {
    body:
      "All children are artists. The problem is how to remain an artist once he grows up.",
    author: "Pablo Picasso"
  },
  {
    body:
      "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience.",
    author: "Byron Pulsifer"
  },
  {
    body: "If you have knowledge, let others light their candles in it.",
    author: "Margaret Fuller"
  },
  {
    body: "What you fear is that which requires action to overcome.",
    author: "Byron Pulsifer"
  },
  {
    body: "I will prepare and some day my chance will come.",
    author: "Abraham Lincoln"
  },
  {
    body:
      "Life's challenges are not supposed to paralyse you, they're supposed to help you discover who you are.",
    author: "Bernice Reagon"
  },
  {
    body: "Think as a wise man but communicate in the language of the people.",
    author: "William Yeats"
  },
  {
    body:
      "Kind words can be short and easy to speak, but their echoes are truly endless.",
    author: "Mother Teresa"
  },
  {
    body:
      "No valid plans for the future can be made by those who have no capacity for living now.",
    author: "Alan Watts"
  },
  {
    body: "Imagination rules the world.",
    author: "Napoleon Bonaparte"
  },
  {
    body:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas Edison"
  },
  {
    body:
      "Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.",
    author: "Arthur Rubinstein"
  },
  {
    body: "Excellence is to do a common thing in an uncommon way.",
    author: "Booker Washington"
  },
  {
    body: "Be kind whenever possible. It is always possible.",
    author: "Dalai Lama"
  },
  {
    body:
      "The true way to render ourselves happy is to love our work and find in it our pleasure.",
    author: "Francoise de Motteville"
  },
  {
    body: "What we see depends mainly on what we look for.",
    author: "John Lubbock"
  },
  {
    body:
      "He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye.",
    author: "Buddha"
  },
  {
    body: "Sadness flies away on the wings of time.",
    author: "Jean de la Fontaine"
  },
  {
    body:
      "The only Zen you find on the tops of mountains is the Zen you bring up there.",
    author: "Robert Pirsig"
  },
  {
    body:
      "You may be deceived if you trust too much, but you will live in torment if you don't trust enough.",
    author: "Frank Crane"
  },
  {
    body:
      "It is not enough to have a good mind; the main thing is to use it well.",
    author: "Rene Descartes"
  },
  {
    body:
      "The winds and waves are always on the side of the ablest navigators.",
    author: "Edward Gibbon"
  },
  {
    body: "Victory belongs to the most persevering.",
    author: "Napoleon Bonaparte"
  },
  {
    body: "I believe that every person is born with talent.",
    author: "Maya Angelou"
  },
  {
    body:
      "It is the quality of our work which will please God, not the quantity.",
    author: "Mahatma Gandhi"
  },
  {
    body:
      "If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagines, he will meet with a success unexpected in common hours.",
    author: "Henry David Thoreau"
  },
  {
    body:
      "Sometimes the cards we are dealt are not always fair. However you must keep smiling and moving on.",
    author: "Tom Jackson"
  }
];

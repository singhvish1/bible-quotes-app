export const MOODS = [
  { id: 'anxious', name: 'Anxious', emoji: '😰', color: '#ff9800' },
  { id: 'sad', name: 'Sad', emoji: '😢', color: '#2196f3' },
  { id: 'grateful', name: 'Grateful', emoji: '🙏', color: '#4caf50' },
  { id: 'seekingPeace', name: 'Seeking Peace', emoji: '🕊️', color: '#00bcd4' },
  { id: 'needingStrength', name: 'Needing Strength', emoji: '💪', color: '#9c27b0' },
  { id: 'joyful', name: 'Joyful', emoji: '😊', color: '#ffeb3b' },
  { id: 'seekingGuidance', name: 'Seeking Guidance', emoji: '🧭', color: '#3f51b5' },
  { id: 'fearful', name: 'Fearful', emoji: '😨', color: '#f44336' },
  { id: 'hopeful', name: 'Hopeful', emoji: '🌟', color: '#00e5ff' },
  { id: 'lonely', name: 'Lonely', emoji: '🤍', color: '#9e9e9e' },
  { id: 'overwhelmed', name: 'Overwhelmed', emoji: '😓', color: '#795548' },
  { id: 'doubtful', name: 'Doubtful', emoji: '🤔', color: '#009688' }
];

export const CATEGORIES = [
  { id: 'faith', name: 'Faith', icon: '✝️' },
  { id: 'love', name: 'Love', icon: '❤️' },
  { id: 'hope', name: 'Hope', icon: '✨' },
  { id: 'peace', name: 'Peace', icon: '☮️' },
  { id: 'strength', name: 'Strength', icon: '💪' },
  { id: 'comfort', name: 'Comfort', icon: '🤗' },
  { id: 'wisdom', name: 'Wisdom', icon: '🦉' },
  { id: 'guidance', name: 'Guidance', icon: '🧭' },
  { id: 'gratitude', name: 'Gratitude', icon: '🙏' },
  { id: 'courage', name: 'Courage', icon: '🦁' },
  { id: 'forgiveness', name: 'Forgiveness', icon: '🕊️' },
  { id: 'protection', name: 'Protection', icon: '🛡️' },
  { id: 'joy', name: 'Joy', icon: '😊' },
  { id: 'patience', name: 'Patience', icon: '⏳' },
  { id: 'perseverance', name: 'Perseverance', icon: '🏔️' }
];

export const QUOTES = [
  {
    id: 1,
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
    reference: "Philippians 4:6-7",
    book: "Philippians",
    chapter: 4,
    verse: "6-7",
    categories: ['peace', 'comfort'],
    moods: ['anxious', 'seekingPeace', 'overwhelmed']
  },
  {
    id: 2,
    text: "Cast all your anxiety on him because he cares for you.",
    reference: "1 Peter 5:7",
    book: "1 Peter",
    chapter: 5,
    verse: "7",
    categories: ['comfort', 'peace'],
    moods: ['anxious', 'overwhelmed', 'seekingPeace']
  },
  {
    id: 3,
    text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
    reference: "John 14:27",
    book: "John",
    chapter: 14,
    verse: "27",
    categories: ['peace', 'comfort'],
    moods: ['anxious', 'fearful', 'seekingPeace']
  },
  {
    id: 4,
    text: "When anxiety was great within me, your consolation brought me joy.",
    reference: "Psalm 94:19",
    book: "Psalm",
    chapter: 94,
    verse: "19",
    categories: ['comfort', 'joy', 'peace'],
    moods: ['anxious', 'overwhelmed']
  },
  {
    id: 5,
    text: "For God has not given us a spirit of fear, but of power and of love and of a sound mind.",
    reference: "2 Timothy 1:7",
    book: "2 Timothy",
    chapter: 1,
    verse: "7",
    categories: ['courage', 'strength'],
    moods: ['fearful', 'needingStrength', 'doubtful']
  },
  {
    id: 6,
    text: "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?",
    reference: "Psalm 27:1",
    book: "Psalm",
    chapter: 27,
    verse: "1",
    categories: ['courage', 'strength', 'protection'],
    moods: ['fearful', 'needingStrength']
  },
  {
    id: 7,
    text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    reference: "Isaiah 41:10",
    book: "Isaiah",
    chapter: 41,
    verse: "10",
    categories: ['courage', 'strength', 'comfort'],
    moods: ['fearful', 'anxious', 'needingStrength']
  },
  {
    id: 8,
    text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    reference: "Joshua 1:9",
    book: "Joshua",
    chapter: 1,
    verse: "9",
    categories: ['courage', 'strength'],
    moods: ['fearful', 'needingStrength', 'overwhelmed']
  },
  {
    id: 9,
    text: "I can do all this through him who gives me strength.",
    reference: "Philippians 4:13",
    book: "Philippians",
    chapter: 4,
    verse: "13",
    categories: ['strength', 'perseverance'],
    moods: ['needingStrength', 'overwhelmed']
  },
  {
    id: 10,
    text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    reference: "Isaiah 40:31",
    book: "Isaiah",
    chapter: 40,
    verse: "31",
    categories: ['strength', 'hope', 'perseverance'],
    moods: ['needingStrength', 'hopeful', 'overwhelmed']
  },
  {
    id: 11,
    text: "The Lord is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him.",
    reference: "Psalm 28:7",
    book: "Psalm",
    chapter: 28,
    verse: "7",
    categories: ['strength', 'joy', 'faith'],
    moods: ['needingStrength', 'joyful', 'grateful']
  },
  {
    id: 12,
    text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    reference: "Psalm 34:18",
    book: "Psalm",
    chapter: 34,
    verse: "18",
    categories: ['comfort', 'hope'],
    moods: ['sad', 'lonely', 'overwhelmed']
  },
  {
    id: 13,
    text: "He heals the brokenhearted and binds up their wounds.",
    reference: "Psalm 147:3",
    book: "Psalm",
    chapter: 147,
    verse: "3",
    categories: ['comfort', 'hope'],
    moods: ['sad', 'lonely']
  },
  {
    id: 14,
    text: "Weeping may stay for the night, but rejoicing comes in the morning.",
    reference: "Psalm 30:5",
    book: "Psalm",
    chapter: 30,
    verse: "5",
    categories: ['hope', 'comfort'],
    moods: ['sad', 'hopeful']
  },
  {
    id: 15,
    text: "Come to me, all you who are weary and burdened, and I will give you rest.",
    reference: "Matthew 11:28",
    book: "Matthew",
    chapter: 11,
    verse: "28",
    categories: ['comfort', 'peace'],
    moods: ['sad', 'overwhelmed', 'seekingPeace']
  },
  {
    id: 16,
    text: "Blessed are those who mourn, for they will be comforted.",
    reference: "Matthew 5:4",
    book: "Matthew",
    chapter: 5,
    verse: "4",
    categories: ['comfort', 'hope'],
    moods: ['sad']
  },
  {
    id: 17,
    text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reference: "Jeremiah 29:11",
    book: "Jeremiah",
    chapter: 29,
    verse: "11",
    categories: ['hope', 'faith'],
    moods: ['hopeful', 'seekingGuidance', 'doubtful']
  },
  {
    id: 18,
    text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
    reference: "Romans 15:13",
    book: "Romans",
    chapter: 15,
    verse: "13",
    categories: ['hope', 'joy', 'peace'],
    moods: ['hopeful', 'joyful', 'seekingPeace']
  },
  {
    id: 19,
    text: "Now faith is confidence in what we hope for and assurance about what we do not see.",
    reference: "Hebrews 11:1",
    book: "Hebrews",
    chapter: 11,
    verse: "1",
    categories: ['faith', 'hope'],
    moods: ['hopeful', 'doubtful']
  },
  {
    id: 20,
    text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    reference: "Romans 8:28",
    book: "Romans",
    chapter: 8,
    verse: "28",
    categories: ['hope', 'faith'],
    moods: ['hopeful', 'doubtful', 'overwhelmed']
  },
  {
    id: 21,
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16",
    book: "John",
    chapter: 3,
    verse: "16",
    categories: ['love', 'faith', 'hope'],
    moods: ['hopeful', 'grateful']
  },
  {
    id: 22,
    text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.",
    reference: "1 Corinthians 13:4-5",
    book: "1 Corinthians",
    chapter: 13,
    verse: "4-5",
    categories: ['love', 'patience'],
    moods: ['grateful', 'joyful']
  },
  {
    id: 23,
    text: "There is no fear in love. But perfect love drives out fear.",
    reference: "1 John 4:18",
    book: "1 John",
    chapter: 4,
    verse: "18",
    categories: ['love', 'courage'],
    moods: ['fearful', 'hopeful']
  },
  {
    id: 24,
    text: "Give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
    reference: "1 Thessalonians 5:18",
    book: "1 Thessalonians",
    chapter: 5,
    verse: "18",
    categories: ['gratitude'],
    moods: ['grateful', 'joyful']
  },
  {
    id: 25,
    text: "This is the day that the Lord has made; let us rejoice and be glad in it.",
    reference: "Psalm 118:24",
    book: "Psalm",
    chapter: 118,
    verse: "24",
    categories: ['joy', 'gratitude'],
    moods: ['joyful', 'grateful']
  },
  {
    id: 26,
    text: "Rejoice in the Lord always. I will say it again: Rejoice!",
    reference: "Philippians 4:4",
    book: "Philippians",
    chapter: 4,
    verse: "4",
    categories: ['joy'],
    moods: ['joyful', 'grateful']
  },
  {
    id: 27,
    text: "The joy of the Lord is your strength.",
    reference: "Nehemiah 8:10",
    book: "Nehemiah",
    chapter: 8,
    verse: "10",
    categories: ['joy', 'strength'],
    moods: ['joyful', 'needingStrength', 'grateful']
  },
  {
    id: 28,
    text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    reference: "Proverbs 3:5-6",
    book: "Proverbs",
    chapter: 3,
    verse: "5-6",
    categories: ['guidance', 'wisdom', 'faith'],
    moods: ['seekingGuidance', 'doubtful']
  },
  {
    id: 29,
    text: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.",
    reference: "James 1:5",
    book: "James",
    chapter: 1,
    verse: "5",
    categories: ['wisdom', 'guidance'],
    moods: ['seekingGuidance', 'doubtful']
  },
  {
    id: 30,
    text: "Your word is a lamp for my feet, a light on my path.",
    reference: "Psalm 119:105",
    book: "Psalm",
    chapter: 119,
    verse: "105",
    categories: ['guidance', 'wisdom'],
    moods: ['seekingGuidance']
  },
  {
    id: 31,
    text: "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.",
    reference: "Psalm 32:8",
    book: "Psalm",
    chapter: 32,
    verse: "8",
    categories: ['guidance', 'wisdom'],
    moods: ['seekingGuidance', 'hopeful']
  },
  {
    id: 32,
    text: "The Lord himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.",
    reference: "Deuteronomy 31:8",
    book: "Deuteronomy",
    chapter: 31,
    verse: "8",
    categories: ['comfort', 'courage'],
    moods: ['lonely', 'fearful']
  },
  {
    id: 33,
    text: "God is our refuge and strength, an ever-present help in trouble.",
    reference: "Psalm 46:1",
    book: "Psalm",
    chapter: 46,
    verse: "1",
    categories: ['comfort', 'strength', 'protection'],
    moods: ['lonely', 'fearful', 'needingStrength']
  },
  {
    id: 34,
    text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
    reference: "Psalm 23:4",
    book: "Psalm",
    chapter: 23,
    verse: "4",
    categories: ['comfort', 'courage', 'protection'],
    moods: ['lonely', 'fearful', 'sad']
  },
  {
    id: 35,
    text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.",
    reference: "1 John 1:9",
    book: "1 John",
    chapter: 1,
    verse: "9",
    categories: ['forgiveness', 'faith'],
    moods: ['hopeful', 'grateful']
  },
  {
    id: 36,
    text: "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.",
    reference: "Colossians 3:13",
    book: "Colossians",
    chapter: 3,
    verse: "13",
    categories: ['forgiveness', 'love'],
    moods: ['grateful']
  },
  {
    id: 37,
    text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.",
    reference: "Proverbs 18:10",
    book: "Proverbs",
    chapter: 18,
    verse: "10",
    categories: ['protection', 'faith'],
    moods: ['fearful', 'seekingPeace']
  },
  {
    id: 38,
    text: "He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart.",
    reference: "Psalm 91:4",
    book: "Psalm",
    chapter: 91,
    verse: "4",
    categories: ['protection', 'comfort'],
    moods: ['fearful', 'anxious', 'seekingPeace']
  },
  {
    id: 39,
    text: "But if we hope for what we do not yet have, we wait for it patiently.",
    reference: "Romans 8:25",
    book: "Romans",
    chapter: 8,
    verse: "25",
    categories: ['patience', 'hope'],
    moods: ['hopeful', 'overwhelmed']
  },
  {
    id: 40,
    text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
    reference: "Galatians 6:9",
    book: "Galatians",
    chapter: 6,
    verse: "9",
    categories: ['perseverance', 'patience', 'hope'],
    moods: ['overwhelmed', 'needingStrength']
  },
  {
    id: 41,
    text: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.",
    reference: "James 1:2-3",
    book: "James",
    chapter: 1,
    verse: "2-3",
    categories: ['perseverance', 'faith', 'joy'],
    moods: ['overwhelmed', 'hopeful']
  },
  {
    id: 42,
    text: "Be still, and know that I am God.",
    reference: "Psalm 46:10",
    book: "Psalm",
    chapter: 46,
    verse: "10",
    categories: ['peace', 'faith'],
    moods: ['seekingPeace', 'anxious', 'overwhelmed']
  },
  {
    id: 43,
    text: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace.",
    reference: "Numbers 6:24-26",
    book: "Numbers",
    chapter: 6,
    verse: "24-26",
    categories: ['peace', 'protection'],
    moods: ['seekingPeace', 'grateful']
  },
  {
    id: 44,
    text: "Do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
    reference: "Matthew 6:34",
    book: "Matthew",
    chapter: 6,
    verse: "34",
    categories: ['peace', 'wisdom'],
    moods: ['anxious', 'overwhelmed']
  },
  {
    id: 45,
    text: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
    reference: "Psalm 23:1-3",
    book: "Psalm",
    chapter: 23,
    verse: "1-3",
    categories: ['peace', 'comfort', 'guidance'],
    moods: ['seekingPeace', 'grateful', 'seekingGuidance']
  }
];

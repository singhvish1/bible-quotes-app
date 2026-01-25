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
  },
  {
    id: 46,
    text: "The Lord is good, a refuge in times of trouble. He cares for those who trust in him.",
    reference: "Nahum 1:7",
    book: "Nahum",
    chapter: 1,
    verse: "7",
    categories: ['comfort', 'protection', 'faith'],
    moods: ['overwhelmed', 'anxious', 'fearful']
  },
  {
    id: 47,
    text: "Come near to God and he will come near to you.",
    reference: "James 4:8",
    book: "James",
    chapter: 4,
    verse: "8",
    categories: ['faith', 'guidance'],
    moods: ['seekingGuidance', 'lonely', 'doubtful']
  },
  {
    id: 48,
    text: "The name of the Lord is a strong tower; the righteous run to it and are safe.",
    reference: "Proverbs 18:10",
    book: "Proverbs",
    chapter: 18,
    verse: "10",
    categories: ['protection', 'strength'],
    moods: ['fearful', 'anxious', 'needingStrength']
  },
  {
    id: 49,
    text: "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.",
    reference: "John 16:33",
    book: "John",
    chapter: 16,
    verse: "33",
    categories: ['peace', 'courage', 'hope'],
    moods: ['overwhelmed', 'fearful', 'hopeful']
  },
  {
    id: 50,
    text: "The Lord will fight for you; you need only to be still.",
    reference: "Exodus 14:14",
    book: "Exodus",
    chapter: 14,
    verse: "14",
    categories: ['peace', 'protection', 'faith'],
    moods: ['overwhelmed', 'anxious', 'seekingPeace']
  },
  {
    id: 51,
    text: "Do not let your hearts be troubled. You believe in God; believe also in me.",
    reference: "John 14:1",
    book: "John",
    chapter: 14,
    verse: "1",
    categories: ['peace', 'faith', 'comfort'],
    moods: ['anxious', 'fearful', 'doubtful']
  },
  {
    id: 52,
    text: "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.",
    reference: "Zephaniah 3:17",
    book: "Zephaniah",
    chapter: 3,
    verse: "17",
    categories: ['love', 'comfort', 'joy'],
    moods: ['lonely', 'sad', 'grateful']
  },
  {
    id: 53,
    text: "Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.",
    reference: "Colossians 3:15",
    book: "Colossians",
    chapter: 3,
    verse: "15",
    categories: ['peace', 'gratitude'],
    moods: ['seekingPeace', 'grateful', 'anxious']
  },
  {
    id: 54,
    text: "Those who know your name trust in you, for you, Lord, have never forsaken those who seek you.",
    reference: "Psalm 9:10",
    book: "Psalm",
    chapter: 9,
    verse: "10",
    categories: ['faith', 'hope', 'comfort'],
    moods: ['lonely', 'doubtful', 'seekingGuidance']
  },
  {
    id: 55,
    text: "The Lord is faithful to all his promises and loving toward all he has made.",
    reference: "Psalm 145:13",
    book: "Psalm",
    chapter: 145,
    verse: "13",
    categories: ['faith', 'love', 'hope'],
    moods: ['doubtful', 'hopeful', 'grateful']
  },
  {
    id: 56,
    text: "He gives strength to the weary and increases the power of the weak.",
    reference: "Isaiah 40:29",
    book: "Isaiah",
    chapter: 40,
    verse: "29",
    categories: ['strength', 'comfort'],
    moods: ['needingStrength', 'overwhelmed', 'sad']
  },
  {
    id: 57,
    text: "The Lord is gracious and compassionate, slow to anger and rich in love.",
    reference: "Psalm 145:8",
    book: "Psalm",
    chapter: 145,
    verse: "8",
    categories: ['love', 'forgiveness', 'comfort'],
    moods: ['grateful', 'hopeful', 'sad']
  },
  {
    id: 58,
    text: "Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    reference: "Joshua 1:9",
    book: "Joshua",
    chapter: 1,
    verse: "9",
    categories: ['courage', 'protection'],
    moods: ['fearful', 'anxious', 'needingStrength']
  },
  {
    id: 59,
    text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
    reference: "Isaiah 26:3",
    book: "Isaiah",
    chapter: 26,
    verse: "3",
    categories: ['peace', 'faith'],
    moods: ['seekingPeace', 'anxious', 'overwhelmed']
  },
  {
    id: 60,
    text: "The Lord is near to all who call on him, to all who call on him in truth.",
    reference: "Psalm 145:18",
    book: "Psalm",
    chapter: 145,
    verse: "18",
    categories: ['comfort', 'faith'],
    moods: ['lonely', 'seekingGuidance', 'sad']
  },
  {
    id: 61,
    text: "Wait for the Lord; be strong and take heart and wait for the Lord.",
    reference: "Psalm 27:14",
    book: "Psalm",
    chapter: 27,
    verse: "14",
    categories: ['patience', 'courage', 'hope'],
    moods: ['overwhelmed', 'hopeful', 'anxious']
  },
  {
    id: 62,
    text: "The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge.",
    reference: "Psalm 18:2",
    book: "Psalm",
    chapter: 18,
    verse: "2",
    categories: ['protection', 'strength', 'faith'],
    moods: ['fearful', 'needingStrength', 'overwhelmed']
  },
  {
    id: 63,
    text: "Delight yourself in the Lord, and he will give you the desires of your heart.",
    reference: "Psalm 37:4",
    book: "Psalm",
    chapter: 37,
    verse: "4",
    categories: ['joy', 'faith', 'hope'],
    moods: ['joyful', 'grateful', 'hopeful']
  },
  {
    id: 64,
    text: "The Lord makes firm the steps of the one who delights in him; though he may stumble, he will not fall, for the Lord upholds him with his hand.",
    reference: "Psalm 37:23-24",
    book: "Psalm",
    chapter: 37,
    verse: "23-24",
    categories: ['guidance', 'protection', 'faith'],
    moods: ['seekingGuidance', 'doubtful', 'hopeful']
  },
  {
    id: 65,
    text: "The Lord is compassionate and gracious, slow to anger, abounding in love.",
    reference: "Psalm 103:8",
    book: "Psalm",
    chapter: 103,
    verse: "8",
    categories: ['love', 'forgiveness', 'comfort'],
    moods: ['grateful', 'hopeful', 'joyful']
  },
  {
    id: 66,
    text: "As far as the east is from the west, so far has he removed our transgressions from us.",
    reference: "Psalm 103:12",
    book: "Psalm",
    chapter: 103,
    verse: "12",
    categories: ['forgiveness', 'love', 'hope'],
    moods: ['grateful', 'hopeful', 'joyful']
  },
  {
    id: 67,
    text: "The Lord is my strength and my song; he has given me victory.",
    reference: "Exodus 15:2",
    book: "Exodus",
    chapter: 15,
    verse: "2",
    categories: ['strength', 'joy', 'gratitude'],
    moods: ['needingStrength', 'joyful', 'grateful']
  },
  {
    id: 68,
    text: "In all your ways submit to him, and he will make your paths straight.",
    reference: "Proverbs 3:6",
    book: "Proverbs",
    chapter: 3,
    verse: "6",
    categories: ['guidance', 'faith', 'wisdom'],
    moods: ['seekingGuidance', 'doubtful', 'overwhelmed']
  },
  {
    id: 69,
    text: "Do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes?",
    reference: "Matthew 6:25",
    book: "Matthew",
    chapter: 6,
    verse: "25",
    categories: ['peace', 'faith', 'wisdom'],
    moods: ['anxious', 'overwhelmed', 'seekingPeace']
  },
  {
    id: 70,
    text: "Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they?",
    reference: "Matthew 6:26",
    book: "Matthew",
    chapter: 6,
    verse: "26",
    categories: ['faith', 'comfort', 'hope'],
    moods: ['anxious', 'doubtful', 'grateful']
  },
  {
    id: 71,
    text: "Commit your way to the Lord; trust in him and he will do this.",
    reference: "Psalm 37:5",
    book: "Psalm",
    chapter: 37,
    verse: "5",
    categories: ['faith', 'guidance', 'hope'],
    moods: ['seekingGuidance', 'overwhelmed', 'doubtful']
  },
  {
    id: 72,
    text: "The Lord will guide you always; he will satisfy your needs in a sun-scorched land and will strengthen your frame.",
    reference: "Isaiah 58:11",
    book: "Isaiah",
    chapter: 58,
    verse: "11",
    categories: ['guidance', 'comfort', 'strength'],
    moods: ['seekingGuidance', 'overwhelmed', 'needingStrength']
  },
  {
    id: 73,
    text: "He refreshes my soul. He guides me along the right paths for his name's sake.",
    reference: "Psalm 23:3",
    book: "Psalm",
    chapter: 23,
    verse: "3",
    categories: ['guidance', 'comfort', 'peace'],
    moods: ['seekingGuidance', 'overwhelmed', 'seekingPeace']
  },
  {
    id: 74,
    text: "The Lord is my helper; I will not be afraid. What can mere mortals do to me?",
    reference: "Hebrews 13:6",
    book: "Hebrews",
    chapter: 13,
    verse: "6",
    categories: ['courage', 'faith', 'protection'],
    moods: ['fearful', 'anxious', 'needingStrength']
  },
  {
    id: 75,
    text: "Though the mountains be shaken and the hills be removed, yet my unfailing love for you will not be shaken.",
    reference: "Isaiah 54:10",
    book: "Isaiah",
    chapter: 54,
    verse: "10",
    categories: ['love', 'hope', 'comfort'],
    moods: ['overwhelmed', 'fearful', 'hopeful']
  },
  {
    id: 76,
    text: "No weapon forged against you will prevail, and you will refute every tongue that accuses you.",
    reference: "Isaiah 54:17",
    book: "Isaiah",
    chapter: 54,
    verse: "17",
    categories: ['protection', 'courage', 'faith'],
    moods: ['fearful', 'overwhelmed', 'needingStrength']
  },
  {
    id: 77,
    text: "Be joyful in hope, patient in affliction, faithful in prayer.",
    reference: "Romans 12:12",
    book: "Romans",
    chapter: 12,
    verse: "12",
    categories: ['joy', 'patience', 'faith'],
    moods: ['hopeful', 'overwhelmed', 'grateful']
  },
  {
    id: 78,
    text: "The Lord your God is in your midst, a mighty one who will save; he will rejoice over you with gladness.",
    reference: "Zephaniah 3:17",
    book: "Zephaniah",
    chapter: 3,
    verse: "17",
    categories: ['love', 'joy', 'comfort'],
    moods: ['lonely', 'sad', 'joyful']
  },
  {
    id: 79,
    text: "Be strong and courageous. Do not be terrified; do not be discouraged.",
    reference: "Joshua 1:9",
    book: "Joshua",
    chapter: 1,
    verse: "9",
    categories: ['courage', 'strength'],
    moods: ['fearful', 'overwhelmed', 'needingStrength']
  },
  {
    id: 80,
    text: "Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you.",
    reference: "Isaiah 46:4",
    book: "Isaiah",
    chapter: 46,
    verse: "4",
    categories: ['comfort', 'love', 'protection'],
    moods: ['overwhelmed', 'lonely', 'grateful']
  },
  {
    id: 81,
    text: "The Lord is good to those whose hope is in him, to the one who seeks him.",
    reference: "Lamentations 3:25",
    book: "Lamentations",
    chapter: 3,
    verse: "25",
    categories: ['hope', 'faith', 'comfort'],
    moods: ['hopeful', 'seekingGuidance', 'doubtful']
  },
  {
    id: 82,
    text: "Because of the Lord's great love we are not consumed, for his compassions never fail.",
    reference: "Lamentations 3:22",
    book: "Lamentations",
    chapter: 3,
    verse: "22",
    categories: ['love', 'hope', 'comfort'],
    moods: ['overwhelmed', 'sad', 'grateful']
  },
  {
    id: 83,
    text: "They are new every morning; great is your faithfulness.",
    reference: "Lamentations 3:23",
    book: "Lamentations",
    chapter: 3,
    verse: "23",
    categories: ['hope', 'faith', 'gratitude'],
    moods: ['hopeful', 'grateful', 'joyful']
  },
  {
    id: 84,
    text: "The Lord is my portion; therefore I will wait for him.",
    reference: "Lamentations 3:24",
    book: "Lamentations",
    chapter: 3,
    verse: "24",
    categories: ['faith', 'patience', 'hope'],
    moods: ['seekingGuidance', 'hopeful', 'overwhelmed']
  },
  {
    id: 85,
    text: "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit.",
    reference: "John 15:5",
    book: "John",
    chapter: 15,
    verse: "5",
    categories: ['faith', 'guidance', 'hope'],
    moods: ['seekingGuidance', 'hopeful', 'doubtful']
  },
  {
    id: 86,
    text: "I have loved you with an everlasting love; I have drawn you with unfailing kindness.",
    reference: "Jeremiah 31:3",
    book: "Jeremiah",
    chapter: 31,
    verse: "3",
    categories: ['love', 'comfort', 'hope'],
    moods: ['lonely', 'sad', 'grateful']
  },
  {
    id: 87,
    text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
    reference: "2 Timothy 1:7",
    book: "2 Timothy",
    chapter: 1,
    verse: "7",
    categories: ['courage', 'strength', 'love'],
    moods: ['fearful', 'needingStrength', 'doubtful']
  },
  {
    id: 88,
    text: "The Lord is righteous in all his ways and faithful in all he does.",
    reference: "Psalm 145:17",
    book: "Psalm",
    chapter: 145,
    verse: "17",
    categories: ['faith', 'hope'],
    moods: ['doubtful', 'hopeful', 'grateful']
  },
  {
    id: 89,
    text: "Let us hold unswervingly to the hope we profess, for he who promised is faithful.",
    reference: "Hebrews 10:23",
    book: "Hebrews",
    chapter: 10,
    verse: "23",
    categories: ['hope', 'faith', 'perseverance'],
    moods: ['hopeful', 'doubtful', 'overwhelmed']
  },
  {
    id: 90,
    text: "Every good and perfect gift is from above, coming down from the Father of the heavenly lights.",
    reference: "James 1:17",
    book: "James",
    chapter: 1,
    verse: "17",
    categories: ['gratitude', 'faith', 'joy'],
    moods: ['grateful', 'joyful', 'hopeful']
  },
  {
    id: 91,
    text: "The Lord loves righteousness and justice; the earth is full of his unfailing love.",
    reference: "Psalm 33:5",
    book: "Psalm",
    chapter: 33,
    verse: "5",
    categories: ['love', 'faith', 'hope'],
    moods: ['grateful', 'hopeful', 'joyful']
  },
  {
    id: 92,
    text: "Praise the Lord, my soul, and forget not all his benefits.",
    reference: "Psalm 103:2",
    book: "Psalm",
    chapter: 103,
    verse: "2",
    categories: ['gratitude', 'joy'],
    moods: ['grateful', 'joyful', 'hopeful']
  },
  {
    id: 93,
    text: "Blessed is the one who perseveres under trial because, having stood the test, that person will receive the crown of life.",
    reference: "James 1:12",
    book: "James",
    chapter: 1,
    verse: "12",
    categories: ['perseverance', 'hope', 'courage'],
    moods: ['overwhelmed', 'needingStrength', 'hopeful']
  },
  {
    id: 94,
    text: "Call to me and I will answer you and tell you great and unsearchable things you do not know.",
    reference: "Jeremiah 33:3",
    book: "Jeremiah",
    chapter: 33,
    verse: "3",
    categories: ['guidance', 'faith', 'wisdom'],
    moods: ['seekingGuidance', 'doubtful', 'hopeful']
  },
  {
    id: 95,
    text: "In their hearts humans plan their course, but the Lord establishes their steps.",
    reference: "Proverbs 16:9",
    book: "Proverbs",
    chapter: 16,
    verse: "9",
    categories: ['guidance', 'wisdom', 'faith'],
    moods: ['seekingGuidance', 'overwhelmed', 'doubtful']
  },
  {
    id: 96,
    text: "The Lord is a refuge for the oppressed, a stronghold in times of trouble.",
    reference: "Psalm 9:9",
    book: "Psalm",
    chapter: 9,
    verse: "9",
    categories: ['protection', 'comfort', 'strength'],
    moods: ['overwhelmed', 'fearful', 'sad']
  },
  {
    id: 97,
    text: "Those who sow with tears will reap with songs of joy.",
    reference: "Psalm 126:5",
    book: "Psalm",
    chapter: 126,
    verse: "5",
    categories: ['hope', 'joy', 'perseverance'],
    moods: ['sad', 'hopeful', 'overwhelmed']
  },
  {
    id: 98,
    text: "He who goes out weeping, carrying seed to sow, will return with songs of joy, carrying sheaves with him.",
    reference: "Psalm 126:6",
    book: "Psalm",
    chapter: 126,
    verse: "6",
    categories: ['hope', 'joy', 'perseverance'],
    moods: ['sad', 'hopeful', 'joyful']
  },
  {
    id: 99,
    text: "The Lord will vindicate me; your love, Lord, endures forever—do not abandon the works of your hands.",
    reference: "Psalm 138:8",
    book: "Psalm",
    chapter: 138,
    verse: "8",
    categories: ['faith', 'love', 'hope'],
    moods: ['overwhelmed', 'lonely', 'hopeful']
  },
  {
    id: 100,
    text: "You are my hiding place; you will protect me from trouble and surround me with songs of deliverance.",
    reference: "Psalm 32:7",
    book: "Psalm",
    chapter: 32,
    verse: "7",
    categories: ['protection', 'comfort', 'joy'],
    moods: ['fearful', 'anxious', 'seekingPeace']
  }
];

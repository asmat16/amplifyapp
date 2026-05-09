export const FPS = 30;
export const COMPOSITION_WIDTH = 1080;
export const COMPOSITION_HEIGHT = 1920;
export const TRANSITION_DURATION_FRAMES = 20;

export type SceneConfig = {
  id: string;
  urduText: string;
  defaultDurationInSeconds: number;
  placeholderColor: string;
  imagePrompt: string;
};

export const SCENES: SceneConfig[] = [
  {
    id: "scene1",
    urduText:
      "یہ ہے اسپیڈو ری — ہمارے گاؤں کا سب سے بڑا ہیرو۔ لیکن کوئی اسے نہیں مانتا۔ آج بھی چائے والے نے اسے باہر نکال دیا۔",
    defaultDurationInSeconds: 8,
    placeholderColor: "#3d1f0a",
    imagePrompt:
      "Ultra realistic cinematic Pakistani village chai hotel interior, giant Spider-Man parody character Spidoo Rey (9 feet tall, huge muscular body, emotional innocent face, handmade cheap red and blue spider costume with visible stitching and worn fabric, old village slippers, dusty skin) sitting sadly with small tea cup, chai shop owner angrily shouting and pointing at him, other villagers laughing, buffalo visible nearby, warm amber dramatic lighting, dust particles in air, cinematic movie shot, highly detailed realism, 9:16 vertical format",
  },
  {
    id: "scene2",
    urduText:
      "بارش میں بھیگتا، اکیلا چلتا رہا اسپیڈو ری۔ گاؤں کے بچے اسے دیکھتے رہے — آنکھوں میں حیرت لیے۔",
    defaultDurationInSeconds: 8,
    placeholderColor: "#0d1a2e",
    imagePrompt:
      "Ultra realistic giant Spider-Man parody Spidoo Rey (9 feet tall, handmade red and blue spider costume with visible stitching, village slippers, dusty skin, sad emotional eyes) walking alone in dusty Pakistani village street during light rain, mud houses on both sides, realistic villagers watching from doorways, small child looking up at him emotionally, dramatic blue-grey cinematic lighting, realistic rain droplets, puddles reflecting light, emotional sad movie scene, 9:16 vertical format",
  },
  {
    id: "scene3",
    urduText:
      "اچانک چیخ اٹھی! ایک معصوم بچہ نالے میں گر رہا تھا — اسپیڈو ری بھاگا، دل کی پوری طاقت سے!",
    defaultDurationInSeconds: 9,
    placeholderColor: "#0a1a0a",
    imagePrompt:
      "Ultra realistic cinematic village flood scene, small child slipping and falling near dirty flooded drain in Pakistani village, villagers panicking and screaming with arms raised in horror, giant Spider-Man parody Spidoo Rey (9 feet tall, handmade spider costume) running heroically toward the child mid-stride, splashing through flood water, dramatic high-contrast rain and dark storm lighting, urgent low-angle action camera shot, suspenseful movie scene, emotional realistic faces, 9:16 vertical format",
  },
  {
    id: "scene4",
    urduText:
      "گاؤں خاموش ہو گیا۔ بچہ محفوظ تھا — اسپیڈو ری کے بازوؤں میں۔ آج سب کو پتہ چل گیا... وہ واقعی ان کا ہیرو ہے۔",
    defaultDurationInSeconds: 10,
    placeholderColor: "#1a1000",
    imagePrompt:
      "Ultra realistic emotional cinematic scene, giant Spider-Man parody Spidoo Rey (9 feet tall, handmade red blue spider costume, sad emotional innocent face) gently holding rescued small child safely in his large arms, child hugging him tightly, Pakistani village background after rain, villagers standing silently watching with emotional teary expressions, golden hour warm light breaking through clouds, muddy wet village atmosphere, heartfelt heroic movie ending scene, 9:16 vertical format",
  },
];

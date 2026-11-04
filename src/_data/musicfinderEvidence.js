export default {
  libraryScreenshots: {
    id: "figure-01",
    layout: "evidence",
    sourceImage: {
      src: "/assets/images/evidence/musicfinder-library-sample.png",
      fullSizeSrc: "/assets/images/evidence/musicfinder-library-sample.png",
      fullSizeLabel: "Open the full-resolution crop of the original Apple Music library screenshot",
      alt: "Cropped authentic Apple Music library screenshot showing California Dreamin', Rattle The Cage, Hdmi, Clutch Kick, Sete, and Boom Boom Pow.",
      width: 659,
      height: 350
    },
    csvSrc: "/assets/evidence/musicfinder-results-sample.csv",
    rows: [
      {
        song: "California Dreamin' (Single)",
        artist: "The Mamas & The Papas",
        sourceType: "unofficial",
        confidence: "medium",
        youtubeUrl: "https://www.youtube.com/watch?v=s5H0xFIiidY"
      },
      {
        song: "Rattle The Cage (feat. John 5)",
        artist: "Nickelback",
        sourceType: "unofficial",
        confidence: "medium",
        youtubeUrl: "https://www.youtube.com/watch?v=jnn9mlVONzo"
      },
      {
        song: "Hdmi",
        artist: "BONES",
        sourceType: "unofficial",
        confidence: "medium",
        youtubeUrl: "https://www.youtube.com/watch?v=D-3zxRRvW8g"
      },
      {
        song: "Clutch Kick",
        artist: "kiLLa Laharl",
        sourceType: "unofficial",
        confidence: "medium",
        youtubeUrl: "https://www.youtube.com/watch?v=_KVVp0kpY-c"
      },
      {
        song: "Boom Boom Pow",
        artist: "Black Eyed Peas",
        sourceType: "official-video",
        confidence: "high",
        youtubeUrl: "https://www.youtube.com/watch?v=4m48GqaOz90"
      }
    ],
    caption: "After correcting the instructions, a later MusicFinder run produced 195 result rows from 13 screenshots. This is a sample of the original music library and its corresponding CSV results. Confidence scores helped identify links that needed manual review.",
    credit: "Figure 01"
  },
  soundtrackDocument: {
    id: "figure-02",
    src: "/assets/images/evidence/fc26-soundtrack-document-page-1.png",
    fullSizeSrc: "/assets/images/evidence/fc26-soundtrack-document-page-1.png",
    fullSizeLabel: "Open the full-resolution image of the EA SPORTS FC 26 soundtrack document",
    alt: "First page of the EA SPORTS FC 26 Soundtrack document, showing its title and the opening rows of the 109-track table with YouTube search links.",
    width: 1547,
    height: 2002,
    layout: "wide",
    caption: "The EA SPORTS FC 26 soundtrack document: 109 songs from one prompt. The links opened YouTube searches rather than individual videos.",
    credit: "Figure 02"
  }
};

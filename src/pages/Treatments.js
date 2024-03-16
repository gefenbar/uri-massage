import { TreatmentsSection } from "./HomePage";
export default function TreatmentsPage() {
  const moreTreatments = [
    { title: "עיסוי מקלות במבוק", image: "sweedish-massage.webp",      url: "/bamboo"
  },
    { title: " עיסוי שוודי", image: "sweedish-massage.webp",      url: "/sweedish"
  },
    { title: "פוט מסאז' תאילנדי", image: "sweedish-massage.webp" ,      url: "/thai"
  },
    { title: "נרות הופי", image: "sweedish-massage.webp" ,      url: "/candles"
  },
    { title: "רפלקסולוגיה", image: "sweedish-massage.webp" ,      url: "/reflexology"
  },
    { title: "עיסוי פנים", image: "sweedish-massage.webp" ,      url: "/face"
  },
  ];
  return (
    <main className="treatment-page">
      <h1>הטיפולים שלי</h1>

      <TreatmentsSection
        additionalTreatments={moreTreatments}
        showLink={false}
        showTitle={false}
      />
    </main>
  );
}

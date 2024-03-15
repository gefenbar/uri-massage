import { TreatmentsSection } from "./HomePage";
export default function TreatmentsPage() {
  const moreTreatments = [
    { title: "עיסוי מקלות במבוק", image: "swedish-massage.webp",      url: "/bamboo"
  },
    { title: " עיסוי שוודי", image: "swedish-massage.webp",      url: "/sweedish"
  },
    { title: "פוט מסאז' תאילנדי", image: "swedish-massage.webp" ,      url: "/thai"
  },
    { title: "נרות הופי", image: "swedish-massage.webp" ,      url: "/candles"
  },
    { title: "רפלקסולוגיה", image: "swedish-massage.webp" ,      url: "/reflexology"
  },
    { title: "עיסוי פנים", image: "swedish-massage.webp" ,      url: "/face"
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

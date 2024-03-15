import { TreatmentsSection } from "./HomePage";
export default function TreatmentsPage() {
  const moreTreatments = [
    { title: "עיסוי מקלות במבוק", image: "swedish-massage.webp" },
    { title: " עיסוי שוודי", image: "swedish-massage.webp" },
    { title: "פוט מסאז' תאילנדי", image: "swedish-massage.webp" },
    { title: "נרות הופי", image: "swedish-massage.webp" },
    { title: "רפלקסולוגיה", image: "swedish-massage.webp" },
    { title: "עיסוי פנים", image: "swedish-massage.webp" },
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

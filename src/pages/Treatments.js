import { TreatmentsSection } from './HomePage';
export default function TreatmentsPage() {
  
  const treatments = [
    {
      title: 'עיסוי שוודי',
      image: 'swedish-massage.webp', 
    },
    {
      title: 'עיסוי לנשים הרות',
      image: 'pregnancy-massage.webp', 
    },
    {
      title: 'עיסוי תינוקות',
      image: 'baby-massage.webp', 
    },
    {
      title: 'כוסות רוח',
      image: 'cupping-glass-massage.webp', 
    },
    {
      title: 'טיפ222ול בקריסטלים',
      image: 'crystals-massage.webp', 
    }
  ];
    return (  
        <main className="treatment-page">

<TreatmentsSection/>
</main>
    );
  }
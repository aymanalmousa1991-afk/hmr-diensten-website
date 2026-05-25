import { NextResponse } from 'next/server';

const defaultReviews = [
  {
    name: "Fatima El-Amrani",
    location: "Eindhoven",
    text: "Geweldig schoonmaakbedrijf! Ze hebben ons hele appartement gepoetst voordat we de sleutel kregen. Alles was brandschoon en ze waren ontzettend vriendelijk. Zeker een aanrader!",
    rating: 5,
  },
  {
    name: "Dennis Bakker",
    location: "Amsterdam",
    text: "Als ZZP'er in een gedeeld kantoorpand was de boel vaak een rommel. HMR DIENSTEN komt nu wekelijks langs en ons kantoor ziet er elke dag piekfijn uit. Professioneel en betrouwbaar!",
    rating: 5,
  },
  {
    name: "Linda de Kort",
    location: "Rotterdam",
    text: "Ik had een spoed schoonmaak nodig na een feestje. Binnen 24 uur stonden ze voor de deur. Mijn huis was in 2 uur weer als nieuw. En de prijs viel reuze mee!",
    rating: 5,
  },
];

export async function GET() {
  try {
    const dbConnect = (await import('../../../../lib/mongoose')).default;
    await dbConnect();
    const Review = (await import('../../../../lib/models/Review')).default;

    let reviews = await Review.find({}).sort({ createdAt: -1 }).limit(20);

    // Als de database leeg is, seed de default reviews
    if (reviews.length === 0) {
      await Review.insertMany(defaultReviews);
      reviews = await Review.find({}).sort({ createdAt: -1 }).limit(20);
    }

    return NextResponse.json({ success: true, data: reviews });
  } catch (error) {
    // Als MongoDB niet werkt, retourneer default reviews als fallback
    return NextResponse.json({ success: true, data: defaultReviews });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const dbConnect = (await import('../../../../lib/mongoose')).default;
    await dbConnect();
    const Review = (await import('../../../../lib/models/Review')).default;
    const review = await Review.create(body);
    return NextResponse.json({ success: true, data: review }, { status: 201 });
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e: any) => e.message);
      return NextResponse.json({ success: false, error: messages.join(', ') }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Fout bij toevoegen review' }, { status: 500 });
  }
}

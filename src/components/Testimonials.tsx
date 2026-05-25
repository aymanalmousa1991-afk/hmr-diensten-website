"use client";
import { Container } from "@/components/Container";
import { useState, useEffect, useRef } from "react";
import { apiUrl } from "@/lib/api";

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

export const Testimonials = () => {
  const [reviews, setReviews] = useState(defaultReviews);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', location: '', text: '', rating: 5 });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch(apiUrl('/api/reviews'));
      const data = await res.json();
      if (data.success && data.data) {
        setReviews(data.data);
      }
    } catch (e) {
      // fallback naar default reviews
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      const res = await fetch(apiUrl('/api/reviews'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setMessage('Bedankt voor je review!');
        setFormData({ name: '', location: '', text: '', rating: 5 });
        fetchReviews();
        setTimeout(() => { setShowForm(false); setMessage(''); }, 2000);
      } else {
        setMessage(data.error || 'Er ging iets mis');
      }
    } catch (e) {
      setMessage('Er ging iets mis. Probeer het later opnieuw.');
    }
    setSubmitting(false);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 380;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-brand-primary/5 to-blue-50">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Wat Onze Klanten Zeggen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {reviews.length} review{reviews.length !== 1 ? 's' : ''} &mdash; Lees wat anderen over ons zeggen.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mb-10 group">
          {/* Pijlen */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-brand-primary hover:shadow-xl transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Vorige reviews"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-brand-primary hover:shadow-xl transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Volgende reviews"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#0f766e #e5e7eb' }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] snap-start card p-7 flex flex-col"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 italic text-sm leading-relaxed mb-5 flex-grow">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 bg-brand-primary/10 flex items-center justify-center">
                    <span className="text-base font-bold text-brand-primary">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {review.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {review.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Form Toggle */}
        <div className="text-center">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="btn-secondary"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Schrijf een review
            </button>
          ) : (
            <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Deel je ervaring</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Naam *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                      placeholder="Uw naam"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Woonplaats *</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                      placeholder="Uw woonplaats"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Beoordeling</label>
                  <div className="flex gap-2">
                    {[1,2,3,4,5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({...formData, rating: star})}
                        className="focus:outline-none"
                      >
                        <svg className={`w-8 h-8 ${star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Jouw review *</label>
                  <textarea
                    required
                    value={formData.text}
                    onChange={(e) => setFormData({...formData, text: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                    placeholder="Deel je ervaring met HMR DIENSTEN..."
                  />
                </div>

                {message && (
                  <div className={`p-3 rounded-xl text-sm ${message.includes('Bedankt') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {message}
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary flex-1 disabled:opacity-50"
                  >
                    {submitting ? 'Versturen...' : 'Verstuur review'}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setShowForm(false); setMessage(''); }}
                    className="px-6 py-3 text-gray-600 hover:text-gray-900 font-semibold"
                  >
                    Annuleren
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

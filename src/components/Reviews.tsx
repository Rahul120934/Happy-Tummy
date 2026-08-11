import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MessageCircle, Send, ImagePlus, X } from "lucide-react";
import { db, storage, collection, addDoc, getDocs, query, orderBy, serverTimestamp, Timestamp, ref, uploadBytesResumable, getDownloadURL } from "../firebase";

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  photoUrl?: string;
  createdAt?: Timestamp | Date | any;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Spam Prevention
  const [website, setWebsite] = useState(""); // Honeypot

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const fetchedReviews: Review[] = [];
      querySnapshot.forEach((doc) => {
        fetchedReviews.push({ id: doc.id, ...doc.data() } as Review);
      });
      setReviews(fetchedReviews);
    } catch (error) {
      console.error("Error fetching reviews: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        alert("Photo must be less than 5MB");
        return;
      }
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const removePhoto = () => {
    setPhoto(null);
    setPhotoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    // Spam Prevention: Honeypot check
    if (website.trim() !== "") {
      // Silently reject bots
      setSuccessMsg("Thank you for your review!");
      setTimeout(() => setShowForm(false), 2000);
      return;
    }

    setIsSubmitting(true);
    try {
      let uploadedPhotoUrl = "";

      if (photo) {
        const storageRef = ref(storage, `reviews/${Date.now()}_${photo.name}`);
        const uploadTask = await uploadBytesResumable(storageRef, photo);
        uploadedPhotoUrl = await getDownloadURL(uploadTask.ref);
      }

      const newReview = {
        name: name.trim(),
        rating,
        comment: comment.trim(),
        ...(uploadedPhotoUrl && { photoUrl: uploadedPhotoUrl }),
        createdAt: serverTimestamp(),
      };
      
      const docRef = await addDoc(collection(db, "reviews"), newReview);
      
      // Update local state instantly
      setReviews([{ id: docRef.id, ...newReview }, ...reviews]);
      
      setSuccessMsg("Thank you for your review!");
      setName("");
      setComment("");
      setRating(5);
      removePhoto();
      
      setTimeout(() => {
        setSuccessMsg("");
        setShowForm(false);
      }, 3000);
      
    } catch (error) {
      console.error("Error adding review: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < count ? "fill-orange text-orange" : "fill-muted/20 text-muted/20"}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 sm:py-32 section-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 text-orange font-semibold text-sm tracking-wide uppercase mb-6"
          >
            <MessageCircle size={16} />
            Customer Reviews
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="text-4xl sm:text-5xl font-heading font-bold text-dark mb-6"
          >
            What Our Foodies Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-lg text-muted"
          >
            Real reviews from our happy customers. Have you tried our food? Let us know!
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            onClick={() => setShowForm(!showForm)}
            className="mt-8 bg-green hover:bg-green-light text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 active:scale-95"
          >
            {showForm ? "Cancel" : "Write a Review"}
          </motion.button>
        </div>

        {/* Form Modal / Dropdown */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
              exit={{ opacity: 0, height: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="max-w-xl mx-auto overflow-hidden mb-16"
            >
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-offwhite/50">
                {successMsg ? (
                  <div className="text-center py-8 text-green font-semibold text-lg flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center">
                      <Send size={24} />
                    </div>
                    {successMsg}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Honeypot Field */}
                    <input
                      type="text"
                      name="website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Your Name</label>
                      <input 
                        required
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Sadiccha Sankhlkar"
                        className="w-full bg-cream px-4 py-3 rounded-2xl outline-none focus:ring-2 focus:ring-orange/50 transition-shadow"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Rating</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className="p-1 transition-transform active:scale-90"
                          >
                            <Star size={28} className={star <= rating ? "fill-orange text-orange" : "fill-muted/20 text-muted/20"} />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Your Review</label>
                      <textarea 
                        required
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="The chicken xacuti was amazing..."
                        rows={4}
                        className="w-full bg-cream px-4 py-3 rounded-2xl outline-none focus:ring-2 focus:ring-orange/50 transition-shadow resize-none"
                      />
                    </div>
                    
                    {/* Photo Upload Section */}
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Add a Photo (Optional)</label>
                      {photoPreview ? (
                        <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-orange/20">
                          <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={removePhoto}
                            className="absolute top-2 right-2 p-1 bg-dark/70 text-white rounded-full hover:bg-red transition-colors"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="flex flex-col items-center justify-center w-full sm:w-32 h-32 rounded-2xl border-2 border-dashed border-muted/30 bg-cream/50 text-muted hover:border-orange/50 hover:text-orange transition-colors"
                        >
                          <ImagePlus size={24} className="mb-2" />
                          <span className="text-xs font-semibold">Upload Photo</span>
                        </button>
                      )}
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handlePhotoChange}
                        accept="image/*"
                        className="hidden"
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-orange hover:bg-orange-hover text-dark py-4 rounded-full font-semibold mt-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Submitting..." : "Post Review"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl animate-pulse h-48 border border-offwhite/50" />
            ))
          ) : reviews.length === 0 ? (
            <div className="col-span-full text-center text-muted py-12">
              No reviews yet. Be the first to leave one!
            </div>
          ) : (
            reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-offwhite/50 hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="flex gap-1 mb-4">
                  {renderStars(review.rating)}
                </div>
                <p className="text-charcoal flex-grow mb-6">"{review.comment}"</p>
                {review.photoUrl && (
                  <div className="mb-6 rounded-2xl overflow-hidden border border-offwhite/50 h-48">
                    <img src={review.photoUrl} alt="Review photo" className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange font-heading font-bold text-xl">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="font-semibold text-dark">{review.name}</span>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

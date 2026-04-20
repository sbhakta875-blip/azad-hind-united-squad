import { ChevronLeft, ChevronRight, Image, Play, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { MediaType } from "../backend";
import { Layout } from "../components/Layout";
import { SectionHeader } from "../components/SectionHeader";
import { Skeleton } from "../components/ui/skeleton";
import { useGalleryItems } from "../hooks/use-backend";
import type { GalleryItem } from "../types";

type GalleryTab = "photo" | "video";

function isYouTubeUrl(url: string): boolean {
  return /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)/.test(
    url,
  );
}

function getYouTubeEmbedUrl(url: string): string {
  const match = url.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1` : url;
}

function GallerySkeletonGrid() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
      data-ocid="gallery.loading_state"
    >
      {["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"].map((k) => (
        <Skeleton
          key={k}
          className="aspect-square w-full bg-muted animate-pulse"
        />
      ))}
    </div>
  );
}

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function PhotoLightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const item = items[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
      data-ocid="gallery.lightbox"
      aria-label={`Photo: ${item.title}`}
    >
      {/* Close */}
      <button
        type="button"
        className="absolute top-4 right-4 z-10 h-10 w-10 bg-white/10 hover:bg-white/25 flex items-center justify-center transition-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        onClick={onClose}
        aria-label="Close lightbox"
        data-ocid="gallery.lightbox_close_button"
      >
        <X className="h-5 w-5 text-white" />
      </button>

      {/* Prev */}
      {hasPrev && (
        <button
          type="button"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-12 w-10 bg-white/10 hover:bg-white/25 flex items-center justify-center transition-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
          data-ocid="gallery.lightbox_prev_button"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
      )}

      {/* Next */}
      {hasNext && (
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-12 w-10 bg-white/10 hover:bg-white/25 flex items-center justify-center transition-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
          data-ocid="gallery.lightbox_next_button"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      )}

      {/* Image */}
      <motion.div
        key={item.id.toString()}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="relative max-w-5xl w-full px-16 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.blob.getDirectURL()}
          alt={item.title}
          className="w-full max-h-[80vh] object-contain"
        />
        <div className="mt-3 flex items-center gap-4 w-full justify-center">
          <span className="text-white/90 font-display font-bold text-sm tracking-wide">
            {item.title}
          </span>
          <span className="text-white/40 text-xs">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface VideoModalProps {
  item: GalleryItem;
  onClose: () => void;
}

function VideoModal({ item, onClose }: VideoModalProps) {
  const url = item.blob.getDirectURL();
  const isYT = isYouTubeUrl(url);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
      data-ocid="gallery.video_modal"
      aria-label={`Video: ${item.title}`}
    >
      <button
        type="button"
        className="absolute top-4 right-4 z-10 h-10 w-10 bg-white/10 hover:bg-white/25 flex items-center justify-center transition-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        onClick={onClose}
        aria-label="Close video"
        data-ocid="gallery.video_modal_close_button"
      >
        <X className="h-5 w-5 text-white" />
      </button>

      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="w-full max-w-4xl aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        {isYT ? (
          <iframe
            src={getYouTubeEmbedUrl(url)}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={item.title}
          />
        ) : (
          <video src={url} controls autoPlay className="w-full h-full bg-black">
            <track kind="captions" />
          </video>
        )}
      </motion.div>
      <div className="absolute bottom-6 text-center text-white/80 font-display font-bold text-sm tracking-wide">
        {item.title}
      </div>
    </motion.div>
  );
}

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
  onClick: () => void;
}

function GalleryCard({ item, index, onClick }: GalleryCardProps) {
  const thumbUrl =
    item.thumbnailBlob?.getDirectURL() ?? item.blob.getDirectURL();
  const isVideo = item.mediaType === MediaType.video;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      className="relative group aspect-square overflow-hidden bg-muted border border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      onClick={onClick}
      data-ocid={`gallery.item.${index + 1}`}
      aria-label={`${isVideo ? "Play video" : "View photo"}: ${item.title}`}
    >
      <img
        src={thumbUrl}
        alt={item.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Video play overlay */}
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-12 w-12 bg-primary/85 flex items-center justify-center shadow-lg">
            <Play className="h-6 w-6 text-primary-foreground ml-1" />
          </div>
        </div>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-all duration-300 flex flex-col items-center justify-center gap-2">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-primary-foreground/10 border border-primary-foreground/40 px-3 py-1.5 text-xs text-primary-foreground font-semibold tracking-wider uppercase">
          {isVideo ? "Play Video" : "View Photo"}
        </div>
      </div>

      {/* Title bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-xs text-white font-medium truncate">{item.title}</p>
      </div>
    </motion.button>
  );
}

export default function GalleryPage() {
  const { data: allItems = [], isLoading } = useGalleryItems();
  const [activeTab, setActiveTab] = useState<GalleryTab>("photo");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [videoItem, setVideoItem] = useState<GalleryItem | null>(null);

  const activeItems = allItems.filter((item) => item.isActive);
  const photos = activeItems.filter(
    (item) => item.mediaType === MediaType.photo,
  );
  const videos = activeItems.filter(
    (item) => item.mediaType === MediaType.video,
  );
  const displayItems = activeTab === "photo" ? photos : videos;

  const openPhoto = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const openVideo = useCallback((item: GalleryItem) => {
    setVideoItem(item);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const closeVideo = useCallback(() => setVideoItem(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i < photos.length - 1 ? i + 1 : i));
  }, [photos.length]);

  return (
    <Layout>
      {/* Hero */}
      <section
        className="bg-primary py-20 text-primary-foreground relative overflow-hidden"
        data-ocid="gallery.hero_section"
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
            backgroundSize: "12px 12px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-3 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase">
            Media Archive
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
            Cadet Gallery
          </h1>
          <p className="text-primary-foreground/70 max-w-xl text-lg leading-relaxed">
            Photos and videos from our training sessions, parade grounds, camps,
            and community events across India.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section
        className="py-16 md:py-20 bg-background"
        data-ocid="gallery.content_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Cadets & Events in Action"
            title="Our Gallery"
          />

          {/* Tab Switcher */}
          <div
            className="flex gap-0 mb-10 border border-border w-fit"
            data-ocid="gallery.tabs"
          >
            {(["photo", "video"] as GalleryTab[]).map((tab) => {
              const count = tab === "photo" ? photos.length : videos.length;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-bold tracking-widest uppercase transition-smooth flex items-center gap-2 ${
                    activeTab === tab
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  data-ocid={`gallery.${tab}_tab`}
                >
                  {tab === "photo" ? (
                    <Image className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                  {tab === "photo" ? "Photos" : "Videos"}
                  {!isLoading && count > 0 && (
                    <span
                      className={`text-xs px-1.5 py-0.5 ${activeTab === tab ? "bg-primary-foreground/20" : "bg-muted-foreground/20"}`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          {isLoading ? (
            <GallerySkeletonGrid />
          ) : displayItems.length === 0 ? (
            <div
              className="text-center py-24 border border-dashed border-border"
              data-ocid="gallery.empty_state"
            >
              {activeTab === "photo" ? (
                <Image className="h-14 w-14 text-muted-foreground mx-auto mb-4" />
              ) : (
                <Play className="h-14 w-14 text-muted-foreground mx-auto mb-4" />
              )}
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                No {activeTab === "photo" ? "Photos" : "Videos"} Yet
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                {activeTab === "photo"
                  ? "Photo gallery content will appear here once uploaded by the admin."
                  : "Video content will appear here once uploaded by the admin."}
              </p>
            </div>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
              data-ocid="gallery.list"
            >
              {displayItems.map((item, i) =>
                activeTab === "photo" ? (
                  <GalleryCard
                    key={item.id.toString()}
                    item={item}
                    index={i}
                    onClick={() => openPhoto(i)}
                  />
                ) : (
                  <GalleryCard
                    key={item.id.toString()}
                    item={item}
                    index={i}
                    onClick={() => openVideo(item)}
                  />
                ),
              )}
            </div>
          )}
        </div>
      </section>

      {/* Photo Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <PhotoLightbox
            items={photos}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {videoItem && <VideoModal item={videoItem} onClose={closeVideo} />}
      </AnimatePresence>
    </Layout>
  );
}

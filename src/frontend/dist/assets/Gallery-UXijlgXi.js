import { r as reactExports, j as jsxRuntimeExports } from "./index-Di1Y5MzV.js";
import { c as createLucideIcon, M as MediaType } from "./backend-CA2XpFJp.js";
import { L as Layout, S as SectionHeader } from "./SectionHeader-DfAs1Yby.js";
import { I as Image, S as Skeleton } from "./skeleton-IflWNoss.js";
import { e as useGalleryItems, m as motion, X } from "./use-backend-CkKQvMLG.js";
import { A as AnimatePresence, a as ChevronLeft, C as ChevronRight } from "./index-CuCNRzDb.js";
import "./utils-DdB4LPY_.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]];
const Play = createLucideIcon("play", __iconNode);
function isYouTubeUrl(url) {
  return /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)/.test(
    url
  );
}
function getYouTubeEmbedUrl(url) {
  const match = url.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1` : url;
}
function GallerySkeletonGrid() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3",
      "data-ocid": "gallery.loading_state",
      children: ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Skeleton,
        {
          className: "aspect-square w-full bg-muted animate-pulse"
        },
        k
      ))
    }
  );
}
function PhotoLightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext
}) {
  const item = items[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;
  reactExports.useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-50 bg-black/95 flex items-center justify-center",
      onClick: onClose,
      "data-ocid": "gallery.lightbox",
      "aria-label": `Photo: ${item.title}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "absolute top-4 right-4 z-10 h-10 w-10 bg-white/10 hover:bg-white/25 flex items-center justify-center transition-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
            onClick: onClose,
            "aria-label": "Close lightbox",
            "data-ocid": "gallery.lightbox_close_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5 text-white" })
          }
        ),
        hasPrev && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "absolute left-3 top-1/2 -translate-y-1/2 z-10 h-12 w-10 bg-white/10 hover:bg-white/25 flex items-center justify-center transition-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
            onClick: (e) => {
              e.stopPropagation();
              onPrev();
            },
            "aria-label": "Previous image",
            "data-ocid": "gallery.lightbox_prev_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-6 w-6 text-white" })
          }
        ),
        hasNext && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "absolute right-3 top-1/2 -translate-y-1/2 z-10 h-12 w-10 bg-white/10 hover:bg-white/25 flex items-center justify-center transition-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
            onClick: (e) => {
              e.stopPropagation();
              onNext();
            },
            "aria-label": "Next image",
            "data-ocid": "gallery.lightbox_next_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-6 w-6 text-white" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { scale: 0.92, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.92, opacity: 0 },
            transition: { duration: 0.18 },
            className: "relative max-w-5xl w-full px-16 flex flex-col items-center",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: item.blob.getDirectURL(),
                  alt: item.title,
                  className: "w-full max-h-[80vh] object-contain"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-4 w-full justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/90 font-display font-bold text-sm tracking-wide", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/40 text-xs", children: [
                  currentIndex + 1,
                  " / ",
                  items.length
                ] })
              ] })
            ]
          },
          item.id.toString()
        )
      ]
    }
  );
}
function VideoModal({ item, onClose }) {
  const url = item.blob.getDirectURL();
  const isYT = isYouTubeUrl(url);
  reactExports.useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4",
      onClick: onClose,
      "data-ocid": "gallery.video_modal",
      "aria-label": `Video: ${item.title}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "absolute top-4 right-4 z-10 h-10 w-10 bg-white/10 hover:bg-white/25 flex items-center justify-center transition-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
            onClick: onClose,
            "aria-label": "Close video",
            "data-ocid": "gallery.video_modal_close_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5 text-white" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { scale: 0.92, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.92, opacity: 0 },
            transition: { duration: 0.18 },
            className: "w-full max-w-4xl aspect-video",
            onClick: (e) => e.stopPropagation(),
            children: isYT ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "iframe",
              {
                src: getYouTubeEmbedUrl(url),
                className: "w-full h-full",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: true,
                title: item.title
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: url, controls: true, autoPlay: true, className: "w-full h-full bg-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx("track", { kind: "captions" }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 text-center text-white/80 font-display font-bold text-sm tracking-wide", children: item.title })
      ]
    }
  );
}
function GalleryCard({ item, index, onClick }) {
  var _a;
  const thumbUrl = ((_a = item.thumbnailBlob) == null ? void 0 : _a.getDirectURL()) ?? item.blob.getDirectURL();
  const isVideo = item.mediaType === MediaType.video;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.button,
    {
      type: "button",
      initial: { opacity: 0, y: 12 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.04, duration: 0.3 },
      className: "relative group aspect-square overflow-hidden bg-muted border border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary",
      onClick,
      "data-ocid": `gallery.item.${index + 1}`,
      "aria-label": `${isVideo ? "Play video" : "View photo"}: ${item.title}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: thumbUrl,
            alt: item.title,
            loading: "lazy",
            className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          }
        ),
        isVideo && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 bg-primary/85 flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-6 w-6 text-primary-foreground ml-1" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-all duration-300 flex flex-col items-center justify-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-primary-foreground/10 border border-primary-foreground/40 px-3 py-1.5 text-xs text-primary-foreground font-semibold tracking-wider uppercase", children: isVideo ? "Play Video" : "View Photo" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white font-medium truncate", children: item.title }) })
      ]
    }
  );
}
function GalleryPage() {
  const { data: allItems = [], isLoading } = useGalleryItems();
  const [activeTab, setActiveTab] = reactExports.useState("photo");
  const [lightboxIndex, setLightboxIndex] = reactExports.useState(null);
  const [videoItem, setVideoItem] = reactExports.useState(null);
  const activeItems = allItems.filter((item) => item.isActive);
  const photos = activeItems.filter(
    (item) => item.mediaType === MediaType.photo
  );
  const videos = activeItems.filter(
    (item) => item.mediaType === MediaType.video
  );
  const displayItems = activeTab === "photo" ? photos : videos;
  const openPhoto = reactExports.useCallback((index) => {
    setLightboxIndex(index);
  }, []);
  const openVideo = reactExports.useCallback((item) => {
    setVideoItem(item);
  }, []);
  const closeLightbox = reactExports.useCallback(() => setLightboxIndex(null), []);
  const closeVideo = reactExports.useCallback(() => setVideoItem(null), []);
  const goPrev = reactExports.useCallback(() => {
    setLightboxIndex((i) => i !== null && i > 0 ? i - 1 : i);
  }, []);
  const goNext = reactExports.useCallback(() => {
    setLightboxIndex((i) => i !== null && i < photos.length - 1 ? i + 1 : i);
  }, [photos.length]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "bg-primary py-20 text-primary-foreground relative overflow-hidden",
        "data-ocid": "gallery.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-5 pointer-events-none",
              style: {
                backgroundImage: "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
                backgroundSize: "12px 12px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block mb-3 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase", children: "Media Archive" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4", children: "Cadet Gallery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 max-w-xl text-lg leading-relaxed", children: "Photos and videos from our training sessions, parade grounds, camps, and community events across India." })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 md:py-20 bg-background",
        "data-ocid": "gallery.content_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              badge: "Cadets & Events in Action",
              title: "Our Gallery"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex gap-0 mb-10 border border-border w-fit",
              "data-ocid": "gallery.tabs",
              children: ["photo", "video"].map((tab) => {
                const count = tab === "photo" ? photos.length : videos.length;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setActiveTab(tab),
                    className: `px-6 py-3 text-sm font-bold tracking-widest uppercase transition-smooth flex items-center gap-2 ${activeTab === tab ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"}`,
                    "data-ocid": `gallery.${tab}_tab`,
                    children: [
                      tab === "photo" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" }),
                      tab === "photo" ? "Photos" : "Videos",
                      !isLoading && count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-xs px-1.5 py-0.5 ${activeTab === tab ? "bg-primary-foreground/20" : "bg-muted-foreground/20"}`,
                          children: count
                        }
                      )
                    ]
                  },
                  tab
                );
              })
            }
          ),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(GallerySkeletonGrid, {}) : displayItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center py-24 border border-dashed border-border",
              "data-ocid": "gallery.empty_state",
              children: [
                activeTab === "photo" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-14 w-14 text-muted-foreground mx-auto mb-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-14 w-14 text-muted-foreground mx-auto mb-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-xl text-foreground mb-2", children: [
                  "No ",
                  activeTab === "photo" ? "Photos" : "Videos",
                  " Yet"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs mx-auto", children: activeTab === "photo" ? "Photo gallery content will appear here once uploaded by the admin." : "Video content will appear here once uploaded by the admin." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3",
              "data-ocid": "gallery.list",
              children: displayItems.map(
                (item, i) => activeTab === "photo" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  GalleryCard,
                  {
                    item,
                    index: i,
                    onClick: () => openPhoto(i)
                  },
                  item.id.toString()
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  GalleryCard,
                  {
                    item,
                    index: i,
                    onClick: () => openVideo(item)
                  },
                  item.id.toString()
                )
              )
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: lightboxIndex !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PhotoLightbox,
      {
        items: photos,
        currentIndex: lightboxIndex,
        onClose: closeLightbox,
        onPrev: goPrev,
        onNext: goNext
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: videoItem && /* @__PURE__ */ jsxRuntimeExports.jsx(VideoModal, { item: videoItem, onClose: closeVideo }) })
  ] });
}
export {
  GalleryPage as default
};

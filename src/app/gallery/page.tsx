"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaYoutube,
  FaInstagram,
  FaExpand,
  FaPlay,
} from "react-icons/fa";

import Images from "@/data/gallery/images";

const videos = [
  {
    id: "ysz5S6PUM-U",
    title: "WikiClub Tech Event",
    description:
      "Explore one of the exciting events and activities organized by WikiClub Tech.",
  },
  {
    id: "ScMzIvxBSi4",
    title: "WikiClub Tech Highlights",
    description:
      "A collection of memorable moments from the WikiClub Tech community.",
  },
];

const highlights = [
  {
    type: "youtube",
    id: "ZLPscXdb5k0",
    title: "WikiClub Tech Short",
    description:
      "A quick glimpse into the WikiClub Tech community.",
  },
  {
    type: "instagram",
    id: "DXbjqlojJpZ",
    title: "WikiClub Tech Reel",
    description:
      "A memorable moment from our community.",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Normal videos
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  // Shorts + Reels
  const [hoveredHighlight, setHoveredHighlight] = useState<string | null>(
    null
  );

  const nextImage = () => {
    if (selectedImage === null) return;

    setSelectedImage((selectedImage + 1) % Images.length);
  };

  const previousImage = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      (selectedImage - 1 + Images.length) % Images.length
    );
  };

  return (
    <main
      className="min-h-screen overflow-hidden text-[#18252f]"
      style={{
        background: `
          radial-gradient(
            circle at 15% 10%,
            rgba(210, 238, 250, 0.75) 0%,
            rgba(210, 238, 250, 0) 42%
          ),
          radial-gradient(
            circle at 85% 10%,
            rgba(215, 250, 225, 0.8) 0%,
            rgba(215, 250, 225, 0) 45%
          ),
          radial-gradient(
            circle at 80% 90%,
            rgba(255, 245, 235, 0.65) 0%,
            rgba(255, 245, 235, 0) 40%
          ),
          #f8fcfa
        `,
      }}
    >
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="px-6 pb-20 pt-32 text-center sm:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
            WikiClub Tech
          </p>

          <h1 className="text-5xl font-black tracking-tight text-black sm:text-6xl lg:text-7xl">
            Memories & Moments
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Explore the moments, events, activities and memories that make
            WikiClub Tech special.
          </p>
        </motion.div>
      </section>

      {/* =========================================================
          PHOTO GALLERY
      ========================================================= */}

      <section
        id="photo-gallery"
        className="px-6 py-16 sm:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Memories
            </p>

            <h2 className="text-4xl font-black text-black sm:text-5xl">
              Photo Gallery
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              A collection of moments captured during WikiClub Tech events
              and activities.
            </p>
          </motion.div>

          {/* Masonry Gallery */}

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {Images.map((image, index) => (
              <motion.button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setSelectedImage(index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.05, 0.3),
                }}
                whileHover={{ y: -5 }}
                className="group relative mb-5 block w-full overflow-hidden rounded-3xl bg-white text-left shadow-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={700}
                  unoptimized
                  className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />

                <div className="pointer-events-none absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-800 opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
                  <FaExpand size={14} />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          IMAGE LIGHTBOX
      ========================================================= */}

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close */}

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <FaTimes />
            </button>

            {/* Previous */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
              className="absolute left-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8"
            >
              <FaArrowLeft />
            </button>

            {/* Image */}

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[85vh] max-w-[85vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={Images[selectedImage].src}
                alt={Images[selectedImage].alt}
                width={1400}
                height={1000}
                unoptimized
                className="max-h-[85vh] w-auto rounded-2xl object-contain"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-sm text-white">
                {selectedImage + 1} / {Images.length}
              </div>
            </motion.div>

            {/* Next */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8"
            >
              <FaArrowRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          VIDEOS
      ========================================================= */}

      <section
        id="videos"
        className="px-6 py-20 sm:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Watch
            </p>

            <h2 className="text-4xl font-black text-black sm:text-5xl">
              Videos
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              Watch videos and highlights from WikiClub Tech.
            </p>
          </motion.div>

          <div className="grid gap-7 md:grid-cols-2">
            {videos.map((video, index) => (
              <motion.article
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
                className="group overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Thumbnail */}

                <div className="relative aspect-video overflow-hidden bg-black">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    fill
                    unoptimized
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/30" />

                  {/* Play button */}

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition duration-300 group-hover:scale-110">
                      <FaPlay className="ml-1" />
                    </div>
                  </div>

                  {/* YouTube badge */}

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-bold text-red-600 backdrop-blur">
                    <FaYoutube />
                    YouTube
                  </div>
                </div>

                {/* Text */}

                <div className="p-6">
                  <h3 className="text-xl font-black text-black">
                    {video.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {video.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FLOATING VIDEO PREVIEW
      ========================================================= */}

      <AnimatePresence>
        {hoveredVideo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none fixed left-1/2 top-1/2 z-[90] w-[min(720px,90vw)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[24px] border border-white/30 bg-black shadow-2xl"
          >
            <div className="relative aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${hoveredVideo}?autoplay=1&mute=1&controls=1&rel=0`}
                title="Video preview"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />

              <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/70 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                Playing preview
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          FEATURED HIGHLIGHTS
          SHORTS + REELS
      ========================================================= */}

      <section
        id="highlights"
        className="px-6 py-20 sm:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Short Form
            </p>

            <h2 className="text-4xl font-black text-black sm:text-5xl">
              Featured Highlights
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              Quick moments from WikiClub Tech on YouTube Shorts and
              Instagram Reels.
            </p>
          </motion.div>

          {/* Horizontal Shelf */}

          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {highlights.map((highlight, index) => {
              const highlightKey = `${highlight.type}-${highlight.id}`;

              return (
                <motion.article
                  key={highlightKey}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  onMouseEnter={() =>
                    setHoveredHighlight(highlightKey)
                  }
                  onMouseLeave={() => setHoveredHighlight(null)}
                  className="group w-[290px] shrink-0 overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[330px]"
                >
                  {/* =================================================
                      VIDEO AREA
                  ================================================= */}

                  <div className="relative aspect-[9/16] overflow-hidden bg-black">
                    {/* -------------------------------------------------
                        YOUTUBE SHORT
                    ------------------------------------------------- */}

                    {highlight.type === "youtube" && (
                      <>
                        {/* Thumbnail when NOT hovered */}

                        {hoveredHighlight !== highlightKey && (
                          <Image
                            src={`https://img.youtube.com/vi/${highlight.id}/maxresdefault.jpg`}
                            alt={highlight.title}
                            fill
                            unoptimized
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />
                        )}

                        {/* YouTube iframe when hovered */}

                        {hoveredHighlight === highlightKey && (
                          <iframe
                            className="absolute inset-0 h-full w-full"
                            src={`https://www.youtube.com/embed/${highlight.id}?autoplay=1&mute=1&controls=1&rel=0`}
                            title={highlight.title}
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                          />
                        )}

                        {/* Play button */}

                        {hoveredHighlight !== highlightKey && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition duration-300 group-hover:scale-110">
                              <FaPlay className="ml-1" size={16} />
                            </div>
                          </div>
                        )}

                        {/* Badge */}

                        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-bold text-red-600 backdrop-blur">
                          <FaYoutube />
                          YouTube Short
                        </div>
                      </>
                    )}

                    {/* -------------------------------------------------
                        INSTAGRAM REEL
                    ------------------------------------------------- */}

                    {highlight.type === "instagram" && (
                      <>
                        {/* Instagram iframe only when hovered */}

                        {hoveredHighlight === highlightKey ? (
                          <iframe
                            className="absolute inset-0 h-full w-full"
                            src={`https://www.instagram.com/reel/${highlight.id}/embed`}
                            title={highlight.title}
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          /* Instagram preview before hover */
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-white to-purple-100">
                            <FaInstagram
                              size={55}
                              className="mb-5 text-pink-600"
                            />

                            <span className="text-sm font-bold text-gray-700">
                              Hover to play Reel
                            </span>
                          </div>
                        )}

                        {/* Badge */}

                        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-bold text-pink-600 backdrop-blur">
                          <FaInstagram />
                          Instagram Reel
                        </div>
                      </>
                    )}

                    {/* Playing indicator */}

                    <AnimatePresence>
                      {hoveredHighlight === highlightKey && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/70 px-3 py-2 text-xs font-semibold text-white backdrop-blur"
                        >
                          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                          Playing
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* =================================================
                      TEXT
                  ================================================= */}

                  <div className="p-5">
                    <h3 className="text-lg font-black text-black">
                      {highlight.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}

      <section className="px-6 pb-24 pt-10 sm:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#18252f] px-8 py-14 text-center text-white sm:px-12"
        >
          <h2 className="text-3xl font-black sm:text-4xl">
            More memories are waiting.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Explore the gallery and discover more moments from WikiClub
            Tech.
          </p>

          <a
            href="#photo-gallery"
            className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-[#18252f] transition hover:scale-105"
          >
            Explore Gallery
          </a>
        </motion.div>
      </section>
    </main>
  );
}
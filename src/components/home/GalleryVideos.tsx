"use client";



import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import Images from "@/data/gallery/images";



const standardVideos = [

  {

    title: "WikiClub Tech Event",

    videoId: "ysz5S6PUM-U",

  },

  {

    title: "WikiClub Tech Highlights",

    videoId: "ScMzIvxBSi4",

  },

];



/*

 * ============================================================

 * ADD YOUR YOUTUBE SHORTS HERE

 * ============================================================

 *

 * Example:

 * {

 *   title: "My New Short",

 *   videoId: "ABC123XYZ",

 * }

 *

 * videoId is the part after /shorts/ in the YouTube URL.

 */



const shortVideos = [

  {

    title: "WikiClub Tech Short",

    videoId: "ZLPscXdb5k0",

  },



  // Add more Shorts below this line

  // {

  //   title: "Another WikiClub Short",

  //   videoId: "YOUR_SHORT_ID",

  // },

];



/*

 * ============================================================

 * ADD YOUR INSTAGRAM REELS HERE

 * ============================================================

 *

 * Example:

 * {

 *   title: "My Instagram Reel",

 *   reelId: "ABC123XYZ",

 * }

 *

 * reelId is the part after /reel/ in the Instagram URL.

 */



const instagramReels = [

  {

    title: "WikiClub Tech Instagram Reel",

    reelId: "DXbjqlojJpZ",

  },



  // Add more Instagram Reels below this line

  // {

  //   title: "Another Instagram Reel",

  //   reelId: "YOUR_REEL_ID",

  // },

];



export default function GalleryVideos() {

  const [activeIndex, setActiveIndex] = useState(0);

  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const [hoveredReel, setHoveredReel] = useState<string | null>(null);



  const totalImages = Images.length;



  if (totalImages === 0) {

    return null;

  }



  const previousIndex = (activeIndex - 1 + totalImages) % totalImages;

  const nextIndex = (activeIndex + 1) % totalImages;



  const visibleImages = [

    {

      image: Images[previousIndex],

      index: previousIndex,

      position: "left",

    },

    {

      image: Images[activeIndex],

      index: activeIndex,

      position: "center",

    },

    {

      image: Images[nextIndex],

      index: nextIndex,

      position: "right",

    },

  ];



  return (

    <section className="w-full overflow-hidden py-16">

      <div className="mx-auto max-w-7xl px-5">

        {/* ================= SECTION HEADING ================= */}



        <div className="mb-14 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-black">

            Memories & Moments

          </p>



          <h2 className="text-4xl font-bold text-black md:text-5xl">

            Video & Gallery

          </h2>



          <p className="mx-auto mt-4 max-w-2xl text-gray-600">

            Explore our events, videos, shorts, reels, and memorable moments.

          </p>

        </div>



        {/* ================================================== */}

        {/* STANDARD VIDEO FEED */}

        {/* ================================================== */}



        <div className="mb-16">

          <div className="mb-7">

            <h3 className="text-2xl font-bold text-black md:text-3xl">

              Videos

            </h3>



            <p className="mt-1 text-sm text-gray-500">

              Explore our latest events and activities

            </p>

          </div>



          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

            {standardVideos.map((video, index) => {

              const isHovered = hoveredVideo === video.videoId;



              return (

                <div

                  key={`${video.videoId}-${index}`}

                  className="relative"

                  onMouseEnter={() => setHoveredVideo(video.videoId)}

                  onMouseLeave={() => setHoveredVideo(null)}

                >

                  <motion.div

                    animate={{

                      scale: isHovered ? 1.04 : 1,

                    }}

                    transition={{

                      duration: 0.25,

                      ease: "easeOut",

                    }}

                    className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white ${

                      isHovered ? "z-30 shadow-2xl" : "shadow-lg"

                    }`}

                  >

                    {/* Video */}



                    <div className="relative aspect-video w-full bg-black">

                      {isHovered ? (

                        <iframe

                          className="h-full w-full"

                          src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&controls=1&playsinline=1&rel=0`}

                          title={video.title}

                          allow="autoplay; encrypted-media; picture-in-picture"

                          allowFullScreen

                        />

                      ) : (

                        <div className="relative h-full w-full">

                          <img

                            src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}

                            alt={video.title}

                            className="h-full w-full object-cover"

                          />



                          <div className="absolute inset-0 bg-black/20" />



                          <div className="absolute inset-0 flex items-center justify-center">

                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-xl">

                              <span className="ml-1 text-2xl text-black">

                                ▶

                              </span>

                            </div>

                          </div>

                        </div>

                      )}

                    </div>



                    {/* Title */}



                    <div className="p-5">

                      <h4 className="text-lg font-semibold text-black">

                        {video.title}

                      </h4>



                      <p className="mt-1 text-sm text-gray-500">

                        WikiClub Tech

                      </p>

                    </div>

                  </motion.div>

                </div>

              );

            })}

          </div>

        </div>



        {/* ================================================== */}

        {/* SHORTS & REELS SHELF */}

        {/* ================================================== */}



        <div className="mb-20">

          <div className="mb-7 flex items-end justify-between">

            <div>

              <h3 className="text-2xl font-bold text-black md:text-3xl">

                Shorts & Reels

              </h3>



              <p className="mt-1 text-sm text-gray-500">

                Quick moments from WikiClub Tech

              </p>

            </div>



            <span className="hidden text-sm text-gray-400 sm:block">

              Scroll →

            </span>

          </div>



          {/* Horizontal shelf */}



          <div className="relative">

            <div className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-hide">

              {/* ================================================== */}

              {/* YOUTUBE SHORTS */}

              {/* ================================================== */}



              {shortVideos.map((video, index) => {

                const isHovered = hoveredVideo === video.videoId;



                return (

                  <div

                    key={`${video.videoId}-${index}`}

                    className="relative flex-none"

                    onMouseEnter={() => setHoveredVideo(video.videoId)}

                    onMouseLeave={() => setHoveredVideo(null)}

                  >

                    <motion.div

                      animate={{

                        scale: isHovered ? 1.08 : 1,

                      }}

                      transition={{

                        duration: 0.25,

                        ease: "easeOut",

                      }}

                      className={`relative w-[220px] overflow-hidden rounded-2xl border border-gray-200 bg-white sm:w-[240px] ${

                        isHovered ? "z-30 shadow-2xl" : "shadow-lg"

                      }`}

                    >

                      <div className="relative aspect-[9/16] w-full bg-black">

                        {isHovered ? (

                          <iframe

                            className="h-full w-full"

                            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&controls=1&playsinline=1&rel=0`}

                            title={video.title}

                            allow="autoplay; encrypted-media; picture-in-picture"

                            allowFullScreen

                          />

                        ) : (

                          <div className="relative h-full w-full">

                            <img

                              src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}

                              alt={video.title}

                              className="h-full w-full object-cover"

                            />



                            <div className="absolute inset-0 bg-black/20" />



                            <div className="absolute inset-0 flex items-center justify-center">

                              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-xl">

                                <span className="ml-1 text-xl text-black">

                                  ▶

                                </span>

                              </div>

                            </div>



                            <div className="absolute left-3 top-3 rounded-full bg-black/75 px-3 py-1 text-xs font-semibold text-white">

                              SHORT

                            </div>

                          </div>

                        )}

                      </div>



                      <div className="p-4">

                        <h4 className="truncate font-semibold text-black">

                          {video.title}

                        </h4>



                        <p className="mt-1 text-xs text-gray-500">

                          YouTube Short

                        </p>

                      </div>

                    </motion.div>

                  </div>

                );

              })}



              {/* ================================================== */}

              {/* INSTAGRAM REELS */}

              {/* ================================================== */}



              {instagramReels.map((reel, index) => {

                const isHovered = hoveredReel === reel.reelId;



                return (

                  <div

                    key={`${reel.reelId}-${index}`}

                    className="relative flex-none"

                    onMouseEnter={() => setHoveredReel(reel.reelId)}

                    onMouseLeave={() => setHoveredReel(null)}

                  >

                    <motion.div

                      animate={{

                        scale: isHovered ? 1.08 : 1,

                      }}

                      transition={{

                        duration: 0.25,

                        ease: "easeOut",

                      }}

                      className={`relative w-[220px] overflow-hidden rounded-2xl border border-gray-200 bg-white sm:w-[240px] ${

                        isHovered ? "z-30 shadow-2xl" : "shadow-lg"

                      }`}

                    >

                      <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">

                        <iframe

                          className="h-full w-full"

                          src={`https://www.instagram.com/reel/${reel.reelId}/embed`}

                          title={reel.title}

                          scrolling="no"

                          frameBorder="0"

                          allow="autoplay; encrypted-media"

                        />



                        <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/75 px-3 py-1 text-xs font-semibold text-white">

                          REEL

                        </div>

                      </div>



                      <div className="p-4">

                        <h4 className="truncate font-semibold text-black">

                          {reel.title}

                        </h4>



                        <p className="mt-1 text-xs text-gray-500">

                          Instagram Reel

                        </p>

                      </div>

                    </motion.div>

                  </div>

                );

              })}

            </div>

          </div>

        </div>



        {/* ================================================== */}

        {/* PHOTO GALLERY */}

        {/* ================================================== */}



        <div>

          <h3 className="mb-10 text-center text-2xl font-bold text-black md:text-3xl">

            Photo Gallery

          </h3>



          <div className="relative mx-auto h-[300px] w-full max-w-5xl sm:h-[400px] md:h-[480px]">

            {visibleImages.map(({ image, index, position }) => {

              const isCenter = position === "center";



              return (

                <motion.div

                  key={`${index}-${position}`}

                  drag={isCenter ? "x" : false}

                  dragConstraints={{

                    left: 0,

                    right: 0,

                  }}

                  dragElastic={0.25}

                  onDragEnd={(_, info) => {

                    if (info.offset.x < -30) {

                      setActiveIndex(nextIndex);

                    } else if (info.offset.x > 30) {

                      setActiveIndex(previousIndex);

                    }

                  }}

                  onClick={() => {

                    if (!isCenter) {

                      setActiveIndex(index);

                    }

                  }}

                  animate={{

                    scale: isCenter ? 1 : 0.78,

                    opacity: isCenter ? 1 : 0.55,

                    filter: isCenter ? "blur(0px)" : "blur(5px)",

                    x:

                      position === "left"

                        ? "-140%"

                        : position === "right"

                          ? "65%"

                          : "-50%",

                    zIndex: isCenter ? 20 : 10,

                  }}

                  transition={{

                    duration: 0.45,

                    ease: "easeInOut",

                  }}

                  className={`absolute top-0 h-full w-[65%] overflow-hidden rounded-2xl ${

                    isCenter

                      ? "cursor-grab active:cursor-grabbing"

                      : "cursor-pointer"

                  }`}

                  style={{

                    left: position === "right" ? "auto" : "50%",

                    right: position === "right" ? "0" : "auto",

                    touchAction: isCenter ? "pan-y" : "auto",

                  }}

                >

                  <Image

                    src={image.src}

                    alt={image.alt || "WikiClub Tech gallery image"}

                    fill

                    unoptimized

                    sizes="(max-width: 768px) 80vw, 65vw"

                    className="pointer-events-none select-none object-cover"

                    draggable={false}

                  />



                  {isCenter && (

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  )}

                </motion.div>

              );

            })}

          </div>



          <p className="mt-8 text-center text-sm text-gray-600">

            Drag the center image left or right to explore, or click a side image

            to select it.

          </p>



          <p className="mt-2 text-center text-sm text-gray-500">

            {activeIndex + 1} / {totalImages}

          </p>

          <div className="mt-10 flex justify-center">

            <Link

              href="/gallery"

              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800"

            >

              See More

            </Link>

          </div>

        </div>

      </div>

    </section>

  );

}
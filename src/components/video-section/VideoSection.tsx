// VideoSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaPlay } from "react-icons/fa"; // Import the React Icon
import { X } from "lucide-react";

const VideoSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="relative h-[70vh] flex items-center justify-center overflow-hidden"
      aria-label="Promotional Video Section" // Aria label for the section
    >
      {/* Background Image */}
      <Image
        src="/bg-video-image.jpg"
        alt="Background image of a courthouse" // More descriptive alt text for context
        layout="fill"
        objectFit="cover"
        aria-hidden="true" // Background image is decorative, hide from screen readers
      />

      {/* Content Overlay */}
      <div className="relative z-10 text-white text-center">
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTitle className="sr-only">Video Section</AlertDialogTitle>
          <AlertDialogTrigger asChild>
            <Button
              variant="ghost"
              className="p-4 rounded-full bg-black/50 hover:bg-black/70 h-28 w-28"
              aria-label="Play promotional video about our legal services" // Aria label for the play button
            >
              {/* Use the React Icon */}
              <FaPlay aria-hidden="true" />{" "}
              {/* Hide the icon itself, label is on the button */}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent
            className="sm:max-w-[800px] w-full max-h-[90vh]"
            aria-labelledby="video-dialog-title" // Aria-labelledby for the dialog content
          >
            <AlertDialogHeader>
              <AlertDialogTitle id="video-dialog-title" className="sr-only">
                Promotional Video{" "}
                {/* Visually hidden title for screen readers */}
              </AlertDialogTitle>
            </AlertDialogHeader>
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/0dlSKTJkMkY?si=TghkZwGmyLGQxklT" // Replace with your YouTube video ID
                title="Promotional Video of Law Firm Services" // More descriptive iframe title
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel
                className="fixed right-0 -top-14 hover:bg-gray-300"
                aria-label="Close video"
              >
                {" "}
                {/* Aria label for cancel button */}
                <X aria-hidden="true" />{" "}
                {/* Hide the icon itself, label is on the button */}
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  );
};

export default VideoSection;

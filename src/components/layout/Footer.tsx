// src/components/layout/Footer.tsx
import { Github, Linkedin, Mail, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from "next/image";
import { LeetCodeIcon } from '../icons/LeetCodeIcon';




// Official X (formerly Twitter) icon (Simple Icons)
const TwitterXIcon = (props: React.ComponentProps<'svg'>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.95.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.723 0-4.932 2.21-4.932 4.93 0 .39.045.765.127 1.124-4.094-.205-7.725-2.166-10.159-5.144-.424.724-.666 1.562-.666 2.475 0 1.708.869 3.214 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.697 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417-1.68 1.318-3.809 2.103-6.102 2.103-.395 0-.787-.023-1.174-.067 2.168 1.394 4.74 2.209 7.507 2.209 9.009 0 13.932-7.46 13.932-13.93 0-.213-.005-.425-.014-.637.96-.694 1.8-1.56 2.46-2.548l-.047-.02z" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <div className="flex justify-center space-x-4 mb-4">
          {/* GitHub */}
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/Saniya95" target="_blank" aria-label="GitHub" className="text-muted-foreground hover:text-primary transform hover:scale-125 transition-all duration-200">
              <Github className="h-5 w-5" />
            </Link>
          </Button>

          {/* LinkedIn */}
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/saniyaahmed095/" target="_blank" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transform hover:scale-125 transition-all duration-200">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          
          
  {/* LeetCode (standalone link + img) */}
  <Link
        href="https://leetcode.com/u/saniya95/"
        target="_blank"
        aria-label="LeetCode"
        className="group inline-flex items-center justify-center p-2 text-muted-foreground hover:text-primary transform hover:scale-125 transition-all duration-200 rounded"
      >
        <img
          src="/leetcode(1).svg"
          alt="LeetCode"
             className="h-5 object-contain filter-none  transition duration-200
             group-hover:filter          
             group-hover:brightness-0   /* turn the colored SVG to black */
                       group-hover:invert         /* then invert black → white */"
        />
      </Link>

          {/* Email */}
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:saniyaahmed.pr@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary transform hover:scale-125 transition-all duration-200">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>

          {/* X (formerly Twitter)
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://x.com" target="_blank" aria-label="X" className="text-muted-foreground hover:text-primary transform hover:scale-125 transition-all duration-200">
              <TwitterXIcon className="h-5 w-5" />
            </Link>
          </Button> */}
        </div>
        <p className="text-sm">
          &copy; {currentYear} Saniya Ahmed. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Built with Next.js, Tailwind CSS, and Firebase.
        </p>
      </div>
    </footer>
  );
}

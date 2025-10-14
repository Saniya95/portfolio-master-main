// src/components/layout/Header.tsx
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const allNavItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  // { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const dropdownVariants = {
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const listItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};


const AnimatedIconToggle = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="relative h-6 w-6">
      <motion.div
        className="absolute h-[2px] w-5 bg-primary"
        style={{ top: '8px' }}
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 3 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute h-[2px] w-5 bg-primary"
        style={{ top: '14px' }}
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -3 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </div>
  );
};


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [openSheet, setOpenSheet] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center group">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary mr-2.5 shrink-0 h-auto"
              style={{ width: '22px' }}
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6"/>
            </svg>
            <div className="flex flex-col" style={{ lineHeight: '1.15' }}>
              <span className="gradient-text font-bold text-xl tracking-tight vertical-center">Portfolio</span>
              {/* <span className="text-primary/80 font-medium text-[0.6rem] tracking-wider uppercase mt-0.5">sharma</span> */}
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <motion.div
              initial={false}
              animate={isNavOpen ? 'open' : 'closed'}
              className="relative"
            >
              <Button
                variant="ghost"
                onClick={() => setNavOpen(!isNavOpen)}
                className="relative z-20 flex items-center gap-2 px-3 hover:bg-primary/10"
                aria-label="Toggle Navigation Menu"
              >
                <span className="font-medium text-sm">Menu</span>
                <AnimatedIconToggle isOpen={isNavOpen} />
              </Button>

              <AnimatePresence>
                {isNavOpen && (
                  <motion.ul
                    variants={dropdownVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="absolute top-full right-0 mt-3 w-48 origin-top-right rounded-xl bg-card/90 p-2 shadow-2xl backdrop-blur-md ring-1 ring-border/50"
                  >
                    {allNavItems.map((item) => (
                      <motion.li key={item.label} variants={listItemVariants}>
                        <Button
                          variant="ghost"
                          asChild
                          onClick={() => setNavOpen(false)}
                          className="w-full justify-start px-3 py-2 text-base font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                        >
                          <Link href={item.href}>{item.label}</Link>
                        </Button>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Sheet open={openSheet} onOpenChange={setOpenSheet}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-md">
                <nav className="flex flex-col space-y-2 pt-8">
                  {allNavItems.map((item) => (
                     <Button
                      key={item.label}
                      variant="ghost"
                      asChild
                      className="text-lg justify-start w-full"
                      onClick={() => setOpenSheet(false)}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

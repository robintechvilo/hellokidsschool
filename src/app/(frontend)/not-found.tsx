import Link from "next/link";
import { Blocks, Cloud, Star } from "@/components/ui/Decor";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky to-sky-light">
      <Cloud className="absolute left-4 top-10 w-40" />
      <Cloud className="absolute right-6 top-28 w-28 animate-float-slow" />
      <Star className="absolute left-[30%] top-16 size-7 text-yellow animate-float" />
      <div className="container-x relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-display text-[7rem] font-bold leading-none sm:text-[10rem]">
          <span className="text-red">4</span><span className="text-green">0</span><span className="text-pink">4</span>
        </p>
        <h1 className="mt-2 text-3xl font-bold text-navy sm:text-5xl">Oops! This page went out to play.</h1>
        <p className="mt-4 max-w-md text-lg text-ink/75">We couldn&apos;t find the page you were looking for. Let&apos;s go back to class!</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-orange">Back to Home</Link>
          <Link href="/contact" className="btn btn-navy">Contact Us</Link>
        </div>
        <Blocks className="mt-10 w-24" />
      </div>
    </section>
  );
}

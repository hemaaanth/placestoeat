import Link from "@/components/Link";

export default function Footer() {
  return (
    <footer className="z-10 flex items-baseline w-full px-4 py-2 mt-auto text-white gap-x-1 bg-mcqueen">
      Curated by
      <Link
        href="https://twitter.com/hemaaanth"
      >Hemanth Soni,</Link>
      code forked from
      <Link
        href="https://placestoread.xyz"
        isExternal
      >Mitul Shah
      </Link>
    </footer>
  );
}

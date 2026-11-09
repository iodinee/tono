import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Waitlist() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    return () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };
  }, []);

  return (
    <main className="voice-theme fixed inset-0 h-[100dvh] w-screen overflow-hidden bg-background pt-24">
      <Button asChild variant="voice" className="fixed left-4 top-4 z-50 h-11 px-5 text-base sm:left-6 sm:top-6">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}>
          <ArrowLeft aria-hidden="true" />
          Back
        </Link>
      </Button>
      <iframe
        src="https://tally.so/r/2jENbA?transparentBackground=1"
        width="100%"
        height="100%"
        title="Tono waitlist"
        className="block h-full w-full border-0"
      />
    </main>
  );
}
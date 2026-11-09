import { motion } from "framer-motion";

const imgSparklePink = "/images/d1900bb633828b5f083acf134975649dfb4dc629.svg";
const imgEllipse7 = "/images/8b9a354c470d993df59a559e865c54bdb1aa638d.svg";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/lovable.dev/",
    ariaLabel: "Tono on Instagram",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07ZM12 6.85a5.15 5.15 0 1 0 0 10.3 5.15 5.15 0 0 0 0-10.3Zm0 8.5a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7Zm6.55-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-black pt-12 sm:pt-14 lg:pt-24 pb-32 px-6 lg:px-0">
      <div className="container mx-auto max-w-[1152px]">
        <div className="flex flex-col gap-12 sm:gap-14 lg:gap-24">
          {/* Top Content */}
          <div className="flex flex-col md:flex-row justify-between gap-8 sm:gap-10 lg:gap-12">
            {/* Left Side */}
            <div className="flex flex-col gap-5 sm:gap-6 max-w-full md:max-w-[320px] relative pt-16 sm:pt-20 lg:pt-24">
              <div className="absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24">
                <motion.svg
                  className="absolute -left-[32px] -top-[32px] w-[96px] h-[96px]"
                  viewBox="0 0 132 132"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, rotate: 360 }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.5 },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <defs>
                    <path
                      id="footerCirclePath"
                      d="M 66, 66 m -32, 0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
                    />
                  </defs>
                  <text className="fill-[#F9D4F4] font-sans text-[8px] uppercase tracking-[0.275em]">
                    <textPath href="#footerCirclePath" startOffset="0%">
                      AUDIO • TRANSFORM • PUBLISH • AUDIO • TRANSFORM • PUBLISH •
                    </textPath>
                  </text>
                </motion.svg>

                <motion.div
                  className="absolute top-[16px] left-[16px] -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 z-20 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <img alt="" className="w-full h-full" src={imgSparklePink} />
                </motion.div>
              </div>

              <p className="text-sm sm:text-base leading-6 sm:leading-7 text-white opacity-75">
                Turning the chaos of spoken word into the clarity of written thought.
              </p>
              <div className="flex gap-2 items-center text-[#F9D4F4]">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <svg
                      role="img"
                      aria-label={social.label}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>

            </div>
          </div>

          {/* Divider */}
          <div className="bg-[#242424] h-px w-full" />

          {/* Bottom Content */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-16">
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-4">
              <p className="text-sm sm:text-base text-white opacity-75 text-center">
                © 2026 Tono Inc. All rights reserved.
              </p>
            </div>

            {/* Large Logo */}
            <p
              className="w-full text-center font-display font-bold leading-none text-[28vw] lg:text-[360px] tracking-tight text-transparent"
              style={{ WebkitTextStroke: "4px #ff8f73" }}
            >
              tono
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

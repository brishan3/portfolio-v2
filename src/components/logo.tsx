import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "group flex items-center gap-2 text-sm font-semibold font-display uppercase tracking-[0.22em] transition-transform duration-500 ease-out hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className
      )}
    >
      <div className="relative size-14 shrink-0">
        <div
          aria-hidden
          className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:group-hover:opacity-0"
        >
          <div className="absolute inset-0 animate-[spin_2.4s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,transparent_0%,var(--color-primary)_22%,transparent_44%,var(--color-primary)_66%,transparent_88%)] motion-reduce:animate-none" />
        </div>

        <div className="absolute inset-[2px] flex items-center justify-center overflow-hidden rounded-full border bg-card text-primary shadow-sm transition-[background-color,border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[0.98] group-hover:border-primary/25 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25 motion-reduce:group-hover:scale-100">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 translate-x-[-120%] skew-x-12 bg-linear-to-r from-transparent via-primary-foreground/20 to-transparent opacity-0 transition-[transform,opacity] duration-700 group-hover:translate-x-[120%] group-hover:opacity-100 motion-reduce:group-hover:translate-x-[-120%] motion-reduce:group-hover:opacity-0"
          />

          <span className="relative flex items-center font-bold text-lg font-mono tracking-tighter">
            <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-x-1 motion-reduce:group-hover:translate-x-0">
              B
            </span>
            <span className="mx-px inline-block origin-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-[28deg] group-hover:scale-110 motion-reduce:group-hover:rotate-0 motion-reduce:group-hover:scale-100">
              /
            </span>
            <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0">
              K
            </span>
          </span>
        </div>
      </div>

      <span className="hidden overflow-hidden sm:inline">
        <span className="inline-block transition-[transform,letter-spacing,color] duration-500 ease-out group-hover:translate-x-0.5 group-hover:text-primary group-hover:tracking-[0.3em] motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:tracking-[0.22em]">
          Brishan King
        </span>
      </span>
    </div>
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("size-7 w-7", className)}
      viewBox="0 0 71 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M61.25 1.625L70.75 1.5625C70.75 4.77083 70.25 7.79167 69.25 10.625C68.2917 13.4583 66.8958 15.9583 65.0625 18.125C63.2708 20.25 61.125 21.9375 58.625 23.1875C56.1667 24.3958 53.4583 25 50.5 25C46.875 25 43.6667 24.2708 40.875 22.8125C38.125 21.3542 35.125 19.2083 31.875 16.375C29.75 14.4167 27.7917 12.8958 26 11.8125C24.2083 10.7292 22.2708 10.1875 20.1875 10.1875C18.0625 10.1875 16.25 10.7083 14.75 11.75C13.25 12.75 12.0833 14.1875 11.25 16.0625C10.4583 17.9375 10.0625 20.1875 10.0625 22.8125L0 22.9375C0 19.6875 0.479167 16.6667 1.4375 13.875C2.4375 11.0833 3.83333 8.64583 5.625 6.5625C7.41667 4.47917 9.54167 2.875 12 1.75C14.5 0.583333 17.2292 0 20.1875 0C23.8542 0 27.1042 0.770833 29.9375 2.3125C32.8125 3.85417 35.7708 5.97917 38.8125 8.6875C41.1042 10.7708 43.1042 12.3333 44.8125 13.375C46.5625 14.375 48.4583 14.875 50.5 14.875C52.6667 14.875 54.5417 14.3125 56.125 13.1875C57.75 12.0625 59 10.5 59.875 8.5C60.7917 6.5 61.25 4.20833 61.25 1.625Z"
        fill="none"
        strokeWidth={0.5}
        stroke="currentColor"
      />
    </svg>
  );
};

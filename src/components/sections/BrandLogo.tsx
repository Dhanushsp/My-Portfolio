export function BrandLogo() {
  return (
    <span className="flex items-center gap-2 sm:gap-2.5">
      <span className="relative flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary sm:h-6 sm:w-6">
        <span className="absolute left-1/2 top-0 h-full w-1/2 rounded-r-full bg-primary" />
      </span>
      <span className="text-base font-semibold tracking-tight sm:text-lg">Dominic</span>
    </span>
  );
}

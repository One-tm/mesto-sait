import { BookingButton } from "@/components/BookingButton";

export function MobileBookingBar() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/92 px-3 pb-[calc(env(safe-area-inset-bottom)+10px)] pt-3 shadow-[0_-10px_30px_rgba(37,77,67,0.12)] backdrop-blur-xl lg:hidden">
        <BookingButton label="Записаться" size="sm" className="w-full [&>a]:min-w-0 [&>a]:flex-1" />
      </div>
      <div className="h-24 lg:hidden" aria-hidden />
    </>
  );
}

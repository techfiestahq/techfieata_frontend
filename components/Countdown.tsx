"use client";
import React, { useEffect, useMemo, useState } from "react";

type CountdownProps = {
  target: Date | string | number;
  onComplete?: () => void;
  className?: string;
};

type TimeLeft = {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: Date | string | number): TimeLeft {
  const t = new Date(target).getTime();
  const now = Date.now();
  const diff = Math.max(0, t - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { total: diff, days, hours, minutes, seconds };
}

const Countdown: React.FC<CountdownProps> = ({
  target,
  onComplete,
  className = "",
}) => {
  const targetDate = useMemo(() => new Date(target), [target]);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(targetDate)
  );

  useEffect(() => {
    const tick = () => {
      setTimeLeft((prev) => {
        const next = getTimeLeft(targetDate);
        // fire once when hitting zero
        if (prev.total > 0 && next.total === 0 && onComplete) onComplete();
        return next;
      });
    };
    // initial sync + interval
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate, onComplete]);

  const Item = ({
    value,
    label,
  }: {
    value: number | string;
    label: string;
  }) => (
    <div className="flex flex-col items-center">
      <div className="tabular-nums text-5xl md:text-[64px] font-light text-white">
        {typeof value === "number" ? String(value).padStart(2, "0") : value}
      </div>
      <div className="mt-2 text-lg md:text-2xl font-medium text-white">
        {label}
      </div>
    </div>
  );

  return (
    <section
      className={`w-full pt-5 pb-20 bg-[#000000] ${className}`}
      aria-live="polite"
    >
      <div className="mx-auto max-w-5xl px-4">
        <h3 className="mb-8 sm:mb-10 text-center text-[#FFFFFF] text-lg lg:text-2xl font-normal">
          Count every minutes with us
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 place-items-center">
          <Item value={timeLeft.days} label="Days" />
          <Item value={timeLeft.hours} label="Hours" />
          <Item value={timeLeft.minutes} label="Minutes" />
          <Item value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;

import { type ReactNode } from "react";

export function Card({
  title,
  children,
  href,
}: {
  title: string;
  children?: ReactNode;
  href: string;
}) {
  return (
    <a
      className="ui-group ui-rounded-lg ui-border ui-px-5 ui-py-4 ui-transition-colors hover:ui-border-cyan-700 hover:ui-bg-cyan-400/30"
      href={`${href}?utm_source=create-turbo&utm_medium=with-tailwind&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2 className="ui-mb-3 ui-text-2xl ui-font-semibold ui-text-red-500">
        {title}{" "}
        <span className="ui-inline-block ui-transition-transform group-hover:ui-translate-x-1 motion-reduce:ui-transform-none">
          -&gt;
        </span>
      </h2>
      <p className="ui-m-0 ui-max-w-[30ch] ui-text-sm ui-opacity-50">
        {children && children}
      </p>
    </a>
  );
}

import React, { JSX } from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <div>{children}</div>;
}

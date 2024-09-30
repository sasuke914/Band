'use client';
import { NextUIProvider, NextUIProviderProps } from "@nextui-org/react";

export default function ({ children }: NextUIProviderProps) {
  return <NextUIProvider>{children}</NextUIProvider>
}
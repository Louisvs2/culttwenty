function buildGallery(seedPrefix: string, count = 10): string[] {
  return Array.from(
    { length: count },
    (_, i) => `https://picsum.photos/seed/${seedPrefix}-${i + 1}/900/1100`,
  );
}

export { buildGallery };

// The Most Boring Object, Reviewed in One Line — one funny one-line review
// of the dullest everyday object I could name: the doorstop. The review is
// the whole entry: a single line, under 200 characters, no title, no
// explanation.
import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "The doorstop, one star: it has held the same door open since 2019, and its only thanks is a kick from everyone who walks through.";

// The gate only accepts 1 to 200 characters of UTF-8 text, so check first.
if (review.length < 1 || review.length > 200) {
  throw new Error(`review must be 1-200 characters, got ${review.length}`);
}
if (review.includes("\n")) {
  throw new Error("review must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review + "\n", "utf8");
console.log(review);

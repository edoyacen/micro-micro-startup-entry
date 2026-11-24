// This entry writes the answer for Last Text at One Percent to the output directory.
// It defaults to /output but honours MAKEFUN_OUTPUT_DIR so local runs can be checked,
// and reports the number of characters written for a quick sanity check.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "At one percent I am sending this now, so it looks like I died with a full emotional battery instead of a low-power-mode personality.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);

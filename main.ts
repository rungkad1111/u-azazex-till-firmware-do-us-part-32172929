// Till Firmware Do Us Part entry: writes one robot wedding vow.
// The grader provides /output; MAKEFUN_OUTPUT_DIR redirects it for local runs.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const vow =
  "I vow to love you in every version, even the update that forgets my name at 98%, and to keep choosing you after every reboot, till firmware do us part.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

writeFileSync(join(outputDir, "entry.txt"), vow, "utf8");

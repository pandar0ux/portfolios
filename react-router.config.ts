import type { Config } from "@react-router/dev/config";

import { getBasename } from "./site-path";

export default {
  basename: getBasename(),
  ssr: true,
} satisfies Config;

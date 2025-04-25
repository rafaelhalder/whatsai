import { app } from "@/app";
import { env } from "@/env";

app.listen(
  env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
  console.log(`Environment: ${env.NODE_ENV}`);
});
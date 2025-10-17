"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("@/app");
const env_1 = require("@/env");
app_1.app.listen(env_1.env.PORT, () => {
    console.log(`Server is running on port ${env_1.env.PORT}`);
    console.log(`Environment: ${env_1.env.NODE_ENV}`);
});

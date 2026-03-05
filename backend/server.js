// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// dotenv.config();
// import userRoutes from './routes/userRoutes.js';
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const app=express();

// app.use(cors({
//   origin: 'https://code-orbit-scj0.onrender.com',
//   credentials: true
// }));
// app.use(express.json());
// app.use('/api/user', userRoutes);

// app.use(express.static(path.join(__dirname, '../frontend/dist')));
// const resolvedPath = path.resolve(__dirname, '../frontend/dist/index.html');
// //console.log("✅ Path to index.html:", resolvedPath);

// app.get('*', (req, res) => {
//   // console.log("✅ Wildcard route reached");
//   res.sendFile(resolvedPath);
// });

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected");
//     app.listen(process.env.PORT, () =>
//       console.log(`Server running on port ${process.env.PORT}`)
//     );
//   })
//   .catch(err => console.error(err));



// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import userRoutes from "./routes/userRoutes.js";
// import path from "path";
// import { fileURLToPath } from "url";

// dotenv.config();

// const app = express();


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",      
//       "https://code-ascend.onrender.com" 
//     ],
//     credentials: true
//   })
// );


// app.use(express.json());


// app.use("/api/user", userRoutes);


// app.use(express.static(path.join(__dirname, "../frontend/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
// });


// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected");

//     const PORT = process.env.PORT || 5000;

//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//   });


// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import userRoutes from "./routes/userRoutes.js";
// import path from "path";
// import { fileURLToPath } from "url";

// dotenv.config();

// const app = express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // CORS configuration
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://code-ascend.onrender.com"
//     ],
//     credentials: true
//   })
// );

// // handle preflight requests
// app.options("*", cors());

// app.use(express.json());

// // routes
// app.use("/api/user", userRoutes);

// // serve frontend
// app.use(express.static(path.join(__dirname, "../frontend/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
// });

// // database connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected");

//     const PORT = process.env.PORT || 5000;

//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//   });



import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

// Needed for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",                 // local frontend
      "https://code-orbit-scj0.onrender.com"   // deployed frontend/backend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

// Handle preflight requests
app.options("*", cors());

// Middleware
app.use(express.json());

// Routes
app.use("/api/user", userRoutes);

// Serve frontend build (for deployment)
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
# Step by Step to run This Project on a Local Machine

## 1. ✅ Install Required Tools
### Make sure Node &  npm installed on Local Machine and you can verify installation by:
   
   ``` 
   node -v
   npm -v
   ```

## ✅ Install Git on Local Machine
  ```
  npm install git
```
## 2.  ✅ Clone Backend Repository
   
   ```
   git clone https://github.com/ramaalibonga/node-express-restful-api.git
   ```
## 3. ✅ Install Required Library

   ```
   npm install express mongoose bcryptjs jsonwebtoken
   ```
## 4.✅  Verify Installation

```
   "dependencies": {
  "express": "^4.19.2",
  "mongoose": "^8.x.x",
  "bcryptjs": "^2.4.3",
  "jsonwebtoken": "^9.x.x"
}
```

## 5.  ✅ Basic Setup Example (Express + MongoDB + JWT)
###  server.js
```

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Test route
app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

## 6. ✅ Common Additional Installs (Recommended)

```
"scripts": {
  "dev": "nodemon server.js",
  "start": "node server.js"
}
```


  

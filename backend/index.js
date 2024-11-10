// express server
const express = require('express');
const routes = require('./routes');
const authRoute = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const applicationsRouter = require('./routes/applications');
const uploadRouter = require('./routes/uploadRoutes');
const authenticateToken = require('./middleware/auth');

const app = express();
const port = 3000;



// Enable CORS for all routes
app.use(cors());

// Middlewares
app.use(bodyParser.json());
app.use(express.json());



app.use('/uploads', express.static('uploads'));
// Applications route

// Unprotected routes
app.use('/auth', authRoute);

// Protected routes (currently deactivated)
app.use('/api', routes);


app.use('/applications', applicationsRouter);
app.use('/files', uploadRouter); // 添加文件上传路由

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

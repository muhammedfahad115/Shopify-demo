const express = require('express');
const timersRouter = require('./routes/api/timers');

const app = express();
app.use(express.json());

app.use('/api', timersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

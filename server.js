const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>Docker commands recap</h2>
          <h3>Hello</h3>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Docker Commands</label>
            <input type="text" name="goal">
          </div>
          <button>Commands</button>
        </form>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

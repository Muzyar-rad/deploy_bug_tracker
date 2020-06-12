const app = express();
const mongoose = require("mongoose");

const server = app.listen(port, () => {
  console.log(`connected to ${port}`);
});

module.exports = function() {
  const db = config.get("db");
  mongoose.connect("db").then(() => console.log(`Connected to ${db}`));
};

exports.db = db;
exports.db = function(app) {
  app.use(cors());
};

app.use(express.json());

const router = express.Router();

router.post("/", async (req, res) => {
  let priority = new Priority({ name: req.body.name });
  priority = await priority.save();

  res.send(priority);
});

router.put("/:id", async (req, res) => {
  const priority = await Priority.findByIdAndUpdate(req.params.id, {
    name: req.body.name
  });
  res.status(200).send("successfull");
});

const prioritySchema = new mongoose.schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 40
  }
});

const Priority = mongoose.model("Priority", prioritySchema);

module.exports = Priority;

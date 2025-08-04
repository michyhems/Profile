const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: String,
    source: String,
    gitRepo: String,
    description: String,
    imageSource: String,
});
module.exports = mongoose.model("Projects", projectSchema);

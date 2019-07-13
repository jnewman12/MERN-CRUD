var mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var Post = require('./post');

const SALT_ROUNDS = 6;

var userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, required: true, lowercase: true, unique: true },
    password: String,
    posts: [Post.schema]
  },
  {
    timestamps: true
  }
);

userSchema.set("toJSON", {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

userSchema.pre("save", function(next) {
  const user = this;
  if (!user.isModified("password")) return next();
  // password has been modified, so let's hash it!
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model('User', userSchema);

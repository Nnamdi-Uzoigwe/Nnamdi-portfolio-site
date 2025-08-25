import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true,
      trim: true,
      maxlength: 100
    },
    brief: { 
      type: String, 
      required: true,
      maxlength: 200
    },
    timeframe: { 
      type: String, 
      required: true 
    },
    githubLink: { 
      type: String,
      validate: {
        validator: function(v) {
          return v === '' || /^(https?:\/\/)?(www\.)?github\.com\/.+/i.test(v);
        },
        message: 'Please provide a valid GitHub URL'
      }
    },
    liveUrl: { 
      type: String,
      validate: {
        validator: function(v) {
          return v === '' || /^(https?:\/\/)?(www\.)?/.test(v);
        },
        message: 'Please provide a valid URL'
      }
    },
    tools: { 
      type: [String], 
      required: true 
    },
    overview: { 
      type: String, 
      required: true 
    },
    images: [{
      url: {
        type: String,
        required: true
      },
      public_id: {
        type: String,
        required: true
      }
    }],
    // You can use the automatically created timestamps instead of dateAdded
    // Mongoose will automatically add createdAt and updatedAt fields
  },
  { 
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function(doc, ret) {
        // Convert _id to id and remove _id and __v
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  }
);

// Virtual for formatted dateAdded (if you need it as a string)
projectSchema.virtual('dateAdded').get(function() {
  return this.createdAt.toLocaleDateString();
});

const Project = mongoose.model("Project", projectSchema);
export default Project;
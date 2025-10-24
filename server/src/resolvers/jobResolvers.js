import { Job } from "../models/Job.js";

export const jobResolvers = {
  Query: {
    getJobs: async (_, __, context) => {
      if (!context.userId) throw new Error("Unauthorized");

      const jobs = await Job.find({ createdBy: context.userId }).sort({
        createdAt: -1,
      });
      // convert createdAt to readable ISO string for each job
      return jobs.map((job) => ({
        ...job._doc,
        id: job._id.toString(),
        createdAt: job.createdAt.toISOString(),
      }));
    },

    getJob: async (_, { id }, context) => {
      if (!context.userId) throw new Error("Unauthorized");
      const job = await Job.findOne({ _id: id, createdBy: context.userId });
      if (!job) throw new Error("Job not found");

      return {
        ...job._doc,
        id: job._id.toString(),
        createdAt: job.createdAt.toISOString(),
      };
    },
  },

  Mutation: {
    addJob: async (_, { company, position, status }, context) => {
      if (!context.userId) throw new Error("Unauthorized");

      const job = new Job({
        company,
        position,
        status,
        createdBy: context.userId,
      });

      await job.save();
      return {
        ...job._doc,
        id: job._id.toString(),
        createdAt: job.createdAt.toISOString(),
      };
    },

    updateJob: async (_, { id, company, position, status }, context) => {
      if (!context.userId) throw new Error("Unauthorized");

      const job = await Job.findOneAndUpdate(
        { _id: id, createdBy: context.userId },
        { company, position, status },
        { new: true }
      );

      if (!job) throw new Error("Job not found");

      return {
        ...job._doc,
        id: job._id.toString(),
        createdAt: job.createdAt.toISOString(),
      };
    },

    deleteJob: async (_, { id }, context) => {
      if (!context.userId) throw new Error("Unauthorized");

      const job = await Job.findOneAndDelete({
        _id: id,
        createdBy: context.userId,
      });
      if (!job) throw new Error("Job not found");
      return true;
    },
  },
};

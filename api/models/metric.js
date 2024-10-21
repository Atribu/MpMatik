import mongoose from  'mongoose';

const metricSchema = new mongoose.Schema({
  name: String,
  dataPoints: [
    {
      timestamp: Date,
      value: Number,
    },
  ],
});

//module.exports = mongoose.model('Metric', MetricSchema);
const Metric = mongoose.model("metric",metricSchema);
export default Metric;

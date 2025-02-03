import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'xj91wqgi', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: true,
  token: 'skGDzlP82YsiNKM0ZnBU0cJS5sMNrUW6CI9jKYyy6w8p5Wh2M9xhLtS9f73CwdXrpnotWLiE3XvfGTKz7RtvMUVxa4srOkRANRLQTiJK3dVVWyX3agHLEAoOgZkpJHrPUP2DhpCko5DgLrkXz1r2oBPnIPOgHgTxcoWo9mCk0Fv0maOAwm6h', // Replace with your Sanity API token
});

export default client;

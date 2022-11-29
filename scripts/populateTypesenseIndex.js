require("dotenv").config();

const Typesense = require("typesense");

const BASE_IMAGE_PATH = "https://image.tmdb.org/t/p/w300";

module.exports = (async () => {
  const TYPESENSE_CONFIG = {
    nodes: [
      {
        host: "localhost",
        port: "8108",
        protocol: "http",
      },
    ],
    apiKey: "xyz",
  };

  console.log("Config: ", TYPESENSE_CONFIG);

  const typesense = new Typesense.Client(TYPESENSE_CONFIG);

  const schema = {
    name: "business",
    num_documents: 0,
    fields: [
      {
        name: "market_stall",
        type: "float",
        facet: false,
      },
      {
        name: "id",
        type: "float",
        facet: false,
      },
      {
        name: "country",
        type: "string",
        facet: false,
      },
      {
        name: "sector",
        type: "string[]",
        facet: true,
      },
      {
        name: "business",
        type: "string",
        facet: true,
      },
      {
        name: "market_capitalization",
        type: "float",
        facet: true,
      },
    ],
    default_sorting_field: "market_capitalization",
  };

  const business = require("./data/business.json");

  try {
    const collection = await typesense.collections("business").retrieve();
    console.log("Found existing collection of business");
    console.log(JSON.stringify(collection, null, 2));

    if (collection.num_documents !== business.length) {
      console.log("Collection has different number of documents than data");
      console.log("Deleting collection");
      await typesense.collections("business").delete();
    }
  } catch (err) {
    console.error(err);
  }

  console.log("Creating schema...");
  console.log(JSON.stringify(schema, null, 2));

  await typesense.collections().create(schema);

  console.log("Populating collection...");

  try {
    const returnData = await typesense
      .collections("business")
      .documents()
      .import(business);

    console.log("Return data: ", returnData);
  } catch (err) {
    console.error(err);
  }
})();

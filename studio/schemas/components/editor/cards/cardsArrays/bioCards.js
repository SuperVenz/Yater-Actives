export default {
  name: "bioCards",
  title: "Bio cards",
  type: "object",
  fields: [
    {
      name: "cardArray",
      title: "Card Array",
      type: "array",
      of: [{ type: "bioCard" }],
    },
  ],
};

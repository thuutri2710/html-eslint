const { RULE_CATEGORY } = require("../constants");

const MESSAGE_IDS = {
  WARNING_USE_FETCH_PRIORITY:
    "Consider use `fetchPriority=true` for img element if it's largest in page",
};

/**
 * @type {Rule}
 */
module.exports = {
  meta: {
    type: "code",

    docs: {
      description:
        "Consider use `fetchPriority=true` for img element if it's largest in viewport of page. The `fetchPriority` attribute is used to indicate that the element should be fetched with high priority.",
      category: RULE_CATEGORY.BEST_PRACTICE,
      recommended: true,
    },

    fixable: null,
    schema: [
      {
        type: "object",
        properties: {
          substitute: {
            type: "array",
            items: {
              type: "string",
            },
          },
        },
      },
    ],
    messages: {
      [MESSAGE_IDS.WARNING_USE_FETCH_PRIORITY]:
        "Consider use `fetchPriority=true` for img element if it's largest in page",
    },
  },

  create(context) {
    const imgNodes = [];
    let isFirstImgTag = true;

    return {
      Program(node) {
        travelNode(node, (node) => {
          if (node.type !== "Tag" || node.name !== "img") {
            return;
          }

          imgNodes.push(node);
          const hasHighFetchPriorityAttribute =
            imgNodes.filter((imgNode) =>
              imgNode.attributes.find(
                (attr) =>
                  attr.key.value === "fetchPriority" &&
                  attr.value.value === "high"
              )
            ).length > 0;

          if (!hasHighFetchPriorityAttribute && isFirstImgTag) {
            context.report({
              node: {
                loc: {
                  start: imgNodes[0].openStart.loc.start,
                  end: imgNodes[0].openEnd.loc.end,
                },
                range: [
                  imgNodes[0].openStart.range[0],
                  imgNodes[0].openEnd.range[1],
                ],
              },
              messageId: MESSAGE_IDS.WARNING_USE_FETCH_PRIORITY,
            });
          }

          isFirstImgTag = false;
        });
      },
    };
  },
};

function travelNode(node, callback) {
  callback(node);

  if (node.children && node.children.length) {
    node.children.forEach((child) => travelNode(child, callback));
  }
}

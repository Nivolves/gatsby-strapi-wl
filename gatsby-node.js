/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-var-requires */
const crypto = require(`crypto`);
const path = require('path');

const DefaultTemlate = path.resolve('./src/templates/default.tsx');

const digest = data => {
  return crypto
    .createHash(`md5`)
    .update(JSON.stringify(data))
    .digest(`hex`);
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNode } = actions;
  if (node.internal.type === 'StrapiDefaultpages') {
    createNode({
      ...node,
      id: `${node.id}-markdown`,
      parent: node.id,
      children: [],
      internal: {
        type: 'DefaultPage',
        mediaType: 'text/markdown',
        content: node.content,
        contentDigest: digest(node),
      },
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  await graphql(`
    {
      allDefaultPage {
        nodes {
          link
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    const {
      data: {
        allDefaultPage: { nodes },
      },
    } = result;

    nodes.forEach(({ link, childMarkdownRemark: { html } }) => {
      createPage({
        path: link,
        component: DefaultTemlate,
        context: { html },
      });
    });
  });
};

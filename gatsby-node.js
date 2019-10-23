/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-var-requires */
const crypto = require(`crypto`);
const path = require('path');

const BlogTemlate = path.resolve('./src/templates/blog.tsx');
const DefaultTemlate = path.resolve('./src/templates/default.tsx');

const digest = data => {
  return crypto
    .createHash(`md5`)
    .update(JSON.stringify(data))
    .digest(`hex`);
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNode } = actions;
  const {
    internal: { type },
  } = node;

  const nodeCreating = nodeType => {
    createNode({
      ...node,
      id: `${node.id}-markdown`,
      parent: node.id,
      children: [],
      internal: {
        type: nodeType,
        mediaType: 'text/markdown',
        content: node.content,
        contentDigest: digest(node),
      },
    });
  };

  switch (type) {
    case 'StrapiArticle':
      nodeCreating('Article');
      break;
    case 'StrapiDefaultpages':
      nodeCreating('DefaultPage');
      break;
    case 'StrapiTabs':
      nodeCreating('Tabs');
      break;
    default:
      break;
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  await graphql(`
    {
      defaultPages: allDefaultPage {
        nodes {
          link
          childMarkdownRemark {
            html
          }
        }
      }
      blogPages: allStrapiBlogpage {
        nodes {
          link
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    const {
      data: {
        defaultPages: { nodes },
        blogPages: { nodes: blogPagesNodes },
      },
    } = result;

    nodes.forEach(({ childMarkdownRemark: { html }, link }) => {
      createPage({
        path: link,
        component: DefaultTemlate,
        context: { html, link },
      });
    });
    blogPagesNodes.forEach(({ link }) => {
      createPage({
        path: link,
        component: BlogTemlate,
        context: { link },
      });
    });
  });
};

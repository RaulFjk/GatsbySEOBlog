const fetch = require("node-fetch");
const React = require('react');
const Layout = require('./src/components/layout').default

exports.wrapPageElement = ({element, props}) => {
    return <Layout {...props}>{element}</Layout>

}

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
    /**
     * @type {any[]} headComponents
     */
    const headComponents = getHeadComponents();

    headComponents.sort((a, b) => {
        if (a.props && a.props["data-react-helmet"]) {
            return 0;
        }
        return 1;
    });
    replaceHeadComponents(headComponents);
};
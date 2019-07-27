import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact} from '../utils';
import Link from '../components/Link';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <h1>{this.props.pageContext.frontmatter.title}</h1>
              {htmlToReact(_.get(this.props, 'pageContext.html'))}
              <Link {...this.props} page={this.props.pageContext} site={this.props.pageContext.site} classes={'button inverse'} />
            </Layout>
        );
    }
}

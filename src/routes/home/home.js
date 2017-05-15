/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../../components/Link';

class Home extends React.Component {

  render() {
    return (
      <div className="Home">
        <div>
          <h1>React.js News</h1>
          <Link to="/admin">Admin</Link>
        </div>
      </div>
    );
  }
}

export default Home;

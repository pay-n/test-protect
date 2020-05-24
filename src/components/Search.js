import React from 'react';
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import {
    SearchProvider,
    SearchBox,
    Results
} from '@elastic/react-search-ui';
import { Layout } from '@elastic/react-search-ui-views';

const connector = new AppSearchAPIConnector({
    searchKey: "search-371auk61r2bwqtdzocdgutmg",
    engineName: "search-ui-examples",
    hostIdentifier: "host-2376rb"
});

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
        <SearchProvider
            config={{
                apiConnector: connector
            }}
        >
      <div className="App">
        <Layout
          header={<SearchBox />}
          bodyContent={<Results titleField="title" urlField="nps_link" />}
        />
      </div>
    </SearchProvider>
    );
  }
}

export default Search;

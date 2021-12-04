// ---Dependencys
import {ReactElement, Fragment} from 'react';
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';
// ---Pages
import HomePage from 'Pages/HomePage';
import Error404Page from 'Pages/Error404Page';

/**Note: It's important to keep the 'Fragment' for the sitemap generation */
function Routes(props: RouteComponentProps): ReactElement {
  const { pathname, search: urlParams } = props.location;
  const currentPath = pathname
  console.log('Router pathname: ', pathname);
  console.log('Router urlParams: ', urlParams);
  
  return(
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="*" component={Error404Page} />
      </Switch>
    </Fragment>
  )
}

export default withRouter(Routes);
import React, {} from "react"
import {Link} from "react-router";
import "../../www/css/style.css"
import Icon from "./Icon"
import ICONS from "../utils/icons"
import Main from "../pages/Main"

export class Layout extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        { this.props.children }
      </div>
    )
  }
}

export class PlainLayout extends React.Component {
  render() {
    return (
      <Layout className="plain layout">
        { this.props.children }
      </Layout>
    )
  }
}

export class MainLayout extends React.Component {
  
  render() {

    // console.log('this.props = ', this.props);
    // let {index} = this.props;
    let endpoint = this.props.location ? this.props.location.pathname.split('/')[1] : '404';
    // console.log('endpoint = ', endpoint);

    return (
      <Layout className="layout">
          <header>
            <div className="wrap">
              <h1>
                <Link to="/" className="">Beautify</Link>
              </h1>
              <nav>
                <ul>
                  <li>
                    {/* <Link to="/index" className={endpoint === null || endpoint === '' || endpoint === 'index' ? 'active' : ''}>Index</Link> */}
                  </li>
                </ul>
              </nav>
              <ul className="contacts">
                <li>
                  <a href="mailto:zamong99@gmail.com" target="_blank">
                    <Icon name="email" icon={ICONS['EMAIL']}/>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/redpeanut/tools" target="_blank">
                    <Icon name="github" icon={ICONS['GITHUB']}/>
                  </a>
                </li>
              </ul>
            </div>
          </header>
          { this.props.children ? this.props.children : <Main/> }
          <footer>
            <div className="wrap">
              <p>© 2023 by 김진규. All right reserved.</p>
            </div>
          </footer>
      </Layout>
    )
  }
}

export default MainLayout
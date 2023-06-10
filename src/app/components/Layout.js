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
                <Link to="/" className="">
                  {/* <span className="material-symbols-outlined">
                    tools_pliers_wire_stripper
                  </span> */}
                  <span className="">Tools</span>
                </Link>
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
                  <a className="" href="#" title="Buy a coffee">
                    <span className="material-symbols-outlined">
                      local_cafe
                    </span>
                  </a>
                </li>
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
          <footer className="container py-3">
            <div className="row">
              <div className="col-6 col-md">
                <h5>Beautifier</h5>
                <ul className="list-unstyled text-small">
                  <li><a className="text-muted" href="#">HTML</a></li>
                  <li><a className="text-muted" href="#">툴이름이들어갑니다.</a></li>
                  <li><a className="text-muted" href="#">툴이름이들어갑니다.</a></li>
                  <li><a className="text-muted" href="#">툴이름이들어갑니다.</a></li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <h5>Minifier</h5>
                <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">HTML</a></li>
                  <li><a className="text-muted" href="#">툴이름이들어갑니다.</a></li>
                  <li><a className="text-muted" href="#">툴이름이들어갑니다.</a></li>
                  <li><a className="text-muted" href="#">툴이름이들어갑니다.</a></li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <h5>카테고리명이들어갑니다.</h5>
                <ul className="list-unstyled text-small">
                  <li><a className="text-muted" href="#">툴이름이들어갑니다.</a></li>
                  <li><a className="text-muted" href="#">툴이름이들어갑니다.</a></li>
                  <li><a className="text-muted" href="#">툴이름이들어갑니다.</a></li>
                  <li><a className="text-muted" href="#">툴이름이들어갑니다.</a></li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <h5>카테고리명이들어갑니다</h5>
                <ul className="list-unstyled text-small">
                  <li><a className="text-muted" href="#">툴이름이들어갑니다.</a></li>
                  <li><a className="text-muted" href="#">툴이름이들어갑니다.</a></li>
                  <li><a className="text-muted" href="#">툴이름이들어갑니다.</a></li>
                  <li><a className="text-muted" href="#">툴이름이들어갑니다.</a></li>
                </ul>
              </div>
            </div>
          </footer>
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

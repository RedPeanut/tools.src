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
            <nav className="navbar navbar-expand-md navbar-light bg-light rounded fixed-top">
              <a className="navbar-brand" href="#">
                Tools
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Beautifier</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                      <a className="dropdown-item" href="#">HTML</a>
                      <a className="dropdown-item" href="#">툴이름</a>
                      <a className="dropdown-item" href="#">툴이름</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Minifier</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown02">
                      <a className="dropdown-item" href="#">HTML</a>
                      <a className="dropdown-item" href="#">툴이름</a>
                      <a className="dropdown-item" href="#">툴이름</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">메뉴명</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown03">
                      <a className="dropdown-item" href="#">툴이름</a>
                      <a className="dropdown-item" href="#">툴이름</a>
                      <a className="dropdown-item" href="#">툴이름</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">메뉴명</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown04">
                      <a className="dropdown-item" href="#">툴이름</a>
                      <a className="dropdown-item" href="#">툴이름</a>
                      <a className="dropdown-item" href="#">툴이름</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </header>

          {/* <header>
            <div className="wrap">
              <h1>
                <Link to="/" className="">
                  <span className="material-symbols-outlined">
                    tools_pliers_wire_stripper
                  </span>
                  <span className="">Tools</span>
                </Link>
              </h1>
              <nav>
                <ul>
                  <li>
                    <Link to="/index" className={endpoint === null || endpoint === '' || endpoint === 'index' ? 'active' : ''}>Index</Link>
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
                    <Icon name="Email" icon={ICONS['EMAIL']}/>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/redpeanut/tools" target="_blank">
                    <Icon name="Github" icon={ICONS['GITHUB']}/>
                  </a>
                </li>
              </ul>
            </div>
          </header> */}
          { this.props.children ? this.props.children : <Main/> }
          <footer className="container-fluid py-3">
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

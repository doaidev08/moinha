import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import TopMenu from './components/menu/TopMenu.js';
import Header from './components/header/Header.js';
import Main from './components/main/Main.js';
import Footer from './components/footer/Footer.js';
export default class App extends Component{
  render(){
    return(
      <div>
          <TopMenu/>
          <Header/>
          <Main vitri1="order-lg-2" vitri2="order-lg-1" image="assets/img/01.jpg" title="tiêu đề 1" content="đây là nội dung đoạn 1"/>
          <Main vitri1="order-lg-1" vitri2="order-lg-2" image="assets/img/02.jpg" title="tiêu đề 2" content="đây là nội dung đoạn 2"/>
          <Main vitri1="order-lg-2" vitri2="order-lg-1" image="assets/img/03.jpg" title="tiêu đề 3" content="đây là nội dung đoạn 3"/>
          <Footer/>
      </div>
    );
  }
}

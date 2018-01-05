import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import styles from './about.css';


class About extends React.Component  {

  render (){

    
    
    const style = {
      general: {
        display: 'flex',
        width:'50%',
        fontFamily: 'Inconsolata',
        justifyContent: 'left',
        marginLeft:'25%',
        color: '#484AB3',
        backgroundColor: 'F9F7EE',
        marginBottom:'5%'
      },
      header: {
        fontFamily: 'Raleway',
        width:'100%',
        color: '#549fb8',
        color:'#f9f7ee',
        fontSize: '4rem'
      },
      blurb:{
        color:'#484AB3',
        color:'#f9f7ee',
        fontSize: '1.5rem',
        lineHeight: '2rem',
        letterSpacing: '0.05rem',
        display:'block',
        marginBottom:'50px',
        fontFamily: 'archivo narrow',
        fontWeight:200,
        width:'80%'
      },
      link: {
        color: '#484AB3'
      },
      img: {
       marginTop:'10px',
       width:'528px'
      },
      code: {
        width: '100%',
        fontSize: '21px',
        background: 'rgb(249, 247, 238)',
        fontFamily: 'archivo narrow',
        fontWeight: '100',
        minWidth:'520px',
        color:'rgb(84, 159, 184)'
      },
      outerCode: {
        padding:'4%',
        width:'524px',
        background: 'rgb(249, 247, 238)',
        color:'rgb(84, 159, 184)'
      },
      innerCode :{
        width: '120%',
        fontSize: '21px',
        padding: '5%',
        background: 'rgb(249, 247, 238)',
        fontFamily: 'archivo narrow',
        fontWeight: '100',
        color:'rgb(84, 159, 184)'
      }
    }

    return(
      <div className={styles.grid} style={style.general}>
      
      

        <h1 style={style.header}>How To Use</h1>

        <div style={style.blurb}>
        Firstly, install the package<br/>
        <pre style={style.innerCode}>➜  musicali git:(dev) ✗ npm install swirl-layout</pre>
       </div>

        <div style={style.blurb}>Secondly import into your project<br/>

        <pre style={style.innerCode}>import Layout from 'swirl-layout';</pre>
        </div>

        <div style={style.blurb}>Thirdly, include the Layout component in your render method<br/>
        <pre style={style.innerCode}>{`<Layout links={links} colour={colour}/>`}</pre></div>
        {/* <img style={style.img} src="https://s3.eu-west-2.amazonaws.com/io1937/screenshots/include.jpeg"/><br/></div> */}

        <div style={style.blurb}>Fourth, pass it your links and a colour for the swirl<br/>
        <pre style={style.outerCode}>
          <code style={style.code}>{`const links = [`}</code><br/>
          <code style={style.code}>{`  { path: "/", title: "home", key: 1 },`}</code><br/>
          <code style={style.code}>{`  { path: "/about", title: "about", key: 2 }`}</code><br/>
          <code style={style.code}>{`];`}</code>
        </pre>
        <pre style={style.outerCode}>
          <code style={style.code}>{`const colour = 'pink'`}</code><br/>
          </pre>
        
        </div>

        <div style={style.blurb}>Full example code at <a href="https://github.com/cerico/swirl">https://github.com/cerico/swirl</a><br/>
        <div style={style.blurb}>GitHub README is  <a href="https://github.com/cerico/swirl/blob/master/README.md">here</a></div>
        </div>
      </div> 
    )
  }
}


export default About

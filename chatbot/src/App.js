import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
//mui
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import {Tabs, Tab} from 'material-ui/Tabs';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';

import MobileTearSheet from './MobileTearSheet.js';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';

//images
import hasura2 from './hasura-2.png';
import hasura from './hasura..jpg';
import hasura_dp from './hasura_dp.jpg';
import pic from './pic.jpg';
import phoenix from './phoenix_red.png';
import oneplus from './oneplus.jpg';
import oneplusPhone from './oneplusPhone.jpg';
import demiLovato from './demiLovato.jpg';
import google from './google.jpg';
import mrRobot from './mrRobot.jpg';
import mkbhd_dp from './mkbhd_dp.jpg';
import mkbhd1 from './mkbhd1.jpg';
import mrrobot1 from './mrrobot1.jpg';
import mrrobot2 from './mrrobot2.jpg';
import people from './people.png';





class App extends React.Component {

  constructor() {
   super();
   this.state = {tweets:120,followers:58,following:27,searchBorder:'1px solid grey',searchHeight:'30px'}
 };
  handleSearchHeight=()=>{
    this.setState({searchHeight:'90px'});
  };

    handleChangeSingle = (event, value) => {
      this.setState({
        valueSingle: value
      });
    };

      render() {

        var style = { height: 245, width: 275,  margin: 10, fontFamily:'Helvetica Neue',fontSize:30, display:'inline-block'}
        var nav={
          display: 'inline-block',paddingTop:10, paddingBottom : 10, paddingLeft : 2, paddingRight : 50, margin : 10
        }
        var name={
          backgroundColor: '#ffffff', width: 275, height: 100, color: '#0750c4',fontWeight:900,fontSize:20
        }
        const BirdIcon = (props) => (
           <SvgIcon viewBox={'0 0 612 612'} style={{marginLeft:185,height:40,width:40,marginTop:10}} >
           <g><g>
           	<g>
           		<path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411    c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513    c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101    c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104    c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194    c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485    c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z" data-original="#010002" class="active-path" data-old_color="#ffffff" fill="#ffffff"/>
           	</g>
           </g></g>
           </SvgIcon>
           );
        const ProfileIcon = () => (
          <SvgIcon viewBox={'0 0 59 59'} style={{height:50,width :50,marginTop:0}} >
          <g transform="matrix(0.860058 0 0 0.860058 4.12827 8.42857)"><g>
            <path style={{fill:'#ECF0F1'}} d="M18.613,42.552l-7.907,4.313c-0.464,0.253-0.881,0.564-1.269,0.903C14.047,51.655,19.998,54,26.5,54   c6.454,0,12.367-2.31,16.964-6.144c-0.424-0.358-0.884-0.68-1.394-0.934l-8.467-4.233c-1.094-0.547-1.785-1.665-1.785-2.888v-3.322   c0.238-0.271,0.51-0.619,0.801-1.03c1.154-1.63,2.027-3.423,2.632-5.304c1.086-0.335,1.886-1.338,1.886-2.53v-3.546   c0-0.78-0.347-1.477-0.886-1.965v-5.126c0,0,1.053-7.977-9.75-7.977s-9.75,7.977-9.75,7.977v5.126   c-0.54,0.488-0.886,1.185-0.886,1.965v3.546c0,0.934,0.491,1.756,1.226,2.231c0.886,3.857,3.206,6.633,3.206,6.633v3.24   C20.296,40.899,19.65,41.986,18.613,42.552z" data-original="#ECF0F1" class=""/>
            <g>
              <path style={{fill:'#38D8F4'}} d="M26.953,1.004C12.32,0.754,0.254,12.414,0.004,27.047C-0.138,35.344,3.56,42.801,9.448,47.76    c0.385-0.336,0.798-0.644,1.257-0.894l7.907-4.313c1.037-0.566,1.683-1.653,1.683-2.835v-3.24c0,0-2.321-2.776-3.206-6.633    c-0.734-0.475-1.226-1.296-1.226-2.231v-3.546c0-0.78,0.347-1.477,0.886-1.965v-5.126c0,0-1.053-7.977,9.75-7.977    s9.75,7.977,9.75,7.977v5.126c0.54,0.488,0.886,1.185,0.886,1.965v3.546c0,1.192-0.8,2.195-1.886,2.53    c-0.605,1.881-1.478,3.674-2.632,5.304c-0.291,0.411-0.563,0.759-0.801,1.03V39.8c0,1.223,0.691,2.342,1.785,2.888l8.467,4.233    c0.508,0.254,0.967,0.575,1.39,0.932c5.71-4.762,9.399-11.882,9.536-19.9C53.246,13.32,41.587,1.254,26.953,1.004z" data-original="#556080" class="" data-old_color="#0091FF"/>
            </g>
            <g>
              <circle style={{fill:'#3C9EAF'}} cx="47" cy="46" r="12" data-original="#71C386" class="" data-old_color="#45838E"/>
              <path style={{fill:'#FFFFFF'}} d="M53,45h-5v-5c0-0.552-0.448-1-1-1s-1,0.448-1,1v5h-5c-0.552,0-1,0.448-1,1s0.448,1,1,1h5v5    c0,0.552,0.448,1,1,1s1-0.448,1-1v-5h5c0.552,0,1-0.448,1-1S53.552,45,53,45z" data-original="#FFFFFF" class="active-path"/>
            </g>
          </g></g> </SvgIcon>
        );
        const ExpandIcon = (props) => (
           <SvgIcon viewBox={'0 0 129 129'} style={{height:10,width:10}}>
           <g><g>
               <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#657786"/>
             </g></g>
           </SvgIcon>
            );
        const BellIcon = (props) => (
          <SvgIcon viewBox={'0 0 512 512'} /*style={{height:38,width :38}}*/ >
          <g><g>
          	<g>
          		<path d="M467.812,431.851l-36.629-61.056c-16.917-28.181-25.856-60.459-25.856-93.312V224c0-67.52-45.056-124.629-106.667-143.04    V42.667C298.66,19.136,279.524,0,255.993,0s-42.667,19.136-42.667,42.667V80.96C151.716,99.371,106.66,156.48,106.66,224v53.483    c0,32.853-8.939,65.109-25.835,93.291l-36.629,61.056c-1.984,3.307-2.027,7.403-0.128,10.752c1.899,3.349,5.419,5.419,9.259,5.419    H458.66c3.84,0,7.381-2.069,9.28-5.397C469.839,439.275,469.775,435.136,467.812,431.851z" data-original="#000000" class="active-path" style={{ fill:'#ffffff'}} data-old_color="#ffffff"/>
          	</g>
          </g><g>
          	<g>
          		<path d="M188.815,469.333C200.847,494.464,226.319,512,255.993,512s55.147-17.536,67.179-42.667H188.815z" data-original="#000000" class="active-path" data-old_color="#ffffff" fill="#ffffff"/>
          	</g>
          </g></g> </SvgIcon>
        );
        const HomeIcon = (props) => (
          <SvgIcon viewBox={'0 0 39.414 39.414'} /*style={{height:38,width :38}}*/ >
          <g><g>
          	<path d="M39.11,19.94c-0.379,0.606-1.03,0.939-1.697,0.939c-0.362,0-0.729-0.098-1.059-0.304l-2.807-1.752   c0.058,0.277,0.075,0.566,0.006,0.857l-3,12.383c-0.218,0.897-1.021,1.529-1.944,1.529h-4.568v-7.096   c0-2.185-1.939-3.953-4.333-3.953c-2.393,0-4.333,1.771-4.333,3.953v7.096h-4.569c-0.923,0-1.727-0.632-1.944-1.529l-3-12.383   c-0.07-0.291-0.052-0.58,0.005-0.857L3.06,20.576c-0.937,0.587-2.171,0.3-2.756-0.639c-0.585-0.938-0.3-2.17,0.637-2.756   L18.648,6.124c0.648-0.404,1.471-0.404,2.12,0l17.707,11.058C39.411,17.77,39.695,19.003,39.11,19.94z" data-original="#000000" class="active-path" data-old_color="#ffffff" fill="#ffffff"/>
          </g></g> </SvgIcon>
        );
        const ChatIcon = (props) => (
          <SvgIcon viewBox={'0 0 16.087 16.087'} /*style={{height:38,width :38}}*/ >
          <g><g>
          	<g>
          		<path d="M6.5,3.478c-3.59,0-6.5,2.238-6.5,5c0,1.354,0.701,2.585,1.839,3.485    c-0.066,0.918-0.287,2.041-0.927,2.646c1.274,0,2.576-0.798,3.399-1.422c0.684,0.188,1.42,0.291,2.189,0.291    c3.59,0,6.5-2.237,6.5-5C13,5.716,10.09,3.478,6.5,3.478z" data-original="#000000" class="active-path" data-old_color="#ffffff" fill="#ffffff"/>
          		<path d="M15.14,8.965C15.687,8.234,16,7.384,16,6.478c0-2.762-2.91-5-6.5-5    c-1.58,0-3.028,0.434-4.154,1.154C5.876,2.532,6.43,2.478,7,2.478c3.866,0,7,2.463,7,5.5c0,1.197-0.485,2.306-1.312,3.207    c0.821,0.624,2.125,1.424,3.399,1.424C15.181,11.749,15.116,9.843,15.14,8.965z" data-original="#000000" class="active-path" data-old_color="#ffffff" fill="#ffffff"/>
          	</g>
          </g></g></SvgIcon>
        );
        const ErrorIcon = (props) => (
          <SvgIcon viewBox={'0 0 51.976 51.976'} style={{height:15,width:15}} >
          <g><g>
          	<path d="M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0   C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778   c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828   c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828   l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z" data-original="#000000" class="active-path" data-old_color="#C4BCBC" fill="#BFB7B7"/>
          </g></g>
          </SvgIcon>
        );
        const HeartIcon = (props) => (
          <SvgIcon viewBox={'0 0 512 512'} hoverColor='#c41328' color="#657786">
          <g><g>
            <g>
              <path d="M474.644,74.27C449.391,45.616,414.358,29.836,376,29.836c-53.948,0-88.103,32.22-107.255,59.25    c-4.969,7.014-9.196,14.047-12.745,20.665c-3.549-6.618-7.775-13.651-12.745-20.665c-19.152-27.03-53.307-59.25-107.255-59.25    c-38.358,0-73.391,15.781-98.645,44.435C13.267,101.605,0,138.213,0,177.351c0,42.603,16.633,82.228,52.345,124.7    c31.917,37.96,77.834,77.088,131.005,122.397c19.813,16.884,40.302,34.344,62.115,53.429l0.655,0.574    c2.828,2.476,6.354,3.713,9.88,3.713s7.052-1.238,9.88-3.713l0.655-0.574c21.813-19.085,42.302-36.544,62.118-53.431    c53.168-45.306,99.085-84.434,131.002-122.395C495.367,259.578,512,219.954,512,177.351    C512,138.213,498.733,101.605,474.644,74.27z M309.193,401.614c-17.08,14.554-34.658,29.533-53.193,45.646    c-18.534-16.111-36.113-31.091-53.196-45.648C98.745,312.939,30,254.358,30,177.351c0-31.83,10.605-61.394,29.862-83.245    C79.34,72.007,106.379,59.836,136,59.836c41.129,0,67.716,25.338,82.776,46.594c13.509,19.064,20.558,38.282,22.962,45.659    c2.011,6.175,7.768,10.354,14.262,10.354c6.494,0,12.251-4.179,14.262-10.354c2.404-7.377,9.453-26.595,22.962-45.66    c15.06-21.255,41.647-46.593,82.776-46.593c29.621,0,56.66,12.171,76.137,34.27C471.395,115.957,482,145.521,482,177.351    C482,254.358,413.255,312.939,309.193,401.614z" data-original="#000000" class="active-path" data-old_color="#000000" />
            </g>
          </g></g>
          </SvgIcon>
        );
        const ReplyIcon = (props) => (
          <SvgIcon viewBox={'0 0 511.626 511.627'} hoverColor={cyan500} color="#657786">
          <g><g>
          	<path d="M477.364,127.481c-22.839-28.072-53.864-50.248-93.072-66.522c-39.208-16.274-82.036-24.41-128.479-24.41   c-46.442,0-89.269,8.136-128.478,24.41c-39.209,16.274-70.233,38.446-93.074,66.522C11.419,155.555,0,186.15,0,219.269   c0,28.549,8.61,55.299,25.837,80.232c17.227,24.934,40.778,45.874,70.664,62.813c-2.096,7.611-4.57,14.842-7.426,21.7   c-2.855,6.851-5.424,12.467-7.708,16.847c-2.286,4.374-5.376,9.23-9.281,14.555c-3.899,5.332-6.849,9.093-8.848,11.283   c-1.997,2.19-5.28,5.801-9.851,10.848c-4.565,5.041-7.517,8.33-8.848,9.853c-0.193,0.097-0.953,0.948-2.285,2.574   c-1.331,1.615-1.999,2.419-1.999,2.419l-1.713,2.57c-0.953,1.42-1.381,2.327-1.287,2.703c0.096,0.384-0.094,1.335-0.57,2.854   c-0.477,1.526-0.428,2.669,0.142,3.429v0.287c0.762,3.234,2.283,5.853,4.567,7.851c2.284,1.992,4.858,2.991,7.71,2.991h1.429   c12.375-1.526,23.223-3.613,32.548-6.279c49.87-12.751,93.649-35.782,131.334-69.094c14.274,1.523,28.074,2.283,41.396,2.283   c46.442,0,89.271-8.135,128.479-24.414c39.208-16.276,70.233-38.444,93.072-66.517c22.843-28.072,34.263-58.67,34.263-91.789   C511.626,186.154,500.207,155.555,477.364,127.481z M445.244,292.075c-19.896,22.456-46.733,40.303-80.517,53.529   c-33.784,13.223-70.093,19.842-108.921,19.842c-11.609,0-23.98-0.76-37.113-2.286l-16.274-1.708l-12.277,10.852   c-23.408,20.558-49.582,36.829-78.513,48.821c8.754-15.414,15.416-31.785,19.986-49.102l7.708-27.412l-24.838-14.27   c-24.744-14.093-43.918-30.793-57.53-50.114c-13.61-19.315-20.412-39.638-20.412-60.954c0-26.077,9.945-50.343,29.834-72.803   c19.895-22.458,46.729-40.303,80.515-53.531c33.786-13.229,70.089-19.849,108.92-19.849c38.828,0,75.13,6.617,108.914,19.845   c33.783,13.229,60.62,31.073,80.517,53.531c19.89,22.46,29.834,46.727,29.834,72.802S465.133,269.615,445.244,292.075z" data-original="#000000" class="active-path" data-old_color="#000000"/>
          </g></g>
          </SvgIcon>
        );
        const RetweetIcon = (props) => (
          <SvgIcon viewBox={'0 0 64 64'} hoverColor='green' color="#657786">
          <g><g>
              <g>
                <path d="m15.486,25.515c0.398,0.454 0.952,0.687 1.507,0.687 0.478,0 0.958-0.172 1.345-0.518 0.832-0.75 0.906-2.043 0.165-2.887l-7.488-8.528c-0.014-0.015-0.032-0.021-0.046-0.034-0.029-0.031-0.057-0.06-0.088-0.088-0.016-0.015-0.02-0.033-0.035-0.047-0.073-0.066-0.163-0.09-0.241-0.144-0.093-0.062-0.177-0.142-0.275-0.187-0.037-0.018-0.075-0.027-0.112-0.041-0.108-0.041-0.219-0.052-0.331-0.074-0.108-0.021-0.211-0.057-0.323-0.06-0.021-0.001-0.038-0.012-0.058-0.012s-0.037,0.011-0.058,0.012c-0.112,0.003-0.217,0.038-0.327,0.06-0.112,0.022-0.221,0.033-0.327,0.074-0.037,0.014-0.074,0.023-0.11,0.041-0.101,0.045-0.184,0.124-0.278,0.187-0.08,0.054-0.171,0.078-0.244,0.144-0.016,0.015-0.02,0.034-0.035,0.049-0.03,0.027-0.058,0.056-0.085,0.086-0.014,0.014-0.031,0.02-0.046,0.034l-7.486,8.528c-0.741,0.844-0.666,2.137 0.168,2.887 0.385,0.346 0.863,0.518 1.34,0.518 0.557,0 1.11-0.232 1.509-0.687l3.96-4.511v23.445c0,3.383 2.717,6.134 6.058,6.134h29.14c1.115,0 2.019-0.915 2.019-2.044 0-1.13-0.903-2.045-2.019-2.045h-29.14c-1.115,0-2.02-0.918-2.02-2.045v-23.445l3.961,4.511z" data-original="#000000" class="active-path" data-old_color="#7E6969"/>
                <path d="m60.473,38.652l-3.959,4.51v-23.445c0-3.383-2.718-6.134-6.058-6.134h-28.415c-1.117,0-2.02,0.915-2.02,2.044 0,1.13 0.902,2.045 2.02,2.045h28.415c1.115,0 2.02,0.918 2.02,2.045v23.445l-3.962-4.51c-0.742-0.844-2.016-0.92-2.852-0.168-0.832,0.75-0.906,2.043-0.166,2.886l7.489,8.527c0.012,0.015 0.032,0.019 0.044,0.032 0.029,0.032 0.059,0.062 0.09,0.092 0.014,0.013 0.02,0.031 0.035,0.045 0.095,0.084 0.206,0.125 0.309,0.189 0.033,0.021 0.062,0.048 0.1,0.066 0.047,0.025 0.085,0.07 0.134,0.092 0.018,0.008 0.037,0.01 0.055,0.018 0.241,0.096 0.49,0.151 0.744,0.151 0.251,0 0.504-0.055 0.743-0.151 0.018-0.008 0.037-0.01 0.056-0.018 0.049-0.021 0.086-0.065 0.131-0.09 0.033-0.019 0.059-0.044 0.091-0.062 0.109-0.064 0.226-0.109 0.321-0.195 0.016-0.015 0.02-0.034 0.035-0.049 0.03-0.028 0.058-0.058 0.087-0.088 0.012-0.014 0.031-0.018 0.043-0.032l7.488-8.527c0.74-0.843 0.665-2.136-0.169-2.886-0.835-0.752-2.11-0.675-2.849,0.168z" data-original="#000000" class="active-path" data-old_color="#7E6969" />
              </g>
            </g></g>
          </SvgIcon>
        );
        const EmailIcon = (props) => (
          <SvgIcon viewBox={'0 0 511.999 511.999'} hoverColor='#306ccc' color="#657786">
          <g><g>
          	<g>
          		<path d="M444.253,47.065H67.747c-37.355,0-67.745,30.391-67.745,67.745v282.379c0,37.355,30.39,67.745,67.745,67.745h376.506    c37.355,0,67.745-30.391,67.745-67.745V114.81C511.998,77.455,481.608,47.065,444.253,47.065z M470.634,397.189    c0,14.546-11.835,26.381-26.381,26.381H67.747c-14.546,0-26.381-11.835-26.381-26.381V114.81    c0-14.546,11.835-26.381,26.381-26.381h376.506c14.546,0,26.381,11.835,26.381,26.381V397.189z" data-original="#000000" class="active-path" data-old_color="#000000"/>
          	</g>
          </g><g>
          	<g>
          		<path d="M508.259,102.95c-6.549-9.357-19.443-11.633-28.804-5.083L255.999,254.284L32.544,97.866    c-9.357-6.551-22.253-4.274-28.803,5.083s-4.274,22.253,5.083,28.803L244.14,296.474c3.561,2.493,7.71,3.738,11.86,3.738    c4.149,0,8.299-1.246,11.86-3.738l235.316-164.721C512.533,125.203,514.809,112.307,508.259,102.95z" data-original="#000000" class="active-path" data-old_color="#000000"/>
          	</g>
          </g></g>
          </SvgIcon>
        );
        const RBIcon = (props) => (
          <SvgIcon viewBox={'0 0 490.667 490.667'} style={{height:17,width:17}}>
          <g><g>
          	<g>
          		<path d="M423.531,67.136c-4.16-4.16-10.923-4.16-15.083,0L259.115,216.469c-4.16,4.16-4.16,10.923,0,15.083    c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115L423.531,82.219    C427.691,78.059,427.691,71.296,423.531,67.136z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#1DA1F2"/>
          	</g>
          </g><g>
          	<g>
          		<path d="M416,64c-5.888,0-10.667,4.779-10.667,10.667v128c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667    v-128C426.667,68.779,421.888,64,416,64z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#1DA1F2"/>
          	</g>
          </g><g>
          	<g>
          		<path d="M416,64H288c-5.888,0-10.667,4.779-10.667,10.667S282.112,85.333,288,85.333h128c5.888,0,10.667-4.779,10.667-10.667    S421.888,64,416,64z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#1DA1F2"/>
          	</g>
          </g><g>
          	<g>
          		<path d="M231.531,259.136c-4.16-4.16-10.923-4.16-15.083,0L67.115,408.469c-4.16,4.16-4.16,10.923,0,15.083    c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115l149.333-149.333    C235.691,270.059,235.691,263.296,231.531,259.136z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#1DA1F2"/>
          	</g>
          </g><g>
          	<g>
          		<path d="M74.667,277.333C68.779,277.333,64,282.112,64,288v128c0,5.888,4.779,10.667,10.667,10.667S85.333,421.888,85.333,416V288    C85.333,282.112,80.555,277.333,74.667,277.333z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#1DA1F2"/>
          	</g>
          </g><g>
          	<g>
          		<path d="M202.667,405.333h-128C68.779,405.333,64,410.112,64,416c0,5.888,4.779,10.667,10.667,10.667h128    c5.888,0,10.667-4.779,10.667-10.667C213.333,410.112,208.555,405.333,202.667,405.333z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#1DA1F2"/>
          	</g>
          </g><g>
          	<g>
          		<path d="M458.667,0H32C14.357,0,0,14.357,0,32v426.667c0,17.643,14.357,32,32,32h426.667c17.643,0,32-14.357,32-32V32    C490.667,14.357,476.309,0,458.667,0z M469.333,458.667c0,5.867-4.8,10.667-10.667,10.667H32c-5.867,0-10.667-4.8-10.667-10.667    V32c0-5.867,4.8-10.667,10.667-10.667h426.667c5.867,0,10.667,4.8,10.667,10.667V458.667z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#1DA1F2"/>
          	</g>
          </g></g>
          </SvgIcon>
        );
        const iconButtonElement = (
          <IconButton
            touch={true}
            tooltip="more"
            tooltipPosition="bottom-left"
          >
            <MoreVertIcon color='white' />
          </IconButton>
        );



        return (
        <div className='container'>
          <MuiThemeProvider>
            <AppBar style={{background:'#1DA1F2',height:'60px'}} showMenuIconButton={false} titleStyle={{flex:0}}>
              <Tabs zDepth={4} inkBarStyle={{background:'#ffffff',width:150}} contentContainerStyle={{width:'450px'}}>
                <Tab className='tab' disableTouchRipple={true} style={{background: '#1DA1F2'}} icon={<HomeIcon/>} labelStyle={{textDecoration:'Capitalize'}} label='Home' />
                <Tab className='tab' disableTouchRipple={true} style={{background: '#1DA1F2'}} icon={<BellIcon/>} labelStyle={{textDecoration:'Capitalize'}} label="Notification" />
                <Tab className='tab' disableTouchRipple={true} style={{background: '#1DA1F2'}} icon={<ChatIcon/>} labelStyle={{textDecoration:'Capitalize'}} label="Messages" />
              </Tabs>
              <BirdIcon className='phoenix'/>
              <input className='searchBar' type="text"  placeholder="  Search" />
              <IconMenu style={{marginLeft:50}}  anchorOrigin={{ vertical: 'bottom', horizontal: 'left',}}
                  iconButtonElement={<FlatButton className='profile-icon' style={{borderRadius:'50px',minWidth:'40px',minHeight:'40px',marginTop:'10px'}}/>}
                  onChange={this.handleChangeSingle}
                  value={this.state.valueSingle}
                >
                  <MenuItem value="1" primaryText="Nithika Palanisamy" />
                  <MenuItem value="2" primaryText="Profile" />
                  <MenuItem value="3" primaryText="List" />
                  <MenuItem value="4" primaryText="Moments" />
                  <MenuItem value="5" primaryText="Twitter Ads" />
                  <MenuItem value="6" primaryText="Analytics" />
                  <MenuItem value="7" primaryText="Settings and privacy" />
                  <MenuItem value="8" primaryText="Help Center" />
                  <MenuItem value="9" primaryText="Log out" />
                  <MenuItem value="10" primaryText="Night mode" />
              </IconMenu>
              <FlatButton disableTouchRipple={true} style={{marginLeft:40,marginTop:15,borderRadius:30,height:30,minWidth:80,lineHeight:'0px'}}
                 backgroundColor='#eeeeee' hoverColor='#ffffff' label="Tweet" labelStyle={{color:'#1DA1F2',textTransform:'capitalize'}} primary={false} />
            </AppBar>
        <div style={{display:'inline-block',}}>
          <div  style={{display:'block',paddingLeft:91}}>
            <Paper style={style} zDepth={1} rounded={false}>
              <div style={{backgroundColor: '#1DA1F2', width: 275, height:100}}><img src={pic} style={{ verticalAlign:'middle',marginLeft:10,marginTop:60, border: '3px solid white',borderRadius:50,height:75,width:75}}/>
              </div>
              <div style={{backgroundColor: '#ffffff', width: 275, height: 50}}>
              <br/>
              <div style={{textAlign:'center'}}><a className='profile-name'>Nithika Palanisamy</a>
              <a style={{lineHeight:'8px',paddingLeft:90,fontSize:15,color:'#808080',fontFamily:'Segoe UI' ,display:'flex'}}>@nithika.p</a></div>
              <div className='tff' >
              <a style={{display : 'inline-block',marginLeft:22}}>Tweets</a>
              <a style={{display : 'inline-block',marginLeft:22}}>Following</a>
              <a style={{display : 'inline-block',marginLeft:22}}>Followers</a>
              </div>
              <div className='tffn' >
              <div style={{marginLeft:30}}>{this.state.tweets}</div>
              <div style={{marginLeft:57}}>{this.state.following}</div>
              <div style={{marginLeft:70}}>{this.state.followers}</div>
              </div>
              </div>
            </Paper>
            </div>

            <Paper style={{height: 330, width: 275, marginTop: 10, marginLeft:100, padding:10, fontFamily:'Helvetica Neue', fontSize:30}} zDepth={1} rounded={false}>
                <span className='links' style={{fontFamily: 'Segoe UI',fontWeight:'bold',fontSize:'18px',color:'#000000'}}>Trends for you . <a href='#' style={{fontSize:12,color:'#1DA1F2',fontWeight:'normal'}}>change</a></span>
                <a href='#' className='hash'> #Google Pixel</a>
                <div className='tweet'>2,237 Tweets</div>
                <a href='#' className='hash'>#Microservices</a>
                <div className='tweet'>1,873 Tweets</div>
                <a href='#' className='hash'>#Arjun Reddy</a>
                <div className='tweet'>3,034 Tweets</div>
                <a href='#' className='hash'>#Vijay Devarkonda</a>
                <div className='tweet'>4,558 Tweets</div>
                <a href='#' className='hash'>#MCAtrailer</a>
                <div className='tweet'>1,873 Tweets</div>
                <a href='#' className='hash'>#Chris Gayle</a>
                <div className='tweet'>2,597 Tweets</div>
                <a href='#' className='hash'>#onePlus 5T</a>
                <div className='tweet'>  3,293 Tweets</div>

            </Paper>
          </div>
        <div style={{display:'inline-block',height: 900,position:'absolute'}}>
            <Paper style={{height: 2305,width: 600, margin: 10, display: 'inline-block', fontFamily:'Helvetica Neue', fontSize:12}} zDepth={1} rounded={false}>
              <div style={{height:70,background:'#E8F5FD'}}>
                <img src={pic} style={{ marginLeft:30,marginTop:10,borderRadius:50,height:50,width:50}}/>
                <input onClick={this.handleSearchHeight} className='tweetbox' type="text"  placeholder="What's Happening?"></input>
              </div>
                <div style={{paddingLeft:30,lineHeight:'1px',margin:10}}>
                  <span>
                    <Avatar src={mrRobot} className='avatar'/>
                    <IconButton style={{height:20,width:20,left:'450px'}}><ExpandIcon/></IconButton>
                  </span>
                  <span>
                  <a className='name'>Mr. Robot</a>
                  <a className='userName'>@whoismrrobot . 2h</a>
                  <p className='tweetText'>
                  The Dark Army owns you. Now it&apos;s time to fight back.Enable the Daily Five/Nine Skill for Amazon Alexa here .
                   <a style={{color:'#1DA1F2'}}>#MrRobot</a></p></span>
                  <br/>
                  <img src={mrrobot1} style={{height:300, width:500, border:'1px solid #eeeeee',borderRadius:5,marginLeft:20}} alt="" />
                  <br/>
                  <div>
                    <IconButton  className='c_icons' tooltip="Reply" ><ReplyIcon/></IconButton><a className='c_numbers c_reply'>344</a>
                    <IconButton  className='c_icons' tooltip="Retweet" ><RetweetIcon/></IconButton><a className='c_numbers c_retweet'>3.8k</a>
                    <IconButton  className='c_icons' tooltip="Like" ><HeartIcon/>k</IconButton><a className='c_numbers c_heart'>1k</a>
                    <IconButton  className='c_icons' tooltip="DM" ><EmailIcon/></IconButton>
                  </div>
                </div>
              <hr style={{border:'.25px solid #b8c4d8',height:'.5px'}}/>
              <div style={{paddingLeft:30,lineHeight:'1px',margin:10}}>
                <span>
                  <Avatar src={hasura_dp} className='avatar'/>
                  <IconButton style={{height:20,width:20,left:'450px'}}><ExpandIcon/></IconButton>
                </span>
                <span>
                <a className='name'>Hasura</a>
                <a className='userName'>@hasuraHQ . 4m</a>
                <p className='tweetText'>Get a headstart with our starter kit for python-flask with a sample schema and integration with
                Hasura data APIs! Clone & deploy in 3 simple steps - <a style={{color:'#1DA1F2'}}>https://hasura.io/hub/project/hasura/hello-python-flask
                … #python #flask #appdev #webdev #DevOps #Microservices</a></p></span>
                <br/>
                <img src={hasura} style={{height:300, width:500, border:'1px solid #eeeeee',borderRadius:5,marginLeft:20}} alt="" />
                <br/>
                <div>
                  <IconButton  className='c_icons' tooltip="Reply" ><ReplyIcon/></IconButton><a className='c_numbers c_reply'>344</a>
                  <IconButton  className='c_icons' tooltip="Retweet" ><RetweetIcon/></IconButton><a className='c_numbers c_retweet'>3.8k</a>
                  <IconButton  className='c_icons' tooltip="Like" ><HeartIcon/>k</IconButton><a className='c_numbers c_heart'>1k</a>
                  <IconButton  className='c_icons' tooltip="DM" ><EmailIcon/></IconButton>
                </div>
              </div>
              <hr style={{border:'.25px solid #b8c4d8',height:'.5px'}}/>
                <div style={{paddingLeft:30,lineHeight:'1px',margin:10}}>
                  <span>
                    <Avatar src={mrRobot} className='avatar'/>
                    <IconButton style={{height:20,width:20,left:'450px'}}><ExpandIcon/></IconButton>
                  </span>
                  <span>
                  <a className='name'>Mr. Robot</a>
                  <a className='userName'>@whoismrrobot . 5h</a>
                  <p className='tweetText'>
                  It&apos;s time to finish this fight.<br/>
                  The <a style={{color:'#1DA1F2'}}>#MrRobot</a> season_3.0 Finale starts NOW on <a style={{color:'#1DA1F2'}}>@USA_Network.</a>
                  </p></span>
                  <br/>
                  <img src={mrrobot2} style={{height:300, width:500, border:'1px solid #eeeeee',borderRadius:5,marginLeft:20}} alt="" />
                  <br/>
                  <div>
                    <IconButton  className='c_icons' tooltip="Reply" ><ReplyIcon/></IconButton><a className='c_numbers c_reply'>344</a>
                    <IconButton  className='c_icons' tooltip="Retweet" ><RetweetIcon/></IconButton><a className='c_numbers c_retweet'>3.8k</a>
                    <IconButton  className='c_icons' tooltip="Like" ><HeartIcon/>k</IconButton><a className='c_numbers c_heart'>1k</a>
                    <IconButton  className='c_icons' tooltip="DM" ><EmailIcon/></IconButton>
                  </div>
                </div>
              <hr style={{border:'.25px solid #b8c4d8',height:'.5px'}}/>
              <div style={{paddingLeft:30}}>
                <span>
                   <Avatar src={mkbhd_dp} className='avatar'/>
                   <IconButton style={{height:20,width:20,left:'450px'}}><ExpandIcon/></IconButton>
                 </span>
                 <span>
                 <a className='name'>Marques Brownlee</a>
                 <a className='userName'>@MKBHD . 1h</a>
                 <p className='tweetText'>
                  "Stay in your lane" is one of my least favorite phrases. Nah. Branch out. Change lanes. Change roads. Pave new ones.
                 </p></span>
                 <div>
                   <IconButton  className='c_icons' tooltip="Reply" ><ReplyIcon/></IconButton><a className='c_numbers c_reply'>344</a>
                   <IconButton  className='c_icons' tooltip="Retweet" ><RetweetIcon/></IconButton><a className='c_numbers c_retweet'>3.8k</a>
                   <IconButton  className='c_icons' tooltip="Like" ><HeartIcon/>k</IconButton><a className='c_numbers c_heart'>1k</a>
                   <IconButton  className='c_icons' tooltip="DM" ><EmailIcon/></IconButton>
                 </div>
               </div>
               <hr style={{border:'.25px solid #b8c4d8',height:'.5px'}}/>
               <div style={{paddingLeft:30}}>
                 <span>
                    <Avatar src={hasura_dp} className='avatar'/>
                    <IconButton style={{height:20,width:20,left:'450px'}}><ExpandIcon/></IconButton>
                 </span>
                 <span>
                  <a className='name'>Hasura</a>
                  <a className='userName'>@hasuraHQ . 3h</a>
                  <p className='tweetText'>
                   #3 Hasura helps you increase the productivity of your backend developer team several folds,
                    so that they spend less time per project, and can work on several projects at the same time.
                     Try out a sample project from <a style={{color:'#1DA1F2'}}>http://hasura.io/hub  #appdev #webdev #Developer
                  </a></p></span>
                   <br/>
                   <img src={hasura2} style={{height:300, width:500, border:'1px solid #eeeeee',borderRadius:5,marginLeft:20}} alt="" />
                   <br/>
                   <div>
                     <IconButton  className='c_icons' tooltip="Reply" ><ReplyIcon/></IconButton><a className='c_numbers c_reply'>344</a>
                     <IconButton  className='c_icons' tooltip="Retweet" ><RetweetIcon/></IconButton><a className='c_numbers c_retweet'>3.8k</a>
                     <IconButton  className='c_icons' tooltip="Like" ><HeartIcon/>k</IconButton><a className='c_numbers c_heart'>1k</a>
                     <IconButton  className='c_icons' tooltip="DM" ><EmailIcon/></IconButton>
                   </div>
                </div>
                <hr style={{border:'.25px solid #b8c4d8',height:'.5px'}}/>
           </Paper>
           </div>
           <Paper style={{padding:10,height: 360,width: 285,position:'absolute',left:870,top:77,marginLeft:150,fontFamily:'Helvetica Neue',fontSize:15}} zDepth={1} rounded={false}>
            <div className='links' style={{fontFamily: 'Segoe UI',fontWeight:'bold',fontSize:'18px',color:'#000000'}}>Who to follow . <a href='#' style={{fontSize:12,color:'#1DA1F2',fontWeight:'normal'}}>Refresh</a> . <a href='#' style={{fontSize:12,color:'#1DA1F2',fontWeight:'normal'}}>View all</a></div>
            <br/>
            <div style={{paddingLeft:10,paddingTop:5,display:'flex',alignItems:'top',}}>
               <span>
                  <Avatar src={google} className='avatar'/>
                  <IconButton style={{height:20,width:20,position:'absolute',display:'inline-flex',alignItems:'top',marginLeft:185}}><ErrorIcon/></IconButton>
               </span>
               <span style={{paddingLeft:16}}>
                  <a className='name'>Google</a>
                  <a className='userName'>@google</a>
                  <br/>
               <FlatButton disableTouchRipple={true} style={{position:'relative',borderRadius:30,border:'1px solid #1DA1F2',marginTop:4,height:25,minWidth:80,lineHeight:'0px'}}
               backgroundColor='#ffffff' label="Follow" hoverColor='#E8F5FD' labelStyle={{textAlign:'center',color:'#1DA1F2',textTransform:'capitalize',fontSize:'0.875rem',}} primary={false} />
              </span>
             </div>
             <hr style={{border:'.25px solid #b8c4d8',height:'.5px'}}/>
             <div style={{paddingLeft:10,paddingTop:5,display:'flex',alignItems:'top',}}>
                <span>
                   <Avatar src={oneplus} className='avatar'/>
                   <IconButton style={{height:20,width:20,position:'absolute',display:'inline-flex',alignItems:'top',marginLeft:185}}><ErrorIcon/></IconButton>
                </span>
                <span style={{paddingLeft:16}}>
                   <a className='name'>OnePlus</a>
                   <a className='userName'>@OnePlus</a>
                   <br/>
                <FlatButton disableTouchRipple={true} style={{position:'relative',borderRadius:30,border:'1px solid #1DA1F2',marginTop:4,height:25,minWidth:80,lineHeight:'0px'}}
                backgroundColor='#ffffff' label="Follow" hoverColor='#E8F5FD' labelStyle={{textAlign:'center',color:'#1DA1F2',textTransform:'capitalize',fontSize:'0.875rem',}} primary={false} />
               </span>
              </div>
              <hr style={{border:'.25px solid #b8c4d8',height:'.5px'}}/>
              <div style={{paddingLeft:10,paddingTop:5,display:'flex',alignItems:'top',}}>
                 <span>
                    <Avatar src={mrRobot} className='avatar'/>
                    <IconButton style={{height:20,width:20,position:'absolute',display:'inline-flex',alignItems:'top',marginLeft:185}}><ErrorIcon/></IconButton>
                 </span>
                 <span style={{paddingLeft:16}}>
                    <a className='name'>Mr. Robot</a>
                    <a className='userName'>@Mr.Robot</a>
                    <br/>
                 <FlatButton disableTouchRipple={true} style={{position:'relative',borderRadius:30,border:'1px solid #1DA1F2',marginTop:4,height:25,minWidth:80,lineHeight:'0px'}}
                 backgroundColor='#ffffff' label="Follow" hoverColor='#E8F5FD' labelStyle={{textAlign:'center',color:'#1DA1F2',textTransform:'capitalize',fontSize:'0.875rem',}} primary={false} />
                </span>
               </div>
               <hr style={{border:'.25px solid #b8c4d8',height:'.5px'}}/>
               <div style={{paddingLeft:10,paddingTop:5,display:'flex',alignItems:'top',}}>
                  <span>
                     <Avatar src={demiLovato} className='avatar'/>
                     <IconButton style={{height:20,width:20,position:'absolute',display:'inline-flex',alignItems:'top',marginLeft:185}}><ErrorIcon/></IconButton>
                  </span>
                  <span style={{paddingLeft:16}}>
                     <a className='name'>Demi Lovato</a>
                     <a className='userName'>@ddlovato</a>
                     <br/>
                  <FlatButton disableTouchRipple={true} style={{position:'relative',borderRadius:30,border:'1px solid #1DA1F2',marginTop:4,height:25,minWidth:80,lineHeight:'0px'}}
                  backgroundColor='#ffffff' label="Follow" hoverColor='#E8F5FD' labelStyle={{textAlign:'center',color:'#1DA1F2',textTransform:'capitalize',fontSize:'0.875rem',}} primary={false} />
                 </span>
                </div>
                <hr style={{border:'.25px solid #b8c4d8',height:'.5px'}}/>
                <span style={{padding:10,verticalAlign:'middle',display:'inline-flex'}}><img style={{height:20,width:20}} src={people}/><a className='links' style={{paddingLeft:5, color:'#1DA1F2',fontSize:12,fontFamily:"Segoe UI"}}>Find people you know</a></span>
             </Paper>
        <div style={{display:'inline-block',paddingTop:0,marginTop:0,height: 200,position:'absolute',left:1010,top:450}}>
          <Paper style={{height: 130,width:284, padding:15,marginLeft:10, display: 'inline-block', fontFamily:'Helvetica Neue', fontSize:12}} zDepth={1} rounded={false}>
            <span className='rblinks'> © 2017 Twitter  <a href='#'>About</a>  <a href='#'>Help</a> <a href='#'>Center</a>
            <a href='#'>Terms</a>  <a href='#'>Privacy</a>  <a href='#'>policy</a>  <a href='#'>Cookies</a>  <a href='#'>Ads</a>  <a href='#'>info</a>  <a href='#'>Brand</a>  <a href='#'>Blog</a>  <a href='#'>Status</a>  <a href='#'>Apps </a>  <a href='#'>Jobs</a>  <a href='#'>Marketing</a>  <a href='#'>Businesses</a>  <a href='#'>Developers</a></span>
            <hr style={{border:'.25px solid #b8c4d8',height:'.5px'}}/>
            <span style={{verticalAlign:'middle',display:'inline-flex'}}><RBIcon/><a className='links' style={{paddingLeft:5, color:'#1DA1F2',fontSize:12,fontFamily:"Segoe UI"}}>Advertise with Twitter</a></span>
          </Paper>
        </div>

        </MuiThemeProvider>
      </div>

        );
      }
}

export default App;

import twitter from '../assets/img/twitter.png'
import facebook from '../assets/img/facebook.png'
import google from '../assets/img/google.png'
import youtube from '../assets/img/youtube.png'
import tiktok from '../assets/img/tiktok.png'

import network from '../assets/img/network.png'
import device from '../assets/img/device.png'
import general from '../assets/img/general.png'
import location from '../assets/img/location.png'
import account from '../assets/img/account.png'

export var initialElements = [
  {
      id: 'app-1',
      sourcePosition: 'right',
      type: 'input',
      className: 'app-names',
      data: { label: (
        // border-color: transparent;
        // border-style: solid; -> unset or none
        <div style={{display:"block", justifyContent:"center", borderColor: "white"}}>
          <img src={twitter} alt="Twitter" style={{display: "block", width: "100%", height: "100%"}}/>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"16px", position:"relative", top:"25px", }}>
          Twitter
        </p>
        </div>   
      ) },
      position: { x: 0, y: 213 },
      style: {width:'70px', height:'70px'},
    },
    {
      id: 'app-2',
      sourcePosition: 'right',
      type: 'input',
      className: 'dark-node app-names',
      data: { label: (
        <div style={{display:"block", justifyContent:"center"}}>
          <img src={facebook} alt="Facebook" style={{display: "block", width: "100%", height: "100%"}}/>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"16px", position:"relative", top:"16px", }}>
          Facebook
        </p>
        </div>   
      ) },
      position: { x: 0, y: 363 },
      style: {width:'70px', height:'70px'},
    },
    {
      id: 'app-3',
      sourcePosition: 'right',
      type: 'input',
      className: 'dark-node app-names',
      data: { label: (
        <div style={{display:"block", justifyContent:"center", alignItems:"center"}}>
          <img src={google} alt="Google" style={{display:"block", width: "100%", height: "100%"}}/>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"16px", position:"relative", top:"16px",}}>
          Google
        </p>
        </div>   
      ) },
      position: { x: 0, y: 513 },
      style: {width:'70px', height:'70px'},
    },
    {
      id: 'app-4',
      sourcePosition: 'right',
      type: 'input',
      className: 'dark-node app-names',
      data: { label: (
        <div style={{display:"block", justifyContent:"center", alignItems:"center"}}>
          <img src={youtube} alt="YouTube" style={{display:"block", width: "100%", height: "100%"}}/>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"16px", position:"relative", top:"16px",}}>
          YouTube
        </p>
        </div>   
      ) },
      position: { x: 0, y: 663 },
      style: {width:'70px', height:'70px'},
    },
    {
      id: 'app-5',
      sourcePosition: 'right',
      type: 'input',
      className: 'dark-node app-names',
      data: { label: (
        <div style={{display:"block", justifyContent:"center", alignItems:"center"}}>
          <img src={tiktok} alt="TikTok" style={{display:"block", width: "100%", height: "100%"}}/>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"16px", position:"relative", top:"16px",}}>
          TikTok
        </p>
        </div>   
      ) },
      position: { x: 0, y: 813 },
      style: {width:'70px', height:'70px'},
    },
// Data Types
    {
      id: 'data-types-1',
      sourcePosition: 'right',
      targetPosition: 'left',
      // type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", border: "0px"}}>
          <img src={network} alt="Network" style={{paddingLeft: "2px", marginRight: "4px", width:"14.5%"}}/>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontFamily: "'Roboto', sans-serif", fontSize:"16px"}}>
          &nbsp;Network Data
        </p>
        </div>
      ) },
      position: { x: 250, y: 325 },
      style: {borderRadius:"20px"},
    },
    {
      id: 'data-types-2',
      sourcePosition: 'right',
      targetPosition: 'left',
      // type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center",}}>
          <img src={device} alt="Device" style={{marginRight: "5px", width:"9%", height:"9%"}}/>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"16px"}}>
          &nbsp;Device Data
        </p>
        </div>
      ) },
      position: { x: 250, y: 425 },
      style: {borderRadius:"20px"},
    },
    {
      id: 'data-types-3',
      sourcePosition: 'right',
      targetPosition: 'left',
      // type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center",}}>
          <img src={general} alt="General" style={{marginRight: "4px", width:"12.9%", height:"12.9%"}}/>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"16px"}}>
          &nbsp;General Data
        </p>
        </div>
      ) },
      position: { x: 250, y: 525 },
      style: {borderRadius:"20px"},
    },
    {
      id: 'data-types-4',
      sourcePosition: 'right',
      targetPosition: 'left',
      // type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center",}}>
          <img src={location} alt="Location" style={{marginLeft: "1px", marginRight: "5px", width:"10%", height:"10%"}}/>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"16px"}}>
          &nbsp;Location Data
        </p>
        </div>
      ) },
      position: { x: 250, y: 625 },
      style: {borderRadius:"20px"},
    },
    {
      id: 'data-types-5',
      sourcePosition: 'right',
      targetPosition: 'left',
      // type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center",}}>
          <img src={account} alt="Account" style={{display:"relative", marginRight: "5px", width:"11.5%", height:"11.5%"}}/>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"16px"}}>
          &nbsp;Account Data
        </p>
        </div>
      ) },
      position: { x: 250, y: 725 },
      style: {borderRadius:"20px"},
    },
    {
      id: 'cloud-services-1',
      sourcePosition: 'right',
      targetPosition: 'left',
      // type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{justifyContent:"center", alignItems:"center"}}>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"14px"}}>
          twitter.com
        </p>
        </div>
      ) },
      position: { x: 550, y: 100 },
      style: {
        width: "190px",
        height: "45px"
      },
    },
    {
      id: 'cloud-services-2',
      sourcePosition: 'right',
      targetPosition: 'left',
      // type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{justifyContent:"center", alignItems:"center"}}>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"14px"}}>
          facebook.com
        </p>
        </div>
      ) },
      position: { x: 550, y: 200 },
      style: {
        width: "190px",
        height: "45px"
      },
    },
    {
      id: 'cloud-services-3',
      sourcePosition: 'right',
      targetPosition: 'left',
      // type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{justifyContent:"center", alignItems:"center"}}>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"14px"}}>
          settings.crashlytics.com
        </p>
        </div>
      ) },
      position: { x: 550, y: 300 },
      style: {
        width: "190px",
        height: "45px"
      },
    },
    {
      id: 'cloud-services-4',
      sourcePosition: 'right',
      targetPosition: 'left',
      // type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{justifyContent:"center", alignItems:"center"}}>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"14px"}}>
          accounts.google.com
        </p>
        </div>
      ) },
      position: { x: 550, y: 400 },
      style: {
        width: "190px",
        height: "45px"
      },
    },
    {
      id: 'cloud-services-5',
      sourcePosition: 'right',
      targetPosition: 'left',
      // type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{justifyContent:"center", alignItems:"center"}}>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"14px"}}>
          google.com
        </p>
        </div>
      ) },
      position: { x: 550, y: 500 },
      style: {
        width: "190px",
        height: "45px"
      },
    },
    {
      id: 'cloud-services-6',
      sourcePosition: 'right',
      targetPosition: 'left',
      // type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{justifyContent:"center", alignItems:"center"}}>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"14px"}}>
          googletagmanager.com
        </p>
        </div>
      ) },
      position: { x: 550, y: 600 },
      style: {
        width: "190px",
        height: "45px"
      },
    },

    {
      id: 'cloud-services-7',
      sourcePosition: 'right',
      targetPosition: 'left',
      // type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{justifyContent:"center", alignItems:"center"}}>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"14px"}}>
          googlevideo.com
        </p>
        </div>
      ) },
      position: { x: 550, y: 700 },
      style: {
        width: "190px",
        height: "45px"
      },
    },

    {
      id: 'cloud-services-8',
      sourcePosition: 'right',
      targetPosition: 'left',
      // type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{justifyContent:"center", alignItems:"center"}}>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"14px"}}>
          googleapis.com
        </p>
        </div>
      ) },
      position: { x: 550, y: 800 },
      style: {
        width: "190px",
        height: "45px"
      },
    },

    {
      id: 'cloud-services-9',
      sourcePosition: 'right',
      targetPosition: 'left',
      // type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{justifyContent:"center", alignItems:"center"}}>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"14px"}}>
          doubleclick.net
        </p>
        </div>
      ) },
      position: { x: 550, y: 900 },
      style: {
        width: "190px",
        height: "45px"
      },
    },

    {
      id: 'cloud-services-10',
      sourcePosition: 'right',
      targetPosition: 'left',
      // type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{justifyContent:"center", alignItems:"center"}}>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"14px"}}>
          device.zhiliaoapp.com
        </p>
        </div>
      ) },
      position: { x: 550, y: 1000 },
      style: {
        width: "190px",
        height: "45px"
      },
    },

    // Companies
    {
      id: 'company-1',
      sourcePosition: 'left',
      type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{justifyContent:"center", alignItems:"center"}}>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"16px", }}>
          Twitter
        </p>
        </div>
      ) },
      position: { x: 870, y: 250 },
      style: {
        width: "130px",
        height: "45px"
      },
    },
    {
      id: 'company-2',
      sourcePosition: 'left',
      type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{justifyContent:"center", alignItems:"center"}}>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"16px", }}>
          Facebook
        </p>
        </div>
      ) },
      position: { x: 870, y: 400 },
      style: {
        width: "130px",
        height: "45px"
      },
    },
    {
      id: 'company-3',
      sourcePosition: 'left',
      type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{justifyContent:"center", alignItems:"center"}}>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"16px", }}>
          Google
        </p>
        </div>
      ) },
      position: { x: 870, y: 550 },
      style: {
        width: "130px",
        height: "45px"
      },
    },
    {
      id: 'company-4',
      sourcePosition: 'left',
      type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{justifyContent:"center", alignItems:"center"}}>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"16px", }}>
          Zhiliaoapp.com
        </p>
        </div>
      ) },
      position: { x: 870, y: 700 },
      style: {
        width: "130px",
        height: "45px"
      },
    },
    {
      id: 'company-5',
      sourcePosition: 'left',
      type: 'input',
      className: 'dark-node',
      data: { label: (
        <div style={{justifyContent:"center", alignItems:"center"}}>
          <p style={{color: "black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"16px", }}>
          Mob.com
        </p>
        </div>
      ) },
      position: { x: 870, y: 850 },
      style: {
        width: "130px",
        height: "45px"
      },
    },


//// ---------------------------------////
/// -------- --------- --------------- ///
//  Edges
{
  id: 'horizontal-app-datatype1x',
  source: 'app-1',
  // data: 'horizontal-app-datatype1x',
  type: 'smoothstep',
  target: 'data-types-1',
  animated: false,
},
{
  id: 'app-1-data-types-2',
  source: 'app-1',
  type: 'smoothstep',
  target: 'data-types-2',
  animated: false,
}, 
{
  id: 'horizontal-app-datatype3',
  source: 'app-1',
  type: 'smoothstep',
  target: 'data-types-3',
  animated: false,
},
{
  id: 'horizontal-app-datatype4',
  source: 'app-1',
  type: 'smoothstep',
  target: 'data-types-4',
  animated: false,
},  

// Facebook / app 2
{
  id: 'app-2-data-types-1',
  source: 'app-2',
  type: 'smoothstep',
  target: 'data-types-1',
  animated: false,
},{
  id: 'app-2-data-types-2',
  source: 'app-2',
  type: 'smoothstep',
  target: 'data-types-2',
  animated: false,
},{
  id: 'app-2-data-types-3',
  source: 'app-2',
  type: 'smoothstep',
  target: 'data-types-3',
  animated: false,
},{
  id: 'app-2-data-types-4',
  source: 'app-2',
  type: 'smoothstep',
  target: 'data-types-4',
  animated: false,
},{
  id: 'app-2-data-types-5',
  source: 'app-2',
  type: 'smoothstep',
  target: 'data-types-5',
  animated: false,
},
// Google / app 3
{
  id: 'app-3-data-types-1',
  source: 'app-3',
  type: 'smoothstep',
  target: 'data-types-1',
  animated: false,
},{
  id: 'app-3-data-types-2',
  source: 'app-3',
  type: 'smoothstep',
  target: 'data-types-2',
  animated: false,
},{
  id: 'app-3-data-types-3',
  source: 'app-3',
  type: 'smoothstep',
  target: 'data-types-3',
  animated: false,
},{
  id: 'app-3-data-types-4',
  source: 'app-3',
  type: 'smoothstep',
  target: 'data-types-4',
  animated: false,
},{
  id: 'app-3-data-types-5',
  source: 'app-3',
  type: 'smoothstep',
  target: 'data-types-5',
  animated: false,
},
// YouTube app 4
{
  id: 'app-4-data-types-1',
  source: 'app-4',
  type: 'smoothstep',
  target: 'data-types-1',
  animated: false,
},
{
  id: 'app-4-data-types-2',
  source: 'app-4',
  type: 'smoothstep',
  target: 'data-types-2',
  animated: false,
},
{
  id: 'app-4-data-types-3',
  source: 'app-4',
  type: 'smoothstep',
  target: 'data-types-3',
  animated: false,
},
{
  id: 'app-4-data-types-4',
  source: 'app-4',
  type: 'smoothstep',
  target: 'data-types-4',
  animated: false,
},
{
  id: 'app-4-data-types-5',
  source: 'app-4',
  type: 'smoothstep',
  target: 'data-types-5',
  animated: false,
},
// Tiktok / app 5
{
  id: 'app-5-data-types-1',
  source: 'app-5',
  type: 'smoothstep',
  target: 'data-types-1',
  animated: false,
},
{
  id: 'app-5-data-types-2',
  source: 'app-5',
  type: 'smoothstep',
  target: 'data-types-2',
  animated: false,
},
{
  id: 'app-5-data-types-3',
  source: 'app-5',
  type: 'smoothstep',
  target: 'data-types-3',
  animated: false,
},
{
  id: 'app-5-data-types-4',
  source: 'app-5',
  type: 'smoothstep',
  target: 'data-types-4',
  animated: false,
},
{
  id: 'app-5-data-types-5',
  source: 'app-5',
  type: 'smoothstep',
  target: 'data-types-5',  
  animated: false,
},

// Data typed to Domains / cloud services
{
  id: 'data-types-1-cloud-services-1',
  source: 'data-types-1',
  type: 'smoothstep',
  target: 'cloud-services-1',
  animated: false,
},
{
  id: 'data-types-1-cloud-services-2',
  source: 'data-types-1',
  type: 'smoothstep',
  target: 'cloud-services-2',
  animated: false,
},
{
  id: 'horizontal-app-datatypey19',
  source: 'data-types-1',
  type: 'smoothstep',
  target: 'cloud-services-3',
  animated: false,
},
{
  id: 'horizontal-app-datatype20',
  source: 'data-types-1',
  type: 'smoothstep',
  target: 'cloud-services-4',
  animated: false,
},

{
  id: 'data-types-1-cloud-services-5',
  source: 'data-types-1',
  type: 'smoothstep',
  target: 'cloud-services-5',
  animated: false,
},

{
  id: 'data-types-1-cloud-services-6',
  source: 'data-types-1',
  type: 'smoothstep',
  target: 'cloud-services-6',
  animated: false,
},

{
  id: 'data-types-1-cloud-services-7',
  source: 'data-types-1',
  type: 'smoothstep',
  target: 'cloud-services-7',
  animated: false,
},
{
  id: 'horizontal-app-datatype24',
  source: 'data-types-1',
  type: 'smoothstep',
  target: 'cloud-services-8',
  animated: false,
},
{
  id: 'data-types-1-cloud-services-9',
  source: 'data-types-1',
  type: 'smoothstep',
  target: 'cloud-services-9',
  animated: false,
},
{
  id: 'data-types-1-cloud-services-10',
  source: 'data-types-1',
  type: 'smoothstep',
  target: 'cloud-services-10',
  animated: false,
},

{
  id: 'horizontal-app-datatype17',
  source: 'data-types-2',
  type: 'smoothstep',
  target: 'cloud-services-1',
  animated: false,
},
{
  id: 'horizontal-app-datatype18',
  source: 'data-types-2',
  type: 'smoothstep',
  target: 'cloud-services-2',
  animated: false,
},
{
  id: 'data-types-2-cloud-services-3',
  source: 'data-types-2',
  type: 'smoothstep',
  target: 'cloud-services-3',
  animated: false,
},
{
  id: 'horizontal-app-datatype20',
  source: 'data-types-2',
  type: 'smoothstep',
  target: 'cloud-services-4',
  animated: false,
},

{
  id: 'data-types-2-cloud-services-5',
  source: 'data-types-2',
  type: 'smoothstep',
  target: 'cloud-services-5',
  animated: false,
},

{
  id: 'horizontal-app-datatype22',
  source: 'data-types-2',
  type: 'smoothstep',
  target: 'cloud-services-6',
  animated: false,
},

{
  id: 'horizontal-app-datatype23',
  source: 'data-types-2',
  type: 'smoothstep',
  target: 'cloud-services-7',
  animated: false,
},
{
  id: 'horizontal-app-datatype24',
  source: 'data-types-2',
  type: 'smoothstep',
  target: 'cloud-services-8',
  animated: false,
},
{
  id: 'horizontal-app-datatype25',
  source: 'data-types-2',
  type: 'smoothstep',
  target: 'cloud-services-9',
  animated: false,
},
{
  id: 'data-types-2-cloud-services-10',
  source: 'data-types-2',
  type: 'smoothstep',
  target: 'cloud-services-10',
  animated: false,
},

// data type 4 to cloud services
{
  id: 'horizontal-app-datatype17',
  source: 'data-types-4',
  type: 'smoothstep',
  target: 'cloud-services-1',
  animated: false,
},
{
  id: 'data-types-4-cloud-services-2',
  source: 'data-types-4',
  type: 'smoothstep',
  target: 'cloud-services-2',
  animated: false,
},
{
  id: 'horizontal-app-datatypex19',
  source: 'data-types-4',
  type: 'smoothstep',
  target: 'cloud-services-3',
  animated: false,
},
{
  id: 'horizontal-app-datatype20',
  source: 'data-types-4',
  type: 'smoothstep',
  target: 'cloud-services-4',
  animated: false,
},

{
  id: 'horizontal-app-datatype21',
  source: 'data-types-4',
  type: 'smoothstep',
  target: 'cloud-services-5',
  animated: false,
},

{
  id: 'horizontal-app-datatype22',
  source: 'data-types-4',
  type: 'smoothstep',
  target: 'cloud-services-6',
  animated: false,
},

{
  id: 'horizontal-app-datatype23',
  source: 'data-types-4',
  type: 'smoothstep',
  target: 'cloud-services-7',
  animated: false,
},
{
  id: 'data-types-4-cloud-services-8',
  source: 'data-types-4',
  type: 'smoothstep',
  target: 'cloud-services-8',
  animated: false,
},
{
  id: 'data-types-4-cloud-services-9',
  source: 'data-types-4',
  type: 'smoothstep',
  target: 'cloud-services-9',
  animated: false,
},
{
  id: 'data-types-4-cloud-services-10',
  source: 'data-types-4',
  type: 'smoothstep',
  target: 'cloud-services-10',
  animated: false,
},

// data type 3 to cloud services
{
  id: 'horizontal-app-datatype17',
  source: 'data-types-3',
  type: 'smoothstep',
  target: 'cloud-services-1',
  animated: false,
},
{
  id: 'data-types-3',
  source: 'data-types-3',
  type: 'smoothstep',
  target: 'cloud-services-2',
  animated: false,
},
{
  id: 'horizontal-app-datatypex19',
  source: 'data-types-3',
  type: 'smoothstep',
  target: 'cloud-services-3',
  animated: false,
},
{
  id: 'horizontal-app-datatype20',
  source: 'data-types-3',
  type: 'smoothstep',
  target: 'cloud-services-4',
  animated: false,
},

{
  id: 'horizontal-app-datatype21',
  source: 'data-types-3',
  type: 'smoothstep',
  target: 'cloud-services-5',
  animated: false,
},

{
  id: 'data-types-3-cloud-services-6',
  source: 'data-types-3',
  type: 'smoothstep',
  target: 'cloud-services-6',
  animated: false,
},

{
  id: 'horizontal-app-datatype23',
  source: 'data-types-3',
  type: 'smoothstep',
  target: 'cloud-services-7',
  animated: false,
},
{
  id: 'horizontal-app-datatype24',
  source: 'data-types-3',
  type: 'smoothstep',
  target: 'cloud-services-8',
  animated: false,
},
{
  id: 'horizontal-app-datatype25',
  source: 'data-types-3',
  type: 'smoothstep',
  target: 'cloud-services-9',
  animated: false,
},
{
  id: 'data-types-3-cloud-services-10',
  source: 'data-types-3',
  type: 'smoothstep',
  target: 'cloud-services-10',
  animated: false,
},

// data type 5 to cloud services
{
  id: 'horizontal-app-datatype17',
  source: 'data-types-5',
  type: 'smoothstep',
  target: 'cloud-services-1',
  animated: false,
},
{
  id: 'data-types-5-cloud-services-2',
  source: 'data-types-5',
  type: 'smoothstep',
  target: 'cloud-services-2',
  animated: false,
},
{
  id: 'horizontal-app-datatypex19',
  source: 'data-types-5',
  type: 'smoothstep',
  target: 'cloud-services-3',
  animated: false,
},
{
  id: 'data-types-5-cloud-services-4',
  source: 'data-types-5',
  type: 'smoothstep',
  target: 'cloud-services-4',
  animated: false,
},

{
  id: 'horizontal-app-datatype21',
  source: 'data-types-5',
  type: 'smoothstep',
  target: 'cloud-services-5',
  animated: false,
},

{
  id: 'horizontal-app-datatype22',
  source: 'data-types-5',
  type: 'smoothstep',
  target: 'cloud-services-6',
  animated: false,
},

{
  id: 'horizontal-app-datatype23',
  source: 'data-types-5',
  type: 'smoothstep',
  target: 'cloud-services-7',
  animated: false,
},
{
  id: 'horizontal-app-datatype24',
  source: 'data-types-5',
  type: 'smoothstep',
  target: 'cloud-services-8',
  animated: false,
},
{
  id: 'horizontal-app-datatype25',
  source: 'data-types-5',
  type: 'smoothstep',
  target: 'cloud-services-9',
  animated: false,
},
{
  id: 'data-types-5-cloud-services-10',
  source: 'data-types-5',
  type: 'smoothstep',
  target: 'cloud-services-10',
  animated: false,
},



/// ---------- ///

// Domains to App 1 
{
  id: 'cloud-services-1-company-1',
  target: 'company-1',
  type: 'smoothstep',
  source: 'cloud-services-1',
  animated: false,
},
{
  id: 'horizontal-app-datatype18',
  target: 'company-1',
  type: 'smoothstep',
  source: 'cloud-services-2',
  animated: false,
},
{
  id: 'cloud-services-3-company-1',
  target: 'company-1',
  type: 'smoothstep',
  source: 'cloud-services-3',
  animated: false,
},
{
  id: 'horizontal-app-datatype20',
  target: 'company-1',
  type: 'smoothstep',
  source: 'cloud-services-4',
  animated: false,
},

{
  id: 'horizontal-app-datatype21',
  target: 'company-1',
  type: 'smoothstep',
  source: 'cloud-services-5',
  animated: false,
},

{
  id: 'horizontal-app-datatype22',
  target: 'company-1',
  type: 'smoothstep',
  source: 'cloud-services-6',
  animated: false,
},

{
  id: 'horizontal-app-datatype23',
  target: 'company-1',
  type: 'smoothstep',
  source: 'cloud-services-7',
  animated: false,
},
{
  id: 'horizontal-app-datatype24',
  target: 'company-1',
  type: 'smoothstep',
  source: 'cloud-services-8',
  animated: false,
},
{
  id: 'horizontal-app-datatype25',
  target: 'company-1',
  type: 'smoothstep',
  source: 'cloud-services-9',
  animated: false,
},
{
  id: 'horizontal-app-datatype26',
  target: 'company-1',
  type: 'smoothstep',
  source: 'cloud-services-10',
  animated: false,
},
// Company 2
{
  id: 'horizontal-app-datatype17',
  target: 'company-2',
  type: 'smoothstep',
  source: 'cloud-services-1',
  animated: false,
},
{
  id: 'cloud-services-2-company-2',
  target: 'company-2',
  type: 'smoothstep',
  source: 'cloud-services-2',
  animated: false,
},
{
  id: 'cloud-services-3-company-2',
  target: 'company-2',
  type: 'smoothstep',
  source: 'cloud-services-3',
  animated: false,
},
{
  id: 'horizontal-app-datatype20',
  target: 'company-2',
  type: 'smoothstep',
  source: 'cloud-services-4',
  animated: false,
},

{
  id: 'horizontal-app-datatype21',
  target: 'company-2',
  type: 'smoothstep',
  source: 'cloud-services-5',
  animated: false,
},

{
  id: 'horizontal-app-datatype22',
  target: 'company-2',
  type: 'smoothstep',
  source: 'cloud-services-6',
  animated: false,
},

{
  id: 'horizontal-app-datatype23',
  target: 'company-2',
  type: 'smoothstep',
  source: 'cloud-services-7',
  animated: false,
},
{
  id: 'horizontal-app-datatype24',
  target: 'company-2',
  type: 'smoothstep',
  source: 'cloud-services-8',
  animated: false,
},
{
  id: 'horizontal-app-datatype25',
  target: 'company-2',
  type: 'smoothstep',
  source: 'cloud-services-9',
  animated: false,
},
{
  id: 'horizontal-app-datatype26',
  target: 'company-2',
  type: 'smoothstep',
  source: 'cloud-services-10',
  animated: false,
},

// Company 3
{
  id: 'horizontal-app-datatype17',
  target: 'company-3',
  type: 'smoothstep',
  source: 'cloud-services-1',
  animated: false,
},
{
  id: 'horizontal-app-datatype18',
  target: 'company-3',
  type: 'smoothstep',
  source: 'cloud-services-2',
  animated: false,
},
{
  id: 'horizontal-app-datatypes19',
  target: 'company-3',
  type: 'smoothstep',
  source: 'cloud-services-3',
  animated: false,
},
{
  id: 'cloud-services-4-company-3',
  target: 'company-3',
  type: 'smoothstep',
  source: 'cloud-services-4',
  animated: false,
},

{
  id: 'cloud-services-5-company-3',
  target: 'company-3',
  type: 'smoothstep',
  source: 'cloud-services-5',
  animated: false,
},

{
  id: 'cloud-services-6-company-3',
  target: 'company-3',
  type: 'smoothstep',
  source: 'cloud-services-6',
  animated: false,
},

{
  id: 'cloud-services-7-company-3',
  target: 'company-3',
  type: 'smoothstep',
  source: 'cloud-services-7',
  animated: false,
},
{
  id: 'cloud-services-8-company-3',
  target: 'company-3',
  type: 'smoothstep',
  source: 'cloud-services-8',
  animated: false,
},
{
  id: 'cloud-services-9-company-3',
  target: 'company-3',
  type: 'smoothstep',
  source: 'cloud-services-9',
  animated: false,
},
{
  id: 'horizontal-app-datatype26',
  target: 'company-3',
  type: 'smoothstep',
  source: 'cloud-services-10',
  animated: false,
},

// Company 4
{
  id: 'horizontal-app-datatype17',
  target: 'company-4',
  type: 'smoothstep',
  source: 'cloud-services-1',
  animated: false,
},
{
  id: 'horizontal-app-datatype18',
  target: 'company-4',
  type: 'smoothstep',
  source: 'cloud-services-2',
  animated: false,
},
{
  id: 'horizontal-app-datatypea19',
  target: 'company-4',
  type: 'smoothstep',
  source: 'cloud-services-3',
  animated: false,
},
{
  id: 'horizontal-app-datatype20',
  target: 'company-4',
  type: 'smoothstep',
  source: 'cloud-services-4',
  animated: false,
},

{
  id: 'horizontal-app-datatype21',
  target: 'company-4',
  type: 'smoothstep',
  source: 'cloud-services-5',
  animated: false,
},

{
  id: 'horizontal-app-datatype22',
  target: 'company-4',
  type: 'smoothstep',
  source: 'cloud-services-6',
  animated: false,
},

{
  id: 'horizontal-app-datatype23',
  target: 'company-4',
  type: 'smoothstep',
  source: 'cloud-services-7',
  animated: false,
},
{
  id: 'horizontal-app-datatype24',
  target: 'company-4',
  type: 'smoothstep',
  source: 'cloud-services-8',
  animated: false,
},
{
  id: 'horizontal-app-datatype25',
  target: 'company-4',
  type: 'smoothstep',
  source: 'cloud-services-9',
  animated: false,
},
{
  id: 'cloud-services-10-company-4',
  target: 'company-4',
  type: 'smoothstep',
  source: 'cloud-services-10',
  animated: false,
},

// Company 5
{
  id: 'horizontal-app-datatype17',
  target: 'company-5',
  type: 'smoothstep',
  source: 'cloud-services-1',
  animated: false,
},
{
  id: 'horizontal-app-datatype18',
  target: 'company-5',
  type: 'smoothstep',
  source: 'cloud-services-2',
  animated: false,
},
{
  id: 'horizontal-app-datatypeq19',
  target: 'company-5',
  type: 'smoothstep',
  source: 'cloud-services-3',
  animated: false,
},
{
  id: 'horizontal-app-datatype20',
  target: 'company-5',
  type: 'smoothstep',
  source: 'cloud-services-4',
  animated: false,
},

{
  id: 'horizontal-app-datatype21',
  target: 'company-5',
  type: 'smoothstep',
  source: 'cloud-services-5',
  animated: false,
},

{
  id: 'horizontal-app-datatype22',
  target: 'company-5',
  type: 'smoothstep',
  source: 'cloud-services-6',
  animated: false,
},

{
  id: 'horizontal-app-datatype23',
  target: 'company-5',
  type: 'smoothstep',
  source: 'cloud-services-7',
  animated: false,
},
{
  id: 'horizontal-app-datatype24',
  target: 'company-5',
  type: 'smoothstep',
  source: 'cloud-services-8',
  animated: false,
},
{
  id: 'horizontal-app-datatype25',
  target: 'company-5',
  type: 'smoothstep',
  source: 'cloud-services-9',
  animated: false,
},
{
  id: 'cloud-services-10-company-5',
  target: 'company-5',
  type: 'smoothstep',
  source: 'cloud-services-10',
  animated: false,
},


];

export default {
  initialElements,
}
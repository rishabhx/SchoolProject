import React, { useState } from 'react';
import ReactFlow, { removeElements, addEdge, isNode, isEdge } from 'react-flow-renderer';

// all the nodes and edges
import {initialElements} from '../components/initial-elements.js'

// assets
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

const allNodes = { 
  // Twitter Series
  "app-1": ["app-1", "data-types-1", "data-types-2", "cloud-services-1", "cloud-services-3", "company-1"],
  // Facebook Series
  "app-2": ["app-2", "data-types-1", "data-types-2","data-types-3","data-types-4","data-types-5","cloud-services-2", "cloud-services-3", "company-2"],
  "app-3": ["app-3", "data-types-1", "data-types-2","data-types-3","data-types-4","data-types-5", "cloud-services-4", "cloud-services-5","cloud-services-6", "cloud-services-8","cloud-services-9", "company-3"],
  "app-4": ["app-4", "data-types-1", "data-types-2","data-types-3","data-types-4","data-types-5","cloud-services-4", "cloud-services-5","cloud-services-6", "cloud-services-7","cloud-services-8", "company-3"],
  "app-5": ["app-5", "data-types-1", "data-types-2","data-types-3","data-types-4","data-types-5","cloud-services-10", "company-4", "company-5"]
}
const allEdges = { 
  "app-1": ["horizontal-app-datatype1x", "app-1-data-types-2", "data-types-1-cloud-services-1", "data-types-2-cloud-services-3", 
  "cloud-services-3-company-1", "cloud-services-1-company-1"],
  
  "app-2": ["app-2-data-types-1","app-2-data-types-2","app-2-data-types-3","app-2-data-types-4","app-2-data-types-5",
  "data-types-1-cloud-services-2","data-types-3-cloud-services-2","data-types-4-cloud-services-2","data-types-5-cloud-services-2",
  "data-types-2-cloud-services-3","cloud-services-2-company-2","cloud-services-3-company-2"],
  
  "app-3": ["app-3-data-types-1","app-3-data-types-2","app-3-data-types-3","app-3-data-types-4","app-3-data-types-5","data-types-1-cloud-services-5","data-types-2-cloud-services-5","data-types-3-cloud-services-6","data-types-4-cloud-services-8",
  "data-types-5-cloud-services-4","data-types-4-cloud-services-9","cloud-services-4-company-3","cloud-services-5-company-3","cloud-services-6-company-3","cloud-services-8-company-3","cloud-services-9-company-3"],

  "app-4": ["app-4-data-types-1","app-4-data-types-2","app-4-data-types-3","app-4-data-types-4","app-4-data-types-5","data-types-1-cloud-services-7","data-types-2-cloud-services-5",
  "data-types-3-cloud-services-6","data-types-4-cloud-services-8","data-types-5-cloud-services-4","cloud-services-4-company-3","cloud-services-5-company-3","cloud-services-6-company-3","cloud-services-7-company-3","cloud-services-8-company-3"],
  
  "app-5": ["app-5-data-types-1","app-5-data-types-2","app-5-data-types-3","app-5-data-types-4","app-5-data-types-5","data-types-1-cloud-services-10",
  "data-types-2-cloud-services-10","data-types-3-cloud-services-10","data-types-4-cloud-services-10","data-types-5-cloud-services-10", "cloud-services-10-company-4", "cloud-services-10-company-5"]
}


const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

// const onElementClick = (event, node) => {

//   // step 0: select all nodes using classname: "react-flow__node" and reset styles (getElementsByClassName)
//   var nodes = document.getElementsByClassName('react-flow__node');
//   console.log(nodes)
//   for (var nd of nodes) {
//     deselectNode(nd); // reset styles for each node
//   }

//   allNodes[node.id].forEach(function(dataId) {
//     var nodeList = document.querySelectorAll("[data-id='" + dataId + "']")
//     var n = nodeList[0];
//     selectNode(n);
//   })
// }



// // twitter edges
// twitterEdges.forEach(function(edgeId) {
//   var edgeList = document.querySelectorAll("[data-id='" + edgeId + "']")
//   console.log("hello" + edgeList)
//   // var n = edgeList[0];
//   // n.style.strokeWidth = "10px";
//   // n.style.stroke = "blue";

//   // stroke: #3636dc;
//   // stroke-width: 6px;
// })

const onNodeMouseMove = (event, node) => console.log('mouse move:', node);
const onNodeMouseLeave = (event, node) => console.log('mouse leave:', node);
const onNodeContextMenu = (event, node) => {
  event.preventDefault();
  console.log('context menu:', node);
};

const HorizontalFlow = () => {
  // var newElements = initialElements;
  
  // HELPER FUNCTIONS
  function deselectNode(n) {
    n.style.background = "#fff";
    n.style.color = "222222"; // "#888888"
  }

  function selectNode(n) {
    if (true || n.id.length > 5) {
      n.style.background = "#E5EDFF";
    }
    n.style.color = "#0047FF"
  }

  // function deselectEdge(e) {
  //   e.style.stroke = "#b1b1b7"
  // }

  // function invalidateEdgeStroke(e) {
  //   e.style.stroke = null
  // }

  // function invalidateAllEdges() {
    
  //   var edges = document.getElementsByClassName('react-flow__edge-path');
  //     for (var edge of edges) {
  //       invalidateEdgeStroke(edge); // reset styles for each node
  //     }
  //   // #b1b1b7
  // }

  // function deselectAllEdges() {
    
  //   var edges = document.getElementsByClassName('react-flow__edge-path');
  //     for (var edge of edges) {
  //       deselectEdge(edge); // reset styles for each node
  //     }
  //   // #b1b1b7
  // }

  // ------------------------------
  // Render on click
  // ------------------------------
  function returnElements(event, node) {
    
    var newElements = initialElements;

    // UPDATEDDESELECT LOGIC ---------------------------

    // else {
      console.log("Here is the else logics")
      // deselect all nodes
      // deselectAllEdges()
      // invalidateAllEdges()
      // console.log(newElements.slice(-6));
      var nodes = document.getElementsByClassName('react-flow__node');
      // console.log(nodes)
      for (var nd of nodes) {
        deselectNode(nd); // reset styles for each node
      }


      // DESELECT EDGES LOGIC
      var newEdges = [];
      const edgeKeys = Object.keys(allEdges);
      console.log("EDGE KEYS: ")
      console.log(edgeKeys)
      for (var appId of edgeKeys) {
        allEdges[appId].forEach((edgeId) => {
          // find the right edge obj
          // const edgeObj = newElements.find(arrObj);
          newElements.forEach((json) => {
            if (json["id"] === edgeId) {
              // console.log(json["id"])
              // copy to newEdge obj
              var newEdge = json

              // find position
              const position = newElements.map(function(e) { return e.id; }).indexOf(json["id"]);
              console.log(position)
              // console.log(position);

              // use arr.splice to remove elem at pos
              console.log("Splice vv")
              console.log(newElements.splice(position, 1));

              // log and see if the position still exists / edges are found
              const position2 = newElements.map(function(e) { return e.id; }).indexOf(json["id"]);
              console.log(position2);
              newEdge["style"] = {"stroke" : "#C4C4C4"}
              newEdge["animated"] = false
              newEdges.push(newEdge)
              // console.log("New Edges:");
              // console.log(newEdges);
              
            }
          })
        });
      }

      newEdges.forEach((json) => {
        newElements.push(json)
      })
    // }

    // --------------- DESELECT ENDS HERE---------------------------------------




    // To Do: Update this logic so that it works in general cases
    if (node.id.includes("app") && node.id.length < 6) {
      console.log("Node ID: " + node.id);
      // step 0: select all nodes using classname: "react-flow__node" and reset styles (getElementsByClassName)
      var nodes = document.getElementsByClassName('react-flow__node');
      console.log(nodes)
      for (var nd of nodes) {
        deselectNode(nd); // reset styles for each node
      }

      // Deselect edges
      // invalidateAllEdges()


      
        allNodes[node.id].forEach(function(dataId) {
          var nodeList = document.querySelectorAll("[data-id='" + dataId + "']")
          var n = nodeList[0];
          selectNode(n);
        })
      

      // EDGES -------------
      
      console.log("Update elements");
      var newEdges = [];

      allEdges[node.id].forEach((edgeId) => {
        // find the right edge obj
        // const edgeObj = newElements.find(arrObj);
        newElements.forEach((json) => {
          if (json["id"] === edgeId) {
            // console.log(json["id"])
            // copy to newEdge obj
            var newEdge = json

            // find position
            const position = newElements.map(function(e) { return e.id; }).indexOf(json["id"]);
            // console.log(position);

            // use arr.splice to remove elem at pos
            newElements.splice(position, 1)

            // log and see if the position still exists / edges are found
            // const position2 = newElements.map(function(e) { return e.id; }).indexOf(json["id"]);
            // console.log(position2);
                      
            newEdge["style"] = {"stroke" : "#0047FF"}
            newEdge["animated"] = true
            newEdges.push(newEdge)
            // console.log(newEdges);
            
          }
        })
      });

      newEdges.forEach((json) => {
        newElements.push(json)
      })
      console.log(newElements.slice(-6)); // arr.slice(-1)[0] 
      // console.log(newElements[newElements.length-1].id); /// new
      console.log("node-log: " + node.id)
      // console.log("params-log: " + params)
    } 
    
    
    


    console.log(newElements.slice(-6));
    return Array.from(newElements);
  }

  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementClick = (event, node) => (setElements((els) => returnElements(event, node)));
  const changeClassName = () => {
    setElements((elms) =>
      elms.map((el) => {
        if (el.type === 'input') {
          el.className = el.className ? '' : 'dark-node';
        }

        return { ...el };
      })
    );
  };

  return (
    <ReactFlow
      elements={elements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onLoad={onLoad}
      selectNodesOnDrag={false}
      onElementClick={onElementClick}
      // onNodeMouseEnter={onNodeMouseEnter}
      onNodeMouseMove={onNodeMouseMove}
      onNodeMouseLeave={onNodeMouseLeave}
      onNodeContextMenu={onNodeContextMenu}
      paneMoveable={false}
      nodesDraggable={false}
      zoomOnScroll={false}
      zoomOnPinch={false}
      zoomOnDoubleClick={false}
      deleteKeyCode={8}
    >
      <button
        onClick={changeClassName}
        style={{ position: 'absolute', right: 10, top: 30, zIndex: 4 }}
      >
        
            </button>
    </ReactFlow>
  );
};

export default HorizontalFlow;

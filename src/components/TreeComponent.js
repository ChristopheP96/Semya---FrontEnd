import React, { Component } from "react";
import Tree from 'react-d3-tree';

const svgSquare = {
    shape: 'rect',
    shapeProps: {
        width: 90,
        height: 50,
        w:0,
        y:-25
    }
}  
  
class TreeComponent extends Component {
    state = {}   

    render() {
        return(
            <div>
                <div id="treeWrapper" style={{width: '8px', height: '70px'}} ref={tc => (this.treeContainer = tc)}/>

                <Tree 
                    data={this.props.myTreeData}
                    nodeSvgShape={svgSquare} 
                    orientation="vertical"
                    pathFunc="elbow"
                    translate={this.state.translate}
                />
           </div>
        )
    }
}
  
  export default TreeComponent;

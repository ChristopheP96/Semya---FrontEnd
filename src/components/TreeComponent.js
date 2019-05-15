import React, { Component } from "react";
import Tree from 'react-d3-tree';

const myTreeData = [
    {
      name: 'Joseph',
      attributes: {
        profession: 'Carpenter',
        keyB: 'val B',
        keyC: 'val C',
      },
      children: [
        {
          name: 'Jesus',
          attributes: {
          },
        },
        {
          name: 'Hannah',
        },
      ],
    },
  ];

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

    componentDidMount() {
        const dimensions = this.treeContainer.getBoundingClientRect();
        this.setState({
          translate: {
            x: dimensions.width / 2,
            y: dimensions.height / 2
          }
        });
      }

    render() {
        return(
            <div>
                <div id="treeWrapper" style={{width: '8px', height: '70px'}} ref={tc => (this.treeContainer = tc)}/>

                <Tree 
                    data={myTreeData}
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


 
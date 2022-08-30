import React from "react";  // import React (to provide access to JSX)

type ComponentProps = {
    src: string;
  }

export function PhotoViewer( src: ComponentProps) {    // declare and export new function called 'PhotoViewer'
    return (                
        <div>
            <div className = 'main-image'>
                <img src = {`${src}`}></img>
            </div>
            <div className='small-image-grid'>
                <div className = 'small-image-row'>
                    <img src= 'https://picsum.photos/190'></img>
                    <img src= 'https://picsum.photos/190'></img>
                    <img src= 'https://picsum.photos/190'></img>
                </div>

                <div className = 'small-image-row'>
                    <img src= 'https://picsum.photos/190'></img>
                    <img src= 'https://picsum.photos/190'></img>
                    <img src= 'https://picsum.photos/190'></img>
                </div>
            </div>
        </div>
    );
}
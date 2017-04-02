export function handleMouseDown(event) {
  this.setState({
    mouseDownPosition: {
      exists: true,
      x: event.clientX,
      y: event.clientY
    }
  });
}


export function handleMouseUp(event) {
  const { 
    mouseDownPosition,
    cardPosition
  } = this.state;


  if (mouseDownPosition.exists) {
    const dx = event.clientX - mouseDownPosition.x;
    const dy = event.clientY - mouseDownPosition.y;

    this.setState({
      mouseDownPosition: {
        exists: false,
        x: 0,
        y: 0
      },
      cardPosition: {
        x: cardPosition.x + dx,
        y: cardPosition.y + dy
      }
    });  
  }
}


export function handleMouseMove(event) {
  const { 
    mouseDownPosition,
    cardPosition
  } = this.state;


  if (mouseDownPosition.exists) {
    const dx = event.clientX - mouseDownPosition.x;
    const dy = event.clientY - mouseDownPosition.y;

    this.setState({
      mouseDownPosition: {
        exists: true,
        x: event.clientX,
        y: event.clientY
      },
      cardPosition: {
        x: cardPosition.x + dx,
        y: cardPosition.y + dy
      }
    });  
  }
}

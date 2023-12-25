function structuralClone(obj) {
    const oldState = history.state;
    let copy;
    history.replaceState(obj, document.title);
    copy = history.state;
    history.replaceState(oldState, document.title); 
    return copy;
 }
 
 var obj = {};
 var b = {obj};
 obj.b = b
 
 var copy = structuralClone(obj);
 console.log(copy);
 
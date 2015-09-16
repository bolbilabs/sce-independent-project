// LookAtMouse will cause an object to rotate toward the cursor, along the y axis.
//
// To use, drop on an object that should always look toward the mouse cursor.
// Change the speed value to alter how quickly the object rotates toward the mouse.
 
// speed is the rate at which the object will rotate
var lookObject : Transform;

function Update () {
 mouseX = Input.mousePosition.x;
 mouseY = Input.mousePosition.y;
 
 lookObject.LookAt(new Vector3(mouseX,mouseY,0));
    
}
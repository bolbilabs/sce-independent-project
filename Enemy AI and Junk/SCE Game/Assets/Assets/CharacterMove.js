#pragma strict
var myFloat : float = 1.0;

function Update () {
	if (Input.GetKey(KeyCode.A))
         transform.Translate(Vector3.left * Time.deltaTime * myFloat);
     if (Input.GetKey(KeyCode.S))
         transform.Translate(Vector3.down * Time.deltaTime * myFloat);
     if (Input.GetKey(KeyCode.D)) 
         transform.Translate(Vector3.right * Time.deltaTime * myFloat);
     if (Input.GetKey(KeyCode.W))
         transform.Translate(Vector3.up * Time.deltaTime * myFloat);
}
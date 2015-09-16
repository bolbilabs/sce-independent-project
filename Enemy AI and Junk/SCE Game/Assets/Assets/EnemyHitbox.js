#pragma strict
var angle:float = 0;
	var force:float = 1;
	var launchFactor:float = 1;
	var launchTime:float = 1;
	var nombre:GameObject;
	var dir:Vector3;
	var rb: Rigidbody;
	var clone: Rigidbody;
function Start () {
	rb = GetComponent.<Rigidbody>();
}

function Update () {

}

function OnTriggerEnter(other:Collider)
	{
		if (other.tag == "PlayerProjectile") {
			Destroy (other.gameObject);
			Debug.Log ("Hit!");
			angle = other.transform.eulerAngles.z;
			dir = Quaternion.AngleAxis(angle, Vector3.forward) * Vector3.right;
			
			gameObject.GetComponent( EnemyAI ).enabled = false;
			clone = other.GetComponent.<Rigidbody>();
			var v1 : float = clone.velocity.y;
            var v2 : float = clone.velocity.x;
			rb.velocity = Vector3(v2*launchFactor,v1*launchFactor,0);
			yield WaitForSeconds (launchTime);
			rb.velocity = Vector3(0,0,0);
			gameObject.GetComponent( EnemyAI ).enabled = true;
			//Remove Rigidbody; Turn off AI, have initial laucnch velocity, but gradually deccelerate quickly to zero, resume AI
			//DO NOT USE FOR REFERENCE nombre.GetComponent<Rigidbody>().AddForce(dir * force, ForceMode.Impulse);
			
		}
	}
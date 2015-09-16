#pragma strict

function OnTriggerEnter(other:Collider)
	{
		if (other.tag == "Hitbox") {
			Debug.Log ("Ouch!");
		}
	}
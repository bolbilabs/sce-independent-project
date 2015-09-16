using System;
using UnityEngine;


	public class EnemyHitbox : MonoBehaviour
	{
	public float angle = 0;
	public float force = 1;
	public float launchFactor = 1;
	public GameObject nombre;

	void OnTriggerEnter(Collider other)
	{
		if (other.tag == "PlayerProjectile") {

			Debug.Log ("Hit!");
			angle = other.transform.eulerAngles.z;
			Vector3 dir = Quaternion.AngleAxis(angle, Vector3.forward) * Vector3.right;

			gameObject.GetComponent<EnemyHitbox>().enabled = true;
			//Remove Rigidbody; Turn off AI, have initial laucnch velocity, but gradually deccelerate quickly to zero, resume AI
			//DO NOT USE FOR REFERENCE nombre.GetComponent<Rigidbody>().AddForce(dir * force, ForceMode.Impulse);
			
		}
	}

	
}

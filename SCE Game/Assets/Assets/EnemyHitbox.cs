using System;
using UnityEngine;


	public class EnemyHitbox : MonoBehaviour
	{
	void OnTriggerEnter(Collider other)
	{
		if (other.tag == "PlayerProjectile") {
			Debug.Log ("Hit!");
		}
	}

	}

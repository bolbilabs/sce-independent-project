     var projectile : Rigidbody;
     var speed = 20;
     var thisObject : GameObject;
     var targetObject : GameObject;
     var timeLock : float = 1.0;
     var timeLapse : float = 1.0;
     var timeGate : float = 1.0;
     
     function Update () 
     {
         // Put this in your update function
         timeGate = (Time.time) - timeLapse;
         
         if (Input.GetMouseButton(0) && timeGate >= timeLock) {
     	 timeLapse = Time.time;
         // Instantiate the projectile at the position and rotation of this transform
         var clone : Rigidbody;
         clone = Instantiate(projectile, thisObject.transform.position, transform.rotation);
         clone.velocity = (targetObject.transform.position - transform.position).normalized * speed; 
         clone.velocity.z=0;
         var v1 : float = clone.velocity.y;
         var v2 : float = clone.velocity.x;
         var angle : float = Mathf.Atan2(v1, v2) * Mathf.Rad2Deg;
         clone.transform.Rotate(0, 0, angle);
     
         Destroy (clone.gameObject, 3);
         }
     }
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
     
         Destroy (clone.gameObject, 3);
         }
     }
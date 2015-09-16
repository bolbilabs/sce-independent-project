

     var Player : Transform;
     var MoveSpeed:float = 4;
     var MaxDist:float = 10;
     var MinDist:float = 5;
     
     
     
     
     function Start () 
     {
     
     }
     
     function Update () 
     {
         
         if(Vector3.Distance(transform.position,Player.position) >= MinDist){
         
              transform.position += (Player.transform.position - transform.position).normalized * MoveSpeed * Time.deltaTime;
     
               
               
              if(Vector3.Distance(transform.position,Player.position) <= MaxDist)
                  {
                     //Here Call any function U want Like Shoot at here or something
        } 
        
        }
     }


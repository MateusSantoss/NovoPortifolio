

const animacaoTopo = () => {
    setTimeout(() => {
        
            let h1 = document.createElement('h1');
            let header = document.getElementById('topo')
        
            header.appendChild(h1);
        
            h1.innerHTML="front end"
            h1.id = 'texto-header'

           let ball1 = document.getElementById('ball-1')
           let ball2 = document.getElementById('ball-2')
           let ball3 = document.getElementById('ball-3')
           ball1.remove()
           ball2.remove()
           ball3.remove()

           setTimeout(() => {
            
              h1.remove()

            
           }, 3000);

           

           
            

                
        
        
    }, 5000);

    

    
    
    

}




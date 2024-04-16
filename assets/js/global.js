

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
          
          
           //esferas que ficam ao redor do logo angular
           ball1.innerHTML = ''
           ball2.innerHTML = ''
           ball3.innerHTML  = ''

           ball1.id = ''
           ball2.id = ''
           ball3.id = ''

           //icones do front end
           ball1.innerHTML = '<i class="fa-brands fa-html5" id="icon1"></i>'
           ball2.innerHTML = '<i class="fa-brands fa-css3-alt" id="icon2"></i>'
           ball3.innerHTML = '<i class="fa-brands fa-js" id="icon3"></i>'

            

            

           


           setTimeout(() => {
            
              h1.remove()
              ball1.remove()
              ball2.remove()
              ball3.remove()

              
              

            
            
           }, 3000);

           
           setTimeout (() => {
            let circulo = document.createElement('div')
            header.appendChild(circulo);
            circulo.id = 'circulo'

            setTimeout (() => {
               circulo.remove()

            }, 10000)
            
              
          }, 3000)
          

           
         
        
        
    }, 5000);

    

    
    
    

}




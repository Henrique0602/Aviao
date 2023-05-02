let avião = {

    nome : "Boing 980",
    
    Ano : 2021,
    
    Cor : "Preto e Branco",
    
    Velocidade: 0,
    
    QuantidadeDeAssento : 100,
    
    Ligado : false,
    
    VelocidadeMaxima : 800,
    
    
    
    
    
    ligar : function(){
    
   this.Ligado = true
    
   console.log("Avião ligado...")
    
    
    
    
    },
    
    desligar : function(){
    
    this.Ligado = false
    
    console.log("Avião desligado...")
    
    },
    
    
    
    
    acelerar : function(){
    
    console.log("Velocidade atual: " +this.Velocidade)
    
    if (this.Ligado && this.Velocidade<this.VelocidadeMaxima) {
    
    this.Velocidade  = this.Velocidade +10
    
    }
    
   
    
    console.log("Acelerado...")
    
    }
    
    }
    
    
    
    
    //Programar avião
    
    
    
    
    //Vou sair com o avião
    
    
    
    
    avião.ligar();
    
    for(let x=1;x<=20;  x++){
    
    avião.acelerar();
    
    console.log("Velocidade atual: " +avião.Velocidade)
    
    }
    
     
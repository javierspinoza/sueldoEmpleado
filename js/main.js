var app = new Vue({
    el:'#app',
    data:{
        arrayDatos:[],

       nombre:null,
       cat:null,
       hMes:null,
       extras:null,                        
       anios:null, 
    //    msj:null,
       
  
    },
    methods: {
        procesar:function(){ 
            
            if (this.cat=="admi") {
                // this.msj = "admi"
                this.base = this.hMes * 60000;
                this.hEx = 60000 + (60000 * (50/100));
                this.Textras = this.extras * this.hEx;
                this.desS = this.base * (3 / 100); 
                this.desJ = this.base * (10 / 100);    
                this.subTotal = this.base + this.Textras - this.desS - this.desJ

                if (this.anios > 0 && this.anios <= 3) {
                    this.anti = this.base * 5 / 100 
                }
                else
                {
                    if (this.anios >= 4 && this.anios <= 6) {
                        this.anti = this.base * 10 / 100
                    }          
                }

                if (this.anios >= 7 && this.anios <= 10) {
                        this.anti = this.base * 15 / 100                    
                }
                else
                {
                    if(this.anios >= 11 && this.anios <= 15){
                       this.anti = this.base * 20 / 100
                    }
                } 

                if (this.anios >= 16) {
                    this.anti = this.base * 40 / 100
                }

                this.total= this.subTotal + this.anti                                
                this.arrayDatos.push({nombre:this.nombre,base:this.base,extras:this.Textras,anios:this.anti,desS:this.desS,desJ:this.desJ,total:this.total})
            }
            if (this.cat=="pro") {
                // this.msj = "pro"
                this.base = this.hMes * 38000;
                this.hEx = 38000 + (38000 * (50/100));
                this.Textras = this.extras * this.hEx;
                this.desS = this.base * (3 / 100); 
                this.desJ = this.base * (10 / 100);    
                this.subTotal = this.base + this.Textras - this.desS - this.desJ

                if (this.anios > 0 && this.anios <= 3) {
                    this.anti = this.base * 5 / 100 
                }
                else
                {
                    if (this.anios >= 4 && this.anios <= 6) {
                        this.anti = this.base * 10 / 100
                    }          
                }

                if (this.anios >= 7 && this.anios <= 10) {
                        this.anti = this.base * 15 / 100                    
                }
                else
                {
                    if(this.anios >= 11 && this.anios <= 15){
                       this.anti = this.base * 20 / 100
                    }
                } 

                if (this.anios >= 16) {
                    this.anti = this.base * 40 / 100
                }

                this.total= this.subTotal + this.anti                                
                this.arrayDatos.push({nombre:this.nombre,base:this.base,extras:this.Textras,anios:this.anti,desS:this.desS,desJ:this.desJ,total:this.total}) 
            }  
            if (this.cat=="tec") {
                // this.msj = "admi"
                this.base = this.hMes * 23000;
                this.hEx = 23000 + (23000 * (50/100));
                this.Textras = this.extras * this.hEx;
                this.desS = this.base * (3 / 100); 
                this.desJ = this.base * (10 / 100);    
                this.subTotal = this.base + this.Textras - this.desS - this.desJ

                if (this.anios > 0 && this.anios <= 3) {
                    this.anti = this.base * 5 / 100 
                }
                else
                {
                    if (this.anios >= 4 && this.anios <= 6) {
                        this.anti = this.base * 10 / 100
                    }          
                }

                if (this.anios >= 7 && this.anios <= 10) {
                        this.anti = this.base * 15 / 100                    
                }
                else
                {
                    if(this.anios >= 11 && this.anios <= 15){
                       this.anti = this.base * 20 / 100
                    }
                } 

                if (this.anios >= 16) {
                    this.anti = this.base * 40 / 100
                }

                this.total= this.subTotal + this.anti                                
                this.arrayDatos.push({nombre:this.nombre,base:this.base,extras:this.Textras,anios:this.anti,desS:this.desS,desJ:this.desJ,total:this.total})
            }   
            if (this.cat=="ope") {
                // this.msj = "admi"
                this.base = this.hMes * 16000;
                this.hEx = 16000 + (16000 * (50/100));
                this.Textras = this.extras * this.hEx;
                this.desS = this.base * (3 / 100); 
                this.desJ = this.base * (10 / 100);    
                this.subTotal = this.base + this.Textras - this.desS - this.desJ

                if (this.anios > 0 && this.anios <= 3) {
                    this.anti = this.base * 5 / 100 
                }
                else
                {
                    if (this.anios >= 4 && this.anios <= 6) {
                        this.anti = this.base * 10 / 100
                    }          
                }

                if (this.anios >= 7 && this.anios <= 10) {
                        this.anti = this.base * 15 / 100                    
                }
                else
                {
                    if(this.anios >= 11 && this.anios <= 15){
                       this.anti = this.base * 20 / 100
                    }
                } 

                if (this.anios >= 16) {
                    this.anti = this.base * 40 / 100
                }

                this.total= this.subTotal + this.anti                                
                this.arrayDatos.push({nombre:this.nombre,base:this.base,extras:this.Textras,anios:this.anti,desS:this.desS,desJ:this.desJ,total:this.total})
            } //en el push el primer nombre hace referencia al nombre que va a leer en el index en el array y el formulario        
        }     //el segundo nombre hace referencia al nuevo valor que tomara el primer nombre
    },
})
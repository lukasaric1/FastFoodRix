import "./Menu.css";
import sandwich from  '../assets/sandwich.gif';
import burger from  '../assets/burger.gif';
import tortilla from  '../assets/tortilla.gif';
import pizza from '../assets/pizza.gif';
import kebab from '../assets/kebab.gif';
import pancerote from '../assets/pancerote.gif';
import soda from '../assets/soda.gif'

const Menu = () => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (


      <div className="menu-container" id="menu" >


        <div className="divider" ></div>
        <div className="menu-info">

            
            <h2> JELOVNIK </h2>

            <div className="image-row">
                    <img
                        src={sandwich}
                        alt="Sandwich GIF"
                        
                        
                        onClick={() => scrollToSection("sandwich")}
                    />
                    <img
                        src={burger}
                        alt="Burger GIF"
                        
                        
                        onClick={() => scrollToSection("burger")}
                    />
                     <img
                        src={tortilla}
                        alt="Tortilla GIF"
                        
                        
                        onClick={() => scrollToSection("tortillas")}
                    />
                    <img
                        src={pizza}
                        alt="Pizza GIF"
                       
                       
                        onClick={() => scrollToSection("pizza")}
                    />
                    <img
                        src={pancerote}
                        alt="Pancerote GIF"
                       
                        
                        onClick={() => scrollToSection("pancerote")}
                    />
                    <img
                        src={kebab}
                        alt="Kebab GIF"
                        
                        
                        onClick={() => scrollToSection("kebab")}
                    />
                    <img
                        src={soda}
                        alt="Soda GIF"
                        
                        
                        onClick={() => scrollToSection("soda")}
                        
                    />
                    
                </div>


            <h4 id="sandwich"> SENDVIČI / SANDWICHES</h4>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Šunka,sir / Ham, Cheese.......................................................................6,00 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Pršut,sir / Prosciutto, Cheese...............................................................7,00 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Kulen,sir / Kulen, Cheese......................................................................7,00 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Tuna,sir / Tuna, Cheese.........................................................................7,50 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"10px"}}> Vegeterijanski / Vege............................................................................7,00 €</h5>
            <p  style={{marginTop: "10px"}}> Povrće s grilla, sir / Grilled vegetables, cheese </p>

            <h4 id="burger"> BURGERI / BURGERS</h4>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Calamari classic.....................................................................................15,00 €</h5>
            <p style = {{marginTop: "10px"}}> Lignje na kolutiće, frigani krumpiri,domaća lepinja, tartar / Squid rings, pommes, homemade bun, tartar sauce </p>
            
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Calamari burger......................................................................................10,00 €</h5>
            <p style = {{marginTop: "10px"}}> Lignje na kolutiće, tartar,rajčica,zelena salata /  Squid rings, tartar sauce, tomato, lettuce  </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Hamburger................................................................................................7,00 €</h5>
            <p style = {{marginTop: "10px"}}> Mljeveno meso, sir / Minced meat, cheese </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Cheeseburger............................................................................................7,50 €</h5>
            <p style = {{marginTop: "10px"}}> Mljeveno meso / Minced meat </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Chickenburger...........................................................................................7,50 €</h5>
            <p style = {{marginTop: "10px"}}> Piletina,sir / Chichen, cheese </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Cornflex Chicken Burger..........................................................................8,50 €</h5>
            <p style = {{marginTop: "10px"}}> Piletina,sir,slanina / Chicken,cheese,bacon </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Crispy Bacon Chickenburger....................................................................8,50  €</h5>
            <p style = {{marginTop: "10px"}}> Piletina,sir,slanina / Chicken,cheese,bacon </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Pobre Burger.............................................................................................9,50 €</h5>
            <p style = {{marginTop: "10px"}}> Mljeveno meso, sir, kajmak, pršut / </p>
            <p style = {{marginTop: "10px"}}> Minced meat, cheese, cream cheese, prosciutto </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Pulled pork..............................................................................................10,00 €</h5>
            <p style = {{marginTop: "10px"}}> Trgana svinjetina, blagi umak, povrće / Pulled pork, mild sauce, vegetables  </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Rix Burger................................................................................................11,50 €</h5>
            <p style = {{marginTop: "10px"}}> Dupli burger,sir,slanina / Double burger meat, cheese, bacon </p>

            <h4> ĆEVAPI</h4>
            <h5 style={{marginTop: "20px", marginBottom:"10px"}}> Ćevapi - 5 kom/pcs...................................................................................6,50 €</h5>
            <p style = {{marginTop: "10px"}}> Mljeveno meso / Minced meat </p>
            <h5 style={{marginTop: "20px", marginBottom:"10px"}}> Ćevapi - 7 kom/pcs...................................................................................8,50 €</h5>
            <p style = {{marginTop: "10px"}}> Mljeveno meso / Minced meat </p>
            <h5 style={{marginTop: "20px", marginBottom:"10px"}}> Ćevapi - 10 kom/pcs...............................................................................11,50 €</h5>
            <p style = {{marginTop: "10px"}}> Mljeveno meso / Minced meat </p>
           
            <h4 id="tortillas"> TORTILJA / TORTILLAS</h4>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Piletina,sir / Ham, Cheese......................................................................7,00 €</h5>
            <p style = {{marginTop: "10px"}}> Tortilja, piletina, povrće, sir, grčki jogurt / Tortilla, chicken, vegetables, cheese, greek jogurt   </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Tuna,sir / Prosciutto, Cheese.................................................................7,00 €</h5>
            <p style = {{marginTop: "10px"}}> Tortilja, tuna, povrće, sir, grčki jogurt / Tortilla, tuna, vegetables, cheese, greek jogurt</p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Pizza Antonia / Tuna, Cheese................................................................7,00 €</h5>
            <p style = {{marginTop: "10px"}}> Tortilja, šunka, sir, gljive, umak od rajčice / Tortilla, ham, cheese, mushrooms, tomato sauce </p>

           
            <h4 id= "pizza">PIZZA</h4>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Margherita.............................................................................................8,50 €</h5>
            <p style = {{marginTop: "10px"}}> Umak od rajčice, sir, origano, maslina / Tomato sauce, cheese, oregano, olive</p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Funghi.....................................................................................................9,00 €</h5>
            <p style = {{marginTop: "10px"}}> Umak od rajčice, sir, gljive, origano, masline  / Tomato sauce, cheese, mushrooms, oregano, olive </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Nutella....................................................................................................8,50 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Capricciosa.............................................................................................9,50 €</h5>
            <p style = {{marginTop: "10px"}}> Umak od rajčice, šunka, sir, origano, maslina, gljive / Tomato sauce, ham, cheese, oregano, olive, mushrooms </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Prosciutto.............................................................................................10,00 €</h5>
            <p style = {{marginTop: "10px"}}> Umak od rajčice, sir, pršut, gljive, origano, maslina / Tomato sauce, cheese, prosciutto, oregano, olive, mushrooms </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Tuna......................................................................................................10,50 €</h5>
            <p style = {{marginTop: "10px"}}> Umak od rajčice, tuna, sir, origano, maslina  / Tomato sauce, tuna, cheese, oregano, olive </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Vegeteriana.........................................................................................10,00 €</h5>
            <p style = {{marginTop: "10px"}}> Umak od rajčice, povrće, sir, origano, masline, gljive / Tomato sauce, vegetables, cheese, olive, mushrooms </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Piletina pizza.......................................................................................10,50 €</h5>
            <p style = {{marginTop: "10px"}}> Vrhnje za kuhanje, piletina, sir, gljive, origano, maslina  / Cooking cream, chicken, cheese, mushrooms, oregano, olive </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Quattro formaggi...............................................................................10,50 €</h5>
            <p style = {{marginTop: "10px"}}> Umak od rajčice, 4 vrste sira, origano, maslina / Tomato sauce, 4 types of cheese, oregano, olive </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> More....................................................................................................10,50 €</h5>
            <p style = {{marginTop: "10px"}}> Umak od rajčice, sir, kozice, inćuni, kapari, origano, masline / </p>
            <p style = {{marginTop: "10px"}}> Tomato sauce, cheese, shrimps, anchovies , capers, oregano, olive </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> RIX pizza.............................................................................................11,50 €</h5>
            <p style = {{marginTop: "10px"}}> Umak od rajčice, sir, kulen, slanina, feferoni, gljive, origano, maslina / </p>
            <p style = {{marginTop: "10px"}}> Tomato sauce, cheese, kulen, bacon, hot peppers, mushrooms, oregano, olive </p>
            


            <h4 id="pancerote"> PANCEROTE</h4>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Pancerota šunka, sir, gljive................................................................9,50 €</h5>
            <p style = {{marginTop: "10px"}}> Umak od rajčice, šunka, sir, gljive  / Tomato sauce, ham, cheese, mushrooms</p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Pancerota piletina............................................................................10,50 €</h5>
            <p style = {{marginTop: "10px"}}> Vrhnje za kuhanje, piletina, gljive, sir  / Cooking cream, chicken, mushrooms, cheese </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Pancerota Nutella..............................................................................8,50 €</h5>
            
            

            <h4 id="kebab"> KEBAB</h4>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Kebab u domaćoj lepinji / Kebab in homemade bun....................8,50 €</h5>
            <p style = {{marginTop: "10px"}}> Kebab, povrće, blagi ili ljuti umak / Kebab, vegetables, mid or hot sauce </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Tortilja Kebab / Tortilla Kebab.........................................................7,50 €</h5>
            <p style = {{marginTop: "10px"}}> Kebab, sir , povrće, blagi ili ljuti umak, piletina, gljive, sir / Kebab, cheese, vegetables, mid or hot sauce  </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Pizza Kebab......................................................................................11,50 €</h5>
            <p style = {{marginTop: "10px"}}> Umak od rajčice ili vrhnje za kuhanje, sir, kebab, gljive / Tomato sauce or Cooking cream, cheese, kebab, mushrooms  </p>
         
            

            <h4> UMAK / SAUCE</h4>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Blagi umak / Mild Sauce</h5>
            <p style = {{marginTop: "10px"}}> Majoneza, jogurt, češnjak, začini / Mayonnaise, yogurt, garlic, spices </p>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Extra ljuti umak / Extra hot sauce</h5>
            <p style = {{marginTop: "10px"}} > Čili, kečap, začini / Chilli, ketchup, spices</p>
           

            <h4 id="soda"> PIĆE / DRINKS </h4>
            <h5 style={{marginTop: "20px", marginBottom:"20px" }}> Coca-Cola...........................................................................................3,00 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Coca-Cola, Coca-Cola Zero...............................................................3,50 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Fanta, Bitter, Sprite...........................................................................3,50 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Ledeni čaj...........................................................................................3,50 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Karlovačko limenka / can.................................................................3,50 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Karlovačko limenka / can.................................................................3,50 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Voda gazirana / Sparkling water......................................................3,00 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Voda negazirana / Natural water.....................................................2,50 €</h5>


            <h4> DODACI / EXTRAS </h4>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Pomfrit / French fries........................................................................4,50 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Batat / Sweet potato.........................................................................5,00 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Pršut / Prosciutto..............................................................................1,00 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Panceta / Bacon.................................................................................1,00 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Kulen...................................................................................................1,00 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Sir / Cheese........................................................................................1,00 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Šunka / Ham......................................................................................1,00 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Tuna....................................................................................................1,00 €</h5>
            <h5 style={{marginTop: "20px", marginBottom:"20px"}}> Gljive / Mushrooms..........................................................................1,00 €</h5>


            
        </div>

        <div className="noticeA"> 
            <h3 style={{ fontFamily: "'Merriweather', Serif", marginTop:'120px'}}>SVA PECIVA SU DOMAĆA</h3>
        </div>

        <div className="noticeB"> 
            <h3 style={{ fontFamily: "'Merriweather', Serif"}}> ALL BUNS ARE HOMEMADE</h3>
        </div>
       
       <div className="freepiknotice">
            <p style={{fontFamily: "'Merriweather', Serif"}}>Animated icons designed by FREEPIK</p>
       </div>
       
      </div>
    );
};

export default Menu;
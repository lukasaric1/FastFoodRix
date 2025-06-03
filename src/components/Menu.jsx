import "./Menu.css";
import sandwich from '../assets/sandwich.gif';
import burger from '../assets/burger.gif';
import tortilla from '../assets/tortilla.gif';
import pizza from '../assets/pizza.gif';
import kebab from '../assets/kebab.gif';
import pancerote from '../assets/pancerote.gif';
import soda from '../assets/soda.gif';
import { meni } from "../meni";

const Menu = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
      <div className="menu-container" id="menu">

        

        <div className="menu-info">
            <h2>JELOVNIK</h2>

            <div className="image-row">
                <img src={sandwich} alt="Sandwich" onClick={() => scrollToSection("sandwich")} style={{ cursor: "pointer" }} />
                <img src={burger} alt="Burger" onClick={() => scrollToSection("burger")} style={{ cursor: "pointer" }} />
                <img src={tortilla} alt="Tortilla" onClick={() => scrollToSection("tortillas")} style={{ cursor: "pointer" }} />
                <img src={pizza} alt="Pizza" onClick={() => scrollToSection("pizza")} style={{ cursor: "pointer" }} />
                <img src={pancerote} alt="Pancerote" onClick={() => scrollToSection("pancerote")} style={{ cursor: "pointer" }} />
                <img src={kebab} alt="Kebab" onClick={() => scrollToSection("kebab")} style={{ cursor: "pointer" }} />
                <img src={soda} alt="Soda" onClick={() => scrollToSection("soda")} style={{ cursor: "pointer" }} />
            </div>
        </div>

        
        <div className="menu-list">
            {meni.map((category, index) => (
                <div key={index} id={category.id} className="menu-category">
                    <h2 className="menu-category-title">{category.name}</h2>
                    <div className="menu-items">
                        {category.article.map((item, idx) => (
                            <div key={idx} className="menu-item">
                                <div className="menu-item-header">
                                    <span className="menu-item-name">{item.name}</span>
                                    {item.price && (
                                        <span className="menu-item-price">{item.price.toFixed(2)} €</span>
                                    )}
                                </div>
                                {item.contains && <div className="menu-item-contains">{item.contains}</div>}
                                {item.amount && <div className="menu-item-amount">{item.amount}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

        
        <div className="noticeA"> 
            <h3>SVA PECIVA SU DOMAĆA</h3>
        </div>

        <div className="noticeB"> 
            <h3>ALL BUNS ARE HOMEMADE</h3>
        </div>

        <div className="freepiknotice">
            <p>Animated icons designed by FREEPIK</p>
        </div>
      </div>
    );
};

export default Menu;

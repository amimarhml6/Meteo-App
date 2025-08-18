import './Header.css'
import Search from '../MetrialUI/Search'
import Lang from '../MetrialUI/Lang'
import { useTranslation } from 'react-i18next';
import { useEffect,useContext } from 'react';
import { InfoContext } from '../Context/InfoContext';


export default function Header() {
    const { t, i18n } = useTranslation();
    const data = useContext(InfoContext);
    const langs = data.Lang;
    useEffect(() => {
    if (langs === 'English') {
        i18n.changeLanguage('en');
        document.body.dir = "ltr";   
    } else if (langs === 'Arabe') {
        i18n.changeLanguage('ar');
        document.body.dir = "rtl";  
    }

    console.log("Language changed to: ", langs);
    }, [langs]);

    return(
        <header className="Header">
            <nav className="Header-nav">
                <h3 className="Header-title">{t("Choose the Region :")}</h3>
            </nav>
            <nav className="Header-nav">
                <Search />
            </nav>
            <div className="Lang">
                <Lang/>
            </div>
        </header>
    )
}
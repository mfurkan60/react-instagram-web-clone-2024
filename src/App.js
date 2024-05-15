import { useRoutes } from "react-router-dom"; // useRoutes fonksiyonlarını react router dom içierisinde vermelisin
import routes from "routes";
function App() {
  return useRoutes(routes); //burada routes yapısını girmek zorundasın Genel route işelmeleri için
}

export default App;


import './App.css';
// THƯ VIỆN BỘ ĐỊNH TUYẾN
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// FILE CẤU HÌNH ĐƯỜNG DẪN
import { publicRoute } from './routes';

function App() {

  return (
    <Router>
      <div className="">
        <Routes>
          {/* DUYỆT CÁC ĐƯỜNG DẪN VÀ XUẤT CÁC ĐỐI TƯỢNG THUỘC ĐƯỜNG DẪN */}
          {publicRoute.map(function(router,index){
            const Layout = router.layout
            const Component = router.element
            return <Route key={index} path={router.path} element={<Layout><Component/></Layout>}/>
          })}
        </Routes> 
      </div>
    </Router>
  );
}

export default App;

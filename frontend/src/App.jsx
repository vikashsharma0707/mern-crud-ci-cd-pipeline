import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import Display from "./components/Display";
import Insert from "./components/Insert";
import Search from "./components/Search";
import Update from "./components/Update";
import Edit from "./components/Edit";
import View from "./components/View";



const App = () => {
  return (
    <>

      <h1>This is app page</h1>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />}>

            <Route path="home" element={<Home />} />
            <Route path="display" element={<Display />} />
            <Route path="insert" element={<Insert />} />
            <Route path="search" element={<Search />} />
            <Route path="update" element={<Update />} />
              <Route path="edit/:empid" element={<Edit />} />
              <Route path="view/:empview" element={<View />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
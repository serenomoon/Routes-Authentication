import { Route, Routes } from "react-router-dom"
import { Navbar } from "../ui/NavBar"

import { DcScreen } from "../dc/DcScreen"
import { Hero } from "../hero/Hero"
import { MarvelScreen } from "../marvel/MarvelScreen"
import { SearchScreen } from "../search/SearchScreen"

export const DashboardRoutes = () => {
  return (
    <>
     <Navbar />
     <div className="container">
      <Routes>
         <Route path="marvel" element={<MarvelScreen />} />
         <Route path="dc" element={<DcScreen />} />
    
         <Route path="search" element={<SearchScreen />} />
         <Route path="hero/:heroId" element={<Hero />} />
         
         <Route path="/" element={<MarvelScreen />} />
       </Routes>
     </div>
    </>
  )
}

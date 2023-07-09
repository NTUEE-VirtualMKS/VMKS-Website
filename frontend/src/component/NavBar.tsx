import React from "react"
import { Link } from "react-router-dom"

export const NavBar = () => {
  return(
    <nav>
      <Link to='/'>Home</Link>
      <Link to='IntroductionPage'>MKS介紹</Link>
      <Link to='MapPage'>地圖導覽</Link>
      <Link to='MaterialAndToolPage'>材料/工具一覽</Link>
      <Link to='TutorialPage'>新手教學</Link>
      <Link to='ShoppingList'>借用清單</Link>
      <Link to='ManagerPage'>管理員專區</Link>
      <Link to='LoginPage'>Login</Link>
    </nav>
  ) 
}
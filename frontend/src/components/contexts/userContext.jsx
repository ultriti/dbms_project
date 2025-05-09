import React, { createContext,useState } from 'react'

export const userDataContext = createContext()

export const UserContext = ({children}) => {
  const [theme_toggle_bol, settheme_toggle_bol] = useState(false)
  const [toggleEditFrame, settoggleEditFrame] = useState(false)

  const toggle_theme_funtion =()=>{
    settheme_toggle_bol(!theme_toggle_bol)
  }


  const toggleEditFrameFun = () =>{

    settoggleEditFrame(!toggleEditFrame)

  }



  return (
    <div>
      <userDataContext.Provider  value={{theme_toggle_bol,toggle_theme_funtion,toggleEditFrame,toggleEditFrameFun}}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext

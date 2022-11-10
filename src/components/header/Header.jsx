import React from 'react'
import { Button, FoodInput, FormContainer, HeaderContainer, MainHeader, Select } from './Header.style'

const Header = ({setQuery, setMeal, mealType, getData}) => {
  const handleSubmit =(e)=>{
    e.preventDefault();
    getData();
  }
  console.log("mealtype",mealType)
  return (
    <HeaderContainer>
      <MainHeader>
        RecipeApp
      </MainHeader>

      <FormContainer onSubmit={handleSubmit}>
        <FoodInput type="text" placeholder="search" 
        onChange={(e)=>setQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>

        <Select name='mealType' id='mealType'
        onChange={(e)=>setQuery(e.target.value)}
        >
        {mealType.map((meal, index)=>{
          return(
            <option key={index} value={meal}>{meal}</option>
          )
        })}
        </Select>
      </FormContainer>
    </HeaderContainer>
  )
}

export default Header

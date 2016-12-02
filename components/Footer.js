import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p style = {{textAlign: 'center', margin: '10px'}}>
    Filter:
    {" | "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>

    {" | "}
    <FilterLink filter="SHOW_COMMON">
      <span style = {{color: 'gray'}}>Common</span>
    </FilterLink>
    {" | "}
    <FilterLink filter="SHOW_RARE">
      <span style = {{color: 'orange'}}>Rare</span>
    </FilterLink>
    {" | "}
    <FilterLink filter="SHOW_EPIC">
      <span style = {{color: 'purple'}}>Epic</span>
    </FilterLink>
    {" | "}
    <FilterLink filter="SHOW_LEGENDARY">
      <span style = {{color: 'skyblue'}}>Legendary</span>
    </FilterLink>
    {" | "}
    <FilterLink filter="SHOW_TROOP">
      <span style = {{color: 'brown'}}>Troop</span>
    </FilterLink>
    {" | "}
    <FilterLink filter="SHOW_SPELL">
      <span style = {{color: 'hotpink'}}>Spell</span>
    </FilterLink>
    {" | "}
    <FilterLink filter="SHOW_BUILDING">
      <span style = {{color: 'green'}}>Building</span>
    </FilterLink>
    {" | "}

    <FilterLink filter="SHOW_ACTIVE">
      <span style = {{color: 'red'}}>Active</span>
    </FilterLink>
    {" | "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer

import { useState } from "react"
export default function() {
  
  const [productName , setProductName] = useState("")
  const [shoppingList , setShoppingList] = useState(["Pane", "Acqua" , "Vino"])
  
  

 const handleOnSubmit = (e) =>{
   e.preventDefault()
   setShoppingList((currentState) => [...shoppingList , productName]);
    setProductName("")

 }

  const handleField = (e) => {
    setProductName(e.target.value);
  }

  const handleDelete = (productToDelete , index) =>{
    setShoppingList((currentState) => currentState.filter((product) => productToDelete !== product) )
     
  } 



  return(
    <div className="container">
      <h1>LISTA DELLA SPESA</h1>
      <ul>
        {shoppingList.map((product, index) => {
          return <li key={index}>{product} <button onClick={() =>handleDelete(product)}>X</button></li> 
        })}
      </ul>
      <hr />
    
      <h3>Aggiungi prodotto</h3>

      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="Aggiungi alla Lista" value={productName} onChange={handleField} />
        <button type="submit">Invia</button>
        <p>Il prodotto è : {productName}</p>
      </form>
    </div>
  )
}
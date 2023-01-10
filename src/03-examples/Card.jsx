export const Card = (props) => {
    const {fullName, title, family, image} = props

  return (
    <>
       <div style={{display: "flex", justifyContent: "center", alingItem: "center"}}>
        <div className="card"  style={{width: "30rem"}} >
        <img  src={image} style={{width: "100%", height: "350px", backgroundSize: "cover" }} alt="image" />
        <div className="card-body">
          <h5 className="card-title">{fullName}</h5>
          <p className="card-text">{`Family: ${family}`}</p>
          <p className="card-text">{`Title: ${title}`}</p>
        </div>
      </div> 
      </div>   
    </>
  )
}

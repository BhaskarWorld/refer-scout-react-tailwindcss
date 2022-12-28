import DynamicHeroIcon from "./DynamicHeroIcons";

function TailwindCssButton({icon,children,href}) {

  if(!icon) return(
    <a href={href} className="btn btn-hover">   
        <div>{children}</div>       
    </a> 
  )
  return (
    <a href={href} className="btn btn-hover btn-border ">      
        <div className="btn-icon">
          <DynamicHeroIcon icon={icon}/>
        </div>
        <div>{children}</div>       
    </a> 
  );
}

export default TailwindCssButton;
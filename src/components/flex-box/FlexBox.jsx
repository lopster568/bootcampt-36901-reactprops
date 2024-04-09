const FlexBox = (props) => {
    return ( 
        <div style={{display: "flex", justifyContent: "space-between", width: "100%"}} >
            {props.children}
        </div>
     );
}
 
export default FlexBox;
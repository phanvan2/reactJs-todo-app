import React from 'react' ; 
const RED  = "#f00" ; 
const BLUE = "#00f" ; 
const GRAY = "#768c89" ; 

class Footer extends React.Component{
    constructor(props){
        super(props)
        this.submitThemeColor = this.submitThemeColor.bind(this) 
    }
    submitThemeColor(color){
        if( color){
            console.log("handleChangeTheme") ; 
            this.props.saveColorTheme(color) ; 
        }
    }
    componentWillReceiveProps(nextprops){
        console.log('UNSAFE_componentWillReceiveProps: ' +JSON.stringify(nextprops)) ; 
        document.documentElement.style.setProperty("--main-color", nextprops.themeColor.color);
    }
    render(){
        return(
            <div className="footer">
                <div className="vertical-center">
                    <span>Choose theme</span>
                    <button onClick={ () => this.submitThemeColor(RED)} className="dot red"></button>
                    <button onClick={() => this.submitThemeColor(BLUE)} className="dot blue" ></button>
                    <button onclick={() => this.submitThemeColor(GRAY)} className="dot gray" ></button>
                </div>
            </div>
        ); 
    }
}; 

export default Footer ; 
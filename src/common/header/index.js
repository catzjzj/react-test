import React, { Component } from 'react';
import { HeaderWrapper, LogoDiv, Navbar, Logo, MiddleDiv, RightBtn, NavItem, NavSearch, BtnR, SearchWrapper } from './style'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            focus: false
        }
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }
    render() {
        return (
            <Navbar>
                <HeaderWrapper>
                    <LogoDiv>
                        <Logo href="/" />
                    </LogoDiv>
                    <MiddleDiv>
                        <NavItem className="left active" >首页</NavItem>
                        <NavItem className="left" >下载App</NavItem>
                        <SearchWrapper>
                            <NavSearch className={this.state.focus ? "focused" : ""} onFocus={this.handleFocus} onBlur={this.handleBlur}></NavSearch>
                            <i className={this.state.focus ? "focused iconfont" : "iconfont"}>&#xe614;</i>
                        </SearchWrapper>
                        <NavItem className="right" >登录</NavItem>
                        <NavItem className="right" ><i className="iconfont">&#xe636;</i></NavItem>
                    </MiddleDiv>
                    <RightBtn>
                        <BtnR className="reg">注册</BtnR>
                        <BtnR className="writting">写文章</BtnR>
                    </RightBtn>
                </HeaderWrapper>
            </Navbar>
        );
    }
    handleFocus(){
        this.setState(()=>{
            return {
                focus:true 
            }
        })
    }
    handleBlur(){
        this.setState(()=>{
            return {
                focus:false 
            }
        })
    }
}

export default Header
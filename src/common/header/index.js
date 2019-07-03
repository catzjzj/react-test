import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { HeaderWrapper, LogoDiv, Navbar, Logo, MiddleDiv, RightBtn, NavItem, NavSearch, BtnR, SearchWrapper } from './style'
const Header = (props) => {
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
                        <CSSTransition
                            in={props.focused}
                            timeout={200}
                            classNames="slide">
                            <NavSearch className={props.focused ? "focused" : ""} onFocus={props.handleFocus} onBlur={props.handleBlur}></NavSearch>
                        </CSSTransition>
                        <i className={props.focused ? "focused iconfont" : "iconfont"}>&#xe614;</i>
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

const mapStateToProps = state => ({
    focused: state.header.focused
})

const mapDispatchtoProps = dispatch => ({
    handleFocus() {
        dispatch(actionCreators.searchFocus())
    },
    handleBlur() {
        dispatch(actionCreators.searchBlur())
    }
})
export default connect(mapStateToProps, mapDispatchtoProps)(Header)

import styled from 'styled-components';
import logoSrc from '../../static/logo.png'
export const Navbar = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`
export const HeaderWrapper = styled.div`
	z-index: 1;
	position: relative;
	height: 56px;
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
`;

export const LogoDiv = styled.div`
    float:left;
    height:56px;
    width:20%;
`
export const Logo = styled.a`
    height:56px;
    width:100px;
    display:block;
    background: url(${logoSrc}) no-repeat;
	background-size: contain;
`
export const MiddleDiv = styled.div`
    float:left;
    height:56px;
    width:60%;
`
export const RightBtn = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    float:right;
    height:56px;
    width:20%;
`
export const NavItem = styled.div`
    line-height:56px;
    font-size:17px;
    padding:0 15px;
    color:#333;
    font-weight:bold;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
    width:150px;
    margin-top: 10px;
    height:38px;
    box-sizing:border-box;
    border:none;
    padding:0 20px;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:260px;
    }
`
export const BtnR = styled.div`
    width: 80px;
    height: 43px;
    float: right;
    border-radius: 20px;
    margin-right:20px;
    border: 1px solid #ea6f5a;
    padding:0 10px;
    display:flex;
    align-items:center;
    justify-content:center;
    &.reg{
        font-size: 15px;
        color:#ea6f5a;
    }
    &.writting{
        font-size: 15px;
        color: #fff;
        background-color: #ea6f5a;
    }
`

export const SearchWrapper = styled.div`
	position: relative;
	float: left;
	.iconfont {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
`;
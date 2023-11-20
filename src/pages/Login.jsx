import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

const Login = () => {
    let [isShowPassword, setIsShowPassword] = useState(false);
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let iConLogin = ['button.png', 'google.png', 'tw.png'];
    const handleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    }
    const handleInputUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleInputPassword = (e) => {
        setPassword(e.target.value);
    }
    const handleLogin = () => {
    }
    return (
        <div className='login container mx-auto flex items-center justify-center'>
            <div className='w-[456px] p-[40px] shadow-2xl absolute top-[15%] left-[50%] ml-[-228px] '>
                <div className='header-logn'>
                    <h1 className='text-[26px] text-center font-[500] uppercase'> Đăng nhập </h1>
                </div>
                <p className='mt-[15px] text-center text-[#777E90]'> Bạn chưa có tài khoảng? <NavLink to='/register'
                                                                                                     className='text-[#f5b70c]'> Đăng
                    kí </NavLink></p>
                <div className='flex justify-between mt-[24px]'>
                    {iConLogin.map((item, index) =>
                        <button key={index}>
                            <img src={require(`../images/${item}`)} alt=''/>
                        </button>
                    )}
                </div>
                <p className="text-center mt-[24px] text-[#777E90] text-[14px]">Hoặc đăng nhập bằng tài khoảng</p>
                <div className='body-login mt-[24px] flex flex-col'>
                    <label className='text-[14px]'>Tên đăng nhập</label>
                    <input type='text'
                           className='mt-[10px] h-[40px] border border-[#C4C4C4] rounded-[8px]  focus:border-[#f5b70c] focus:ring-[#f5b70c] focus:ring-1 focus:outline-none pl-2'
                           placeholder='Tên đăng nhập'
                           value={username}
                           onChange={handleInputUsername}/>
                    <div className='flex flex-col relative'>
                        <label className='text-[14px] mt-[18px]'>Mật khẩu</label>
                        <button className='absolute right-[10px] bottom-[13px]'
                                onClick={handleShowPassword}>
                            <img src={isShowPassword ? require('../images/hide.png') : require('../images/Vector.png')}
                                 alt={isShowPassword ? 'Hiển thị mật khẩu' : 'Ẩn mật khẩu'}/>
                        </button>
                        <input type={isShowPassword ? 'text' : 'password'}
                               className='mt-[10px] h-[40px] border border-[#C4C4C4] rounded-[8px] focus:border-[#f5b70c] focus:ring-[#f5b70c] focus:ring-1 focus:outline-none pl-2'
                               placeholder='*******'
                               value={password}
                               onChange={handleInputPassword}/>
                    </div>
                </div>
                <button className='text-[#f5b70c] text-[14px] mt-[18px] text-center'>Quên mật khẩu ?</button>
                <br/>
                <button
                    className='text-[#ffff] text-[16px] mt-[24px] text-center font-[500] w-[100%] bg-[#f5b70c] p-[8px] border  rounded-[8px]'
                    onClick={handleLogin}
                >Đăng nhập
                </button>
            </div>
        </div>
    )
};

export default Login;
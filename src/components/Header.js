import React, { Component } from 'react'
import { Link } from 'react-router'

import classNames from 'classnames/bind';

import styles from '../style/index.less'
const cx = classNames.bind(styles);

class Header extends Component {
    render() {
        return (
            <nav className={cx('navbar', 'navbar-default')}>
                <div className={cx('container-fluid')}>
                    <div className={cx('navbar-header')}>
                        <Link className={cx('navbar-brand')} to="/">Home</Link>
                        <Link className={cx('navbar-brand', 'active')} to="/about">About</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header

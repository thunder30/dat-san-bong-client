import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.scss'

function NotFoundPage() {
    return (
        <div id={styles.notfound}>
            <div className={styles.notfound}>
                <div className={styles.notfound404}>
                    <h1>Oops!</h1>
                    <h2>404 - Không tìm thấy trang!</h2>
                </div>
                <Link to="/">Trang chủ</Link>
            </div>
        </div>
    )
}

export default NotFoundPage

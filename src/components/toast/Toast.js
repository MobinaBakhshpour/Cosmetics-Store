import React from 'react'
import './Toast.css'

export default function Toast() {
    return (
        <div className="toast custom-toast-container align-items-center position-fixed bottom-0 m-3 z-1 show" >
            <div className="d-flex justify-content-evenly align-items-center">
                <div className="toast-body">
                    محصول با موفقیت به سبد خرید شما اضافه شد.
                </div>
                <button type="button" className="btn-close" ></button>
            </div>
        </div>
    )
}

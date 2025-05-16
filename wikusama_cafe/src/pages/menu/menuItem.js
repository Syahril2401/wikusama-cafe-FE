import React from 'react'

export default function menuItem(props) {
    return (
        <div className='w-100 m-2 border rounded-2'>
            <img src={props.img} alt='img-menu' className='w-100 img-fluid rounded-2'
                style={{ height: `400px` }} />

            <div className='w-100 mt-2 p-2'>
                <h5 className='text-info mb-1'>
                    {props.nama_menu}
                </h5>
                <h6 className='fw-normal mb-1'>
                    {props.jenis}
                </h6>
                <p>
                    {props.deskripsi}
                </p>
                <h5 className='text-success'>
                    Rp {props.harga}
                </h5>
            </div>
            <div className='w-100 p-2'>
                <button
                    className='btn btn-primary '
                    onClick={() => props.onEdit()}>
                    Edit
                </button>
                <button
                    className='btn btn-danger mx-1'
                    onClick={() => props.onDelete()}>
                    Hapus
                </button>
            </div>
        </div>
    )
}
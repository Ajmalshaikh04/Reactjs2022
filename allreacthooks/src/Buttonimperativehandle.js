//useImperativeHandle part

import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Buttonimperativehandle = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false)

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle)
        }
    }))
    return (
        <><button onClick={() => {
            setToggle(!toggle)
        }}>
            Button from child
        </button>
            {toggle && <span>Toggle</span>}
        </>
    )
})

export default Buttonimperativehandle
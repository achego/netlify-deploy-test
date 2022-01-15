import React, { useState } from 'react'
import './Options.css'
import '../../../../index.css'
import Option from './Option/Option'


const Options = (props) => {

    const [active, setactive] = useState(1)

    const setActive = (id) => {
        setactive(id)
    }

    const options = props.data.map(opti => {
    return <Option 
        className='opti'
        key={opti.id}
        id={opti.id}
        title={opti.title}
        active={active===opti.id}
        setActive={setActive}
        color={props.color}/>
    })

    

    return (
        <div className={'container Options'}>
            <div>
                {options}
            </div>
        </div>
    )
}

export default Options

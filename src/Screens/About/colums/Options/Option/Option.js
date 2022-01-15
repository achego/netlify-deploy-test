import React from 'react'
import './Option.css'
import '../../../../../index.css'

const Option = (props) => {

    let color = '#FF6AF0'
    if (props.color) {
        color = props.color
    }

    return (
        <div 
            className={['Option', props.active?'showMore':null, props.className?props.className:null].join(' ')}
            onClick={() => props.setActive(props.id)}
            style={{
                backgroundColor: props.active?color:'transparent'
            }}>
            <div className={'details'}>
                <h2 
                    className={'bold_text'}
                    style={{
                    }}>{props.title}</h2>
                <div style={{
                    opacity:props.active?'0':'1',
                    backgroundColor:color}}>+</div>
            </div>
            <p className={['desc', 'small_p'].join(' ')}>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.</p>
        </div>
    )
}

export default Option

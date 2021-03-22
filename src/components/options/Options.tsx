import React from 'react'
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';

export const Options = (props: any) => {
    const toggleOn = () => {
        var options = props.options;
        options.on = !options.on;
        props.handleOptionClick(options);
    }
    return (
        <div className='Option'>
            <DashboardTwoToneIcon 
                style={{
                    background:'#fff', 
                    cursor:'pointer',
                    borderRadius:5, 
                    padding:10,
                    boxShadow: '0 2.8px 2.2px rgb(0 0 0 / 3%), 0 6.7px 5.3px rgb(0 0 0 / 5%), 0 12.5px 10px rgb(0 0 0 / 6%), 0 22.3px 17.9px rgb(0 0 0 / 7%), 0 41.8px 33.4px rgb(0 0 0 / 9%), 0 100px 80px rgb(0 0 0 / 12%)'
                }} 
                onClick={toggleOn}
                fontSize='small' 
                color='primary' />
        </div>
    )
}

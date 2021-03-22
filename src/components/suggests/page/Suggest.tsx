import { Button, CardContent, DialogActions, Typography } from '@material-ui/core'
import React from 'react'

export const Suggest = (props: any) => {
    return (
        <div className='Suggest'>
            <CardContent style={{paddingBottom:5}}>
                <Typography style={{fontSize:12}} color="textSecondary" gutterBottom>
                    New page found
                </Typography>
                <Typography variant="h6" component="h5">
                    {window.document.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {window.location.href}
                </Typography>
                <DialogActions>
                    <Button variant='contained' color='primary' size="small">Add</Button>
                    <Button color='secondary' size="small">Dismiss</Button>
                </DialogActions>
            </CardContent>
        </div>
    )
}

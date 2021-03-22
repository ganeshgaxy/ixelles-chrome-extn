import { Button, CardContent, DialogActions, Typography } from '@material-ui/core'
import React from 'react'

export const SuggestInfo = () => {
    return (
        <div className='Suggest'>
            <CardContent style={{paddingBottom:5}}>
                <Typography style={{fontSize:12}} color="textSecondary" gutterBottom>
                    Page is already added
                </Typography>
                <DialogActions>
                    <Button color='secondary' size="small">Dismiss</Button>
                </DialogActions>
            </CardContent>
        </div>
    )
}

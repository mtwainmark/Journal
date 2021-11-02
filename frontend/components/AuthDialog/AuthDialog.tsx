import { Button, Dialog, DialogContent, DialogContentText, TextField, Typography } from '@material-ui/core'
import React, {useState} from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

import styles from './AuthDialog.module.scss'


interface AuthDialogProps{
    visible: boolean;
    onClose: () => void;
}

export const AuthDialog : React.FC<AuthDialogProps> = ({visible, onClose}) => {
    const [formType, setFormType] = useState<'main' | 'email'>('main')

    return (
        <Dialog
            open={visible}
            onClose={onClose}
            maxWidth='xs'
            fullWidth
        >
            <DialogContent>
                <DialogContentText>
                    {formType === 'email' &&
                     <Button onClick={() => setFormType('main')}><ArrowBackIcon/>Назад</Button>
                    }

                    <Typography className={styles.title}>
                        Вход в аккаунт
                    </Typography>

                    {formType === 'main' &&
                    <>
                        <div>
                            <Button onClick={() => setFormType('email')} className='mb-10' variant='contained' fullWidth>Почта</Button>
                            <Button className='mb-10' variant='contained' fullWidth>Вконтакте</Button>
                            <Button className='mb-10' variant='contained' fullWidth>Google</Button>
                        </div>

                        <div className={styles.miniBottom}>
                            <Button className='mb-10' variant='contained' fullWidth>Fb</Button>
                            <Button className='mb-10' variant='contained' fullWidth>Twitter</Button>
                            <Button className='mb-10' variant='contained' fullWidth>Apple</Button>
                        </div>
                    </>
                    }   
                    {formType === 'email' &&
                    <form>
                        <TextField className='mb-20' size='small' label='Почта' variant='outlined' fullWidth required/>
                        <TextField className='mb-20' size='small' label='Пароль' variant='outlined' type='password' fullWidth required/>
                        <Button color='primary' variant='contained' fullWidth>Войти</Button>
                    </form>
                    }   
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}

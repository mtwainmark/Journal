import React from 'react'
import { NextPage } from 'next'
import { MainLayout } from '../layouts/MainLayout'
import { WriteForm } from '../components/WriteForm/WriteForm'
import {
    TextsmsOutlined,
  } from '@material-ui/icons';
import { Button } from '@material-ui/core';
  
const WtirePage: NextPage = () => {
    return (
        <MainLayout className="main-layout-white" hideComments hideMenu>
            <WriteForm/>
            <Button variant="contained" color="primary">
              <TextsmsOutlined className="mr-10" />
              Опубликовать
            </Button>

        </MainLayout>
    )
}

export default WtirePage;
import React, { memo } from 'react'
import Grid from '../../../components/Grid'
import Skeleton from '../../../components/Sketeton'
import  Card  from './Card'


function Board ({data}) {
    const { cases, todayDeaths, recovered, deaths, todayCases } = data

    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />
    
    return (
        <Grid container spacing={4}>
           <Grid item xs={12} md={3}>
               <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
           </Grid>
           <Grid item xs={12} md={3}>
               <Card value={getValue(todayDeaths)} label="Óbtos Hoje" color="#F7B829" />
           </Grid>
           <Grid item xs={12} md={3}>
               <Card value={getValue(todayCases)} label="Casos Hoje" color="#000" />
           </Grid>
           <Grid item xs={12} md={3}>
               <Card value={getValue(deaths)} label="Total de Mortos" color="#E95078" />
           </Grid>
           <Grid item xs={12} md={3}>
               <Card value={getValue(recovered)} label="Total de Recuperados" color="#67C887" />
           </Grid>
        </Grid>
    )
}

export default memo(Board)
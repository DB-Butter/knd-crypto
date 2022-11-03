import { React, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import showStore from '../stores/showStore'
import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { waitFor } from '@testing-library/react';
import Header from '../components/Header';

function Show() {
    const store = showStore()
    const params = useParams()

    useEffect(() => {
        store.fetchData(params.id)
    }, [])

    console.log(store.data)
    if (!store.data.name) return <div className="api-load">API Loading... <br/> <Link to="/">HOME</Link></div>
  return (
    <div>
        <Header back />
        <header className='show-header'>
            <img src={store.data.image.large}/>
            <h2>{store.data.name} ({store.data.symbol})</h2>
        </header>
        <div className='width'>
        <div className='show-graph'>
            <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={500} height={400} data={store.graphData}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
            </ResponsiveContainer>
            </div>
        </div>

        <div className='show-details'>
        <div className='width'>
            <h2>Details</h2>
        <div className='show-details-row'>
            <h3>Market cap rank</h3>
            <span>{store.data.market_data.market_cap_rank}</span>
        </div>
        <div className='show-details-row'>
            <h3>24h high</h3>
            <span>${store.data.market_data.high_24h.usd}</span>
        </div>
        <div className='show-details-row'>
            <h3>24h low</h3>
            <span>${store.data.market_data.low_24h.usd}</span>
        </div>
        <div className='show-details-row'>
            <h3>Circulating Supply</h3>
            <span>${store.data.market_data.circulating_supply}</span>
        </div>
        <div className='show-details-row'>
            <h3>Current Price</h3>
            <span>${store.data.market_data.current_price.usd}</span>
        </div>
        <div className='show-details-row'>
            <h3>1y change</h3>
            <span>{store.data.market_data.price_change_percentage_1y.toFixed(2)}%</span>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Show
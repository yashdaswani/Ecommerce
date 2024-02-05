import React, { useEffect } from 'react'
import axios from 'axios'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useContext } from 'react'
import { ContextFunction } from '../../Context/Context'
import CategoryCard from '../../Components/Category_Card/CategoryCard';
import BannerData from '../../Helpers/HomePageBanner';
import Carousel from '../../Components/Carousel/Carousel'
import SearchBar from '../../Components/SearchBar/SearchBar'
import CopyRight from '../../Components/CopyRight/CopyRight'
const HomePage = () => {
    const { setCart } = useContext(ContextFunction)
    let authToken = localStorage.getItem('Authorization')
    useEffect(() => {
        getCart()
        window.scroll(0, 0)
    }, [])
    const getCart = async () => {
        if (authToken !== null) {
            const { data } = await axios.get(`https://ecommerce-0gim.onrender.com/api/cart/fetchcart`,
                {
                    headers: {
                        'Authorization': authToken
                    }
                })
            setCart(data);
        }

    }



    return (
        <>
            <Container maxWidth='xl' style={{ display: 'flex', justifyContent: "center", padding: 0, flexDirection: "column", marginBottom: 70 }}>
                <Box padding={1}>
                    <Carousel />
                </Box>
                <Container style={{ marginTop: 90, display: "flex", justifyContent: 'center' }}>
                    <SearchBar />
                </Container>
                <Typography variant='h3' sx={{ textAlign: 'center', marginTop: 10, color: '#1976d2', fontWeight: 'bold' }}>Categories</Typography>
                <Container maxWidth='xl' style={{ marginTop: 90, display: "flex", justifyContent: 'center', flexGrow: 1, flexWrap: 'wrap', gap: 20, }}>
                    {
                        BannerData.map(data => (
                            <CategoryCard data={data} key={data.img} />
                        ))
                    }
                </Container>
            </Container >
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1479169871834108"
     crossOrigin="anonymous"></script>
<ins
  className="adsbygoogle"
  style={{ display: 'block' }}
  data-ad-client="ca-pub-1479169871834108"
  data-ad-slot="7074158702"
  data-ad-format="auto"
  data-full-width-responsive="true"
></ins>

<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
            <CopyRight sx={{ mt: 8, mb: 10 }} />
        </ >
    )
}

export default HomePage
import Head from 'next/head'
import Link from 'next/link'
import {
  Grid, Button, Heading, Text, Center, Image, Box
} from '@chakra-ui/react'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SearchInput from '../components/search'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fabra Online | Bring It On</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />

        <Center>
          <Heading color="brand.200" mx={4} paddingTop={28}
            textAlign="center" justifyContent="center">
            A Community of Buy and Sell.
          </Heading>
        </Center>
        <Center>
          <Text fontSize={20} mx={{ base: 4, md: 32 }} pt={2} textAlign="center" justifyContent="center">Buy and sell everything
          from used cars to mobile phones, computers, animals or pets, or search for a property and services, jobs and more
          around the world.
          </Text>
        </Center>

        <SearchInput />

        <Grid templateColumns="repeat(3, 1fr)" gap={{ base: 4, md: 0 }} margin={{ base: 4 }} mx={{ sm: 60, lg: 80 }}>
          <Link href="/category/barber-and-salon">
            <Box>
              <Image w="17" h="12"
                src="/images/barber.svg"
                alt="Barbering and salon"
              ></Image>
              <span>Salon &amp; Barbering</span>
            </Box>
          </Link>
          <Link href="/category/car">
            <Box>
              <Image w="65px" h="12"
                src="/images/car.svg"
                alt="Vehicles"
              ></Image>
              <span>Vehicles</span>
            </Box>
          </Link>
          <Link href="/category/electronics">
            <Box>
              <Image w="15" h="12"
                src="/images/electronics.svg"
                alt="Electronics"
              ></Image>
              <span>Computers &amp; Electronics</span>
            </Box>
          </Link>
          <Link href="/category/fashion">
            <Box>
              <Image w="15" h="60px"
                src="/images/fashion.svg"
                alt="Fashion"
              ></Image>
              <span>Fashion</span>
            </Box>
          </Link>
          <Link href="/category/food">
            <Box>
              <Image w="15" h="60px"
                src="/images/food.svg"
                alt="Food"
              ></Image>
              <span>Grocery / African Restaurants &amp; Food</span>
            </Box>
          </Link>
          <Link href="/category/furniture-and-appliances">
            <Box>
              <Image w="80px" h="62px"
                src="/images/furniture.svg"
                alt="Furniture"
              ></Image>
              <span>Furniture &amp; Appliances</span>
            </Box>
          </Link>
          <Link href="/category/house-and-apartment">
            <Box>
              <Image w="70px" h="55px"
                src="/images/house.svg"
                alt="House or Apartments"
              ></Image>
              <span>House / Apartments</span>
            </Box>
          </Link>
          <Link href="/category/phones-and-tablets">
            <Box>
              <Image w="15" h="60px"
                src="/images/phones.svg"
                alt="Phones and Tablets"
              ></Image>
              <span>Mobile phones &amp; Tablets</span>
            </Box>
          </Link>
          <Link href="/category/repair-and-construction">
            <Box>
              <Image w="15" h="55px"
                src="/images/repair.svg"
                alt="Repair and Construction"
              ></Image>
              <span>Repair &amp; Construction</span>
            </Box>
          </Link>
          <Link href="/category/animals-and-pets">
            <Box>
              <Image w="15" h="55px"
                src="/images/pet.svg"
                alt="Animals and Pets"
              ></Image>
              <span>Animals &amp; Pets</span>
            </Box>
          </Link>
          <Link href="/category/services">
            <Box>
              <Image w="15" h="55px"
                src="/images/services.svg"
                alt="Services"
              ></Image>
              <span>Nanny &amp; Baby Sitters</span>
            </Box>
          </Link>
          <Link href="/category/jobs">
            <Box>
              <Image w="15" h="55px"
                src="/images/bag.svg"
                alt="Jobs"
              ></Image>
              <span>Jobs</span>
            </Box>
          </Link>
        </Grid>

        <Center>
          <Heading color="brand.200" p={3}>Got something to sell?</Heading>
        </Center>

        <Center p={5}>
          <Button
            bgGradient="linear(to-r,brand.200,brand.100)"
            _hover={{ bg: "brand.100" }}
            color="white"
          >
            Post and advert for free
          </Button>
        </Center>

        <Footer />
      </main>
    </div>
  )
}

import decor1 from './decor1.jpg'
import decor2 from './decor2.jpg'
import decor3 from './decor3.jpg'
import garland from './garland.jpg'
import plant2 from './plant2.jpg'
import plant3 from './plant3.jpg'
import cutlery1 from './cutlery1.jpg'
import cutlery2 from './cutlery2.jpg'
import lantern from './lantern.jpg'
import cart_icon from './cart_icon.png'
import banner from './banner.jpg'
import invite from './invite.jpg'
import vases from './vases.jpg'
import recycle from './recycle.png'
import box from './box.png'
import period from './period.jpg'
import delivery from './delivery.png'

export const assets={
    decor1,decor2,decor3,plant2,plant3, cutlery1, cutlery2, cart_icon,garland,banner,invite,vases,recycle,box,period,delivery
}

export const products = [
    {
        _id: "aaaa",
        name: "Biodegradable Decor",
        desc: "Handcrafted biodegradable decor made from natural fibers.",
        price: 15000,
        image: [decor1],
        category: "Decor",
        date: 12621487,
        bestseller: true
    },
    {
        _id: "bbbb",
        name: "Biodegradable plates",
        desc: "Durable, plant-based cutlery that’s 100% compostable..",
        price: 1200,
        image: [cutlery1],
        category: "Cutlery",
        date: 12621488,
        bestseller: false
    },
    {
        _id: "cccc",
        name: "Flower Pots",
        desc: "Eco-friendly plant pots that can be planted directly in the soil.",
        price: 3000,
        image: [decor2],
        category: "Decor",
        date: 12621489,
        bestseller: true
    },
    {
        _id: "dddd",
        name: "Plant Holders",
        desc: "Hand-painted plant holders made from natural terracotta clay.",
        price: 800,
        image: [plant2],
        category: "Plant",
        date: 12621490,
        bestseller: false
    },
    {
        _id: "dddd",
        name: "Biodegradable Garland ",
        desc: "Eco-friendly garlands made from dried flowers, leaves, or natural fibers like jute, perfect for event decoration.",
        price: 500,
        image: [garland],
        category: "Decor",
        date: 12621490,
        bestseller: false
    },
    {
        _id: "dddd",
        name: "Bamboo Bench Seating",
        desc: "Simple and stylish bamboo benches that offer eco-friendly seating options for both indoor and outdoor events.",
        price: 800,
        image: [decor3],
        category: "Plant",
        date: 12621490,
        bestseller: false
    },
    {
        _id: "dddd",
        name: "Biodegradable Lanterns ",
        desc: "Lanterns crafted from bamboo or palm leaves, offering a sustainable and beautiful lighting option for events.",
        price: 800,
        image: [lantern],
        category: "Decor",
        date: 12621490,
        bestseller: false
    },
    {
        _id: "dddd",
        name: "Biodegradable Banners ",
        desc: "Customizable banners made from recycled fabric or paper, perfect for event signage and branding.",
        price: 400,
        image: [banner],
        category: "Decor",
        date: 12622430,
        bestseller: true
    },
    {
        _id: "dddd",
        name: "Recycled Paper Invitations",
        desc: "Invitations made from 100% recycled paper or seeded paper that can be planted after use to grow wildflowers.",
        price: 100,
        image: [invite],
        category: "Decor",
        date: 126265690,
        bestseller: false
    },
    {
        _id: "dddde",
        name: "Coconut Shell Vases",
        desc: "Natural vases made from coconut shells, perfect for floral arrangements, providing a sustainable alternative to traditional glass or plastic.",
        price: 100,
        image: [vases],
        category: "Decor",
        date: 126265690,
        bestseller: false
    }
];

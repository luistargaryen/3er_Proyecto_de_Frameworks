import basket_icon from './basket_icon.png'
import logo from './logo.png'
import search_icon from './search_icon.png'

import menu_1 from './categorias/accesorios/menu_1.jpg'
import menu_2 from './categorias/almacenamiento/menu_2.webp'
import menu_3 from './categorias/audio_y_video/menu_3.webp'
import menu_4 from './categorias/componentes_de_hardware/menu_4.webp'
import menu_5 from './categorias/computadoras_y_portatiles/menu_5.webp'

import producto1 from './categorias/accesorios/funda.jpg'
import producto2 from './categorias/accesorios/hdmi.jpg'
import producto3 from './categorias/accesorios/usbC.jpg'
import producto4 from './categorias/almacenamiento/ssd.webp'
import producto5 from './categorias/almacenamiento/pendrive.webp'
import producto6 from './categorias/almacenamiento/discoduroexterno.webp'
import producto7 from './categorias/audio_y_video/audifonosdediadema.webp'
import producto8 from './categorias/audio_y_video/camaraweb.webp'
import producto9 from './categorias/audio_y_video/proyectorportatil.webp'
import producto10 from './categorias/componentes_de_hardware/inteli9.webp'
import producto11 from './categorias/componentes_de_hardware/rtx490.webp'
import producto12 from './categorias/componentes_de_hardware/placabas.webp'
import producto13 from './categorias/computadoras_y_portatiles/lapto.webp'
import producto14 from './categorias/computadoras_y_portatiles/ultrabooksamsun.webp'
import producto15 from './categorias/computadoras_y_portatiles/galaxytab.webp'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    basket_icon,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export const menu_list = [
    {
        menu_name: "Accesorios",
        menu_image: menu_1
    },
    {
        menu_name: "Almacenamiento",
        menu_image: menu_2
    },
        {
        menu_name: "Audio y Video",
        menu_image: menu_3
    },
    {
        menu_name: "Componentes de Hardware",
        menu_image: menu_4
    },
    {
        menu_name: "Computadoras y Portatiles",
        menu_image: menu_5
    }
]

export const product_list = [
    {
        _id: "1",
        name: "funda para laptop",
        image: producto1,
        price: 12.99,
        description: "Ytonet - Estuche para computadora portátil, funda para computadora portátil TSA de 15.6 pulgadas, resistente al agua, duradera, para computadora portátil HP, Dell, Lenovo, Asus de 15.6 pulgadas, regalos para hombres y mujeres, gris",
        category: "Accesorios"
    }, 
    {
        _id: "2",
        name: "Cable HDMI",
        image: producto2,
        price: 7.99,
        description: "Cable HDMI, 48 Gbps, de alta velocidad, 8K 60 Hz, 4K 120 Hz, listo para Ethernet, 6 pies (1.83 m), color negro",
        category: "Accesorios"
    },
    {
        _id: "3",
        name: "Cable USB C",
        image: producto3,
        price: 11.99,
        description: "Anker cable USB C de 100 W 3,04 mt, cable USB C a USB C 2.0, cable de carga tipo C de carga rápida para MacBook Pro 2020, iPad Pro 2020, iPad Air 4, Galaxy S20, Pixel, Switch, LG y más (negro)",
        category: "Accesorios"
    },
    {
        _id: "4",
        name: "Unidad Interna de Estado Solido SSD 2 TB Samsung",
        image: producto4,
        price: 159.99,
        description: "SAMSUNG 990 PRO SSD 2TB PCIe 4.0 M.2 2280 Disco duro interno de estado sólido, velocidades de lectura secuenciales de hasta 7,450 MB/s para estaciones de trabajo de alta gama, computación y juegos,",
        category: "Almacenamiento"
    },
    {
        _id: "5",
        name: "Unidad Flash Pendrive 128 GB USB 3.2",
        image: producto5,
        price: 12.61,
        description: "SanDisk Ultra Flair SDCZ73-128G-G46 - Memoria USB 3.2, capacidad de 128GB",
        category: "Almacenamiento"
    },
    {
        _id: "6",
        name: "Disco Duro Externo 1 TB USB 3.2",
        image: producto6,
        price: 104.99,
        description: "Crucial X9 Pro SSD portátil de 1 TB - Hasta 1050 MB/s de lectura y escritura - Resistente al agua y al polvo, PC y Mac, con oferta Mylio Photos+ - Unidad de estado sólido externa USB 3.2 -",
        category: "Almacenamiento"
    }, 
    {
        _id: "7",
        name: "Auriculares inalámbricos de Diadema Razer",
        image: producto7 ,
        price: 129.23,
        description: "Razer Barracuda Auriculares inalámbricos para juegos y móviles (PC, PlayStation, Switch, Android, iOS): 2.4 GHz inalámbrico + Bluetooth - Micrófono integrado con cancelación de ruido - Controladores",
        category: "Audio y Video"
    },
    {
        _id: "8",
        name: "Cámara web Logitech",
        image: producto8,
        price: 79.99,
        description: "Logitech Cámara web C920x HD Pro, videollamadas Full HD de 1080p/30fps, audio estéreo claro, corrección de luz HD, funciona con Skype, Zoom, FaceTime, Hangouts, PC/Mac/Laptop/MacBook/Tableta, color",
        category: "Audio y Video"
    },
    {
        _id: "9",
        name: "Proyector Portatil",
        image: producto9,
        price: 169.97,
        description: "[2024 Enfoque automático más nuevo y Keystone] Proyector con WiFi 6 y Bluetooth 5.2, ALVAR Proyector Portátil para Exteriores 4K, Súper Bajo Ruido, A Prueba de Polvo, 50% Zoom, 600 ANSI Nativo 1080P Proyector TV Stick PPT",
        category: "Audio y Video"
    },
    {
        _id: "10",
        name: "Procesador Intel i9-13900KF",
        image: producto10,
        price: 548.97,
        description: "Intel® Nuevo procesador de escritorio para juegos Core™ i9-14900KF de 24 núcleos (8 núcleos P + 16 núcleos E) - Desbloqueado",
        category: "Componentes de Hardware"
    },
    {
        _id: "11",
        name: "Tarjeta Grafica 4090",
        image: producto11,
        price: 1575.90,
        description: "MSI Tarjeta gráfica GeForce RTX 4090 24GB GDRR6X 384-Bit HDMI/DP Nvlink Tri-Frozr 3 Ada Lovelace Architecture OC (RTX 4090 Gaming X Slim 24G)",
        category: "Componentes de Hardware"
    }, 
    {
        _id: "12",
        name: "Placa Base Gaming",
        image: producto12,
        price: 199.99,
        description: "GIGABYTE B650 AORUS Elite AX - Tarjeta madre para videojuegos compatible con AM5/ LGA 1718/ AMD B650/ ATX/DDR5/ M.2/ PCIe 5.0/ USB 3.2 Gen2X2 Tipo-C/WiFi 6E/LAN de 2.5GbE/Q-Flash Plus/EZ-Latch",
        category: "Componentes de Hardware"
    },
    {
        _id: "13",
        name: "Laptop Gamer Razer Blade 16",
        image: producto13,
        price: 4499.99,
        description: "Razer Portátil para juegos Blade 16 (2024): NVIDIA GeForce RTX 4090 - CPU Intel Core i9-14900HX de 14ª generación - Pantalla OLED QHD+ de 16 pulgadas de 240 Hz - 64 GB de RAM - SSD de 4 TB - Unibody",
        category: "Computadoras y Portatiles"
    }
    ,
    {
        _id: "14",
        name: "Ultrabook Samsung Galaxy Book4 Pro",
        image: producto14,
        price: 2217.99,
        description: "Samsung Laptop Galaxy Book4 Pro Business de 16 pulgadas, computadora PC Wi-Fi, Windows 11 PRO, Intel Core 7 Ultra 155H / 32GB / 1TB, pantalla táctil AMOLED 3K, modelo 2024, NP964XGK-KG1US, gris piedra",
        category: "Computadoras y Portatiles"
    },
    {
        _id: "15",
        name: "Samsung Galaxy Tab S9+",
        image: producto15,
        price: 1190.00,
        description: "SAMSUNG Galaxy Tab S9+ Plus 12.4 512GB WiFi 7 Android AI Tablet, procesador Snapdragon 8 Gen 2, pantalla AMOLED, S Pen incluido, batería de larga duración, cámara de enfoque automático, duradera",
        category: "Computadoras y Portatiles"
    }
]

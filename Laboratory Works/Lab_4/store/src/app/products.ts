// import { Url } from 'url';
//
// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   fullDescription: string;
//   rating: number;
//   image: Url;
//   secondImage: Url;
//   link: Url;
//   categoryId: number;
//
// }

export const products = [
  {
    id: 1,
    name: 'NZXT H510 - CA-H510B-W1 - Compact ATX Mid-Tower PC Gaming Case',
    price: 69.99,
    description: ' Front I/O USB Type-C Port -  Cable Management System - Water-Cooling Ready - White/Black',
    fullDescription: 'New features: Front I/O USB Type-C Port and Tempered glass side panel with single screw installation.\nEnhanced cable management: Our patented cable routing kit with pre-installed channels and straps makes wiring easy and intuitive.',
    rating: 4.8,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71QSKpbzlQL._AC_SL1500_.jpg',
    secondImage: 'https://m.media-amazon.com/images/I/71PAskE-HJL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/NZXT-H510-Management-Water-Cooling-Construction/dp/B07TC76671/ref=pd_vtp_5?pd_rd_w=bjj7F&pf_rd_p=18ed5dd9-54a4-4e64-9eb2-be78385d36ed&pf_rd_r=5XJX6C8FRFBXBV8FVHVR&pd_rd_r=42a7e094-32dd-4507-b94d-dd95d822d685&pd_rd_wg=lvw8H&pd_rd_i=B07TC76671&psc=1',
    categoryId: 5,

  },
  {
    id: 2,
    name: 'Seagate BarraCuda 2TB HDD',
    price: 54.99,
    description: '3.5 Inch SATA 6Gb/s 7200 RPM 256MB Cache 3.5-Inch – Frustration Free Packaging',
    fullDescription: `Store more, compute faster, and do it confidently with the proven reliability of BarraCuda internal hard drives.\n
                      Build a powerhouse gaming computer or desktop setup with a variety of capacities and form factors.\n
                      The go to SATA hard drive solution for nearly every PC application—from music to video to photo editing to PC gaming.\n
                      Confidently rely on internal hard drive technology backed by 20 years of innovation.\n
                      Enjoy long term peace of mind with the included 2 year limited warranty`,
    rating: 4.7,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71Czt9ypIbL._AC_SL1500_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/6165QqoVhgL._AC_SL1000_.jpg',
    link: 'https://www.amazon.com/Seagate-BarraCuda-Internal-Drive-3-5-Inch/dp/B07H2RR55Q/ref=sr_1_6?dchild=1&qid=1614022239&s=computers-intl-ship&sr=1-6',
    categoryId: 3,
  },
  {
    id: 3,
    name: 'AMD Ryzen 5 3600',
    price: 199.99,
    description: '6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler',
    fullDescription: `The world's most advanced processor in the desktop PC gaming segment\n
              Can deliver ultra-fast 100+ FPS performance in the world's most popular games\n
              6 cores and 12 processing threads bundled with the quiet AMD wraith stealth cooler max temps 95°C\n
              4 2 GHz max boost unlocked for overclocking 35 MB of game cache DDR4 3200 support\n
              For the advanced socket AM4 platform can support PCIe 4 0 on x570 motherboards`,
    rating: 4.9,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71WPGXQLcLL._AC_SL1384_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/716hAjT1uUL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/AMD-Ryzen-3600-12-Thread-Processor/dp/B07STGGQ18/ref=pd_bxgy_img_2/130-8393161-9152612?_encoding=UTF8&pd_rd_i=B07STGGQ18&pd_rd_r=f0f5e39f-8da2-44c4-9a23-5771aa6f061a&pd_rd_w=bB3Sc&pd_rd_wg=PSRhU&pf_rd_p=f325d01c-4658-4593-be83-3e12ca663f0e&pf_rd_r=WX4SKQWGD7ASSWH6DGA6&psc=1&refRID=WX4SKQWGD7ASSWH6DGA6',
    categoryId: 1,
  },
  {
    id: 4,
    name: 'Corsair Vengeance LPX 16GB (2x8GB) ',
    price: 88.99,
    description: 'LPX 16GB (2x8GB) DDR4 DRAM 3200MHz C16 Desktop Memory Kit - Black',
    fullDescription: `Hand-sorted memory chips ensure high performance with generous Overclocking headroom.\n
                      Vengeance LPX is optimized for wide compatibility with the latest Intel and AMD DDR4 motherboards.\n
                      A low-profile height of just 34mm ensures that vengeance LPX even fits in most small-form-factor builds.\n
                      A high-performance PCB guarantees strong signal quality and stability for superior Overclocking ability.\n
                      A solid aluminum heatspreader efficiently dissipates heat from each module so that they consistently run at high clock speeds.\n
                      Supports Intel XMP 2.0 for simple one-setting installation and setup.\n
                      Available in multiple colors to match the style of your system.`,
    rating: 4.9,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51kHiPeTSmL._AC_SL1000_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/71OVw2pKtGL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Corsair-Vengeance-3200MHz-Desktop-Memory/dp/B0143UM4TC/ref=pd_bxgy_img_2/130-8393161-9152612?_encoding=UTF8&pd_rd_i=B0143UM4TC&pd_rd_r=e3353b21-e5e3-495e-a4ae-51b4b7e51038&pd_rd_w=Op0TV&pd_rd_wg=1undm&pf_rd_p=f325d01c-4658-4593-be83-3e12ca663f0e&pf_rd_r=79BTFJ7KS9DZ1V314G4A&psc=1&refRID=79BTFJ7KS9DZ1V314G4A',
    categoryId: 4,
  },
  {
    id: 5,
    name: 'Intel Core i7-10700K',
    price: 344.99,
    description: 'Desktop Processor 8 Cores up to 5.1 GHz Unlocked  LGA1200 125W',
    fullDescription: `8 Cores / 16 Threads.\n
                      Socket type LGA 1200.\n
                      Up to 5.1 GHz unlocked.\n
                      Compatible with Intel 400 series chipset based motherboards.\n
                      Intel Turbo Boost Max Technology 3.0 support.\n
                      Intel Optane Memory support.`,
    rating: 4.8,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71P3chRzgNL._AC_SL1500_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/81gXREHrUUL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Intel-i7-10700K-Processor-Unlocked-BX8070110700K/dp/B086ML4XSB/ref=sr_1_3?dchild=1&keywords=intel+core+i7&qid=1614025301&sr=8-3',
    categoryId: 1,
  },
  {
    id: 6,
    name: 'MSI MPG Z490 Gaming Plus Gaming Motherboard',
    price: 179.99,
    description: 'Gaming Plus Gaming Motherboard (ATX, 10th Gen Intel Core, LGA 1200 Socket, DDR4, RGB)',
    fullDescription: `Supports 10th Generation Intel Core / Pentium Gold / Celeron Processors for LGA 1200 socket.\n
                      Supports dual channel DDR4 memory up to 128GB (4800MHz).\n
                      Twin Turbo M.2 with M.2 Shield Frozr delivers transfer speeds of up to 32 GB/s for ultra-fast SSDs.\n
                      Core Boost technology combines optimized power circuit layouts, double CPU power connectors.\n
                      And a digital power design which allows for precise and steady current delivery to the CPU.\n
                      On-board 2.5G LAN plus Gigabit LAN with with Wi-Fi 6 (802.11ax).\n
                      Pre-installed I/O Shielding for convenience and protection from electrostatic discharge`,
    rating: 4.7,
    image: 'https://images-na.ssl-images-amazon.com/images/I/91D8uWFdGDL._AC_SL1500_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/91LzvyNvyeL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/MSI-Gaming-Motherboard-Socket-Mystic/dp/B0876HBFVC/ref=pd_sbs_6?pd_rd_w=WAOK8&pf_rd_p=3ec6a47e-bf65-49f8-80f7-0d7c7c7ce2ca&pf_rd_r=V7Z3VP456GT41V36532P&pd_rd_r=4db669c5-e887-4764-bf5c-c6645ac1de70&pd_rd_wg=H1wcr&pd_rd_i=B0876HBFVC&psc=1',
    categoryId: 5,
  },
  {
    id: 7,
    name: 'Samsung (MZ-V7E1T0BW) 970 EVO SSD 1TB',
    price: 164.99 ,
    description: 'M.2 NVMe Interface Internal Solid State Drive with V-NAND Technology, Black/Red',
    fullDescription: `INNOVATIVE V NAND TECHNOLOGY: Powered by Samsung V NAND Technology.\n
                      The 970 EVO SSD’s NVMe interface (PCIe M.2 2280) offers enhanced bandwidth, low latency, and power efficiency.\n
                      BREAKTHROUGH READ WRITE SPEEDS: Sequential read and write performance levels of up to 3,500MB/s and 2,500MB/s.\n
                      PERFORMANCE OPTIMIZATION AND DATA SECURITY: Seamless cloning and file transfers with Samsung Magician Software.\n
                      The ideal SSD management solution for performance optimization and data security with automatic firmware updates.\n
                      SUPERIOR HEAT DISSIPATION: Samsung’s Dynamic Thermal Guard automatically monitors.\n
                      And maintains optimal operating temperatures to minimize performance drops. Secure Encryption`,
    rating: 4.9,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81BIRmPUAgL._AC_SL1500_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/818nUBqLvTL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Samsung-970-EVO-1TB-MZ-V7E1T0BW/dp/B07BN217QG/ref=sr_1_4?dchild=1&qid=1614025950&s=pc&sr=1-4',
    categoryId: 3,
  },
  {
    id: 8,
    name: 'Corsair RMX Series, RM850x, 850 Watt',
    price: 144.99,
    description: '850 Watt, 80+ Gold Certified, Fully Modular Power Supply (CP-9020180-NA)',
    fullDescription: `80 Plus Gold certified for lower power consumption, less noise and cooler temperatures.\n
                      For maximum cooling surface area and performance.\n
                      Zero RPM fan mode for near silent operation at low to medium loads; Continuous output rated temperature: 50°C.\n
                      100 percent industrial grade, 105°C rated Japanese capacitors ensure unwavering power and reliability.\n
                      Fully modular cables, so you only connect the cables your system needs.`,
    rating: 4.8,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71dj%2B5GQwEL._AC_SL1500_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/716kYIi59wL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/CORSAIR-RM850x-Certified-Modular-Supply/dp/B079H5WNXN/ref=sr_1_36?dchild=1&qid=1614025950&s=pc&sr=1-36',
    categoryId: 5,
  },
  {
    id: 9,
    name: 'Noctua NH-D15',
    price: 99.95,
    description: 'chromax.Black, Dual-Tower CPU Cooler (140mm, Black)',
    fullDescription: `Extra-wide 140mm dual-tower design with 6 heatpipes and dual fans provides maximum quiet cooling efficiency.\n
                      Ideal for overclockers and silent-enthusiasts!\n
                      Dual-fan design with renowned, award-winning NF-A15 140mm fans with Low-Noise Adaptors and PWM for automatic speed control.\n
                      Full cooling performance under load, whisper quiet at idle!`,
    rating: 4.8,
    image: 'https://images-na.ssl-images-amazon.com/images/I/91t48GBv8TL._AC_SL1500_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/91O%2B0CrmvSL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Noctua-NH-D15-chromax-Black-Dual-Tower-Cooler/dp/B07Y87YHRH/ref=sr_1_56?dchild=1&qid=1614026278&s=pc&sr=1-56',
    categoryId: 5,
  },
  {
    id: 10,
    name: 'GIGABYTE GeForce GTX 1660 Ti',
    price: 739.99,
    description: '6G 192-bit GDDR6 DisplayPort 1.4 HDMI 2.0B with Windforce 2X Cooling System Graphic Cards',
    fullDescription: `Extra-wide 140mm dual-tower design with 6 heatpipes and dual fans provides maximum quiet cooling efficiency.\n
                      Ideal for overclockers and silent-enthusiasts!\n
                      Dual-fan design with renowned, award-winning NF-A15 140mm fans with Low-Noise Adaptors.\n
                      PWM for automatic speed control: Full cooling performance under load, whisper quiet at idle!`,
    rating: 4.7,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71PyN--4a6L._AC_SL1500_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/71S4bpjdpkL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/GIGABYTE-GeForce-DisplayPort-Windforce-Gv-N166TOC-6GD/dp/B07NJPKZQG/ref=sr_1_87?dchild=1&qid=1614026291&s=pc&sr=1-87',
    categoryId: 2,
  },
  {
    id: 11,
    name: 'Intel Core i5-10600K',
    price: 229.84,
    description: '6 Cores up to 4.8 GHz Unlocked  LGA1200 (Intel 400 Series Chipset) 125W',
    fullDescription: `6 Cores / 12 Threads\n
                      Socket Type LGA 1200\n
                      Up to 4. 8 GHz Unlocked\n
                      Compatible with Intel 400 series chipset based motherboards\n
                      Intel Optane Memory Support`,
    rating: 4.8,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61xAzEoCuhL._AC_SL1223_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/81gXREHrUUL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Intel-i5-10600K-Desktop-Processor-Unlocked/dp/B086MHSH2C/ref=sr_1_1?dchild=1&keywords=intel+core&qid=1614701423&sr=8-1',
    categoryId: 1,
  },
  {
    id: 12,
    name: 'AMD Ryzen 9 3900X',
    price: 419.99,
    description: '12-core, 24-thread unlocked desktop processor with Wraith Prism LED Cooler',
    fullDescription: `The world's most advanced processor in the desktop PC gaming segment\n
                      Can deliver ultra-fast 100+ FPS performance in the world's most popular games\n
                      12 cores and 24 processing threads, bundled with the AMD Wraith Prism cooler with color controlled LED support\n
                      4.6 GHz max boost, unlocked for overclocking, 70 MB of game cache, DDR 3200 support`,
    rating: 4.9,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71S31CWSs3L._AC_SL1093_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/71uRPWxoAaL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/AMD-Ryzen-3900X-24-Thread-Processor/dp/B07SXMZLP9/ref=sr_1_1?dchild=1&keywords=ryzen&qid=1614701751&sr=8-1',
    categoryId: 1,
  },
  {
    id: 13,
    name: 'AMD Ryzen 7 3800X',
    price: 359.00,
    description: '8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler',
    fullDescription: `The world's most advanced processor in the desktop PC gaming segment\n
                      Can deliver ultra-fast 100+ FPS performance in the world's most popular games\n
                      8 cores and 16 processing threads, bundled with the AMD Wraith Prism cooler with color controlled LED support\m
                      4.5 GHz max boost, unlocked for overclocking, 36 MB of game cache, DDR 3200 support`,
    rating: 4.8,
    image: 'https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SL1092_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/71Lt8vopqLL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/AMD-Ryzen-3800X-16-Thread-Processor/dp/B07SXMZLPJ/ref=sr_1_5?dchild=1&keywords=ryzen&qid=1614701751&sr=8-5',
    categoryId: 1,
  },
  {
    id: 14,
    name: 'Kingston 240GB A400 SATA 3 2.5"',
    price: 34.99,
    description: 'Internal SSD SA400S37/240G - HDD Replacement for Increase Performance',
    fullDescription: `Fast start up, loading and file transfers\n
                      More reliable and durable than a hard drive\n
                      Multiple capacities with space for applications or a hard drive replacement`,
    rating: 4.8,
    image: 'https://images-na.ssl-images-amazon.com/images/I/91RL%2BMhTWbL._AC_SL1500_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/715TdoIQyXL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Kingston-240GB-Solid-SA400S37-240G/dp/B01N5IB20Q/ref=sr_1_3?dchild=1&keywords=ssd&qid=1614702817&sr=8-3',
    categoryId: 3,
  },
  {
    id: 15,
    name: 'Western Digital 1TB WD Blue',
    price: 104.99,
    description: '3D NAND Internal PC SSD - SATA III 6 Gb/s, 2.5"/7mm, Up to 560 MB/s',
    fullDescription: `WD F.I.T. Lab certification for compatibility with a wide range of computers.\n
                      5-year manufacturer's limited warranty\n
                      Free downloadable software to monitor the status of your drive and clone a drive, or backup your data\n
                      An active power draw up to 25% lower than previous generations of WD Blue SSD.`,
    rating: 4.7,
    image: 'https://images-na.ssl-images-amazon.com/images/I/811juXBuTDL._AC_SL1500_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/81XAJACKZyL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Blue-NAND-1TB-SSD-WDS100T2B0A/dp/B073SBQMCX/ref=sr_1_4?dchild=1&keywords=ssd&qid=1614702817&sr=8-4',
    categoryId: 3,
  },
  {
    id: 16,
    name: 'Seagate IronWolf 8TB NAS Internal HDD',
    price: 199.99,
    description: '3.5 Inch SATA 6Gb/s 7200 RPM 256MB Cache for RAID',
    fullDescription: `IronWolf internal hard drives are the ideal solution for up to 8-bay, multi-user NAS environments craving powerhouse performance\n
                      Store more and work faster with a NAS-optimized hard drive providing 8TB and cache of up to 256MB\n
                      Purpose built for NAS enclosures, IronWolf delivers less wear and tear, little to no noise/vibration`,
    rating: 4.7,
    image: 'https://images-na.ssl-images-amazon.com/images/I/815kscMthwL._AC_SL1500_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/81Vk94ypaIL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Seagate-IronWolf-Internal-Hard-Drive/dp/B084ZV4DXB/ref=sr_1_2_sspa?dchild=1&keywords=hhd&qid=1614702971&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzS0U2TTAzOVhKUkJPJmVuY3J5cHRlZElkPUEwNjY4ODkyM1ZMODJGT1pPVDZTMCZlbmNyeXB0ZWRBZElkPUEwMjM4MTk5TDhOSlBKNkRPRVI4JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
    categoryId: 3,
  },
  {
    id: 17,
    name: 'Corsair Vengeance RGB PRO 16GB',
    price: 109.99,
    description: '(2x8GB) DDR4 3200MHz C16 LED Desktop Memory - Black',
    fullDescription: `Dynamic multi zone RGB lighting\n
                      Next generation software\n
                      Custom performance PCB\n
                      Tightly screened memory. Maximum bandwidth and tight response times. SPD Voltage 1.2 Volt`,
    rating: 4.9,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71Kkm5nIRKL._AC_SL1500_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/71%2B80oij6hL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/CORSAIR-Vengeance-3200MHz-Desktop-Memory/dp/B07D1XCKWW/ref=sr_1_4?dchild=1&keywords=ram&qid=1614703386&sr=8-4',
    categoryId: 4,
  },
  {
    id: 18,
    name: 'G.Skill 16GB DDR4 TridentZ RGB',
    price: 108.99,
    description: '3600Mhz PC4-28800 CL18 1.35V Dual Channel Kit (2x8GB) for Intel Z270',
    fullDescription: `Timings of CL18 (18-22-22-42) at 1.35V
                      Unique heatsink design with vibrant RGB LEDs
                      Specifically engineered for the Intel Z270 Kaby Lake platform
                      3600MHz memory speed, PC4-28800, 288 pins per module`,
    rating: 4.7,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61l4EStxhnL._AC_SL1274_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/61LVqCZ%2BmeL._AC_SL1280_.jpg',
    link: 'https://www.amazon.com/G-Skill-TridentZ-3600Mhz-PC4-28800-Channel/dp/B07FKTWKMK/ref=sr_1_6?dchild=1&keywords=ram&qid=1614703386&sr=8-6',
    categoryId: 4,
  },
  {
    id: 19,
    name: 'HyperX Fury 8GB 2666MHz DDR4',
    price: 47.99,
    description: 'CL16 DIMM 1Rx8  Black XMP Desktop Memory Single Stick',
    fullDescription: `Updated low-profile heat spreader design
                      Cost-efficient, high-performance DDR4 upgrade
                      Intel XMP-ready profiles optimized for Intel’s latest chipsets
                      Available in fast speeds up to 3466MHz`,
    rating: 4.7,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61Udx3CqBtL._AC_SL1428_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/61d43MW5g6L._AC_SL1428_.jpg',
    link: 'https://www.amazon.com/HyperX-2666MHz-Desktop-Memory-HX426C16FB3/dp/B07WD5VKTS/ref=sr_1_1?dchild=1&keywords=HyperX+Fury+8GB+2666MHz&qid=1614703885&sr=8-1',
    categoryId: 4,
  },
  {
    id: 20,
    name: 'Corsair Dominator Platinum RGB',
    price: 299.99,
    description: '32GB (2x16GB) DDR4 3466 (PC4-27700) C16 1.35V - Black',
    fullDescription: `Iconic and refined high-performance RGB Memory
                      High speed and Tight Timings
                      Premium craftsmanship
                      12 ultra-bright RGB LEDs per module
                      Patented dual-channel Dhx cooling Technology`,
    rating: 4.9,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61kIVxrx9wL._AC_SL1200_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/61LFhQVTEmL._AC_SL1200_.jpg',
    link: 'https://www.amazon.com/Corsair-Dominator-Platinum-2x16GB-PC4-27700/dp/B07PJXC8JS/ref=sr_1_2?dchild=1&keywords=Corsair+Dominator+Platinum+RGB+32GB&qid=1614703940&sr=8-2',
    categoryId: 4,
  },
  {
    id: 21,
    name: 'Gigabyte X570 AORUS Elite',
    price: 199.99,
    description: 'AMD Ryzen 3000/X570/ATX/PCIe4.0/DDR4/USB3.1/Gaming Motherboard',
    fullDescription: `Supports AMD 3rd Gen Ryzen/ 2nd Gen Ryzen/ Ryzen with Radeon Vega Graphics processors
                      Dual channel ECC/ non ECC unbuffered DDR4, 4 DIMMs
                      True 12 phases digital VRM
                      Extended VRM Heatsink
                      Dual ultra-fast NVMe PCIe 4.0/3.0 x4 M.2 & thermal guard`,
    rating: 4.6,
    image: 'https://images-na.ssl-images-amazon.com/images/I/810KeEYZ8GL._AC_SL1500_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/811SLf-4MfL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/GIGABYTE-X570-AORUS-PCIe4-0-Motherboard/dp/B07SVRZGMX/ref=sr_1_1?dchild=1&keywords=Gigabyte+X570+AORUS+Elite+%28AMD+Ryzen+3000%2FX570&qid=1614704305&sr=8-1',
    categoryId: 5,
  },
  {
    id: 22,
    name: 'GeForce GTX 1050 TI GAMING X 4G',
    price: 419.00,
    description: 'MSI Computer Video Graphic Cards GeForce GTX 1050 TI GAMING X 4G, 4GB',
    fullDescription: `Chipset: NVIDIA GeForce GTX 1050 It
                      Video memory: 4gb gddr5
                      Memory interface: 128-bit; Cores: 768 units
                      Max. resolution: 2560 x 1600 support 3x display monitors.`,
    rating: 4.6,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/81ZZBl6H1xL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/MSI-GeForce-GTX-1050-TI/dp/B01MA62JSZ/ref=sr_1_2?dchild=1&keywords=gpu&qid=1614704391&sr=8-2',
    categoryId: 2,
  },
  {
    id: 23,
    name: 'MSI Gaming GeForce GTX 1660 128-Bit',
    price: 600.00,
    description: 'HDMI/DP 6GB GDRR5 HDCP Support DirectX 12 Dual Fan VR Ready OC',
    fullDescription: `Chipset: NVIDIA GeForce GTX 1660
                      Boost Clock: 1860 MHz
                      Memory Interface: 128-bit
                      Video Memory: 6GB GDDR5`,
    rating: 4.7,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81IUKRmWMyL._AC_SL1500_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/91nPDt4YV-L._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/MSI-GeForce-GTX-1660-6G/dp/B07P9G4QK1/ref=sr_1_7?dchild=1&keywords=gpu&qid=1614704391&sr=8-7',
    categoryId: 2,
  },
  {
    id: 24,
    name: 'ASUS TUF Gaming NVIDIA GeForce GTX 1650 OC Edition',
    price: 459.00,
    description: 'PCIe 3.0, 4GB GDDR6 Memory, HDMI, DisplayPort, DVI-D, 1x 6-pin Power Connector',
    fullDescription: `The ASUS TUF Gaming GeForce GTX 1650 is built with the breakthrough graphics performance.
                      Ultra-fast GDDR6 with over 50% more memory bandwidth for high-speed gaming.
                      Auto Extreme Manufacturing uses automation to enhance reliability.`,
    rating: 4.9,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81YOpThfvuL._AC_SL1500_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/81ZpJ6tvEfL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/ASUS-DisplayPort-Connector-Resistance-Space-Grade/dp/B08G5CQMJ3/ref=sr_1_20?dchild=1&keywords=gpu&qid=1614704405&sr=8-20',
    categoryId: 2,
  },
  {
    id: 25,
    name: 'ASUS ROG Strix AMD Radeon RX 5500XT',
    price: 684.95,
    description: 'Overclocked 8G GDDR6 1440p HDMI DisplayPort Gaming Graphics Card ',
    fullDescription: `The ASUS TUF Gaming GeForce GTX 1650 is built with the breakthrough graphics performance.
                      Ultra-fast GDDR6 with over 50% more memory bandwidth for high-speed gaming.
                      Auto Extreme Manufacturing uses automation to enhance reliability.`,
    rating: 4.5,
    image: 'https://images-na.ssl-images-amazon.com/images/I/41LUBdDr0mL._AC_.jpg',
    secondImage: 'https://images-na.ssl-images-amazon.com/images/I/41z6W%2B-8r-L._AC_.jpg',
    link: 'https://www.amazon.com/ASUS-Overclocked-DisplayPort-Graphics-ROG-STRIX-RX5500XT-O8G-GAMING/dp/B083FM3XPJ/ref=sr_1_62?dchild=1&keywords=gpu&qid=1614704444&sr=8-62',
    categoryId: 2,
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

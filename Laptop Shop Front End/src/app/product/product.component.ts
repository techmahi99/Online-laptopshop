import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  public productList : any ;

  constructor(private api : ApiService, private cartService : CartService){ }
  ngOnInit(): void {
    
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
      
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);

  }

  productArray =
  [
      {
        id :1,
        title:"ACER LAPTOP",
        price: 32489,
        description : "Acer Extensa 15 Lightweight laptop 11th Gen Intel Core i3 Processor with 15.6 Full HD Display-(8GB RAM/256GB SSD/Windows 11 Home/Intel UHD Graphics/1.7kg/Black) EX215-54",
        quantity : 1,
        total : 32489,
        grandTotal : 32489,
        discount : "-26%",
        image : "../assets/acer71.jpg"
  
      },
      {
        id :2,
        title:"LENOVO LAPTOP",
        price: 59990,
        description : "Lenovo IdeaPad Slim 3 Intel Core i5 12th Gen 15.6 FHD Thin & Light Laptop (16GB/512GB SSD/Windows 11/Office/Backlit/2Yr Warranty/3months Game Pass/Arctic Grey/1.63KG),82RK0085IN",
        quantity : 1,
        total : 59990,
        grandTotal : 59990,
        discount : "27%",
        image : "../assets/lenovo9.jpg"
      },
      {
        id :3,
        title:"LG LAPTOP",
        price: 82990,
        description : "LG Gram 16 Intel EVO-[12th Gen Core i7/Win 11/16GB SSD Intel Iris Xe Graphics][Thunderbolt4/USB-C][FHD Webcam+Built-in AI]80WH Battery 3yrs Warrenty (Black,1.14 kg)",
        quantity : 1,
        total : 82990,
        grandTotal : 82990,
        discount : "-45%",
        image : "../assets/lga.jpg"
      },
      {
        id :4,
        title:"XIAOMI LAPTOP",
        price: 58999,
        description : "MI Notebook Pro QHD+IPS AntiGlare Display Intel Core I5-11300h 11th Gen 14Inch Thin & Light Laptop (16GB/512Gb SSD/Iris Xe Graphics /Windows 11 Home /MS Office21/Backlist keyboard/FP Sensor/1.4kg)",
        quantity : 1,
        total : 58999,
        grandTotal : 58999,
        discount : "-24%",
        image : "../assets/mi1.jpg"
  
      },
      {
        id :5,
        title:"ULTIMAS LAPTOP",
        price: 17990,
        description : "Ultimas All-New S151,14.1(35.8 cms)FHD Display,Intel Celeron N4020 Processor,Thin & Light Laptop (4GB/128GB SSD/DOS/Cloud Silver/1.33 kg/RJ45 LAN Port),NU14U2INC43VD-CS",
        quantity : 1,
        total : 17990,
        grandTotal : 17990,
        discount : "-38%",
        image : "../assets/ultimas.jpg"
  
      },
      {
        id :6,
        title:"ASUS LAPTOP",
        price: 25990,
        description : "Asus VivoBook 15,15.6 inch HD,Dual Core Intel Celeron N4020,Thin & Light Laptop(4GB RAM/256GB SSD/Integrated Graphics/Windows 11 Home/Transparent Silver/1.8Kg) X515ma-BRO11W",
        quantity : 1,
        total : 25990,
        grandTotal : 25990,
        discount : "-24%",
        image : "../assets/asus11.jpg"
  
      },
      {
        id :7,
        title:"SAMSUNG LAPTOP",
        price: 76990,
        description : "Samsung Galaxy Book2 (NP750) Intel 12th Gen Core i7 39.6cm (15.6)FHD Thin & Light Laptop (16 GB/512 GB/Window 11/MS Office/Backlit Keyboad/Fingerprint Reader/silver/1.55kg),NP750XED-KC2IN",
        quantity : 1,
        total : 76990,
        grandTotal : 76990,
        discount : "10%",
        image : "../assets/samsung.jpg"
  
      },
      {
        id :8,
        title:"CHUWI LAPTOP",
        price: 33990,
        description : "Chuwi CoreBook X Laptop 1215U 14 inch Intel 12th Gen i3/WiFi 6/3.2 Aspect Ratio/100% sRGB/DDR4 16GB + SSD 512GB/Metal Body ",
        quantity : 1,
        total : 33990,
        grandTotal : 33990,
        discount : "32%",
        image : "../assets/chuwi1.jpg"
  
      },
     
      {
        id :9,
        title:"HP LAPTOP",
        price: 75990,
        description : "HP Pavilion AMD Ryzen 7 5800H 15.6 inches FHD Gaming Laptop(16GB/512GB SSD/Windows 11 Home/NVIDIA RTX 3050 Graphics/MS Office/Shadow Black & Ultra Violet/1.98kg),15-ec2146ax",
        quantity : 1,
        total : 75990,
        grandTotal : 75990,
        discount : "-18%",
        image : "../assets/hp11.jpg"
  
      },
      {
        id :10,
        title:"APPLE LAPTOP",
        price: 309900,
        description : "Apple MacBook Pro Laptop M2 Max chip with 12 Core CPU and 30-core GPU: 33.74cm,32GB Unified Memory ,1TB SSD Storage. Works with iPhone/iPad;Space Grey",
        quantity : 1,
        total : 309900,
        grandTotal : 309900,
        discount : "50%",
        image : "../assets/apple1.jpg"
  
      },
      {
        id :11,
        title:"XIOMI LAPTOP",
        price: 56999,
        description : "Xiaomi Notebook Pro QHD+IPS AntiGlare Display Intel Core I5-11300h 11th Gen 14Inch Thin & Light Laptop (16GB/512Gb SSD/Iris Xe Graphics /Windows 11 Home /MS Office21/Backlist keyboard/FP Sensor/1.4kg)",
        quantity : 1,
        total : 56999,
        grandTotal : 56999,
        discount : "24%",
        image : "../assets/xiomi.jpg"
  
      },
      {
        id :12,
        title:"DELL LAPTOP",
        price: 47200,
        description : "Dell Inspiron 3511 NB ,Intel Core i3-11th Gen/16GB RAM/1TB HDD + 256GB SSD/Windows 11 Home+Office 32GB Pendrive sandisk/FHD Dsplay/Black Color/1yr",
        quantity : 1,
        total : 47200,
        grandTotal : 47200,
        discount : "32%",
        image : "../assets/dell.jpg"
  
      },
     
    
    ];

  
     

}
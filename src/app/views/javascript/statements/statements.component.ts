import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.scss']
})
export class StatementsComponent implements OnInit {

  prev: string = "/javascript/where-to";
  next: string = "/javascript/variables";
  statemenstList: string[] = [" Values (Qiymatlar)", "Operators  (Operatorlar)", "Expressions   (Ifodalar)"
  ,"Keywords   (Kalit so'zlar)", "Comments   (Izohlar)"];
  keywords: string[] = ['var', 'let', 'const', 'if', 'switch', 'for', 'function', 'return', 'try'];
  descriptions: string[] = [
      `O'zgaruvchi e'lon qilish`, 
      `Block o'zgaruvchi e'lon qilish`,
      `Block constant o'zgaruvchi e'lon qilish`,
      `Biror condition bajarailganda amalaga oshiriladigan statement e'lon qilish`,
      `Turli xil variantlar ichidan mosini tanlashda ishlatiladigan statement e'lon qilish`,
      `Loop e'lon qilish`,
      `Funksiya e'lon qilish`,
      `Ma'lum qiymat qaytarib funksiyani yakunlaydigan stataement e'lon qilish`,
      `Error handling block qilishda ishlatiladi`
  ]
  constructor() { }

  ngOnInit(): void {
  }


}

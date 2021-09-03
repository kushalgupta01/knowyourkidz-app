import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZoomMtg } from '@zoomus/websdk';

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();
@Component({
  selector: 'kykz-zoom-integration',
  templateUrl: './zoom-integration.component.html',
  styleUrls: ['./zoom-integration.component.scss']
})
export class ZoomIntegrationComponent implements OnInit{

  public signature:any;
  constructor(private route:ActivatedRoute) {

    
    
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(qp=>{
      let startid=qp['id'];
      if(startid === 'start'){
        this.start();
      }else if (startid === 'join1'){
        this.join1();
      }else{
        this.join2();      }
    })
  }

  
  
  start(){
    this.signature=ZoomMtg.generateSignature({
      meetingNumber:"88569336349",
      apiKey:"lV7KWcVgTsa0Y3m1Gh38FA",
      apiSecret:"aUPmezK4ptX3j2sD77hCmxhlzxaRp1oCjOEP",
      role:"1",
    })

    ZoomMtg.init({
      leaveUrl: "https://www.google.com/",
      isSupportAV: true,
      success: (success:any) => {
        console.log(success)

     
    
        ZoomMtg.join({
          signature: this.signature,
          meetingNumber: "88569336349",
          userName: "Kushal",
          apiKey: "lV7KWcVgTsa0Y3m1Gh38FA",
          userEmail: "kushalgupta111@yahoo.com",
          passWord: "Keepcoding@123#",
          success: (success:any) => {
            console.log(success)
          },
          error: (error:any) => {
            console.log(error)
          }
        })
    
      },
      error: (error:any) => {
        console.log(error)
      }
    })

  }

  join1(){
    this.signature=ZoomMtg.generateSignature({
      meetingNumber:"88569336349",
      apiKey:"lV7KWcVgTsa0Y3m1Gh38FA",
      apiSecret:"aUPmezK4ptX3j2sD77hCmxhlzxaRp1oCjOEP",
      role:"0",
    })

    ZoomMtg.init({
      leaveUrl: "https://www.google.com/",
      isSupportAV: true,
      success: (success:any) => {
        console.log(success)

     
    
        ZoomMtg.join({
          signature: this.signature,
          meetingNumber: "88569336349",
          userName: "Mayur Gehani",
          apiKey: "lV7KWcVgTsa0Y3m1Gh38FA",
          userEmail: "kushalgupta111@yahoo.com",
          passWord: "Keepcoding@123#",
          success: (success:any) => {
            console.log(success)
          },
          error: (error:any) => {
            console.log(error)
          }
        })
    
      },
      error: (error:any) => {
        console.log(error)
      }
    })
  }
  join2(){
    this.signature=ZoomMtg.generateSignature({
      meetingNumber:"88569336349",
      apiKey:"lV7KWcVgTsa0Y3m1Gh38FA",
      apiSecret:"aUPmezK4ptX3j2sD77hCmxhlzxaRp1oCjOEP",
      role:"0",
    })

    ZoomMtg.init({
      leaveUrl: "https://www.google.com/",
      isSupportAV: true,
      success: (success:any) => {
        console.log(success)

     
    
        ZoomMtg.join({
          signature: this.signature,
          meetingNumber: "88569336349",
          userName: "Ashish Gehani",
          apiKey: "lV7KWcVgTsa0Y3m1Gh38FA",
          userEmail: "kushalgupta111@yahoo.com",
          passWord: "Keepcoding@123#",
          success: (success:any) => {
            console.log(success)
          },
          error: (error:any) => {
            console.log(error)
          }
        })
    
      },
      error: (error:any) => {
        console.log(error)
      }
    })
  }

  detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
  }

}

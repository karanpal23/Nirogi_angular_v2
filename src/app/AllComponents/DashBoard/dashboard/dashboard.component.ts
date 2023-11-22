import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  @ViewChild('headerTemplate') headerFooterBody: ElementRef;
  @ViewChild('footer') footer: ElementRef;

  title: string = '';

  constructor(private router: Router,private http:HttpClient,private meta :Meta) {}

  ngOnInit(): void {


     // Set Content Security Policy header
     const cspValue = "your-csp-directive-value";
     this.meta.addTag({ name: 'Content-Security-Policy', content: `your-csp-directive-name ${cspValue}` });
    this.setHeader();

  }

 
  setHeader(): void {
    let path = this.router.url.split('/')[1];
    this.title = decodeURIComponent(path);
  } 
}

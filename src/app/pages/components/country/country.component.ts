import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isConstructorDeclaration } from 'typescript';
import { HelperService } from '../../shared/helper.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  countryName: string;
  countryProperties: object;

  constructor(private route: ActivatedRoute, private helper: HelperService) {}

  ngOnInit(): void {
    this.getCountryName();
    this.getCountryProperties();
    console.log(this.getCountryProperties());
  }

  getCountryName(): void {
    this.route.paramMap.pipe().subscribe((res) => {
      this.countryName = res.get('country');
    });
  }

  getCountryProperties(): void {
    this.helper
      .getCountry(this.countryName)
      .subscribe((res) => (this.countryProperties = res));
  }
}

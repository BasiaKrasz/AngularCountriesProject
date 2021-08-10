import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from '../../shared/helper.service';

enum Continent {
  'Asia',
  'Europe',
  'Africa',
  'Americas',
  'Oceania',
}

type ContinentInterface = keyof typeof Continent;

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.scss'],
})
export class ContinentComponent implements OnInit {
  continentName: ContinentInterface;
  countriesList;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private helper: HelperService
  ) {}

  ngOnInit(): void {
    this.getContinentName();
    this.getRegion();
  }

  getContinentName(): void {
    this.route.paramMap.pipe().subscribe((res) => {
      this.continentName = res.get('region') as ContinentInterface;
    });
  }
  countryNavigate(name: string): void {
    this.router.navigate(['/country', name]);
  }
  getRegion(): void {
    this.helper
      .getCountryList(this.continentName)
      .subscribe((res) => (this.countriesList = res));
  }
}

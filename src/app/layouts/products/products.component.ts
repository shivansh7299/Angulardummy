import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-products",
  template: `
    <div class="container">
      <div class="section">
        <!--   Icon Section   -->
        <div class="row">
          <!-- Start : row -->

          <!-- Empty the 'row' div -->
          <p>145 : {{ 145 | sqrt }}</p>
          <div align="center">
            <b></b>
          </div>

          <ul>
            <li *ngFor="let i of mobParts">
              <div class="col s12 m4">
                <div class="card">
                  <div class="card-image">
                    <img src="./../assets/img/1.jpeg" />
                    <span class="card-title">{{ name }}</span>
                  </div>
                  <div class="card-content">
                    <div>
                      <p>Name : {{ i.sname | uppercase }}</p>
                    </div>
                    <div *ngIf="i.id === 120; else pidw">
                      <p>ID : {{ i.id }}</p>
                    </div>
                    <div>
                      <p>Money : {{ i.money | currency: "INR" }}</p>
                    </div>
                    <div>
                      <p>SliceName : {{ i.sname | slice: 0:5 | uppercase }}</p>
                    </div>
                    <div>
                      Message : {{ i.message | i18nPlural: messageMapping }}
                    </div>
                    <div>
                      <p>
                        Insurance Deposite :
                        {{ i.money | offer: i.per | currency: "INR" }}
                      </p>
                    </div>
                    <div>
                      <p>Percentage : {{ i.per | percentage }}</p>
                    </div>
                    <div>
                      <p>Date of Admission : {{ i.DOA | date }}</p>
                    </div>
                    <ng-template #pidw>
                      <p>other IDs : {{ i.id }}</p>
                    </ng-template>
                    <div *ngIf="i.money <= 7500; else more">
                      <p>He wants {{ 7500 - i.money | currency: "INR" }}</p>
                    </div>
                    <ng-template #more>
                      <p>He has extra {{ i.money - 7500 | currency: "INR" }}</p>
                    </ng-template>
                    <div
                      [ngStyle]="{
                        display: i.st === 'updated' ? 'inline-block' : 'none'
                      }"
                    >
                      <img src="./../assets/download.png" width="16" />
                    </div>
                    <div [ngSwitch]="i.type">
                      <div *ngSwitchCase="'higherEdu'">
                        <img
                          src="data:image/png;base64,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"
                          width="60"
                        />
                      </div>
                      <div *ngSwitchCase="'lowerEdu'">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSu6iUeg1zMWs6OuPCLCPmRV2nQZPDTQi18ukXPTy6P-cSow_2e"
                          width="60"
                        />
                      </div>
                      <div *ngSwitchDefault>
                        <img
                          src="https://cdn.clipart.email/a54dbebafb786dd04e3a9b6742cd2229_no-education-sign-square-academic-cap-black-vector-icon-vector-_450-470.jpeg"
                          width="60"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="card-action">
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <!-- End : row -->
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  name = "Shivansh";
  mobParts = [
    {
      sname: "Daredevil72",
      id: 120,
      money: 5000,
      st: "updated",
      type: "higherEdu",
      DOA: "2 / 8 / 2019",
      per: 65.9,
      message: ["Message 1"]
    },
    {
      sname: "Rambo20",
      id: 130,
      money: 6000,
      st: "notupdated",
      type: "lowerEdu",
      DOA: "1 / 16 / 2020",
      per: 88.5,
      message: ["1"]
    },
    {
      sname: "GhostMan22",
      id: 140,
      money: 8000,
      st: "updated",
      type: "",
      DOA: "11 / 18 / 2017",
      per: 0.775,
      message: ["0"]
    }
  ];
  messageMapping: { [k: string]: string } = {
    "=0": "No messages.",
    "=1": "One message.",
    other: "# messages."
  };
}

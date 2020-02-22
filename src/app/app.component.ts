import { Component } from "@angular/core";
@Component({
  selector: "app-demo",
  templateUrl: "app.component.html",
  styles: [
    `
      #aa {
        display: block;
        background-color: lightblue;
      }
      #bb {
        background-color: lightblue;
        border: 3px solid blue;
      }
      #cc {
        background-color: lavender;
      }
      #dd {
        color: blue;
      }
    `
  ]
})
export class FirstComponent {
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
      message: "Message 0"
    },
    {
      sname: "GhostMan22",
      id: 140,
      money: 8000,
      st: "updated",
      type: "",
      DOA: "11 / 18 / 2017",
      per: 0.775,
      message: "Message 34"
    }
  ];
  messageMapping: { [k: string]: string } = {
    "=0": "No messages.",
    "=1": "One message.",
    other: "# messages."
  };
}

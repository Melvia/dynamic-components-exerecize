import {AfterViewInit, Component, ViewChild, ViewContainerRef} from '@angular/core';
import {DynamicComponent} from "./components/dynamic/dynamic.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  toggler: boolean = true;

  @ViewChild('example', {read: ViewContainerRef}) container!: ViewContainerRef;

  constructor(private viewContainer: ViewContainerRef) {

  }

  showComponent() {
    this.viewContainer.createComponent(DynamicComponent);
  }

  //вынесение в бандл и динамическая подгрузка компонента
  // async asyncShowComponent() {
  //   const { DynamicComponent } = await import('./components/dynamic/dynamic.component');
  //   this.viewContainer.createComponent(DynamicComponent);
  // }

  ngAfterViewInit() {
   // // const component = this.container.createComponent(DynamicComponent);
   //  const newComponent = this.container.createComponent(DynamicComponent);
   //  //перезапись без onChanges
   //
   //  // newComponent.instance.name = 'new name';
   //  // newComponent.instance.callName();
   //
   //  newComponent.setInput('name', 'New name');
   //
   //  const dataInput = newComponent.instance.callName();
   //  console.log("dataInput", dataInput);

  }


}

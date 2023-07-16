import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53121Page } from './s132123.page';

describe('S53121Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53121Page;
  let fixture: ComponentFixture<S53121Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53121Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53121Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46065p1Page } from './s46065p1.page';

describe('S46065p1Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46065p1Page;
  let fixture: ComponentFixture<S46065p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46065p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46065p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

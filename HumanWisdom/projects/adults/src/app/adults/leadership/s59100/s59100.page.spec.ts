import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59100Page } from './s59100.page';

describe('S59100Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59100Page;
  let fixture: ComponentFixture<S59100Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59100Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

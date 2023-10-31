import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62025Page } from './s62025.page';

describe('S62025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62025Page;
  let fixture: ComponentFixture<S62025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

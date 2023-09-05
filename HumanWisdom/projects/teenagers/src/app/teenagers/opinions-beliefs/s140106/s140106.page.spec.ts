import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140106Page } from './s140106.page';

describe('S140106Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140106Page;
  let fixture: ComponentFixture<S140106Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140106Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140106Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

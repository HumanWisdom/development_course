import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45152Page } from './s45152.page';

describe('S45152Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45152Page;
  let fixture: ComponentFixture<S45152Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45152Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45152Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

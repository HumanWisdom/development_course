import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132106Page } from './s132106.page';

describe('S132106Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132106Page;
  let fixture: ComponentFixture<S132106Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132106Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132106Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

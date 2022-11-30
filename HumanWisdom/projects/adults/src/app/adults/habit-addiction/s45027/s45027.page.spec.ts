import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45027Page } from './s45027.page';

describe('S45027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45027Page;
  let fixture: ComponentFixture<S45027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

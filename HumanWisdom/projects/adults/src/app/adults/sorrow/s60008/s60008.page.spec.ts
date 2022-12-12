import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60008Page } from './s60008.page';

describe('S60008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60008Page;
  let fixture: ComponentFixture<S60008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

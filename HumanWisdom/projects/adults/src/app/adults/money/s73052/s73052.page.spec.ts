import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73052Page } from './s73052.page';

describe('S73052Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73052Page;
  let fixture: ComponentFixture<S73052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
